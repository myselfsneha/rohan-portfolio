import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">

      {/* Glow Layer */}
      <div className="absolute w-[600px] h-[600px] bg-[#00ffcc] blur-[160px] opacity-20 rounded-full animate-pulse" />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold"
      >
        Rohan Pande
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-[#00ffcc] mt-2"
      >
        Music Producer • Composer • Sound Architect
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="opacity-70 max-w-md mt-4"
      >
        Cinematic sound design shaped through piano, emotion & silence.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 flex gap-4"
      >
        <button className="border border-[#00ffcc] px-5 py-2 hover:bg-[#00ffcc] hover:text-black transition">
          Listen
        </button>

        <button className="border border-[#00ffcc] px-5 py-2 hover:bg-[#00ffcc] hover:text-black transition">
          Book Session
        </button>
      </motion.div>

    </section>
  );
}