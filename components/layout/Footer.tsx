"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { getSiteInfo } from "@/services/site.service";
import { getSocialLinks } from "@/services/social.service";

import type { SiteInfo } from "@/types/site";
import type { SocialLink } from "@/types/social-links";

export default function Footer() {
  const [siteInfo, setSiteInfo] = useState<SiteInfo | null>(null);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  useEffect(() => {
    async function loadFooterData() {
      const [site, socials] = await Promise.all([
        getSiteInfo(),
        getSocialLinks(),
      ]);

      setSiteInfo(site);
      setSocialLinks(socials);
    }

    loadFooterData();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.6fr_0.8fr_0.8fr_1.1fr]">
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="/"
              className="group inline-flex items-center text-xl font-semibold tracking-tight text-white"
            >
              <span className="transition-colors duration-300 group-hover:text-blue-400">
                {siteInfo?.name ?? "Portfolio"}
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
              {siteInfo?.shortBio ??
                "I build thoughtful digital experiences and reliable software systems across the web."}
            </p>

            {siteInfo?.availability && (
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3.5 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                <span className="text-xs font-medium text-muted">
                  {siteInfo.availability}
                </span>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
              Explore
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              <Link
                href="/#about"
                className="w-fit text-sm text-muted transition-colors duration-300 hover:text-white"
              >
                About
              </Link>

              <Link
                href="/#experience"
                className="w-fit text-sm text-muted transition-colors duration-300 hover:text-white"
              >
                Experience
              </Link>

              <Link
                href="/#projects"
                className="w-fit text-sm text-muted transition-colors duration-300 hover:text-white"
              >
                Projects
              </Link>

              <Link
                href="/#skills"
                className="w-fit text-sm text-muted transition-colors duration-300 hover:text-white"
              >
                Skills
              </Link>

              <Link
                href="/#contact"
                className="w-fit text-sm text-muted transition-colors duration-300 hover:text-white"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
              Connect
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-fit items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-white"
                >
                  <span>{social.label}</span>

                  <span className="text-xs opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
              Start a conversation
            </p>

            <p className="mt-6 text-sm leading-7 text-muted">
              Have a project, opportunity, or idea worth discussing?
            </p>

            {siteInfo?.email && (
              <a
                href={`mailto:${siteInfo.email}`}
                className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors duration-300 hover:text-blue-400"
              >
                <span>{siteInfo.email}</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-border pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted">
              © {currentYear} {siteInfo?.name ?? "Portfolio"}. All rights
              reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="/#about"
                className="text-xs text-muted transition-colors duration-300 hover:text-white"
              >
                About
              </Link>

              <Link
                href="/#projects"
                className="text-xs text-muted transition-colors duration-300 hover:text-white"
              >
                Projects
              </Link>

              <Link
                href="/#contact"
                className="text-xs text-muted transition-colors duration-300 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}