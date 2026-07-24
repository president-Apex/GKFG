import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamPhoto from "@/assets/loresa-gantt.png";

const services = [
  { label: "Business Formation", soon: false },
  { label: "Online Notary (RON)", soon: true },
  { label: "Mobile Notary", soon: true },
  { label: "Loan Signing", soon: true },
  { label: "Startup Support", soon: false },
  { label: "Resource Network", soon: false },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary/4 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="inline-flex items-center rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
                Serving All 50 States + DC · Based in Liberty, MO
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-4"
            >
              Gantts Key<br />
              <span className="text-primary">Formation Group</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg sm:text-xl text-primary font-heading font-semibold italic mb-5"
            >
              Building Strong Businesses From Day One.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base text-muted-foreground leading-relaxed mb-7 max-w-lg"
            >
              Serving entrepreneurs and businesses nationwide — all 50 states + DC — with business formation, compliance, and federal services. From LLC setup and EIN assistance to startup support. Remote Online Notary coming soon.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-x-5 gap-y-2 mb-8"
            >
              {services.map((s, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  {s.label}
                  {s.soon && (
                    <span className="text-[10px] font-semibold text-primary bg-primary/8 border border-primary/20 rounded-full px-2 py-0.5 whitespace-nowrap">
                      Coming Soon
                    </span>
                  )}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base h-14 px-8 font-semibold rounded-xl shadow-lg shadow-primary/20"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Start Your Business
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/8 text-base h-14 px-8 rounded-xl"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-primary/8 rounded-3xl -z-10" />
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-border rounded-2xl -z-10" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/15">
                <img
                  src={teamPhoto}
                  alt="Loresa Gantt — Gantts Key Formation Group leadership"
                  className="w-full object-cover object-top"
                  style={{ maxHeight: "580px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <div className="bg-white/92 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
                    <p className="font-heading font-bold text-[#2A2A2A] text-sm">Gantts Key Formation Group</p>
                    <div className="mt-2 space-y-1">
                      <p className="text-primary text-xs font-semibold">Loresa Gantt · Founder &amp; CEO</p>
                    </div>
                    <p className="text-[#2A2A2A]/50 text-[11px] mt-2 italic">Family-led · Powered by Paige · Liberty, MO · Kansas City Metro</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
