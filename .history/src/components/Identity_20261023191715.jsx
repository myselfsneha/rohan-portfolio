
const chapters = [
  {
    number: "01",
    label: "The beginning",
    title: "Where it all starts.",
    description:
      "Every artist has a first note, a first idea, a moment that makes creating feel necessary. This is where Rohan's story begins.",
    detail: "The first chapter",
    side: "left",
  },
  {
    number: "02",
    label: "The process",
    title: "Finding a sound.",
    description:
      "The experiments, the practice, the unfinished ideas, and the small details that gradually shape an artist's own language.",
    detail: "Behind the music",
    side: "right",
  },
  {
    number: "03",
    label: "The journey ahead",
    title: "Still becoming.",
    description:
      "A creative journey is never a finished portrait. Each new performance, release, and collaboration adds another layer.",
    detail: "The next chapter",
    side: "left",
  },
];

export default function Identity() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40">
      <div className="mb-16 grid gap-8 lg:mb-24 lg:grid-cols-[1fr_0.65fr] lg:items-end">
        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#a2a184]">
            02 / The person behind the sound
          </p>

          <h2 className="max-w-4xl font-display text-5xl font-normal leading-[1.03] tracking-tight text-[#eee8dc] sm:text-7xl lg:text-8xl">
            An artist is
            <br />
            <span className="italic text-[#a2a184]">always becoming.</span>
          </h2>
        </div>

        <p className="mb-1 max-w-md text-sm leading-7 text-[#aaa696] sm:text-base">
          Beyond the finished track lies the journey: the ideas, the practice,
          the turning points, and everything still waiting to be discovered.
        </p>
      </div>

      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-[19px] top-8 w-px bg-white/15 sm:left-1/2 sm:-translate-x-1/2"
        />

        <div className="space-y-14 sm:space-y-20 lg:space-y-28">
          {chapters.map((chapter) => (
            <article
              key={chapter.number}
              className={`relative grid grid-cols-[40px_1fr] gap-4 sm:grid-cols-2 sm:gap-12 ${
                chapter.side === "right" ? "sm:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div
                className={`relative hidden sm:block ${
                  chapter.side === "right" ? "sm:order-1" : ""
                }`}
              >
                <div
                  className={`absolute top-3 h-2 w-2 rounded-full bg-[#a2a184] ring-4 ring-[#191a16] ${
                    chapter.side === "right" ? "right-[-28px]" : "right-[-28px]"
                  }`}
                />
                <p className="mb-0 pt-1 text-right text-xs uppercase tracking-[0.2em] text-[#77786c]">
                  Chapter {chapter.number}
                </p>
              </div>

              <div className="relative col-start-2 border-t border-white/15 pt-6 sm:col-start-auto sm:pt-8">
                <span className="absolute -left-[39px] top-7 flex h-5 w-5 items-center justify-center rounded-full border border-[#a2a184]/60 bg-[#191a16] text-[8px] text-[#a2a184] sm:hidden">
                  {chapter.number}
                </span>

                <p className="mb-4 text-[10px] uppercase tracking-[0.24em] text-[#a2a184]">
                  {chapter.label}
                </p>

                <h3 className="mb-5 max-w-lg font-display text-3xl font-normal leading-tight text-[#eee8dc] sm:text-4xl lg:text-5xl">
                  {chapter.title}
                </h3>

                <p className="mb-7 max-w-lg text-sm leading-7 text-[#aaa696]">
                  {chapter.description}
                </p>

                <p className="mb-0 text-[9px] uppercase tracking-[0.2em] text-[#77786c]">
                  {chapter.detail}
                </p>
              </div>

              <div
                aria-hidden="true"
                className={`hidden min-h-[150px] items-center justify-center border border-white/[0.07] bg-[#24251e]/50 sm:flex lg:min-h-[200px] ${
                  chapter.side === "right" ? "sm:order-2" : ""
                }`}
              >
                <span className="font-display text-7xl italic text-[#77785b]/60 lg:text-9xl">
                  {chapter.number}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}