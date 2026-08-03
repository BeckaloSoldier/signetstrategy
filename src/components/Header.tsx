import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/signet-logo.png.asset.json";

const navItems = [
  { label: "Portfolio", path: "/portfolio" },
  { label: "About Me", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

interface HeaderProps {
  revealMode?: boolean;
}

export function Header({ revealMode = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [brandScale, setBrandScale] = useState(1);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-separator">
      <div className="container-wide">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className="flex items-center gap-3 transition-transform duration-200"
              style={{ transform: `scale(${brandScale})`, transformOrigin: "left center" }}
            >
              <img
                src={logo.url}
                alt="Signet Strategy"
                className="h-12 md:h-14 w-auto transition-opacity duration-300 group-hover:opacity-80"
              />
              <span className="hidden sm:block font-display text-base md:text-lg uppercase tracking-[0.32em] text-gradient-gold">
                Signet Strategy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-[11px] font-sans uppercase tracking-[0.28em] transition-colors duration-300 ${
                    active ? "text-gold-light" : "text-foreground/75 hover:text-gold-light"
                  }`}
                >
                  {item.label}
                  <span
                    className={`rule-gold absolute -bottom-2 left-0 w-full origin-left transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Scale Slider */}
          <div className="flex items-center gap-2 md:gap-3">
            <label
              htmlFor="brand-scale"
              className="sr-only md:not-sr-only text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
            >
              Scale
            </label>
            <input
              id="brand-scale"
              type="range"
              min="0.5"
              max="1.5"
              step="0.05"
              value={brandScale}
              onChange={(e) => setBrandScale(parseFloat(e.target.value))}
              className="w-20 md:w-28 accent-gold"
              aria-label="Adjust logo and brand scale"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2 text-gold-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-background z-40 animate-fade-in">
          <nav className="container-wide py-14 flex flex-col gap-10">
            {[{ label: "Home", path: "/" }, ...navItems].map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="font-display text-4xl font-light uppercase tracking-[0.15em] text-gradient-gold animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}