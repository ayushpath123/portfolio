import { Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
  gradient: string;
  shadow: string;
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/ayushpath123",
    icon: Github,
    gradient: "from-slate-900 via-indigo-900/60 to-fuchsia-700/60",
    shadow: "shadow-[0_0_18px_rgba(99,102,241,0.45)]",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ayush-pathak-662768245/",
    icon: Linkedin,
    gradient: "from-sky-500/80 via-blue-600/70 to-cyan-400/80",
    shadow: "shadow-[0_0_18px_rgba(59,130,246,0.45)]",
  },
  {
    label: "Gmail",
    href: "mailto:22bds044@iiitdwd.ac.in",
    icon: Mail,
    gradient: "from-rose-500/80 via-orange-500/80 to-amber-400/80",
    shadow: "shadow-[0_0_18px_rgba(248,113,113,0.45)]",
  },
];

