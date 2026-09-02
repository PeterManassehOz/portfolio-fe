"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-5">
        <nav className="flex items-center justify-between rounded-full border border-border bg-background/70 px-5 py-3 backdrop-blur-xl">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-white"
          >
            Oz<span className="text-blue-500">.</span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="/documents/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border-strong bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-105"
            >
              Resume
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
          >
            <span className="text-lg">{open ? "×" : "☰"}</span>
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-2 overflow-hidden rounded-3xl border border-border bg-surface/95 p-4 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm text-muted transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}

                <a
                  href="/documents/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 rounded-2xl bg-white px-4 py-3 text-center text-sm font-medium text-black"
                >
                  View Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}