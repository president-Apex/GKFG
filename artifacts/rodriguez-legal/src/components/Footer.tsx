import { Link } from "wouter";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2A2A2A] pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-1">
            <a href={`${BASE}/`} className="flex flex-col mb-6">
              <span className="font-heading font-bold text-2xl tracking-tight text-white">GANTTS KEY</span>
              <span className="text-xs tracking-widest uppercase font-medium text-[#C4C9CE]">Formation Group</span>
            </a>
            <p className="text-white/85 text-sm font-heading font-medium italic mb-3">
              Building Strong Businesses From Day One.
            </p>
            <p className="text-white/70 text-xs leading-relaxed">
              Gantts Key Formation Group is not a law firm and does not provide legal, tax, or financial advice. Information provided is educational and administrative in nature.
            </p>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "", internal: false },
                { label: "Services", href: "#services", internal: false },
                { label: "Notary Services", href: "/notary-services", internal: true },
                { label: "About", href: "#about", internal: false },
                { label: "Pricing", href: "#pricing", internal: false },
                { label: "Contact", href: "#contact", internal: false },
                { label: "Terms of Service", href: "/terms", internal: true },
                { label: "Privacy Policy", href: "/privacy", internal: true },
              ].map((item) => (
                <li key={item.label}>
                  {item.internal ? (
                    <Link href={`${BASE}${item.href}`} className="text-white/80 hover:text-[#C4C9CE] transition-colors text-sm">
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={`${BASE}/${item.href}`}
                      onClick={(e) => {
                        if (!item.href) return;
                        const el = document.querySelector(item.href);
                        if (el) {
                          e.preventDefault();
                          el.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-white/80 hover:text-[#C4C9CE] transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Liberty, Missouri</li>
              <li>Serving All 50 States + DC</li>
              <li className="pt-2">
                <a href="tel:8165530595" className="text-white hover:text-[#C4C9CE] transition-colors font-medium">
                  (816) 553-0595
                </a>
              </li>
              <li>
                <a href="mailto:info@ganttformation.com" className="text-white hover:text-[#C4C9CE] transition-colors break-all">
                  info@ganttformation.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-white/60 text-xs text-center leading-relaxed mb-4">
            Gantts Key Formation Group is not a law firm and does not provide legal, tax, or financial advice. Information provided is educational and administrative in nature. Please consult licensed professionals for legal or tax advice.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/65 text-xs">
              &copy; {currentYear} Gantts Key Formation Group. All rights reserved. Powered by Apex Key Group Holdings Inc.
            </p>
            <div className="flex space-x-6 text-xs text-white/65">
              <Link href={`${BASE}/privacy`} className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href={`${BASE}/terms`} className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
