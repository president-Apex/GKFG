import { Link } from "wouter";
import { Scale, Phone, Mail, MapPin } from "lucide-react";

const missouriCities = [
  { name: "St. Louis", slug: "st-louis" },
  { name: "Kansas City", slug: "kansas-city" },
  { name: "Springfield", slug: "springfield" },
  { name: "Columbia", slug: "columbia" },
  { name: "Jefferson City", slug: "jefferson-city" },
  { name: "Cape Girardeau", slug: "cape-girardeau" },
  { name: "Joplin", slug: "joplin" },
  { name: "Independence", slug: "independence" },
];

export default function Footer() {
  return (
    <footer className="bg-[#004182] text-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#0E584D] p-1.5 rounded-md">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm font-[Montserrat]">Rodriguez Legal</div>
                <div className="text-blue-300 text-xs">Support Services</div>
              </div>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed">
              Missouri's trusted process serving and notary service, serving law firms and individuals across the state.
            </p>
            <div className="mt-6 space-y-2">
              <a
                href="tel:+13145551234"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                data-testid="link-footer-phone"
              >
                <Phone className="w-4 h-4 text-[#0E584D]" />
                (314) 555-1234
              </a>
              <a
                href="mailto:info@rodriguezlegal.com"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                data-testid="link-footer-email"
              >
                <Mail className="w-4 h-4 text-[#0E584D]" />
                info@rodriguezlegal.com
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-[#0E584D] mt-0.5 flex-shrink-0" />
                <span>Serving all of Missouri</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold font-[Montserrat] mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/attorneys" className="hover:text-white transition-colors" data-testid="link-footer-attorneys">Process Serving</Link></li>
              <li><Link href="/attorneys" className="hover:text-white transition-colors" data-testid="link-footer-skip-tracing">Skip Tracing</Link></li>
              <li><Link href="/notary-services" className="hover:text-white transition-colors" data-testid="link-footer-notary">Notary Services</Link></li>
              <li><Link href="/attorneys" className="hover:text-white transition-colors" data-testid="link-footer-rush">Rush / Same-Day Service</Link></li>
              <li><Link href="/attorneys" className="hover:text-white transition-colors" data-testid="link-footer-affidavit">Affidavit of Service</Link></li>
            </ul>

            <h3 className="text-white font-semibold font-[Montserrat] mb-4 text-sm uppercase tracking-wider mt-8">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors" data-testid="link-footer-home">Home</Link></li>
              <li><Link href="/attorneys" className="hover:text-white transition-colors" data-testid="link-footer-for-attorneys">For Attorneys</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors" data-testid="link-footer-resources">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors" data-testid="link-footer-contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold font-[Montserrat] mb-4 text-sm uppercase tracking-wider">
              Missouri Service Areas
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {missouriCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/process-server-${city.slug}-mo`}
                  className="text-sm hover:text-white transition-colors"
                  data-testid={`link-footer-city-${city.slug}`}
                >
                  {city.name}, MO
                </Link>
              ))}
            </div>
            <div className="mt-6 p-4 bg-[#003370] rounded-lg border border-white/10">
              <p className="text-sm text-blue-200 leading-relaxed">
                <span className="text-white font-semibold">Statewide Coverage.</span> We serve all Missouri counties including St. Louis, Jackson, Greene, Boone, Cole, Jackson, and surrounding areas.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-blue-300">
          <p>&copy; {new Date().getFullYear()} Rodriguez Legal Support Services. All rights reserved.</p>
          <p>Licensed &amp; Insured Process Server — State of Missouri</p>
        </div>
      </div>
    </footer>
  );
}
