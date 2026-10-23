
import { useEffect, useState } from "react";

const links = [
  { label: "Music", href: "#music" },
  { label: "Journey", href: "#journey" },
  { label: "Cinema", href: "#cinema" },
  { label: "Socials", href: "#socials" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const sectionIds = ["music", "journey", "cinema", "socials", "booking"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#191a16]/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-[76px] max-w-[1600px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-14"
      >
        <a
          href="#home"
          onClick={() => {
            closeMenu();
            setActiveSection("");
          }}
          aria-label="Rohan Pande — home"
          className="group shrink-0 font-display text-xl italic tracking-tight text-[#eee8dc] transition-colors duration-300 hover:text-[#a2a184] sm:text-2xl"
        >
          Rohan Pande
          <span className="text-[#a2a184] transition-colors group-hover:text-[#8a624a]">
            .
          </span>
        </a>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="artist-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="relative flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] border border-white/15 text-[#eee8dc] transition-colors hover:border-[#a2a184]/60 hover:text-[#a2a184] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`h-px w-4 bg-current transition-transform duration-300 ${
              menuOpen ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-4 bg-current transition-transform duration-300 ${
              menuOpen ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>

        <div
          id="artist-navigation"
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col border-b border-white/10 bg-[#191a16] px-5 pb-7 pt-3 shadow-2xl shadow-black/20 md:static md:flex md:flex-row md:items-center md:justify-end md:gap-6 md:border-0 md:bg-transparent md:p-0 md:shadow-none lg:gap-8`}
        >
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                aria-current={isActive ? "location" : undefined}
                className={`group relative border-b border-white/[0.08] py-4 text-xs uppercase tracking-[0.18em] transition-colors duration-300 md:border-0 md:py-3 ${
                  isActive
                    ? "text-[#eee8dc]"
                    : "text-[#aaa696] hover:text-[#eee8dc]"
                }`}
              >
                {link.label}

                <span
                  aria-hidden="true"
                  className={`absolute bottom-2 left-0 h-px bg-[#a2a184] transition-all duration-300 md:bottom-1 ${
                    isActive
                      ? "w-5"
                      : "w-0 group-hover:w-5"
                  }`}
                />
              </a>
            );
          })}

          <a
            href="#booking"
            onClick={closeMenu}
            aria-current={activeSection === "booking" ? "location" : undefined}
            className="group mt-5 inline-flex min-h-12 items-center justify-between gap-5 border border-[#a2a184]/50 px-4 text-xs uppercase tracking-[0.15em] text-[#eee8dc] transition-colors duration-300 hover:border-[#a2a184] hover:bg-[#77785b]/20 md:mt-0 md:min-h-11 md:justify-center md:px-4"
          >
            Booking enquiries
            <span
              aria-hidden="true"
              className="text-[#a2a184] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}