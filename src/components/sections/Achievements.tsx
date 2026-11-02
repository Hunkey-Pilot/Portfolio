import React from "react";
import { Trophy, Award, ShieldCheck, CheckCircle2, Users, Flame } from "lucide-react";
import { hackathonAchievementData } from "@/data/achievements";

export function Achievements() {
  const data = hackathonAchievementData;

  return (
    <section id="achievements" className="py-24 relative border-t border-[#DCE5DF] bg-[#D1FAE5]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-[#DCE5DF] text-[#0F766E] font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            COMPETITIVE RECOGNITION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1F2937] leading-tight">
            {data.title}
          </h2>
          <p className="mt-3 text-base text-[#6B7280] leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Featured Hackathon Card */}
        <div className="relative rounded-3xl border border-[#DCE5DF] bg-white p-6 sm:p-10 shadow-sm overflow-hidden group">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Hackathon info & Branding (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#D1FAE5] border border-[#DCE5DF] text-[#0F766E] text-xs font-mono font-semibold">
                <Trophy className="w-4 h-4 text-[#0F766E]" />
                <span>{data.competition}</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1F2937] tracking-tight">
                  {data.projectName}
                </h3>
                <span className="text-xs font-mono text-[#0F766E] block mt-1">
                  {data.organizer}
                </span>
                <span className="text-xs font-mono text-[#6B7280] block mt-0.5">
                  {data.track}
                </span>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#6B7280]">
                <Users className="w-4 h-4 text-[#6B7280]" />
                <span>128 Participating Teams</span>
              </div>
            </div>

            {/* Middle Column: Project Description & Key Highlights (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <p className="text-sm sm:text-base leading-relaxed text-[#6B7280]">
                {data.projectDescription}
              </p>

              <div className="space-y-2 pt-2">
                {data.keyPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs text-[#6B7280]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Ranking Display (3 cols) */}
            <div className="lg:col-span-3 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#D1FAE5] border border-[#DCE5DF] text-center shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#DCE5DF] flex items-center justify-center text-[#0F766E] mb-2">
                <Award className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Official Result
              </span>

              {/* Ranking 10 / 128 */}
              <div className="my-2">
                <div className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F766E]">
                  10th
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  Among <strong className="text-[#1F2937]">128</strong> Teams
                </div>
              </div>

              <span className="inline-block mt-2 px-2.5 py-1 rounded-full bg-[#0F766E] border border-[#115E59] text-[10px] font-mono font-semibold text-white">
                Top 8% Finalist
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
