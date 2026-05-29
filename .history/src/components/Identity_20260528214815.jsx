import { Section } from "./Section";

export default function Identity() {
  return (
    <Section>

      <h2 className="text-3xl mb-10">Artist System</h2>

      <div className="flex flex-wrap justify-center gap-6">

        {[
          ["Composer", "Piano-driven cinematic storytelling"],
          ["Producer", "Studio-grade sound design"],
          ["Style", "Ambient • Cinematic • Emotional"]
        ].map(([title, desc]) => (
          <div
            key={title}
            className="w-64 p-6 border border-[#00ffcc] rounded-xl hover:scale-105 transition"
          >
            <h3 className="text-[#00ffcc]">{title}</h3>
            <p className="opacity-70 mt-2">{desc}</p>
          </div>
        ))}

      </div>

    </Section>
  );
}