"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

type HeroParticleNameProps = {
  text: string;
};

type Bounds = {
  height: number;
  width: number;
};

type Particle = {
  alpha: number;
  phase: number;
  radius: number;
  tint: [number, number, number];
  tx: number;
  ty: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
};

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

const lerp = (start: number, end: number, progress: number) => {
  return start + (end - start) * progress;
};

const resolveTint = (ratio: number): [number, number, number] => {
  const safeRatio = clamp(ratio, 0, 1);

  if (safeRatio <= 0.5) {
    const progress = safeRatio / 0.5;

    return [
      Math.round(lerp(125, 124, progress)),
      Math.round(lerp(211, 77, progress)),
      Math.round(lerp(252, 255, progress)),
    ];
  }

  const progress = (safeRatio - 0.5) / 0.5;

  return [
    Math.round(lerp(124, 255, progress)),
    Math.round(lerp(77, 45, progress)),
    Math.round(lerp(255, 154, progress)),
  ];
};

const rgba = (tint: [number, number, number], alpha: number) => {
  return `rgba(${tint[0]}, ${tint[1]}, ${tint[2]}, ${alpha})`;
};

const splitName = (text: string) => {
  const words = text.trim().split(/\s+/);

  if (words.length <= 1) {
    return [text, ""] as const;
  }

  return [words.slice(0, -1).join(" "), words[words.length - 1] ?? ""] as const;
};

const HeroParticleName = ({ text }: HeroParticleNameProps) => {
  const shouldReduceMotion = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [bounds, setBounds] = useState<Bounds>({ width: 0, height: 0 });
  const [canvasReady, setCanvasReady] = useState(false);
  const [firstName, lastName] = splitName(text);

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
      setCanvasReady(false);
      return;
    }

    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;

    if (!wrapper || !canvas || bounds.width === 0 || bounds.height === 0) {
      return;
    }

    let animationFrameId = 0;
    let cancelled = false;

    const drawParticleText = async () => {
      if ("fonts" in document) {
        await document.fonts.ready;
      }

      if (cancelled) {
        return;
      }

      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const width = bounds.width;
      const height = bounds.height;
      const context = canvas.getContext("2d");

      if (!context) {
        setCanvasReady(false);
        return;
      }

      canvas.width = Math.round(width * devicePixelRatio);
      canvas.height = Math.round(height * devicePixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      const sourceCanvas = document.createElement("canvas");
      const sourceContext = sourceCanvas.getContext("2d");

      if (!sourceContext) {
        setCanvasReady(false);
        return;
      }

      sourceCanvas.width = width;
      sourceCanvas.height = height;

      const computedStyles = getComputedStyle(wrapper);
      const fontFamily = computedStyles.fontFamily || "sans-serif";
      const fontWeight = 800;
      const minimumFontSize = width < 420 ? 40 : 54;
      const maxTextWidth = width * 0.92;
      let fontSize = Math.min(height * 0.8, width * 0.21);

      sourceContext.textAlign = "center";
      sourceContext.textBaseline = "middle";

      while (fontSize > minimumFontSize) {
        sourceContext.font = `${fontWeight} ${fontSize}px ${fontFamily}`;

        if (sourceContext.measureText(text).width <= maxTextWidth) {
          break;
        }

        fontSize -= 4;
      }

      sourceContext.clearRect(0, 0, width, height);
      sourceContext.fillStyle = "#ffffff";
      sourceContext.fillText(text, width / 2, height * 0.56);

      const gap = width < 480 ? 5 : width < 900 ? 6 : 7;
      const imageData = sourceContext.getImageData(0, 0, width, height).data;
      const particles: Particle[] = [];

      // Sample the rendered text into a particle field that can assemble in place.
      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          const alpha = imageData[(y * width + x) * 4 + 3];

          if (alpha < 120) {
            continue;
          }

          const angle = Math.random() * Math.PI * 2;
          const scatterRadius =
            Math.max(width, height) * (0.26 + Math.random() * 0.92);

          particles.push({
            alpha: 0.72 + Math.random() * 0.24,
            phase: Math.random() * Math.PI * 2,
            radius: width < 480 ? 1.15 : width < 900 ? 1.35 : 1.55,
            tint: resolveTint(x / Math.max(width - 1, 1)),
            tx: x,
            ty: y,
            vx: (Math.random() - 0.5) * 1.8,
            vy: (Math.random() - 0.5) * 1.8,
            x:
              width / 2 +
              Math.cos(angle) * scatterRadius +
              (Math.random() - 0.5) * width * 0.08,
            y:
              height / 2 +
              Math.sin(angle) * scatterRadius * 0.62 +
              (Math.random() - 0.5) * height * 0.12,
          });
        }
      }

      if (particles.length === 0) {
        setCanvasReady(false);
        return;
      }

      setCanvasReady(true);

      const startedAt = performance.now();

      const render = (timestamp: number) => {
        if (cancelled) {
          return;
        }

        const elapsed = timestamp - startedAt;
        const settled = elapsed > 1650;
        const attraction = settled ? 0.018 : 0.032;
        const friction = settled ? 0.8 : 0.86;

        context.clearRect(0, 0, width, height);

        for (const particle of particles) {
          const dx = particle.tx - particle.x;
          const dy = particle.ty - particle.y;

          particle.vx += dx * attraction;
          particle.vy += dy * attraction;
          particle.vx *= friction;
          particle.vy *= friction;
          particle.x += particle.vx;
          particle.y += particle.vy;

          const twinkle =
            settled
              ? 0.9 + Math.sin(timestamp * 0.0032 + particle.phase) * 0.08
              : 0.86 + Math.sin(timestamp * 0.0024 + particle.phase) * 0.14;

          context.beginPath();
          context.fillStyle = rgba(particle.tint, particle.alpha * 0.16 * twinkle);
          context.arc(particle.x, particle.y, particle.radius * 2.8, 0, Math.PI * 2);
          context.fill();

          context.beginPath();
          context.fillStyle = rgba(particle.tint, particle.alpha * twinkle);
          context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          context.fill();
        }

        animationFrameId = window.requestAnimationFrame(render);
      };

      animationFrameId = window.requestAnimationFrame(render);
    };

    void drawParticleText();

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [bounds.height, bounds.width, shouldReduceMotion, text]);

  return (
    <div
      ref={wrapperRef}
      className="relative mt-4 h-[96px] w-full sm:h-[132px] lg:h-[172px]"
    >
      <h1 className="sr-only">{text}</h1>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={`h-full w-full transition-opacity duration-500 ${
          canvasReady && !shouldReduceMotion ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          canvasReady && !shouldReduceMotion ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="text-5xl font-semibold tracking-[-0.07em] text-white sm:text-7xl lg:text-[5.7rem]">
          {firstName}
          {lastName ? (
            <>
              {" "}
              <span className="neo-gradient-text">{lastName}</span>
            </>
          ) : null}
        </span>
      </div>
    </div>
  );
};

export default HeroParticleName;
