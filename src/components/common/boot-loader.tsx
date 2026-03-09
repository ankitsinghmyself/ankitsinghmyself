"use client";

import { useEffect, useState } from "react";

import SiteLoader from "./site-loader";

const BOOT_LOADER_DURATION_MS = 900;
const BOOT_LOADER_EXIT_MS = 420;

const BootLoader = () => {
  const [state, setState] = useState<"visible" | "exiting" | "hidden">(
    "visible",
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const visibleDuration = media.matches ? 120 : BOOT_LOADER_DURATION_MS;

    const exitTimer = window.setTimeout(() => {
      setState("exiting");
    }, visibleDuration);

    const hideTimer = window.setTimeout(() => {
      setState("hidden");
    }, visibleDuration + BOOT_LOADER_EXIT_MS);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (state === "hidden") {
    return null;
  }

  return (
    <div className="site-loader-overlay" data-state={state}>
      <SiteLoader message="Calibrating the glow. Almost ready." />
    </div>
  );
};

export default BootLoader;
