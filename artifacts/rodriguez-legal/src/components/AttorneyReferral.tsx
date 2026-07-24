import { motion } from "framer-motion";
import { Scale, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export function AttorneyReferral() {
  const [, navigate] = useLocation();
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">
              Need Legal Advice?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              While we handle filings and formation, legal advice should come from a licensed attorney. We've curated a list of trusted Missouri attorneys to support you when you need it.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8 text-left">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Disclaimer:</strong> Gantts Key Formation Group is not a law firm and does not provide legal, tax, or financial advice. We provide business filing and administrative support services only. For legal advice, please consult a licensed attorney.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-base font-semibold"
              onClick={() => navigate(`${BASE}/attorneys`)}
            >
              View Recommended Local Attorneys
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
