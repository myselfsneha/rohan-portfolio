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
    title: "The catalogue",
    subtitle: "Discover more on Spotify",
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
      y: reduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.01 : 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="music"
      className="relative overflow-hidden bg-[#e9e4d7] px-5 py-24 text-[#22231d] sm:px-10 sm:py-32 lg:px-16 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Editorial heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 grid gap-10 border-b border-[#22231d]/20 pb-10 sm:mb-24 lg:grid-cols-[1fr_0.6fr] lg:items-end"
        >
          <div>
            <p className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-[#77785b]">
              <span className="h-px w-8 bg-[#77785b]" />
              01 / The sound
            </p>

            <h2 className="m-0 font-display text-[clamp(4rem,10vw,9rem)] font-normal leading-[0.8] tracking-[-0.075em]">
              Listen
              <br />
              <span className="pl-[14%] font-editorial italic text-[#77785b]">
                closer.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2 lg:pl-8">
            <p className="mb-6 max-w-md text-sm leading-7 text-[#62634e] sm:text-base">
              Some things are better heard than explained. Start with a track,
              stay for the feeling, and see where the sound takes you.
            </p>

            <span className="font-editorial text-xl italic text-[#77785b]">
              Press play. Take your time.
            </span>
          </div>
        </motion.div>

        {/* Featured release */}
        <motion.article
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 28,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: reduceMotion ? 0.01 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid overflow-hidden bg-[#22231d] text-[#e9e4d7] lg:grid-cols-[0.78fr_1.22fr]"
        >
          {/* Record-inspired artwork */}
          <div className="relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-[#77785b] p-6 sm:min-h-[380px] sm:p-10 lg:min-h-[490px] lg:p-12">
            <div className="relative z-10 flex items-center justify-between gap-4 text-[9px] uppercase tracking-[0.22em] text-[#f0ebdd]/75">
              <span>Featured listening</span>
              <span>01 / 02</span>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f0ebdd]/20"
            >
              <div className="absolute inset-[8%] rounded-full border border-[#f0ebdd]/20" />
              <div className="absolute inset-[17%] rounded-full border border-[#f0ebdd]/20" />
              <div className="absolute inset-[26%] rounded-full border border-[#f0ebdd]/20" />
              <div className="absolute inset-[35%] rounded-full border border-[#f0ebdd]/20" />
              <div className="absolute inset-[44%] rounded-full border border-[#f0ebdd]/20" />
              <div className="absolute inset-[47%] rounded-full bg-[#e9e4d7]/80" />
            </div>

            <div className="relative z-10">
              <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-[#f0ebdd]/75">
                On repeat
              </p>
              <h3 className="m-0 font-display text-[clamp(4rem,10vw,7.5rem)] font-normal leading-[0.78] tracking-[-0.075em]">
                Junoon<span className="text-[#d1a38a]">.</span>
              </h3>
              <p className="mb-0 mt-5 font-editorial text-xl italic text-[#f0ebdd]/80">
                A moment in sound.
              </p>
            </div>
          </div>

          {/* Spotify player */}
          <div className="flex flex-col justify-between gap-8 p-5 sm:p-8 lg:p-12">
            <div>
              <p className="mb-4 text-[9px] uppercase tracking-[0.24em] text-[#a2a184]">
                The featured track
              </p>
              <h3 className="mb-4 font-display text-3xl font-normal sm:text-4xl">
                Give it a listen.
              </h3>
              <p className="mb-0 max-w-md text-sm leading-7 text-[#aaa696]">
                Settle in and listen through Spotify. The music speaks for
                itself.
              </p>
            </div>

            <div className="overflow-hidden border border-white/10 bg-[#191a16]">
              <iframe
                title="Junoon — Spotify player"
                src={releases[0].href}
                width="100%"
                height="152"
                style={{ border: 0, display: "block" }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>

            <a
              href="https://open.spotify.com/track/4PxZBuWxh7U3rdcUKlK6S4"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 border-b border-white/20 pb-4 text-[10px] uppercase tracking-[0.2em] transition-colors hover:text-[#c0bc9d]"
            >
              Open track on Spotify
              <span className="text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </motion.article>

        {/* More from the artist */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 sm:mt-28"
        >
          <div className="mb-7 flex items-end justify-between gap-4 border-b border-[#22231d]/20 pb-5">
            <div>
              <p className="mb-3 text-[9px] uppercase tracking-[0.24em] text-[#77785b]">
                Keep exploring
              </p>
              <h3 className="m-0 font-display text-3xl font-normal tracking-tight sm:text-5xl">
                More from Rohan.
              </h3>
            </div>
            <span className="hidden font-editorial text-lg italic text-[#77785b] sm:block">
              The wider collection
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
            <div className="flex items-start gap-5">
              <span className="font-display text-5xl leading-none tracking-[-0.06em] text-[#77785b]/50 sm:text-6xl">
                02
              </span>

              <div>
                <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-[#77785b]">
                  Artist profile
                </p>
                <h4 className="mb-3 font-display text-2xl font-normal sm:text-3xl">
                  The catalogue
                </h4>
                <p className="mb-0 text-sm leading-6 text-[#62634e]">
                  Explore Rohan's artist profile and discover more music.
                </p>
              </div>
            </div>

            <div className="overflow-hidden border border-[#22231d]/15 bg-[#22231d] p-1">
              <iframe
                title="Rohan Pande — Spotify artist profile"
                src={releases[1].href}
                width="100%"
                height="152"
                style={{ border: 0, display: "block" }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* Closing line */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[#22231d]/20 pt-5 sm:mt-24 sm:flex-row sm:items-center">
          <p className="mb-0 max-w-md text-xs leading-6 text-[#777568]">
            Spotify availability and playback may vary by region and account.
          </p>

          <a
            href="https://open.spotify.com/artist/3n30ESV1yrnHPUgvtnhCJK"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-4 border-b border-[#77785b]/60 pb-2 text-[10px] uppercase tracking-[0.2em] transition-colors hover:text-[#77785b]"
          >
            Visit the artist profile
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
