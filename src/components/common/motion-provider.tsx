"use client";

import { MotionConfig } from "motion/react";

import { motionEase } from "@/lib/motion";

type MotionProviderProps = {
  children: React.ReactNode;
};

const MotionProvider = ({ children }: MotionProviderProps) => {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.55, ease: motionEase }}
    >
      {children}
    </MotionConfig>
  );
};

export default MotionProvider;
