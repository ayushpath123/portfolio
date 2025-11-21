import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const socials = [
  {
    href: "mailto:22bds044@iiitdwd.ac.in",
    label: "Email",
    icon: Mail,
  },
  {
    href: "tel:+919316568042",
    label: "Phone",
    icon: Phone,
  },
  {
    href: "https://github.com/ayushpath123",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/ayush-pathak-662768245/",
    label: "LinkedIn",
    icon: Linkedin,
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-28 border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Ayush Pathak. Designed & built with Next.js
          + Tailwind.
        </p>
        <div className="flex flex-wrap gap-3">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-white transition-colors hover:border-white/40"
            >
              <social.icon className="h-4 w-4" />
              {social.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

