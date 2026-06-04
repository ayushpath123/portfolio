import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Résumé | Ayush Pathak",
  description: "Résumé of Ayush Pathak — Software Developer & AI Engineer.",
};

export default function ResumePage() {
  return (
    <section className="resume flex flex-col gap-6 py-16">
      <div className="resume__header flex flex-wrap items-center justify-between gap-4">
        <div>
          <Link
            href="/"
            className="mb-3 inline-block font-mono text-sm tracking-wide text-[#4a4744] no-underline transition-colors duration-200 hover:text-[#f0ede8]"
          >
            ← back
          </Link>
          <h1 className="m-0 text-2xl font-bold tracking-[var(--tracking-tight)] text-[#f0ede8]">
            résumé
          </h1>
        </div>
        <a
          href="/resume.pdf"
          download
          className="btn btn--ghost inline-flex items-center border border-[#4a4744] bg-transparent px-4 py-2 font-mono text-sm tracking-wide text-[#8a8680] no-underline transition-colors duration-200 hover:border-[#f0ede8] hover:text-[#f0ede8]"
        >
          download pdf
        </a>
      </div>

      <div className="resume__viewer overflow-hidden border border-[#2a2724] bg-[#111111]">
        <iframe
          src="/resume.pdf"
          title="Ayush Pathak résumé"
          className="aspect-[8.5/11] w-full"
        />
      </div>
    </section>
  );
}
