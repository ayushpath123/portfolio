# PORTFOLIO DESIGN SYSTEM
## Cursor Agent Prompt — Typewriter · Monochrome · Centered · Minimal

---

## 🎯 DESIGN BRIEF

> Build a personal developer/designer portfolio site.
> Aesthetic: **Typewriter monochrome** — like a printed page that learned to breathe.
> Every element must feel intentional, sparse, and quietly confident.

---

## 🎨 DESIGN TOKENS

### Color System — Strict Monochrome

```css
:root {
  /* Backgrounds */
  --bg-primary:     #0a0a0a;   /* near-black canvas */
  --bg-secondary:   #111111;   /* card / section lift */
  --bg-surface:     #1a1a1a;   /* hover state surface */

  /* Text */
  --text-primary:   #f0ede8;   /* warm off-white — NOT pure white */
  --text-secondary: #8a8680;   /* muted mid-gray */
  --text-muted:     #4a4744;   /* ghost text, placeholders */

  /* Accent — one rule: there is no accent color, only value contrast */
  --accent:         #f0ede8;   /* same as text-primary — underlines, borders */
  --accent-dim:     #2a2724;   /* subtle glows, focus rings */

  /* Borders */
  --border:         1px solid #2a2724;
  --border-bright:  1px solid #4a4744;

  /* Cursor / blink */
  --cursor-color:   #f0ede8;
}
```

> **Rule:** No color. No gradients. No shadows with color. Box shadows use only black/transparency. Depth is achieved purely through value and spacing.

---

### Typography — The Soul of This Design

```css
/* Import in <head> */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap');

:root {
  --font-mono:      'IBM Plex Mono', 'Courier Prime', 'Courier New', monospace;
  --font-display:   'Courier Prime', 'IBM Plex Mono', monospace;

  /* Scale — everything in rem, base 16px */
  --text-xs:    0.70rem;   /* 11px — timestamps, labels */
  --text-sm:    0.825rem;  /* 13px — meta, captions */
  --text-base:  1rem;      /* 16px — body */
  --text-lg:    1.25rem;   /* 20px — sub-headings */
  --text-xl:    1.6rem;    /* 26px — section titles */
  --text-2xl:   2.2rem;    /* 35px — hero name */
  --text-3xl:   3.5rem;    /* 56px — large display */

  --leading-tight:  1.2;
  --leading-normal: 1.6;
  --leading-loose:  2.0;

  --tracking-tight: -0.03em;
  --tracking-normal: 0;
  --tracking-wide:   0.08em;
  --tracking-widest: 0.2em;
}
```

> **Rule:** Only monospace fonts — everywhere, always. No serif/sans-serif mixing. The typewriter effect must feel native, not bolted on.

---

### Spacing System — 8pt Grid

```css
:root {
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-5:   24px;
  --space-6:   32px;
  --space-7:   48px;
  --space-8:   64px;
  --space-9:   96px;
  --space-10:  128px;

  /* Section rhythm */
  --section-gap:    var(--space-9);
  --content-width:  680px;   /* max-width for all centered content */
  --narrow-width:   520px;   /* constrained text blocks */
}
```

---

## 🏗️ LAYOUT RULES

```
ALL content is centered.
Single-column layout. No grids for page layout — only for project cards.
Content max-width: 680px.
Page padding: 0 24px (mobile) → 0 48px (tablet) → 0 auto (desktop, uses max-width).
Sections separated by large vertical rhythm (96px+).
No sidebars. No floating elements.
Nav: minimal top bar — name left, links right — or purely centered stacked.
```

### Centering Blueprint

```css
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 0 var(--space-5);
}

.container {
  width: 100%;
  max-width: var(--content-width);
}

section {
  width: 100%;
  padding: var(--section-gap) 0;
}
```

---

## ⌨️ TYPEWRITER EFFECT — Implementation Spec

### Core CSS Animation

```css
/* Blinking cursor */
@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

.cursor {
  display: inline-block;
  width: 2px;           /* or 0.6ch for block cursor */
  height: 1.1em;
  background: var(--cursor-color);
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: blink 1.1s step-end infinite;
}

/* Block cursor variant */
.cursor--block {
  width: 0.6ch;
  opacity: 0.8;
}
```

### JavaScript Typewriter Engine

