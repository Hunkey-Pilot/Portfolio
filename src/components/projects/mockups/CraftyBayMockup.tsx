import React from "react";
import {
  Search,
  ShoppingCart,
  Bell,
  Heart,
  Star,
  Home,
  Grid,
  User,
  SlidersHorizontal,
} from "lucide-react";

export function CraftyBayMockup() {
  return (
    <div className="portfolio-mockup w-full max-w-[280px] sm:max-w-[300px] mx-auto aspect-[9/18.5] bg-[#0c1017] rounded-[38px] p-2.5 border-[4px] border-slate-700/60 shadow-2xl relative overflow-hidden select-none flex flex-col text-slate-100 font-sans">
      {/* Top Phone Speaker & Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700 mr-2" />
        <div className="w-8 h-1 bg-slate-800 rounded-full" />
      </div>

      {/* Status Bar */}
      <div className="pt-3 px-3 pb-1 flex items-center justify-between text-[10px] text-slate-400 font-mono z-20">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <span className="text-[9px] font-semibold text-emerald-400">5G</span>
          <div className="w-4 h-2 border border-slate-400 rounded-sm p-[1px]">
            <div className="w-full h-full bg-emerald-400 rounded-xs" />
          </div>
        </div>
      </div>

      {/* Mobile App Header */}
      <div className="px-3 pt-2 pb-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#02569B] to-[#54C5F8] flex items-center justify-center text-white font-bold text-xs">
              CB
            </div>
            <span className="font-bold text-sm tracking-tight text-white">CraftyBay</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative p-1 rounded-full bg-slate-800/80 text-slate-300">
              <ShoppingCart className="w-3.5 h-3.5" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full text-[8px] font-bold text-white flex items-center justify-center">
                2
              </span>
            </div>
            <div className="p-1 rounded-full bg-slate-800/80 text-slate-300">
              <Bell className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-400">
          <Search className="w-3 h-3 text-slate-500 mr-1.5" />
          <span className="text-[11px] truncate flex-1">Search tech & gadgets...</span>
          <SlidersHorizontal className="w-3 h-3 text-slate-500" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden px-3 space-y-2.5">
        {/* Promotion Banner */}
        <div className="rounded-xl p-2.5 bg-[#D1FAE5] border border-[#DCE5DF] relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-[9px] font-mono font-semibold uppercase tracking-wider text-flutter-sky">Special Offer</span>
            <h4 className="text-xs font-bold text-white leading-tight mt-0.5">Spring Tech Drop</h4>
            <p className="text-[10px] text-slate-300 mt-0.5">Up to 40% off smart accessories</p>
          </div>
          <div className="absolute -right-2 -bottom-2 w-16 h-16 rounded-full bg-violet-500/20 blur-md pointer-events-none" />
        </div>

        {/* Category Pills */}
        <div>
          <div className="flex items-center justify-between text-[11px] mb-1">
            <span className="font-semibold text-white">Categories</span>
            <span className="text-[10px] text-flutter-sky font-medium">See All</span>
          </div>
          <div className="flex gap-1.5 overflow-x-hidden">
            {["Electronics", "Fashion", "Home", "Audio"].map((cat, i) => (
              <span
                key={cat}
                className={`text-[9px] px-2 py-0.5 rounded-full border ${
                  i === 0
                    ? "bg-flutter-blue/20 border-flutter-blue/40 text-flutter-sky font-medium"
                    : "bg-slate-900/80 border-slate-800 text-slate-400"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Product Grid Mockup */}
        <div className="grid grid-cols-2 gap-2">
          {/* Product 1 */}
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-2 relative flex flex-col">
            <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative mb-1.5 overflow-hidden">
              <span className="text-[10px] font-mono text-slate-400">ANC Pods</span>
              <button className="absolute top-1 right-1 p-0.5 bg-black/40 rounded-full text-slate-400">
                <Heart className="w-2.5 h-2.5" />
              </button>
            </div>
            <span className="text-[10px] font-semibold text-white truncate">Pro ANC Earbuds</span>
            <div className="flex items-center gap-1 mt-0.5">
              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
              <span className="text-[9px] text-slate-400">4.8</span>
            </div>
            <div className="mt-auto pt-1 flex items-center justify-between">
              <span className="text-[10px] font-bold text-flutter-sky">$89.00</span>
              <span className="text-[8px] bg-flutter-blue text-white px-1.5 py-0.5 rounded-md font-semibold">
                + Add
              </span>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-2 relative flex flex-col">
            <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative mb-1.5 overflow-hidden">
              <span className="text-[10px] font-mono text-slate-400">Smart Band</span>
              <button className="absolute top-1 right-1 p-0.5 bg-black/40 rounded-full text-rose-400">
                <Heart className="w-2.5 h-2.5 fill-rose-400" />
              </button>
            </div>
            <span className="text-[10px] font-semibold text-white truncate">Fit Pulse Tracker</span>
            <div className="flex items-center gap-1 mt-0.5">
              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
              <span className="text-[9px] text-slate-400">4.9</span>
            </div>
            <div className="mt-auto pt-1 flex items-center justify-between">
              <span className="text-[10px] font-bold text-flutter-sky">$45.00</span>
              <span className="text-[8px] bg-flutter-blue text-white px-1.5 py-0.5 rounded-md font-semibold">
                + Add
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="border-t border-slate-800/80 px-4 py-2 mt-auto bg-slate-950/90 flex items-center justify-between text-slate-400">
        <div className="flex flex-col items-center text-flutter-sky">
          <Home className="w-3.5 h-3.5" />
          <span className="text-[8px] mt-0.5 font-medium">Home</span>
        </div>
        <div className="flex flex-col items-center">
          <Grid className="w-3.5 h-3.5" />
          <span className="text-[8px] mt-0.5">Category</span>
        </div>
        <div className="flex flex-col items-center">
          <ShoppingCart className="w-3.5 h-3.5" />
          <span className="text-[8px] mt-0.5">Cart</span>
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
