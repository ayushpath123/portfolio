const navLinks = [
  { label: "work", href: "#work" },
  { label: "experience", href: "#experience" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="nav flex w-full max-w-[680px] flex-col items-center justify-between gap-3 border-b border-[#2a2724] px-6 py-8 text-sm tracking-wide text-[#8a8680] max-[680px]:text-center min-[681px]:flex-row">
      <span className="nav__name font-mono">ayush.dev</span>
      <div className="nav__links flex gap-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-mono lowercase text-[#8a8680] no-underline transition-colors duration-200 hover:text-[#f0ede8]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
