import { useState } from "react";
import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { CheckCircle, Plus, Trash2 } from "lucide-react";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

const SCHEMA = [
  webPageSchema({
    url: "/formation-questionnaire",
    name: "Business Formation Questionnaire | Gantt Key Formation Group",
    description: "Complete the Gantt Key Formation Group Business Formation Questionnaire to provide the information needed to prepare your business formation documents.",
    breadcrumbItems: [{ name: "Business Formation Questionnaire", href: "/formation-questionnaire" }],
  }),
  breadcrumbSchema([{ name: "Formation Questionnaire", href: "/formation-questionnaire" }]),
];

const ADDITIONAL_SERVICES = [
  "EIN Assistance",
  "Business Compliance Assistance",
  "Mobile Notary Services",
  "Online Notary Services",
  "Business Consultation",
  "Annual Compliance Support",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition";
const labelClass = "block text-sm font-semibold text-foreground mb-1.5";
const sectionClass = "space-y-5";
const sectionHeadingClass =
  "text-lg font-serif font-bold text-primary border-b border-border pb-2 mb-5";
const sectionBadgeClass =
  "text-xs text-secondary font-bold uppercase tracking-widest mb-1 block";

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
    <label htmlFor={id} className="flex items-start gap-3 cursor-pointer group">
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

type Owner = {
  name: string;
  percentage: string;
  title: string;
  email: string;
  phone: string;
};

const emptyOwner = (): Owner => ({
  name: "",
  percentage: "",
  title: "",
  email: "",
  phone: "",
});

export default function FormationQuestionnaire() {
  const [submitted, setSubmitted] = useState(false);

  const [clientName, setClientName] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
  const [nameEnding, setNameEnding] = useState("");

  const [structure, setStructure] = useState("");

  const [stateOfFormation, setStateOfFormation] = useState("");
  const [additionalStates, setAdditionalStates] = useState("");
  const [operatesAdditionalStates, setOperatesAdditionalStates] = useState("");

  const [mailingAddress, setMailingAddress] = useState("");
  const [mailingCity, setMailingCity] = useState("");
  const [mailingState, setMailingState] = useState("");
  const [mailingZip, setMailingZip] = useState("");
  const [operationLocation, setOperationLocation] = useState("");

  const [numOwners, setNumOwners] = useState("");
  const [owners, setOwners] = useState<Owner[]>([emptyOwner()]);

  const [businessActivity, setBusinessActivity] = useState("");
  const [productsServices, setProductsServices] = useState("");

  const [hiresEmployees, setHiresEmployees] = useState("");
  const [annualRevenue, setAnnualRevenue] = useState("");
  const [consultsTaxPro, setConsultsTaxPro] = useState("");

  const [registeredAgent, setRegisteredAgent] = useState("");

  const [additionalServices, setAdditionalServices] = useState<string[]>([]);
  const [otherAdditionalService, setOtherAdditionalService] = useState("");

  const [ackAccurate, setAckAccurate] = useState(false);
  const [ackServices, setAckServices] = useState(false);
  const [ackNotLaw, setAckNotLaw] = useState(false);
  const [ackGov, setAckGov] = useState(false);

  const [signature, setSignature] = useState("");
  const [sigDate, setSigDate] = useState("");

  const canSubmit = ackAccurate && ackServices && ackNotLaw && ackGov && clientName && email && phone;

  function toggleAdditionalService(s: string) {
    setAdditionalServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  function updateOwner(index: number, field: keyof Owner, value: string) {
    setOwners((prev) =>
      prev.map((o, i) => (i === index ? { ...o, [field]: value } : o))
    );
  }

  function addOwner() {
    setOwners((prev) => [...prev, emptyOwner()]);
  }

  function removeOwner(index: number) {
    setOwners((prev) => prev.filter((_, i) => i !== index));
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
        <SEO title="Business Formation Questionnaire | Gantt Key Formation Group" description="Submit your business formation questionnaire." schema={SCHEMA} />
        <div className="min-h-screen flex items-center justify-center px-4 py-32">
          <div className="max-w-lg text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-secondary" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-primary">Questionnaire Submitted</h1>
            <p className="text-muted-foreground leading-relaxed">
              Thank you, <strong>{clientName}</strong>. We've received your Business Formation Questionnaire. Our team will review your information and follow up with next steps within 1–2 business days.
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
        title="Business Formation Questionnaire | Gantt Key Formation Group"
        description="Complete the Business Formation Questionnaire for Gantt Key Formation Group to provide the information needed to prepare your business formation documents and filings."
        schema={SCHEMA}
      />

      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-secondary text-sm uppercase tracking-widest mb-3 font-semibold">Client Documents</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">Business Formation Questionnaire</h1>
          <p className="text-primary-foreground/70 mt-4 max-w-xl leading-relaxed">
            This questionnaire is completed after you decide to move forward with business formation. It gives us the information we need to prepare your administrative paperwork accurately and efficiently.
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-14">

            {/* Contact Info */}
            <div className={sectionClass}>
              <h2 className={sectionHeadingClass}>Client Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="clientName" className={labelClass}>Client Name <span className="text-secondary">*</span></label>
                  <input id="clientName" type="text" required value={clientName} onChange={(e) => setClientName(e.target.value)} className={inputClass} placeholder="Full legal name" />
                </div>
                <div>
                  <label htmlFor="date" className={labelClass}>Date</label>
                  <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone Number <span className="text-secondary">*</span></label>
                  <input id="phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} placeholder="(555) 000-0000" />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email Address <span className="text-secondary">*</span></label>
                  <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} placeholder="you@example.com" />
                </div>
              </div>
            </div>

            {/* Section 1: Business Name */}
            <div className={sectionClass}>
              <span className={sectionBadgeClass}>Section 1</span>
              <h2 className={sectionHeadingClass}>Business Name Information</h2>

              <div>
                <label htmlFor="name1" className={labelClass}>Primary Desired Business Name</label>
                <input id="name1" type="text" value={name1} onChange={(e) => setName1(e.target.value)} className={inputClass} placeholder="First choice name" />
              </div>
              <div>
                <label htmlFor="name2" className={labelClass}>Second Choice Business Name</label>
                <input id="name2" type="text" value={name2} onChange={(e) => setName2(e.target.value)} className={inputClass} placeholder="Second choice name" />
              </div>
              <div>
                <label htmlFor="name3" className={labelClass}>Third Choice Business Name</label>
                <input id="name3" type="text" value={name3} onChange={(e) => setName3(e.target.value)} className={inputClass} placeholder="Third choice name" />
              </div>

              <div>
                <p className={labelClass}>Preferred Business Name Ending</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-1">
                  {["LLC", "Inc.", "Corporation", "PLLC (where applicable)", "Other"].map((opt) => (
                    <RadioField key={opt} name="nameEnding" value={opt} label={opt} selected={nameEnding} onChange={setNameEnding} />
                  ))}
                </div>
              </div>
            </div>

            {/* Section 2: Structure */}
            <div className={sectionClass}>
              <span className={sectionBadgeClass}>Section 2</span>
              <h2 className={sectionHeadingClass}>Business Formation Type</h2>
              <p className="text-sm text-muted-foreground -mt-3 mb-3">Business structure requested:</p>
              <div className="space-y-3">
                {[
                  "Single-Member LLC",
                  "Multi-Member LLC",
                  "Corporation (C-Corp)",
                  "S-Corp Election Requested",
                  "Nonprofit",
                  "Unsure — Need General Information",
                ].map((opt) => (
                  <RadioField key={opt} name="structure" value={opt} label={opt} selected={structure} onChange={setStructure} />
                ))}
              </div>
            </div>

            {/* Section 3: State */}
            <div className={sectionClass}>
              <span className={sectionBadgeClass}>Section 3</span>
              <h2 className={sectionHeadingClass}>State Information</h2>

              <div>
                <label htmlFor="stateOfFormation" className={labelClass}>State of Formation</label>
                <input id="stateOfFormation" type="text" value={stateOfFormation} onChange={(e) => setStateOfFormation(e.target.value)} className={inputClass} placeholder="e.g., Missouri" />
              </div>

              <div>
                <p className={labelClass}>Will your business operate in additional states?</p>
                <div className="flex gap-6 mt-1">
                  <RadioField name="additionalStatesQ" value="Yes" label="Yes" selected={operatesAdditionalStates} onChange={setOperatesAdditionalStates} />
                  <RadioField name="additionalStatesQ" value="No" label="No" selected={operatesAdditionalStates} onChange={setOperatesAdditionalStates} />
                </div>
              </div>
              {operatesAdditionalStates === "Yes" && (
                <div>
                  <label htmlFor="additionalStates" className={labelClass}>If yes, which states?</label>
                  <textarea id="additionalStates" rows={2} value={additionalStates} onChange={(e) => setAdditionalStates(e.target.value)} className={inputClass} placeholder="List additional states..." />
                </div>
              )}
            </div>

            {/* Section 4: Address */}
            <div className={sectionClass}>
              <span className={sectionBadgeClass}>Section 4</span>
              <h2 className={sectionHeadingClass}>Business Address Information</h2>

              <div>
                <label htmlFor="mailingAddress" className={labelClass}>Business Mailing Address</label>
                <input id="mailingAddress" type="text" value={mailingAddress} onChange={(e) => setMailingAddress(e.target.value)} className={inputClass} placeholder="Street address" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label htmlFor="mailingCity" className={labelClass}>City</label>
                  <input id="mailingCity" type="text" value={mailingCity} onChange={(e) => setMailingCity(e.target.value)} className={inputClass} placeholder="City" />
                </div>
                <div>
                  <label htmlFor="mailingState" className={labelClass}>State</label>
                  <input id="mailingState" type="text" value={mailingState} onChange={(e) => setMailingState(e.target.value)} className={inputClass} placeholder="MO" />
                </div>
                <div>
                  <label htmlFor="mailingZip" className={labelClass}>ZIP</label>
                  <input id="mailingZip" type="text" value={mailingZip} onChange={(e) => setMailingZip(e.target.value)} className={inputClass} placeholder="00000" />
                </div>
              </div>

              <div>
                <p className={labelClass}>Will this business operate from:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-1">
                  {["Home", "Office", "Commercial location", "Virtual location", "Mobile business"].map((opt) => (
                    <RadioField key={opt} name="operationLocation" value={opt} label={opt} selected={operationLocation} onChange={setOperationLocation} />
                  ))}
                </div>
              </div>
            </div>

            {/* Section 5: Ownership */}
            <div className={sectionClass}>
              <span className={sectionBadgeClass}>Section 5</span>
              <h2 className={sectionHeadingClass}>Ownership Information</h2>

              <div>
                <p className={labelClass}>How many owners / members?</p>
                <div className="flex gap-6 mt-1">
                  {["1", "2–5", "6+"].map((n) => (
                    <RadioField key={n} name="numOwners" value={n} label={n} selected={numOwners} onChange={setNumOwners} />
                  ))}
                </div>
              </div>

              <div className="space-y-6 mt-4">
                {owners.map((owner, i) => (
                  <div key={i} className="bg-muted/40 rounded-2xl border border-border p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-foreground">Owner / Member {i + 1}</p>
                      {owners.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeOwner(i)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                          aria-label={`Remove owner ${i + 1}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Owner Name</label>
                        <input type="text" value={owner.name} onChange={(e) => updateOwner(i, "name", e.target.value)} className={inputClass} placeholder="Full legal name" />
                      </div>
                      <div>
                        <label className={labelClass}>Ownership Percentage</label>
                        <input type="text" value={owner.percentage} onChange={(e) => updateOwner(i, "percentage", e.target.value)} className={inputClass} placeholder="e.g., 100%, 50%" />
                      </div>
                      <div>
                        <label className={labelClass}>Title</label>
                        <input type="text" value={owner.title} onChange={(e) => updateOwner(i, "title", e.target.value)} className={inputClass} placeholder="e.g., Managing Member, President" />
                      </div>
                      <div>
                        <label className={labelClass}>Email</label>
                        <input type="email" value={owner.email} onChange={(e) => updateOwner(i, "email", e.target.value)} className={inputClass} placeholder="owner@example.com" />
                      </div>
                      <div className="sm:col-span-2">
                        <label className={labelClass}>Phone</label>
                        <input type="tel" value={owner.phone} onChange={(e) => updateOwner(i, "phone", e.target.value)} className={inputClass} placeholder="(555) 000-0000" />
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addOwner}
                  className="flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 font-semibold transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  Add Another Owner / Member
                </button>
              </div>
            </div>

            {/* Section 6: Business Activity */}
            <div className={sectionClass}>
              <span className={sectionBadgeClass}>Section 6</span>
              <h2 className={sectionHeadingClass}>Business Activity</h2>

              <div>
                <label htmlFor="businessActivity" className={labelClass}>Describe your business activity:</label>
                <textarea id="businessActivity" rows={4} value={businessActivity} onChange={(e) => setBusinessActivity(e.target.value)} className={inputClass} placeholder="Describe what your business does..." />
              </div>
              <div>
                <label htmlFor="productsServices" className={labelClass}>Expected primary services / products:</label>
                <textarea id="productsServices" rows={4} value={productsServices} onChange={(e) => setProductsServices(e.target.value)} className={inputClass} placeholder="List your primary products or services..." />
              </div>
            </div>

            {/* Section 7: Tax */}
            <div className={sectionClass}>
              <span className={sectionBadgeClass}>Section 7</span>
              <h2 className={sectionHeadingClass}>Tax Information</h2>
              <p className="text-xs text-muted-foreground -mt-2 mb-2 italic">This section is for administrative planning purposes only. Gantt Key Formation Group does not provide tax advice.</p>

              <div>
                <p className={labelClass}>Will employees be hired?</p>
                <div className="flex gap-6 mt-1">
                  <RadioField name="hiresEmployees" value="Yes" label="Yes" selected={hiresEmployees} onChange={setHiresEmployees} />
                  <RadioField name="hiresEmployees" value="No" label="No" selected={hiresEmployees} onChange={setHiresEmployees} />
                  <RadioField name="hiresEmployees" value="Unsure" label="Unsure" selected={hiresEmployees} onChange={setHiresEmployees} />
                </div>
              </div>

              <div>
                <p className={labelClass}>Estimated Annual Revenue</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                  {["Under $25,000", "$25,000–$100,000", "$100,000–$250,000", "$250,000–$500,000", "$500,000+"].map((r) => (
                    <RadioField key={r} name="annualRevenue" value={r} label={r} selected={annualRevenue} onChange={setAnnualRevenue} />
                  ))}
                </div>
              </div>

              <div>
                <p className={labelClass}>Do you intend to discuss tax elections with a tax professional?</p>
                <div className="flex gap-6 mt-1">
                  <RadioField name="consultsTaxPro" value="Yes" label="Yes" selected={consultsTaxPro} onChange={setConsultsTaxPro} />
                  <RadioField name="consultsTaxPro" value="No" label="No" selected={consultsTaxPro} onChange={setConsultsTaxPro} />
                  <RadioField name="consultsTaxPro" value="Unsure" label="Unsure" selected={consultsTaxPro} onChange={setConsultsTaxPro} />
                </div>
              </div>
            </div>

            {/* Section 8: Registered Agent */}
            <div className={sectionClass}>
              <span className={sectionBadgeClass}>Section 8</span>
              <h2 className={sectionHeadingClass}>Registered Agent Services</h2>
              <div>
                <p className={labelClass}>Would you like Gantt Key Formation Group to serve as your registered agent?</p>
                <div className="flex gap-6 mt-1">
                  <RadioField name="registeredAgent" value="Yes" label="Yes" selected={registeredAgent} onChange={setRegisteredAgent} />
                  <RadioField name="registeredAgent" value="No" label="No" selected={registeredAgent} onChange={setRegisteredAgent} />
                </div>
              </div>
            </div>

            {/* Section 9: Additional Services */}
            <div className={sectionClass}>
              <span className={sectionBadgeClass}>Section 9</span>
              <h2 className={sectionHeadingClass}>Additional Services</h2>
              <p className="text-sm text-muted-foreground -mt-3 mb-3">Select any additional services:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADDITIONAL_SERVICES.map((s) => (
                  <CheckboxField
                    key={s}
                    id={`addsvc-${s}`}
                    label={s}
                    checked={additionalServices.includes(s)}
                    onChange={() => toggleAdditionalService(s)}
                  />
                ))}
              </div>
              {additionalServices.includes("Other") && (
                <div className="mt-3">
                  <label htmlFor="otherAdditionalService" className={labelClass}>Please describe:</label>
                  <textarea id="otherAdditionalService" rows={2} value={otherAdditionalService} onChange={(e) => setOtherAdditionalService(e.target.value)} className={inputClass} placeholder="Describe the other service..." />
                </div>
              )}
            </div>

            {/* Acknowledgments */}
            <div className="space-y-4">
              <h2 className={sectionHeadingClass}>Client Acknowledgment</h2>

              <CheckboxField
                id="ack-accurate"
                label="I certify that the information provided is accurate to the best of my knowledge."
                checked={ackAccurate}
                onChange={setAckAccurate}
              />
              <CheckboxField
                id="ack-services"
                label="I understand Gantt Key Formation Group provides administrative and business support services."
                checked={ackServices}
                onChange={setAckServices}
              />
              <CheckboxField
                id="ack-notlaw"
                label="I understand that Gantt Key Formation Group is not a law firm and does not provide legal advice, tax advice, accounting advice, or legal representation."
                checked={ackNotLaw}
                onChange={setAckNotLaw}
              />
              <CheckboxField
                id="ack-gov"
                label="I understand that government agencies control filing timelines and approval decisions."
                checked={ackGov}
                onChange={setAckGov}
              />
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
                  <label htmlFor="sigDate" className={labelClass}>Date</label>
                  <input id="sigDate" type="date" value={sigDate} onChange={(e) => setSigDate(e.target.value)} className={inputClass} />
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
              Submit Business Formation Questionnaire
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
