import type { Transition, Variants } from "motion/react";

export const motionEase = [0.22, 1, 0.36, 1] as const;

export const viewport = {
  once: true,
  amount: 0.2,
} as const;

export const fadeUp = (delay = 0, distance = 26): Variants => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: motionEase,
    },
  },
});

export const scaleIn = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: motionEase,
    },
  },
});

export const staggerContainer = (
  delayChildren = 0,
  staggerChildren = 0.12,
): Variants => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren,
      staggerChildren,
    },
  },
});

export const floatingTransition = (duration = 8): Transition => ({
  duration,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
});
