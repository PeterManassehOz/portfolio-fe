"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

import { getAbout } from "@/services/about.service";
import type { About as AboutData } from "@/types/about";

export default function About() {
  const [about, setAbout] = useState<AboutData | null>(null);

  useEffect(() => {
    async function loadAbout() {
      try {
        const data = await getAbout();
        setAbout(data);
      } catch (error) {
        console.error("Failed to load about data:", error);
      }
    }

    loadAbout();
  }, []);

  if (!about) {
    return null;
  }

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden border-t border-white/[0.06] bg-background py-28 sm:py-36"
    >
      {/* =========================================================
          ATMOSPHERIC BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-20">
        {/* Blue atmosphere */}
        <div className="absolute left-[-12rem] top-[15%] h-[35rem] w-[35rem] rounded-full bg-blue-600/[0.055] blur-[140px]" />

        <div className="absolute right-[-12rem] bottom-[-10%] h-[32rem] w-[32rem] rounded-full bg-indigo-600/[0.05] blur-[150px]" />

        {/* Canvas grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Large editorial circle */}
        <div className="absolute right-[-12rem] top-[12%] h-[34rem] w-[34rem] rounded-full border border-blue-500/[0.035]" />

        <div className="absolute right-[-7rem] top-[20%] h-[24rem] w-[24rem] rounded-full border border-white/[0.025]" />
      </div>

      {/* =========================================================
          DECORATIVE ELEMENTS
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Large blue brush stroke */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -8 }}
          whileInView={{ opacity: 1, x: 0, rotate: -8 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-[-12rem] top-[20%] h-28 w-[34rem] rounded-[45%_55%_48%_52%/50%_42%_58%_50%] bg-blue-600/[0.06] blur-[1px]"
        />

        {/* Secondary brush stroke */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 10 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute right-[-14rem] bottom-[15%] h-24 w-[30rem] rounded-[55%_45%_52%_48%/44%_58%_42%_56%] bg-blue-500/[0.045]"
        />

        {/* Floating particles */}
        <motion.span
          animate={{
            y: [0, -10, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute left-[12%] top-[25%] h-1.5 w-1.5 rounded-full bg-blue-400"
        />

        <motion.span
          animate={{
            y: [0, 8, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute right-[16%] top-[38%] h-2 w-2 rounded-full bg-blue-500"
        />

        <motion.span
          animate={{
            y: [0, -8, 0],
            opacity: [0.1, 0.35, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 0.5,
          }}
          className="absolute bottom-[22%] left-[42%] h-1 w-1 rounded-full bg-indigo-400"
        />

        {/* Crosshair */}
        <div className="absolute right-[8%] top-[18%] hidden h-9 w-9 opacity-20 lg:block">
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-blue-400" />
          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-blue-400" />
        </div>
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          {/* =====================================================
              LEFT — EDITORIAL HEADING
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            {/* Section number */}
            <div className="mb-8 flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.3em] text-blue-400/70">
                02
              </span>

              <span className="h-px w-12 bg-blue-500/40" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                About me
              </span>
            </div>

            {/* Paint mark behind heading */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute -left-5 top-[2.7rem] h-16 w-56 origin-left rounded-[50%_45%_55%_40%] bg-blue-600/[0.09] blur-[1px]"
              />

              <p className="relative text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                {about.eyebrow}
              </p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative mt-5 max-w-md text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.7rem]"
              >
                {about.heading}
              </motion.h2>
            </div>

            {/* Vertical artistic line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "7rem" }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.45,
              }}
              className="mt-10 ml-1 w-px bg-gradient-to-b from-blue-500 via-blue-500/30 to-transparent"
            />

            {/* Small signature */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-8 flex items-center gap-3"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(59,130,246,0.8)]" />

              <span className="text-xs tracking-[0.18em] text-muted-foreground">
                BUILT WITH PURPOSE
              </span>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT — CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            {/* Main introduction */}
            <div className="relative">
              {/* Decorative quote */}
              <span className="pointer-events-none absolute -left-5 -top-10 select-none font-serif text-[8rem] leading-none text-blue-500/[0.07]">
                “
              </span>

              <p className="relative max-w-3xl text-xl font-medium leading-[1.7] tracking-[-0.02em] text-white sm:text-2xl sm:leading-[1.65]">
                {about.introduction}
              </p>
            </div>

            {/* Description */}
            <p className="mt-8 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              {about.description}
            </p>

            {/* Background */}
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              {about.background}
            </p>

            {/* =================================================
                QUICK FACTS
            ================================================= */}

            <div className="relative mt-14">
              {/* Facts heading */}
              <div className="mb-6 flex items-center gap-4">
                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                  A few details
                </span>

                <span className="h-px flex-1 bg-white/[0.07]" />

                <span className="font-mono text-[10px] text-blue-400/60">
                  02—04
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Based in */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.05,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-surface/50 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-blue-500/20 hover:bg-blue-500/[0.035]"
                >
                  <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-500/[0.06] blur-2xl transition-all duration-500 group-hover:bg-blue-500/[0.12]" />

                  <div className="relative">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        01
                      </span>

                      <span className="text-blue-400/40 transition-colors group-hover:text-blue-400">
                        ◌
                      </span>
                    </div>

                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      Based in
                    </p>

                    <p className="mt-2 text-sm font-medium leading-6 text-white">
                      {about.basedIn}
                    </p>
                  </div>
                </motion.div>

                {/* Availability */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-surface/50 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-blue-500/20 hover:bg-blue-500/[0.035]"
                >
                  <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-500/[0.06] blur-2xl transition-all duration-500 group-hover:bg-blue-500/[0.12]" />

                  <div className="relative">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        02
                      </span>

                      <motion.span
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                      />
                    </div>

                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      Availability
                    </p>

                    <p className="mt-2 text-sm font-medium leading-6 text-white">
                      {about.availability}
                    </p>
                  </div>
                </motion.div>

                {/* Primary focus */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-surface/50 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-blue-500/20 hover:bg-blue-500/[0.035]"
                >
                  <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-indigo-500/[0.06] blur-2xl transition-all duration-500 group-hover:bg-indigo-500/[0.12]" />

                  <div className="relative">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        03
                      </span>

                      <span className="text-blue-400/40 transition-colors group-hover:text-blue-400">
                        +
                      </span>
                    </div>

                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      Primary focus
                    </p>

                    <p className="mt-2 text-sm font-medium leading-6 text-white">
                      {about.primaryFocus}
                    </p>
                  </div>
                </motion.div>

                {/* Core stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-surface/50 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-blue-500/20 hover:bg-blue-500/[0.035]"
                >
                  <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-500/[0.06] blur-2xl transition-all duration-500 group-hover:bg-blue-500/[0.12]" />

                  <div className="relative">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        04
                      </span>

                      <span className="text-blue-400/40 transition-colors group-hover:text-blue-400">
                        ◇
                      </span>
                    </div>

                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      Core stack
                    </p>

                    <p className="mt-2 text-sm font-medium leading-6 text-white">
                      {about.coreStack}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          SECTION TRANSITION
      ========================================================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute bottom-0 left-1/2 h-px w-24 -translate-x-1/2 origin-center bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
      />
    </section>
  );
}
