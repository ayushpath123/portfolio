import { typeIn } from "@/lib/typewriter";

export function initSectionTypewriter() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const text = el.dataset.typewriter;
        if (!text || el.dataset.typed === "true") return;
        el.dataset.typed = "true";
        typeIn(el, text, 45);
        observer.unobserve(el);
      });
    },
    { threshold: 0.12 },
  );

  document
    .querySelectorAll("[data-typewriter]")
    .forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}
