"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import type { Project } from "@/types/project";
import type { ProjectShowcase } from "@/services/projectShowcase.service";

interface ProjectCaseStudyProps {
  project: Project;
  showcase: ProjectShowcase;
}

export default function ProjectCaseStudy({
  project,
  showcase,
}: ProjectCaseStudyProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute right-[5%] top-[15%] h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-5 pb-20 pt-36 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
          >
            <span>←</span>
            Back to projects
          </Link>

          <div className="mt-12 grid items-end gap-12 lg:grid-cols-[1fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                {project.category}
              </p>

              <h1 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
                {project.title}
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
                {project.shortDescription}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-border bg-white/5 px-4 py-2 text-sm text-muted">
                  {project.role}
                </span>

                <span className="rounded-full border border-border bg-white/5 px-4 py-2 text-sm text-muted">
                  {project.status}
                </span>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-blue-400 hover:text-white"
                  >
                    View live project
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                  >
                    View on GitHub
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-navy-900 shadow-2xl"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={project.image}
                  alt={`${project.title} project`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-b border-border py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                Overview
              </p>
            </div>

            <div>
              <p className="max-w-4xl text-xl leading-9 text-white sm:text-2xl sm:leading-10">
                {showcase.overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution */}
      <section className="bg-surface/30 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                My contribution
              </p>
            </div>

            <div>
              <ul className="space-y-5">
                {showcase.contribution.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="flex gap-4 text-base leading-8 text-muted sm:text-lg"
                  >
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      {showcase.impact && showcase.impact.length > 0 && (
        <section className="border-b border-border py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
              Impact
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {showcase.impact.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="rounded-3xl border border-border bg-background/60 p-7"
                >
                  <span className="text-3xl font-semibold text-blue-400">
                    0{index + 1}
                  </span>

                  <p className="mt-5 text-base leading-7 text-muted">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Highlights */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            What the platform does
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {showcase.highlights.map((highlight, index) => (
              <motion.article
                key={highlight.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="rounded-3xl border border-border bg-surface/40 p-7 sm:p-8"
              >
                <span className="text-sm font-medium text-blue-400">
                  0{index + 1}
                </span>

                <h2 className="mt-5 text-xl font-semibold text-white">
                  {highlight.title}
                </h2>

                <p className="mt-4 leading-7 text-muted">
                  {highlight.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="border-y border-border bg-surface/30 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                Technology
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-border bg-background px-5 py-2.5 text-sm text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual showcase */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
           <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
              Selected interfaces
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              A closer look at the product.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              A curated selection of screens highlighting the product experience,
              workflows, and interfaces I contributed to.
            </p>
          </div>

          <div className="mt-14 space-y-8">
            {showcase.images.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.7,
                  delay: Math.min(index * 0.05, 0.2),
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-border bg-navy-900 shadow-2xl"
              >
                <Image
                  src={image}
                  alt={`${project.title} interface screenshot ${index + 1}`}
                  width={1600}
                  height={1000}
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="pointer-events-none absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-medium text-white/70 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project features */}
      <section className="border-t border-border py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            Key features
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {project.features.map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-border bg-white/5 px-5 py-3 text-sm text-muted"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Back to projects */}
      <section className="border-t border-border py-10 sm:py-10 px-20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-sm font-medium text-white"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            All projects
          </Link>

          <div className="flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-border px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/5"
              >
                View live project
                <span className="transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-border px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/5"
              >
                View on GitHub
                <span className="transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            )}

            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-blue-400 hover:text-white"
            >
              Let's work together
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}