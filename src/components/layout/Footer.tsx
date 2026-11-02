import React from "react";
import Link from "next/link";
import { Github, Mail, Heart, ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#59665F] bg-[#1F2933] py-12 text-[#A7B5AD]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0F766E] flex items-center justify-center font-bold text-white text-xs shadow-sm">
                {siteConfig.monogram}
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs text-[#A7B5AD] max-w-sm leading-relaxed">
              Building mobile experiences with Flutter. Focusing on responsive interfaces, clean code, REST APIs, and modern backend integration.
            </p>
            <span className="text-[11px] text-[#A7B5AD] font-mono block">
              {siteConfig.location}
            </span>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold block mb-3">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[#A7B5AD] hover:text-[#0F766E] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold block mb-2">
              Get Connected
            </span>
            <div className="flex flex-col space-y-2 text-xs">
              <a
                href={siteConfig.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#A7B5AD] hover:text-[#0F766E] transition-colors"
              >
                <Github className="w-4 h-4 text-[#0F766E]" />
                <span>github.com/{siteConfig.github.username}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-[#A7B5AD] hover:text-[#0F766E] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#0F766E]" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-12 pt-6 border-t border-[#59665F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7B5AD]">
          <p className="flex items-center gap-1">
            <span>© {currentYear} {siteConfig.name}. Designed and developed with care.</span>
          </p>

          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 text-[#A7B5AD] hover:text-[#0F766E] transition-colors text-xs font-mono"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
