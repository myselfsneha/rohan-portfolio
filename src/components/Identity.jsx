
import { motion, useReducedMotion } from "framer-motion";

const journeyStages = [
  {
    number: "01",
    label: "Origins",
    title: "Where the story begins.",
    description:
      "The early influences, first experiments, and moments that helped shape Rohan's relationship with music.",
    note: "Personal story",
    status: "Details to verify",
  },
  {
    number: "02",
    label: "Craft",
    title: "The work behind the sound.",
    description:
      "The practice, creative process, performances, and releases that belong in the story of an artist's development.",
    note: "Creative practice",
    status: "Details to verify",
  },
  {
    number: "03",
    label: "Milestones",
    title: "Moments worth remembering.",
    description:
      "Verified releases, performances, collaborations, recognitions, and other important milestones can live here.",
    note: "Career highlights",
    status: "Add verified milestones",
  },
  {
    number: "04",
    label: "In progress",
    title: "The story continues.",
    description:
      "New work and future projects will extend the timeline as the journey unfolds.",
    note: "What's next",
    status: "Ongoing",
  },
];

export default function Identity() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.01 : 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-24 sm:py-32 lg:py-40">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16 grid gap-8 lg:mb-24 lg:grid-cols-[1fr_0.6fr] lg:items-end"
      >
        <div>
          <p className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#a2a184]">
            <span className="h-px w-8 bg-[#a2a184]" />
            02 / The journey
          </p>

          <h2 className="max-w-4xl font-display text-5xl font-normal leading-[0.95] tracking-[-0.045em] text-[#eee8dc] sm:text-7xl lg:text-8xl">
            Every chapter
            <br />
            <span className="italic text-[#a2a184]">leaves a mark.</span>
          </h2>
        </div>

        <p className="mb-1 max-w-md text-sm leading-7 text-[#aaa696] sm:text-base">
          The story behind the music deserves more than a list of titles.
          This timeline is designed to grow around real experiences and
          verified milestones.
        </p>
      </motion.div>

      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-[19px] top-8 w-px bg-gradient-to-b from-[#a2a184]/70 via-white/15 to-transparent sm:left-[31px]"
        />

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {journeyStages.map((stage, index) => (
            <motion.article
              key={stage.number}
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : -16,
                y: reduceMotion ? 0 : 12,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reduceMotion ? 0.01 : 0.65,
                delay: reduceMotion ? 0 : index * 0.08,
                ease: "easeOut",
              }}
              className="group relative grid grid-cols-[40px_1fr] gap-5 sm:grid-cols-[64px_1fr] sm:gap-8"
            >
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#a2a184]/50 bg-[#191a16] font-display text-sm italic text-[#a2a184] transition-all duration-300 group-hover:border-[#eee8dc] group-hover:bg-[#24251e] group-hover:text-[#eee8dc] sm:h-16 sm:w-16 sm:text-lg">
                {stage.number}
              </div>

              <div className="grid gap-5 border-t border-white/15 pb-4 pt-5 transition-colors duration-300 group-hover:border-[#a2a184]/50 sm:grid-cols-[1fr_0.65fr] sm:gap-10 sm:pt-7">
                <div>
                  <p className="mb-3 flex items-center gap-3 text-[9px] uppercase tracking-[0.24em] text-[#a2a184]">
                    <span>{stage.label}</span>
                    <span className="h-px w-5 bg-[#77785b]" />
                  </p>

                  <h3 className="mb-4 max-w-2xl font-display text-3xl font-normal leading-tight tracking-tight text-[#eee8dc] sm:text-4xl lg:text-5xl">
                    {stage.title}
                  </h3>

                  <p className="mb-0 max-w-2xl text-sm leading-7 text-[#aaa696]">
                    {stage.description}
                  </p>
                </div>

                <div className="flex flex-col justify-between gap-5 border-l border-white/10 pl-4 sm:pl-6">
                  <div>
                    <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-[#77786c]">
                      Chapter focus
                    </p>

                    <p className="mb-0 text-sm text-[#eee8dc]">
                      {stage.note}
                    </p>
                  </div>

                  <p className="mb-0 flex items-center gap-2 text-[9px] uppercase tracking-[0.13em] text-[#a2a184]">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-[#a2a184]"
                    />
                    {stage.status}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-14 flex items-center justify-between gap-5 border-t border-white/10 pt-5 sm:mt-20"
      >
        <p className="mb-0 max-w-md text-xs leading-6 text-[#77786c]">
          Every chapter deserves its truth. Verified stories will take the
          place of placeholders as the archive grows.
        </p>

        <span className="shrink-0 font-display text-lg italic text-[#77786c]">
          To be continued.
        </span>
      </motion.div>
    </section>
  );
}