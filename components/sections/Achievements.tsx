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
      className="relative border-t border-border py-28 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            Key Achievements
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Outcomes that matter.
          </h2>

          <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
            A few measurable outcomes from the platforms, systems, and
            products I have contributed to.
          </p>
        </motion.div>

        {/* Achievements */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group rounded-3xl border border-border bg-surface/40 p-7 transition-all duration-500 hover:border-white/15 hover:bg-surface sm:p-8"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-3xl font-semibold text-blue-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {achievement.organization && (
                  <span className="rounded-full border border-border bg-white/[0.03] px-3 py-1.5 text-xs text-muted">
                    {achievement.organization}
                  </span>
                )}
              </div>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white">
                {achievement.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                {achievement.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}