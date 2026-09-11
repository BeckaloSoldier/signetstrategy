import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import headshotAsset from "@/assets/headshot-new.png.asset.json";
import secondaryHeadshotAsset from "@/assets/headshot-secondary.png.asset.json";

const capabilities = [
  {
    number: "01",
    title: "Brand Positioning",
    copy: "Defining the territory a luxury product owns — and the language that makes it undeniable.",
  },
  {
    number: "02",
    title: "Product Storytelling",
    copy: "Narrative architecture that carries a product from the first impression to the signature.",
  },
  {
    number: "03",
    title: "Showroom Positioning",
    copy: "Physical and retail environments staged so the merchandise sells itself with restraint.",
  },
];

const Index = () => {
  return (
    <Layout noPadding>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-vignette pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <span className="text-label animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Private Consulting
          </span>

          <h1
            className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase tracking-[0.18em] text-gradient-gold animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Signet Strategy
          </h1>

          <div className="rule-gold w-40 md:w-64 my-8 animate-fade-in" style={{ animationDelay: "0.3s" }} />

          <p
            className="max-w-2xl text-base md:text-xl font-sans font-light leading-relaxed text-muted-foreground animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Luxury product branding and showroom positioning for owners who intend
            to be remembered.
          </p>

          <Link
            to="/contact"
            className="btn-gold mt-10 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            Request a Consultation
          </Link>
        </div>

        <span className="absolute bottom-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
          Scroll
        </span>
      </section>

      {/* Statement */}
      <section className="border-t border-separator bg-surface">
        <div className="container-wide py-20 md:py-28">
          <p className="max-w-4xl font-display text-2xl md:text-4xl lg:text-5xl font-light leading-snug tracking-wide">
            A signet is proof of authorship. We build brands that leave one —
            <span className="text-gradient-gold"> precise, deliberate, and impossible to counterfeit.</span>
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t border-separator">
        <div className="container-wide py-20 md:py-28">
          <p className="text-label mb-12">Capabilities</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            {capabilities.map((item) => (
              <div key={item.number} className="border-t border-gold-line pt-6">
                <span className="font-display text-sm tracking-[0.3em] text-gradient-gold">
                  {item.number}
                </span>
                <h2 className="mt-4 font-display text-2xl md:text-3xl font-light uppercase tracking-[0.12em]">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm md:text-base font-sans font-light leading-relaxed text-muted-foreground">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Headshot feature band */}
      <section className="border-t border-separator bg-surface">
        <div className="container-wide py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Portraits */}
            <div className="flex flex-col items-center gap-8">
              <div className="relative bg-surface-raised border border-gold-line w-full max-w-md" style={{ aspectRatio: "3 / 4" }}>
                <div className="absolute inset-3 border border-gold-line/60 z-10 pointer-events-none" />
                <img
                  src={headshotAsset.url}
                  alt="Primary headshot"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative w-44 sm:w-60 shadow-elegant bg-surface-raised border border-gold-line" style={{ aspectRatio: "1 / 1" }}>
                <div className="absolute inset-3 border border-gold-line/60 z-10 pointer-events-none" />
                <img
                  src={secondaryHeadshotAsset.url}
                  alt="Secondary headshot"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Copy */}
            <div>
              <p className="text-label">About</p>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-light uppercase tracking-[0.12em]">
                The Showroom
                <span className="block text-gradient-gold">Turnaround Specialist</span>
              </h2>
              <div className="rule-gold w-24 my-8" />
              <p className="text-base md:text-lg font-sans font-light leading-relaxed text-muted-foreground">
                With a degree in Business Administration from Washington & Jefferson College, and years of experience leading decorative product operations at Erb Company and Buffalo Plumbing Showroom, I built my career at the intersection of luxury product merchandising, localized marketing, and consultative sales strategy. My leadership in the high-end kitchen and bath sector provided firsthand insight into how product placement, spatial aesthetics, and showroom sales methodologies directly impact buyer trust and bottom-line revenue.
              </p>
              <p className="mt-4 text-base md:text-lg font-sans font-light leading-relaxed text-muted-foreground">
                At Signet Strategy, I plan to guide clients through the Authentic Experience Diagnostic (AED) - a framework designed to evaluate and align physical showroom layouts, visual touchpoints, and sales execution with a company&rsquo;s core brand promise. Combining practical floor plan optimization, modern digital workflows, and proven retail sales principles, I help trade showrooms and B2B businesses optimize display environments, improve closing ratios, and drive higher margins from their showrooms.
              </p>
              <p className="mt-4 text-base md:text-lg font-sans font-light leading-relaxed text-muted-foreground">
                Based in Western New York, I consult with businesses looking to modernize their customer experience from first impression to final sale.
              </p>
              <Link to="/about" className="btn-gold-ghost mt-10">
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-separator">
        <div className="container-wide py-20 md:py-28 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-light uppercase tracking-[0.15em]">
            Begin the conversation
          </h2>
          <div className="rule-gold w-32 mx-auto my-8" />
          <p className="mx-auto max-w-xl text-muted-foreground font-light">
            Engagements are limited and taken privately. Share the product, the
            room, and the ambition.
          </p>
          <Link to="/contact" className="btn-gold mt-10">
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;