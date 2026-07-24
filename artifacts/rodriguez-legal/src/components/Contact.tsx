import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, ClipboardList, CheckCircle2, Scale, Shield, ArrowRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { value: "starter",       name: "Starter Launch",                             sub: "Formation (LLC/Corp) + EIN + operating agreement + name search",     price: "$499" },
  { value: "growth",        name: "Growth ⭐",                                   sub: "Everything in Starter + Registered Agent Yr 1 + S-Corp election + compliance calendar", price: "$899" },
  { value: "concierge",     name: "Concierge",                                   sub: "Everything in Growth + bylaws + full records + license research + 2 consulting sessions", price: "$1,499" },
  { value: "notary-online", name: "Remote Online Notary (RON) — Coming Soon",    sub: "Secure online notarization session",                                 price: "$25" },
  { value: "notary-mobile", name: "Mobile Notary (Coming Soon)",                 sub: "Launching soon — select to join the waitlist",                       price: "Waitlist" },
  { value: "loan-signing",  name: "Loan Signing Services (Coming Soon)",         sub: "Loan signings & real estate closings — join the waitlist",           price: "Waitlist" },
  { value: "process-std",   name: "Process Serving — KC Metro (Standard)",       sub: "Flat rate · Up to 3 attempts · Notarized proof of service included", price: "$75" },
  { value: "process-rush",  name: "Process Serving — KC Metro (Rush / Same Day)",sub: "Rush (1–2 days) $125 · Same-day $150 · Affidavit filed with court",  price: "$125–$150" },
  { value: "process-rural", name: "Process Serving — Rural Missouri",            sub: "$50 base + $0.85/mile outside KC metro · Prepayment required",       price: "$50 + miles" },
  { value: "unsure",        name: "Not Sure Yet",                                sub: "I'd like to talk through my options first",                         price: "Free" },
];

const expectSteps = [
  { n: "1", text: "<strong>We review your request</strong> — usually within a few hours of submission." },
  { n: "2", text: "<strong>We reach out to confirm details</strong> — by your preferred contact method." },
  { n: "3", text: "<strong>You approve and pay</strong> — secure checkout, no surprises." },
  { n: "4", text: "<strong>We file your documents</strong> — and keep you updated at every step." },
  { n: "5", text: "<strong>You receive confirmation</strong> — with all your documents, ready to operate." },
];

const hours = [
  { day: "Monday – Friday",    time: "8am – 7pm" },
  { day: "Saturday",           time: "8am – 8pm" },
  { day: "Sunday",             time: "9am – 6pm (by appointment)" },
  { day: "Phone intake (Anna AI)", time: "24/7" },
];

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  contactPref: string;
  service: string;
  bizName: string;
  bizType: string;
  timeline: string;
  notes: string;
}

