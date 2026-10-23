
const photos = [
  {
    src: "/IMG_20240121_230419.jpg",
    alt: "Photo from Rohan Pande's existing portfolio collection",
    number: "01",
    caption: "A moment in the frame",
    className: "aspect-[4/5]",
  },
  {
    src: "/IMG-20240321-WA0017.jpg",
    alt: "Photo from Rohan Pande's existing portfolio collection",
    number: "02",
    caption: "Between the moments",
    className: "aspect-[4/5]",
  },
  {
    src: "/IMG-20240617-WA0017.jpg",
    alt: "Photo from Rohan Pande's existing portfolio collection",
    number: "03",
    caption: "Another side of the story",
    className: "aspect-[16/10]",
  },
];

export default function Visuals() {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 sm:flex-row sm:items-end">
        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#a2a184]">
            03 / The visual world
          </p>

          <h2 className="font-display text-5xl font-normal leading-[1.02] tracking-tight text-[#eee8dc] sm:text-7xl lg:text-8xl">
            Life between
            <br />
            <span className="italic text-[#a2a184]">the notes.</span>
          </h2>
        </div>

        <p className="mb-1 max-w-sm text-sm leading-7 text-[#aaa696]">
          A collection of moments, frames, and glimpses into the world around
          the music.
        </p>
      </div>

      <div className="grid items-start gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
        <figure className="m-0">
          <div className="group relative overflow-hidden bg-[#24251e]">
            <img
              src={photos[0].src}
              alt={photos[0].alt}
              loading="lazy"
              className={`w-full object-cover transition duration-700 ease-out group-hover:scale-[1.025] ${photos[0].className}`}
            />

            <span className="absolute left-4 top-4 border border-white/30 bg-[#191a16]/60 px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-[#eee8dc] backdrop-blur-sm">
              Frame {photos[0].number}
            </span>
          </div>

          <figcaption className="mt-4 flex items-center justify-between gap-4 border-t border-white/15 pt-4">
            <span className="font-display text-xl italic text-[#eee8dc] sm:text-2xl">
              {photos[0].caption}
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#77786c]">
              Visual archive
            </span>
          </figcaption>
        </figure>

        <div className="space-y-10 md:pt-28 lg:space-y-14 lg:pt-40">
          {photos.slice(1).map((photo) => (
            <figure key={photo.number} className="m-0">
              <div className="group relative overflow-hidden bg-[#24251e]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className={`w-full object-cover transition duration-700 ease-out group-hover:scale-[1.025] ${photo.className}`}
                />

                <span className="absolute left-4 top-4 border border-white/30 bg-[#191a16]/60 px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-[#eee8dc] backdrop-blur-sm">
                  Frame {photo.number}
                </span>
              </div>

              <figcaption className="mt-4 flex items-center justify-between gap-4 border-t border-white/15 pt-4">
                <span className="font-display text-xl italic text-[#eee8dc] sm:text-2xl">
                  {photo.caption}
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#77786c]">
                  Visual archive
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}