"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

import { getExperiences } from "@/services/experience.service";
import type { Experience as ExperienceType } from "@/types/experience";

export default function Experience() {
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);

  useEffect(() => {
    async function loadExperiences() {
      const data = await getExperiences();
      setExperiences(data);
    }

    loadExperiences();
  }, []);

  return (
    <section
      id="experience"
      className="relative border-t border-border bg-surface/30 py-28 sm:py-32"
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
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Building software in the real world.
          </h2>

          <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
            From enterprise platforms and organizational systems to
            production applications serving thousands of users, my experience
            has centered on turning real business requirements into dependable
            software.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-8px)] w-px bg-border sm:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="relative sm:pl-12"
              >
                {/* Timeline marker */}
                <div className="absolute left-0 top-2 hidden h-[15px] w-[15px] rounded-full border-2 border-blue-500 bg-background sm:block" />

                <div className="rounded-3xl border border-border bg-background/60 p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-400">
                          {experience.startDate} — {experience.endDate}
                        </p>

                        {experience.current && (
                          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-blue-400">
                            Current
                          </span>
                        )}
                      </div>

                      <h3 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                        {experience.role}
                      </h3>

                      <p className="mt-1 text-sm text-muted">
                        {experience.company}
                      </p>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {experience.location}
                      </p>
                    </div>

                    <span className="w-fit rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs text-muted">
                      {experience.employmentType}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="mt-7 max-w-4xl text-sm leading-7 text-muted sm:text-base">
                    {experience.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mt-8">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                      Key contributions
                    </p>

                    <ul className="mt-5 space-y-4">
                      {experience.responsibilities.map(
                        (responsibility, responsibilityIndex) => (
                          <li
                            key={responsibilityIndex}
                            className="flex gap-3 text-sm leading-7 text-muted sm:text-base"
                          >
                            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

                            <span>{responsibility}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mt-8 border-t border-border pt-6">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                      Technologies
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-border bg-white/[0.03] px-3 py-1.5 text-xs text-muted"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}