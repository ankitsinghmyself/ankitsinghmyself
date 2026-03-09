"use client";

import { useEffect, useState } from "react";

type UseIdleActivationOptions = {
  delayMs?: number;
  enabled?: boolean;
  timeout?: number;
};

export function useIdleActivation({
  delayMs = 0,
  enabled = true,
  timeout = 1200,
}: UseIdleActivationOptions = {}) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setActive(false);
      return;
    }

    let delayHandle: number | null = null;
    let fallbackHandle: number | null = null;
    let idleHandle: number | null = null;
    let cancelled = false;
    const requestIdleCallback = window.requestIdleCallback?.bind(window);
    const cancelIdleCallback = window.cancelIdleCallback?.bind(window);

    const activate = () => {
      if (!cancelled) {
        setActive(true);
      }
    };

    const scheduleActivation = () => {
      if (requestIdleCallback) {
        idleHandle = requestIdleCallback(activate, { timeout });
        return;
      }

      fallbackHandle = window.setTimeout(activate, Math.min(timeout, 480));
    };

    if (delayMs > 0) {
      delayHandle = window.setTimeout(scheduleActivation, delayMs);
    } else {
      scheduleActivation();
    }

    return () => {
      cancelled = true;

      if (delayHandle !== null) {
        window.clearTimeout(delayHandle);
      }

      if (idleHandle !== null) {
        if (cancelIdleCallback) {
          cancelIdleCallback(idleHandle);
          return;
        }
      }

      if (fallbackHandle !== null) {
        window.clearTimeout(fallbackHandle);
      }
    };
  }, [delayMs, enabled, timeout]);

  return active;
}
