"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { getHero } from "@/services/hero.service";
import { getSocialLinks } from "@/services/social.service";

import type { Hero } from "@/types/hero";
import type { SocialLink } from "@/types/social-links";

export default function Footer() {
  const [hero, setHero] = useState<Hero | null>(null);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  useEffect(() => {
    async function loadFooterData() {
      const [heroData, socials] = await Promise.all([
        getHero(),
        getSocialLinks(),
      ]);

      setHero(heroData);
      setSocialLinks(socials);
    }

    loadFooterData();
  }, []);

  const currentYear = new Date().getFullYear();

  const navigation = [
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Achievements", href: "/#achievements" },
    { label: "Education", href: "/#education" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/[0.06] bg-background">
      {/* Atmospheric canvas */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Blue glow */}
        <div className="absolute left-[-18rem] top-[-12rem] h-[38rem] w-[38rem] rounded-full bg-blue-600/[0.035] blur-[150px]" />

        <div className="absolute right-[-15rem] bottom-[-15rem] h-[38rem] w-[38rem] rounded-full bg-indigo-600/[0.035] blur-[150px]" />

        {/* Canvas grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        {/* Large orbital ring */}
        <div className="absolute -right-64 top-[-12rem] h-[42rem] w-[42rem] rounded-full border border-blue-400/[0.025]" />

        <div className="absolute -right-52 top-[-4rem] h-[30rem] w-[30rem] rounded-full border border-blue-400/[0.018]" />

        {/* Organic paint strokes */}
        <div className="absolute left-[-12rem] top-[35%] h-20 w-[34rem] rotate-[-8deg] rounded-[50%_50%_45%_55%/55%_42%_58%_45%] bg-blue-500/[0.035]" />

        <div className="absolute right-[-10rem] bottom-[20%] h-16 w-[28rem] rotate-[10deg] rounded-[48%_52%_55%_45%/45%_58%_42%_55%] bg-blue-500/[0.025]" />

        {/* Artistic marks */}
        <div className="absolute left-[8%] top-[20%] h-2 w-2 rounded-full bg-blue-400/30" />

        <div className="absolute left-[8.4%] top-[20%] h-7 w-px bg-blue-400/15" />

        <div className="absolute right-[12%] bottom-[22%] h-1.5 w-1.5 rounded-full bg-blue-400/30" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-20 sm:py-24">
          {/* Top editorial statement */}
          <div className="grid gap-10 border-b border-white/[0.06] pb-16 lg:grid-cols-[1.4fr_0.6fr] lg:pb-20">
            {/* Brand */}
            <div className="relative">
              <div className="mb-7 flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.3em] text-blue-400/70">
                  08
                </span>

                <span className="h-px w-12 bg-blue-500/40" />

                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  End of the canvas
                </span>
              </div>

              <div className="relative inline-block">
                <div className="absolute -inset-x-6 top-1/2 h-12 -translate-y-1/2 rounded-[50%] bg-blue-500/[0.055] blur-sm" />

                <Link
                  href="/"
                  className="group relative inline-block text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl"
                >
                  {hero?.name ?? "Portfolio"}
                </Link>
              </div>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-muted sm:text-base">
                {hero?.shortBio ??
                  "I build thoughtful digital experiences and reliable software systems across the web."}
              </p>

              {hero?.availability && (
                <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2.5 backdrop-blur-xl">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-xs font-medium text-white/60">
                    {hero.availability}
                  </span>
                </div>
              )}
            </div>

            {/* Closing statement */}
            <div className="relative lg:pt-12">
              <span className="pointer-events-none absolute -right-2 -top-12 select-none font-mono text-[9rem] font-semibold leading-none text-blue-500/[0.025]">
                08
              </span>

              <p className="relative max-w-sm text-lg font-medium leading-8 tracking-[-0.02em] text-white/85 sm:text-xl">
                Good software is built with intention, curiosity, and a
                willingness to keep improving.
              </p>
            </div>
          </div>

          {/* Navigation / Connect / Contact */}
          <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[0.8fr_0.8fr_1.4fr] lg:gap-20">
            {/* Navigation */}
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-blue-400/70">
                Explore
              </p>

              <nav className="mt-7 flex flex-col gap-4">
                {navigation.map((item, index) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex w-fit items-center gap-3 text-sm text-muted transition-colors duration-300 hover:text-white"
                  >
                    <span className="font-mono text-[9px] text-white/20 transition-colors duration-300 group-hover:text-blue-400/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-blue-400/70">
                Connect
              </p>

              <div className="mt-7 flex flex-col gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-fit items-center gap-3 text-sm text-muted transition-colors duration-300 hover:text-white"
                  >
                    <span>{social.label}</span>

                    <span className="translate-x-[-4px] text-xs text-blue-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-surface/35 p-7 sm:p-8">
              {/* Decorative number */}
              <span className="pointer-events-none absolute -right-3 -top-5 select-none font-mono text-[7rem] font-semibold leading-none text-white/[0.025]">
                07
              </span>

              {/* Paint accent */}
              <div className="pointer-events-none absolute -right-20 top-1/2 h-20 w-56 rotate-[-10deg] rounded-[50%] bg-blue-500/[0.04]" />

              <div className="relative">
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-blue-400/70">
                  Start a conversation
                </p>

                <p className="mt-5 max-w-md text-sm leading-7 text-muted">
                  Have a project, opportunity, or idea worth discussing?
                  I&apos;d be glad to hear about it.
                </p>

                {hero?.email && (
                  <a
                    href={`mailto:${hero.email}`}
                    className="group mt-6 inline-flex items-center gap-3 text-sm font-medium text-white transition-colors duration-300 hover:text-blue-400"
                  >
                    <span className="break-all">{hero.email}</span>

                    <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                )}
              </div>

              {/* Corner mark */}
              <div className="absolute bottom-6 right-6 h-5 w-5 opacity-40">
                <span className="absolute right-0 top-0 h-px w-5 bg-blue-400/60" />
                <span className="absolute right-0 top-0 h-5 w-px bg-blue-400/60" />
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.06] pt-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted">
                © {currentYear} {hero?.name ?? "Portfolio"}. All rights
                reserved.
              </p>

              <Link
                href="/"
                className="group flex w-fit items-center gap-2 text-xs text-muted transition-colors duration-300 hover:text-white"
              >
                Back to top

                <span className="transition-transform duration-300 group-hover:-translate-y-1">
                  ↑
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}