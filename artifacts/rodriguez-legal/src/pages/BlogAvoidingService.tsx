import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Phone, ArrowRight, Scale, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function BlogAvoidingService() {
  return (
    <>
      <Navigation />
      <main className="bg-primary min-h-screen pt-20">

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-xs text-white/70 flex-wrap">
            <Link href={`${BASE}/process-server-missouri`}><span className="hover:text-accent transition-colors cursor-pointer">Missouri Process Serving</span></Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/85">Blog</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/85">Avoiding Service</span>
          </div>
        </div>

        {/* Article hero */}
        <section className="py-12 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-1/2 h-2/3 bg-accent/4 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-accent mb-6">
                ⚖️ Missouri Process Serving Guide
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-6">
                What Happens If Someone Avoids Being Served in Missouri?
              </h1>
              <p className="text-white/75 text-sm">By Loresa Gantt · Gantts Key Formation Group · Liberty, MO</p>
            </motion.div>
          </div>
        </section>

        {/* Article body */}
        <article className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="prose prose-invert prose-sm max-w-none">

                {/* Intro */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 mb-10 not-prose">
                  <h2 className="text-lg font-heading font-bold text-white mb-3">Avoiding Service of Process in Missouri: What You Need to Know</h2>
                  <p className="text-white/85 leading-relaxed text-sm">
                    It's a classic scene: a process server knocks, and the person inside turns off the lights and pretends they aren't home. Or, they see you coming and sprint out the back door.
                  </p>
                  <p className="text-white/85 leading-relaxed text-sm mt-3">
                    If you're trying to move a legal case forward in{" "}
                    <Link href={`${BASE}/process-server-kansas-city-mo`}><span className="text-accent hover:underline cursor-pointer">Kansas City</span></Link>{" "}
                    or surrounding rural areas like{" "}
                    <Link href={`${BASE}/process-server-plattsburg-mo`}><span className="text-accent hover:underline cursor-pointer">Plattsburg</span></Link>{" "}
                    or{" "}
                    <Link href={`${BASE}/process-server-kearney-mo`}><span className="text-accent hover:underline cursor-pointer">Kearney</span></Link>,
                    {" "}a "dodger" can feel like a total roadblock. But in Missouri, avoiding a process server doesn't stop the clock — it just changes the strategy.
                  </p>
                </div>

                {/* Section 1 */}
                <div className="mb-10">
                  <h2 className="text-2xl font-heading font-bold text-white mb-4">1. You Can't Outrun the Court Forever</h2>
                  <p className="text-white/85 leading-relaxed text-sm mb-4">
                    In Missouri, "avoidance" is not a legal defense. If a defendant is clearly evading service, we don't just give up. We document every attempt. This creates a paper trail of <strong className="text-accent/90">"Due Diligence"</strong> — a documented record that the courts recognize as evidence of good-faith effort.
                  </p>
                  <p className="text-white/85 leading-relaxed text-sm">
                    Every failed attempt is logged with the time, date, conditions at the property, and any observations about the occupant. This documentation protects your case and supports the next steps.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="mb-10">
                  <h2 className="text-2xl font-heading font-bold text-white mb-4">2. Motion for Special Order of Service</h2>
                  <p className="text-white/85 leading-relaxed text-sm mb-5">
                    When we can prove someone is hiding, your attorney can file a motion with the court. The judge may then allow <strong className="text-accent/90">"Substituted Service."</strong> This could mean:
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Service by Posting",
                        desc: "Taping the papers to their front door after documented failed attempts.",
                      },
                      {
                        title: "Service by Mail",
                        desc: "Sending the documents via certified mail to their last known address.",
                      },
                      {
                        title: "Service by Publication",
                        desc: "Running a notice in a local newspaper — common in rural Missouri counties like Clay or Ray County.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/5 border border-white/8 rounded-xl p-5">
                        <div className="text-accent font-semibold text-sm mb-1">{item.title}</div>
                        <div className="text-white/80 text-sm leading-relaxed">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 3 */}
                <div className="mb-10">
                  <h2 className="text-2xl font-heading font-bold text-white mb-4">3. The "Drop Service" Rule</h2>
                  <p className="text-white/85 leading-relaxed text-sm mb-4">
                    You don't actually have to put the papers in their hand for it to count. If a process server identifies the person and they refuse to open the door or they run away, the server can <strong className="text-accent/90">place the papers at their feet or on their porch while announcing, "You have been served."</strong>
                  </p>
                  <p className="text-white/85 leading-relaxed text-sm">
                    In Missouri, this is often upheld as valid service — the courts don't reward defendants who deliberately evade their legal obligations.
                  </p>
                </div>

                {/* Section 4 */}
                <div className="mb-10">
                  <h2 className="text-2xl font-heading font-bold text-white mb-4">4. Why a Private Server is Better for Evasive Targets</h2>
                  <p className="text-white/85 leading-relaxed text-sm mb-5">
                    The Sheriff's office is great, but they often have a "knock and leave" policy. As a private process server covering the{" "}
                    <Link href={`${BASE}/process-server-kansas-city-mo`}><span className="text-accent hover:underline cursor-pointer">KC Metro</span></Link>{" "}
                    and Rural Missouri, we have the flexibility to:
                  </p>
                  <div className="space-y-3">
                    {[
                      "Stake out a property at odd hours (early morning or late evening)",
                      `Track down a workplace in Liberty or Independence`,
                      "Use skip-tracing tools to find their new address",
                      "Serve at non-obvious times when the target is most likely to be present",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-accent/15 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        </div>
                        <span className="text-sm text-white/85 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom line */}
                <div className="bg-accent/6 border border-accent/20 rounded-2xl p-7 mb-10">
                  <h2 className="text-xl font-heading font-bold text-white mb-3">The Bottom Line</h2>
                  <p className="text-white/85 leading-relaxed text-sm mb-3">
                    Hiding only delays the inevitable — and usually makes the judge less sympathetic to the defendant later on. Courts see avoidance as bad faith, which can actually help your case.
                  </p>
                  <p className="text-white/85 leading-relaxed text-sm">
                    If you have a difficult serve in the Kansas City area, you need a server who won't just walk away after the first attempt. That's what we do.
                  </p>
                </div>

                {/* CTA inline */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center">
                  <h3 className="text-xl font-heading font-bold text-white mb-2">Dealing with a difficult serve in Clay or Clinton County?</h3>
                  <p className="text-white/75 text-sm mb-5">Get a fast quote. We document every attempt and provide a notarized affidavit on completion.</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button className="bg-accent text-primary hover:bg-accent/90 font-semibold"
                      onClick={() => window.location.href = `${BASE}/#contact`}>
                      Get a Fast Quote <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button className="bg-transparent border border-white/20 text-white hover:bg-white/10"
                      onClick={() => window.location.href = "tel:8165530595"}>
                      <Phone className="mr-2 w-4 h-4" /> (816) 553-0595
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Disclaimer */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="mt-10 bg-white/3 border border-white/8 rounded-xl p-5 flex gap-4 items-start">
                <Scale className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="text-xs text-white/70 leading-relaxed">
                  Process serving is performed in accordance with Missouri Supreme Court Rule 54.13. Gantts Key Formation Group is not a law firm and does not provide legal advice. We act only as a neutral third party for delivery of legal documents. For legal strategy or advice, consult a licensed Missouri attorney.
                </p>
              </motion.div>

              {/* More cities */}
              <div className="mt-12">
                <div className="text-xs font-bold tracking-widest uppercase text-accent mb-4 text-center">Serving These Missouri Cities</div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    { name: "Kansas City", slug: "kansas-city" },
                    { name: "Liberty", slug: "liberty" },
                    { name: "Independence", slug: "independence" },
                    { name: "Lee's Summit", slug: "lees-summit" },
                    { name: "Blue Springs", slug: "blue-springs" },
                    { name: "Smithville", slug: "smithville" },
                    { name: "Kearney", slug: "kearney" },
                    { name: "Plattsburg", slug: "plattsburg" },
                    { name: "Gladstone", slug: "gladstone" },
                    { name: "Parkville", slug: "parkville" },
                  ].map(c => (
                    <Link key={c.slug} href={`${BASE}/process-server-${c.slug}-mo`}>
                      <span className="inline-flex bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-white/80 hover:text-white hover:border-accent/40 transition-all cursor-pointer">
                        {c.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}
