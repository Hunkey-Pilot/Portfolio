"use client";

import React, { useState } from "react";
import { FolderGit2, Sparkles } from "lucide-react";
import { projectsData } from "@/data/projects";
import { DiscoveredImage, ProjectData } from "@/lib/types";
import { ProjectCard } from "../projects/ProjectCard";
import { ProjectModal } from "../projects/ProjectModal";

interface ProjectsProps {
  discoveredImagesManifest: Record<string, DiscoveredImage[]>;
}

export function Projects({ discoveredImagesManifest }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );

  return (
    <section id="projects" className="py-24 relative border-t border-[#DCE5DF] bg-[#EDF2EF]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#D1FAE5] border border-[#DCE5DF] text-[#0F766E] font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            PORTFOLIO HIGHLIGHTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1F2937] leading-tight">
            Selected Projects
          </h2>
          <p className="mt-3 text-base text-[#6B7280] leading-relaxed">
            A selection of mobile applications I&apos;ve worked on, exploring interface design, application functionality, state management, and API integration.
          </p>
        </div>

        {/* 3 Projects Stack */}
        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              discoveredImages={discoveredImagesManifest[project.slug] || []}
              onOpenDetails={(p) => setSelectedProject(p)}
              index={index}
            />
          ))}
        </div>

        {/* Modal for In-Page Details & Screenshot Inspection */}
        <ProjectModal
          project={selectedProject}
          images={
            selectedProject
              ? discoveredImagesManifest[selectedProject.slug] || []
              : []
          }
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