```javascript
/**
 * Typewriter — use on: hero headline, role/title, section intros
 * @param {HTMLElement} el       — target element
 * @param {string[]}    phrases  — array of strings to cycle
 * @param {object}      opts     — configuration
 */
function typewriter(el, phrases, opts = {}) {
  const {
    typeSpeed   = 65,    // ms per character — feels mechanical
    deleteSpeed = 35,    // ms per delete
    pauseAfter  = 2200,  // ms hold after full phrase
    pauseBefore = 400,   // ms before next phrase starts
    loop        = true,
    cursor      = true,
  } = opts;

  let phraseIndex = 0;
  let charIndex   = 0;
  let isDeleting  = false;

  // Inject cursor span if needed
  if (cursor) {
    const cur = document.createElement('span');
    cur.className = 'cursor';
    el.after(cur);
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
}

// Usage
const headline = document.querySelector('.hero__role');
typewriter(headline, [
  'Full-Stack Developer',
  'UI/UX Designer',
  'Open Source Contributor',
  'Problem Solver',
]);
```

### Typewriter — Reveal Variant (one-shot, no delete)

```javascript
// For section headings that type in on scroll
function typeIn(el, text, speed = 45, delay = 0) {
  el.textContent = '';
  let i = 0;
  setTimeout(() => {
    const timer = setInterval(() => {
      el.textContent += text[i++];
      if (i >= text.length) clearInterval(timer);
    }, speed);
  }, delay);
}
```

---

## 📄 PAGE SECTIONS — Structure & Copy Pattern

### 1. Navigation

```html
<nav class="nav">
  <span class="nav__name">name.dev</span>   <!-- or just initials -->
  <div class="nav__links">
    <a href="#work">work</a>
    <a href="#about">about</a>
    <a href="#contact">contact</a>
  </div>
</nav>
```

```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--content-width);
  padding: var(--space-6) 0;
  border-bottom: var(--border);
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-wide);
  color: var(--text-secondary);
}

.nav__links { display: flex; gap: var(--space-5); }

.nav a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s;
}
.nav a:hover { color: var(--text-primary); }
```

---

### 2. Hero Section

```html
<section class="hero">
  <p class="hero__label">// hello, world</p>
  <h1 class="hero__name">Your Name</h1>
  <div class="hero__role-wrap">
    <span class="hero__role"></span><!-- typewriter target -->
  </div>
  <p class="hero__bio">
    I build things for the web. Focused on clean code,
    thoughtful UX, and systems that scale.
  </p>
  <div class="hero__cta">
    <a href="#work" class="btn">view work →</a>
    <a href="/resume.pdf" class="btn btn--ghost">résumé ↗</a>
  </div>
</section>
```

```css
.hero {
  display: flex;
  flex-direction: column;
  align-items: flex-start;   /* left-align text inside centered container */
  padding: var(--space-10) 0 var(--space-9);
  gap: var(--space-4);
}

.hero__label {
  font-size: var(--text-sm);
  color: var(--text-muted);
  letter-spacing: var(--tracking-wide);
  margin-bottom: var(--space-2);
}

.hero__name {
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-tight);
  margin: 0;
}

.hero__role-wrap {
  font-size: var(--text-xl);
  color: var(--text-secondary);
  min-height: 1.4em;
}

.hero__bio {
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: var(--leading-loose);
  max-width: var(--narrow-width);
  margin-top: var(--space-3);
}

.hero__cta { display: flex; gap: var(--space-4); margin-top: var(--space-5); }
```

---

### 3. Button Components

```css
.btn {
  display: inline-flex;
  align-items: center;
  padding: var(--space-3) var(--space-5);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-wide);
  background: var(--text-primary);
  color: var(--bg-primary);
  border: var(--border-bright);
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.btn:hover {
  background: var(--bg-primary);
  color: var(--text-primary);
}

.btn--ghost {
  background: transparent;
  color: var(--text-secondary);
  border-color: var(--border-bright);
}

.btn--ghost:hover {
  color: var(--text-primary);
  border-color: var(--text-primary);
  background: transparent;
}
```

---

### 4. Work / Projects Section

```html
<section id="work" class="work">
  <h2 class="section__title" data-typewriter="selected work_"></h2>

  <div class="projects">

    <article class="project">
      <div class="project__meta">
        <span class="project__year">2024</span>
        <span class="project__tags">react · typescript · postgres</span>
      </div>
      <h3 class="project__title">Project Name</h3>
      <p class="project__desc">
        One or two sentences. What it is, what it solves. No fluff.
      </p>
      <div class="project__links">
        <a href="#">live ↗</a>
        <a href="#">github ↗</a>
      </div>
    </article>

    <!-- repeat -->
  </div>
</section>
```

