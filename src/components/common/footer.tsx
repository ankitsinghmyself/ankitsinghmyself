"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import { contact, socials } from "@/lib/site";
import Logo from "./logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="border-t border-white/8 bg-[#050916]"
      initial="hidden"
      viewport={viewport}
      variants={fadeUp()}
      whileInView="visible"
    >
      <motion.div
        className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.9fr_0.9fr] lg:px-8"
        variants={staggerContainer(0.04, 0.1)}
      >
        <motion.div variants={fadeUp()}>
          <div className="flex items-center gap-2">
            <Logo width={22} height={22} />
            <span className="text-sm font-semibold text-white">Ankit Singh</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/58">
            Senior frontend engineering, scalable systems, and design-aware web
            experiences with measurable product impact.
          </p>
        </motion.div>

        <motion.div variants={fadeUp()}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/42">
            Contact
          </p>
          <div className="mt-4 grid gap-3 text-sm text-white/66">
            <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
            <span>Bengaluru, India / Remote</span>
          </div>
        </motion.div>

        <motion.div variants={fadeUp()}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/42">
            Elsewhere
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {socials.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/72 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="border-t border-white/8 px-4 py-4 text-center text-xs text-white/34 sm:px-6 lg:px-8">
        {year} Ankit Singh
      </div>
    </motion.footer>
  );
};

export default Footer;
