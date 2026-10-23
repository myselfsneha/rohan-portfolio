
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
  "mt-3 w-full rounded-none border border-white/15 bg-[#24251e] px-4 py-3 text-sm text-[#eee8dc] outline-none transition-colors placeholder:text-[#77786c] focus:border-[#a2a184]";

const labelClass =
  "block text-[10px] uppercase tracking-[0.18em] text-[#aaa696]";

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
    <section className="py-24 sm:py-32 lg:py-40">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#a2a184]">
            05 / Start a conversation
          </p>

          <h2 className="max-w-xl font-display text-5xl font-normal leading-[1.02] tracking-tight text-[#eee8dc] sm:text-7xl lg:text-8xl">
            Have a story
            <br />
            <span className="italic text-[#a2a184]">in mind?</span>
          </h2>

          <p className="mt-7 max-w-md text-sm leading-7 text-[#aaa696] sm:text-base">
            For performances, collaborations, and creative enquiries, share
            a few details below.
          </p>

          <div className="mt-12 border-t border-white/15 pt-6">
            <p className="mb-3 text-[9px] uppercase tracking-[0.22em] text-[#77786c]">
              Direct contact
            </p>
            <a
              href="mailto:panderohan522@gmail.com"
              className="break-all text-sm text-[#eee8dc] transition-colors hover:text-[#a2a184]"
            >
              panderohan522@gmail.com
            </a>
          </div>

          <div className="mt-6">
            <p className="mb-3 text-[9px] uppercase tracking-[0.22em] text-[#77786c]">
              Phone
            </p>
            <a
              href="tel:+918087320795"
              className="text-sm text-[#eee8dc] transition-colors hover:text-[#a2a184]"
            >
              +91 80873 20795
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border-t border-white/15 pt-7 sm:pt-9"
        >
          <div className="grid gap-6 sm:grid-cols-2">
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
              What is this about?
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
              Tell us about it *
              <textarea
                className={`${inputClass} min-h-36 resize-y`}
                name="message"
                placeholder="Share the details, idea, or project..."
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

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="mb-0 max-w-xs text-xs leading-5 text-[#77786c]">
              Your email app will open with the enquiry ready to review and send.
            </p>

            <button
              type="submit"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-5 bg-[#a2a184] px-6 text-xs uppercase tracking-[0.16em] text-[#191a16] transition-colors hover:bg-[#eee8dc]"
            >
              Prepare enquiry <span aria-hidden="true">↗</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}