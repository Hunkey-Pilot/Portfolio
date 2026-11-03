"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { TechnologyIcon } from "@/components/ui/TechnologyIcon";

const technologies = [
  { name: "Flutter", iconId: "Flutter" },
  { name: "Dart", iconId: "Dart" },
  { name: "C", iconId: "C" },
  { name: "C++", iconId: "C++" },
  { name: "JavaScript", iconId: "JavaScript" },
  { name: "Node.js", iconId: "Node.js" },
  { name: "Express.js", iconId: "Express.js" },
  { name: "MySQL", iconId: "MySQL" },
  { name: "PostgreSQL", iconId: "PostgreSQL" },
  { name: "Firebase", iconId: "Firebase" },
  { name: "Supabase", iconId: "Supabase" },
];

function TechnologyItem({
  name,
  iconId,
  index,
  visible,
}: (typeof technologies)[number] & { index: number; visible: boolean }) {
  return (
    <motion.li
      className="tech-marquee__item"
      whileTap={{ scale: 0.96 }}
      style={{ "--tech-index": index } as React.CSSProperties}
    >
      <motion.span
        className="tech-marquee__icon-wrap"
        initial={{ opacity: 0, scale: 0.75 }}
        animate={visible ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: 0.35, delay: index * 0.035, ease: "easeOut" }}
      >
        <TechnologyIcon iconId={iconId} name={name} className="tech-marquee__icon" />
      </motion.span>
      <span>{name}</span>
    </motion.li>
  );
}

export function TechStackMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useInView(sectionRef, { once: true, amount: 0.25 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      ref={sectionRef}
      aria-labelledby="tech-stack-heading"
      className="tech-marquee-section"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      animate={isVisible || prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="tech-marquee__ambient" aria-hidden="true" />
      <div className="tech-marquee__shape tech-marquee__shape--one" aria-hidden="true" />
      <div className="tech-marquee__shape tech-marquee__shape--two" aria-hidden="true" />
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between mb-5">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#0F766E] font-semibold">
              Technical toolkit
            </p>
            <h2
              id="tech-stack-heading"
              className="text-xl sm:text-2xl font-bold text-[#1F2933]"
            >
              Built with the tools I use every day.
            </h2>
          </div>
          <p className="text-xs text-[#59665F] max-w-xs sm:text-right">
            Mobile, backend, and database technologies in one focused stack.
          </p>
        </div>

        <div className="tech-marquee" role="region" aria-label="Technology stack">
          <div className="tech-marquee__rows">
            <motion.div
              className="tech-marquee__row tech-marquee__row--forward"
              initial={{ opacity: 0, x: -18 }}
              animate={isVisible || prefersReducedMotion ? { opacity: 1, x: 0 } : undefined}
              transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
            >
              <ul className="tech-marquee__group" aria-label="Technologies">
                {technologies.map((technology, index) => (
                  <TechnologyItem key={technology.name} {...technology} index={index} visible={isVisible || !!prefersReducedMotion} />
                ))}
              </ul>
              <ul className="tech-marquee__group" aria-hidden="true">
                {technologies.map((technology, index) => (
                  <TechnologyItem key={`forward-${technology.name}`} {...technology} index={index} visible={isVisible || !!prefersReducedMotion} />
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="tech-marquee__row tech-marquee__row--reverse"
              initial={{ opacity: 0, x: 18 }}
              animate={isVisible || prefersReducedMotion ? { opacity: 1, x: 0 } : undefined}
              transition={{ duration: 0.55, delay: 0.22, ease: "easeOut" }}
            >
              <ul className="tech-marquee__group" aria-hidden="true">
                {technologies.slice().reverse().map((technology, index) => (
                  <TechnologyItem key={`reverse-${technology.name}`} {...technology} index={index} visible={isVisible || !!prefersReducedMotion} />
                ))}
              </ul>
              <ul className="tech-marquee__group" aria-hidden="true">
                {technologies.slice().reverse().map((technology, index) => (
                  <TechnologyItem key={`reverse-duplicate-${technology.name}`} {...technology} index={index} visible={isVisible || !!prefersReducedMotion} />
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
