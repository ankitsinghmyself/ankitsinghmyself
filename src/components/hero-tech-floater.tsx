"use client";

import { motion } from "motion/react";
import {
  SiSpringboot,
  SiApachekafka,
  SiKubernetes,
  SiReact,
  SiTypescript,
} from "react-icons/si";

type TechBadge = {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
};

const badges: TechBadge[] = [
  {
    Icon: SiSpringboot,
    label: "Spring Boot",
    x: -280,
    y: -140,
    delay: 0.3,
    duration: 7,
  },
  {
    Icon: SiApachekafka,
    label: "Kafka",
    x: 280,
    y: -100,
    delay: 0.8,
    duration: 9,
  },
  {
    Icon: SiKubernetes,
    label: "Kubernetes",
    x: -240,
    y: 120,
    delay: 0.5,
    duration: 8,
  },
  {
    Icon: SiReact,
    label: "React",
    x: 260,
    y: 100,
    delay: 1.0,
    duration: 6.5,
  },
  {
    Icon: SiTypescript,
    label: "TypeScript",
    x: 0,
    y: -180,
    delay: 0.6,
    duration: 7.5,
  },
];

const HeroTechFloater = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
    >
      {badges.map(({ Icon, label, x, y, delay, duration }) => (
        <motion.div
          key={label}
          className="absolute left-1/2 top-1/2"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0, 1, 1, 0.6, 1],
            scale: [0.6, 1, 1, 0.95, 1],
          }}
          transition={{
            duration: 1.2,
            delay: 1.6 + delay,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ zIndex: 20, transform: `translate(${x}px, ${y}px)` }}
        >
          <motion.div
            className="flex items-center gap-2 rounded-full border border-white/10 bg-[#0a132c]/80 px-3.5 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl"
            animate={{
              y: [0, -8, 0],
              x: [0, 4, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay,
            }}
          >
            <Icon className="size-4 text-[#7dd3fc]" />
            <span className="text-[11px] font-semibold text-white/80">
              {label}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroTechFloater;

