import React from "react";
import { ImagePlus, FolderPlus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label: string;
  sublabel?: string;
  className?: string;
  aspectRatio?: "video" | "square" | "mobile";
  folderHint?: string;
}

export function ImagePlaceholder({
  label,
  sublabel = "Drop screenshot here (.png, .jpg, .webp)",
  className,
  aspectRatio = "mobile",
  folderHint,
}: ImagePlaceholderProps) {
  const aspectClass = {
    video: "aspect-video",
    square: "aspect-square",
    mobile: "aspect-[9/16]",
  }[aspectRatio];

  return (
    <div
      className={cn(
        "relative rounded-2xl border-2 border-dashed border-[#DCE5DF] bg-white p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#0F766E] hover:bg-[#D1FAE5] group select-none",
        aspectClass,
        className
      )}
    >
      <div className="w-12 h-12 rounded-2xl bg-[#D1FAE5] border border-[#DCE5DF] flex items-center justify-center text-[#0F766E] mb-3 group-hover:scale-110 group-hover:bg-[#D1FAE5] transition-all duration-300">
        <ImagePlus className="w-5 h-5" />
      </div>

      <span className="text-xs font-semibold text-[#1F2933] group-hover:text-[#0F766E] transition-colors">
        {label}
      </span>

      <span className="text-[11px] text-slate-400 mt-1 max-w-[200px] leading-relaxed">
        {sublabel}
      </span>

      {folderHint && (
        <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#E8EEEA] border border-[#DCE5DF] text-[10px] font-mono text-[#0F766E]">
          <FolderPlus className="w-3 h-3 text-[#0F766E]" />
          <span className="truncate max-w-[180px]">{folderHint}</span>
        </div>
      )}
    </div>
  );
}
