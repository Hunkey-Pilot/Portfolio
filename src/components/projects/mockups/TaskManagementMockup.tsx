import React from "react";
import {
  CheckCircle2,
  Clock,
  Plus,
  Filter,
  CheckSquare,
  Calendar,
  BarChart2,
  Settings,
} from "lucide-react";

export function TaskManagementMockup() {
  return (
    <div className="portfolio-mockup w-full max-w-[280px] sm:max-w-[300px] mx-auto aspect-[9/18.5] bg-[#0c1017] rounded-[38px] p-2.5 border-[4px] border-slate-700/60 shadow-2xl relative overflow-hidden select-none flex flex-col text-slate-100 font-sans">
      {/* Top Phone Speaker & Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700 mr-2" />
        <div className="w-8 h-1 bg-slate-800 rounded-full" />
      </div>

      {/* Status Bar */}
      <div className="pt-3 px-3 pb-1 flex items-center justify-between text-[10px] text-slate-400 font-mono z-20">
        <span>10:30</span>
        <div className="flex items-center gap-1">
          <span className="text-[9px] font-semibold text-emerald-400">5G</span>
          <div className="w-4 h-2 border border-slate-400 rounded-sm p-[1px]">
            <div className="w-full h-full bg-emerald-400 rounded-xs" />
          </div>
        </div>
      </div>

      {/* App Header */}
      <div className="px-3 pt-2 pb-2">
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">Sunday, Nov 02</span>
            <h3 className="font-bold text-sm tracking-tight text-white">Daily Tasks</h3>
          </div>
          <button className="flex items-center gap-1 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-[9px] font-semibold px-2 py-1 rounded-lg shadow-sm">
            <Plus className="w-3 h-3" />
            <span>New</span>
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-[9px]">
          <span className="flex-1 py-1 text-center bg-violet-600/30 border border-violet-500/40 text-violet-300 rounded-lg font-semibold">
            All (7)
          </span>
          <span className="flex-1 py-1 text-center text-slate-400 font-medium">In Progress (3)</span>
          <span className="flex-1 py-1 text-center text-slate-400 font-medium">Completed (4)</span>
          <Filter className="w-3 h-3 text-slate-500 mx-1" />
        </div>
      </div>

      {/* Task List */}
      <div className="flex-1 overflow-hidden px-3 space-y-2">
        {/* Task Item 1 - In Progress */}
        <div className="bg-slate-900/90 border border-slate-800/90 rounded-xl p-2.5 relative">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-2">
              <div className="mt-0.5 w-3.5 h-3.5 rounded-md border-2 border-amber-400 flex items-center justify-center" />
              <div>
                <h5 className="text-[11px] font-semibold text-white leading-tight">
                  Implement GetX Auth State
                </h5>
                <p className="text-[9px] text-slate-400 mt-0.5">Token storage & refresh flow</p>
              </div>
            </div>
            <span className="text-[8px] bg-amber-500/15 border border-amber-500/30 text-amber-300 px-1.5 py-0.5 rounded-full font-semibold">
              High
            </span>
          </div>
          <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-800/60 text-[8px] text-slate-400 font-mono">
            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="w-2.5 h-2.5 text-slate-400" /> Due Today
            </span>
            <span className="text-violet-400 font-medium">REST API</span>
          </div>
        </div>

        {/* Task Item 2 - In Progress */}
        <div className="bg-slate-900/90 border border-slate-800/90 rounded-xl p-2.5 relative">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-2">
              <div className="mt-0.5 w-3.5 h-3.5 rounded-md border-2 border-violet-400 flex items-center justify-center" />
              <div>
                <h5 className="text-[11px] font-semibold text-white leading-tight">
                  CRUD Task Endpoints
                </h5>
                <p className="text-[9px] text-slate-400 mt-0.5">Connect HTTP service to UI</p>
              </div>
            </div>
            <span className="text-[8px] bg-violet-500/15 border border-violet-500/30 text-violet-300 px-1.5 py-0.5 rounded-full font-semibold">
              Med
            </span>
          </div>
          <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-800/60 text-[8px] text-slate-400 font-mono">
            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="w-2.5 h-2.5 text-slate-400" /> Tomorrow
            </span>
            <span className="text-flutter-sky font-medium">Flutter</span>
          </div>
        </div>

        {/* Task Item 3 - Completed */}
        <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-2.5 opacity-70">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-2">
              <div className="mt-0.5 w-3.5 h-3.5 rounded-md bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              </div>
              <div>
                <h5 className="text-[11px] font-medium text-slate-300 line-through leading-tight">
                  Responsive UI Mockup
                </h5>
                <p className="text-[9px] text-slate-500 mt-0.5">Adapt for tablet & mobile</p>
              </div>
            </div>
            <span className="text-[8px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded-full font-semibold">
              Done
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="border-t border-slate-800/80 px-4 py-2 mt-auto bg-slate-950/90 flex items-center justify-between text-slate-400">
        <div className="flex flex-col items-center text-violet-400">
          <CheckSquare className="w-3.5 h-3.5" />
          <span className="text-[8px] mt-0.5 font-medium">Tasks</span>
        </div>
        <div className="flex flex-col items-center">
          <Calendar className="w-3.5 h-3.5" />
          <span className="text-[8px] mt-0.5">Calendar</span>
        </div>
        <div className="flex flex-col items-center">
          <BarChart2 className="w-3.5 h-3.5" />
          <span className="text-[8px] mt-0.5">Analytics</span>
        </div>
        <div className="flex flex-col items-center">
          <Settings className="w-3.5 h-3.5" />
          <span className="text-[8px] mt-0.5">Settings</span>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="w-20 h-1 bg-slate-600 rounded-full mx-auto mt-1 mb-0.5" />
    </div>
  );
}
