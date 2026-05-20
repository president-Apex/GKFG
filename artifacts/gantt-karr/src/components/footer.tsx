import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <div>
              <h3 className="font-serif font-bold text-2xl mb-1 text-white">G&K Formation Group</h3>
              <p className="text-sm text-primary-foreground/70">Family-Led Business Formation, Notary & Startup Support — Powered by Anna</p>
            </div>
            <p className="text-sm text-primary-foreground/80 mt-6 max-w-xs">
              Premium, trustworthy, and professional setup support for ambitious entrepreneurs.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white tracking-wider text-sm uppercase">Quick Links</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/meet-the-founder" className="hover:text-secondary transition-colors">Meet Loresa Gantt</Link></li>
              <li><Link href="/meet-kaileyanne" className="hover:text-secondary transition-colors">Meet Kaileyanne Karr</Link></li>
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
              <li>1-800-GANTT-KARR</li>
              <li className="pt-4"><Link href="/consultation" className="text-secondary font-medium hover:text-white transition-colors">Book a Consultation</Link></li>
              <li><Link href="/become-a-partner" className="hover:text-secondary transition-colors">Partner With Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="text-xs text-primary-foreground/60 mb-6 leading-relaxed max-w-4xl">
            <strong>Important Compliance Disclaimer:</strong> Gantt & Karr Formation Group is not a law firm, accounting firm, tax advisory firm, or financial advisory firm. We do not provide legal, tax, accounting, or financial advice. We provide business formation assistance, notary support, startup guidance, document coordination, and business setup support. Clients should consult a licensed attorney, CPA, tax professional, or financial advisor for advice specific to their situation.
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs text-primary-foreground/50">
            <p>&copy; {new Date().getFullYear()} Gantt & Karr Formation Group. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/messaging-terms" className="hover:text-white transition-colors">Messaging Terms</Link>
              <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
