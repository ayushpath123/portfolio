"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  FileDown,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroContent } from "@/data/portfolio";
import { socialLinks } from "@/data/socials";
import { PhysicsPlayground } from "./physics-preview";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const heroStats = [
  { label: "Realtime Reliability", value: "35% fewer failures" },
  { label: "API Performance", value: "1.8s → 400ms latency" },
  { label: "Problem Solving", value: "800+ DSA challenges" },
];

export function HeroSection() {
  return (
    <motion.section
      id="hero"
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#05060e] px-4 py-6 shadow-glow sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="absolute inset-0 -z-10 bg-mesh-gradient opacity-80" />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3.5">
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
            <span className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 uppercase tracking-[0.2em]">
              <Sparkles className="h-4 w-4 text-amber-300" />
              AI & Full-Stack Engineer
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              {heroContent.education}
            </span>
          </div>
          <div className="space-y-3.5">
            <motion.h1
              className="text-[2.2rem] font-semibold leading-tight tracking-tight text-white md:text-[2.65rem] lg:text-[3.1rem]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Building immersive realtime products, AI copilots, and cloud-native
              systems as{" "}
              <span className="text-gradient">{heroContent.role}</span>.
            </motion.h1>
            <p className="max-w-3xl text-[0.95rem] text-white/70 md:text-base">
              {heroContent.summary}
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-2">
              <Button asChild className="shadow-glow">
                <a href="#contact">
                  Let&apos;s build together
                  <ArrowDownRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="/resume.pdf" download>
                  Download resume
                  <FileDown className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="flex gap-2">
              <Button asChild variant="ghost">
                <Link href={heroContent.contact.github} target="_blank">
                  GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href={heroContent.contact.linkedin} target="_blank">
                  LinkedIn
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {socialLinks.map((social) => (
              <Link
                key={`hero-${social.label}`}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                className={`group flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:-translate-y-0.5 bg-gradient-to-r ${social.gradient} ${social.shadow}`}
              >
                <social.icon className="h-4 w-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]" />
                <span>{social.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-[1.25fr_0.75fr]">
          <div className="glass-panel rounded-3xl border border-white/10 p-3.5">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              Product momentum
            </p>
            <p className="mt-2 text-lg text-white/80">
              Leading realtime experiences at VideoSDK while designing AI-native
              systems and performance tooling across the stack.
            </p>
            <div className="mt-3 grid gap-2.5 rounded-2xl border border-white/10 bg-black/30 p-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="space-y-0.5">
                  <p className="text-sm font-semibold text-white">{stat.value}</p>
                  <p className="text-[0.6rem] uppercase tracking-[0.26em] text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-[0.9rem] text-white/70">
              <p>
                Prev: Dentsu & DataAstraa — shipped NLQ copilots, monitoring
                dashboards, TS migrations, and infra that improved SLAs + developer
                velocity.
              </p>
            </div>
          </div>
          <PhysicsPlayground />
        </div>
      </div>
    </motion.section>
  );
}

