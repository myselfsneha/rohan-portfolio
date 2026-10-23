
const releases = [
  {
    number: "01",
    title: "Junoon",
    subtitle: "Studio session",
    type: "Featured track",
    href: "https://open.spotify.com/embed/track/4PxZBuWxh7U3rdcUKlK6S4",
  },
  {
    number: "02",
    title: "More from Rohan",
    subtitle: "Artist catalogue",
    type: "Listen on Spotify",
    href: "https://open.spotify.com/embed/artist/3n30ESV1yrnHPUgvtnhCJK",
  },
];

export default function Music() {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 sm:flex-row sm:items-end">
        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#a2a184]">
            01 / The sound
          </p>
          <h2 className="font-display text-5xl font-normal tracking-tight text-[#eee8dc] sm:text-7xl lg:text-8xl">
            Made to <span className="italic text-[#a2a184]">be heard.</span>
          </h2>
        </div>

        <p className="mb-1 max-w-xs text-sm leading-6 text-[#aaa696]">
          Press play, stay awhile, and explore the music in its own space.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="flex flex-col">
          <div className="mb-5 flex items-center justify-between border-b border-white/15 pb-4">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#aaa696]">
              Selected listening
            </span>
            <span className="text-xs text-[#77786c]">01—02</span>
          </div>

          <div className="divide-y divide-white/10">
            {releases.map((release) => (
              <article key={release.number} className="py-6">
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="pt-2 text-xs text-[#77786c]">
                    {release.number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-[#a2a184]">
                      {release.type}
                    </p>
                    <h3 className="mb-1 font-display text-3xl font-normal text-[#eee8dc] sm:text-4xl">
                      {release.title}
                    </h3>
                    <p className="mb-5 text-sm text-[#aaa696]">
                      {release.subtitle}
                    </p>

                    <iframe
                      title={`${release.title} on Spotify`}
                      src={release.href}
                      width="100%"
                      height="152"
                      style={{ borderRadius: "4px" }}
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <div className="mb-5 flex items-center justify-between border-b border-white/15 pb-4">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#aaa696]">
              Watch & listen
            </span>
            <span className="text-xs text-[#77786c]">On YouTube</span>
          </div>

          <div className="relative overflow-hidden bg-[#24251e]">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/RE40J5nq6Yc"
                title="Rohan Pande — video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-5 flex items-start justify-between gap-5">
            <div>
              <h3 className="mb-2 font-display text-2xl font-normal text-[#eee8dc] sm:text-3xl">
                The music, in motion.
              </h3>
              <p className="mb-0 max-w-md text-sm leading-6 text-[#aaa696]">
                A visual listening experience. Explore the embedded video
                without leaving the page.
              </p>
            </div>

            <span
              aria-hidden="true"
              className="shrink-0 pt-1 text-2xl text-[#a2a184]"
            >
              ↗
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
