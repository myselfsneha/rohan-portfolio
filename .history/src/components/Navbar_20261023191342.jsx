
import { useState } from "react";

const links = [
  { label: "Music", href: "#music" },
  { label: "Journey", href: "#journey" },
  { label: "Cinema", href: "#cinema" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-[76px] max-w-[1600px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-14"
      >
        <a
          href="#home"
          className="shrink-0 font-display text-xl italic tracking-tight text-[#eee8dc] transition-colors hover:text-[#a2a184] sm:text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          Rohan Pande<span className="text-[#a2a184]">.</span>
        </a>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="artist-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-white/20 text-[#eee8dc] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`h-px w-4 bg-current transition-transform ${
              menuOpen ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-4 bg-current transition-transform ${
              menuOpen ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>

        <div
          id="artist-navigation"
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col border-b border-white/10 bg-[#191a16] px-5 py-6 md:static md:flex md:flex-row md:items-center md:justify-end md:gap-8 md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 py-3 text-xs uppercase tracking-[0.2em] text-[#aaa696] transition-colors hover:text-[#eee8dc] md:border-0 md:py-2"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex min-h-11 items-center justify-center border border-[#a2a184]/70 px-5 text-xs uppercase tracking-[0.18em] text-[#eee8dc] transition-colors hover:bg-[#77785b] md:mt-0"
          >
            Booking enquiries <span className="ml-3" aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
