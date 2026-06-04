import Link from "next/link";

import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="work" className="work w-full py-24">
      <h2
        className="section__title mb-12 min-h-[1.4em] border-b border-[#4a4744] pb-4 text-xl tracking-wide text-[#f0ede8]"
        
      />

      <div className="projects flex flex-col gap-0">
        {projects.map((project) => (
          <article
            key={project.title}
            className="project border-b border-[#2a2724] py-8 pl-0 transition-[padding-left] duration-[250ms] hover:pl-4"
          >
            <div className="project__meta mb-3 flex gap-6 text-xs uppercase tracking-wide text-[#4a4744]">
              <span className="project__year">{project.year}</span>
              <span className="project__tags">
                {project.stack.join(" · ").toLowerCase()}
              </span>
            </div>
            <h3 className="project__title m-0 mb-3 text-lg font-medium text-[#f0ede8]">
              {project.title}
            </h3>
            <p className="project__desc mb-4 max-w-[520px] text-sm leading-[var(--leading-loose)] text-[#8a8680]">
              {project.description}{" "}
              {project.highlights[0]}
            </p>
            <div className="project__links flex gap-6">
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-wide text-[#4a4744] no-underline transition-colors duration-200 hover:text-[#f0ede8]"
              >
                live ↗
              </Link>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-wide text-[#4a4744] no-underline transition-colors duration-200 hover:text-[#f0ede8]"
              >
                github ↗
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