```css
.section__title {
  font-size: var(--text-xl);
  color: var(--text-primary);
  letter-spacing: var(--tracking-wide);
  margin-bottom: var(--space-7);
  padding-bottom: var(--space-4);
  border-bottom: var(--border-bright);
  min-height: 1.4em;
}

.projects { display: flex; flex-direction: column; gap: 0; }

.project {
  padding: var(--space-6) 0;
  border-bottom: var(--border);
  transition: padding-left 0.25s;
}

.project:hover { padding-left: var(--space-4); }

.project__meta {
  display: flex;
  gap: var(--space-5);
  font-size: var(--text-xs);
  color: var(--text-muted);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  margin-bottom: var(--space-3);
}

.project__title {
  font-size: var(--text-lg);
  color: var(--text-primary);
  font-weight: 500;
  margin: 0 0 var(--space-3);
}

.project__desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: var(--leading-loose);
  max-width: var(--narrow-width);
  margin: 0 0 var(--space-4);
}

.project__links { display: flex; gap: var(--space-5); }

.project__links a {
  font-size: var(--text-xs);
  color: var(--text-muted);
  letter-spacing: var(--tracking-wide);
  text-decoration: none;
  transition: color 0.2s;
}
.project__links a:hover { color: var(--text-primary); }
```

---

### 5. About Section

```html
<section id="about" class="about">
  <h2 class="section__title" data-typewriter="about me_"></h2>
  <div class="about__grid">
    <div class="about__text">
      <p>Two paragraphs max. Who you are. What you care about. Where you're headed.</p>
      <p>Keep it personal but professional. No buzzwords.</p>
    </div>
    <div class="about__stats">
      <div class="stat">
        <span class="stat__value">3+</span>
        <span class="stat__label">years experience</span>
      </div>
      <div class="stat">
        <span class="stat__value">20+</span>
        <span class="stat__label">projects shipped</span>
      </div>
      <div class="stat">
        <span class="stat__value">∞</span>
        <span class="stat__label">coffee consumed</span>
      </div>
    </div>
  </div>

  <div class="skills">
    <p class="skills__label">// tech stack</p>
    <div class="skills__list">
      <span>JavaScript</span><span>TypeScript</span><span>React</span>
      <span>Node.js</span><span>Python</span><span>PostgreSQL</span>
      <span>Docker</span><span>AWS</span>
    </div>
  </div>
</section>
```

```css
.about__grid {
  display: flex;
  gap: var(--space-8);
  align-items: flex-start;
  margin-bottom: var(--space-7);
}

.about__text {
  flex: 1;
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: var(--leading-loose);
}

.about__stats {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  min-width: 140px;
}

.stat__value {
  display: block;
  font-size: var(--text-2xl);
  color: var(--text-primary);
  font-weight: 700;
}
.stat__label {
  font-size: var(--text-xs);
  color: var(--text-muted);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

.skills__label {
  font-size: var(--text-xs);
  color: var(--text-muted);
  letter-spacing: var(--tracking-wide);
  margin-bottom: var(--space-4);
}

.skills__list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.skills__list span {
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  padding: var(--space-2) var(--space-4);
  border: var(--border-bright);
  color: var(--text-secondary);
  transition: color 0.2s, border-color 0.2s;
}
.skills__list span:hover {
  color: var(--text-primary);
  border-color: var(--text-primary);
}
```

---

### 6. Contact Section

```html
<section id="contact" class="contact">
  <h2 class="section__title" data-typewriter="get in touch_"></h2>
  <p class="contact__copy">
    Open to freelance work, collaborations, or just a good conversation.
    Drop a line.
  </p>
  <a href="mailto:you@domain.com" class="contact__email">
    you@domain.com ↗
  </a>
  <div class="contact__social">
    <a href="#">github</a>
    <a href="#">twitter</a>
    <a href="#">linkedin</a>
  </div>
</section>
```

```css
.contact {
  padding-bottom: var(--space-10);
  text-align: left;
}

.contact__copy {
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: var(--leading-loose);
  max-width: var(--narrow-width);
  margin-bottom: var(--space-6);
}

.contact__email {
  display: block;
  font-size: var(--text-xl);
  color: var(--text-primary);
  text-decoration: none;
  border-bottom: var(--border-bright);
  padding-bottom: var(--space-3);
  width: fit-content;
  margin-bottom: var(--space-6);
  transition: letter-spacing 0.3s;
}
.contact__email:hover { letter-spacing: var(--tracking-wide); }

.contact__social { display: flex; gap: var(--space-5); }
.contact__social a {
  font-size: var(--text-sm);
  color: var(--text-muted);
  letter-spacing: var(--tracking-wide);
  text-decoration: none;
  transition: color 0.2s;
}
.contact__social a:hover { color: var(--text-primary); }
```

---

### 7. Footer

```html
<footer class="footer">
  <span>© 2025 Your Name</span>
  <span class="footer__built">built with obsession_</span>
</footer>
```

```css
.footer {
  width: 100%;
  max-width: var(--content-width);
  padding: var(--space-6) 0;
  border-top: var(--border);
  display: flex;
  justify-content: space-between;
  font-size: var(--text-xs);
  color: var(--text-muted);
  letter-spacing: var(--tracking-wide);
}
```

