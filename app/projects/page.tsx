"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { getProjects } from "@/services/project.service";
import type { Project } from "@/types/project";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function loadProjects() {
      const data = await getProjects();
      setProjects(data);
    }

    loadProjects();
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute right-[5%] top-[15%] h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-36 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
          >
            <span>←</span>
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-12 max-w-4xl"
          >
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
              Selected Work
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Projects built to solve real problems.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              A collection of production platforms, organizational systems,
              and independent applications I have designed and built across
              different domains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {projects.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.7,
                    delay: Math.min(index * 0.06, 0.3),
                  }}
                  className="group overflow-hidden rounded-3xl border border-border bg-surface/50 transition-all duration-500 hover:border-white/15 hover:bg-surface"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-navy-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Category */}
                    <div className="absolute left-5 top-5">
                      <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-xl">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col gap-4">
                      {/* Title + Role */}
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className="text-2xl font-semibold tracking-tight text-white">
                            {project.title}
                          </h2>

                          <p className="mt-2 text-sm text-blue-400">
                            {project.role}
                          </p>
                        </div>

                        {project.status === "In Progress" ? (
                          <span className="w-fit shrink-0 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-xs text-amber-300">
                            In Progress
                          </span>
                        ) : (
                          <span className="w-fit shrink-0 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300">
                            Maintained
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-sm leading-7 text-muted sm:text-base">
                        {project.shortDescription}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-border bg-white/[0.03] px-3 py-1.5 text-xs text-muted"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      {/* Action */}
                      <div className="mt-3">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="group/link inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-blue-400"
                        >
                          View case study

                          <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                            →
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="flex min-h-[300px] items-center justify-center">
              <p className="text-sm text-muted">No projects available.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}