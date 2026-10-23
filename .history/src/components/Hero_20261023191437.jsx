
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0.01 : 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[92svh] items-end overflow-hidden bg-[#191a16] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:min-h-screen lg:px-14 lg:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[18%] h-[42vw] w-[42vw] max-w-[620px] rounded-full border border-[#77785b]/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-4%] top-[24%] h-[30vw] w-[30vw] max-w-[440px] rounded-full border border-[#77785b]/15"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={reveal}
          className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#a2a184] sm:text-xs"
        >
          <span className="h-px w-8 bg-[#a2a184]" />
          Independent artist · Music & sound
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={reveal}
          className="max-w-[1200px] font-display text-[clamp(4rem,13.5vw,12.5rem)] font-normal leading-[0.78] tracking-[-0.075em] text-[#eee8dc]"
        >
          Rohan
          <br />
          <span className="ml-[9vw] inline-block italic text-[#a2a184]">
            Pande<span className="not-italic text-[#8a624a]">.</span>
          </span>
        </motion.h1>

        <div className="mt-12 flex flex-col gap-8 border-t border-white/15 pt-6 sm:mt-16 sm:flex-row sm:items-end sm:justify-between lg:mt-20">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mb-0 max-w-md text-sm leading-7 text-[#aaa696] sm:text-base"
          >
            A space for the music, the moments, and the stories still unfolding.
          </motion.p>

          <motion.a
            initial="hidden"
            animate="visible"
            variants={reveal}
            href="#music"
            className="group inline-flex w-fit items-center gap-5 border-b border-[#a2a184]/60 pb-3 text-xs uppercase tracking-[0.2em] text-[#eee8dc] transition-colors hover:text-[#a2a184]"
          >
            Explore the music
            <span
              aria-hidden="true"
              className="inline-block text-lg transition-transform group-hover:translate-y-1"
            >
              ↓
            </span>
          </motion.a>
        </div>

        <div className="mt-12 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-[#77786c] sm:mt-16">
          <span>Music · Movement · Memory</span>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
