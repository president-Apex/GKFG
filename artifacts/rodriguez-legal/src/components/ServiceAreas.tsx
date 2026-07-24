import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const futureStates = [
  "Arizona", "California*", "Colorado", "Florida", "Georgia",
  "Illinois", "Massachusetts", "Michigan", "Minnesota", "Missouri",
  "Nevada", "New Jersey", "New York", "North Carolina", "Ohio",
  "Pennsylvania", "Texas", "Utah", "Virginia", "Washington",
];

const keywords = [
  "LLC Formation in Liberty, MO",
  "Kansas City Business Filing Services",
  "Missouri EIN Registration",
  "Registered Agent Services Missouri",
  "Business Formation Kansas City Metro",
];

export function ServiceAreas() {
  return (
    <section id="areas" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Serving Liberty, Missouri & Kansas City Metro"
          subtitle="Gantts Key Formation Group is based in Liberty, Missouri and serves clients nationwide — all 50 states and DC — for business formation, compliance, and federal services, with Remote Online Notary coming soon."
          centered
        />

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm"
          >
            <h3 className="text-xl font-heading font-bold text-primary flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-accent" />
              Primary Service Area
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Liberty", "Kansas City", "Independence", "Gladstone", "North Kansas City", "Surrounding Communities"].map((city) => (
                <span key={city} className="bg-primary/5 text-primary px-3 py-1 rounded text-sm font-medium border border-primary/10">
                  {city}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm"
          >
            <h3 className="text-xl font-heading font-bold text-primary flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-accent" />
              Service Keywords
            </h3>
            <ul className="space-y-2">
              {keywords.map((kw) => (
                <li key={kw} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-accent mt-0.5">·</span>
                  {kw}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 bg-white rounded-2xl p-8 border border-border/50 shadow-sm max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-between flex-wrap gap-3 mb-2">
            <h3 className="text-xl font-heading font-bold text-primary flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent" />
              Nationwide Reach — All 50 States + DC
            </h3>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white bg-primary rounded-full px-3 py-1">
              Serving All 50 States
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-5">
            Gantts Key Formation Group provides business formation, compliance, and federal services nationwide — all 50 states and DC. Remote Online Notary expansion is planned for these 20 priority states:
          </p>
          <div className="flex flex-wrap gap-2">
            {futureStates.map((state) => (
              <span key={state} className="bg-primary/5 text-primary px-3 py-1 rounded text-sm font-medium border border-primary/10">
                {state}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-muted-foreground mt-4 italic">
            *Service availability is subject to current state laws and regulations. Remote Online Notarization is performed under our Missouri commission. Registered agent services are offered in Missouri, expanding to additional states.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
