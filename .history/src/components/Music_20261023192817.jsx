
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
    title: "Explore the catalogue",
    subtitle: "Rohan on Spotify",
    type: "Artist profile",
    href: "https://open.spotify.com/embed/artist/3n30ESV1yrnHPUgvtnhCJK",
  },
];

export default function Music() {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <div className="mb-12 grid gap-6 sm:mb-16 lg:grid-cols-[1fr_0.55fr] lg:items-end">
        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#a2a184]">
            01 / The sound
          </p>

          <h2 className="max-w-4xl font-display text-5xl font-normal leading-[1.02] tracking-tight text-[#eee8dc] sm:text-7xl lg:text-8xl">
            Made to
            <br />
            <span className="italic text-[#a2a184]">be heard.</span>
          </h2>
        </div>

        <p className="mb-1 max-w-sm text-sm leading-7 text-[#aaa696] sm:text-base">
          Start with a track, stay for the details, and explore the music
          directly through Spotify.
        </p>
      </div>

      <div className="border-t border-white/15">
        {releases.map((release) => (
          <article
            key={release.number}
            className="grid gap-5 border-b border-white/15 py-7 sm:py-9 lg:grid-cols-[100px_0.8fr_1.2fr] lg:items-start lg:gap-8"
          >
            <div className="flex items-center justify-between lg:block">
              <span className="text-xs tracking-[0.2em] text-[#77786c]">
                {release.number}
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#a2a184] lg:mt-5 lg:block">
                {release.type}
              </span>
            </div>

            <div>
              <h3 className="mb-2 font-display text-3xl font-normal text-[#eee8dc] sm:text-4xl lg:text-5xl">
                {release.title}
              </h3>
              <p className="mb-0 text-sm text-[#aaa696]">
                {release.subtitle}
              </p>
            </div>

            <div className="min-w-0">
              <iframe
                title={`${release.title} — Spotify embed`}
                src={release.href}
                width="100%"
                height="152"
                style={{ borderRadius: "4px" }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="mb-0 max-w-lg text-xs leading-6 text-[#77786c]">
          Listen using the embedded Spotify players. Availability may depend
          on your region and Spotify access.
        </p>

        <a
          href="https://open.spotify.com/artist/3n30ESV1yrnHPUgvtnhCJK"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex w-fit items-center gap-4 border-b border-[#a2a184]/60 pb-2 text-xs uppercase tracking-[0.18em] text-[#eee8dc] transition-colors hover:text-[#a2a184]"
        >
          Open artist profile
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}