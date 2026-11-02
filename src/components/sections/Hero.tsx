"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  FileDown,
  Mail,
  Smartphone,
  Zap,
  Network,
  Sparkles,
  Code2,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { ProfileAsset } from "@/lib/types";
import { ProfileImage } from "../ui/ProfileImage";
import { TechnologyIcon } from "../ui/TechnologyIcon";

interface HeroProps {
  profileAsset: ProfileAsset;
}

export function Hero({ profileAsset }: HeroProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 70;
      const targetPosition =
        el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#E8EEEA] pointer-events-none" aria-hidden="true" />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro & Headline (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Introductory Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D1FAE5] border border-[#DCE5DF] text-[11px] font-mono tracking-wider text-[#0F766E] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0F766E] animate-pulse" />
              <span className="font-semibold uppercase">
                {siteConfig.hero.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[clamp(2.75rem,8vw,6.5rem)] font-bold tracking-[-0.04em] text-[#1F2933] leading-[0.95]">
              {siteConfig.name}
            </h1>
            <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold tracking-[-0.04em] text-[#1F2933] leading-[1.02]">
              Building{" "}
              <span className="text-[#0F766E]">
                thoughtful mobile
              </span>{" "}
              experiences with clean code.
            </h2>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#59665F] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {siteConfig.hero.subtext}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F766E] hover:bg-[#115E59] text-white font-semibold text-sm shadow-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <span>{siteConfig.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-[#E8EEEA] border border-[#DCE5DF] hover:border-[#0F766E] text-[#1F2933] font-medium text-sm transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#0F766E]" />
                <span>{siteConfig.hero.ctaSecondary}</span>
              </button>

              <a
                href={siteConfig.cv.downloadPath}
                download={siteConfig.cv.fileName}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-xs font-mono text-[#59665F] hover:text-[#0F766E] transition-colors"
                aria-label="Download CV directly"
              >
                <FileDown className="w-4 h-4 text-[#0F766E]" />
                <span>{siteConfig.hero.ctaDownloadCv}</span>
              </a>
            </div>

            {/* Quick Metrics / Tech pills */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F8E769]" />
                <span className="text-slate-300">Flutter & Dart</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-slate-300">GetX & Provider</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F8E769]" />
                <span className="text-slate-300">REST API Integration</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition (Profile & Mobile Mockup Accent) (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Top: Dedicated Profile Photo Frame */}
            <div className="relative mb-6">
              <ProfileImage asset={profileAsset} size="lg" />
            </div>

            {/* Bottom: Stylized Abstract Developer Card with Floating Badges */}
            <div className="relative w-full max-w-[340px] rounded-2xl bg-gradient-to-b from-surface-card/90 to-obsidian-900 border border-white/10 p-4 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                  <Smartphone className="w-3 h-3 text-flutter-sky" />
                  mobile_app.dart
                </span>
              </div>

              {/* Code snippet representation */}
              <div className="py-3 font-mono text-[11px] leading-relaxed text-slate-300">
                <p>
                  <span className="text-violet-400">class</span>{" "}
                  <span className="text-amber-300">MobileApp</span>{" "}
                  <span className="text-violet-400">extends</span>{" "}
                  <span className="text-flutter-sky">StatelessWidget</span> {"{"}
                </p>
                <p className="pl-3 text-slate-400">
                  <span className="text-violet-400">@override</span>
                </p>
                <p className="pl-3">
                  <span className="text-flutter-sky">Widget</span> build(BuildContext context) {"{"}
                </p>
                <p className="pl-6 text-emerald-400">
                  return GetMaterialApp( ... );
                </p>
                <p className="pl-3">{"}"}</p>
                <p>{"}"}</p>
              </div>

              {/* Floating Technology Pills */}
              <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1.5">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-flutter-blue/15 border border-flutter-blue/30 text-[10px] font-mono text-flutter-sky">
                  <TechnologyIcon iconId="flutter" className="w-2.5 h-2.5" /> Flutter
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-violet-600/15 border border-violet-500/30 text-[10px] font-mono text-violet-300">
                  <Zap className="w-2.5 h-2.5" /> GetX
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono text-emerald-300">
                  <Network className="w-2.5 h-2.5" /> REST APIs
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 flex justify-center">
          <button
            onClick={() => scrollTo("about")}
            className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer group"
            aria-label="Scroll to About section"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 group-hover:text-slate-300">
              Explore More
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce text-violet-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
