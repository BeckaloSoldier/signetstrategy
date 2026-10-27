import { useEffect, useMemo, useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

// Auto-loads every photo directly in src/assets/*.jpg — add or remove files
// from that folder and this page updates itself, no manual list to maintain.
const modules = import.meta.glob("/src/assets/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

interface PortfolioImage {
  src: string;
  alt: string;
  date: string;
  year: string;
  phase: string;
}

const PHASE_LABELS: Record<string, string> = {
  "original-footprint": "Original Footprint",
  planning: "Planning",
  transition: "Transition",
  "buildout-early": "Early Buildout",
  buildout: "Buildout",
  "design-refinement": "Design Refinement",
  "completed-showroom": "Completed Showroom",
};

function parseFilename(path: string): Omit<PortfolioImage, "src"> | null {
  const name = path.split("/").pop() ?? "";
  const match = name.match(/^\d{3}_(\d{4}-\d{2}-\d{2})_([a-z-]+)\.jpg$/);
  if (!match) return null;
  const [, date, phaseSlug] = match;
  const year = date.slice(0, 4);
  const phase = PHASE_LABELS[phaseSlug] ?? phaseSlug;
  return {
    alt: `Buffalo Plumbing Showroom — ${phase}, ${date}`,
    date,
    year,
    phase,
  };
}

const images: PortfolioImage[] = Object.entries(modules)
  .map(([path, src]) => {
    const parsed = parseFilename(path);
    if (!parsed) return null;
    return { src, ...parsed };
  })
  .filter((img): img is PortfolioImage => img !== null)
  .sort((a, b) => a.date.localeCompare(b.date));

const Portfolio = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage = selectedIndex === null ? null : images[selectedIndex];

  const dateRangeLabel = useMemo(() => {
    if (images.length === 0) return "";
    const first = images[0].year;
    const last = images[images.length - 1].year;
    return first === last ? first : `${first}—${last}`;
  }, []);

  const moveSelection = (direction: number) => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return (current + direction + images.length) % images.length;
    });
  };

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") moveSelection(-1);
      if (event.key === "ArrowRight") moveSelection(1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex]);

  return (
    <Layout>
      <section className="container-wide pb-14 pt-12 md:pb-20 md:pt-20">
        <p className="text-label">Visual Portfolio</p>
        <div className="mt-5 grid gap-8 md:grid-cols-[minmax(0,1fr)_20rem] md:items-end">
          <h1 className="max-w-5xl font-display text-4xl font-light uppercase leading-[0.96] tracking-[0.08em] md:text-[3.375rem] lg:text-7xl">
            The Transformation of <span className="text-gradient-gold">Buffalo Plumbing Showroom</span>
          </h1>
          <p className="max-w-sm border-l border-gold-line/60 pl-5 text-[0.65625rem] font-light leading-[1.3125rem] text-muted-foreground">
            A chronological visual record of the showroom's evolution—from its original footprint through planning, transition, and final presentation.
          </p>
        </div>
        <div className="rule-gold mt-10 w-full" />
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-label">
          <span>Buffalo, New York</span>
          <span>{images.length} photographs · {dateRangeLabel}</span>
        </div>
      </section>

      <section className="container-wide pb-28" aria-label="Buffalo Plumbing Showroom transformation gallery">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="group relative mb-5 block w-full break-inside-avoid overflow-hidden border border-gold-line/30 bg-surface-raised text-left shadow-elegant focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              aria-label={`Open image ${index + 1}: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index < 4 ? "eager" : "lazy"}
                className="w-full object-cover transition duration-700 group-hover:scale-[1.025] group-hover:brightness-75"
              />
              <span className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between bg-gradient-to-t from-background via-background/70 to-transparent px-4 pb-4 pt-16 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                <span>
                  <span className="block text-[9px] uppercase tracking-[0.28em] text-gold-light">{image.phase}</span>
                  <span className="mt-1 block text-xs font-light text-foreground">{image.year}</span>
                </span>
                <Expand className="h-4 w-4 text-gold-light" aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
      </section>

      {selectedImage && selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md md:p-10" role="dialog" aria-modal="true" aria-label={selectedImage.alt}>
          <Button variant="ghost" size="icon" onClick={() => setSelectedIndex(null)} className="absolute right-4 top-4 z-20 text-foreground hover:bg-secondary md:right-8 md:top-8" aria-label="Close image">
            <X className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => moveSelection(-1)} className="absolute left-2 top-1/2 z-20 -translate-y-1/2 text-foreground hover:bg-secondary md:left-8" aria-label="Previous image">
            <ChevronLeft className="h-7 w-7" />
          </Button>
          <figure className="flex max-h-[90vh] w-full max-w-6xl flex-col items-center justify-center">
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-h-[78vh] max-w-full border border-gold-line/30 object-contain shadow-elegant" />
            <figcaption className="mt-4 flex w-full max-w-3xl items-center justify-between gap-5 border-t border-gold-line/30 pt-4">
              <span className="text-xs font-light text-muted-foreground">{selectedImage.phase} · {selectedImage.date}</span>
              <span className="shrink-0 text-[9px] uppercase tracking-[0.25em] text-gold-light">{selectedIndex + 1} / {images.length}</span>
            </figcaption>
          </figure>
          <Button variant="ghost" size="icon" onClick={() => moveSelection(1)} className="absolute right-2 top-1/2 z-20 -translate-y-1/2 text-foreground hover:bg-secondary md:right-8" aria-label="Next image">
            <ChevronRight className="h-7 w-7" />
          </Button>
        </div>
      )}
    </Layout>
  );
};

export default Portfolio;
