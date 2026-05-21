import { useState, useEffect } from "react";
import { Link } from "wouter";
import { X, Cookie, ChevronDown, ChevronUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "gk_cookie_consent";

type Preferences = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
};

function loadPreferences(): Preferences | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Preferences;
  } catch {
    return null;
  }
}

function savePreferences(prefs: Preferences) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    /* ignore */
  }
}

function Toggle({
  checked,
  onChange,
  disabled,
}: {
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
        disabled
          ? "bg-secondary/70 cursor-not-allowed"
          : checked
          ? "bg-secondary"
          : "bg-border"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

function CategoryRow({
  label,
  description,
  checked,
  onChange,
  always,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange?: (v: boolean) => void;
  always?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <div className="flex items-center justify-between gap-4 px-4 py-3 bg-card">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-2 text-sm font-medium text-foreground flex-1 text-left"
        >
          {open ? (
            <ChevronUp className="h-3.5 w-3.5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
          )}
          {label}
        </button>
        <div className="flex items-center gap-2 flex-shrink-0">
          {always && (
            <span className="text-[11px] text-secondary font-semibold">Always On</span>
          )}
          <Toggle checked={checked} onChange={onChange} disabled={always} />
        </div>
      </div>
      {open && (
        <div className="px-4 pb-3 pt-2 text-[13px] text-muted-foreground bg-muted/30 border-t border-border leading-relaxed">
          {description}
        </div>
      )}
    </div>
  );
}

export function CookieBanner() {
  const [shown, setShown] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [prefs, setPrefs] = useState<Preferences>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const saved = loadPreferences();
    if (saved) {
      setPrefs(saved);
      setShown(false);
    } else {
      setShown(true);
    }
  }, []);

  function acceptAll() {
    const full: Preferences = { essential: true, analytics: true, marketing: true, functional: true };
    savePreferences(full);
    setPrefs(full);
    setShown(false);
    setModalOpen(false);
  }

  function rejectOptional() {
    const minimal: Preferences = { essential: true, analytics: false, marketing: false, functional: false };
    savePreferences(minimal);
    setPrefs(minimal);
    setShown(false);
    setModalOpen(false);
  }

  function saveCustom() {
    savePreferences(prefs);
    setShown(false);
    setModalOpen(false);
  }

  if (!shown && !modalOpen) return null;

  return (
    <>
      {/* Banner */}
      {shown && !modalOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-[9998] p-4 sm:p-6">
          <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-2xl border border-border p-5 sm:p-6">
            <div className="flex items-start gap-3 mb-4">
              <Cookie className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <h2 className="font-serif font-bold text-foreground text-base mb-2">
                  🍪 Gantt & Karr Formation Group Website Preferences
                </h2>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  At Gantt & Karr Formation Group, we use cookies and similar technologies to create a smoother experience for our visitors. Cookies help us remember your preferences, understand website activity, improve performance, support secure forms and appointment scheduling, and provide a better overall experience.
                  {" "}We respect your privacy and do not sell your personal information. You can manage your preferences at any time.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mt-4 mb-3">
              <Button
                onClick={acceptAll}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-5 text-sm h-9 font-semibold w-full sm:w-auto"
              >
                Accept All Cookies
              </Button>
              <Button
                variant="outline"
                onClick={() => setModalOpen(true)}
                className="border-border text-foreground hover:bg-muted rounded-lg px-5 text-sm h-9 w-full sm:w-auto"
              >
                Manage Preferences
              </Button>
              <button
                onClick={rejectOptional}
                className="text-[12px] text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors px-2 text-center sm:text-left"
              >
                Decline Non-Essential Cookies
              </button>
            </div>

            <p className="text-[11px] text-muted-foreground/70 leading-relaxed border-t border-border pt-3">
              By continuing to use our website, you agree to our use of essential website technologies as outlined in our{" "}
              <Link href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>
              {" "}and{" "}
              <Link href="/terms-of-service" className="text-secondary hover:underline">Terms of Service</Link>.
            </p>
          </div>
        </div>
      )}

      {/* Preferences modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[10000] flex items-end sm:items-center justify-center p-4 bg-black/50">
          <div className="bg-card rounded-2xl shadow-2xl border border-border w-full max-w-lg max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-secondary" />
                <h2 className="font-serif font-bold text-foreground text-lg">Cookie Preferences</h2>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5 space-y-3">
              <p className="text-[13px] text-muted-foreground mb-4 leading-relaxed">
                Manage which cookies you allow. Essential cookies are always active — they are required for the site to function properly, including secure forms and appointment scheduling.
              </p>

              <CategoryRow
                label="Essential Cookies"
                description="Required for the website to function. These include session management, security, secure forms, and core functionality. Cannot be disabled."
                checked={true}
                always
              />
              <CategoryRow
                label="Performance & Analytics"
                description="Help us understand how visitors interact with our site — including pages visited, time spent, and traffic sources — so we can improve our services. (e.g. Google Analytics)"
                checked={prefs.analytics}
                onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
              />
              <CategoryRow
                label="Functional Preferences"
                description="Enable enhanced functionality such as chat widgets, embedded forms, saved preferences, and personalized content to improve your experience across visits."
                checked={prefs.functional}
                onChange={(v) => setPrefs((p) => ({ ...p, functional: v }))}
              />
              <CategoryRow
                label="Marketing & Advertising"
                description="Used to display relevant ads and track campaign effectiveness across websites. (e.g. Meta Pixel, Google Ads) We do not sell your personal information."
                checked={prefs.marketing}
                onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
              />
            </div>

            {/* Footer */}
            <div className="px-6 pb-6 pt-2 border-t border-border">
              <div className="flex flex-col sm:flex-row gap-3 pt-4 mb-3">
                <Button
                  onClick={acceptAll}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-sm h-9 font-semibold flex-1"
                >
                  Accept All Cookies
                </Button>
                <Button
                  onClick={saveCustom}
                  variant="outline"
                  className="border-border text-foreground hover:bg-muted rounded-lg text-sm h-9 flex-1"
                >
                  Save My Preferences
                </Button>
              </div>
              <button
                onClick={rejectOptional}
                className="text-[12px] w-full text-center text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
              >
                Decline Non-Essential Cookies
              </button>
              <p className="text-[11px] text-muted-foreground/70 leading-relaxed mt-4 text-center">
                By continuing to use our website, you agree to our use of essential website technologies as outlined in our{" "}
                <Link href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>
                {" "}and{" "}
                <Link href="/terms-of-service" className="text-secondary hover:underline">Terms of Service</Link>.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
