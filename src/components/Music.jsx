export default function Music() {
  return (
    <section id="music" className="py-24 text-center">

      <h2 className="text-3xl mb-10">Featured Sound</h2>

      <div className="max-w-3xl mx-auto border border-neon rounded-xl overflow-hidden">

        <iframe
          src="https://open.spotify.com/embed/track/4PxZBuWxh7U3rdcUKlK6S4"
          className="w-full h-80"
        />

      </div>

      <p className="mt-4 opacity-70">Junoon — Studio Session</p>

      <div className="mt-10 max-w-3xl mx-auto">
        <iframe
          src="https://open.spotify.com/embed/artist/3n30ESV1yrnHPUgvtnhCJK"
          className="w-full h-80"
        />
      </div>

      <div className="mt-10 max-w-3xl mx-auto">
        <iframe
          src="https://www.youtube.com/embed/RE40J5nq6Yc"
          className="w-full h-80"
        />
      </div>

    </section>
  );
}