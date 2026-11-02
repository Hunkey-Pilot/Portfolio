"use client";

import React, { useState } from "react";
import Image from "next/image";
import { User, Sparkles } from "lucide-react";
import { ProfileAsset } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProfileImageProps {
  asset: ProfileAsset;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function ProfileImage({
  asset,
  className,
  size = "lg",
}: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);

  const dimensionClasses = {
    sm: "w-24 h-24 text-2xl",
    md: "w-36 h-36 text-3xl",
    lg: "w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 text-4xl",
  }[size];

  const showRealImage = asset.hasImage && !imageError && asset.src;

  return (
    <div className={cn("relative group inline-block", className)}>
      {/* Outer ambient glow */}
      <div className="absolute -inset-2 bg-[#DBEAFE] rounded-full blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Frame wrapper */}
      <div
        className={cn(
          "relative rounded-full overflow-hidden p-1.5 bg-[#0F766E] shadow-md transition-transform duration-500 group-hover:scale-[1.02]",
          dimensionClasses
        )}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center relative border border-[#DCE5DF]">
          {showRealImage ? (
            <Image
              src={asset.src}
              alt={asset.alt}
              fill
              sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 224px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              onError={() => setImageError(true)}
              priority
            />
          ) : (
            /* Elegant Monogram & Fallback Placeholder */
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#E8EEEA] text-center p-4 select-none relative overflow-hidden">
              {/* Subtle tech background grid pattern */}
              <div
                className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#0F766E_1px,transparent_1px)] [background-size:12px_12px]"
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="w-12 h-12 mb-2 rounded-2xl bg-[#D1FAE5] border border-[#DCE5DF] flex items-center justify-center text-[#0F766E] group-hover:border-[#0F766E] transition-colors">
                  <User className="w-6 h-6 text-[#0F766E]" />
                </div>
                <span className="font-bold tracking-tight text-[#1F2937] font-sans">
                  AP
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#0F766E] mt-1 flex items-center gap-1 opacity-90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] animate-pulse" />
                  Flutter Dev
                </span>
              </div>

              {/* Tooltip hint on hover to replace photo */}
              <div className="absolute inset-0 bg-obsidian-950/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2 text-center z-20">
                <Sparkles className="w-4 h-4 text-violet-400 mb-1" />
                <span className="text-[11px] font-medium text-slate-200">
                  Profile Photo
                </span>
                <span className="text-[9px] text-slate-400 font-mono mt-0.5 leading-tight">
                  public/images/profile/
                  <br />
                  anupam-pal.jpg
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
