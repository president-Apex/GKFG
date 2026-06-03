import { useState } from "react";
import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

const SCHEMA = [
  webPageSchema({
    url: "/client-intake",
    name: "Client Intake Form | Gantt Key Formation Group",
    description: "Complete the Gantt Key Formation Group client intake form to get started with business formation, registered agent, notary, or related services.",
    breadcrumbItems: [{ name: "Client Intake Form", href: "/client-intake" }],
  }),
  breadcrumbSchema([{ name: "Client Intake Form", href: "/client-intake" }]),
];

const SERVICES = [
  "LLC Formation",
  "Corporation Formation",
  "Registered Agent Services",
  "EIN Assistance",
  "Business Compliance Assistance",
  "Mobile Notary Services",
  "Online Notary Services",
  "Business Consultation",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition";
const labelClass = "block text-sm font-semibold text-foreground mb-1.5";
const sectionClass = "space-y-5";
const sectionHeadingClass =
  "text-lg font-serif font-bold text-primary border-b border-border pb-2 mb-5";

function CheckboxField({
  id,
  label,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label
      htmlFor={id}
      className="flex items-start gap-3 cursor-pointer group"
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 rounded border-border accent-primary flex-shrink-0"
      />
      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
        {label}
      </span>
    </label>
  );
}

function RadioField({
  name,
  value,
  label,
  selected,
  onChange,
}: {
  name: string;
  value: string;
  label: string;
  selected: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected === value}
        onChange={() => onChange(value)}
        className="h-4 w-4 border-border accent-primary flex-shrink-0"
      />
      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
        {label}
      </span>
    </label>
  );
}

