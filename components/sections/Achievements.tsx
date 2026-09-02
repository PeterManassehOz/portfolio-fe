"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { getAchievements } from "@/services/achievement.service";
import type { Achievement } from "@/types/achievements";

export default function Achievements() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    async function loadAchievements() {
      const data = await getAchievements();
      setAchievements(data);
    }

    loadAchievements();
  }, []);

  return (
    <section
      id="achievements"
      className="relative isolate overflow-hidden border-t border-white/[0.06] py-28 sm:py-36"
    >
      {/* Atmospheric canvas */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Blue atmosphere */}
        <div className="absolute left-[-18rem] top-[10%] h-[38rem] w-[38rem] rounded-full bg-blue-600/[0.035] blur-[150px]" />

        <div className="absolute right-[-15rem] bottom-[5%] h-[34rem] w-[34rem] rounded-full bg-indigo-600/[0.035] blur-[150px]" />

        {/* Subtle canvas grid */}
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

        {/* Large editorial circle */}
        <div className="absolute -right-64 top-[18%] h-[38rem] w-[38rem] rounded-full border border-blue-400/[0.025]" />

        {/* Organic paint stroke */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute left-[-12rem] top-[48%] h-24 w-[38rem] rotate-[-7deg] rounded-[48%_52%_45%_55%/55%_42%_58%_45%] bg-blue-500/[0.045]"
        />

        {/* Small artistic marks */}
        <div className="absolute right-[12%] top-[18%] h-2 w-2 rounded-full bg-blue-400/40" />
        <div className="absolute right-[12.5%] top-[18%] h-8 w-px bg-blue-400/20" />

        <div className="absolute left-[7%] bottom-[18%] h-1.5 w-1.5 rounded-full bg-blue-400/30" />
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
          {/* Editorial label */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.3em] text-blue-400/70">
                05
              </span>

              <span className="h-px w-12 bg-blue-500/40" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Measured impact
              </span>
            </div>

            <div className="relative inline-block">
              <div className="absolute -inset-x-5 top-1/2 h-10 -translate-y-1/2 rounded-[50%] bg-blue-500/[0.07] blur-sm" />

              <p className="relative text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                Key achievements
              </p>
            </div>

            <h2 className="mt-5 max-w-xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.7rem]">
              Outcomes that{" "}
              <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                matter.
              </span>
            </h2>
          </div>

          {/* Intro */}
          <div className="relative lg:pt-16">
            <span className="pointer-events-none absolute -right-2 -top-16 select-none font-mono text-[10rem] font-semibold leading-none text-blue-500/[0.025]">
              05
            </span>

            <p className="relative max-w-2xl text-xl font-medium leading-9 tracking-[-0.02em] text-white/90 sm:text-2xl sm:leading-10">
              The work is ultimately measured by what it enables — better
              systems, smoother operations, and products that solve real
              problems.
            </p>

            <p className="mt-7 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
              A selection of outcomes from the platforms, organizational
              systems, and applications I have contributed to.
            </p>
          </div>
        </motion.div>

        {/* Achievement wall */}
        <div className="relative mt-20 sm:mt-24">
          {/* Vertical artistic line */}
          <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent lg:block" />

          <div className="grid gap-6 lg:grid-cols-2 lg:pl-10">
            {achievements.map((achievement, index) => (
              <motion.article
                key={achievement._id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: Math.min(index * 0.08, 0.25),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative"
              >
                {/* Paint accent */}
                <div className="pointer-events-none absolute -left-5 top-12 hidden h-12 w-10 rotate-[-18deg] rounded-[45%_55%_48%_52%] bg-blue-500/[0.09] blur-[1px] transition-all duration-500 group-hover:bg-blue-500/[0.16] lg:block" />

                <div className="relative min-h-[290px] overflow-hidden rounded-[2rem] border border-white/[0.07] bg-surface/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-surface/60 sm:p-8">
                  {/* Large background number */}
                  <span className="pointer-events-none absolute -right-3 -top-7 select-none font-mono text-[9rem] font-semibold leading-none text-white/[0.025] transition-colors duration-500 group-hover:text-blue-400/[0.06]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Top row */}
                  <div className="relative flex items-start justify-between gap-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs tracking-[0.25em] text-blue-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="h-px w-8 bg-blue-500/30 transition-all duration-500 group-hover:w-12 group-hover:bg-blue-400/60" />
                    </div>

                    {achievement.organization && (
                      <span className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-white/50 backdrop-blur-xl transition-colors duration-300 group-hover:border-blue-400/20 group-hover:text-blue-300">
                        {achievement.organization}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative mt-12">
                    <h3 className="max-w-xl text-2xl font-semibold leading-tight tracking-[-0.035em] text-white transition-colors duration-300 group-hover:text-blue-100 sm:text-3xl">
                      {achievement.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Corner mark */}
                  <div className="absolute bottom-7 right-7 h-5 w-5 opacity-40 transition-all duration-500 group-hover:opacity-100">
                    <span className="absolute right-0 top-0 h-px w-5 bg-blue-400/60" />
                    <span className="absolute right-0 top-0 h-5 w-px bg-blue-400/60" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Empty state */}
        {achievements.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 flex min-h-[240px] items-center justify-center rounded-[2rem] border border-white/[0.06] bg-surface/30"
          >
            <p className="text-sm text-muted">
              No achievements available.
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