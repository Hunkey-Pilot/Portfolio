import React from "react";
import { GraduationCap, Award, BookmarkCheck, Star, MapPin } from "lucide-react";
import { educationData } from "@/data/education";

export function Education() {
  const edu = educationData;

  return (
    <section id="education" className="py-24 relative border-t border-[#DCE5DF] bg-[#E8EEEA]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#D1FAE5] border border-[#DCE5DF] text-[#0F766E] font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            ACADEMIC BACKGROUND
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1F2937] leading-tight">
            Education & Recognition
          </h2>
          <p className="mt-3 text-base text-[#6B7280] leading-relaxed">
            Academic foundation in computer science and specialized professional Flutter training.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main University Card (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-[#DCE5DF] bg-white p-6 sm:p-8 space-y-6 shadow-sm">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-6 border-b border-white/5 gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#D1FAE5] border border-[#DCE5DF] flex items-center justify-center text-[#0F766E] shrink-0 mt-0.5">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] tracking-tight">
                    {edu.institution}
                  </h3>
                  <span className="text-sm text-slate-300 font-medium block mt-1">
                    {edu.degree}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                    <span>·</span>
                    <span className="text-flutter-sky font-semibold">{edu.status}</span>
                  </div>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="px-4 py-2 rounded-2xl bg-obsidian-850 border border-white/10 text-center shrink-0 w-fit">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  Cumulative GPA
                </span>
                <span className="text-2xl font-bold text-white">
                  {edu.cgpa}
                </span>
                <span className="text-[10px] text-slate-400 block font-mono">scale of 4.00</span>
              </div>
            </div>

            {/* Academic Honors */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-[#0F766E]" />
                Dean&apos;s List Honors
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {edu.academicAwards.map((award, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-[#E8EEEA] border border-[#DCE5DF] flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#D1FAE5] border border-[#DCE5DF] flex items-center justify-center text-[#0F766E] shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">
                        {award.title}
                      </span>
                      <span className="text-[11px] font-mono text-[#0F766E]">
                        {award.term} {award.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Certificate Card (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl border border-[#DCE5DF] bg-white p-6 sm:p-8 space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#D1FAE5] border border-[#DCE5DF] flex items-center justify-center text-[#0F766E]">
                <BookmarkCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-flutter-sky font-semibold block">
                  Professional Certification
                </span>
                <h4 className="text-lg font-bold text-white">
                  {edu.certificate.issuer}
                </h4>
              </div>
            </div>

            <div>
              <h5 className="text-base font-bold text-white mb-2">
                {edu.certificate.title}
              </h5>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {edu.certificate.description}
              </p>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Domain: Flutter Mobile</span>
              <span className="text-emerald-400 font-semibold">Verified Credential</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