export default function ClientIntake() {
  const [submitted, setSubmitted] = useState(false);

  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState<string[]>([]);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const [services, setServices] = useState<string[]>([]);
  const [otherService, setOtherService] = useState("");

  const [desiredName, setDesiredName] = useState("");
  const [hasExistingBusiness, setHasExistingBusiness] = useState("");
  const [stateOfFormation, setStateOfFormation] = useState("");
  const [industry, setIndustry] = useState("");
  const [numOwners, setNumOwners] = useState("");
  const [businessPurpose, setBusinessPurpose] = useState("");

  const [ownerNames, setOwnerNames] = useState("");
  const [needsRegisteredAgent, setNeedsRegisteredAgent] = useState("");
  const [hasDocuments, setHasDocuments] = useState("");
  const [documentDescription, setDocumentDescription] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const [ackAccurate, setAckAccurate] = useState(false);
  const [ackServices, setAckServices] = useState(false);
  const [ackNotLaw, setAckNotLaw] = useState(false);
  const [ackPolicies, setAckPolicies] = useState(false);
  const [ackSms, setAckSms] = useState(false);
  const [signature, setSignature] = useState("");
  const [signatureDate, setSignatureDate] = useState("");

  const canSubmit = ackAccurate && ackServices && ackNotLaw && ackPolicies && fullName && email && phone;

  function toggleService(s: string) {
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  function toggleContactMethod(m: string) {
    setContactMethod((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <>
        <SEO title="Client Intake Form | Gantt Key Formation Group" description="Submit your client intake form." schema={SCHEMA} />
        <div className="min-h-screen flex items-center justify-center px-4 py-32">
          <div className="max-w-lg text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-secondary" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-primary">Intake Form Submitted</h1>
            <p className="text-muted-foreground leading-relaxed">
              Thank you, <strong>{fullName}</strong>. We've received your intake form and will reach out to you within 1–2 business days to discuss your needs.
            </p>
            <p className="text-sm text-muted-foreground">
              Questions? Email us at{" "}
              <a href="mailto:info@ganttkarr.com" className="text-secondary hover:underline">info@ganttkarr.com</a>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link href="/services">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">View Our Services</Button>
              </Link>
              <Link href="/">
                <Button variant="outline">Back to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Client Intake Form | Gantt Key Formation Group"
        description="Complete the Gantt Key Formation Group client intake form to get started with business formation, registered agent, notary, or administrative services."
        schema={SCHEMA}
      />

      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-secondary text-sm uppercase tracking-widest mb-3 font-semibold">Get Started</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">Client Intake Form</h1>
          <p className="text-primary-foreground/70 mt-4 max-w-xl leading-relaxed">
            Complete this form to begin your service journey with Gantt Key Formation Group.
            All fields marked as required help us understand your needs and connect you with the right support.
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-12">

            {/* Client Information */}
            <div className={sectionClass}>
              <h2 className={sectionHeadingClass}>Client Information</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className={labelClass}>Full Legal Name <span className="text-secondary">*</span></label>
                  <input id="fullName" type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} className={inputClass} placeholder="Full legal name" />
                </div>
                <div>
                  <label htmlFor="businessName" className={labelClass}>Business Name (if applicable)</label>
                  <input id="businessName" type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} className={inputClass} placeholder="Business name" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className={labelClass}>Email Address <span className="text-secondary">*</span></label>
                  <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone Number <span className="text-secondary">*</span></label>
                  <input id="phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} placeholder="(555) 000-0000" />
                </div>
              </div>

              <div>
                <p className={labelClass}>Preferred Contact Method</p>
                <div className="flex flex-wrap gap-5 mt-1">
                  {["Phone", "Text Message", "Email"].map((m) => (
                    <label key={m} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={contactMethod.includes(m)}
                        onChange={() => toggleContactMethod(m)}
                        className="h-4 w-4 rounded border-border accent-primary"
                      />
                      <span className="text-sm text-muted-foreground">{m}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="address" className={labelClass}>Business Address</label>
                <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} className={inputClass} placeholder="Street address" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label htmlFor="city" className={labelClass}>City</label>
                  <input id="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} className={inputClass} placeholder="City" />
                </div>
                <div>
                  <label htmlFor="state" className={labelClass}>State</label>
                  <input id="state" type="text" value={state} onChange={(e) => setState(e.target.value)} className={inputClass} placeholder="MO" />
                </div>
                <div>
                  <label htmlFor="zip" className={labelClass}>ZIP Code</label>
                  <input id="zip" type="text" value={zip} onChange={(e) => setZip(e.target.value)} className={inputClass} placeholder="00000" />
                </div>
              </div>
            </div>

            {/* Service Requested */}
            <div className={sectionClass}>
              <h2 className={sectionHeadingClass}>Service Requested</h2>
              <p className="text-sm text-muted-foreground -mt-3 mb-4">Which services are you interested in?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICES.map((s) => (
                  <CheckboxField
                    key={s}
                    id={`svc-${s}`}
                    label={s}
                    checked={services.includes(s)}
                    onChange={() => toggleService(s)}
                  />
                ))}
              </div>
              {services.includes("Other") && (
                <div className="mt-3">
                  <label htmlFor="otherService" className={labelClass}>Please describe:</label>
                  <textarea id="otherService" rows={2} value={otherService} onChange={(e) => setOtherService(e.target.value)} className={inputClass} placeholder="Describe the other service..." />
                </div>
              )}
            </div>

            {/* Business Information */}
            <div className={sectionClass}>
              <h2 className={sectionHeadingClass}>Business Information</h2>

              <div>
                <label htmlFor="desiredName" className={labelClass}>Desired Business Name</label>
                <input id="desiredName" type="text" value={desiredName} onChange={(e) => setDesiredName(e.target.value)} className={inputClass} placeholder="Desired business name" />
              </div>

              <div>
                <p className={labelClass}>Do you already have a business formed?</p>
                <div className="flex gap-6 mt-1">
                  <RadioField name="hasExistingBusiness" value="Yes" label="Yes" selected={hasExistingBusiness} onChange={setHasExistingBusiness} />
                  <RadioField name="hasExistingBusiness" value="No" label="No" selected={hasExistingBusiness} onChange={setHasExistingBusiness} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="stateOfFormation" className={labelClass}>State of Formation</label>
                  <input id="stateOfFormation" type="text" value={stateOfFormation} onChange={(e) => setStateOfFormation(e.target.value)} className={inputClass} placeholder="e.g., Missouri" />
                </div>
                <div>
                  <label htmlFor="industry" className={labelClass}>Business Industry</label>
                  <input id="industry" type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} className={inputClass} placeholder="e.g., Consulting, Retail" />
                </div>
              </div>

              <div>
                <p className={labelClass}>Estimated Number of Owners</p>
                <div className="flex gap-6 mt-1">
                  {["1", "2–5", "6+"].map((n) => (
                    <RadioField key={n} name="numOwners" value={n} label={n} selected={numOwners} onChange={setNumOwners} />
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="businessPurpose" className={labelClass}>Business Purpose</label>
                <textarea id="businessPurpose" rows={3} value={businessPurpose} onChange={(e) => setBusinessPurpose(e.target.value)} className={inputClass} placeholder="Describe the nature and purpose of your business..." />
              </div>
            </div>

            {/* Ownership Information */}
            <div className={sectionClass}>
              <h2 className={sectionHeadingClass}>Ownership Information</h2>
              <div>
                <label htmlFor="ownerNames" className={labelClass}>Owner / Member Name(s)</label>
                <textarea id="ownerNames" rows={4} value={ownerNames} onChange={(e) => setOwnerNames(e.target.value)} className={inputClass} placeholder="List all owner / member names, one per line..." />
              </div>
            </div>

            {/* Registered Agent */}
            <div className={sectionClass}>
              <h2 className={sectionHeadingClass}>Registered Agent Information</h2>
              <div>
                <p className={labelClass}>Will you need registered agent services?</p>
                <div className="flex gap-6 mt-1">
                  <RadioField name="needsRegisteredAgent" value="Yes" label="Yes" selected={needsRegisteredAgent} onChange={setNeedsRegisteredAgent} />
                  <RadioField name="needsRegisteredAgent" value="No" label="No" selected={needsRegisteredAgent} onChange={setNeedsRegisteredAgent} />
                </div>
              </div>
            </div>

            {/* Document Information */}
            <div className={sectionClass}>
              <h2 className={sectionHeadingClass}>Document Information</h2>
              <div>
                <p className={labelClass}>Do you currently have documents that need review or processing?</p>
                <div className="flex gap-6 mt-1">
                  <RadioField name="hasDocuments" value="Yes" label="Yes" selected={hasDocuments} onChange={setHasDocuments} />
                  <RadioField name="hasDocuments" value="No" label="No" selected={hasDocuments} onChange={setHasDocuments} />
                </div>
              </div>
              {hasDocuments === "Yes" && (
                <div>
                  <label htmlFor="documentDescription" className={labelClass}>If yes, please describe:</label>
                  <textarea id="documentDescription" rows={3} value={documentDescription} onChange={(e) => setDocumentDescription(e.target.value)} className={inputClass} placeholder="Describe your documents..." />
                </div>
              )}
            </div>

            {/* Scheduling */}
            <div className={sectionClass}>
              <h2 className={sectionHeadingClass}>Scheduling Preferences</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="preferredDate" className={labelClass}>Preferred Appointment Date</label>
                  <input id="preferredDate" type="text" value={preferredDate} onChange={(e) => setPreferredDate(e.target.value)} className={inputClass} placeholder="e.g., Weekdays, ASAP" />
                </div>
                <div>
                  <label htmlFor="preferredTime" className={labelClass}>Preferred Appointment Time</label>
                  <input id="preferredTime" type="text" value={preferredTime} onChange={(e) => setPreferredTime(e.target.value)} className={inputClass} placeholder="e.g., Mornings, Afternoons" />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className={sectionClass}>
              <h2 className={sectionHeadingClass}>Additional Information</h2>
              <div>
                <label htmlFor="additionalInfo" className={labelClass}>Please provide any additional information that may help us better assist you:</label>
                <textarea id="additionalInfo" rows={5} value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} className={inputClass} placeholder="Anything else we should know..." />
              </div>
            </div>

            {/* Acknowledgments */}
            <div className="space-y-4">
              <h2 className={sectionHeadingClass}>Client Acknowledgments</h2>

              <CheckboxField
                id="ack-accurate"
                label="I certify that information provided is accurate to the best of my knowledge."
                checked={ackAccurate}
                onChange={setAckAccurate}
              />
              <CheckboxField
                id="ack-services"
                label="I understand that Gantt Key Formation Group provides administrative and business support services."
                checked={ackServices}
                onChange={setAckServices}
              />
              <CheckboxField
                id="ack-notlaw"
                label="I understand that Gantt Key Formation Group is not a law firm and does not provide legal advice, tax advice, or legal representation."
                checked={ackNotLaw}
                onChange={setAckNotLaw}
              />
              <CheckboxField
                id="ack-policies"
                label="I have reviewed the Privacy Policy, Terms of Service, and applicable policies."
                checked={ackPolicies}
                onChange={setAckPolicies}
              />

              <label htmlFor="ack-sms" className="flex items-start gap-3 cursor-pointer group">
                <input
                  id="ack-sms"
                  type="checkbox"
                  checked={ackSms}
                  onChange={(e) => setAckSms(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-border accent-primary flex-shrink-0"
                />
                <span className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  I agree to receive SMS text messages from Gantt Key Formation Group regarding my inquiry, appointments, service updates, account notifications, and related communications. Message frequency may vary. Message and data rates may apply. Reply STOP to unsubscribe or HELP for assistance. Consent is not a condition of purchase.{" "}
                  <Link href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>
                  {" "}·{" "}
                  <Link href="/messaging-terms" className="text-secondary hover:underline">Messaging Terms & Conditions</Link>
                </span>
              </label>
            </div>

            {/* Signature */}
            <div className="space-y-5">
              <h2 className={sectionHeadingClass}>Client Signature</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="signature" className={labelClass}>Full Name (serves as electronic signature)</label>
                  <input id="signature" type="text" value={signature} onChange={(e) => setSignature(e.target.value)} className={inputClass} placeholder="Type your full name" />
                </div>
                <div>
                  <label htmlFor="signatureDate" className={labelClass}>Date</label>
                  <input id="signatureDate" type="date" value={signatureDate} onChange={(e) => setSignatureDate(e.target.value)} className={inputClass} />
                </div>
              </div>
            </div>

            <div className="bg-muted/50 border border-border rounded-xl p-4">
              <p className="text-xs font-semibold text-foreground mb-1">Important Notice</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Gantt Key Formation Group is not a law firm and does not provide legal advice, legal representation, tax advice, accounting advice, or financial advice. Information provided is for general informational and administrative purposes only.
              </p>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={!canSubmit}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed h-14 text-base"
            >
              Submit Client Intake Form
            </Button>

            {!canSubmit && (
              <p className="text-xs text-center text-muted-foreground">
                Please fill in required fields and check all required acknowledgments to submit.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
