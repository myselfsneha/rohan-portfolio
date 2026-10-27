```jsx
import { motion, useReducedMotion } from "framer-motion";

const platforms = [
  {
    number: "01",
    name: "Spotify",
    description: "The music, on repeat.",
    href: "https://open.spotify.com/artist/3n30ESV1yrnHPUgvtnhCJK",
    action: "Listen on Spotify",
    mark: "S",
  },
  {
    number: "02",
    name: "YouTube",
    description: "Stories in motion.",
    href: "https://www.youtube.com/watch?v=RE40J5nq6Yc",
    action: "Watch on YouTube",
    mark: "Y",
  },
  {
    number: "03",
    name: "Instagram",
    description: "Little moments between the frames.",
    href: "https://www.instagram.com/rohannnpande/",
    action: "Follow on Instagram",
    mark: "IG",
  },
];

export default function Socials() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.01 : 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="socials"
      aria-label="Find Rohan online"
      className="relative overflow-hidden border-y border-white/10 bg-[#24251e] px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-40"
    >
      {/* Quiet, film-like background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#a2a184]/15 sm:h-[28rem] sm:w-[28rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#a2a184]/10 sm:h-80 sm:w-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-px w-1/3 bg-gradient-to-r from-[#a2a184]/50 to-transparent"
      />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#a2a184]">
              <span className="h-px w-8 bg-[#a2a184]" />
              04 / Elsewhere on the internet
            </p>

            <h2 className="max-w-2xl font-display text-5xl font-normal leading-[0.95] tracking-[-0.045em] text-[#eee8dc] sm:text-7xl lg:text-8xl">
              Follow the
              <br />
              <span className="italic text-[#a2a184]">sound.</span>
            </h2>

            <p className="mt-7 max-w-sm text-sm leading-7 text-[#aaa696] sm:text-base">
              The songs, the visuals, the in-between moments.
              Find me wherever the next chapter happens.
            </p>

            <div className="mt-10 hidden items-center gap-3 lg:flex">
              <span className="h-px w-10 bg-[#77785b]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#777568]">
                Pick your frequency
              </span>
            </div>
          </motion.div>

          <div className="self-end">
            {platforms.map((platform, index) => (
              <motion.a
                key={platform.number}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${platform.action} (opens in a new tab)`}
                initial={{
                  opacity: 0,
                  x: reduceMotion ? 0 : 24,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.65,
                  delay: reduceMotion ? 0 : index * 0.12,
                  ease: "easeOut",
                }}
                className="group relative flex items-center justify-between gap-5 border-t border-white/15 py-7 transition-colors duration-300 hover:border-[#a2a184]/70 sm:py-8"
              >
                <div className="flex min-w-0 items-center gap-4 sm:gap-7">
                  <span className="w-5 shrink-0 font-mono text-[10px] tracking-[0.15em] text-[#77786c]">
                    {platform.number}
                  </span>

                  <div className="min-w-0">
                    <h3 className="font-display text-3xl font-normal tracking-tight text-[#eee8dc] transition-colors duration-300 group-hover:text-[#c1c0a1] sm:text-4xl lg:text-5xl">
                      {platform.name}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-[#aaa696] sm:text-sm">
                      {platform.description}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-3 sm:gap-5">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 font-mono text-[10px] text-[#a2a184] transition-all duration-300 group-hover:border-[#a2a184]/60 group-hover:bg-[#a2a184]/10"
                  >
                    {platform.mark}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-xl text-[#a2a184] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </div>
              </motion.a>
            ))}

            <div className="border-t border-white/15" />

            <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#777568]">
              Three ways in. Same artist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```
