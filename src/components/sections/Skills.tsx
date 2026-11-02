import React from "react";
import { Wrench, Sparkles, Star } from "lucide-react";
import { skillsData } from "@/data/skills";
import { TechnologyIcon } from "../ui/TechnologyIcon";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="skills" className="py-24 relative border-t border-[#DCE5DF] bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#D1FAE5] border border-[#DCE5DF] text-[#0F766E] font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            TECHNICAL EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1F2937] leading-tight">
            Tools I Work With
          </h2>
          <p className="mt-3 text-base text-[#6B7280] leading-relaxed">
            Organized around a primary core in cross-platform mobile engineering with Flutter, complemented by backend technologies, databases, and foundational languages.
          </p>
        </div>

        {/* Categories Stack */}
        <div className="space-y-10">
          {skillsData.map((category) => {
            const isMobile = category.categoryKey === "mobile";

            return (
              <div
                key={category.categoryKey}
                className={cn(
                  "rounded-3xl p-6 sm:p-8 border transition-all duration-300",
                  isMobile
                    ? "bg-gradient-to-br from-[#064E3B]/40 via-obsidian-850 to-obsidian-900 border-[#F8E769]/40 shadow-[0_0_30px_rgba(248,231,105,0.15)]"
                    : "bg-surface-card/70 border-white/[0.08] hover:border-white/15"
                )}
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-white/5 gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      {isMobile && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-[#F8E769] text-[#064E3B] px-2 py-0.5 rounded-md">
                          <Star className="w-2.5 h-2.5 fill-[#064E3B]" /> Primary Focus
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                    </div>
                    {category.description && (
                      <p className="text-xs text-slate-400 mt-1">
                        {category.description}
                      </p>
                    )}
                  </div>

                  <span className="text-xs font-mono text-slate-400">
                    {category.skills.length} Technologies
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 pt-6">
                  {category.skills.map((skill) => {
                    const isFlutter = skill.iconId === "flutter";

                    return (
                      <div
                        key={skill.name}
                        className={cn(
                          "relative rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 group border",
                          isFlutter
                            ? "bg-flutter-blue/15 border-flutter-blue/50 shadow-md col-span-2 sm:col-span-1"
                            : "bg-obsidian-850/90 border-white/5 hover:border-white/20 hover:bg-surface-elevated"
                        )}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div
                            className={cn(
                              "w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
                              isFlutter
                                ? "bg-flutter-blue/20 border border-flutter-blue/40 shadow-sm"
                                : "bg-obsidian-900/80 border border-white/5"
                            )}
                          >
                            <TechnologyIcon
                              iconId={skill.iconId}
                              name={skill.name}
                              className={isFlutter ? "w-6 h-6" : "w-5 h-5"}
                            />
                          </div>

                          {skill.isPrimary && (
                            <span className="w-2 h-2 rounded-full bg-flutter-sky animate-pulse" />
                          )}
                        </div>

                        <div>
                          <span
                            className={cn(
                              "block font-semibold text-sm transition-colors",
                              isFlutter ? "text-flutter-sky font-bold" : "text-slate-200 group-hover:text-white"
                            )}
                          >
                            {skill.name}
                          </span>
                          {skill.note ? (
                            <span className="text-[11px] text-slate-400 font-mono mt-0.5 block truncate">
                              {skill.note}
                            </span>
                          ) : (
                            <span className="text-[11px] text-slate-400 font-mono mt-0.5 block">
                              {category.title.split(" ")[0]}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
