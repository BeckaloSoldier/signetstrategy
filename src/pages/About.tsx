import { Layout } from "@/components/Layout";
import headshotAsset from "@/assets/headshot.png.asset.json";

const acts = [
  {
    act: "Act I",
    title: "The Crucible of Sales",
    copy: "My journey in high-end sales began straight out of high school with Vector Marketing, selling premium Cutco cutlery by appointment. Without a built-in network, I generated sales out-of-market through hustle, discipline, and relational selling. Rising into leadership as an Assistant Manager across three offices while earning my business degree, I learned a principle that still drives my work: selling high-end products isn't about pitching features—it's about building immediate trust, understanding value, and guiding the client's decision-making journey.",
  },
  {
    act: "Act II",
    title: "Mastering the Operational Engine",
    copy: "At Fastenal, I plunged into industrial distribution, commodity sales, logistics, and visual display organization. Managing inventory, organizing showroom floors, and resolving supply chain complexities taught me how physical layout directly influences buyer flow and backend profitability. I saw firsthand that even the best sales strategy fails if the operational foundation behind it is broken.",
  },
  {
    act: "Act III",
    title: "The Trial by Fire",
    copy: "When I joined Buffalo Plumbing Showroom at Erb Company as Marketing Director, organizational turnover six months in left me as the sole remaining team member with experience in high-margin products. I was handed total responsibility for the showroom's accounts, operations, and future. I rebuilt the culture by recruiting and mentoring an entirely new team, pitched investment strategies to secure full-scale showroom renovations, authored marketing campaigns, produced television commercials, represented the company at national conferences, and managed every level of daily operations. Over five years, I learned an industry, rebuilt a full team of expert consultants who took genuine pride in their work, and tripled the annual revenue of Buffalo Plumbing Showroom.",
  },
  {
    act: "Act IV",
    title: "Launching Signet Strategy",
    copy: "I founded Signet Strategy, LLC because trade showrooms and high-end B2B businesses don't need generic corporate advice—they need battle-tested, practical guidance from someone who has stood in their shoes. Through our proprietary Authentic Experience Diagnostic (AED), I combine floor plan optimization, customer-journey mapping, modern digital workflows, and deep sales psychology to help business owners refine their physical environments, align their sales teams, and create high-converting customer experiences. I didn't learn showroom strategy from a textbook, I built it in the trenches; and now, I put that obsession and expertise to work for you.",
  },
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
        <h1 className="mt-4 font-display text-4xl md:text-6xl font-light uppercase tracking-[0.12em]">
          The Story Behind Signet Strategy
        </h1>
        <div className="rule-gold w-full mt-8" />
      </section>

      <section className="container-wide pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <PlaceholderImage label="Portrait headshot" ratio="4 / 5" className="w-full" />
          </div>

          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              Most business consultants view operations from 30,000 feet. My perspective was forged on the showroom floor, behind the sales counter, on warehouse loading docks, and through a high-stakes business turnaround.
            </p>
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              Every stage of my career has been a lesson in what makes a business truly succeed—from the psychology of luxury sales to the grit required to rebuild an enterprise from the ground up.
            </p>
            <p className="text-base font-light leading-relaxed text-muted-foreground italic border-l border-gold-line pl-6">
              I didn't learn showroom strategy from a textbook, I built it in the trenches; and now, I put that obsession and expertise to work for you.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-separator bg-surface/40">
        <div className="container-wide py-20">
          <p className="text-label mb-10">Career Arc</p>
          <div className="space-y-0">
            {acts.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-t border-gold-line py-10"
              >
                <span className="md:col-span-2 font-display text-sm tracking-[0.3em] text-gradient-gold">
                  {item.act}
                </span>
                <div className="md:col-span-10 space-y-3">
                  <h3 className="font-display text-2xl font-light uppercase tracking-[0.1em]">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base font-light leading-relaxed text-muted-foreground">
                    {item.copy}
                  </p>
                </div>
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
