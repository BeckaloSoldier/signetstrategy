import { Layout } from "@/components/Layout";
import { PlaceholderImage } from "@/components/PlaceholderImage";

const cases = [
  { client: "Client Name", tag: "Brand Positioning", result: "Placeholder result line — the outcome in one sentence." },
  { client: "Client Name", tag: "Showroom Positioning", result: "Placeholder result line — the outcome in one sentence." },
  { client: "Client Name", tag: "Product Storytelling", result: "Placeholder result line — the outcome in one sentence." },
  { client: "Client Name", tag: "Retail Strategy", result: "Placeholder result line — the outcome in one sentence." },
  { client: "Client Name", tag: "Brand Positioning", result: "Placeholder result line — the outcome in one sentence." },
  { client: "Client Name", tag: "Launch Advisory", result: "Placeholder result line — the outcome in one sentence." },
];

const Portfolio = () => {
  return (
    <Layout>
      <section className="container-wide pt-12 md:pt-20 pb-12">
        <p className="text-label">Selected Engagements</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-light uppercase tracking-[0.14em]">
          Portfolio
        </h1>
        <div className="rule-gold w-full mt-8" />
      </section>

      <section className="container-wide pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {cases.map((item, index) => (
            <article
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <PlaceholderImage label="Case image" ratio="4 / 5" className="w-full transition-opacity duration-500 group-hover:opacity-90" />
              <div className="mt-5 border-t border-gold-line pt-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gradient-gold">
                  {item.tag}
                </span>
                <h2 className="mt-2 font-display text-2xl font-light uppercase tracking-[0.1em]">
                  {item.client}
                </h2>
                <p className="mt-2 text-sm font-light text-muted-foreground">
                  {item.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;