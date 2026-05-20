import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { CheckCircle, MapPin, Clock, Shield, ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const cityData: Record<string, { name: string; county: string; about: string; nearbyAreas: string[] }> = {
  "st-louis": {
    name: "St. Louis",
    county: "St. Louis City / St. Louis County",
    about: "St. Louis is Missouri's largest metro area and home to Missouri's most active federal and state courts. We serve documents throughout the City of St. Louis and all St. Louis County municipalities — from Clayton to Kirkwood to Florissant.",
    nearbyAreas: ["Clayton", "Kirkwood", "Webster Groves", "Ladue", "Creve Coeur", "Florissant", "St. Charles", "Chesterfield"],
  },
  "kansas-city": {
    name: "Kansas City",
    county: "Jackson County",
    about: "Kansas City straddles the Missouri-Kansas border, and our process servers are deeply familiar with Jackson County courts, procedures, and service requirements. We handle serves throughout the metro — from the Crossroads to Lee's Summit.",
    nearbyAreas: ["Lee's Summit", "Independence", "Blue Springs", "Overland Park (KS)", "Lenexa (KS)", "Raytown", "Grandview", "Liberty"],
  },
  "springfield": {
    name: "Springfield",
    county: "Greene County",
    about: "Springfield is the Queen City of the Ozarks and home to the 38th Judicial Circuit. Our process servers know Greene County's courts and neighborhoods thoroughly — ensuring fast, accurate service throughout the area.",
    nearbyAreas: ["Nixa", "Ozark", "Republic", "Battlefield", "Willard", "Strafford", "Joplin", "Branson"],
  },
  "columbia": {
    name: "Columbia",
    county: "Boone County",
    about: "Columbia is home to the University of Missouri and a growing legal market in Boone County. Whether you're a Columbia law firm or an individual needing documents served, we provide prompt service throughout the mid-Missouri area.",
    nearbyAreas: ["Jefferson City", "Moberly", "Fulton", "Boonville", "Mexico", "Centralia", "Ashland", "Hallsville"],
  },
  "jefferson-city": {
    name: "Jefferson City",
    county: "Cole County",
    about: "Missouri's state capital and home to the Supreme Court of Missouri, the Court of Appeals, and numerous state agencies. Our process servers are experienced in the unique requirements of state government service in Jefferson City.",
    nearbyAreas: ["Columbia", "Fulton", "Osage Beach", "Lake of the Ozarks", "Eldon", "Wardsville", "Russellville"],
  },
  "cape-girardeau": {
    name: "Cape Girardeau",
    county: "Cape Girardeau County",
    about: "Cape Girardeau is the hub of southeast Missouri, home to Southeast Missouri State University and a growing legal community. We provide process serving throughout Cape Girardeau County and surrounding southeast Missouri counties.",
    nearbyAreas: ["Jackson", "Sikeston", "Poplar Bluff", "Perryville", "Ste. Genevieve", "Charleston", "New Madrid"],
  },
  "joplin": {
    name: "Joplin",
    county: "Jasper County",
    about: "Joplin anchors the four-state area where Missouri, Kansas, Oklahoma, and Arkansas meet. Our process servers handle serves throughout Jasper and Newton counties, with knowledge of the unique multi-state legal landscape.",
    nearbyAreas: ["Carthage", "Webb City", "Neosho", "Miami (OK)", "Pittsburg (KS)", "Seneca", "Carl Junction"],
  },
  "independence": {
    name: "Independence",
    county: "Jackson County",
    about: "Independence is a major city in Jackson County with its own municipal courts and significant legal activity. We provide prompt process serving throughout Independence and the eastern Kansas City metro area.",
    nearbyAreas: ["Lee's Summit", "Blue Springs", "Raytown", "Kansas City", "Sugar Creek", "Grain Valley", "Odessa"],
  },
};

function toTitleCase(str: string) {
  return str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function CityPage() {
  const params = useParams<{ city: string }>();
  const citySlug = params.city || "";
  const city = cityData[citySlug];
  const cityName = city?.name ?? toTitleCase(citySlug);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#004182] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#004182] to-[#003370]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-blue-300 hover:text-white text-sm mb-6 transition-colors"
                data-testid="link-city-back"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Home
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#0E584D]/30 border border-[#0E584D]/50 text-[#a8e6d9] rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <MapPin className="w-3.5 h-3.5" />
              Missouri Process Server
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white font-[Montserrat] mb-4 max-w-3xl">
              Process Server in<br />
              <span className="text-[#a8e6d9]">{cityName}, Missouri</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-blue-200 text-lg max-w-2xl leading-relaxed mb-10">
              Rodriguez Legal Support Services provides fast, reliable process serving in {cityName} and throughout {city?.county ?? `${cityName} County`}. Licensed, insured, and GPS-verified.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button
                asChild
                size="lg"
                className="bg-[#0E584D] hover:bg-[#0E584D]/90 text-white border-2 border-[#08352E] rounded-xl text-base font-semibold px-8 py-6"
              >
                <Link href="/contact" data-testid="button-city-get-started">
                  Get Started — {cityName}
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About This City */}
      {city && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeUp}>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#0E584D] mb-3">Local Coverage</div>
                  <h2 className="text-3xl font-black text-[#004182] font-[Montserrat] mb-4">
                    Serving {cityName} and Surrounding Areas
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{city.about}</p>
                  <div>
                    <div className="text-sm font-bold text-[#004182] font-[Montserrat] mb-3">Nearby Areas We Serve:</div>
                    <div className="flex flex-wrap gap-2">
                      {city.nearbyAreas.map((area) => (
                        <span key={area} className="bg-[#F7F5F3] border border-gray-200 text-gray-700 rounded-lg px-3 py-1.5 text-sm">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} className="space-y-4">
                  {[
                    { icon: Clock, title: "Fast Turnaround", body: `Standard serves in ${cityName} completed within 3-7 business days. Rush same-day service available.` },
                    { icon: Shield, title: "Licensed & Insured", body: "All serves performed by licensed Missouri process servers — your cases are protected." },
                    { icon: CheckCircle, title: "GPS Verified", body: "Every serve is GPS timestamped with exact location — unimpeachable proof for any Missouri court." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 p-5 bg-[#F7F5F3] rounded-xl border border-gray-100">
                      <div className="w-10 h-10 bg-[#004182]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#004182]" />
                      </div>
                      <div>
                        <div className="font-bold text-[#004182] font-[Montserrat] text-sm mb-1">{item.title}</div>
                        <div className="text-gray-600 text-sm">{item.body}</div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section className="py-16 bg-[#F7F5F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h2 className="text-3xl font-black text-[#004182] font-[Montserrat]">
                Request Service in {cityName}
              </h2>
              <p className="mt-3 text-gray-600 max-w-lg mx-auto">Fill out the form below and we'll confirm your order within one business hour.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="max-w-2xl mx-auto">
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500 mb-4">We also serve these Missouri cities:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {Object.entries(cityData)
              .filter(([slug]) => slug !== citySlug)
              .map(([slug, data]) => (
                <Link
                  key={slug}
                  href={`/process-server-${slug}-mo`}
                  className="bg-[#F7F5F3] border border-gray-200 hover:border-[#0E584D] hover:text-[#0E584D] text-gray-700 rounded-xl px-4 py-2 text-sm font-medium transition-all"
                  data-testid={`link-city-other-${slug}`}
                >
                  {data.name}, MO
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
