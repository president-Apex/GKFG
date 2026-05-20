import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const articles = [
  {
    slug: "avoiding-service-missouri",
    title: "What to Do When Someone Is Avoiding Service in Missouri",
    category: "Process Serving",
    readTime: "5 min read",
    excerpt: "When a defendant actively evades service of process, it doesn't mean your case is dead in the water. Missouri law provides several options — and skilled skip tracing can locate even the most elusive subjects.",
    body: `Service of process is a cornerstone of due process in Missouri's legal system. When a defendant deliberately avoids being served, courts take notice — and the law gives you tools to work around it.

**What Counts as Evading Service?**

Evasion happens when a person is aware of pending litigation and takes deliberate steps to avoid being served — moving without notice, using false addresses, or refusing to answer the door despite being home.

**Your Options Under Missouri Law:**

1. **Substitute Service** — Missouri RSMO 506.150 allows service on another person at the defendant's usual place of abode if they are over 15 years old and a member of the household.

2. **Service by Publication** — If a defendant cannot be located after diligent search, Missouri courts may permit service by publication in a local newspaper.

3. **Skip Tracing** — Professional skip tracing uses database searches, public records, and investigative techniques to locate individuals who have moved or changed contact information.

**How Rodriguez Legal Can Help**

Our skip tracing service uses multiple proprietary databases, social media analysis, and field investigation to locate subjects — with a high success rate even in difficult cases. Once located, we execute service immediately.

Don't let an evasive defendant stall your case. Contact us today to discuss skip tracing options.`,
  },
  {
    slug: "how-long-does-process-serving-take",
    title: "How Long Does Process Serving Take in Missouri?",
    category: "Process Serving",
    readTime: "4 min read",
    excerpt: "Timelines vary based on location, subject availability, and service type. Here's what Missouri attorneys and litigants need to know about realistic turnaround times — and how to expedite urgent serves.",
    body: `One of the most common questions we receive from attorneys and their clients: how long will this take? The honest answer depends on several factors.

**Standard Service Timelines**

For most residential serves in Missouri's major metro areas (St. Louis, Kansas City), expect:
- First attempt: Within 24-48 hours of document receipt
- Standard completion: 3-7 business days
- Rush/same-day: Same business day if received before noon

**Factors That Affect Timeline**

*Location:* Urban areas have faster turnarounds than rural counties. Remote areas may require additional lead time.

*Subject Availability:* Work schedules, travel, and evasion all affect how quickly service is completed.

*Time of Day:* We attempt service at varied times — mornings, evenings, and weekends — to maximize the chance of contact.

*Document Complexity:* Some documents require specific delivery protocols that add steps.

**Rush Service**

When you can't wait, we offer same-day rush service for time-sensitive matters. This includes emergency TROs, same-day subpoenas, and last-minute filings with hard court deadlines. Rush service is available 7 days a week — call us directly.

**After Service**

Within 24 hours of successful service, you'll receive a notarized affidavit of service ready for court filing.`,
  },
  {
    slug: "skip-tracing-missouri",
    title: "Skip Tracing for Hard-to-Find Defendants in Missouri",
    category: "Skip Tracing",
    readTime: "6 min read",
    excerpt: "Skip tracing is more than database searches — it's investigative work that combines public records, field interviews, and digital intelligence to locate subjects who don't want to be found.",
    body: `The term "skip tracing" comes from the idea of a subject "skipping town" — leaving without a forwarding address to avoid creditors or legal process. Modern skip tracing has evolved into a sophisticated discipline.

**What Skip Tracing Involves**

Professional skip tracing is a multi-layer investigative process:

1. **Database Research** — Searching proprietary databases including credit header information, utility records, DMV records, and property records.

2. **Social Media Analysis** — Public social media profiles often contain location data, employer information, and personal connections.

3. **Field Investigation** — When databases are exhausted, our investigators conduct field work: interviewing neighbors, visiting last known addresses, and canvassing the area.

4. **Public Records** — Court records, voter registration, professional licensing, and property tax records are all public information in Missouri.

**When to Order Skip Tracing**

Consider skip tracing when:
- A defendant has not responded to initial attempts
- Mail is returned as undeliverable
- A subject has recently moved
- You have reason to believe the subject is deliberately evading service

**Missouri-Specific Considerations**

Missouri's public records are relatively accessible, which gives skilled investigators powerful tools. Property records are searchable through county assessor offices. Court records are available through CaseNet. Vehicle records are accessible to licensed investigators.

**Cost and Timeline**

Skip tracing is priced separately from standard process serving. Timelines depend on case difficulty — straightforward locates can be completed in 1-3 days, while complex cases may take longer. We provide regular updates throughout the process.`,
  },
  {
    slug: "affidavit-of-service-missouri",
    title: "Understanding the Missouri Affidavit of Service",
    category: "Legal Guidance",
    readTime: "4 min read",
    excerpt: "The affidavit of service is your proof that legal process was properly executed. Here's what Missouri courts require and how to ensure yours is court-ready.",
    body: `The affidavit of service — also called a proof of service or return of service — is the official document that proves a defendant was properly served with legal process. In Missouri, it must meet specific requirements to be accepted by the court.

**What Must Be Included**

Under Missouri Supreme Court Rules, a proper affidavit of service must include:
- The name of the person served
- The date, time, and location of service
- The method of service (personal, substitute, etc.)
- A description of the person served (if personal)
- The process server's signature, sworn under oath before a notary

**GPS Documentation**

At Rodriguez Legal, every affidavit includes GPS coordinates and a timestamp confirming the exact location and time of service. This eliminates any ambiguity about where and when service occurred — valuable protection if service is ever challenged.

**Filing with the Court**

The affidavit must be filed with the court to establish that service was made. Failure to file — or filing an improper affidavit — can result in default judgments being set aside or cases being dismissed.

**Challenging Service**

Defendants can challenge service by filing a motion to quash. Our GPS documentation and detailed affidavits are specifically designed to withstand such challenges.

**Electronic Delivery**

We deliver completed affidavits electronically in PDF format, typically within 24 hours of service completion. We can also prepare originals for filing if required by your court.`,
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#004182] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#0E584D]/30 border border-[#0E584D]/50 text-[#a8e6d9] rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <BookOpen className="w-3.5 h-3.5" />
              Legal Resources
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white font-[Montserrat] mb-4">
              Resources &amp; Guides
            </motion.h1>
            <motion.p variants={fadeUp} className="text-blue-200 text-lg max-w-2xl">
              Practical information about process serving, skip tracing, and notary services in Missouri — written for attorneys and individuals navigating the legal system.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-[#F7F5F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <motion.article
                key={article.slug}
                variants={fadeUp}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                data-testid={`card-article-${article.slug}`}
              >
                <div className="h-2 bg-gradient-to-r from-[#004182] to-[#0E584D]" />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0E584D] bg-[#0E584D]/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-[#004182] font-[Montserrat] mb-3 leading-snug group-hover:text-[#0E584D] transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{article.excerpt}</p>
                  <div className="text-[#0E584D] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
            <h2 className="text-3xl font-black text-[#004182] font-[Montserrat] mb-4">Have a Question Not Covered Here?</h2>
            <p className="text-gray-600 mb-8">Our team is happy to answer questions about process serving, skip tracing, or notary services in Missouri — no obligation.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0E584D] hover:bg-[#0E584D]/90 text-white border-2 border-[#08352E] rounded-xl px-8 py-4 text-base font-semibold transition-colors"
              data-testid="link-resources-contact"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
