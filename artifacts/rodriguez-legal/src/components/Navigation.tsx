import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

function goToSection(hash: string) {
  const el = document.querySelector(hash);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = `${BASE}/${hash}`;
  }
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    goToSection(hash);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/97 backdrop-blur-md shadow-sm border-b border-border/50 py-3"
          : "bg-background/80 backdrop-blur-sm border-b border-border/30 py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href={`${BASE}/`} className="flex flex-col z-50 group">
            <span className="font-heading font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
              GANTTS KEY
            </span>
            <span className="text-[10px] tracking-widest uppercase font-medium text-primary/70">
              Formation Group
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`${BASE}/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4">
              <a
                href="tel:8165530595"
                className="flex items-center text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 text-primary" />
                (816) 553-0595
              </a>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"
                onClick={() => goToSection("#contact")}
              >
                Start Your Business
              </Button>
            </div>
          </nav>

          <button className="md:hidden z-50 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden flex flex-col pt-24 px-6 pb-8`}>
        <nav className="flex flex-col space-y-6 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`${BASE}/${link.href}`}
              className="text-2xl font-heading font-semibold text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavClick(e, link.href);
              }}
            >
              {link.name}
            </a>
          ))}
          <div className="mt-auto pt-8 border-t border-border">
            <a href="tel:8165530595" className="flex items-center text-lg font-semibold text-foreground mb-6">
              <Phone className="w-5 h-5 mr-3 text-primary" />
              (816) 553-0595
            </a>
            <Button
              className="w-full h-14 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"
              onClick={() => { setMobileMenuOpen(false); goToSection("#contact"); }}
            >
              Start Your Business Today
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
