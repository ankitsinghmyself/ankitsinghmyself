"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { useIdleActivation } from "@/hooks/use-idle-activation";

type DeferredHeroParticleNameProps = {
  text: string;
};

const HeroParticleName = dynamic(() => import("./hero-particle-name"), {
  ssr: false,
});

const splitName = (text: string) => {
  const words = text.trim().split(/\s+/);

  if (words.length <= 1) {
    return [text, ""] as const;
  }

  return [words.slice(0, -1).join(" "), words[words.length - 1] ?? ""] as const;
};

const HeroNameFallback = ({ text }: DeferredHeroParticleNameProps) => {
  const [firstName, lastName] = splitName(text);

  return (
    <div className="relative mt-4 h-[96px] w-full sm:h-[132px] lg:h-[172px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl font-semibold tracking-[-0.07em] text-white sm:text-7xl lg:text-[5.7rem]">
          {firstName}
          {lastName ? (
            <>
              {" "}
              <span className="neo-gradient-text">{lastName}</span>
            </>
          ) : null}
        </h1>
      </div>
    </div>
  );
};

const DeferredHeroParticleName = ({ text }: DeferredHeroParticleNameProps) => {
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
    delayMs: 120,
    timeout: 1200,
  });

  if (!isActive) {
    return <HeroNameFallback text={text} />;
  }

  return <HeroParticleName text={text} />;
};

export default DeferredHeroParticleName;
