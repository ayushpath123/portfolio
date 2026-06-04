"use client";

import { useEffect } from "react";

import { initScrollReveal } from "@/lib/scroll-reveal";
import { initSectionTypewriter } from "@/lib/section-typewriter";
import { typewriter } from "@/lib/typewriter";
import { heroTypewriterPhrases } from "@/data/portfolio";

export function PortfolioEffects() {
  useEffect(() => {
    const roleEl = document.querySelector<HTMLElement>(".hero__role");
    const cleanupTypewriter = roleEl
      ? typewriter(roleEl, heroTypewriterPhrases)
      : undefined;

    const cleanupReveal = initScrollReveal();
    const cleanupSectionTypewriter = initSectionTypewriter();

    return () => {
      cleanupTypewriter?.();
      cleanupReveal();
      cleanupSectionTypewriter();
    };
  }, []);

  return null;
}
