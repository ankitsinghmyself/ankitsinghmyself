"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { useIdleActivation } from "@/hooks/use-idle-activation";

const BackgroundParticleField = dynamic(
  () => import("./background-particle-field"),
  { ssr: false },
);

const DeferredBackgroundParticleField = () => {
  const [canEnhance, setCanEnhance] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 768px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );

    const syncCapability = () => {
      setCanEnhance(media.matches);
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
  }, []);

  const isActive = useIdleActivation({
    enabled: canEnhance,
    delayMs: 240,
    timeout: 1400,
  });

  if (!isActive) {
    return null;
  }

  return <BackgroundParticleField />;
};

export default DeferredBackgroundParticleField;
