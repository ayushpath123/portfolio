export function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => {
            entry.target.classList.add("revealed");
          }, index * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document
    .querySelectorAll(".project, .stat, .skills__list span")
    .forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}
