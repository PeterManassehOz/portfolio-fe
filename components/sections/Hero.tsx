"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import { siteInfo } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen overflow-hidden"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute right-[5%] top-[20%] h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute bottom-[-10%] left-[35%] h-80 w-80 rounded-full bg-indigo-600/10 blur-[130px]" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.8)]" />

              <span className="text-sm font-medium uppercase tracking-[0.22em] text-blue-400">
                {siteInfo.availability}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-muted"
            >
              {siteInfo.title}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Building software
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                that solves real problems.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg"
            >
              {siteInfo.shortBio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-blue-50"
              >
                View my work

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <a
                href={siteInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-border bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                View résumé
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted"
            >
              <span>React</span>
              <span>TypeScript</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </motion.div>
          </div>

          {/* Right side — profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Glow */}
            <div className="absolute inset-8 rounded-full bg-blue-600/20 blur-[100px]" />

            {/* Image frame */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-navy-900/80 shadow-2xl">
              <Image
                src={siteInfo.profileImage}
                alt={siteInfo.name}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 80vw, 400px"
              />

              {/* Image gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Floating information */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-xl">
                <p className="text-sm font-medium text-white">
                  {siteInfo.name}
                </p>

                <p className="mt-1 text-xs text-muted">
                  Full-Stack Software Engineer
                </p>
              </div>
            </div>

            {/* Decorative border */}
            <div className="pointer-events-none absolute -right-3 -top-3 -z-10 h-full w-full rounded-[2rem] border border-blue-500/20" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-8 w-px bg-gradient-to-b from-blue-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}