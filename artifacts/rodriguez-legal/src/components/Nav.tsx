import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Scale, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/attorneys", label: "For Attorneys" },
  { href: "/notary-services", label: "Notary Services" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-[#004182] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group" data-testid="link-logo">
            <div className="bg-[#0E584D] p-1.5 rounded-md">
              <Scale className="w-5 h-5 text-[#F7F5F3]" />
            </div>
            <div>
              <div className="text-white font-bold text-sm md:text-base leading-tight font-[Montserrat]">
                Rodriguez Legal
              </div>
              <div className="text-blue-200 text-[10px] md:text-xs leading-tight tracking-wide">
                Support Services
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-white bg-[#0E584D]/40"
                    : "text-blue-100 hover:text-white hover:bg-white/10"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+13145551234"
              className="flex items-center gap-1.5 text-blue-100 hover:text-white text-sm transition-colors"
              data-testid="link-phone"
            >
              <Phone className="w-3.5 h-3.5" />
              (314) 555-1234
            </a>
            <Button
              asChild
              className="bg-[#0E584D] hover:bg-[#0E584D]/90 text-white border border-[#08352E] rounded-xl text-sm font-semibold px-4 py-2"
            >
              <Link href="/contact" data-testid="button-get-quote">
                Get a Quote
              </Link>
            </Button>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            data-testid="button-menu-toggle"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#003370] border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                location === link.href
                  ? "text-white bg-[#0E584D]/40"
                  : "text-blue-100 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => setOpen(false)}
              data-testid={`link-mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href="tel:+13145551234"
              className="flex items-center gap-2 text-blue-100 text-sm px-3 py-2"
              data-testid="link-mobile-phone"
            >
              <Phone className="w-4 h-4" />
              (314) 555-1234
            </a>
            <Button
              asChild
              className="bg-[#0E584D] text-white border border-[#08352E] rounded-xl w-full"
            >
              <Link href="/contact" onClick={() => setOpen(false)} data-testid="button-mobile-get-quote">
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
