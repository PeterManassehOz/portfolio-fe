"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { getEducation } from "@/services/education.service";
import type { Education as EducationType } from "@/types/education";

export default function Education() {
  const [education, setEducation] = useState<EducationType[]>([]);

  useEffect(() => {
    async function loadEducation() {
      const data = await getEducation();
      setEducation(data);
    }

    loadEducation();
  }, []);

  return (
    <section
      id="education"
      className="relative isolate overflow-hidden border-t border-white/[0.06] py-28 sm:py-36"
    >
      {/* Atmospheric canvas */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Blue atmosphere */}
        <div className="absolute left-[-18rem] top-[12%] h-[38rem] w-[38rem] rounded-full bg-blue-600/[0.035] blur-[150px]" />

        <div className="absolute right-[-16rem] bottom-[8%] h-[36rem] w-[36rem] rounded-full bg-indigo-600/[0.035] blur-[150px]" />

        {/* Canvas grid */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        {/* Large orbital circle */}
        <div className="absolute -left-72 top-[30%] h-[42rem] w-[42rem] rounded-full border border-blue-400/[0.025]" />

        <div className="absolute -left-60 top-[34%] h-[34rem] w-[34rem] rounded-full border border-blue-400/[0.018]" />

        {/* Organic paint stroke */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute right-[-15rem] top-[45%] h-28 w-[40rem] rotate-[8deg] rounded-[52%_48%_55%_45%/45%_58%_42%_55%] bg-blue-500/[0.045]"
        />

        {/* Artistic marks */}
        <div className="absolute right-[9%] top-[20%] h-2 w-2 rounded-full bg-blue-400/40" />

        <div className="absolute right-[9.4%] top-[20%] h-8 w-px bg-blue-400/20" />

        <div className="absolute left-[8%] bottom-[14%] h-1.5 w-1.5 rounded-full bg-blue-400/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24"
        >
          {/* Editorial heading */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.3em] text-blue-400/70">
                06
              </span>

              <span className="h-px w-12 bg-blue-500/40" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Education & credentials
              </span>
            </div>

            <div className="relative inline-block">
              <div className="absolute -inset-x-5 top-1/2 h-10 -translate-y-1/2 rounded-[50%] bg-blue-500/[0.07] blur-sm" />

              <p className="relative text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                Academic foundation
              </p>
            </div>

            <h2 className="mt-5 max-w-xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.7rem]">
              Built on{" "}
              <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                engineering.
              </span>
            </h2>
          </div>

          {/* Intro */}
          <div className="relative lg:pt-16">
            <span className="pointer-events-none absolute -right-2 -top-16 select-none font-mono text-[10rem] font-semibold leading-none text-blue-500/[0.025]">
              06
            </span>

            <p className="relative max-w-2xl text-xl font-medium leading-9 tracking-[-0.02em] text-white/90 sm:text-2xl sm:leading-10">
              An engineering foundation shaped the way I approach structure,
              systems, and problem-solving — before software became the medium
              for building them.
            </p>

            <p className="mt-7 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
              My academic path began in engineering and evolved into focused,
              self-directed software development and continuous technical
              growth.
            </p>
          </div>
        </motion.div>

        {/* Education archive */}
        <div className="relative mt-20 sm:mt-24">
          {/* Artistic timeline trail */}
          <div className="pointer-events-none absolute bottom-8 left-[11px] top-8 hidden w-px bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0 sm:block" />

          {/* Paint nodes */}
          <div className="pointer-events-none absolute left-[3px] top-16 hidden h-4 w-4 rounded-[45%_55%_52%_48%] bg-blue-400/50 blur-[1px] sm:block" />

          <div className="pointer-events-none absolute left-[4px] top-[50%] hidden h-3 w-3 rounded-[55%_45%_48%_52%] bg-blue-400/35 sm:block" />

          <div className="pointer-events-none absolute bottom-16 left-[5px] hidden h-3 w-3 rounded-full bg-blue-400/25 sm:block" />

          <div className="space-y-7 sm:space-y-9">
            {education.map((item, index) => (
              <motion.article
                key={item._id}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: Math.min(index * 0.1, 0.25),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative sm:pl-12"
              >
                {/* Timeline node */}
                <div className="absolute left-[3px] top-10 hidden h-4 w-4 sm:block">
                  <span className="absolute inset-0 rounded-full border-4 border-background bg-blue-400 transition-all duration-500 group-hover:scale-125 group-hover:bg-blue-300" />

                  <span className="absolute -inset-2 rounded-full border border-blue-400/0 transition-all duration-500 group-hover:border-blue-400/20" />
                </div>

                {/* Card */}
                <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-surface/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-surface/60 sm:p-9">
                  {/* Large background year */}
                  <span className="pointer-events-none absolute -right-3 top-[-1.5rem] select-none font-mono text-[8rem] font-semibold leading-none text-white/[0.025] transition-colors duration-500 group-hover:text-blue-400/[0.055] sm:text-[9rem]">
                    {item.startDate}
                  </span>

                  {/* Top metadata */}
                  <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs tracking-[0.2em] text-blue-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="h-px w-8 bg-blue-500/30 transition-all duration-500 group-hover:w-12 group-hover:bg-blue-400/60" />

                      <span className="font-mono text-xs tracking-[0.12em] text-white/40">
                        {item.startDate} — {item.endDate}
                      </span>
                    </div>

                    <span className="w-fit rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-white/50 backdrop-blur-xl transition-colors duration-300 group-hover:border-blue-400/20 group-hover:text-blue-300">
                      {item.type}
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="relative mt-10 max-w-4xl">
                    <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-blue-400/70">
                      {item.field}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] text-white transition-colors duration-300 group-hover:text-blue-100 sm:text-3xl">
                      {item.qualification}
                    </h3>

                    <p className="mt-3 text-base font-medium text-white/70 sm:text-lg">
                      {item.institution}
                    </p>
                  </div>

                  {/* Description */}
                  {item.description && (
                    <div className="relative mt-8 max-w-3xl border-t border-white/[0.06] pt-7">
                      <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                        {item.description}
                      </p>
                    </div>
                  )}

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Corner mark */}
                  <div className="absolute bottom-7 right-7 h-5 w-5 opacity-30 transition-all duration-500 group-hover:opacity-100">
                    <span className="absolute right-0 top-0 h-px w-5 bg-blue-400/60" />
                    <span className="absolute right-0 top-0 h-5 w-px bg-blue-400/60" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Empty state */}
        {education.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 flex min-h-[240px] items-center justify-center rounded-[2rem] border border-white/[0.06] bg-surface/30"
          >
            <p className="text-sm text-muted">
              No education records available.
            </p>
          </motion.div>
        )}

        {/* Section ending */}
        <div className="mt-20 flex items-center justify-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}