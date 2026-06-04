import { aboutStats, heroContent, skills } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="about w-full py-24">
      <h2
        className="section__title mb-12 min-h-[1.4em] border-b border-[#4a4744] pb-4 text-xl tracking-wide text-[#f0ede8]"
        data-typewriter="about me_"
      />

      <div className="about__grid mb-12 flex items-start gap-16 max-[480px]:flex-col">
        <div className="about__text flex-1 text-base leading-[var(--leading-loose)] text-[#8a8680]">
          {heroContent.aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="about__stats flex min-w-[140px] flex-col gap-6 max-[480px]:min-w-0 max-[480px]:flex-row max-[480px]:flex-wrap">
          {aboutStats.map((stat) => (
            <div key={stat.label} className="stat">
              <span className="stat__value block text-2xl font-bold text-[#f0ede8]">
                {stat.value}
              </span>
              <span className="stat__label text-xs uppercase tracking-wide text-[#4a4744]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="skills">
        <p className="skills__label mb-4 text-xs tracking-wide text-[#4a4744]">
          // tech stack
        </p>
        <div className="skills__list flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border border-[#4a4744] px-4 py-2 text-xs uppercase tracking-wide text-[#8a8680] transition-colors duration-200 hover:border-[#f0ede8] hover:text-[#f0ede8]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
