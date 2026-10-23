
import { motion, useReducedMotion } from "framer-motion";

const releases = [
  {
    number: "01",
    title: "Junoon",
    subtitle: "Studio session",
    type: "Featured track",
    href: "https://open.spotify.com/embed/track/4PxZBuWxh7U3rdcUKlK6S4",
    featured: true,
  },
  {
    number: "02",
    title: "Explore the catalogue",
    subtitle: "Rohan on Spotify",
    type: "Artist profile",
    href: "https://open.spotify.com/embed/artist/3n30ESV1yrnHPUgvtnhCJK",
    featured: false,
  },
];

export default function Music() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 26,
    },
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
    <section className="relative py-24 sm:py-32 lg:py-40">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-12 grid gap-6 sm:mb-16 lg:grid-cols-[1fr_0.55fr] lg:items-end"
      >
        <div>
          <p className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#a2a184]">
            <span className="h-px w-8 bg-[#a2a184]" />
            01 / The sound
          </p>

          <h2 className="max-w-4xl font-display text-5xl font-normal leading-[0.95] tracking-[-0.045em] text-[#eee8dc] sm:text-7xl lg:text-8xl">
            Made to
            <br />
            <span className="italic text-[#a2a184]">be heard.</span>
          </h2>
        </div>

        <p className="mb-1 max-w-sm text-sm leading-7 text-[#aaa696] sm:text-base">
          Every track holds a feeling. Start listening, explore the catalogue,
          and spend a little time with the sound.
        </p>
      </motion.div>

      <div className="border-t border-white/15">
        {releases.map((release, index) => (
          <motion.article
            key={release.number}
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.65,
              delay: reduceMotion ? 0 : index * 0.12,
              ease: "easeOut",
            }}
            className={`group relative grid gap-5 border-b border-white/15 py-7 transition-colors duration-300 hover:border-[#a2a184]/50 sm:py-9 lg:grid-cols-[80px_0.75fr_1.25fr] lg:items-center lg:gap-10 ${
              release.featured ? "lg:py-12" : ""
            }`}
          >
            <div className="flex items-center justify-between lg:block lg:self-start">
              <span className="font-display text-lg italic text-[#77786c] transition-colors duration-300 group-hover:text-[#a2a184]">
                {release.number}
              </span>

              <span className="text-[9px] uppercase tracking-[0.2em] text-[#a2a184] lg:mt-5 lg:block">
                {release.type}
              </span>
            </div>

            <div className="min-w-0 lg:self-start">
              <h3
                className={`mb-3 font-display font-normal leading-[1.05] tracking-tight text-[#eee8dc] transition-colors duration-300 group-hover:text-[#a2a184] ${
                  release.featured
                    ? "text-4xl sm:text-5xl lg:text-6xl"
                    : "text-3xl sm:text-4xl lg:text-[2.7rem]"
                }`}
              >
                {release.title}
              </h3>

              <p className="mb-0 text-sm leading-6 text-[#aaa696]">
                {release.subtitle}
              </p>

              {release.featured && (
                <p className="mb-0 mt-6 hidden text-[9px] uppercase tracking-[0.2em] text-[#77786c] lg:block">
                  Press play to listen
                </p>
              )}
            </div>

            <div
              className={`min-w-0 overflow-hidden border border-white/10 bg-[#1d1e19] transition-colors duration-300 group-hover:border-[#a2a184]/30 ${
                release.featured ? "lg:p-1" : ""
              }`}
            >
              <iframe
                title={`${release.title} — Spotify embed`}
                src={release.href}
                width="100%"
                height="152"
                style={{ border: 0, display: "block" }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="mb-0 max-w-lg text-xs leading-6 text-[#77786c]">
          Listen using the embedded Spotify players. Availability may depend
          on your region and Spotify access.
        </p>

        <a
          href="https://open.spotify.com/artist/3n30ESV1yrnHPUgvtnhCJK"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-fit items-center gap-4 border-b border-[#a2a184]/60 pb-2 text-xs uppercase tracking-[0.18em] text-[#eee8dc] transition-colors hover:text-[#a2a184]"
        >
          Open artist profile
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
          >
            ↗
          </span>
        </a>
      </motion.div>
    </section>
  );
}