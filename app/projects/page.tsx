"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { getProjects } from "@/services/project.service";
import type { Project } from "@/types/project";



export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* =========================================================
          HEADER
      ========================================================= */}

      <section className="relative isolate overflow-hidden border-b border-white/[0.06]">
        {/* Atmosphere */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-14rem] top-[15%] h-[36rem] w-[36rem] rounded-full bg-blue-600/[0.05] blur-[150px]" />

          <div className="absolute right-[-12rem] top-[5%] h-[38rem] w-[38rem] rounded-full bg-indigo-600/[0.045] blur-[160px]" />

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

          <div className="absolute -left-64 top-1/3 h-[38rem] w-[38rem] rounded-full border border-blue-500/[0.025]" />
        </div>

        {/* Paint stroke */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="pointer-events-none absolute left-[-14rem] top-[45%] h-24 w-[38rem] rotate-[-8deg] rounded-[48%_52%_45%_55%/55%_42%_58%_45%] bg-blue-500/[0.045]"
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-8">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-3 text-sm text-muted transition-colors hover:text-white"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-14 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"
          >
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.3em] text-blue-400/70">
                  04
                </span>

                <span className="h-px w-12 bg-blue-500/40" />

                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Project archive
                </span>
              </div>

              <div className="relative inline-block">
                <div className="absolute -inset-x-5 top-1/2 h-10 -translate-y-1/2 rounded-[50%] bg-blue-500/[0.07] blur-sm" />

                <p className="relative text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                  The collection
                </p>
              </div>

              <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-[5rem]">
                Work built for{" "}
                <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                  real problems.
                </span>
              </h1>
            </div>

            <div className="relative lg:pt-12">
              <span className="pointer-events-none absolute -right-4 -top-20 select-none font-mono text-[10rem] font-semibold leading-none text-blue-500/[0.025]">
                04
              </span>

              <p className="relative max-w-2xl text-xl font-medium leading-9 tracking-[-0.02em] text-white/90 sm:text-2xl sm:leading-10">
                Production platforms, organizational systems, and independent
                applications shaped by the needs of the people and businesses
                they serve.
              </p>

              <p className="mt-7 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
                Explore the projects, the problems behind them, and the
                technical decisions that turned requirements into working
                software.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          PROJECT COLLECTION
      ========================================================= */}

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-15rem] top-[30%] h-[35rem] w-[35rem] rounded-full bg-blue-600/[0.025] blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {loading ? (
            <div className="grid gap-8 md:grid-cols-2">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="overflow-hidden rounded-[2rem] border border-white/[0.07] bg-surface/40"
                >
                  <div className="aspect-[16/10] animate-pulse bg-white/[0.035]" />

                  <div className="space-y-4 p-7">
                    <div className="h-7 w-2/3 animate-pulse rounded bg-white/[0.04]" />
                    <div className="h-4 w-1/3 animate-pulse rounded bg-white/[0.04]" />
                    <div className="h-16 w-full animate-pulse rounded bg-white/[0.04]" />
                  </div>
                </div>
              ))}
            </div>
          ) : projects.length > 0 ? (
            <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.article
                  key={project._id}
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
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: Math.min(index * 0.05, 0.25),
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-surface/40 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-surface/60">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-navy-900">
                      <Image
                        src={project.image.url}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

                      {/* Project index */}
                      <div className="absolute left-5 top-5">
                        <span className="font-mono text-[10px] tracking-[0.25em] text-white/60">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Category */}
                      <div className="absolute right-5 top-5">
                        <span className="rounded-full border border-white/10 bg-black/45 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-white/75 backdrop-blur-xl">
                          {project.category}
                        </span>
                      </div>

                      {/* Bottom project identity */}
                      <div className="absolute bottom-5 left-5 right-5">
                        <h2 className="text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
                          {project.title}
                        </h2>

                        <p className="mt-1.5 text-sm text-blue-300">
                          {project.role}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 sm:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                          {project.category}
                        </p>

                        <span
                          className={
                            project.status === "In Progress"
                              ? "rounded-full border border-amber-400/20 bg-amber-500/[0.06] px-3 py-1 text-[9px] uppercase tracking-[0.15em] text-amber-300"
                              : "rounded-full border border-emerald-400/20 bg-emerald-500/[0.06] px-3 py-1 text-[9px] uppercase tracking-[0.15em] text-emerald-300"
                          }
                        >
                          {project.status}
                        </span>
                      </div>

                      <p className="mt-5 line-clamp-2 min-h-[3.5rem] text-sm leading-7 text-muted sm:text-base">
                        {project.shortDescription}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[11px] text-white/50 transition-colors duration-300 hover:border-blue-400/30 hover:text-blue-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      <div className="mt-7 border-t border-white/[0.06] pt-6">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="group/link inline-flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-blue-400"
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

      {/* Footer line */}
      <div className="mx-auto h-px max-w-24 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </main>
  );
}