export function Contact() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    firstName: "", lastName: "", phone: "", email: "", contactPref: "",
    service: "", bizName: "", bizType: "", timeline: "", notes: "",
  });

  const set = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = () => {
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  return (
    <>
      {/* CTA Banner */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -bottom-[20%] -left-[10%] w-[40%] h-[150%] bg-gradient-to-t from-white/20 to-transparent blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Ready to Start Your Business Today?
            </h2>
            <p className="text-white/75 text-lg mb-8 max-w-2xl mx-auto">
              Fill out the form below and our team will personally follow up within a few hours — usually the same business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-14 px-8 font-semibold rounded-xl"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Start Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" className="bg-transparent border border-white/30 text-white hover:bg-white/10 h-14 px-8 rounded-xl"
                onClick={() => (window.location.href = "tel:8165530595")}>
                <Phone className="mr-2 w-5 h-5" /> Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Contact method cards */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-14">
            {[
              { icon: <Phone className="w-6 h-6 text-primary" />, label: "Call or Text", value: "(816) 553-0595", note: "Anna, our AI receptionist, answers 24/7", href: "tel:8165530595" },
              { icon: <Mail className="w-6 h-6 text-primary" />, label: "Email", value: "info@ganttformation.com", note: "Response within a few hours", href: "mailto:info@ganttformation.com" },
              { icon: <ClipboardList className="w-6 h-6 text-primary" />, label: "Request Form", value: "Fill out below", note: "We'll contact you directly", href: "#contact-form" },
            ].map((m, i) => (
              <motion.a
                key={i}
                href={m.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-border rounded-2xl p-5 text-center flex flex-col items-center gap-2 hover:border-primary/40 hover:-translate-y-1 hover:shadow-md transition-all duration-200 no-underline"
              >
                {m.icon}
                <div className="text-xs font-bold tracking-widest uppercase text-primary">{m.label}</div>
                <div className="text-sm font-medium text-foreground break-all">{m.value}</div>
                <div className="text-xs text-muted-foreground">{m.note}</div>
              </motion.a>
            ))}
          </div>

          {/* Main layout */}
          <div id="contact-form" className="grid lg:grid-cols-[1fr_340px] gap-8 max-w-5xl mx-auto items-start">

            {/* Form card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-border rounded-2xl p-7 lg:p-10 shadow-sm"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3">Request Received!</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Our team will personally follow up with you within a few hours — usually the same business day.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Need something urgent?{" "}
                    <a href="tel:8165530595" className="text-primary font-semibold">Call or text (816) 553-0595</a>
                  </p>
                  <Button className="mt-8 bg-transparent border border-primary text-primary hover:bg-primary/8 rounded-xl"
                    onClick={() => { setSubmitted(false); setStep(1); setForm({ firstName: "", lastName: "", phone: "", email: "", contactPref: "", service: "", bizName: "", bizType: "", timeline: "", notes: "" }); }}>
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-1">Start Your Request</h2>
                  <p className="text-muted-foreground text-sm mb-6">Takes about 2 minutes. Our team personally reviews every submission.</p>

                  {/* Progress bar */}
                  <div className="flex gap-1.5 mb-8">
                    {[1, 2, 3].map(i => (
                      <div key={i} className={`flex-1 h-1 rounded-full transition-all duration-300 ${i < step ? "bg-primary/30" : i === step ? "bg-primary" : "bg-border"}`} />
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                        <div className="text-xs font-bold tracking-widest uppercase text-primary mb-5">Step 1 of 3 — Your Information</div>
                        <div className="space-y-4 mb-6">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <Field label="First Name" required>
                              <input type="text" placeholder="First name" value={form.firstName} onChange={set("firstName")} className={inputCls} />
                            </Field>
                            <Field label="Last Name" required>
                              <input type="text" placeholder="Last name" value={form.lastName} onChange={set("lastName")} className={inputCls} />
                            </Field>
                          </div>
                          <Field label="Phone Number" required>
                            <input type="tel" placeholder="(816) 555-0100" value={form.phone} onChange={set("phone")} className={inputCls} />
                          </Field>
                          <Field label="Email Address" required>
                            <input type="email" placeholder="you@example.com" value={form.email} onChange={set("email")} className={inputCls} />
                          </Field>
                          <Field label="Best Way to Reach You">
                            <select value={form.contactPref} onChange={set("contactPref")} className={selectCls}>
                              <option value="">Select preference</option>
                              <option>Call me</option>
                              <option>Text me</option>
                              <option>Email me</option>
                            </select>
                          </Field>
                        </div>
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 font-semibold rounded-xl" onClick={() => setStep(2)}>
                          Continue <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                        <div className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Step 2 of 3 — What Do You Need?</div>
                        <p className="text-xs text-muted-foreground mb-5">Select your primary service</p>
                        <div className="space-y-2 mb-6 max-h-[420px] overflow-y-auto pr-1">
                          {services.map(s => (
                            <label
                              key={s.value}
                              onClick={() => setForm(f => ({ ...f, service: s.value }))}
                              className={`flex items-center gap-3 rounded-xl p-3.5 cursor-pointer border transition-all duration-150 ${form.service === s.value ? "border-primary bg-primary/6" : "border-border bg-background hover:border-primary/40"}`}
                            >
                              <input type="radio" name="service" value={s.value} checked={form.service === s.value} onChange={() => {}} className="accent-emerald-700 shrink-0" />
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-foreground">{s.name}</div>
                                <div className="text-xs text-muted-foreground mt-0.5">{s.sub}</div>
                              </div>
                              <div className="text-sm font-semibold text-primary whitespace-nowrap">{s.price}</div>
                            </label>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <Button className="bg-transparent border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 h-12 px-5 rounded-xl" onClick={() => setStep(1)}>
                            <ChevronLeft className="w-4 h-4 mr-1" /> Back
                          </Button>
                          <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 h-12 font-semibold rounded-xl" onClick={() => setStep(3)}>
                            Continue <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                        <div className="text-xs font-bold tracking-widest uppercase text-primary mb-5">Step 3 of 3 — A Few More Details</div>
                        <div className="space-y-4 mb-6">
                          <Field label="Business Name (if you have one)">
                            <input type="text" placeholder="e.g. KC Home Services LLC" value={form.bizName} onChange={set("bizName")} className={inputCls} />
                          </Field>
                          <Field label="Business Type">
                            <select value={form.bizType} onChange={set("bizType")} className={selectCls}>
                              <option value="">Select type</option>
                              <option>LLC</option>
                              <option>S-Corporation</option>
                              <option>Sole Proprietorship</option>
                              <option>Not sure yet</option>
                            </select>
                          </Field>
                          <Field label="When do you need this done?">
                            <select value={form.timeline} onChange={set("timeline")} className={selectCls}>
                              <option value="">Select timeline</option>
                              <option>As soon as possible</option>
                              <option>Within the next week</option>
                              <option>Within the next month</option>
                              <option>Just exploring for now</option>
                            </select>
                          </Field>
                          <Field label="Anything else we should know?">
                            <textarea placeholder="Questions, special circumstances, or anything else..." value={form.notes} onChange={set("notes")} rows={4} className={`${inputCls} resize-none`} />
                          </Field>
                        </div>
                        <div className="flex gap-3">
                          <Button className="bg-transparent border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 h-12 px-5 rounded-xl" onClick={() => setStep(2)}>
                            <ChevronLeft className="w-4 h-4 mr-1" /> Back
                          </Button>
                          <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 h-12 font-semibold rounded-xl" onClick={handleSubmit}>
                            Submit Request <CheckCircle2 className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </motion.div>

            {/* Sidebar */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white border border-border rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-base font-heading font-bold text-foreground mb-5">What Happens Next</h3>
                <div className="space-y-4">
                  {expectSteps.map((s, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-[11px] font-bold text-primary shrink-0 mt-0.5">
                        {s.n}
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: s.text.replace(/<strong>/g, '<span class="text-foreground font-medium">').replace(/<\/strong>/g, '</span>') }} />
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white border border-border rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-base font-heading font-bold text-foreground mb-4">Availability</h3>
                <div className="space-y-0">
                  {hours.map((h, i) => (
                    <div key={i} className="flex justify-between py-2.5 border-b border-border/50 last:border-0 text-xs">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="text-primary font-semibold">{h.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-primary/6 border border-primary/20 rounded-2xl p-6 text-center"
              >
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-sm font-heading font-bold text-primary mb-2">Accuracy Guaranteed</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Every filing is personally reviewed before it's submitted. If we make an error, we fix it — at no cost to you.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-secondary border border-border rounded-xl p-4 flex gap-3 items-start"
              >
                <Scale className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Gantts Key Formation Group is not a law firm and does not provide legal, tax, or financial advice. For legal advice, please consult a licensed Missouri attorney.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

const inputCls = "w-full bg-background border border-input rounded-lg px-4 py-2.5 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors";
const selectCls = `${inputCls} cursor-pointer appearance-none`;

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-muted-foreground">
        {label}{required && <span className="text-primary ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}
