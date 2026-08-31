"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { getSkills } from "@/services/skill.service";
import type { Skill } from "@/types/skill";

const categories = [
  "Frontend",
  "Backend",
  "Database",
  "Tools",
] as const;

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    async function loadSkills() {
      const data = await getSkills();
      setSkills(data);
    }

    loadSkills();
  }, []);

  return (
    <section
      id="skills"
      className="border-t border-border py-28 sm:py-32"
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
            Skills & Tools
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            The tools I use to build.
          </h2>

          <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
            A practical toolkit spanning frontend development, backend
            engineering, databases, APIs, and the infrastructure around them.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category,
            );

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: categoryIndex * 0.08,
                }}
                className="rounded-3xl border border-border bg-surface/40 p-7 sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">
                    {category}
                  </h3>

                  <span className="text-sm text-muted">
                    {String(categoryIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill.id}
                      className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted transition-colors hover:border-white/20 hover:text-white"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}