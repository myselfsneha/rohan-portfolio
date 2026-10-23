
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.01 : 0.85,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-[#191a16] px-5 pb-12 pt-32 sm:px-8 sm:pb-16 lg:min-h-screen lg:px-14 lg:pb-20"
    >
      {/* Atmospheric background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-[18%] top-[8%] h-[75vw] w-[75vw] max-h-[900px] max-w-[900px] rounded-full bg-[radial-gradient(circle,rgba(119,120,91,0.16)_0%,rgba(119,120,91,0.05)_38%,transparent_70%)]" />

        <div className="absolute -left-[25%] bottom-[-40%] h-[85vw] w-[85vw] max-h-[850px] max-w-[850px] rounded-full bg-[radial-gradient(circle,rgba(138,98,74,0.12)_0%,transparent_68%)]" />

        <div className="absolute right-[8%] top-[16%] h-[min(68vw,780px)] w-[min(68vw,780px)] rounded-full border border-[#a2a184]/15" />

        <div className="absolute right-[14%] top-[22%] h-[min(56vw,640px)] w-[min(56vw,640px)] rounded-full border border-[#a2a184]/10" />

        <div className="absolute right-[20%] top-[28%] h-[min(44vw,500px)] w-[min(44vw,500px)] rounded-full border border-[#a2a184]/[0.07]" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#191a16] via-transparent to-[#191a16]/20" />
      </div>

      <div className="relative mx-auto w-full max-w-[1600px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reveal}
          className="mb-8 flex flex-wrap items-center gap-3 sm:mb-10"
        >
          <span className="h-px w-8 bg-[#a2a184]" />

          <p className="mb-0 text-[10px] uppercase tracking-[0.3em] text-[#a2a184] sm:text-xs">
            Independent artist · Music & sound
          </p>
        </motion.div>

        <div className="relative">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="relative z-10 max-w-[1300px] font-display text-[clamp(4rem,14.5vw,13.5rem)] font-normal leading-[0.76] tracking-[-0.085em] text-[#eee8dc]"
          >
            Rohan
            <br />

            <span className="ml-[8vw] inline-block italic text-[#a2a184] sm:ml-[10vw]">
              Pande
              <span className="not-italic text-[#8a624a]">.</span>
            </span>
          </motion.h1>

          <motion.span
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: reduceMotion ? 0.01 : 1.4,
              delay: reduceMotion ? 0 : 0.3,
            }}
            className="pointer-events-none absolute right-0 top-[8%] hidden select-none font-display text-[clamp(8rem,23vw,23rem)] leading-none text-[#eee8dc]/[0.025] lg:block"
          >
            RP
          </motion.span>
        </div>

        <div className="mt-10 flex flex-col gap-7 border-t border-white/15 pt-6 sm:mt-14 sm:flex-row sm:items-end sm:justify-between lg:mt-16">
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
            className="group inline-flex min-h-12 w-fit items-center gap-5 border-b border-[#a2a184]/60 pb-3 text-xs uppercase tracking-[0.2em] text-[#eee8dc] transition-colors hover:text-[#a2a184]"
          >
            Explore the music

            <span
              aria-hidden="true"
              className="inline-block text-lg transition-transform duration-300 group-hover:translate-y-1"
            >
              ↓
            </span>
          </motion.a>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 text-[9px] uppercase tracking-[0.18em] text-[#77786c] sm:mt-14 sm:tracking-[0.2em]">
          <span>Music · Movement · Memory</span>
          <span className="flex items-center gap-3">
            <span className="hidden h-px w-8 bg-[#77786c] sm:block" />
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}