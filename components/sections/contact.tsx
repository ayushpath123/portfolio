import Link from "next/link";

import { heroContent } from "@/data/portfolio";
import { socialLinks } from "@/data/socials";

export function ContactSection() {
  return (
    <section id="contact" className="contact w-full pb-32 text-left">
      <h2
        className="section__title mb-12 min-h-[1.4em] border-b border-[#4a4744] pb-4 text-xl tracking-wide text-[#f0ede8]"
        data-typewriter="get in touch_"
      />
      <p className="contact__copy mb-12 max-w-[520px] text-base leading-[var(--leading-loose)] text-[#8a8680]">
        Open to freelance work, collaborations, or a good conversation. Drop a
        line.
      </p>
      <a
        href={`mailto:${heroContent.contact.email}`}
        className="contact__email mb-12 block w-fit border-b border-[#4a4744] pb-3 text-xl text-[#f0ede8] no-underline transition-[letter-spacing] duration-300 hover:tracking-wide"
      >
        {heroContent.contact.email} ↗
      </a>
      <div className="contact__social flex gap-6">
        {socialLinks.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="text-sm tracking-wide text-[#4a4744] no-underline lowercase transition-colors duration-200 hover:text-[#f0ede8]"
          >
            {social.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
