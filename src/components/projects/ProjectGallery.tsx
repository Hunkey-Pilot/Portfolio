"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  FolderOpen,
  Info,
} from "lucide-react";
import { DiscoveredImage } from "@/lib/types";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  images: DiscoveredImage[];
  projectSlug: string;
  projectTitle: string;
  placeholderPrompt: string;
}

export function ProjectGallery({
  images,
  projectSlug,
  projectTitle,
  placeholderPrompt,
}: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  }, [selectedIndex, images.length]);

  const showPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  }, [selectedIndex, images.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  const defaultSlots = [
    {
      label: `Add ${projectTitle} Home Screenshot`,
      sublabel: `Place in public/images/projects/${projectSlug}/home.png`,
      hint: `${projectSlug}/01-home.png`,
    },
    {
      label: `Add ${projectTitle} Main Feature Screenshot`,
      sublabel: `Place in public/images/projects/${projectSlug}/feature.png`,
      hint: `${projectSlug}/02-feature.png`,
    },
    {
      label: `Add ${projectTitle} Details Screenshot`,
      sublabel: `Place in public/images/projects/${projectSlug}/details.png`,
      hint: `${projectSlug}/03-details.png`,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
          <FolderOpen className="w-4 h-4 text-[#0F766E]" />
          Project Screenshots & Gallery
        </h4>
        <span className="text-xs text-[#0F766E] font-mono">
          {images.length > 0 ? `${images.length} Loaded` : "Auto-Detection Ready"}
        </span>
      </div>

      {images.length > 0 ? (
        /* Discovered Screenshots Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div
              key={img.src}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-obsidian-850 cursor-pointer transition-all duration-300 hover:border-[#F8E769]/60 hover:shadow-[0_0_20px_rgba(248,231,105,0.25)] aspect-[9/16]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <span className="text-xs font-semibold text-white truncate">
                  {img.caption}
                </span>
                <span className="text-[10px] text-[#F8E769] font-mono mt-0.5 flex items-center gap-1">
                  <Maximize2 className="w-3 h-3 text-[#F8E769]" /> Click to enlarge
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Elegant Empty States with System Hint */
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {defaultSlots.map((slot) => (
              <ImagePlaceholder
                key={slot.label}
                label={slot.label}
                sublabel={slot.sublabel}
                folderHint={slot.hint}
                aspectRatio="mobile"
              />
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-[#D1FAE5] border border-[#DCE5DF] flex items-start gap-3 text-xs text-[#59665F]">
            <Info className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-white font-medium">Automatic Image Detection:</strong> Drop your mobile screenshots into{" "}
              <code className="text-[#0F766E] font-mono px-1 py-0.5 bg-white rounded border border-[#DCE5DF]">
                public/images/projects/{projectSlug}/
              </code>{" "}
              (.png, .jpg, .webp). The server will automatically discover, sort, caption, and display them in this gallery on next build or dev refresh!
            </p>
          </div>
        </div>
      )}

      {/* Accessible Lightbox Modal */}
      {selectedIndex !== null && images[selectedIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Preview Lightbox"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 select-none animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Top Bar with Caption & Close */}
          <div
            className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h5 className="font-semibold text-sm">
                {images[selectedIndex].caption}
              </h5>
              <span className="text-xs text-slate-400 font-mono">
                {selectedIndex + 1} of {images.length}
              </span>
            </div>
            <button
              onClick={closeLightbox}
              className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-white/10 transition-colors z-40"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Active Image Container */}
          <div
            className="relative max-w-sm sm:max-w-md w-full aspect-[9/18] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-white/10 transition-colors z-40"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
