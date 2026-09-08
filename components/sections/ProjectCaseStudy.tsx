"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import type { Project } from "@/types/project";

interface ProjectCaseStudyProps {
  project: Project;
}

export default function ProjectCaseStudy({
  project,
}: ProjectCaseStudyProps) {
  const { showcase } = project;

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* =========================================================
          HERO — PROJECT COVER
      ========================================================= */}

      <section className="relative isolate overflow-hidden border-b border-white/[0.06]">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-20">
          <div className="absolute left-[-15rem] top-[15%] h-[38rem] w-[38rem] rounded-full bg-blue-600/[0.06] blur-[150px]" />

          <div className="absolute right-[-12rem] top-[5%] h-[42rem] w-[42rem] rounded-full bg-indigo-600/[0.055] blur-[170px]" />

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

          <div className="absolute -left-64 top-[30%] h-[40rem] w-[40rem] rounded-full border border-blue-500/[0.025]" />
        </div>

        {/* Paint */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="pointer-events-none absolute left-[-16rem] top-[38%] h-28 w-[42rem] rotate-[-8deg] rounded-[48%_52%_45%_55%/55%_42%_58%_45%] bg-blue-500/[0.045]"
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8 lg:pt-36">
          {/* Back */}
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-sm text-muted transition-colors hover:text-white"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Back to projects
          </Link>

          <div className="mt-14">
            {/* Project metadata */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-wrap items-center gap-4"
            >
              <span className="font-mono text-[10px] tracking-[0.3em] text-blue-400">
                PROJECT
              </span>

              <span className="h-px w-10 bg-blue-500/40" />

              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                {project.category}
              </span>
            </motion.div>

            {/* Main title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-7 max-w-6xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-[7rem]"
            >
              {project.title}
            </motion.h1>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9"
              >
                {project.description}
              </motion.p>

              {/* Meta */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                }}
                className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end"
              >
                <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 text-xs text-muted">
                  {project.role}
                </span>

                <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 text-xs text-muted">
                  {project.status}
                </span>
              </motion.div>
            </div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-blue-400 hover:text-white"
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
                  className="group inline-flex items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.035] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.06]"
                >
                  View on GitHub

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              )}
            </motion.div>
          </div>

          {/* =====================================================
              HERO IMAGE
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative mt-16 overflow-hidden rounded-[2rem] border border-white/[0.09] bg-navy-900 shadow-2xl sm:mt-20"
          >
            <div className="relative aspect-[16/9]">
              {project.image?.url ? (
                <Image
                  src={project.image.url}
                  alt={`${project.title} project`}
                  fill
                  priority
                  className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.015]"
                  sizes="(max-width: 1024px) 100vw, 1280px"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-sm text-muted">
                  No project image
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Image label */}
            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full border border-white/10 bg-black/45 px-4 py-2 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />

              <span className="font-mono text-[9px] tracking-[0.2em] text-white/65">
                PROJECT PREVIEW
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          OVERVIEW
      ========================================================= */}

      <section className="relative overflow-hidden border-b border-white/[0.06] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.3fr_1fr] lg:gap-24">
            <div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.25em] text-blue-400/70">
                  01
                </span>

                <span className="h-px w-10 bg-blue-500/30" />
              </div>

              <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Overview
              </p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="max-w-5xl text-2xl font-medium leading-[1.45] tracking-[-0.025em] text-white sm:text-3xl sm:leading-[1.4]"
            >
              {showcase.overview}
            </motion.p>
          </div>
        </div>
      </section>

      {/* =========================================================
         WHAT IT DOES
      ========================================================= */}

      {showcase.whatItDoes.length > 0 && (
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.3fr_1fr] lg:gap-24">
              <div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs tracking-[0.25em] text-blue-400/70">
                    02
                  </span>

                  <span className="h-px w-10 bg-blue-500/30" />
                </div>

                <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                  What it does
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {showcase.whatItDoes.map((item, index) => (
                  <motion.article
                    key={`${item}-${index}`}
                    initial={{
                      opacity: 0,
                      y: 25,
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
                      duration: 0.6,
                      delay: index * 0.07,
                    }}
                    className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-surface/35 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-surface/60 sm:p-8"
                  >
                    <span className="font-mono text-xs tracking-[0.2em] text-blue-400/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="mt-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
                      {item}
                    </p>

                    <div className="mt-7 h-px w-10 bg-blue-500/30 transition-all duration-500 group-hover:w-20" />
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          CONTRIBUTION
      ========================================================= */}

      <section className="relative overflow-hidden bg-surface/30 py-24 sm:py-32">
        <div className="pointer-events-none absolute right-[-12rem] top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-blue-600/[0.035] blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.3fr_1fr] lg:gap-24">
            <div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.25em] text-blue-400/70">
                  03
                </span>

                <span className="h-px w-10 bg-blue-500/30" />
              </div>

              <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                My contribution
              </p>
            </div>

            <div>
              <ul className="space-y-6">
                {showcase.contribution.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.06,
                    }}
                    className="group flex gap-5 border-b border-white/[0.06] pb-6 text-base leading-8 text-muted sm:text-lg"
                  >
                    <span className="mt-3 flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full border border-blue-400/40">
                      <span className="h-1 w-1 rounded-full bg-blue-400 transition-transform duration-300 group-hover:scale-150" />
                    </span>

                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMPACT
      ========================================================= */}

      {showcase.impact && showcase.impact.length > 0 && (
        <section className="relative overflow-hidden border-b border-white/[0.06] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.25em] text-blue-400/70">
                04
              </span>

              <span className="h-px w-10 bg-blue-500/30" />

              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Impact
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {showcase.impact.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 25,
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
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-surface/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-surface/60 sm:p-8"
                >
                  <span className="font-mono text-4xl font-semibold text-blue-400/70 transition-colors duration-300 group-hover:text-blue-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-7 text-sm leading-7 text-muted sm:text-base">
                    {item}
                  </p>

                  <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-blue-500/[0.05] blur-3xl transition-all duration-500 group-hover:bg-blue-500/[0.12]" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
         TECHNICAL HIGHLIGHTS
      ========================================================= */}

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.3fr_1fr] lg:gap-24">
            <div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.25em] text-blue-400/70">
                  05
                </span>

                <span className="h-px w-10 bg-blue-500/30" />
              </div>

              <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Technical   Highlights
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {showcase.highlights.map((highlight, index) => (
                <motion.article
                  key={highlight.title}
                  initial={{
                    opacity: 0,
                    y: 25,
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
                    duration: 0.6,
                    delay: index * 0.07,
                  }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-surface/35 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-surface/60 sm:p-8"
                >
                  <span className="font-mono text-xs tracking-[0.2em] text-blue-400/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-white">
                    {highlight.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                    {highlight.description}
                  </p>

                  <div className="mt-7 h-px w-10 bg-blue-500/30 transition-all duration-500 group-hover:w-20" />
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}

      <section className="border-y border-white/[0.06] bg-surface/30 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.3fr_1fr] lg:gap-24">
            <div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.25em] text-blue-400/70">
                  06
                </span>

                <span className="h-px w-10 bg-blue-500/30" />
              </div>

              <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Technology
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/[0.07] bg-background/70 px-4 py-2.5 text-xs text-white/55 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.06] hover:text-blue-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VISUAL SHOWCASE
      ========================================================= */}

      {showcase.images && showcase.images.length > 0 && (
        <section className="relative overflow-hidden py-24 sm:py-36">
          <div className="pointer-events-none absolute left-[-18rem] top-[25%] h-[40rem] w-[40rem] rounded-full bg-blue-600/[0.035] blur-[150px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs tracking-[0.25em] text-blue-400/70">
                    07
                  </span>

                  <span className="h-px w-10 bg-blue-500/30" />

                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    Selected interfaces
                  </p>
                </div>

                <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl">
                  A closer look at the{" "}
                  <span className="bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent">
                    product.
                  </span>
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                A curated selection of screens highlighting the product
                experience, workflows, and interfaces contributed to throughout
                the project.
              </p>
            </div>

            <div className="mt-16 space-y-10">
              {showcase.images.map((image, index) => (
                <motion.figure
                  key={image.publicId}
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
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: Math.min(index * 0.05, 0.2),
                  }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-navy-900 shadow-2xl"
                >
                  {image.url ? (
                    <Image
                      src={image.url}
                      alt={`${project.title} interface screenshot ${index + 1}`}
                      width={1600}
                      height={1000}
                      className="h-auto w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.012]"
                      sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                  ) : (
                    <div className="flex aspect-[16/10] items-center justify-center text-sm text-muted">
                      No interface image
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <figcaption className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-xl">
                    <span className="font-mono text-[9px] tracking-[0.2em] text-white/60">
                      SCREEN / {String(index + 1).padStart(2, "0")}
                    </span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          KEY FEATURES
      ========================================================= */}

      <section className="border-t border-white/[0.06] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.3fr_1fr] lg:gap-24">
            <div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.25em] text-blue-400/70">
                  08
                </span>

                <span className="h-px w-10 bg-blue-500/30" />
              </div>

              <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Key features
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {project.features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-white/[0.07] bg-white/[0.025] px-5 py-3 text-sm text-white/55 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.06] hover:text-blue-300"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          END / NAVIGATION
      ========================================================= */}

      <section className="border-t border-white/[0.06] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-sm font-medium text-white"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            All projects
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-white/[0.08] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.06]"
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
                className="group inline-flex items-center gap-3 rounded-full border border-white/[0.08] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.06]"
              >
                View on GitHub

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            )}

            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-blue-400 hover:text-white"
            >
              Let's work together

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}