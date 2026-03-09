"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

import { fadeUp } from "@/lib/motion";
import { navigation, resumeHref } from "@/lib/site";
import Logo from "./logo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      animate="visible"
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5"
      initial="hidden"
      variants={fadeUp(0, -18)}
    >
      <div className="mx-auto max-w-5xl rounded-full border border-white/10 bg-[#071225]/84 px-3 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/" className="flex items-center gap-2">
              <Logo width={24} height={24} />
              <span className="text-sm font-semibold text-white">Ankit</span>
            </Link>
          </motion.div>

          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map((item, index) => (
              <motion.div
                key={item.href}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -10 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={item.href}
                  className="header-link text-xs font-medium text-white/72 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="hidden items-center gap-2 md:flex"
            initial={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.28 }}
          >
            <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={resumeHref}
                target="_blank"
                className="inline-flex h-9 items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 text-xs font-semibold text-white transition hover:bg-white/10"
              >
                Resume
                <Download className="size-3.5" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.button
            type="button"
            animate={{ opacity: 1, scale: 1 }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white md:hidden"
            initial={{ opacity: 0, scale: 0.92 }}
            transition={{ delay: 0.18 }}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
            whileTap={{ scale: 0.94 }}
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </motion.button>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen ? (
            <motion.div
              animate={{ height: "auto", opacity: 1 }}
              className="overflow-hidden"
              exit={{ height: 0, opacity: 0 }}
              initial={{ height: 0, opacity: 0 }}
            >
              <div className="mt-3 grid gap-2 border-t border-white/10 pt-3 md:hidden">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -12 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/82"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  animate={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -12 }}
                  transition={{ delay: navigation.length * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={resumeHref}
                    target="_blank"
                    className="mt-1 inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#7c4dff] via-[#675dff] to-[#ff2d9a] px-4 text-sm font-semibold text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    Resume
                    <Download className="size-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
