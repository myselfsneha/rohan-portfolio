import { Section } from "./Section";

export default function Contact() {
  return (
    <Section>

      <h2 className="text-3xl mb-6">Work With Me</h2>

      <p className="opacity-70 mb-6">
        Available for production, collaborations & scoring projects.
      </p>

      <div className="space-y-2">
        <p>📧 panderohan522@gmail.com</p>
        <p>📞 +91 80873 20795</p>
      </div>

      {/* Calendly placeholder */}
      <div className="mt-8 border border-[#00ffcc] p-4 rounded-xl opacity-80">
        Calendly integration ready (booking system placeholder)
      </div>

    </Section>
  );
}