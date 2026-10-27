```jsx
import { motion, useReducedMotion } from "framer-motion";

export default function Loader() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{
        delay: reduceMotion ? 0.4 : 1.8,
        duration: reduceMotion ? 0.2 : 0.8,
        ease: "easeInOut",
      }}
      aria-label="Loading Rohan Pande's portfolio"
      role="status"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#191a16] text-[#eee8dc]"
    >
      {/* Subtle film-frame details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-5 border border-white/10 sm:inset-8"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#a2a184]/10 sm:h-[30rem] sm:w-[30rem]"
      />

      <div className="relative flex w-full max-w-xl flex-col items-center px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.6 }}
          className="mb-8 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.3em] text-[#a2a184]"
        >
          <span className="h-px w-7 bg-[#77785b]" />
          An independent artist
          <span className="h-px w-7 bg-[#77785b]" />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0.01 : 0.8,
            delay: reduceMotion ? 0 : 0.12,
            ease: "easeOut",
          }}
          className="font-display text-5xl font-normal leading-[0.95] tracking-[-0.055em] sm:text-7xl"
        >
          Rohan
          <br />
          <span className="italic text-[#a2a184]">Pande.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduceMotion ? 0 : 0.45, duration: 0.6 }}
          className="mt-6 font-mono text-[9px] uppercase tracking-[0.24em] text-[#aaa696]"
        >
          Sound · Story · Screen
        </motion.p>

        <div
          aria-hidden="true"
          className="mt-12 h-px w-40 overflow-hidden bg-white/10"
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: reduceMotion ? 0.01 : 1.7,
              ease: "easeInOut",
            }}
            className="h-full bg-[#a2a184]"
          />
        </div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduceMotion ? 0 : 0.5, duration: 0.5 }}
          className="mt-4 font-mono text-[8px] uppercase tracking-[0.25em] text-[#777568]"
        >
          Enter the story
        </motion.span>
      </div>
    </motion.div>
  );
}
```
