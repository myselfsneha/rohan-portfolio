import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center relative">

      <div className="absolute w-[500px] h-[500px] bg-neon blur-[160px] opacity-20 rounded-full"></div>

      <motion.h1 className="text-6xl font-bold">
        Rohan Pande
      </motion.h1>

      <p className="text-neon mt-2">
        Music Producer • Composer • Sound Designer
      </p>

      <p className="opacity-70 max-w-md mt-4">
        Cinematic piano-driven storytelling through sound & emotion.
      </p>

      <div className="mt-6 flex gap-4">
        <button className="border border-neon px-5 py-2 hover:bg-neon hover:text-black">
          Listen
        </button>

        <button className="border border-neon px-5 py-2 hover:bg-neon hover:text-black">
          Contact
        </button>
      </div>

    </section>
  );
}