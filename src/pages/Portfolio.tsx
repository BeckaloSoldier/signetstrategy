import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

import originalShowroom from "@/assets/portfolio/01-original.jpg.asset.json";
import designOne from "@/assets/portfolio/02-design.jpg.asset.json";
import designTwo from "@/assets/portfolio/03-design.jpg.asset.json";
import designThree from "@/assets/portfolio/04-design.jpg.asset.json";
import designFour from "@/assets/portfolio/05-design.jpg.asset.json";
import movingThree from "@/assets/portfolio/06-move.jpg.asset.json";
import movingOne from "@/assets/portfolio/07-move.jpg.asset.json";
import movingTwo from "@/assets/portfolio/08-move.jpg.asset.json";
import productResearch from "@/assets/portfolio/09-image.jpg.asset.json";
import showroomMoment from "@/assets/portfolio/10-image.jpg.asset.json";
import earlyExterior from "@/assets/portfolio/11-2017.jpg.asset.json";
import showroomExterior from "@/assets/portfolio/12-2022.jpg.asset.json";
import showroomProgressOne from "@/assets/portfolio/13-2023.jpg.asset.json";
import showroomProgressTwo from "@/assets/portfolio/14-2023.jpg.asset.json";
import showroomProgressThree from "@/assets/portfolio/15-2023.jpg.asset.json";
import finishedOne from "@/assets/portfolio/16-final.jpg.asset.json";
import finishedTwo from "@/assets/portfolio/17-final.jpg.asset.json";
import finishedThree from "@/assets/portfolio/18-final.jpg.asset.json";
import finishedFour from "@/assets/portfolio/19-final.jpg.asset.json";
import finishedFive from "@/assets/portfolio/20-final.jpg.asset.json";
import finishedSix from "@/assets/portfolio/21-final.jpg.asset.json";
import finishedSeven from "@/assets/portfolio/22-final.jpg.asset.json";
import finishedEight from "@/assets/portfolio/23-final.jpg.asset.json";
import finishedNine from "@/assets/portfolio/24-final.jpg.asset.json";

interface PortfolioImage {
  src: string;
  alt: string;
  year: string;
  phase: string;
  aspect: "landscape" | "portrait";
}

const images: PortfolioImage[] = [
  { src: earlyExterior.url, alt: "Original Buffalo Plumbing Showroom exterior", year: "2017", phase: "Before", aspect: "landscape" },
  { src: originalShowroom.url, alt: "Original Buffalo Plumbing Showroom interior", year: "2022", phase: "Before", aspect: "landscape" },
  { src: showroomExterior.url, alt: "Buffalo Plumbing Showroom entrance before renovation", year: "2022", phase: "Before", aspect: "portrait" },
  { src: movingOne.url, alt: "Showroom floor during the desk move", year: "2022", phase: "Transition", aspect: "landscape" },
  { src: movingTwo.url, alt: "Showroom displays during the transition", year: "2022", phase: "Transition", aspect: "landscape" },
  { src: movingThree.url, alt: "Team workspace during the showroom transition", year: "2022", phase: "Transition", aspect: "landscape" },
  { src: showroomProgressOne.url, alt: "Showroom floor prepared for a new display", year: "2023", phase: "Buildout", aspect: "portrait" },
  { src: showroomProgressTwo.url, alt: "Freestanding tubs on the showroom floor", year: "2023", phase: "Buildout", aspect: "portrait" },
  { src: showroomProgressThree.url, alt: "Storefront area during showroom construction", year: "2023", phase: "Buildout", aspect: "portrait" },
  { src: productResearch.url, alt: "Product research for luxury bath fixtures", year: "2023", phase: "Product Selection", aspect: "portrait" },
  { src: showroomMoment.url, alt: "A candid showroom product demonstration", year: "2023", phase: "Showroom Life", aspect: "portrait" },
  { src: designThree.url, alt: "Bathroom layout measurements", year: "2024", phase: "Design", aspect: "portrait" },
  { src: designTwo.url, alt: "Bathroom planning and fixture measurements", year: "2024", phase: "Design", aspect: "landscape" },
  { src: designFour.url, alt: "Vanity wall measurements during design development", year: "2024", phase: "Design", aspect: "landscape" },
  { src: designOne.url, alt: "Vanity and mirror measurements during design development", year: "2024", phase: "Design", aspect: "portrait" },
  { src: finishedTwo.url, alt: "Completed Buffalo Plumbing Showroom storefront", year: "Completed", phase: "Transformation", aspect: "landscape" },
  { src: finishedOne.url, alt: "Completed illuminated fixture wall", year: "Completed", phase: "Transformation", aspect: "landscape" },
  { src: finishedThree.url, alt: "Completed luxury vanity display", year: "Completed", phase: "Transformation", aspect: "landscape" },
  { src: finishedFour.url, alt: "Completed kitchen fixture presentation", year: "Completed", phase: "Transformation", aspect: "portrait" },
  { src: finishedFive.url, alt: "Completed bath fixture vignette", year: "Completed", phase: "Transformation", aspect: "portrait" },
  { src: finishedSix.url, alt: "Completed sink display with seasonal detail", year: "Completed", phase: "Transformation", aspect: "landscape" },
  { src: finishedSeven.url, alt: "Completed Bocchi product display", year: "Completed", phase: "Transformation", aspect: "portrait" },
  { src: finishedEight.url, alt: "Completed coordinated kitchen display", year: "Completed", phase: "Transformation", aspect: "landscape" },
  { src: finishedNine.url, alt: "View from the completed showroom", year: "Completed", phase: "Transformation", aspect: "landscape" },
];

const Portfolio = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage = selectedIndex === null ? null : images[selectedIndex];

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
          <h1 className="max-w-5xl font-display text-5xl font-light uppercase leading-[0.96] tracking-[0.08em] md:text-7xl lg:text-8xl">
            The Transformation of <span className="text-gradient-gold">Buffalo Plumbing Showroom</span>
          </h1>
          <p className="max-w-sm border-l border-gold-line/60 pl-5 text-sm font-light leading-7 text-muted-foreground">
            A chronological visual record of the showroom’s evolution—from its original footprint through planning, transition, and final presentation.
          </p>
        </div>
        <div className="rule-gold mt-10 w-full" />
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-label">
          <span>Buffalo, New York</span>
          <span>{images.length} photographs · 2017—completed</span>
        </div>
      </section>

      <section className="container-wide pb-28" aria-label="Buffalo Plumbing Showroom transformation gallery">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
          {images.map((image, index) => (
            <button
              key={`${image.alt}-${index}`}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="group relative mb-5 block w-full break-inside-avoid overflow-hidden border border-gold-line/30 bg-surface-raised text-left shadow-elegant focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              aria-label={`Open image ${index + 1}: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index < 4 ? "eager" : "lazy"}
                className={`w-full object-cover transition duration-700 group-hover:scale-[1.025] group-hover:brightness-75 ${image.aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"}`}
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
              <span className="text-xs font-light text-muted-foreground">{selectedImage.alt}</span>
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