
import { motion, useReducedMotion } from "framer-motion";

const photos = [
  {
    src: "/IMG_20240121_230419.jpg",
    alt: "Photo from Rohan Pande's existing portfolio collection",
    number: "01",
    caption: "A moment in the frame",
  },
  {
    src: "/IMG-20240321-WA0017.jpg",
    alt: "Photo from Rohan Pande's existing portfolio collection",
    number: "02",
    caption: "Between the moments",
  },
  {
    src: "/IMG-20240617-WA0017.jpg",
    alt: "Photo from Rohan Pande's existing portfolio collection",
    number: "03",
    caption: "Another side of the story",
  },
];

export default function Visuals() {
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
        duration: reduceMotion ? 0.01 : 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 sm:flex-row sm:items-end"
      >
        <div>
          <p className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#a2a184]">
            <span className="h-px w-8 bg-[#a2a184]" />
            03 / The visual world
          </p>

          <h2 className="font-display text-5xl font-normal leading-[0.95] tracking-[-0.045em] text-[#eee8dc] sm:text-7xl lg:text-8xl">
            Beyond
            <br />
            <span className="italic text-[#a2a184]">the sound.</span>
          </h2>
        </div>

        <p className="mb-1 max-w-sm text-sm leading-7 text-[#aaa696]">
          Moving images, still moments, and a visual archive around the music.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.985 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: reduceMotion ? 0.01 : 0.8,
          ease: "easeOut",
        }}
        className="relative overflow-hidden border border-white/10 bg-[#24251e]"
      >
        <div className="aspect-video">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/RE40J5nq6Yc"
            title="Rohan Pande — featured video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </motion.div>

      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col justify-between gap-3 border-b border-white/15 py-6 sm:flex-row sm:items-start"
      >
        <div>
          <p className="mb-2 text-[9px] uppercase tracking-[0.22em] text-[#a2a184]">
            Featured viewing
          </p>
          <h3 className="mb-0 font-display text-2xl font-normal text-[#eee8dc] sm:text-3xl">
            The music, in motion.
          </h3>
        </div>

        <a
          href="https://www.youtube.com/watch?v=RE40J5nq6Yc"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-fit items-center gap-3 pt-2 text-xs uppercase tracking-[0.16em] text-[#aaa696] transition-colors hover:text-[#a2a184]"
        >
          Watch on YouTube
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            ↗
          </span>
        </a>
      </motion.div>

      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-7 mt-16 flex items-end justify-between gap-5 sm:mt-24"
      >
        <div>
          <p className="mb-3 text-[9px] uppercase tracking-[0.24em] text-[#77786c]">
            The archive
          </p>
          <h3 className="mb-0 font-display text-3xl font-normal text-[#eee8dc] sm:text-5xl">
            Moments, collected.
          </h3>
        </div>

        <span className="pb-1 text-xs text-[#77786c]">01 — 03</span>
      </motion.div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {photos.map((photo, index) => (
          <motion.figure
            key={photo.number}
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
            className="group m-0"
          >
            <div className="relative overflow-hidden border border-white/10 bg-[#24251e]">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
              />

              <span className="absolute left-3 top-3 border border-white/30 bg-[#191a16]/70 px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-[#eee8dc] backdrop-blur-sm">
                Frame {photo.number}
              </span>
            </div>

            <figcaption className="mt-4 flex items-center justify-between gap-3 border-t border-white/15 pt-4">
              <span className="font-display text-lg italic text-[#eee8dc] sm:text-xl">
                {photo.caption}
              </span>
              <span className="text-[9px] uppercase tracking-[0.16em] text-[#77786c]">
                {photo.number}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}