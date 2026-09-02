"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

import { getExperiences } from "@/services/experience.service";
import type { Experience as ExperienceType } from "@/types/experience";

export default function Experience() {
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);

  useEffect(() => {
    async function loadExperiences() {
      try {
        const data = await getExperiences();
        setExperiences(data);
      } catch (error) {
        console.error("Failed to load experiences:", error);
      }
    }

    loadExperiences();
  }, []);

  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden border-t border-white/[0.06] bg-surface/30 py-28 sm:py-36"
    >
      {/* =========================================================
          BACKGROUND — CANVAS ATMOSPHERE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-20">
        {/* Ambient blue glows */}
        <div className="absolute left-[-15rem] top-[20%] h-[38rem] w-[38rem] rounded-full bg-blue-600/[0.045] blur-[150px]" />

        <div className="absolute right-[-15rem] bottom-[5%] h-[40rem] w-[40rem] rounded-full bg-indigo-600/[0.045] blur-[160px]" />

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

        {/* Large background circles */}
        <div className="absolute left-[-18rem] top-[8%] h-[42rem] w-[42rem] rounded-full border border-blue-500/[0.025]" />

        <div className="absolute right-[-20rem] bottom-[-10%] h-[45rem] w-[45rem] rounded-full border border-white/[0.025]" />
      </div>

      {/* =========================================================
          DECORATIVE PAINT STROKES
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Large horizontal brush stroke */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute left-[-14rem] top-[16%] h-24 w-[38rem] rotate-[-7deg] rounded-[48%_52%_45%_55%/55%_42%_58%_45%] bg-blue-600/[0.055]"
        />

        {/* Secondary brush stroke */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute right-[-16rem] bottom-[22%] h-28 w-[40rem] rotate-[8deg] rounded-[55%_45%_52%_48%/45%_56%_44%_54%] bg-blue-500/[0.04]"
        />

        {/* Floating dots */}
        <motion.span
          animate={{
            y: [0, -12, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute left-[14%] top-[30%] h-1.5 w-1.5 rounded-full bg-blue-400"
        />

        <motion.span
          animate={{
            y: [0, 10, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute right-[13%] top-[45%] h-2 w-2 rounded-full bg-blue-500"
        />

        {/* Crosshair */}
        <div className="absolute right-[8%] top-[12%] hidden h-9 w-9 opacity-20 lg:block">
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-blue-400" />
          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-blue-400" />
        </div>
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* =======================================================
            HEADER
        ======================================================= */}

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-24">
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
            >
              {/* Section number */}
              <div className="mb-8 flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.3em] text-blue-400/70">
                  03
                </span>

                <span className="h-px w-12 bg-blue-500/40" />

                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Experience
                </span>
              </div>

              {/* Paint-backed eyebrow */}
              <div className="relative inline-block">
                <div className="absolute -inset-x-5 top-1/2 h-10 -translate-y-1/2 rounded-[50%] bg-blue-500/[0.07] blur-sm" />

                <p className="relative text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                  Career journey
                </p>
              </div>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-[3.7rem]">
                Building software in the{" "}
                <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                  real world.
                </span>
              </h2>

              {/* Artistic line */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "8rem" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                }}
                className="mt-10 ml-1 w-px bg-gradient-to-b from-blue-500 via-blue-500/30 to-transparent"
              />
            </motion.div>

            {/* =====================================================
                RIGHT — EXPERIENCE PHILOSOPHY
            ===================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="relative lg:pt-12"
            >
              {/* Giant decorative number */}
              <span className="pointer-events-none absolute -right-3 -top-16 select-none font-mono text-[9rem] font-semibold leading-none text-blue-500/[0.025]">
                03
              </span>

              <div className="relative max-w-2xl">
                {/* Main statement */}
                <p className="text-xl font-medium leading-9 tracking-[-0.02em] text-white/90 sm:text-2xl sm:leading-10">
                  Every role has added another layer to the way I think about software —
                  from understanding people and processes to designing systems that
                  actually work.
                </p>

                {/* Secondary statement */}
                <div className="mt-8 flex gap-5">
                  {/* Artistic accent */}
                  <div className="mt-2 h-auto w-px shrink-0 bg-gradient-to-b from-blue-400 via-blue-500/50 to-transparent" />

                  <p className="max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
                    From enterprise platforms and organizational systems to production
                    applications serving real users, my work has centered on turning
                    business requirements into dependable software.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        {/* =======================================================
            TIMELINE
        ======================================================= */}

        <div className="relative mt-20 sm:mt-28">
          {/* Timeline paint trail */}
          <div className="absolute left-[11px] top-0 hidden h-full w-[2px] sm:block">
            {/* Soft glow */}
            <div className="absolute inset-0 bg-blue-500/20 blur-md" />

            {/* Main stroke */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
              className="relative h-full w-full bg-gradient-to-b from-blue-400 via-blue-600/70 to-transparent"
            />
          </div>

          {/* Timeline entries */}
          <div className="space-y-10 sm:space-y-14">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience._id}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative sm:pl-12"
              >
                {/* =================================================
                    TIMELINE MARKER
                ================================================= */}

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.2,
                  }}
                  className="absolute left-0 top-8 hidden h-[23px] w-[23px] items-center justify-center rounded-full border border-blue-400/50 bg-background sm:flex"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.9)]" />
                </motion.div>

                {/* =================================================
                    EXPERIENCE CARD
                ================================================= */}

                <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-background/60 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-background/75 sm:p-8 lg:p-10">
                  {/* Paint glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/[0.035] blur-3xl transition-all duration-700 group-hover:bg-blue-500/[0.09]" />

                  {/* Corner accent */}
                  <div className="absolute right-0 top-0 h-24 w-24 overflow-hidden">
                    <div className="absolute -right-10 -top-10 h-24 w-24 rotate-45 border border-blue-400/10" />
                  </div>

                  <div className="relative">
                    {/* =============================================
                        CARD HEADER
                    ============================================= */}

                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        {/* Date */}
                        <div className="flex flex-wrap items-center gap-3">
                          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-blue-400">
                            {experience.startDate} — {experience.endDate}
                          </p>

                          {experience.current && (
                            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-3 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-blue-300">
                              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                              Current
                            </span>
                          )}
                        </div>

                        {/* Role */}
                        <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                          {experience.role}
                        </h3>

                        {/* Company */}
                        <p className="mt-2 text-sm font-medium text-white/65">
                          {experience.company}
                        </p>

                        {/* Location */}
                        <p className="mt-1 text-xs text-muted-foreground">
                          {experience.location}
                        </p>
                      </div>

                      {/* Employment type */}
                      <span className="w-fit rounded-full border border-white/[0.07] bg-white/[0.035] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-muted backdrop-blur-sm">
                        {experience.employmentType}
                      </span>
                    </div>

                    {/* =============================================
                        DESCRIPTION
                    ============================================= */}

                    <div className="mt-8 max-w-4xl">
                      <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                        {experience.description}
                      </p>
                    </div>

                    {/* =============================================
                        CONTRIBUTIONS
                    ============================================= */}

                    <div className="mt-9 border-t border-white/[0.06] pt-7">
                      <div className="flex items-center gap-4">
                        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/65">
                          Key contributions
                        </p>

                        <span className="h-px w-12 bg-blue-500/30" />
                      </div>

                      <ul className="mt-5 space-y-4">
                        {experience.responsibilities.map(
                          (responsibility, responsibilityIndex) => (
                            <motion.li
                              key={responsibilityIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.4,
                                delay:
                                  index * 0.1 +
                                  responsibilityIndex * 0.05,
                              }}
                              className="flex gap-4 text-sm leading-7 text-muted sm:text-base"
                            >
                              <span className="mt-[0.7rem] flex h-2 w-2 shrink-0 items-center justify-center rounded-full border border-blue-400/40">
                                <span className="h-1 w-1 rounded-full bg-blue-400" />
                              </span>

                              <span>{responsibility}</span>
                            </motion.li>
                          ),
                        )}
                      </ul>
                    </div>

                    {/* =============================================
                        TECHNOLOGIES
                    ============================================= */}

                    <div className="mt-9 border-t border-white/[0.06] pt-7">
                      <div className="flex items-center gap-4">
                        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/65">
                          Technologies
                        </p>

                        <span className="h-px flex-1 bg-white/[0.06]" />
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3.5 py-2 text-[11px] text-white/55 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.06] hover:text-blue-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom index */}
                    <div className="mt-8 flex items-center justify-between">
                      <span className="font-mono text-[9px] tracking-[0.3em] text-muted-foreground">
                        CAREER / {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-xs text-blue-400/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================
          SECTION FOOTER
      ========================================================= */}

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="mx-auto mt-20 h-px max-w-24 origin-center bg-gradient-to-r from-transparent via-blue-500/50 to-transparent sm:mt-28"
      />
    </section>
  );
}