import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.01 : 0.9,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  });

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden bg-[#191a16] px-5 pb-7 pt-28 text-[#eee8dc] sm:px-9 sm:pb-9 lg:px-16 lg:pt-32"
    >
      {/* Atmospheric layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_38%,rgba(119,120,91,0.18),transparent_48%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_90%,rgba(138,98,74,0.12),transparent_42%)]" />
        <div className="absolute right-[-18%] top-[12%] h-[70vw] w-[70vw] max-h-[850px] max-w-[850px] rounded-full border border-[#eee8dc]/[0.07]" />
        <div className="absolute right-[-10%] top-[20%] h-[54vw] w-[54vw] max-h-[650px] max-w-[650px] rounded-full border border-[#a2a184]/[0.12]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#191a16]/20 via-transparent to-[#191a16]" />
      </div>

      {/* Opening note */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={reveal(0.1)}
        className="flex items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-[#a2a184]" />
          <p className="mb-0 text-[9px] uppercase tracking-[0.24em] text-[#c0bc9d] sm:text-[10px] sm:tracking-[0.3em]">
            Independent artist / Music & sound
          </p>
        </div>

        <span className="hidden text-[9px] uppercase tracking-[0.22em] text-[#77786c] sm:block">
          An ongoing composition
        </span>
      </motion.div>

      {/* Artist title */}
      <div className="relative mx-auto my-20 w-full max-w-[1600px] sm:my-24 lg:my-16">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={reveal(0.2)}
          className="mb-5 ml-[2%] font-editorial text-lg italic text-[#aaa696] sm:mb-8 sm:text-2xl"
        >
          The world, in a different key.
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          className="relative z-10 m-0 font-display text-[clamp(5rem,16.8vw,16rem)] font-normal leading-[0.7] tracking-[-0.09em]"
        >
          <motion.span
            variants={reveal(0.25)}
            className="block"
          >
            Rohan
          </motion.span>

          <motion.span
            variants={reveal(0.42)}
            className="mt-[0.16em] block pl-[12%] font-editorial italic font-normal text-[#a2a184] sm:pl-[18%]"
          >
            Pande<span className="text-[#a66f52]">.</span>
          </motion.span>
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={reveal(0.6)}
          className="mt-10 flex items-start justify-between gap-6 sm:mt-14 lg:ml-[56%] lg:mt-8"
        >
          <p className="mb-0 max-w-[290px] text-sm leading-7 text-[#aaa696] sm:text-base sm:leading-8">
            Somewhere between a melody and a memory, there's a story worth
            telling.
          </p>

          <span className="hidden pt-1 font-editorial text-4xl italic text-[#77786c] sm:block">
            RP
          </span>
        </motion.div>

        <motion.span
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0.01 : 1.5, delay: 0.5 }}
          className="pointer-events-none absolute right-[2%] top-[2%] hidden select-none font-display text-[clamp(9rem,25vw,25rem)] leading-none text-[#eee8dc]/[0.025] lg:block"
        >
          R
        </motion.span>
      </div>

      {/* Bottom navigation cue */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={reveal(0.7)}
        className="grid gap-6 border-t border-white/15 pt-5 sm:grid-cols-[1fr_auto_1fr] sm:items-end"
      >
        <p className="mb-0 text-[9px] uppercase tracking-[0.2em] text-[#77786c] sm:text-[10px]">
          Music · Movement · Memory
        </p>

        <a
          href="#music"
          className="group inline-flex min-h-12 w-fit items-center gap-5 border-b border-[#a2a184]/60 pb-3 text-[10px] uppercase tracking-[0.2em] transition-colors hover:text-[#c0bc9d] sm:justify-self-center"
        >
          Enter the sound
          <span
            aria-hidden="true"
            className="inline-block text-lg transition-transform duration-300 group-hover:translate-y-1"
          >
            ↓
          </span>
        </a>

        <p className="mb-0 hidden text-right text-[9px] uppercase tracking-[0.2em] text-[#77786c] sm:block sm:text-[10px]">
          Scroll slowly. Stay awhile.
        </p>
      </motion.div>
    </section>
  );
}
