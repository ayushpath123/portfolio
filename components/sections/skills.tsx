"use client";

import { motion } from "framer-motion";

import { skillCategories } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-8">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Technical stack
        </p>
        <h2 className="section-heading">Skills with production mileage</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.name}
            className="glass-panel flex flex-col gap-4 rounded-3xl border border-white/10 p-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <category.icon className="h-5 w-5 text-indigo-300" />
              <p className="text-lg font-semibold text-white">{category.name}</p>
            </div>
            <div className="flex flex-wrap gap-2 text-sm text-white/80">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

