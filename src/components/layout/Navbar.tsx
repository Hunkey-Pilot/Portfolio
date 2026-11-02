"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileDown, Smartphone, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section spy
      const sections = siteConfig.nav.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const navHeight = 70;
        const targetPosition =
          targetEl.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#DCE5DF] shadow-sm py-3"
          : "bg-white border-b border-[#DCE5DF] py-5"
      )}
    >
      <div className="container max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Brand / Logo */}
        <Link
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-2.5 group focus:outline-hidden focus:ring-2 focus:ring-[#0F766E] rounded-xl p-1"
          aria-label="Anupam Pal - Home"
        >
          <div className="w-9 h-9 rounded-xl bg-[#0F766E] flex items-center justify-center font-bold text-white text-sm tracking-wider shadow-sm group-hover:bg-[#115E59] group-hover:scale-105 transition-transform">
            AP
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-[#1F2933] group-hover:text-[#0F766E] transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-[10px] text-[#0F766E] font-mono uppercase tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
              Flutter Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-1 bg-[#E8EEEA] p-1.5 rounded-2xl border border-[#DCE5DF]"
          aria-label="Main Navigation"
        >
          {siteConfig.nav.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs font-medium tracking-wide transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#0F766E]",
                  isActive
                    ? "bg-[#D1FAE5] text-[#0F766E] border border-[#DCE5DF] shadow-xs"
                    : "text-[#59665F] hover:text-[#0F766E] hover:bg-white"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Download CV & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.cv.downloadPath}
            download={siteConfig.cv.fileName}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0F766E] text-white text-xs font-semibold shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-[#115E59] focus:outline-hidden focus:ring-2 focus:ring-[#0F766E]"
            aria-label="Download Anupam Pal's CV"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white border border-[#DCE5DF] text-[#59665F] hover:text-[#0F766E] focus:outline-hidden focus:ring-2 focus:ring-[#0F766E]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[61px] bg-white border-t border-[#DCE5DF] z-40 p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 px-3 pb-1">
              Navigation
            </span>
            {siteConfig.nav.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    isActive
                      ? "bg-[#D1FAE5] text-[#0F766E] border border-[#DCE5DF]"
                      : "text-[#59665F] hover:bg-[#E8EEEA] hover:text-[#1F2933]"
                  )}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <a
              href={siteConfig.cv.downloadPath}
              download={siteConfig.cv.fileName}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0F766E] text-white text-sm font-semibold shadow-sm"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>

            <div className="text-center">
              <span className="text-xs text-slate-400 font-mono">
                {siteConfig.location}
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
