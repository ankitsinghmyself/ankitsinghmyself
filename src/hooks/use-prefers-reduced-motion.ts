"use client";

import { useEffect, useState } from "react";

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => {
      setPrefersReducedMotion(media.matches);
    };

    syncPreference();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", syncPreference);

      return () => {
        media.removeEventListener("change", syncPreference);
      };
    }

    media.addListener(syncPreference);

    return () => {
      media.removeListener(syncPreference);
    };
  }, []);

  return prefersReducedMotion;
}
