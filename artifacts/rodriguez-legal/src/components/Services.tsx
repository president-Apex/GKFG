import { motion } from "framer-motion";
import { Building2, CreditCard, Landmark, MonitorSmartphone, Car, Network, FileSignature } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useLocation } from "wouter";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const services = [
  {
    icon: <Building2 className="w-7 h-7 text-primary" />,
    title: "Business Formation",
    desc: "LLC, Corporation, PLLC, and nonprofit 501(c)(3) formation — plus DBA registration, foreign registration, dissolutions, and reinstatements. Starting at $249 + state fee.",
    badge: null,
  },
  {
    icon: <CreditCard className="w-7 h-7 text-primary" />,
    title: "Federal Services",
    desc: "EIN application ($75, free in packages), S-Corp elections (Form 2553), responsible party updates, and business structure consulting credited toward any package.",
    badge: null,
  },
  {
    icon: <FileSignature className="w-7 h-7 text-primary" />,
    title: "Compliance & Legal Documents",
    desc: "Operating agreements, corporate bylaws, annual reports, amendments, certificates of good standing, compliance calendars, and ongoing state compliance monitoring.",
    badge: null,
  },
  {
    icon: <Landmark className="w-7 h-7 text-primary" />,
    title: "Registered Agent (Missouri)",
    desc: "Registered agent service at $149/year — just $99 your first year when bundled with formation. Add a virtual mailbox for $15/month.",
    badge: null,
  },
  {
    icon: <MonitorSmartphone className="w-7 h-7 text-primary" />,
    title: "Remote Online Notary (RON)",
    desc: "Secure Remote Online Notarization from your phone, tablet, or computer — coming soon, with planned expansion to 20 priority states under our Missouri commission.",
    badge: "🚧 Coming Soon",
    href: "/notary-services",
    cta: "Join the waitlist →",
  },
  {
    icon: <Car className="w-7 h-7 text-primary" />,
    title: "Mobile Notary",
    desc: "Mobile notary and specialty notary services delivered to your location — launching soon. Join the waitlist to be notified.",
    badge: "🚧 Coming Soon",
    href: "/notary-services",
    cta: "Join the waitlist →",
  },
  {
    icon: <FileSignature className="w-7 h-7 text-primary" />,
    title: "Loan Signing Services",
    desc: "Loan signing and real estate loan closing services handled by a trained signing agent — launching soon. Join the waitlist to be notified.",
    badge: "🚧 Coming Soon",
    href: "/notary-services",
    cta: "Join the waitlist →",
  },
  {
    icon: <Landmark className="w-7 h-7 text-primary" />,
    title: "Startup Support",
    desc: "Help entrepreneurs understand their next steps, make confident decisions, and build operational momentum from launch day.",
    badge: null,
  },
  {
    icon: <Network className="w-7 h-7 text-primary" />,
    title: "Trademark & Specialty",
    desc: "Trademark & copyright USPTO filing assistance ($299), notary and business-owner training courses ($197), corporate record maintenance, and certified document retrieval.",
    badge: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Services() {
  const [, navigate] = useLocation();

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How We Help You Launch"
          subtitle="Every service is designed to help entrepreneurs build correctly from day one — with guidance, speed, and confidence."
          centered
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div
                className={`h-full bg-background border border-border rounded-2xl p-7 transition-all duration-300 group ${
                  service.href
                    ? "hover:shadow-lg hover:-translate-y-1 cursor-pointer hover:border-primary/30"
                    : "hover:shadow-md hover:-translate-y-0.5"
                }`}
                onClick={service.href ? () => navigate(`${BASE}${service.href}`) : undefined}
              >
                <div className="w-14 h-14 bg-primary/8 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary/12 transition-colors duration-300">
                  {service.icon}
                </div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-lg font-heading font-bold text-foreground">
                    {service.title}
                  </h3>
                  {service.badge && (
                    <span className="text-[10px] font-semibold text-primary bg-primary/8 border border-primary/20 rounded-full px-2.5 py-1 whitespace-nowrap shrink-0">
                      {service.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
                {service.href && (
                  <p className="text-xs text-primary font-semibold mt-4">
                    {(service as { cta?: string }).cta ?? "Learn more →"}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
