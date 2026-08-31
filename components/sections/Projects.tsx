"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { getFeaturedProjects } from "@/services/project.service";
import type { Project } from "@/types/project";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function loadProjects() {
      const data = await getFeaturedProjects();
      setProjects(data);
    }

    loadProjects();
  }, []);

  return (
    <section
      id="projects"
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
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Projects built to solve real problems.
          </h2>

          <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
            A selection of production platforms, organizational systems, and
            independent applications I have designed and built across
            different domains.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
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
                {/* Title + role */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-white">
                      {project.title}
                    </h3>

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
                <p className="mt-6 text-sm leading-7 text-muted sm:text-base">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
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
                <div className="mt-8">
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
            </motion.article>
          ))}
        </div>

        {/* View All Projects */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white hover:text-black"
          >
            View all projects

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}