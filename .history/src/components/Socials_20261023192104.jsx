
const platforms = [
  {
    number: "01",
    name: "Spotify",
    description: "Listen to the music",
    href: "https://open.spotify.com/artist/3n30ESV1yrnHPUgvtnhCJK",
    action: "Open Spotify",
  },
  {
    number: "02",
    name: "YouTube",
    description: "Watch and explore",
    href: "https://www.youtube.com/watch?v=RE40J5nq6Yc",
    action: "Open YouTube",
  },
];

export default function Socials() {
  return (
    <section
      id="socials"
      aria-label="Find Rohan online"
      className="relative overflow-hidden border-y border-white/10 bg-[#24251e] px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#a2a184]/15 sm:h-[28rem] sm:w-[28rem]"
      />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#a2a184]">
              04 / Stay connected
            </p>

            <h2 className="max-w-2xl font-display text-5xl font-normal leading-[1.02] tracking-tight text-[#eee8dc] sm:text-7xl lg:text-8xl">
              Follow the
              <br />
              <span className="italic text-[#a2a184]">sound.</span>
            </h2>

            <p className="mt-7 max-w-sm text-sm leading-7 text-[#aaa696] sm:text-base">
              Keep listening, keep watching, and follow along wherever the
              next chapter appears.
            </p>
          </div>

          <div className="self-end">
            {platforms.map((platform) => (
              <a
                key={platform.number}
                href={platform.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-5 border-t border-white/15 py-7 transition-colors hover:border-[#a2a184]/70 sm:py-9"
              >
                <div className="flex min-w-0 items-start gap-5 sm:gap-8">
                  <span className="pt-2 text-[10px] tracking-[0.2em] text-[#77786c]">
                    {platform.number}
                  </span>

                  <div>
                    <h3 className="mb-2 font-display text-3xl font-normal text-[#eee8dc] transition-colors group-hover:text-[#a2a184] sm:text-4xl lg:text-5xl">
                      {platform.name}
                    </h3>
                    <p className="mb-0 text-sm text-[#aaa696]">
                      {platform.description}
                    </p>
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  className="shrink-0 text-2xl text-[#a2a184] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
            ))}

            <div className="border-t border-white/15" />
          </div>
        </div>
      </div>
    </section>
  );
}