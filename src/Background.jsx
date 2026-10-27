import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiMail, FiPhone } from "react-icons/fi";
import { Section } from "./Section";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "Music production",
    message: "",
  });

  const reduceMotion = useReducedMotion();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Project enquiry — ${form.project}`
    );

    const body = encodeURIComponent(
      `Hi Rohan,\n\n${form.message}\n\nProject type: ${form.project}\nName: ${form.name}\nEmail: ${form.email}`
    );

    window.location.href = `mailto:panderohan522@gmail.com?subject=${subject}&body=${body}`;
  };

  const fieldClass =
    "w-full border-0 border-b border-[#22231d]/25 bg-transparent px-0 py-4 text-[#22231d] outline-none transition-colors placeholder:text-[#777568]/70 focus:border-[#77795a]";

  return (
    <Section>
      <section
        id="booking"
        aria-labelledby="contact-heading"
        className="relative overflow-hidden bg-[#e9e4d7] px-5 py-20 text-[#22231d] sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-center justify-between border-b border-[#22231d]/20 pb-4">
            <span className="text-xs uppercase tracking-[0.24em] text-[#777568]">
              The next chapter
            </span>
            <span className="text-xs uppercase tracking-[0.18em] text-[#777568]">
              Enquiries / 01
            </span>
          </div>

          <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[#77795a]">
                Have something in mind?
              </p>

              <h2
                id="contact-heading"
                className="font-display text-5xl leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-8xl"
              >
                Let&apos;s make
                <br />
                <span className="font-editorial italic text-[#77795a]">
                  something
                </span>
                <br />
                that stays.
              </h2>

              <p className="mt-8 max-w-md text-base leading-7 text-[#55564b] sm:text-lg">
                Music, production, collaborations or a story that needs a
                sound of its own. Tell me what you&apos;re thinking.
              </p>

              <div className="mt-12 space-y-5">
                <a
                  href="mailto:panderohan522@gmail.com"
                  className="group flex w-fit items-center gap-3 text-sm transition-colors hover:text-[#77795a]"
                >
                  <FiMail aria-hidden="true" />
                  <span>panderohan522@gmail.com</span>
                  <FiArrowUpRight
                    aria-hidden="true"
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="tel:+918087320795"
                  className="group flex w-fit items-center gap-3 text-sm transition-colors hover:text-[#77795a]"
                >
                  <FiPhone aria-hidden="true" />
                  <span>+91 80873 20795</span>
                  <FiArrowUpRight
                    aria-hidden="true"
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>

              <p className="mt-16 font-editorial text-2xl italic text-[#77795a]">
                Good things begin with a conversation.
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.12 }}
              className="self-start"
            >
              <div className="mb-8">
                <label
                  htmlFor="contact-name"
                  className="text-xs uppercase tracking-[0.16em] text-[#777568]"
                >
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What should I call you?"
                  className={fieldClass}
                  required
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="contact-email"
                  className="text-xs uppercase tracking-[0.16em] text-[#777568]"
                >
                  Email address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={fieldClass}
                  required
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="contact-project"
                  className="text-xs uppercase tracking-[0.16em] text-[#777568]"
                >
                  What are we making?
                </label>
                <select
                  id="contact-project"
                  name="project"
                  value={form.project}
                  onChange={handleChange}
                  className={`${fieldClass} cursor-pointer`}
                >
                  <option>Music production</option>
                  <option>Collaboration</option>
                  <option>Film / background score</option>
                  <option>Live performance</option>
                  <option>Something else</option>
                </select>
              </div>

              <div className="mb-10">
                <label
                  htmlFor="contact-message"
                  className="text-xs uppercase tracking-[0.16em] text-[#777568]"
                >
                  Tell me about it
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="The idea, the feeling, the little details..."
                  rows={4}
                  className={`${fieldClass} resize-y`}
                  required
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-between bg-[#22231d] px-6 py-5 text-sm text-[#e9e4d7] transition-colors hover:bg-[#77795a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#77795a]"
              >
                <span>Start a conversation</span>
                <FiArrowUpRight
                  aria-hidden="true"
                  className="text-lg transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>

              <p className="mt-4 text-xs leading-5 text-[#777568]">
                This opens your email app with the enquiry filled in. No
                account or booking service required.
              </p>
            </motion.form>
          </div>

          <div className="mt-20 flex flex-col gap-3 border-t border-[#22231d]/20 pt-5 text-xs uppercase tracking-[0.16em] text-[#777568] sm:flex-row sm:items-center sm:justify-between">
            <span>Independent by nature.</span>
            <span>Made for the things that matter.</span>
          </div>
        </div>
      </section>
    </Section>
  );
}
