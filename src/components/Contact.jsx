
import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  enquiryType: "Live performance",
  eventDate: "",
  location: "",
  message: "",
};

const labelClass =
  "block text-[10px] uppercase tracking-[0.2em] text-[#aaa696]";

const inputClass =
  "mt-3 w-full rounded-none border border-white/15 bg-[#1d1e19] px-4 py-4 text-sm text-[#eee8dc] outline-none transition-colors placeholder:text-[#77786c] focus:border-[#a2a184]";

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
      setError("Please complete your name, email, and message.");
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

    const mailto = `mailto:panderohan522@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <section className="relative py-24 sm:py-32 lg:py-40">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-24 h-64 w-64 rounded-full border border-[#77785b]/10 sm:h-96 sm:w-96" />

      <div className="relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div className="flex flex-col">
          <p className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#a2a184]">
            <span className="h-px w-8 bg-[#a2a184]" />
            05 / The next chapter
          </p>

          <h2 className="max-w-xl font-display text-5xl font-normal leading-[0.95] tracking-[-0.045em] text-[#eee8dc] sm:text-7xl lg:text-[6.5rem]">
            Let's make
            <br />
            something
            <br />
            <span className="italic text-[#a2a184]">resonate.</span>
          </h2>

          <p className="mt-8 max-w-md text-sm leading-7 text-[#aaa696] sm:text-base">
            A performance, a creative collaboration, a new sound, or an idea
            that doesn't fit into a box. Start with a message.
          </p>

          <div className="mt-12 border-t border-white/15 pt-6">
            <p className="mb-4 text-[9px] uppercase tracking-[0.24em] text-[#77786c]">
              Prefer a direct conversation?
            </p>

            <a
              href="mailto:panderohan522@gmail.com"
              className="group flex w-fit max-w-full items-center gap-3 break-all text-sm text-[#eee8dc] transition-colors hover:text-[#a2a184]"
            >
              panderohan522@gmail.com
              <span aria-hidden="true" className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="tel:+918087320795"
              className="mt-4 inline-block text-sm text-[#aaa696] transition-colors hover:text-[#eee8dc]"
            >
              +91 80873 20795
            </a>
          </div>

          <div className="mt-auto hidden pt-16 lg:block">
            <p className="mb-0 font-display text-2xl italic text-[#77786c]">
              Music · Movement · Memory
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border-t border-white/20 pt-7 sm:pt-9"
        >
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 text-[9px] uppercase tracking-[0.24em] text-[#77786c]">
                Booking & collaborations
              </p>
              <h3 className="mb-0 font-display text-3xl font-normal text-[#eee8dc] sm:text-4xl">
                Tell me the details.
              </h3>
            </div>
            <span className="pt-1 font-display text-2xl italic text-[#a2a184]">
              01—06
            </span>
          </div>

          <div className="grid gap-x-5 gap-y-7 sm:grid-cols-2">
            <label className={labelClass}>
              Your name *
              <input
                className={inputClass}
                type="text"
                name="name"
                autoComplete="name"
                placeholder="What should I call you?"
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
              Type of enquiry
              <select
                className={inputClass}
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
              Event date
              <input
                className={inputClass}
                type="date"
                name="eventDate"
                value={form.eventDate}
                onChange={updateField}
              />
            </label>

            <label className={`${labelClass} sm:col-span-2`}>
              Location or venue
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
              Your message *
              <textarea
                className={`${inputClass} min-h-40 resize-y leading-7`}
                name="message"
                placeholder="The idea, the occasion, the sound you're imagining..."
                value={form.message}
                onChange={updateField}
                required
              />
            </label>
          </div>

          {error && (
            <p role="alert" className="mt-5 text-sm text-[#d5a28f]">
              {error}
            </p>
          )}

          <div className="mt-8 border-t border-white/10 pt-6">
            <button
              type="submit"
              className="group flex min-h-14 w-full items-center justify-between gap-4 bg-[#a2a184] px-5 text-left text-xs uppercase tracking-[0.16em] text-[#191a16] transition-colors hover:bg-[#eee8dc] sm:px-6"
            >
              <span>Prepare your enquiry</span>
              <span
                aria-hidden="true"
                className="text-xl transition-transform group-hover:translate-x-1"
              >
                ↗
              </span>
            </button>

            <p className="mb-0 mt-4 text-xs leading-6 text-[#77786c]">
              Submitting opens your default email app with the details
              prepared. You'll review and send the message yourself.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}