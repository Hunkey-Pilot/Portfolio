import React from "react";
import { Smartphone, Network, Sparkles, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export function About() {
  const cards = [
    {
      title: "Mobile Development",
      description: "Cross-platform mobile application development with Flutter and Dart.",
      icon: Smartphone,
      accent: "bg-[#D1FAE5] border-[#DCE5DF] text-[#0F766E]",
    },
    {
      title: "API Integration",
      description: "Connecting mobile applications with REST APIs and backend services.",
      icon: Network,
      accent: "bg-[#D1FAE5] border-[#DCE5DF] text-[#0F766E]",
    },
    {
      title: "Continuous Learning",
      description: "Exploring backend development, databases, and software engineering practices.",
      icon: Sparkles,
      accent: "bg-[#D1FAE5] border-[#DCE5DF] text-[#0F766E]",
    },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-[#DCE5DF] bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#D1FAE5] border border-[#DCE5DF] text-[#0F766E] font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            {siteConfig.about.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1F2937] leading-tight">
            {siteConfig.about.heading}
          </h2>
        </div>

        {/* Narrative & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-8 space-y-4 text-[#6B7280] leading-relaxed text-base sm:text-lg">
            <p>
              I&apos;m a Computer Science and Engineering student at{" "}
              <strong className="text-white font-medium">Daffodil International University</strong>{" "}
              and an independent Flutter developer. Since 2024, I&apos;ve been developing mobile
              applications with an emphasis on responsive interfaces, reusable components, state
              management, and REST API integration.
            </p>
            <p>
              My development experience includes{" "}
              <span className="text-flutter-sky font-semibold">Flutter</span>,{" "}
              <span className="text-flutter-sky font-semibold">Dart</span>,{" "}
              <span className="text-violet-300 font-semibold">GetX</span>,{" "}
              <span className="text-violet-300 font-semibold">Provider</span>, Firebase, and Supabase.
              I&apos;m also developing my backend skills with Node.js, TypeScript, and database technologies.
            </p>
            <p>
              I value <span className="text-white font-medium">clean code</span>,{" "}
              <span className="text-white font-medium">maintainability</span>,{" "}
              <span className="text-white font-medium">performance</span>, and user-friendly design.
            </p>
          </div>

          {/* Quick Pillars Sidebar */}
          <div className="lg:col-span-4 rounded-2xl bg-obsidian-850 border border-white/10 p-5 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block pb-2 border-b border-white/5">
              Development Focus
            </span>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-flutter-sky shrink-0" />
                <span>Responsive Flutter UI across devices</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Reactive state management (GetX / Provider)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Asynchronous REST API consumption</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Expanding Node.js & TypeScript backend skills</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="relative rounded-2xl border border-[#DCE5DF] bg-white p-6 transition-all duration-300 hover:border-[#0F766E] hover:-translate-y-1 flex flex-col shadow-sm"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${c.accent} border flex items-center justify-center mb-4`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] mb-2 font-sans">
                  {c.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {c.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
