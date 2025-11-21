"use client";

import { motion } from "framer-motion";

import { experiences } from "@/data/portfolio";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="space-y-8">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Journey
        </p>
        <h2 className="section-heading">Experience timeline</h2>
      </div>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 md:left-1/2" />
        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.period}`}
              className={`md:w-1/2 ${
                index % 2 === 0 ? "md:ml-auto md:pl-10" : "md:mr-auto md:pr-10"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass-panel relative rounded-3xl border border-white/10 p-6">
                <span className="absolute left-[-2.45rem] top-6 hidden h-3 w-3 rounded-full border-4 border-[#05060e] bg-white md:block" />
                <div className="flex flex-col gap-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    {experience.period}
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <p className="text-white/70">{experience.company}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-4 text-white/80">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                    {experience.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

