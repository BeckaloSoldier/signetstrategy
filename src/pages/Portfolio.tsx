import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  result: string;
  ratio?: string;
}

interface Batch {
  title: string;
  year: string;
  items: PortfolioItem[];
}

const batches: Batch[] = [
  {
    title: "Collection I",
    year: "2024",
    items: [
      { id: "1", title: "Brand Positioning", category: "Luxury Retail", result: "Redefined market presence for a heritage jewelry maison.", ratio: "4 / 5" },
      { id: "2", title: "Product Storytelling", category: "Hospitality", result: "Immersive visual narrative for a boutique Alpine retreat.", ratio: "1 / 1" },
      { id: "3", title: "Strategic Advisory", category: "Private Equity", result: "Comprehensive brand due diligence for mid-market acquisition.", ratio: "4 / 5" },
    ],
  },
  {
    title: "Collection II",
    year: "2023",
    items: [
      { id: "4", title: "Digital Narrative", category: "Art & Culture", result: "Elevated digital experience for a contemporary art foundation.", ratio: "3 / 2" },
      { id: "5", title: "Market Entry", category: "Sustainable Goods", result: "Strategic launch plan for an artisanal textile brand.", ratio: "4 / 5" },
      { id: "6", title: "Creative Direction", category: "Fashion", result: "Seasonal campaign concept and execution for a minimalist label.", ratio: "1 / 1" },
    ],
  },
];

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <Layout>
      <section className="container-wide pt-12 md:pt-20 pb-12">
        <p className="text-label">Selected Works</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-light uppercase tracking-[0.14em]">
          Visual Portfolio
        </h1>
        <div className="rule-gold w-full mt-8" />
      </section>

      <section className="container-wide pb-24">
        {batches.map((batch, batchIndex) => (
          <div key={batch.title} className={batchIndex > 0 ? "mt-24" : ""}>
            <div className="flex items-baseline justify-between mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-light uppercase tracking-[0.1em]">
                {batch.title}
              </h2>
              <span className="text-label text-gold-light">{batch.year}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
              {batch.items.map((item, index) => (
                <article
                  key={item.id}
                  className="group animate-fade-in-up cursor-pointer"
                  style={{ animationDelay: `${(batchIndex * 3 + index) * 0.06}s` }}
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="relative overflow-hidden border border-gold-line/30 transition-all duration-500 group-hover:border-gold-line/60">
                    <PlaceholderImage 
                      label={item.title} 
                      ratio={item.ratio || "4 / 5"} 
                      className="w-full transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="mt-6 border-t border-gold-line/20 pt-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gradient-gold">
                      {item.category}
                    </span>
                    <h3 className="mt-2 font-display text-xl md:text-2xl font-light uppercase tracking-[0.1em] group-hover:text-gold-light transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-light text-muted-foreground line-clamp-2">
                      {item.result}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-4xl bg-background border-gold-line/40 p-0 overflow-hidden">
          {selectedItem && (
            <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
              <div className="w-full md:w-2/3 bg-surface-raised">
                <PlaceholderImage 
                  label={selectedItem.title} 
                  ratio={selectedItem.ratio || "4 / 5"} 
                  className="w-full h-full border-0" 
                />
              </div>
              <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-background border-l border-gold-line/20">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gradient-gold">
                  {selectedItem.category}
                </span>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-light uppercase tracking-[0.1em]">
                  {selectedItem.title}
                </h2>
                <div className="rule-gold w-12 my-6" />
                <p className="text-muted-foreground font-light leading-relaxed">
                  {selectedItem.result}
                </p>
                <div className="mt-10">
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="btn-gold-ghost text-[9px] py-3 px-6"
                  >
                    Close View
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Portfolio;
