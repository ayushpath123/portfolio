"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

import { achievements } from "@/data/portfolio";

export function AchievementsSection() {
  return (
    <section id="achievements" className="space-y-8">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Highlights
        </p>
        <h2 className="section-heading">Milestones & wins</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement}
            className="glass-panel flex items-center gap-4 rounded-3xl border border-white/10 p-5 text-white/80"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <ShieldCheck className="h-5 w-5 text-emerald-300" />
            <p>{achievement}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

