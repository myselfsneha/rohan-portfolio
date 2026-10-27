import { motion, useReducedMotion } from "framer-motion";

const photos = [
  {
    src: "/IMG_20240121_230419.jpg",
    alt: "Photo from Rohan Pande's existing portfolio collection",
    number: "01",
    caption: "A moment in the frame",
    note: "STILL / 001",
  },
  {
    src: "/IMG-20240321-WA0017.jpg",
    alt: "Photo from Rohan Pande's existing portfolio collection",
    number: "02",
    caption: "Between the moments",
    note: "STILL / 002",
  },
  {
    src: "/IMG-20240617-WA0017.jpg",
    alt: "Photo from Rohan Pande's existing portfolio collection",
    number: "03",
    caption: "Another side of the story",
    note: "STILL / 003",
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
    <section
      id="cinema"
      aria-label="Rohan Pande's visual work"
      className="relative overflow-hidden bg-[#191a16] px-5 py-24 text-[#eee8dc] sm:px-8 sm:py-32 lg:px-14 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] translate-x-1/2 -translate-y-1/3 rounded-full border border-[#a2a184]/10 sm:h-[40rem] sm:w-[40rem]"
      />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Section introduction */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 flex flex-col justify-between gap-7 sm:mb-16 lg:flex-row lg:items-end"
        >
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#a2a184]">
              <span className="h-px w-8 bg-[#a2a184]" />
              03 / The visual world
            </p>

            <h2 className="font-display text-5xl font-normal leading-[0.92] tracking-[-0.045em] sm:text-7xl lg:text-[7.5rem]">
              Beyond
              <br />
              <span className="pl-8 italic text-[#a2a184] sm:pl-16">
                the sound.
              </span>
            </h2>
          </div>

          <div className="max-w-sm lg:pb-2">
            <p className="mb-5 text-sm leading-7 text-[#aaa696] sm:text-base">
              Some things are better seen than explained. A moving frame,
              a passing moment, a little more of the story.
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#777568]">
              Music / Motion / Memory
            </p>
          </div>
        </motion.div>

        {/* Featured film */}
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 20,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: reduceMotion ? 0.01 : 0.8,
            ease: "easeOut",
          }}
          className="relative border border-white/10 bg-[#24251e] p-2 sm:p-3"
        >
          <div className="mb-2 flex items-center justify-between gap-4 px-2 py-2 sm:px-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#a2a184]">
              Featured film
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#777568]">
              RP — 001
            </span>
          </div>

          <div className="aspect-video overflow-hidden bg-black">
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

        <div className="flex flex-col justify-between gap-5 border-b border-white/15 py-6 sm:flex-row sm:items-end sm:py-8">
          <div>
            <p className="mb-2 text-[9px] uppercase tracking-[0.22em] text-[#a2a184]">
              Now showing
            </p>
            <h3 className="font-display text-2xl font-normal sm:text-3xl">
              The music, in motion.
            </h3>
          </div>

          <a
            href="https://www.youtube.com/watch?v=RE40J5nq6Yc"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-4 text-[10px] uppercase tracking-[0.16em] text-[#aaa696] transition-colors hover:text-[#c1c0a1]"
          >
            Watch on YouTube
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              ↗
            </span>
          </a>
        </div>

        {/* Photo archive */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-8 mt-20 flex flex-col justify-between gap-5 sm:mt-28 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.22em] text-[#777568]">
              The stills archive / 2024
            </p>
            <h3 className="font-display text-4xl font-normal tracking-tight sm:text-6xl">
              Moments,
              <span className="italic text-[#a2a184]"> collected.</span>
            </h3>
          </div>

          <span className="font-mono text-[10px] tracking-[0.16em] text-[#777568]">
            03 FRAMES / AND COUNTING
          </span>
        </motion.div>

        <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8">
          {photos.map((photo, index) => (
            <motion.figure
              key={photo.number}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 28,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0.01 : 0.7,
                delay: reduceMotion ? 0 : index * 0.12,
                ease: "easeOut",
              }}
              className={`group m-0 min-w-0 ${
                index === 1
                  ? "sm:translate-y-10 lg:col-span-4 lg:translate-y-12"
                  : "lg:col-span-4"
              }`}
            >
              <div className="relative overflow-hidden border border-white/10 bg-[#24251e]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035] group-hover:brightness-110 motion-reduce:transition-none"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#191a16]/65 via-transparent to-black/10 opacity-70 transition-opacity duration-500 group-hover:opacity-90"
                />

                <span className="absolute left-3 top-3 border border-white/30 bg-[#191a16]/75 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#eee8dc] backdrop-blur-sm">
                  Frame {photo.number}
                </span>

                <span className="absolute bottom-4 right-4 font-mono text-[9px] tracking-[0.16em] text-white/75">
                  {photo.note}
                </span>
              </div>

              <figcaption className="mt-4 border-t border-white/15 pt-4">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-xl italic text-[#eee8dc] sm:text-2xl">
                    {photo.caption}
                  </span>
                  <span className="pt-2 font-mono text-[9px] text-[#777568]">
                    {photo.number}
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Closing note */}
        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 sm:mt-32 sm:flex-row sm:items-center">
          <p className="font-display text-xl italic text-[#aaa696] sm:text-2xl">
            Not every story needs a soundtrack.
          </p>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#777568]">
            End scene · For now
          </span>
        </div>
      </div>
    </section>
  );
}
