export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative">

      <div className="absolute w-[500px] h-[500px] bg-neon blur-[140px] opacity-20 rounded-full"></div>

      <h1 className="text-5xl font-bold">Rohan Pande</h1>

      <p className="text-neon mt-2">
        Music Producer • Composer
      </p>

      <p className="mt-4 opacity-70 max-w-md">
        Cinematic piano-driven soundscapes and emotional storytelling through music.
      </p>

      <div className="mt-6 flex gap-4">
        <button className="border border-neon px-4 py-2 hover:bg-neon hover:text-black transition">
          Listen
        </button>

        <button className="border border-neon px-4 py-2 hover:bg-neon hover:text-black transition">
          Contact
        </button>
      </div>

    </section>
  );
}