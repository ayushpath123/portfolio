export function typewriter(
  el: HTMLElement,
  phrases: string[],
  opts: {
    typeSpeed?: number;
    deleteSpeed?: number;
    pauseAfter?: number;
    pauseBefore?: number;
    loop?: boolean;
    cursor?: boolean;
  } = {},
) {
  const {
    typeSpeed = 65,
    deleteSpeed = 35,
    pauseAfter = 2200,
    pauseBefore = 400,
    loop = true,
    cursor = true,
  } = opts;

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let cursorEl: HTMLSpanElement | null = null;

  if (cursor) {
    cursorEl = document.createElement("span");
    cursorEl.className = "cursor";
    el.after(cursorEl);
  }

  function tick() {
    const phrase = phrases[phraseIndex];

    if (!isDeleting) {
      el.textContent = phrase.slice(0, ++charIndex);
      if (charIndex === phrase.length) {
        isDeleting = true;
        return setTimeout(tick, pauseAfter);
      }
    } else {
      el.textContent = phrase.slice(0, --charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = loop ? (phraseIndex + 1) % phrases.length : phraseIndex;
        return setTimeout(tick, pauseBefore);
      }
    }
    setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);
  }

  tick();

  return () => {
    cursorEl?.remove();
  };
}

export function typeIn(el: HTMLElement, text: string, speed = 45, delay = 0) {
  el.textContent = "";
  let i = 0;
  const timer = window.setTimeout(() => {
    const interval = window.setInterval(() => {
      el.textContent += text[i++];
      if (i >= text.length) window.clearInterval(interval);
    }, speed);
    return () => window.clearInterval(interval);
  }, delay);
  return () => window.clearTimeout(timer);
}
