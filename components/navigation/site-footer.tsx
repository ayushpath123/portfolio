export function SiteFooter() {
  return (
    <footer className="footer flex w-full max-w-[680px] flex-col justify-between gap-3 border-t border-[#2a2724] px-6 py-8 text-xs tracking-wide text-[#4a4744] max-[480px]:flex-col min-[481px]:flex-row">
      <span>© {new Date().getFullYear()} Ayush Pathak</span>
      <span className="footer__built">built with obsession_</span>
    </footer>
  );
}
