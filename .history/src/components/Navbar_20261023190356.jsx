
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Home", id: "home" },
  { label: "Music", id: "music" },
  { label: "Journey", id: "identity" },
  { label: "Visuals", id: "visuals" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6"
    >
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          aria-label="Rohan Pande — go to home"
          className="group flex items-center gap-3 text-left"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 font-display text-lg italic text-[#c6c6d0] transition-colors group-hover:border-[#963d56] group-hover:text-white">
            R
          </span>

          <span className="leading-tight">
            <span className="block font-display text-sm tracking-wide text-white sm:text-base">
              Rohan Pande
            </span>
            <span className="mt-1 block text-[9px] uppercase tracking-[0.24em] text-white/45">
              Artist · Composer
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link, index) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="group relative py-2 text-xs uppercase tracking-[0.16em] text-white/65 transition-colors hover:text-white"
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px w-0 bg-[#963d56] transition-all duration-300 group-hover:w-full ${
                  index === 0 ? "" : ""
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="hidden rounded-full bg-[#70263d] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#963d56] sm:inline-flex"
          >
            Book / Enquire <span className="ml-2" aria-hidden="true">↗</span>
          </button>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 md:hidden"
          >
            <span
              className={`h-px w-4 bg-white transition-transform ${
                menuOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-4 bg-white transition-transform ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="glass mx-auto mt-3 max-w-6xl overflow-hidden rounded-3xl p-4 md:hidden"
          >
            <div className="flex flex-col">
              {links.map((link, index) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="flex items-center justify-between border-b border-white/10 py-4 text-left text-sm text-white/80 last:border-b-0"
                >
                  <span>{link.label}</span>
                  <span className="font-display italic text-white/35">
                    0{index + 1}
                  </span>
                </button>
              ))}

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="mt-4 rounded-full bg-[#70263d] px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white"
              >
                Book / Enquire ↗
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}