import { AboutSection } from "@/components/sections/about";
import { AchievementsSection } from "@/components/sections/achievements";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-10">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceTimeline />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
}
