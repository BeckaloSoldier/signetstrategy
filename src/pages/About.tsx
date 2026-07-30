import { Layout } from "@/components/Layout";
import { PlaceholderImage } from "@/components/PlaceholderImage";

const timeline = [
  { year: "Year", title: "Role or milestone placeholder", copy: "One or two lines describing the work and the result." },
  { year: "Year", title: "Role or milestone placeholder", copy: "One or two lines describing the work and the result." },
  { year: "Year", title: "Role or milestone placeholder", copy: "One or two lines describing the work and the result." },
];

const expertise = [
  "Luxury Product Branding",
  "Showroom Positioning",
  "Retail Experience",
  "Brand Architecture",
  "Market Entry",
  "Executive Advisory",
];

const About = () => {
  return (
    <Layout>
      <section className="container-wide pt-12 md:pt-20 pb-12">
        <p className="text-label">The Principal</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-light uppercase tracking-[0.14em]">
          About Me
        </h1>
        <div className="rule-gold w-full mt-8" />
      </section>

      <section className="container-wide pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-2">
            <PlaceholderImage label="Portrait headshot" ratio="4 / 5" className="w-full" />
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-light uppercase tracking-[0.12em]">
              Your Name Here
            </h2>
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              Placeholder bio paragraph one — your practice, your point of view, and
              the kind of business owner you work best with.
            </p>
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              Placeholder bio paragraph two — the methodology behind your work and
              what makes the outcome durable.
            </p>
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              Placeholder bio paragraph three — credentials, affiliations, or a
              closing statement of intent.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-separator bg-surface">
        <div className="container-wide py-20">
          <p className="text-label mb-10">Experience</p>
          <div className="space-y-0">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 border-t border-gold-line py-8"
              >
                <span className="font-display text-sm tracking-[0.3em] text-gradient-gold">
                  {item.year}
                </span>
                <h3 className="md:col-span-1 font-display text-xl font-light uppercase tracking-[0.1em]">
                  {item.title}
                </h3>
                <p className="md:col-span-2 text-sm font-light text-muted-foreground">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-separator">
        <div className="container-wide py-20">
          <p className="text-label mb-8">Expertise</p>
          <div className="flex flex-wrap gap-3">
            {expertise.map((area) => (
              <span
                key={area}
                className="border border-gold-line px-5 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;