"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import { getHero } from "@/services/hero.service";
import type { Hero as HeroType } from "@/types/hero";

export default function Hero() {
  const [hero, setHero] = useState<HeroType | null>(null);

  useEffect(() => {
    async function loadHero() {
      const data = await getHero();
      setHero(data);
    }

    loadHero();
  }, []);

  if (!hero) {
    return null;
  }

  return (
    <section
      id="hero"
      className="relative isolate min-h-screen overflow-hidden bg-background"
    >
      {/* =========================================================
          BACKGROUND — CANVAS / ATMOSPHERE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-20">
        {/* Soft blue atmosphere */}
        <div className="absolute left-[-10%] top-[5%] h-[35rem] w-[35rem] rounded-full bg-blue-600/[0.08] blur-[150px]" />

        <div className="absolute right-[-10%] top-[20%] h-[40rem] w-[40rem] rounded-full bg-blue-500/[0.08] blur-[170px]" />

        <div className="absolute bottom-[-20%] left-[30%] h-[30rem] w-[30rem] rounded-full bg-indigo-600/[0.08] blur-[150px]" />

        {/* Fine canvas grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Large editorial circle */}
        <div className="absolute left-1/2 top-[12%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full border border-white/[0.025]" />

        <div className="absolute left-1/2 top-[15%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-blue-500/[0.04]" />
      </div>

      {/* =========================================================
          DECORATIVE PAINT MARKS
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Left brush stroke */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute left-[-8rem] top-[42%] hidden h-24 w-[32rem] rotate-[-8deg] rounded-[45%] bg-blue-600/[0.035] blur-[2px] lg:block"
        />

        {/* Right brush stroke */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute right-[-10rem] top-[25%] hidden h-28 w-[35rem] rotate-[14deg] rounded-[45%] bg-blue-500/[0.035] lg:block"
        />

        {/* Tiny floating particles */}
        <motion.span
          animate={{ y: [0, -12, 0], opacity: [0.25, 0.6, 0.25] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute left-[12%] top-[28%] h-1.5 w-1.5 rounded-full bg-blue-400"
        />

        <motion.span
          animate={{ y: [0, 10, 0], opacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
          className="absolute right-[15%] top-[35%] h-2 w-2 rounded-full bg-blue-500"
        />

        <motion.span
          animate={{ y: [0, -8, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-[25%] left-[45%] h-1 w-1 rounded-full bg-indigo-400"
        />

        {/* Crosshair */}
        <div className="absolute right-[7%] top-[18%] hidden h-8 w-8 opacity-20 lg:block">
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-blue-400" />
          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-blue-400" />
        </div>

        {/* Small square */}
        <motion.div
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[25%] right-[8%] hidden h-5 w-5 border border-blue-400/20 lg:block"
        />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-24 pt-32 lg:px-8">
        <div className="grid w-full items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
          {/* =====================================================
              LEFT — INTRODUCTION
          ===================================================== */}

          <div className="relative z-10">
            {/* Editorial number */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 flex items-center gap-4"
            >
              <span className="text-xs font-mono tracking-[0.3em] text-blue-400/70">
                01
              </span>

              <span className="h-px w-10 bg-blue-500/40" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
                Software Engineer
              </span>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-400/10 bg-blue-500/[0.06] px-4 py-2 backdrop-blur-sm"
            >
              <motion.span
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(59,130,246,0.9)]"
              />

              <span className="text-xs font-medium uppercase tracking-[0.18em] text-blue-300">
                {hero.availability}
              </span>
            </motion.div>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-muted"
            >
              {hero.title}
            </motion.p>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-4xl text-5xl font-semibold leading-[0.91] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[5.8rem] xl:text-[6.4rem]"
            >
              Building software
              <span className="mt-2 block bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                that solves
              </span>

              <span className="relative inline-block">
                real problems.
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 1,
                    delay: 1,
                    ease: "easeOut",
                  }}
                  className="absolute -bottom-2 left-0 h-[3px] rounded-full bg-gradient-to-r from-blue-500/70 to-transparent"
                />
              </span>
            </motion.h1>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-9 max-w-2xl text-base leading-8 text-muted sm:text-lg"
            >
              {hero.shortBio}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="#projects"
                className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(37,99,235,0.22)]"
              >
                {/* Button shine */}
                <span className="absolute inset-y-0 -left-20 w-10 rotate-12 bg-blue-400/30 blur-md transition-all duration-700 group-hover:left-[120%]" />

                <span className="relative">
                  View my work
                </span>

                <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <a
                href={hero.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-7 py-4 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.07]"
              >
                View résumé

                <span className="text-muted transition-transform duration-300 group-hover:translate-y-[-2px]">
                  ↗
                </span>
              </a>
            </motion.div>

            {/* Technology signature */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-14"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                  Working with
                </span>

                <span className="h-px w-16 bg-white/10" />
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/55">
                <span className="transition-colors hover:text-blue-400">
                  React
                </span>

                <span className="text-white/20">/</span>

                <span className="transition-colors hover:text-blue-400">
                  TypeScript
                </span>

                <span className="text-white/20">/</span>

                <span className="transition-colors hover:text-blue-400">
                  Next.js
                </span>

                <span className="text-white/20">/</span>

                <span className="transition-colors hover:text-blue-400">
                  Node.js
                </span>

                <span className="text-white/20">/</span>

                <span className="transition-colors hover:text-blue-400">
                  MongoDB
                </span>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT — ART / PROFILE COMPOSITION
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mx-auto flex w-full max-w-[32rem] items-center justify-center"
          >
            {/* Outer atmospheric glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.25, 0.4, 0.25],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-[25rem] w-[25rem] rounded-full bg-blue-600/20 blur-[100px] sm:h-[30rem] sm:w-[30rem]"
            />

            {/* =================================================
                PAINT STAMP
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -18 }}
              animate={{ opacity: 1, scale: 1, rotate: -7 }}
              transition={{
                duration: 1.1,
                delay: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute h-[25rem] w-[25rem] rounded-[46%_54%_58%_42%/42%_48%_52%_58%] bg-blue-600/80 shadow-[0_0_100px_rgba(37,99,235,0.25)] sm:h-[29rem] sm:w-[29rem]"
            />

            {/* Second paint layer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 8 }}
              transition={{
                duration: 1.2,
                delay: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute h-[22rem] w-[22rem] rounded-[52%_48%_43%_57%/51%_42%_58%_49%] border-[18px] border-blue-400/20 sm:h-[26rem] sm:w-[26rem]"
            />

            {/* =================================================
                ORBIT RINGS
            ================================================= */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[30rem] w-[30rem] rounded-full border border-blue-300/15 sm:h-[35rem] sm:w-[35rem]"
            >
              {/* Orbit dot */}
              <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.9)]" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 36,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[27rem] w-[27rem] rounded-full border border-dashed border-blue-400/10 sm:h-[32rem] sm:w-[32rem]"
            >
              <span className="absolute bottom-[8%] right-[10%] h-1.5 w-1.5 rounded-full bg-indigo-400" />
            </motion.div>

            {/* =================================================
                PORTRAIT
            ================================================= */}

            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 0.5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 aspect-[4/5] w-[18rem] overflow-hidden rounded-[2.5rem] border border-white/20 bg-navy-900 shadow-[0_30px_100px_rgba(0,0,0,0.55)] sm:w-[21rem]"
            >
              <Image
                src={hero.profileImage}
                alt={hero.name}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 640px) 288px, 336px"
              />

              {/* Portrait lighting */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-black/50" />

              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Name plate */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {hero.name}
                    </p>

                    <p className="mt-1 text-xs text-white/55">
                      Full-Stack Software Engineer
                    </p>
                  </div>

                  <span className="text-lg text-blue-400">
                    ↗
                  </span>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                FLOATING LABELS
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute right-[-1rem] top-[18%] z-20 hidden rounded-xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-xl sm:block"
            >
              <p className="text-[9px] uppercase tracking-[0.25em] text-muted">
                Based in
              </p>

              <p className="mt-1 text-xs font-medium text-white">
                {hero.location}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="absolute bottom-[20%] left-[-1rem] z-20 hidden rounded-xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-xl sm:block"
            >
              <p className="text-[9px] uppercase tracking-[0.25em] text-muted">
                Focus
              </p>

              <p className="mt-1 text-xs font-medium text-blue-300">
                Web · Systems · Products
              </p>
            </motion.div>

            {/* Small decorative plus */}
            <motion.span
              animate={{ rotate: 90 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute right-[3%] bottom-[20%] z-20 text-xl font-light text-blue-400/50"
            >
              +
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.35em] text-muted-foreground">
          Scroll to explore
        </span>

        <motion.div
          animate={{ height: ["1.5rem", "2.5rem", "1.5rem"] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-px bg-gradient-to-b from-blue-400 to-transparent"
        />
      </motion.div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}