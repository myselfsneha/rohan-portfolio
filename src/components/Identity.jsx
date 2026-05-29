export default function Identity() {
  return (
    <section id="identity" className="py-24 text-center">

      <h2 className="text-3xl mb-10">Artist Identity</h2>

      <div className="flex flex-wrap justify-center gap-6">

        <div className="border border-neon p-6 w-64 rounded-xl">
          <h3 className="text-neon">Composer</h3>
          <p className="opacity-70">Piano-based storytelling</p>
        </div>

        <div className="border border-neon p-6 w-64 rounded-xl">
          <h3 className="text-neon">Producer</h3>
          <p className="opacity-70">Studio sound design</p>
        </div>

        <div className="border border-neon p-6 w-64 rounded-xl">
          <h3 className="text-neon">Style</h3>
          <p className="opacity-70">Cinematic • Ambient • Emotional</p>
        </div>

      </div>

    </section>
  );
}