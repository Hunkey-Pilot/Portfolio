"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, Sparkles, ArrowUpRight } from "lucide-react";
import { DiscoveredImage, ProjectData } from "@/lib/types";
import { TechnologyIcon } from "../ui/TechnologyIcon";
import { CraftyBayMockup } from "./mockups/CraftyBayMockup";
import { TaskManagementMockup } from "./mockups/TaskManagementMockup";
import { TourDeMockup } from "./mockups/TourDeMockup";

interface ProjectCardProps {
  project: ProjectData;
  discoveredImages: DiscoveredImage[];
  onOpenDetails: (project: ProjectData) => void;
  index: number;
}

export function ProjectCard({
  project,
  discoveredImages,
  onOpenDetails,
  index,
}: ProjectCardProps) {
  const hasScreenshots = discoveredImages.length > 0;
  const firstScreenshot = hasScreenshots ? discoveredImages[0] : null;

  const renderMockup = () => {
    switch (project.slug) {
      case "craftybay":
        return <CraftyBayMockup />;
      case "task-management":
        return <TaskManagementMockup />;
      case "tourde":
        return <TourDeMockup />;
      default:
        return null;
    }
  };

  return (
    <article
      className="group relative rounded-3xl border border-[#DCE5DF] bg-[#F3F6F4] p-6 sm:p-8 transition-all duration-500 hover:border-[#0F766E] hover:shadow-md flex flex-col justify-between"
      aria-labelledby={`project-${project.slug}-title`}
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between pb-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-[#0F766E] bg-[#D1FAE5] border border-[#DCE5DF] px-2.5 py-1 rounded-full">
            {project.number}
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
            {project.category}
          </span>
        </div>
        <span className="text-xs font-mono text-[#59665F] font-semibold bg-[#E7EDE9] px-2.5 py-1 rounded-lg border border-[#DCE5DF]">
          {project.year}
        </span>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6 items-center">
        {/* Left Column: Project Text Information (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <h3
            id={`project-${project.slug}-title`}
            className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1F2933] group-hover:text-[#0F766E] transition-colors"
          >
            {project.title}
          </h3>

          <p className="text-sm sm:text-base leading-relaxed text-[#59665F]">
            {project.description}
          </p>

          {/* Highlights Pills */}
          <div className="pt-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
              Highlights
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.highlights.map((h) => (
                <span
                  key={h}
                  className="text-xs px-2.5 py-1 rounded-lg bg-surface-dark/90 border border-white/5 text-slate-300 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-flutter-sky" />
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div className="pt-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
              Technologies
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techBadges.map((badge) => (
                <span
                  key={badge.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-obsidian-850 border border-white/10 text-xs font-medium text-slate-200 hover:border-violet-500/30 transition-colors"
                >
                  <TechnologyIcon iconId={badge.name} className="w-3.5 h-3.5" />
                  <span>{badge.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Visual Showcase (Mockup or Screenshot) (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          <div
            className={`relative w-full ${
              project.slug === "tourde"
                ? "max-w-[205px] sm:max-w-[220px]"
                : "max-w-[280px] sm:max-w-[300px]"
            }`}
          >
            {firstScreenshot ? (
              /* If a real discovered screenshot exists */
              <div
                onClick={() => onOpenDetails(project)}
                className={`relative aspect-[9/18.5] rounded-[26px] overflow-hidden border border-[#DCE5DF] bg-[#E1EAE4] p-2 shadow-sm cursor-pointer group/img ${
                  project.slug === "tourde" ? "lg:rounded-[24px]" : ""
                }`}
              >
                <Image
                  src={firstScreenshot.src}
                  alt={firstScreenshot.alt}
                  fill
                  className="object-contain transition-transform duration-500 group-hover/img:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-semibold text-white">Click to inspect</span>
                </div>
              </div>
            ) : (
              /* Handcrafted Interactive Flutter Mobile UI Mockup */
              <div className="relative group/mockup">
                {renderMockup()}
                <div className="mt-2 text-center">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-400 bg-obsidian-950/80 px-2 py-0.5 rounded-full border border-white/5">
                    <Sparkles className="w-3 h-3 text-flutter-sky" />
                    Interactive Flutter UI Preview
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F766E] hover:bg-[#115E59] text-white font-semibold text-xs transition-all shadow-sm cursor-pointer"
          >
            <span>View Details & Screenshots</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </button>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-obsidian-850 hover:bg-surface-elevated border border-white/10 hover:border-white/20 text-slate-200 text-xs font-medium transition-colors"
          >
            <span>Dedicated Page</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </Link>
        </div>

        <div>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-obsidian-850 border border-white/10 hover:border-white/20 text-slate-200 text-xs font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub</span>
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-obsidian-900/80 border border-white/5 text-[11px] font-mono text-slate-400"
              title="Repository will be linked upon public release"
            >
              <Github className="w-3.5 h-3.5 text-slate-400" />
              <span>GitHub (Coming Soon)</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
