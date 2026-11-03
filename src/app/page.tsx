import React from "react";
import { getProfileImage, discoverAllProjectAssets } from "@/lib/assets";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TechStackMarquee } from "@/components/sections/TechStackMarquee";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  // Server-side automatic image discovery
  const profileAsset = getProfileImage();
  const discoveredImagesManifest = discoverAllProjectAssets();

  return (
    <div className="min-h-screen bg-[#F1F4F2] text-[#1F2933] flex flex-col selection:bg-emerald-100 selection:text-[#1F2933]">
      <Navbar profileAsset={profileAsset} />

      <main className="flex-1">
        <Hero profileAsset={profileAsset} />
        <TechStackMarquee />
        <About />
        <Skills />
        <Projects discoveredImagesManifest={discoveredImagesManifest} />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
