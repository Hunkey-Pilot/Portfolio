"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
} from "lucide-react";
import { DiscoveredImage, ProjectData } from "@/lib/types";
import { TechnologyIcon } from "../ui/TechnologyIcon";
import { ProjectGallery } from "./ProjectGallery";

interface ProjectModalProps {
  project: ProjectData | null;
  images: DiscoveredImage[];
  onClose: () => void;
}

export function ProjectModal({ project, images, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-obsidian-900 border border-white/15 rounded-3xl p-5 sm:p-8 shadow-2xl text-slate-100 flex flex-col space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-surface-elevated/80 border border-white/10 hover:bg-surface-elevated text-slate-300 hover:text-white transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs">
            <span className="px-2.5 py-1 rounded-full bg-[#D1FAE5] border border-[#DCE5DF] text-[#0F766E] font-semibold">
              PROJECT {project.number}
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-[#0F766E] font-medium">{project.category}</span>
            <span className="text-slate-400">·</span>
            <span className="flex items-center gap-1 text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
          </div>

          <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {project.title}
          </h2>
        </div>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.techBadges.map((t) => (
            <span
              key={t.name}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-obsidian-850 border border-white/10 text-xs font-medium text-slate-200"
            >
              <TechnologyIcon iconId={t.name} className="w-3.5 h-3.5" />
              {t.name}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="p-4 rounded-2xl bg-surface-dark border border-white/5 text-sm sm:text-base leading-relaxed text-slate-300">
          {project.description}
        </div>

        {/* Highlights */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-violet-400" />
            Key Project Highlights
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-xl bg-obsidian-850/70 border border-white/5"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature List */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-flutter-sky" />
            Supported Application Features
          </h4>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs text-slate-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Screenshot Gallery Component */}
        <ProjectGallery
          images={images}
          projectSlug={project.slug}
          projectTitle={project.title}
          placeholderPrompt={project.placeholderPrompt}
        />

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F766E] hover:bg-[#115E59] text-white font-semibold text-xs transition-all shadow-sm"
          >
            <span>Open Dedicated Project Page</span>
            <ExternalLink className="w-3.5 h-3.5 text-white" />
          </Link>

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-obsidian-850 border border-white/10 hover:border-white/20 text-slate-200 text-xs font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub</span>
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-obsidian-850/60 border border-white/5 text-slate-400 text-xs font-mono"
              title="Repository link will be activated once publicly published"
            >
              <Github className="w-3.5 h-3.5 text-slate-400" />
              <span>GitHub: Private / Pending Release</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
