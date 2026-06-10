import { useState, useEffect, useRef } from "react";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Send, Bot, RefreshCw } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Palette — charcoal / taupe / ivory / muted plum (NOT navy/gold)
// ─────────────────────────────────────────────────────────────────────────────
const palette = {
  bg: "#F6F4F1",
  chatBg: "#FFFFFF",
  annaHead: "#2A2525",
  annaBubble: "#2A2525",
  userBubble: "#6B5272",
  accent: "#6B5272",
  accentHover: "#5A4360",
  border: "#E5E0DA",
  mutedText: "#7A736E",
};

type Msg = { from: "anna" | "user"; text: string };
type Path = "llc" | "ein" | "agent" | "notary" | "attorney" | "unsure" | null;
type Step =
  | "greeting"
  | "llc-q1" | "llc-q2" | "llc-q3" | "llc-q4"
  | "ein-q1" | "ein-q2"
  | "agent-q1" | "agent-q2"
  | "notary-q1" | "notary-q2"
  | "attorney-q1"
  | "unsure-q1"
  | "lead-capture"
  | "done";

const ANNA_CAN_HELP = [
  "LLC formation intake",
  "EIN preparation guidance",
  "Registered agent inquiries",
  "Notary request routing",
  "Attorney referral coordination",
  "Basic document preparation intake",
  "Appointment requests",
];

function AnnaBubble({ text }: { text: string }) {
  return (
    <div className="flex items-end gap-2.5 max-w-[80%]">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mb-0.5"
        style={{ background: palette.accent }}
      >
        <Bot className="h-4 w-4 text-white" />
      </div>
      <div
        className="rounded-2xl rounded-bl-sm px-4 py-3 text-sm leading-relaxed text-white"
        style={{ background: palette.annaBubble }}
      >
        {text}
      </div>
    </div>
  );
}