---

## 🌀 ANIMATIONS & MICRO-INTERACTIONS

```css
/* Page fade-in */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero { animation: fadeIn 0.7s ease forwards; }
section { animation: fadeIn 0.6s ease forwards; }

/* Stagger on load */
.hero__label  { animation-delay: 0.1s; opacity: 0; }
.hero__name   { animation-delay: 0.25s; opacity: 0; }
.hero__role-wrap { animation-delay: 0.45s; opacity: 0; }
.hero__bio    { animation-delay: 0.60s; opacity: 0; }
.hero__cta    { animation-delay: 0.75s; opacity: 0; }

/* Scroll reveal — add .revealed via IntersectionObserver */
.project, .stat, .skills__list span {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.project.revealed, .stat.revealed, .skills__list span.revealed {
  opacity: 1;
  transform: none;
}
```

```javascript
// Scroll reveal observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('revealed'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.project, .stat, .skills__list span')
  .forEach(el => observer.observe(el));
```

---

## 📱 RESPONSIVE BREAKPOINTS

```css
/* Mobile first */

@media (max-width: 480px) {
  :root {
    --text-3xl: 2.4rem;
    --text-2xl: 1.7rem;
    --text-xl:  1.3rem;
  }
  .about__grid { flex-direction: column; }
  .about__stats { flex-direction: row; flex-wrap: wrap; }
  .hero__cta { flex-direction: column; width: 100%; }
  .btn { justify-content: center; }
  .footer { flex-direction: column; gap: var(--space-3); }
}

@media (max-width: 680px) {
  .nav { flex-direction: column; gap: var(--space-3); text-align: center; }
}
```

---

## 🔡 COPY / WRITING RULES FOR THIS AESTHETIC

```
✓ lowercase everything in UI labels and nav
✓ use → and ↗ as link arrows, not "click here"
✓ use // comment syntax for labels (// hello, // stack, // work)
✓ trailing underscores on typed-out section titles (about me_)
✓ short, declarative sentences only
✓ no hero image — let typography do the work
✗ no buzzwords (passionate, leverage, synergy)
✗ no exclamation marks
✗ no "Welcome to my portfolio"
```

---

## 📂 FILE STRUCTURE (for Cursor Agent)

```
portfolio/
├── index.html          ← single page, all sections
├── styles/
│   ├── reset.css       ← minimal reset
│   ├── tokens.css      ← all CSS custom properties
│   ├── layout.css      ← grid, centering, spacing
│   ├── components.css  ← nav, btn, cards, skills
│   └── animations.css  ← typewriter, fade, reveal
├── scripts/
│   ├── typewriter.js   ← typewriter engine
│   └── observer.js     ← scroll reveal
├── assets/
│   └── resume.pdf
└── README.md
```

---

## 🤖 CURSOR AGENT PROMPT — PASTE THIS TO START

```
Build a personal portfolio website using the following design system:

AESTHETIC: Typewriter monochrome. IBM Plex Mono and Courier Prime fonts only.
Strict monochrome palette — near-black bg (#0a0a0a), warm off-white text (#f0ede8), 
muted grays (#8a8680, #4a4744) for secondary text.

LAYOUT: Single column. All content centered with max-width 680px.
Sections: nav, hero, work/projects, about, contact, footer.

TYPEWRITER: Implement a JavaScript typewriter with typing + delete cycle on the 
hero role/title line. Section headings type in on scroll (one-shot reveal).
Blinking 2px cursor after active typed element.

INTERACTIONS:
- Smooth fade-in stagger on page load for hero elements
- Scroll reveal on project cards and skill tags (translateY + opacity)
- Project row hover shifts content left with padding transition
- Contact email hover expands letter-spacing
- Buttons invert colors on hover

TYPOGRAPHY: Only monospace. Use // comment prefix on labels.
Lowercase nav links. Trailing underscore on typewriter headings.
No hero image. Let typography carry the page.

SECTIONS TO BUILD:
1. Nav: name.dev left, [work / about / contact] right, border-bottom
2. Hero: // hello world label, large name h1, typewriter role, 2-line bio, CTA buttons
3. Work: section heading (typewriter on scroll), project list — each row has year, tags, title, desc, links
4. About: bio text + stat counters + skill tag cloud
5. Contact: heading, copy line, large mailto link, social links
6. Footer: copyright left, "built with obsession_" right

ANIMATIONS: CSS keyframes for fade. IntersectionObserver for scroll reveal.
No external animation libraries. Vanilla JS only unless React is requested.

OUTPUT: Clean, production-ready HTML/CSS/JS. Mobile-first. No colors other than 
the monochrome palette. No gradients. No box-shadow colors.
```

---

*Design system v1.0 — typewriter · monochrome · centered · minimal*
