import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="experience w-full py-24">
      <h2
        className="section__title mb-12 min-h-[1.4em] border-b border-[#4a4744] pb-4 text-xl tracking-wide text-[#f0ede8]"
        data-typewriter="experience_"
      />

      <div className="experiences flex flex-col gap-0">
        {experiences.map((entry) => (
          <article
            key={`${entry.company}-${entry.period}`}
            className="experience-entry project border-b border-[#2a2724] py-8 pl-0 transition-[padding-left] duration-[250ms] hover:pl-4"
          >
            <div className="experience-entry__meta project__meta mb-3 flex gap-6 text-xs uppercase tracking-wide text-[#4a4744]">
              <span>{entry.period}</span>
              <span>{entry.stack.join(" · ").toLowerCase()}</span>
            </div>
            <h3 className="experience-entry__title project__title m-0 mb-1 text-lg font-medium text-[#f0ede8]">
              {entry.role}
            </h3>
            <p className="experience-entry__company mb-3 text-sm text-[#8a8680]">
              {entry.company}
            </p>
            <ul className="experience-entry__bullets m-0 max-w-[520px] list-none space-y-2 p-0 text-sm leading-[var(--leading-loose)] text-[#8a8680]">
              {entry.bullets.map((bullet) => (
                <li key={bullet.slice(0, 32)} className="relative pl-4">
                  <span className="absolute left-0 text-[#4a4744]">—</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
