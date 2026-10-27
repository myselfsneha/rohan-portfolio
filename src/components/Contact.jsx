import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  enquiryType: "Live performance",
  eventDate: "",
  location: "",
  message: "",
};

const inputClass =
  "mt-3 w-full rounded-none border-0 border-b border-[#77785b]/40 bg-transparent px-0 py-4 text-sm text-[#eee8dc] outline-none transition-colors placeholder:text-[#77786c] focus:border-[#c2bd9b]";

const labelClass =
  "block text-[10px] uppercase tracking-[0.22em] text-[#aaa696]";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const { name, email, enquiryType, eventDate, location, message } = form;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("A name, an email, and a few words are all we need to begin.");
      return;
    }

    const subject = `Portfolio enquiry — ${enquiryType}`;
    const body = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Enquiry type: ${enquiryType}`,
      `Event date: ${eventDate || "Not specified"}`,
      `Location: ${location.trim() || "Not specified"}`,
      "",
      "Message:",
      message.trim(),
    ].join("\n");

    window.location.href =
      `mailto:panderohan522@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#e9e4d7] px-5 py-24 text-[#22231d] sm:px-10 sm:py-32 lg:px-16 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-12 font-display text-[20rem] italic leading-none text-[#77785b]/[0.06] sm:text-[30rem]"
      >
        R
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-16 flex items-center justify-between gap-4 border-b border-[#22231d]/20 pb-5 sm:mb-24">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#62634e]">
            05 / The next chapter
          </p>
          <p className="hidden text-[10px] uppercase tracking-[0.22em] text-[#62634e] sm:block">
            Music · Movement · Memory
          </p>
          <span className="font-display text-lg italic text-[#77785b]">
            Let it begin.
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
          <div className="flex flex-col">
            <p className="mb-8 max-w-xs text-xs leading-6 text-[#62634e]">
              For the people with an idea, a stage, a story, or a sound worth
              chasing.
            </p>

            <h2 className="font-display text-[clamp(4rem,10vw,9.5rem)] font-normal leading-[0.82] tracking-[-0.065em]">
              Something
              <br />
              <span className="pl-[8%] font-editorial italic text-[#77785b]">
                starts
              </span>
              <br />
              <span className="text-[0.82em]">here.</span>
            </h2>

            <div className="mt-12 flex items-center gap-4 sm:mt-16">
              <span className="h-px w-12 bg-[#77785b]" />
              <p className="max-w-xs text-sm leading-6 text-[#62634e]">
                No elaborate pitch needed. Tell me what you're imagining.
              </p>
            </div>

            <div className="mt-16 border-t border-[#22231d]/20 pt-6 sm:mt-24">
              <p className="mb-5 text-[9px] uppercase tracking-[0.25em] text-[#77785b]">
                Or reach out directly
              </p>

              <a
                href="mailto:panderohan522@gmail.com"
                className="group flex w-fit max-w-full items-center gap-3 break-all font-display text-xl transition-colors hover:text-[#77785b] sm:text-2xl"
              >
                panderohan522@gmail.com
                <span className="text-sm transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <a
                href="tel:+918087320795"
                className="mt-4 inline-block text-sm text-[#62634e] transition-colors hover:text-[#22231d]"
              >
                +91 80873 20795
              </a>
            </div>
          </div>

          <div className="relative lg:pt-12">
            <div className="mb-10 flex items-end justify-between gap-4 border-b border-[#22231d]/20 pb-5">
              <div>
                <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-[#77785b]">
                  Bookings / Collaborations
                </p>
                <h3 className="font-display text-3xl font-normal tracking-tight sm:text-4xl">
                  Tell me the story.
                </h3>
              </div>
              <span className="font-display text-2xl italic text-[#77785b]">
                01—06
              </span>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                <label className={labelClass}>
                  Your name *
                  <input
                    className={inputClass}
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={updateField}
                    required
                  />
                </label>

                <label className={labelClass}>
                  Email address *
                  <input
                    className={inputClass}
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={updateField}
                    required
                  />
                </label>

                <label className={labelClass}>
                  What is it about?
                  <select
                    className={`${inputClass} cursor-pointer`}
                    name="enquiryType"
                    value={form.enquiryType}
                    onChange={updateField}
                  >
                    <option>Live performance</option>
                    <option>Collaboration</option>
                    <option>Music production</option>
                    <option>Video or media</option>
                    <option>Other enquiry</option>
                  </select>
                </label>

                <label className={labelClass}>
                  Date, if applicable
                  <input
                    className={inputClass}
                    type="date"
                    name="eventDate"
                    value={form.eventDate}
                    onChange={updateField}
                  />
                </label>

                <label className={`${labelClass} sm:col-span-2`}>
                  Where is it happening?
                  <input
                    className={inputClass}
                    type="text"
                    name="location"
                    placeholder="City, venue, or online"
                    value={form.location}
                    onChange={updateField}
                  />
                </label>

                <label className={`${labelClass} sm:col-span-2`}>
                  Tell me a little more *
                  <textarea
                    className={`${inputClass} min-h-36 resize-y leading-7`}
                    name="message"
                    placeholder="The idea, the occasion, the feeling you're after..."
                    value={form.message}
                    onChange={updateField}
                    required
                  />
                </label>
              </div>

              {error && (
                <p role="alert" className="mt-5 text-sm text-[#a4513d]">
                  {error}
                </p>
              )}

              <div className="mt-10 border-t border-[#22231d]/20 pt-6">
                <button
                  type="submit"
                  className="group flex w-full items-center justify-between gap-4 border border-[#22231d] bg-[#22231d] px-5 py-5 text-left text-[10px] uppercase tracking-[0.22em] text-[#e9e4d7] transition-colors duration-300 hover:bg-[#77785b] hover:border-[#77785b] sm:px-7"
                >
                  <span>Let's start a conversation</span>
                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                    ↗
                  </span>
                </button>

                <p className="mt-4 text-[10px] leading-5 text-[#777568]">
                  This prepares an email in your default mail app. You'll
                  review and send it yourself.
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-24 flex flex-col justify-between gap-3 border-t border-[#22231d]/20 pt-5 text-[9px] uppercase tracking-[0.2em] text-[#777568] sm:mt-32 sm:flex-row">
          <span>A good idea deserves a beginning.</span>
          <span>Available for performances & creative work ↗</span>
        </div>
      </div>
    </section>
  );
}
