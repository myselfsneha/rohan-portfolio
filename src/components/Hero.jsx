import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-8 relative overflow-hidden"
    >

      {/* ambient glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#00ffcc] opacity-10 blur-[140px] rounded-full right-[-100px] top-20"></div>

      {/* LEFT */}
      <div className="flex-1 z-10">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[6px] text-sm text-[#00ffcc]"
        >
          Music Producer & Composer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl lg:text-8xl font-bold mt-4"
        >
          Rohan <br /> Pande
        </motion.h1>

        <p className="max-w-xl mt-6 text-gray-400 leading-8">
          Creating emotional sonic experiences through cinematic piano,
          ambient textures, and immersive storytelling.
        </p>

        <div className="flex gap-4 mt-8">

          <a
            href="#music"
            className="px-6 py-3 bg-[#00ffcc] text-black rounded-full font-medium hover:scale-105 transition"
          >
            Listen Now
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-[#00ffcc] rounded-full hover:bg-[#00ffcc] hover:text-black transition"
          >
            Contact
          </a>

        </div>
      </div>

      {/* RIGHT */}
      <div className="flex-1 flex justify-center items-center relative mt-16 lg:mt-0">

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 14,
            ease: "linear"
          }}
          className="w-[320px] h-[320px] rounded-full border border-[#00ffcc]/30 bg-gradient-to-br from-[#111] to-black shadow-[0_0_80px_rgba(0,255,204,0.15)]"
        />

      </div>

    </section>
  );
}