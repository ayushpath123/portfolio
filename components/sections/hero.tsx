import Link from "next/link";

import { heroContent } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="hero flex flex-col items-start gap-4 py-32">
      <p className="hero__label mb-2 text-sm tracking-wide text-[#4a4744]">
        // hello, world
      </p>
      <h1 className="hero__name m-0 text-[length:var(--text-3xl)] font-bold leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-[#f0ede8]">
        {heroContent.name}
      </h1>
      <div className="hero__role-wrap min-h-[1.4em] text-xl text-[#8a8680]">
        <span className="hero__role" />
      </div>
      <p className="hero__bio mt-3 max-w-[520px] text-base leading-[var(--leading-loose)] text-[#8a8680]">
        {heroContent.summary}
      </p>
      <div className="hero__cta mt-6 flex flex-wrap gap-4 max-[480px]:w-full max-[480px]:flex-col">
        <Link
          href="#work"
          className="btn inline-flex items-center border border-[#4a4744] bg-[#f0ede8] px-6 py-3 font-mono text-sm tracking-wide text-[#0a0a0a] no-underline transition-colors duration-200 hover:bg-[#0a0a0a] hover:text-[#f0ede8]"
        >
          view work →
        </Link>
        <Link
          href="/resume"
          className="btn btn--ghost inline-flex items-center border border-[#4a4744] bg-transparent px-6 py-3 font-mono text-sm tracking-wide text-[#8a8680] no-underline transition-colors duration-200 hover:border-[#f0ede8] hover:bg-transparent hover:text-[#f0ede8]"
        >
          résumé →
        </Link>
      </div>
    </section>
  );
}
