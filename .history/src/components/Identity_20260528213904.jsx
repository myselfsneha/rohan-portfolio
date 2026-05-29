export default function Identity() {
  return (
    <section className="py-20 text-center">

      <h2 className="text-3xl mb-10">Artist Identity</h2>

      <div className="flex flex-wrap justify-center gap-6">

        <div className="border border-neon p-6 w-64 rounded-xl">
          <h3>Composer</h3>
          <p className="opacity-70">Piano-driven storytelling</p>
        </div>

        <div className="border border-neon p-6 w-64 rounded-xl">
          <h3>Producer</h3>
          <p className="opacity-70">Studio sound design</p>
        </div>

        <div className="border border-neon p-6 w-64 rounded-xl">
          <h3>Style</h3>
          <p className="opacity-70">Cinematic • Ambient</p>
        </div>

      </div>

    </section>
  );
}