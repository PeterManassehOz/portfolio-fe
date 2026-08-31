"use client";

import { motion } from "motion/react";

import { useEffect, useState } from "react";
import { getAbout } from "@/services/about.service";
import type { About as AboutData } from "@/types/about";

export default function About() {

  const [about, setAbout] = useState<AboutData | null>(null);

  useEffect(() => {
    async function loadAbout() {
      try {
        const data = await getAbout();
        setAbout(data);
      } catch (error) {
        console.error("Failed to load about data:", error);
      }
    }

    loadAbout();
  }, []);

  if (!about) {
    return null;
  }

  return (
    <section
      id="about"
      className="relative border-t border-border bg-background py-28 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
              {about.heading}
            </p>

            <h2 className="mt-4 max-w-md text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Engineering with purpose.
            </h2>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-3xl"
          >
            <p className="text-xl leading-9 text-white sm:text-2xl sm:leading-10">
              {about.introduction}
            </p>

            <p className="mt-7 text-base leading-8 text-muted sm:text-lg">
              {about.description}
            </p>

            <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
              {about.background}
            </p>

            {/* Quick facts */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface/60 p-5">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Based in
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                 {about.basedIn}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface/60 p-5">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Availability
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                  {about.availability}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface/60 p-5">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Primary focus
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                  {about.primaryFocus}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface/60 p-5">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Core stack
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                 {about.coreStack}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}