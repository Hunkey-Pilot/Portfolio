import React from "react";
import { Briefcase, Calendar, CheckCircle2, Terminal } from "lucide-react";
import { experienceData } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative border-t border-[#DCE5DF] bg-[#E8EEEA]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#D1FAE5] border border-[#DCE5DF] text-[#0F766E] font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            PRACTICE & EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1F2937] leading-tight">
            My Development Journey
          </h2>
          <p className="mt-3 text-base text-[#6B7280] leading-relaxed">
            Hands-on self-directed mobile engineering focusing on clean Flutter code, reactive architecture, and continuous learning.
          </p>
        </div>

        {/* Experience Timeline / Card */}
        <div className="max-w-4xl space-y-8">
          {experienceData.map((exp) => (
            <div
              key={exp.role}
              className="relative rounded-3xl border border-[#DCE5DF] bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-[#0F766E]"
            >
              {/* Header meta */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/5 gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#D1FAE5] border border-[#DCE5DF] flex items-center justify-center text-[#0F766E]">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1F2937] tracking-tight">
                      {exp.role}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-flutter-sky mt-1 block">
                    {exp.employmentType}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-obsidian-850 border border-white/10 text-xs font-mono text-slate-300 w-fit">
                  <Calendar className="w-3.5 h-3.5 text-[#0F766E]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base leading-relaxed text-slate-300 my-4">
                {exp.description}
              </p>

              {/* Key Responsibilities */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                  Key Responsibilities & Practices
                </span>
                <ul className="grid grid-cols-1 gap-2.5">
                  {exp.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 p-2.5 rounded-xl bg-obsidian-850/60 border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="pt-5 mt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">
                  Technologies:
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-obsidian-950 border border-white/5 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
