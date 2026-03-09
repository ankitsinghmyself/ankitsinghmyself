"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const interactiveSelector = [
  "a",
  "button",
  "[role='button']",
  "label",
  "summary",
  "input:not([type='text']):not([type='email']):not([type='search']):not([type='password']):not([type='url']):not([type='tel']):not([type='number'])",
  "select",
  "[data-cursor='interactive']",
].join(",");

const textInputSelector = [
  "input[type='text']",
  "input[type='email']",
  "input[type='search']",
  "input[type='password']",
  "input[type='url']",
  "input[type='tel']",
  "input[type='number']",
  "textarea",
  "[contenteditable='true']",
].join(",");

const CustomCursor = () => {
  const shouldReduceMotion = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    if (shouldReduceMotion) {
      setEnabled(false);
      setVisible(false);
      setInteractive(false);
      return;
    }

    const media = window.matchMedia("(pointer: fine)");
    const syncCapability = () => {
      setEnabled(media.matches);
      if (!media.matches) {
        setVisible(false);
        setInteractive(false);
      }
    };

    syncCapability();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", syncCapability);

      return () => {
        media.removeEventListener("change", syncCapability);
      };
    }

    media.addListener(syncCapability);

    return () => {
      media.removeListener(syncCapability);
    };
  }, [shouldReduceMotion]);

  useEffect(() => {
    document.body.dataset.customCursor = enabled ? "true" : "false";

    return () => {
      document.body.dataset.customCursor = "false";
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });

      setVisible((current) => current || true);

      const target = event.target instanceof Element ? event.target : null;
      setInteractive(
        Boolean(target?.closest(interactiveSelector)) &&
          !Boolean(target?.closest(textInputSelector)),
      );
    };

    const handlePointerLeave = () => {
      setVisible(false);
      setInteractive(false);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  const glowStyle: CSSProperties = {
    opacity: visible ? (interactive ? 0.32 : 0.22) : 0,
    transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${
      visible ? (interactive ? 1.08 : 1) : 0.55
    })`,
  };

  const ringStyle: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${
      interactive ? 1.08 : 1
    })`,
  };

  const dotStyle: CSSProperties = {
    transform: `scale(${interactive ? 0.94 : 1})`,
  };

  return (
    <>
      <div aria-hidden="true" className="custom-cursor-glow" style={glowStyle} />
      <div aria-hidden="true" className="custom-cursor-ring" style={ringStyle}>
        <span className="custom-cursor-dot" style={dotStyle} />
      </div>
    </>
  );
};

export default CustomCursor;
