import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import websiteBackground from "@/assets/website-background.png.asset.json";

interface LayoutProps {
  children: ReactNode;
  hideFooter?: boolean;
  noPadding?: boolean;
  showEchelonFooter?: boolean;
  headerRevealMode?: boolean;
}

export function Layout({ 
  children, 
  hideFooter = false, 
  noPadding = false,
  showEchelonFooter = false,
  headerRevealMode = false,
}: LayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Global semi-static background */}
      <img
        src={websiteBackground.url}
        alt=""
        aria-hidden="true"
        className="fixed inset-0 w-full h-full object-cover object-left-bottom -z-20"
        style={{ opacity: "var(--site-bg-opacity)" }}
      />
      <div className="fixed inset-0 bg-background/45 -z-10" aria-hidden="true" />

      <Header revealMode={headerRevealMode} />
      <main className={`flex-1 ${noPadding ? '' : 'pt-20 md:pt-24'}`}>
        {children}
      </main>
      {!hideFooter && (
        <Footer variant={showEchelonFooter ? "echelon" : "default"} />
      )}
    </div>
  );
}
