import { Link } from "wouter";

const testimonials = [
  {
    quote: "Loresa walked me through everything. Filed same week, EIN in hand before my bank appointment.",
    name: "Marcus T.",
    location: "Kansas City MO",
    service: "LLC Formation Client",
  },
  {
    quote: "I had no idea where to start. Anna collected all my info and Loresa had my documents ready in two days.",
    name: "Priya S.",
    location: "Scottsdale AZ",
    service: "Startup Package Client",
  },
  {
    quote: "Professional, fast, and they actually explained what everything meant. No legal jargon.",
    name: "Deon W.",
    location: "Atlanta GA",
    service: "Corporation Filing Client",
  },
];

export function Footer() {
  return (
    <>
      {/* Testimonial strip — above footer */}
      <section className="bg-muted/50 border-t border-border py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">Client Stories</p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl shadow-md p-7 flex flex-col border-l-[3px]"
                style={{ borderLeftColor: "#C9A84C" }}
              >
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-bold text-sm" style={{ color: "#1a2f4e" }}>{t.name}, {t.location}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <div>
              <h3 className="font-serif font-bold text-2xl mb-1 text-white">Gantt Key Formation Group</h3>
              <p className="text-sm text-primary-foreground/70">Founder-Led Business Formation, Notary & Startup Support — Powered by Anna</p>
            </div>
            <p className="text-sm text-primary-foreground/80 mt-6 max-w-xs">
              Premium, trustworthy, and professional setup support for ambitious entrepreneurs.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white tracking-wider text-sm uppercase">Quick Links</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/about" className="hover:text-secondary transition-colors">About</Link></li>
              <li><Link href="/meet-the-founder" className="hover:text-secondary transition-colors">Meet Loresa Gantt</Link></li>
              <li><Link href="/meet-anna" className="hover:text-secondary transition-colors">Meet Anna AI</Link></li>
              <li><Link href="/pricing" className="hover:text-secondary transition-colors">Pricing & Packages</Link></li>
              <li><Link href="/how-it-works" className="hover:text-secondary transition-colors">How It Works</Link></li>
              <li><Link href="/faq" className="hover:text-secondary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white tracking-wider text-sm uppercase">Top Services</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/services/llc-formation" className="hover:text-secondary transition-colors">LLC Formation</Link></li>
              <li><Link href="/services/notary" className="hover:text-secondary transition-colors">Notary Services</Link></li>
              <li><Link href="/services/registered-agent" className="hover:text-secondary transition-colors">Registered Agent</Link></li>
              <li><Link href="/services/startup-consultation" className="hover:text-secondary transition-colors">Startup Consultation</Link></li>
              <li><Link href="/services/anna-ai-intake" className="hover:text-secondary transition-colors">AI Intake Setup</Link></li>
              <li><Link href="/services" className="text-secondary hover:text-white transition-colors">View All Services &rarr;</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white tracking-wider text-sm uppercase">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>Info@ganttkarr.com</li>
              <li className="pt-4"><Link href="/consultation" className="text-secondary font-medium hover:text-white transition-colors">Book a Consultation</Link></li>
              <li><Link href="/become-a-partner" className="hover:text-secondary transition-colors">Partner With Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="text-xs text-primary-foreground/60 mb-6 leading-relaxed max-w-4xl space-y-1.5">
            <p><strong className="text-primary-foreground/80">Disclaimer:</strong> I am not an attorney licensed to practice law in this state. I am not allowed to draft legal records or give advice on legal matters.</p>
            <p>Gantt Key Formation Group is not a law firm and does not provide legal advice, legal representation, tax advice, accounting advice, or financial advice. Information provided is for general informational and administrative purposes only.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs text-primary-foreground/50">
            <p>&copy; {new Date().getFullYear()} Gantt Key Formation Group. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/messaging-terms" className="hover:text-white transition-colors">Messaging Terms</Link>
              <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
              <Link href="/service-agreement" className="hover:text-white transition-colors">Service Agreement</Link>
              <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