function UserBubble({ text }: { text: string }) {
  return (
    <div className="flex justify-end max-w-[80%] ml-auto">
      <div
        className="rounded-2xl rounded-br-sm px-4 py-3 text-sm leading-relaxed text-white"
        style={{ background: palette.userBubble }}
      >
        {text}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2.5">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: palette.accent }}
      >
        <Bot className="h-4 w-4 text-white" />
      </div>
      <div
        className="rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center"
        style={{ background: palette.annaBubble }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block w-2 h-2 rounded-full bg-white/60 animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function ChoiceButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-sm px-4 py-2.5 rounded-xl border transition-all text-left hover:shadow-sm"
      style={{
        borderColor: palette.accent,
        color: palette.accent,
        background: "transparent",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = palette.accent;
        (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
        (e.currentTarget as HTMLButtonElement).style.color = palette.accent;
      }}
    >
      {label}
    </button>
  );
}

const inputClass =
  "w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition";

export default function AnnaDemo() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [step, setStep] = useState<Step>("greeting");
  const [path, setPath] = useState<Path>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [textInput, setTextInput] = useState("");

  // Lead capture
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadTime, setLeadTime] = useState("");
  const [leadSubmitting, setLeadSubmitting] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  // Storage for collected context
  const [context, setContext] = useState<Record<string, string>>({});

  useEffect(() => {
    // Initial Anna greeting
    setTimeout(() => {
      annaMessage(
        "Thank you for contacting Gantt Key Formation Group. I'm Anna. I can help you get started with formation support, notary services, registered agent information, or attorney referral coordination. What are you trying to accomplish today?"
      );
    }, 400);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, step]);

  function annaMessage(text: string, delay = 0) {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { from: "anna", text }]);
    }, 600 + delay);
  }

  function userMessage(text: string) {
    setMessages((prev) => [...prev, { from: "user", text }]);
  }

  function handleGreetingChoice(choice: string, chosenPath: Path) {
    userMessage(choice);
    setPath(chosenPath);

    switch (chosenPath) {
      case "llc":
        setStep("llc-q1");
        annaMessage("Great! Let's get started. What state are you looking to form your LLC in?");
        break;
      case "ein":
        setStep("ein-q1");
        annaMessage("I can help with that. Have you already formed your LLC or corporation?");
        break;
      case "agent":
        setStep("agent-q1");
        annaMessage("I'd be happy to help with registered agent information. What state is your business registered in?");
        break;
      case "notary":
        setStep("notary-q1");
        annaMessage("We offer professional notary services. What type of document needs to be notarized?");
        break;
      case "attorney":
        setStep("attorney-q1");
        annaMessage(
          "We can help route you toward attorney referral information — however, I want to be transparent: Gantt Key Formation Group is not a law firm and does not provide legal advice or legal representation. What type of issue are you trying to get help with?"
        );
        break;
      case "unsure":
        setStep("unsure-q1");
        annaMessage("No problem at all! Can you tell me a little about what you're working on or what you're trying to accomplish?");
        break;
    }
  }

  function handleTextSubmit(fieldKey: string) {
    if (!textInput.trim()) return;
    const val = textInput.trim();
    userMessage(val);
    setContext((prev) => ({ ...prev, [fieldKey]: val }));
    setTextInput("");

    switch (step) {
      // LLC path
      case "llc-q1":
        setStep("llc-q2");
        annaMessage("Got it! What type of business are you starting?");
        break;
      case "llc-q2":
        setStep("llc-q3");
        annaMessage("Perfect. Do you already have a business name picked out?");
        break;
      // Registered agent path
      case "agent-q1":
        setStep("agent-q2");
        annaMessage("Thank you. Are you forming a new company and need a registered agent, or are you looking to replace your current registered agent?");
        break;
      // Notary path
      case "notary-q1":
        setStep("notary-q2");
        annaMessage("Understood. Are you looking for mobile notary assistance (we come to you) or in-office notary support?");
        break;
      // Attorney referral path
      case "attorney-q1":
        setStep("lead-capture");
        annaMessage(
          "Thank you for sharing that. One of our team members will review your information and connect you with the appropriate referral resource. Let me collect a few details to get you to the right place."
        );
        break;
      // Unsure path
      case "unsure-q1":
        setStep("lead-capture");
        annaMessage(
          "That's really helpful — thank you. Let me get your contact details so a member of the Gantt Key team can follow up and make sure you get pointed in the right direction."
        );
        break;
      default:
        break;
    }
  }

  function handleLlcQ3(answer: string) {
    userMessage(answer);
    setContext((prev) => ({ ...prev, hasName: answer }));
    setStep("llc-q4");
    annaMessage("Would you like help checking name availability or preparing your next steps to move forward?");
  }

  function handleLlcQ4(answer: string) {
    userMessage(answer);
    setContext((prev) => ({ ...prev, helpType: answer }));
    setStep("lead-capture");
    annaMessage(
      "Wonderful — you're in the right place! Let me collect a few details so our formation team can reach out and walk you through the next steps."
    );
  }

  function handleEinQ1(answer: string) {
    userMessage(answer);
    setContext((prev) => ({ ...prev, businessFormed: answer }));
    setStep("ein-q2");
    annaMessage("Are you applying for the EIN primarily for banking, taxes, payroll, or vendor setup?");
  }

  function handleEinQ2(answer: string) {
    userMessage(answer);
    setContext((prev) => ({ ...prev, einPurpose: answer }));
    setStep("lead-capture");
    annaMessage(
      "Great — we can assist with EIN preparation and guidance. Let me get your contact information so our team can follow up."
    );
  }

  function handleAgentQ2(answer: string) {
    userMessage(answer);
    setContext((prev) => ({ ...prev, agentType: answer }));
    setStep("lead-capture");
    annaMessage(
      "Perfect. We offer Missouri registered agent services. Let me gather your contact details so a team member can reach out with the specifics."
    );
  }

  function handleNotaryQ2(answer: string) {
    userMessage(answer);
    setContext((prev) => ({ ...prev, notaryType: answer }));
    setStep("lead-capture");
    annaMessage(
      "Got it — we can help with that. Let me collect your contact information so we can schedule your notary appointment."
    );
  }

  function handleLeadSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!leadName || !leadPhone || !leadEmail) return;
    setLeadSubmitting(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "anna",
          text: `Thank you, ${leadName}. A member of the Gantt Key Formation Group team will review your information and contact you with the appropriate next step. We look forward to supporting you!`,
        },
      ]);
      setStep("done");
      setLeadSubmitting(false);
    }, 800);
  }

  function resetDemo() {
    setMessages([]);
    setStep("greeting");
    setPath(null);
    setTextInput("");
    setLeadName("");
    setLeadPhone("");
    setLeadEmail("");
    setLeadTime("");
    setContext({});
    setTimeout(() => {
      annaMessage(
        "Thank you for contacting Gantt Key Formation Group. I'm Anna. I can help you get started with formation support, notary services, registered agent information, or attorney referral coordination. What are you trying to accomplish today?"
      );
    }, 400);
  }

  const showTextInput =
    step === "llc-q1" ||
    step === "llc-q2" ||
    step === "agent-q1" ||
    step === "notary-q1" ||
    step === "attorney-q1" ||
    step === "unsure-q1";

  const textInputPlaceholder: Record<string, string> = {
    "llc-q1": "e.g., Missouri, Texas, Arizona…",
    "llc-q2": "e.g., Consulting, Real Estate, Trucking…",
    "agent-q1": "e.g., Missouri, Georgia…",
    "notary-q1": "e.g., Power of Attorney, Deed, Loan documents…",
    "attorney-q1": "Briefly describe what you need help with…",
    "unsure-q1": "Tell us a little about what you're working on…",
  };

  const textInputFieldKey: Record<string, string> = {
    "llc-q1": "llcState",
    "llc-q2": "businessType",
    "agent-q1": "agentState",
    "notary-q1": "documentType",
    "attorney-q1": "attorneyIssue",
    "unsure-q1": "unsureContext",
  };

  return (
    <>
      <SEO
        title="Anna Demo — 24/7 AI Formation Intake | Gantt Key Formation Group"
        description="Try Anna, Gantt Key's AI intake assistant. See how Anna answers questions about LLC formation, EIN assistance, registered agent services, and notary support — 24/7."
      />

      {/* Page wrapper */}
      <div className="min-h-screen" style={{ background: palette.bg }}>

        {/* Hero */}
        <div style={{ background: palette.annaHead }} className="text-white py-12">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <span
              className="inline-block py-1 px-3 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ background: `${palette.accent}40`, color: "#C4A8D0", border: `1px solid ${palette.accent}50` }}
            >
              Simulation — Interactive Demo
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">
              Meet Anna — Your 24/7 Formation Intake Assistant
            </h1>
            <p className="text-white/65 text-base max-w-xl mx-auto leading-relaxed mb-2">
              Anna helps new business owners get directed to the right formation, notary, registered agent,
              or referral service without waiting for office hours.
            </p>
            <p
              className="text-xs mt-3 font-medium"
              style={{ color: "#C4A8D0" }}
            >
              Meet Anna — Our Apex-Built Receptionist &nbsp;·&nbsp; Powered by{" "}
              <span className="font-semibold">Apex Key Group Holdings, Inc.</span>
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-4 py-10 max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-8 items-start">

            {/* ─── Chat window ─── */}
            <div className="lg:col-span-2 flex flex-col rounded-2xl overflow-hidden shadow-lg border" style={{ background: palette.chatBg, borderColor: palette.border, minHeight: "580px" }}>

              {/* Chat header */}
              <div
                className="flex items-center gap-3 px-5 py-4 border-b"
                style={{ background: palette.annaHead, borderColor: "#1a1515" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: palette.accent }}
                >
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">Anna</p>
                  <p className="text-white/50 text-xs">AI Intake Assistant · Gantt Key Formation Group</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/50 text-xs">Online</span>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4" style={{ maxHeight: "460px" }}>
                {messages.map((m, i) =>
                  m.from === "anna" ? (
                    <AnnaBubble key={i} text={m.text} />
                  ) : (
                    <UserBubble key={i} text={m.text} />
                  )
                )}

                {isTyping && <TypingIndicator />}

                {/* ─── Greeting choices ─── */}
                {step === "greeting" && !isTyping && messages.length === 1 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[
                      { label: "Start an LLC", path: "llc" as Path },
                      { label: "Get an EIN", path: "ein" as Path },
                      { label: "Need a registered agent", path: "agent" as Path },
                      { label: "Need notary help", path: "notary" as Path },
                      { label: "Need attorney referral information", path: "attorney" as Path },
                      { label: "Not sure yet", path: "unsure" as Path },
                    ].map(({ label, path: p }) => (
                      <ChoiceButton key={label} label={label} onClick={() => handleGreetingChoice(label, p)} />
                    ))}
                  </div>
                )}

                {/* ─── LLC Q3 choices ─── */}
                {step === "llc-q3" && !isTyping && (
                  <div className="flex gap-2 flex-wrap pt-1">
                    <ChoiceButton label="Yes, I have a name" onClick={() => handleLlcQ3("Yes, I have a name")} />
                    <ChoiceButton label="Not yet" onClick={() => handleLlcQ3("Not yet")} />
                  </div>
                )}

                {/* ─── LLC Q4 choices ─── */}
                {step === "llc-q4" && !isTyping && (
                  <div className="flex gap-2 flex-wrap pt-1">
                    <ChoiceButton label="Yes, let's check availability" onClick={() => handleLlcQ4("Yes, let's check availability")} />
                    <ChoiceButton label="I need help with next steps" onClick={() => handleLlcQ4("I need help with next steps")} />
                    <ChoiceButton label="Not sure yet" onClick={() => handleLlcQ4("Not sure yet")} />
                  </div>
                )}

                {/* ─── EIN Q1 choices ─── */}
                {step === "ein-q1" && !isTyping && (
                  <div className="flex gap-2 flex-wrap pt-1">
                    <ChoiceButton label="Yes, already formed" onClick={() => handleEinQ1("Yes, already formed")} />
                    <ChoiceButton label="No, forming now" onClick={() => handleEinQ1("No, forming now")} />
                    <ChoiceButton label="Not sure" onClick={() => handleEinQ1("Not sure")} />
                  </div>
                )}

                {/* ─── EIN Q2 choices ─── */}
                {step === "ein-q2" && !isTyping && (
                  <div className="flex gap-2 flex-wrap pt-1">
                    {["Banking", "Taxes", "Payroll", "Vendor setup"].map((opt) => (
                      <ChoiceButton key={opt} label={opt} onClick={() => handleEinQ2(opt)} />
                    ))}
                  </div>
                )}

                {/* ─── Agent Q2 choices ─── */}
                {step === "agent-q2" && !isTyping && (
                  <div className="flex gap-2 flex-wrap pt-1">
                    <ChoiceButton label="Forming a new company" onClick={() => handleAgentQ2("Forming a new company")} />
                    <ChoiceButton label="Replacing current registered agent" onClick={() => handleAgentQ2("Replacing current registered agent")} />
                  </div>
                )}

                {/* ─── Notary Q2 choices ─── */}
                {step === "notary-q2" && !isTyping && (
                  <div className="flex gap-2 flex-wrap pt-1">
                    <ChoiceButton label="Mobile notary (come to me)" onClick={() => handleNotaryQ2("Mobile notary")} />
                    <ChoiceButton label="Online / remote notary" onClick={() => handleNotaryQ2("Online / remote notary")} />
                    <ChoiceButton label="Not sure" onClick={() => handleNotaryQ2("Not sure")} />
                  </div>
                )}

                {/* ─── Lead capture form ─── */}
                {step === "lead-capture" && !isTyping && (
                  <div
                    className="rounded-2xl border p-5 mt-2"
                    style={{ background: "#FAF8F5", borderColor: palette.border }}
                  >
                    <p className="text-sm font-semibold mb-4" style={{ color: palette.annaHead }}>
                      Please share your contact details:
                    </p>
                    <form onSubmit={handleLeadSubmit} className="space-y-3">
                      <input
                        type="text"
                        required
                        placeholder="Full name *"
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        className={inputClass}
                        style={{ borderColor: palette.border }}
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Phone number *"
                        value={leadPhone}
                        onChange={(e) => setLeadPhone(e.target.value)}
                        className={inputClass}
                        style={{ borderColor: palette.border }}
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email address *"
                        value={leadEmail}
                        onChange={(e) => setLeadEmail(e.target.value)}
                        className={inputClass}
                        style={{ borderColor: palette.border }}
                      />
                      <select
                        value={leadTime}
                        onChange={(e) => setLeadTime(e.target.value)}
                        className={inputClass}
                        style={{ borderColor: palette.border, color: leadTime ? "#2A2525" : palette.mutedText }}
                      >
                        <option value="">Best time to contact (optional)</option>
                        <option>Morning (8am – 12pm)</option>
                        <option>Afternoon (12pm – 5pm)</option>
                        <option>Evening (5pm – 8pm)</option>
                        <option>Anytime</option>
                      </select>
                      <button
                        type="submit"
                        disabled={leadSubmitting || !leadName || !leadPhone || !leadEmail}
                        className="w-full rounded-xl py-3 text-sm font-semibold text-white transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        style={{ background: palette.accent }}
                      >
                        {leadSubmitting ? "Submitting…" : (
                          <><Send className="h-4 w-4" /> Submit to Gantt Key Team</>
                        )}
                      </button>
                    </form>
                  </div>
                )}

                {/* ─── Done state ─── */}
                {step === "done" && !isTyping && (
                  <div
                    className="rounded-2xl border p-6 mt-2 text-center"
                    style={{ background: "#FAF8F5", borderColor: palette.border }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                      style={{ background: `${palette.accent}20` }}
                    >
                      <CheckCircle className="h-6 w-6" style={{ color: palette.accent }} />
                    </div>
                    <p className="font-serif font-bold text-lg mb-1" style={{ color: palette.annaHead }}>
                      Your request has been received.
                    </p>
                    <p className="text-sm mb-4" style={{ color: palette.mutedText }}>
                      Next step: our team will contact you using the information provided.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                      <Link href="/services">
                        <span
                          className="inline-block rounded-xl px-4 py-2.5 text-sm font-semibold text-white cursor-pointer"
                          style={{ background: palette.accent }}
                        >
                          View Our Services
                        </span>
                      </Link>
                      <button
                        onClick={resetDemo}
                        className="inline-flex items-center gap-1.5 rounded-xl border px-4 py-2.5 text-sm font-semibold transition"
                        style={{ borderColor: palette.border, color: palette.mutedText }}
                      >
                        <RefreshCw className="h-3.5 w-3.5" /> Start Over
                      </button>
                    </div>
                  </div>
                )}

                <div ref={bottomRef} />
              </div>

              {/* Text input bar */}
              {showTextInput && !isTyping && (
                <div
                  className="px-4 py-3 border-t flex gap-2"
                  style={{ borderColor: palette.border }}
                >
                  <input
                    type="text"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") handleTextSubmit(textInputFieldKey[step] || "answer"); }}
                    placeholder={textInputPlaceholder[step] || "Type your answer…"}
                    className="flex-1 rounded-xl border px-4 py-2.5 text-sm focus:outline-none focus:ring-1 transition"
                    style={{ borderColor: palette.border, focusRingColor: palette.accent } as React.CSSProperties}
                  />
                  <button
                    onClick={() => handleTextSubmit(textInputFieldKey[step] || "answer")}
                    disabled={!textInput.trim()}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white disabled:opacity-40 transition"
                    style={{ background: palette.accent }}
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            {/* ─── Sidebar ─── */}
            <div className="space-y-5">
              <div className="rounded-2xl overflow-hidden border shadow-sm" style={{ borderColor: palette.border }}>
                <div className="px-5 py-4" style={{ background: palette.annaHead }}>
                  <p className="text-white font-semibold text-sm">Anna can help with:</p>
                </div>
                <div className="bg-white px-5 py-4">
                  <ul className="space-y-2.5">
                    {ANNA_CAN_HELP.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: "#4A4542" }}>
                        <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: palette.accent }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border bg-white shadow-sm p-5 space-y-3" style={{ borderColor: palette.border }}>
                <p className="text-sm font-semibold" style={{ color: palette.annaHead }}>Prefer to speak with the team?</p>
                <p className="text-xs leading-relaxed" style={{ color: palette.mutedText }}>
                  Anna is your first point of contact. Loresa reviews every inquiry and follows up personally.
                </p>
                <Link href="/consultation">
                  <span
                    className="block text-center rounded-xl py-2.5 text-sm font-semibold text-white cursor-pointer transition"
                    style={{ background: palette.accent }}
                  >
                    Book a Consultation
                  </span>
                </Link>
                <Link href="/contact">
                  <span
                    className="block text-center rounded-xl border py-2.5 text-sm font-semibold cursor-pointer transition"
                    style={{ borderColor: palette.border, color: palette.mutedText }}
                  >
                    Send a Message
                  </span>
                </Link>
              </div>

              <div className="rounded-2xl border bg-white shadow-sm p-5" style={{ borderColor: palette.border }}>
                <p className="text-xs font-semibold mb-1" style={{ color: palette.annaHead }}>Powered by</p>
                <p className="text-xs font-bold" style={{ color: palette.accent }}>Apex Key Group Holdings, Inc.</p>
                <p className="text-xs mt-2 leading-relaxed" style={{ color: palette.mutedText }}>
                  Anna is an AI intake assistant. Gantt Key Formation Group is responsible for all client service decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Compliance footer */}
          <div
            className="mt-10 rounded-2xl border p-5 text-center"
            style={{ background: "#F0EDE9", borderColor: palette.border }}
          >
            <p className="text-xs leading-relaxed" style={{ color: palette.mutedText }}>
              <strong style={{ color: palette.annaHead }}>Compliance Notice:</strong>{" "}
              Gantt Key Formation Group is not a law firm and does not provide legal advice, tax advice, financial advice, or legal representation. Information collected through this demo is for intake and routing purposes only. This is a simulated demonstration of Anna's intake capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-3 text-xs" style={{ color: palette.mutedText }}>
              <a href="/gantt-karr/privacy-policy" className="hover:underline">Privacy Policy</a>
              <a href="/gantt-karr/terms-of-service" className="hover:underline">Terms of Service</a>
              <a href="/gantt-karr/disclaimer" className="hover:underline">Disclaimer</a>
              <span>info@ganttformationgroup.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
