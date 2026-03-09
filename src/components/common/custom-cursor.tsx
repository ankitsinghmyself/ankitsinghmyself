"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

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
  const shouldReduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const glowX = useSpring(cursorX, {
    stiffness: 220,
    damping: 32,
    mass: 0.65,
  });
  const glowY = useSpring(cursorY, {
    stiffness: 220,
    damping: 32,
    mass: 0.65,
  });

  useEffect(() => {
    if (shouldReduceMotion) {
      setEnabled(false);
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
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);

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
  }, [cursorX, cursorY, enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="custom-cursor-glow"
        animate={{
          opacity: visible ? (interactive ? 0.32 : 0.22) : 0,
          scale: visible ? (interactive ? 1.08 : 1) : 0.55,
        }}
        style={{ x: glowX, y: glowY }}
        transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        aria-hidden="true"
        className="custom-cursor-ring"
        animate={{
          opacity: visible ? 1 : 0,
          scale: interactive ? 1.08 : 1,
        }}
        style={{ x: cursorX, y: cursorY }}
        transition={{ duration: 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span
          className="custom-cursor-dot"
          animate={{
            scale: interactive ? 0.94 : 1,
          }}
          transition={{ duration: 0.12, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
