"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { useIdleActivation } from "@/hooks/use-idle-activation";

const CustomCursor = dynamic(() => import("./custom-cursor"), { ssr: false });

const CustomCursorGate = () => {
  const [canLoadCursor, setCanLoadCursor] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );

    const syncCapability = () => {
      setCanLoadCursor(media.matches);
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
    enabled: canLoadCursor,
    delayMs: 400,
    timeout: 1800,
  });

  if (!isActive) {
    return null;
  }

  return <CustomCursor />;
};

export default CustomCursorGate;
