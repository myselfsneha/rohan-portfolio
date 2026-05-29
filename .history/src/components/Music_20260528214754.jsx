import { Section } from "./Section";

export default function Music() {
  return (
    <Section>

      <h2 className="text-3xl mb-10">Featured Sound</h2>

      <div className="max-w-3xl mx-auto border border-[#00ffcc] rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,255,204,0.15)]">

        <iframe
          src="https://open.spotify.com/embed/track/4PxZBuWxh7U3rdcUKlK6S4"
          className="w-full h-80"
        />

      </div>

      <p className="mt-4 opacity-70">
        Junoon — Studio Session (Emotional Core Piece)
      </p>

    </Section>
  );
}