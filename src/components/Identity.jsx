import { motion, useReducedMotion } from "framer-motion";

const journeyStages = [
  {
    number: "01",
    label: "The beginning",
    title: "Before the\nnoise.",
    description:
      "Every artist has a starting point. The early influences, first experiments, and little moments that begin to shape a relationship with music.",
    note: "Origins & influences",
    year: "CHAPTER ONE",
  },
  {
    number: "02",
    label: "The practice",
    title: "Finding a\nlanguage.",
    description:
      "Behind every sound is a process. The hours spent learning, experimenting, creating, and discovering what feels unmistakably your own.",
    note: "Craft & creative process",
    year: "CHAPTER TWO",
  },
  {
    number: "03",
    label: "The moments",
    title: "Things worth\nremembering.",
    description:
      "Releases, performances, collaborations, and milestones belong here as they're verified and added to the story.",
    note: "Work & milestones",
    year: "CHAPTER THREE",
  },
  {
    number: "04",
    label: "Still becoming",
    title: "Not the\nfinal page.",
    description:
      "The best part of a creative journey is that it keeps moving. There is always another idea, another sound, another direction to follow.",
    note: "The road ahead",
    year: "TO BE CONTINUED",
  },
];

export default function Identity() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-[#e9e4d7] px-5 py-24 text-[#22231d] sm:px-10 sm:py-32 lg:px-16 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section introduction */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.8 }}
          className="mb-20 grid gap-10 border-b border-[#22231d]/20 pb-10 lg:mb-28 lg:grid-cols-[1fr_0.65fr] lg:items-end"
        >
          <div>
            <p className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-[#77785b]">
              <span className="h-px w-8 bg-[#77785b]" />
              02 / The journey
            </p>

            <h2 className="m-0 font-display text-[clamp(3.8rem,9vw,8.5rem)] font-normal leading-[0.82] tracking-[-0.07em]">
              A life in
              <br />
              <span className="pl-[12%] font-editorial italic text-[#77785b]">
                progress.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2 lg:pl-8">
            <p className="mb-5 max-w-md text-sm leading-7 text-[#62634e] sm:text-base">
              Not just the finished work, but everything that happens
              between the notes. A growing archive of the person behind
              the music.
            </p>
            <span className="font-display text-xl italic text-[#77785b]">
              Every chapter leaves something behind.
            </span>
          </div>
        </motion.div>

        {/* Journey chapters */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-36">
          {journeyStages.map((stage, index) => (
            <motion.article
              key={stage.number}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 35,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: reduceMotion ? 0.01 : 0.85,
                delay: reduceMotion ? 0 : 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`grid gap-6 sm:gap-10 lg:grid-cols-[0.75fr_1.25fr] ${
                index % 2 === 1 ? "lg:pl-[12%]" : "lg:pr-[8%]"
              }`}
            >
              {/* Oversized chapter number */}
              <div className="relative flex items-start justify-between border-b border-[#22231d]/20 pb-5 lg:min-h-[250px] lg:flex-col lg:justify-between lg:border-b-0 lg:pb-0">
                <span className="font-display text-[clamp(7rem,17vw,14rem)] leading-[0.7] tracking-[-0.09em] text-[#77785b]/25">
                  {stage.number}
                </span>

                <span className="pb-1 text-[9px] uppercase tracking-[0.24em] text-[#77785b]">
                  {stage.year}
                </span>
              </div>

              {/* Chapter content */}
              <div className="lg:border-l lg:border-[#22231d]/20 lg:pl-10 xl:pl-16">
                <p className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-[#77785b]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#a66f52]" />
                  {stage.label}
                </p>

                <h3 className="mb-7 whitespace-pre-line font-display text-[clamp(2.8rem,6vw,5.5rem)] font-normal leading-[0.9] tracking-[-0.055em]">
                  {stage.title}
                </h3>

                <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
                  <p className="mb-0 max-w-lg text-sm leading-7 text-[#62634e] sm:text-base sm:leading-8">
                    {stage.description}
                  </p>

                  <span className="w-fit border-t border-[#77785b]/50 pt-3 font-editorial text-lg italic text-[#77785b] sm:min-w-[155px]">
                    {stage.note}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Closing note */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.7 }}
          className="mt-24 flex flex-col justify-between gap-5 border-t border-[#22231d]/20 pt-6 sm:mt-36 sm:flex-row sm:items-end"
        >
          <p className="mb-0 max-w-sm text-xs leading-6 text-[#777568]">
            The details will come from the real story. No borrowed milestones,
            no made-up history — just chapters worth keeping.
          </p>

          <span className="font-editorial text-3xl italic text-[#77785b]">
            The story goes on.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
