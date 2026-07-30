import { Link } from "react-router-dom";
import logo from "@/assets/signet-logo.png.asset.json";

interface FooterProps {
  variant?: "default" | "echelon";
}

export function Footer({ variant = "default" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-separator mt-auto bg-surface">
      <div className="container-wide py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div>
            <img src={logo.url} alt="Signet Strategy" className="h-20 w-auto" />
            <p className="mt-5 max-w-xs text-sm font-light text-muted-foreground">
              Luxury product branding and showroom positioning.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-label">Navigate</p>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="text-foreground/85 hover:text-gold-light transition-colors">Home</Link>
              <Link to="/portfolio" className="text-foreground/85 hover:text-gold-light transition-colors">Portfolio</Link>
              <Link to="/about" className="text-foreground/85 hover:text-gold-light transition-colors">About Me</Link>
              <Link to="/contact" className="text-foreground/85 hover:text-gold-light transition-colors">Contact Us</Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-label">Enquiries</p>
            <div className="text-sm space-y-2">
              <a
                href="mailto:hello@signetstrategy.com"
                className="block text-foreground/85 hover:text-gold-light transition-colors"
              >
                hello@signetstrategy.com
              </a>
              <p className="text-muted-foreground">By appointment only</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-separator">
        <div className="container-wide py-6 flex flex-col sm:flex-row justify-between gap-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <p>&copy; {currentYear} Signet Strategy</p>
          <p>{variant === "echelon" ? "Private Consulting" : "All Rights Reserved"}</p>
        </div>
      </div>
    </footer>
  );
}