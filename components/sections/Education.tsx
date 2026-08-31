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
      className="border-t border-border bg-surface/20 py-28 sm:py-32"
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
            Education & Credentials
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            An engineering foundation, followed by software.
          </h2>

          <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
            My academic background began in engineering before I transitioned
            into full-stack software development through focused,
            self-directed learning.
          </p>
        </motion.div>

        {/* Education timeline */}
        <div className="mt-16">
          <div className="relative">
            <div className="absolute bottom-0 left-[7px] top-0 hidden w-px bg-border sm:block" />

            <div className="space-y-10">
              {education.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="relative sm:pl-12"
                >
                  <span className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border-4 border-background bg-blue-400 sm:block" />

                  <div className="rounded-3xl border border-border bg-background/50 p-7 sm:p-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-sm font-medium text-blue-400">
                          {item.startDate} — {item.endDate}
                        </p>

                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                          {item.qualification}
                        </h3>

                        <p className="mt-2 text-base text-white/80">
                          {item.field}
                        </p>

                        <p className="mt-2 text-sm text-muted">
                          {item.institution}
                        </p>
                      </div>

                      <span className="w-fit rounded-full border border-border bg-white/[0.03] px-3 py-1.5 text-xs text-muted">
                        {index === 2 ? "Professional Development" : "Academic"}
                      </span>
                    </div>

                    {item.description && (
                      <p className="mt-6 max-w-3xl border-t border-border pt-6 text-sm leading-7 text-muted sm:text-base">
                        {item.description}
                      </p>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}