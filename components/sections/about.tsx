"use client";

import { motion } from "framer-motion";
import { NotebookPen } from "lucide-react";

import { heroContent } from "@/data/portfolio";

export function AboutSection() {
  return (
    <motion.section
      id="about"
      className="glass-panel rounded-[2rem] border border-white/10 px-8 py-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-6 text-white/80 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl space-y-4 text-lg">
          <p>
            I’m Ayush Pathak, a third-year Data Science & AI student at IIIT
            Dharwad who loves shipping delightful developer experiences. I move fast
            between product design, backend systems, and AI-first features —
            whether that’s architecting realtime WebRTC layers at VideoSDK or
            building observability dashboards at Dentsu.
          </p>
          <p>
            My work spans multi-tenant SaaS dashboards, resilient messaging rails,
            Stripe-powered monetization, and Pinecone-backed RAG copilots. Every
            project blends strong UX, measurable performance wins, and production
            reliability.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/80">
          <div className="mb-3 flex items-center gap-2 text-white">
            <NotebookPen className="h-4 w-4" />
            <span className="uppercase tracking-[0.3em] text-xs">Education</span>
          </div>
          <p className="font-medium text-white">{heroContent.education}</p>
          <p className="mt-2 text-white/60">
            Researching advanced RAG pipelines, AI copilots, and micro-frontend
            strategies for multi-product suites.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

