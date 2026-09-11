import { Layout } from "@/components/Layout";

const details = [
  { label: "Email", value: "JBecker8896@gmail.com" },
  { label: "Phone", value: "+1 (716) 698-7852" },
  { label: "Location", value: "Buffalo, NY" },
  { label: "LinkedIn", value: "www.linkedin.com/in/john-becker-3754a7134" },
];

const Contact = () => {
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
              Placeholder introduction — how you prefer to be approached and what to
              include in a first message.
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
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="text-label block mb-2">Name</label>
                <input id="name" name="name" type="text" className="input-gold" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="company" className="text-label block mb-2">Company</label>
                <input id="company" name="company" type="text" className="input-gold" placeholder="Your company" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-label block mb-2">Email</label>
              <input id="email" name="email" type="email" className="input-gold" placeholder="you@company.com" />
            </div>

            <div>
              <label htmlFor="project" className="text-label block mb-2">Project Type</label>
              <input id="project" name="project" type="text" className="input-gold" placeholder="Branding, showroom, launch…" />
            </div>

            <div>
              <label htmlFor="message" className="text-label block mb-2">Message</label>
              <textarea id="message" name="message" rows={5} className="input-gold resize-none" placeholder="Tell me about the product and the room." />
            </div>

            <button type="submit" className="btn-gold w-full sm:w-auto">
              Send Enquiry
            </button>
            <p className="text-xs text-muted-foreground/70">
              Placeholder form — not yet connected to a mailbox.
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;