"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

type Bounds = {
  height: number;
  width: number;
};

type Particle = {
  alpha: number;
  phase: number;
  radius: number;
  tint: [number, number, number];
  vx: number;
  vy: number;
  x: number;
  y: number;
};

const palette: Array<[number, number, number]> = [
  [125, 211, 252],
  [124, 77, 255],
  [255, 45, 154],
  [255, 255, 255],
];

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

const rgba = (tint: [number, number, number], alpha: number) => {
  return `rgba(${tint[0]}, ${tint[1]}, ${tint[2]}, ${alpha})`;
};

const BackgroundParticleField = () => {
  const shouldReduceMotion = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [bounds, setBounds] = useState<Bounds>({ width: 0, height: 0 });

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) {
      return;
    }

    const syncBounds = () => {
      const nextBounds = {
        width: wrapper.clientWidth,
        height: wrapper.clientHeight,
      };

      setBounds((currentBounds) => {
        if (
          currentBounds.width === nextBounds.width &&
          currentBounds.height === nextBounds.height
        ) {
          return currentBounds;
        }

        return nextBounds;
      });
    };

    syncBounds();

    const observer = new ResizeObserver(syncBounds);
    observer.observe(wrapper);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const canvas = canvasRef.current;

    if (!canvas || bounds.width === 0 || bounds.height === 0) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const width = bounds.width;
    const height = bounds.height;
    const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const connectionDistance = width < 640 ? 88 : 116;
    const particleCount = clamp(
      Math.round((width * height) / 24000),
      30,
      width < 640 ? 48 : 76,
    );

    canvas.width = Math.round(width * devicePixelRatio);
    canvas.height = Math.round(height * devicePixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

    const particles: Particle[] = Array.from({ length: particleCount }, (_, index) => {
      const tint = palette[index % palette.length];

      return {
        alpha: 0.16 + Math.random() * 0.28,
        phase: Math.random() * Math.PI * 2,
        radius: width < 640 ? 0.8 + Math.random() * 0.9 : 1 + Math.random() * 1.2,
        tint,
        vx: (Math.random() - 0.5) * (width < 640 ? 0.08 : 0.12),
        vy: (Math.random() - 0.5) * (width < 640 ? 0.06 : 0.1),
        x: Math.random() * width,
        y: Math.random() * height,
      };
    });

    let animationFrameId = 0;

    const render = (timestamp: number) => {
      context.clearRect(0, 0, width, height);

      const positions = particles.map((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -24 || particle.x > width + 24) {
          particle.vx *= -1;
          particle.x = clamp(particle.x, -24, width + 24);
        }

        if (particle.y < -24 || particle.y > height + 24) {
          particle.vy *= -1;
          particle.y = clamp(particle.y, -24, height + 24);
        }

        return {
          ...particle,
          drawX: particle.x + Math.sin(timestamp * 0.00028 + particle.phase) * 8,
          drawY: particle.y + Math.cos(timestamp * 0.00024 + particle.phase) * 6,
        };
      });

      for (let index = 0; index < positions.length; index += 1) {
        const particle = positions[index];

        for (let inner = index + 1; inner < positions.length; inner += 1) {
          const otherParticle = positions[inner];
          const dx = otherParticle.drawX - particle.drawX;
          const dy = otherParticle.drawY - particle.drawY;
          const distance = Math.hypot(dx, dy);

          if (distance >= connectionDistance) {
            continue;
          }

          const alpha =
            (1 - distance / connectionDistance) *
            (width < 640 ? 0.05 : 0.065);

          context.beginPath();
          context.strokeStyle = rgba(particle.tint, alpha);
          context.lineWidth = 0.6;
          context.moveTo(particle.drawX, particle.drawY);
          context.lineTo(otherParticle.drawX, otherParticle.drawY);
          context.stroke();
        }
      }

      for (const particle of positions) {
        const twinkle = 0.72 + Math.sin(timestamp * 0.0026 + particle.phase) * 0.22;

        context.beginPath();
        context.fillStyle = rgba(particle.tint, particle.alpha * 0.16 * twinkle);
        context.arc(
          particle.drawX,
          particle.drawY,
          particle.radius * 3.3,
          0,
          Math.PI * 2,
        );
        context.fill();

        context.beginPath();
        context.fillStyle = rgba(particle.tint, particle.alpha * twinkle);
        context.arc(
          particle.drawX,
          particle.drawY,
          particle.radius,
          0,
          Math.PI * 2,
        );
        context.fill();
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    animationFrameId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [bounds.height, bounds.width, shouldReduceMotion]);

  return (
    <div ref={wrapperRef} aria-hidden="true" className="background-particle-field">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
};

export default BackgroundParticleField;
