export default function Music() {
  return (
    <section className="py-20 text-center">

      <h2 className="text-3xl mb-10">Featured Music</h2>

      <div className="max-w-3xl mx-auto border border-neon p-4 rounded-xl">
        <iframe
          src="https://open.spotify.com/embed/track/4PxZBuWxh7U3rdcUKlK6S4"
          className="w-full h-80"
        />
        <p className="mt-3">Junoon — Studio Session</p>
      </div>

    </section>
  );
}