"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { socialLinks } from "@/data/socials";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-6xl px-6">
      <div className="glass-panel flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-white/10 px-5 py-3 text-sm backdrop-blur-2xl">
        <Link href="#hero" className="font-semibold text-white">
          Ayush Pathak
        </Link>
        <nav className="hidden items-center gap-3 overflow-x-auto text-xs text-white/70 md:flex md:text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 overflow-x-auto pr-1 md:overflow-visible">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              aria-label={social.label}
              className={`group flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-white transition hover:-translate-y-0.5 hover:border-white/40 bg-gradient-to-r ${social.gradient} ${social.shadow}`}
            >
              <social.icon className="h-4 w-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]" />
              <span className="hidden sm:inline">{social.label}</span>
            </Link>
          ))}
          <button
            type="button"
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 text-white transition hover:border-white/40 md:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="mt-3 rounded-3xl border border-white/10 bg-black/90 p-5 text-sm text-white shadow-2xl md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={`mobile-${link.href}`}
                href={link.href}
                className="rounded-2xl border border-white/10 px-4 py-2 text-white/80 transition hover:border-white/40 hover:text-white"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 grid gap-3">
            {socialLinks.map((social) => (
              <Link
                key={`mobile-social-${social.label}`}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                className={`flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-4 py-3 text-white bg-gradient-to-r ${social.gradient} ${social.shadow}`}
                onClick={closeMenu}
              >
                <social.icon className="h-4 w-4" />
                <span>{social.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

