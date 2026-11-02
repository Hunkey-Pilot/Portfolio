import React from "react";
import {
  Compass,
  MapPin,
  Star,
  Search,
  Bookmark,
  Calendar,
  User,
  ArrowRight,
} from "lucide-react";

export function TourDeMockup() {
  return (
    <div className="portfolio-mockup w-full max-w-[280px] sm:max-w-[300px] mx-auto aspect-[9/18.5] bg-[#0c1017] rounded-[38px] p-2.5 border-[4px] border-slate-700/60 shadow-2xl relative overflow-hidden select-none flex flex-col text-slate-100 font-sans">
      {/* Top Phone Speaker & Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700 mr-2" />
        <div className="w-8 h-1 bg-slate-800 rounded-full" />
      </div>

      {/* Status Bar */}
      <div className="pt-3 px-3 pb-1 flex items-center justify-between text-[10px] text-slate-400 font-mono z-20">
        <span>11:15</span>
        <div className="flex items-center gap-1">
          <span className="text-[9px] font-semibold text-emerald-400">5G</span>
          <div className="w-4 h-2 border border-slate-400 rounded-sm p-[1px]">
            <div className="w-full h-full bg-emerald-400 rounded-xs" />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="px-3 pt-2 pb-2">
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="flex items-center gap-1 text-[9px] text-emerald-400 font-medium">
              <MapPin className="w-2.5 h-2.5" />
              <span>Savar, Dhaka</span>
            </div>
            <h3 className="font-bold text-sm tracking-tight text-white">Explore World</h3>
          </div>
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 p-[1px]">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-[10px] font-bold text-teal-300">
              TD
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-400">
          <Search className="w-3 h-3 text-slate-500 mr-1.5" />
          <span className="text-[11px] truncate flex-1">Find destinations, hotels...</span>
        </div>
      </div>

      {/* Destinations Showcase */}
      <div className="flex-1 overflow-hidden px-3 space-y-2.5">
        {/* Featured Destination Card */}
        <div className="rounded-2xl p-3 bg-gradient-to-b from-teal-950/80 via-slate-900 to-slate-950 border border-teal-500/30 relative overflow-hidden flex flex-col justify-between h-36">
          <div className="flex items-start justify-between relative z-10">
            <span className="text-[8px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">
              Featured Spot
            </span>
            <span className="flex items-center gap-0.5 bg-black/50 backdrop-blur-xs px-1.5 py-0.5 rounded-full text-[9px] text-amber-300 font-bold">
              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
              4.9
            </span>
          </div>

          <div className="relative z-10 mt-auto">
            <span className="text-[9px] text-teal-300 font-mono">Rangamati · Hill Tracts</span>
            <h4 className="text-xs font-bold text-white leading-tight">Sajek Valley Clouds</h4>
            <div className="flex items-center justify-between mt-1">
              <span className="text-[10px] text-slate-300 font-medium">
                <strong className="text-white font-bold">$120</strong> / trip
              </span>
              <span className="text-[9px] bg-emerald-500 text-slate-950 px-2 py-0.5 rounded-lg font-bold flex items-center gap-1 shadow-sm">
                Book <ArrowRight className="w-2.5 h-2.5" />
              </span>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Secondary Destination Preview */}
        <div>
          <div className="flex items-center justify-between text-[11px] mb-1">
            <span className="font-semibold text-white">Top Rated Escapes</span>
            <span className="text-[10px] text-teal-400 font-medium">View All</span>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2 flex items-center gap-2">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-sky-800 to-indigo-900 flex items-center justify-center text-[10px] font-mono text-sky-200 shrink-0">
              Coast
            </div>
            <div className="flex-1 min-w-0">
              <h5 className="text-[11px] font-semibold text-white truncate leading-tight">
                Cox&apos;s Bazar Beachfront
              </h5>
              <p className="text-[9px] text-slate-400 mt-0.5 truncate">Longest natural sea beach</p>
              <div className="flex items-center gap-2 mt-1 text-[9px] text-slate-300">
                <span className="text-emerald-400 font-bold">$85 / night</span>
                <span className="text-slate-500">·</span>
                <span className="flex items-center gap-0.5 text-amber-300">
                  <Star className="w-2 h-2 fill-amber-400 text-amber-400" /> 4.8
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="border-t border-slate-800/80 px-4 py-2 mt-auto bg-slate-950/90 flex items-center justify-between text-slate-400">
        <div className="flex flex-col items-center text-teal-400">
          <Compass className="w-3.5 h-3.5" />
          <span className="text-[8px] mt-0.5 font-medium">Explore</span>
        </div>
        <div className="flex flex-col items-center">
          <Bookmark className="w-3.5 h-3.5" />
          <span className="text-[8px] mt-0.5">Saved</span>
        </div>
        <div className="flex flex-col items-center">
          <Calendar className="w-3.5 h-3.5" />
          <span className="text-[8px] mt-0.5">Trips</span>
        </div>
        <div className="flex flex-col items-center">
          <User className="w-3.5 h-3.5" />
          <span className="text-[8px] mt-0.5">Profile</span>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="w-20 h-1 bg-slate-600 rounded-full mx-auto mt-1 mb-0.5" />
    </div>
  );
}
