const NAVBAR_OFFSET = 80;

export function scrollToSection(href: string): void {
  if (href === "/" || href === "#home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const id = href.startsWith("#") ? href.slice(1) : href;
  const element = document.getElementById(id);

  if (!element) return;

  const top =
    element.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

  window.scrollTo({ top, behavior: "smooth" });
}
