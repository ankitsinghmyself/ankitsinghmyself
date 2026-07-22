"use client";

import { useEffect, useRef, useState } from "react";

type Orb = {
  color: string;
  phaseX: number;
  phaseY: number;
  radiusX: number;
  radiusY: number;
  size: number;
  x: number;
  y: number;
};

const defaultOrbs: Orb[] = [
  {
    color: "rgba(124, 77, 255, 0.25)",
    phaseX: 0,
    phaseY: Math.PI * 0.5,
    radiusX: 60,
    radiusY: 40,
    size: 400,
    x: 0,
    y: 0,
  },
  {
    color: "rgba(86, 204, 242, 0.18)",
    phaseX: Math.PI * 0.7,
    phaseY: 0,
    radiusX: 80,
    radiusY: 50,
    size: 450,
    x: 0,
    y: 0,
  },
  {
    color: "rgba(255, 45, 154, 0.12)",
    phaseX: Math.PI * 1.3,
    phaseY: Math.PI * 0.9,
    radiusX: 50,
    radiusY: 35,
    size: 350,
    x: 0,
    y: 0,
  },
  {
    color: "rgba(125, 211, 252, 0.10)",
    phaseX: Math.PI * 0.3,
    phaseY: Math.PI * 1.2,
    radiusX: 100,
    radiusY: 50,
    size: 320,
    x: 0,
    y: 0,
  },
  {
    color: "rgba(124, 77, 255, 0.08)",
    phaseX: Math.PI * 1.1,
    phaseY: Math.PI * 0.3,
    radiusX: 90,
    radiusY: 70,
    size: 360,
    x: 0,
    y: 0,
  },
];

const HeroGlowOrbs = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<Orb[]>(defaultOrbs);
  const frameRef = useRef(0);
  const [, setTick] = useState(0);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    orbsRef.current = orbsRef.current.map((orb, i) => {
      const positions = [
        { x: width * 0.22, y: height * 0.3 },
        { x: width * 0.78, y: height * 0.28 },
        { x: width * 0.5, y: height * 0.55 },
        { x: width * 0.1, y: height * 0.6 },
        { x: width * 0.9, y: height * 0.65 },
      ];
      return {
        ...orb,
        radiusX: width * (i === 0 ? 0.08 : i === 1 ? 0.1 : i === 2 ? 0.06 : i === 3 ? 0.14 : 0.12),
        radiusY: height * (i === 0 ? 0.06 : i === 1 ? 0.08 : i === 2 ? 0.05 : i === 3 ? 0.07 : 0.1),
        size: Math.min(width, height) * (i === 0 ? 0.35 : i === 1 ? 0.4 : i === 2 ? 0.3 : i === 3 ? 0.28 : 0.32),
        ...positions[i],
      };
    });

    setTick(1);
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let startTime = performance.now();
    let running = true;

    const animate = (timestamp: number) => {
      if (!running) return;
      const elapsed = (timestamp - startTime) * 0.00015;

      const orbs = wrapper.querySelectorAll<HTMLDivElement>(".hero-orb");
      orbs.forEach((orb, i) => {
        const o = orbsRef.current[i];
        if (!o) return;

        const x = o.x + Math.sin(elapsed + o.phaseX) * o.radiusX;
        const y = o.y + Math.cos(elapsed + o.phaseY) * o.radiusY;

        orb.style.transform = `translate(${x - o.size / 2}px, ${y - o.size / 2}px)`;
      });

      frameRef.current = window.requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      running = false;
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {orbsRef.current.map((orb, i) => (
        <div
          key={i}
          className="hero-orb absolute rounded-full blur-3xl will-change-transform"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 72%)`,
            opacity: 0.9,
          }}
        />
      ))}
    </div>
  );
};

export default HeroGlowOrbs;

