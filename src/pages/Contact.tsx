import { useState, type FormEvent } from "react";
import { Layout } from "@/components/Layout";

// Submissions are delivered by FormSubmit (formsubmit.co) to this inbox.
const CONTACT_EMAIL = "JBecker8896@gmail.com";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

type Status = "idle" | "sending" | "sent" | "error";

const details = [
  { label: "Email", value: "JBecker8896@gmail.com" },
  { label: "Location", value: "Buffalo, NY" },
  { label: "LinkedIn", value: "www.linkedin.com/in/john-becker-3754a7134" },
];

const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: `New Signet Strategy enquiry from ${data.name || "website visitor"}`,
          _replyto: data.email,
          _template: "table",
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === "false" || json.success === false) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Layout>
      <section className="container-wide pt-12 md:pt-20 pb-12">
        <h1 className="font-display text-5xl md:text-7xl font-light uppercase tracking-[0.14em]">
          Contact Us
        </h1>
        <div className="rule-gold w-full mt-8" />
      </section>

      <section className="container-wide pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Details */}
          <div>
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              Think you could use my services? Please complete the form below.
            </p>
            <p className="text-lg font-light leading-relaxed text-muted-foreground mt-6">
              I will reach out within 1-3 business days to schedule a complimentary initial 30-minute consultation to explore the needs of your business.
            </p>
            <div className="mt-10">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-6 border-t border-gold-line py-5"
                >
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="font-display text-lg md:text-xl tracking-wide">
                    {item.value}
                  </span>
                </div>
              ))}
              <div className="border-t border-gold-line" />
            </div>
          </div>

          {/* Form */}
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            {/* Honeypot: hidden from people, catches spam bots */}
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="text-label block mb-2">Name</label>
                <input id="name" name="name" type="text" required className="input-gold" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="company" className="text-label block mb-2">Company</label>
                <input id="company" name="company" type="text" className="input-gold" placeholder="Your company" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-label block mb-2">Email</label>
              <input id="email" name="email" type="email" required className="input-gold" placeholder="you@company.com" />
            </div>

            <div>
              <label htmlFor="project" className="text-label block mb-2">Project Type</label>
              <input id="project" name="project" type="text" className="input-gold" placeholder="Branding, showroom, launch…" />
            </div>

            <div>
              <label htmlFor="message" className="text-label block mb-2">Additional details</label>
              <textarea id="message" name="message" rows={5} required className="input-gold resize-none" placeholder="Tell me about your business and showroom." />
            </div>

            <button type="submit" className="btn-gold w-full sm:w-auto disabled:opacity-60" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send Enquiry"}
            </button>
            <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
              {status === "sent" && "Thank you — your enquiry has been sent. I'll be in touch within 1-3 business days."}
              {status === "error" && (
                <>
                  Something went wrong sending your enquiry. Please email me directly at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-gold-light">{CONTACT_EMAIL}</a>.
                </>
              )}
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;