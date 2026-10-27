import { useEffect, useState } from "react";

const links = [
  { label: "Music", href: "#music", number: "01" },
  { label: "Journey", href: "#journey", number: "02" },
  { label: "Cinema", href: "#cinema", number: "03" },
  { label: "Socials", href: "#socials", number: "04" },
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
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

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
      if (event.key === "Escape") closeMenu();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#eee8dc]/10 bg-[#191a16]/95 text-[#eee8dc] backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-[74px] max-w-[1600px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-14"
      >
        <a
          href="#home"
          onClick={() => {
            closeMenu();
            setActiveSection("");
          }}
          aria-label="Rohan Pande — home"
          className="group relative z-10 flex shrink-0 flex-col leading-none"
        >
          <span className="font-display text-[23px] italic tracking-[-0.055em] text-[#eee8dc] transition-colors duration-300 group-hover:text-[#c1c0a1] sm:text-[27px]">
            Rohan Pande<span className="text-[#a2a184]">.</span>
          </span>
          <span className="mt-2 font-mono text-[8px] uppercase tracking-[0.25em] text-[#aaa696]">
            Independent artist
          </span>
        </a>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="mr-2 h-px w-8 bg-[#77785b]/70" />
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#aaa696]">
            Sound · Story · Screen
          </span>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="artist-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="relative z-10 flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] border border-[#eee8dc]/20 text-[#eee8dc] transition-colors duration-300 hover:border-[#a2a184] hover:text-[#c1c0a1] md:hidden"
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
          } fixed inset-x-0 top-[74px] bottom-0 flex-col overflow-y-auto bg-[#191a16] px-6 pb-10 pt-5 md:static md:flex md:flex-row md:items-center md:justify-end md:gap-7 md:overflow-visible md:bg-transparent md:p-0 lg:gap-8`}
        >
          <div className="mb-5 border-b border-[#eee8dc]/10 pb-5 md:hidden">
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#a2a184]">
              Navigate the portfolio
            </p>
            <p className="mt-2 font-display text-3xl italic text-[#eee8dc]">
              A little more of the story.
            </p>
          </div>

          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                aria-current={isActive ? "location" : undefined}
                className={`group relative flex items-center justify-between gap-5 border-b border-[#eee8dc]/10 py-5 text-xs uppercase tracking-[0.16em] transition-colors duration-300 md:block md:border-0 md:py-3 md:text-[10px] ${
                  isActive
                    ? "text-[#eee8dc]"
                    : "text-[#aaa696] hover:text-[#eee8dc]"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[9px] text-[#77785b] md:hidden">
                    {link.number}
                  </span>
                  {link.label}
                </span>

                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 hidden h-px bg-[#a2a184] transition-all duration-300 md:block ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />

                <span
                  aria-hidden="true"
                  className="text-[#a2a184] transition-transform duration-300 group-hover:translate-x-1 md:hidden"
                >
                  ↗
                </span>
              </a>
            );
          })}

          <a
            href="#booking"
            onClick={closeMenu}
            aria-current={activeSection === "booking" ? "location" : undefined}
            className="group mt-7 inline-flex min-h-12 items-center justify-between gap-6 border border-[#a2a184]/50 px-4 text-[10px] uppercase tracking-[0.14em] text-[#eee8dc] transition-colors duration-300 hover:border-[#a2a184] hover:bg-[#77785b]/20 md:mt-0 md:min-h-10 md:gap-4 md:px-4"
          >
            Booking enquiries
            <span
              aria-hidden="true"
              className="text-[#a2a184] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </a>

          <p className="mt-auto pt-12 font-mono text-[9px] uppercase tracking-[0.2em] text-[#777568] md:hidden">
            Rohan Pande · Independent artist
          </p>
        </div>
      </nav>
    </header>
  );
}
