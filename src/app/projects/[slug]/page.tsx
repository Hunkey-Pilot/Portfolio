import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Calendar,
  Layers,
  Sparkles,
  Github,
  FolderOpen,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { projectsData } from "@/data/projects";
import { getProfileImage, getProjectImages } from "@/lib/assets";
import { TechnologyIcon } from "@/components/ui/TechnologyIcon";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { CraftyBayMockup } from "@/components/projects/mockups/CraftyBayMockup";
import { TaskManagementMockup } from "@/components/projects/mockups/TaskManagementMockup";
import { TourDeMockup } from "@/components/projects/mockups/TourDeMockup";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — ${project.category} | Anupam Pal`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Automatic build-time / server-side image discovery
  const profileAsset = getProfileImage();
  const projectImages = getProjectImages(project.slug);

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
    <div className="min-h-screen bg-[#F1F4F2] text-[#1F2933] flex flex-col selection:bg-emerald-100 selection:text-[#1F2933]">
      <Navbar profileAsset={profileAsset} />

      <main className="flex-1 pt-32 pb-24">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          {/* Back Navigation Breadcrumb */}
          <div>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#59665F] hover:text-[#0F766E] transition-colors group p-2 rounded-xl bg-white border border-[#DCE5DF]"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Selected Projects</span>
            </Link>
          </div>

          {/* Project Header Hero */}
          <div className="space-y-4 pb-8 border-b border-[#DCE5DF]">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="px-3 py-1 rounded-full bg-[#D1FAE5] border border-[#DCE5DF] text-[#0F766E] font-semibold">
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

            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight text-[#1F2937]">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed max-w-3xl">
              {project.description}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.techBadges.map((badge) => (
                <span
                  key={badge.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-obsidian-850 border border-white/10 text-xs font-medium text-slate-200"
                >
                  <TechnologyIcon iconId={badge.name} className="w-4 h-4" />
                  <span>{badge.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Main Content Layout: Narrative + Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Highlights */}
              <div className="rounded-3xl border border-white/10 bg-surface-card p-6 sm:p-8 space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  Core Architecture & Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 text-xs text-slate-300 p-3 rounded-xl bg-obsidian-850/80 border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supported Features */}
              <div className="rounded-3xl border border-white/10 bg-surface-card p-6 sm:p-8 space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-flutter-sky" />
                  Detailed Feature Breakdown
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 p-2.5 rounded-xl bg-obsidian-850/50"
                    >
                      <span className="w-2 h-2 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* External Links Card */}
              <div className="rounded-3xl border border-white/10 bg-surface-card p-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                    Source Code & Repository
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {project.githubUrl ? "Open Source Code Available" : "Private Development Repository"}
                  </span>
                </div>

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F766E] hover:bg-[#115E59] text-white font-semibold text-xs transition-all shadow-sm"
                  >
                    <Github className="w-4 h-4 text-white" />
                    <span>View on GitHub</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-obsidian-900 border border-white/5 text-xs font-mono text-slate-400">
                    <Github className="w-3.5 h-3.5" />
                    <span>Pending Public Release</span>
                  </span>
                )}
              </div>
            </div>

            {/* Right Side: Interactive Mockup Showcase (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="sticky top-28 space-y-3 text-center w-full max-w-[300px]">
                {renderMockup()}
                <span className="text-[11px] font-mono text-slate-400 block">
                  Interactive Flutter UI preview
                </span>
              </div>
            </div>
          </div>

          {/* Screenshot Gallery with Automatic Discovery & Lightbox */}
          <div className="pt-8 border-t border-[#DCE5DF]">
            <ProjectGallery
              images={projectImages}
              projectSlug={project.slug}
              projectTitle={project.title}
              placeholderPrompt={project.placeholderPrompt}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
