"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { getFeaturedProjects } from "@/services/project.service";
import type { Project } from "@/types/project";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);
        setError(null);

        const data = await getFeaturedProjects();

        setProjects(data);
      } catch (error) {
        console.error("Failed to load featured projects:", error);
        setError("Unable to load projects right now.");
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden border-t border-white/[0.06] bg-background py-28 sm:py-36"
    >
      {/* =========================================================
          BACKGROUND — DIGITAL CANVAS
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-20">
        {/* Ambient glows */}
        <div className="absolute left-[-18rem] top-[15%] h-[42rem] w-[42rem] rounded-full bg-blue-600/[0.045] blur-[150px]" />

        <div className="absolute right-[-18rem] top-[35%] h-[40rem] w-[40rem] rounded-full bg-indigo-600/[0.045] blur-[160px]" />

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

        {/* Large orbital circles */}
        <div className="absolute -left-72 top-[8%] h-[42rem] w-[42rem] rounded-full border border-blue-500/[0.025]" />

        <div className="absolute -right-80 bottom-[5%] h-[46rem] w-[46rem] rounded-full border border-white/[0.025]" />
      </div>

      {/* =========================================================
          DECORATIVE PAINT
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute left-[-16rem] top-[18%] h-28 w-[42rem] rotate-[-7deg] rounded-[48%_52%_45%_55%/55%_42%_58%_45%] bg-blue-600/[0.045]"
        />

        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute right-[-18rem] bottom-[18%] h-32 w-[44rem] rotate-[8deg] rounded-[55%_45%_52%_48%/45%_56%_44%_54%] bg-blue-500/[0.035]"
        />

        {/* Floating dots */}
        <motion.span
          animate={{
            y: [0, -12, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute left-[12%] top-[28%] h-1.5 w-1.5 rounded-full bg-blue-400"
        />

        <motion.span
          animate={{
            y: [0, 10, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute right-[10%] top-[46%] h-2 w-2 rounded-full bg-blue-500"
        />

        {/* Crosshair */}
        <div className="absolute right-[8%] top-[13%] hidden h-9 w-9 opacity-20 lg:block">
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-blue-400" />
          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-blue-400" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* =======================================================
            HEADER
        ======================================================= */}

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.3em] text-blue-400/70">
                04
              </span>

              <span className="h-px w-12 bg-blue-500/40" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Selected work
              </span>
            </div>

            <div className="relative inline-block">
              <div className="absolute -inset-x-5 top-1/2 h-10 -translate-y-1/2 rounded-[50%] bg-blue-500/[0.07] blur-sm" />

              <p className="relative text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                Built with purpose
              </p>
            </div>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-[3.7rem]">
              Software that{" "}
              <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                solves.
              </span>
            </h2>

            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "8rem" }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
              className="mt-10 ml-1 w-px bg-gradient-to-b from-blue-500 via-blue-500/30 to-transparent"
            />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="relative lg:pt-12"
          >
            <span className="pointer-events-none absolute -right-3 -top-16 select-none font-mono text-[9rem] font-semibold leading-none text-blue-500/[0.025]">
              04
            </span>

            <p className="relative max-w-2xl text-xl font-medium leading-9 tracking-[-0.02em] text-white/90 sm:text-2xl sm:leading-10">
              A selection of production platforms, organizational systems, and
              independent applications built around real requirements and real
              users.
            </p>

            <p className="mt-7 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
              Each project represents a different problem space — from
              enterprise workflows and financial systems to applications built
              to make everyday experiences simpler.
            </p>
          </motion.div>
        </div>

        {/* =======================================================
            PROJECT GALLERY
        ======================================================= */}

        {loading && (
          <div className="mt-20 grid gap-8 lg:grid-cols-2">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-[2rem] border border-white/[0.07] bg-surface/40"
              >
                <div className="aspect-[16/10] animate-pulse bg-white/[0.035]" />

                <div className="space-y-4 p-7 sm:p-9">
                  <div className="h-7 w-1/2 animate-pulse rounded bg-white/[0.04]" />
                  <div className="h-4 w-1/4 animate-pulse rounded bg-white/[0.04]" />
                  <div className="h-16 w-full animate-pulse rounded bg-white/[0.04]" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="mt-20 rounded-[2rem] border border-red-500/20 bg-red-500/[0.04] p-10 text-center">
            <p className="text-sm text-red-300">{error}</p>
          </div>
        )}

        {!loading && !error && projects.length > 0 && (
          <div className="mt-20 space-y-10">
            {projects.map((project, index) => (
              <motion.article
                key={project._id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.8,
                  delay: Math.min(index * 0.08, 0.2),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-surface/40 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-surface/60">
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-navy-900">
                    {project.image?.url ? (
                      <Image
                        src={project.image.url}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
                        sizes="(max-width: 1024px) 100vw, 1280px"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-sm text-muted">
                        No project image
                      </div>
                    )}

                    {/* Image atmosphere */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    <div className="absolute inset-0 bg-blue-600/[0.04] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                    {/* Project number */}
                    <div className="absolute left-6 top-6 flex items-center gap-3">
                      <span className="font-mono text-[10px] tracking-[0.25em] text-white/60">
                        PROJECT / {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="h-px w-8 bg-white/20" />
                    </div>

                    {/* Category */}
                    <div className="absolute right-6 top-6">
                      <span className="rounded-full border border-white/10 bg-black/45 px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80 backdrop-blur-xl">
                        {project.category}
                      </span>
                    </div>

                    {/* Image bottom title */}
                    <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                            {project.title}
                          </h3>

                          <p className="mt-2 text-sm text-blue-300">
                            {project.role}
                          </p>
                        </div>

                        <span
                          className={
                            project.status === "In Progress"
                              ? "w-fit rounded-full border border-amber-400/20 bg-black/40 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-amber-300 backdrop-blur-md"
                              : project.status === "Completed"
                                ? "w-fit rounded-full border border-emerald-400/20 bg-black/40 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-emerald-300 backdrop-blur-md"
                                : "w-fit rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/60 backdrop-blur-md"
                          }
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div>
                      <p className="max-w-3xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
                        {project.shortDescription}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3.5 py-2 text-[11px] text-white/55 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.06] hover:text-blue-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="group/link inline-flex w-fit items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.035] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.08]"
                    >
                      View case study

                      <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>

                  {/* Corner paint accent */}
                  <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-blue-500/[0.04] blur-3xl transition-all duration-700 group-hover:bg-blue-500/[0.1]" />
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {!loading && !error && projects.length === 0 && (
          <div className="mt-20 flex min-h-[250px] items-center justify-center rounded-[2rem] border border-white/[0.07] bg-surface/30">
            <p className="text-sm text-muted">
              No featured projects available.
            </p>
          </div>
        )}

        {/* =======================================================
            VIEW ALL
        ======================================================= */}

        {!loading && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 flex flex-col items-center gap-5"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-blue-400 hover:text-white"
            >
              Explore all projects

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <span className="font-mono text-[9px] tracking-[0.3em] text-muted-foreground">
              THE COMPLETE COLLECTION
            </span>
          </motion.div>
        )}
      </div>

      {/* Section footer */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="mx-auto mt-20 h-px max-w-24 origin-center bg-gradient-to-r from-transparent via-blue-500/50 to-transparent sm:mt-28"
      />
    </section>
  );
}