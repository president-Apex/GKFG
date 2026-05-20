import { useState, useEffect } from "react";
import { Link } from "wouter";
import { X, Cookie, ChevronDown, ChevronUp } from "lucide-react";
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
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
        disabled
          ? "bg-emerald-400 cursor-not-allowed opacity-80"
          : checked
          ? "bg-emerald-500"
          : "bg-gray-300"
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
    <div className="border border-gray-100 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between gap-4 px-4 py-3 bg-white">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-2 text-sm font-medium text-[#2D2D2D] flex-1 text-left"
        >
          {open ? (
            <ChevronUp className="h-3.5 w-3.5 text-gray-400" />
          ) : (
            <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
          )}
          {label}
        </button>
        <div className="flex items-center gap-2 flex-shrink-0">
          {always && (
            <span className="text-[11px] text-emerald-600 font-medium">Always Active</span>
          )}
          <Toggle checked={checked} onChange={onChange} disabled={always} />
        </div>
      </div>
      {open && (
        <div className="px-4 pb-3 pt-1 text-[13px] text-[#6B7280] bg-gray-50 border-t border-gray-100">
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
      {shown && !modalOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-[9998] p-4 sm:p-6">
          <div className="max-w-4xl mx-auto bg-[#FAFAF7] rounded-2xl shadow-2xl border border-gray-100 p-5 sm:p-7">
            <div className="flex items-start gap-3 mb-4">
              <Cookie className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <h2 className="font-serif font-bold text-[#2D2D2D] text-lg mb-2">Your Privacy Matters</h2>
                <p className="text-[13px] text-[#4B5563] leading-relaxed">
                  Gantt & Karr Formation Group uses cookies and similar technologies to improve website
                  functionality, enhance your experience, analyze site traffic, and support our services.
                  By clicking "Accept All," you consent to the use of cookies in accordance with our{" "}
                  <Link href="/privacy-policy" className="text-emerald-600 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-5">
              <Button
                onClick={acceptAll}
                className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-6 text-sm h-9 font-medium w-full sm:w-auto"
              >
                Accept All
              </Button>
              <Button
                variant="outline"
                onClick={() => setModalOpen(true)}
                className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 rounded-lg px-6 text-sm h-9 font-medium w-full sm:w-auto"
              >
                Customize Preferences
              </Button>
              <Link
                href="/privacy-policy"
                className="text-[12px] text-[#9CA3AF] hover:text-emerald-600 underline underline-offset-2 sm:ml-auto"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 z-[10000] flex items-end sm:items-center justify-center p-4 bg-black/40">
          <div className="bg-[#FAFAF7] rounded-2xl shadow-2xl border border-gray-100 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-emerald-500" />
                <h2 className="font-serif font-bold text-[#2D2D2D] text-lg">Cookie Preferences</h2>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="text-gray-400 hover:text-[#2D2D2D] transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-6 py-5 space-y-3">
              <p className="text-[13px] text-[#6B7280] mb-4">
                Manage which cookies you allow. Essential cookies are always active as they are required
                for the site to function properly.
              </p>

              <CategoryRow
                label="Essential Cookies"
                description="Required for the website to function. These include session management, security, and core functionality. Cannot be disabled."
                checked={true}
                always
              />
              <CategoryRow
                label="Analytics Cookies"
                description="Help us understand how visitors interact with our site — including pages visited, time spent, and traffic sources — so we can improve our services. (e.g. Google Analytics)"
                checked={prefs.analytics}
                onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
              />
              <CategoryRow
                label="Marketing Cookies"
                description="Used to track visitors across websites and display relevant ads. (e.g. Meta Pixel, Google Ads) We do not sell your data."
                checked={prefs.marketing}
                onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
              />
              <CategoryRow
                label="Functional Cookies"
                description="Enable enhanced functionality such as chat widgets, embedded forms, and personalized content preferences."
                checked={prefs.functional}
                onChange={(v) => setPrefs((p) => ({ ...p, functional: v }))}
              />
            </div>

            <div className="px-6 pb-6 pt-2 flex flex-col gap-3 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  onClick={acceptAll}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm h-9 font-medium flex-1"
                >
                  Accept All
                </Button>
                <Button
                  onClick={saveCustom}
                  variant="outline"
                  className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 rounded-lg text-sm h-9 font-medium flex-1"
                >
                  Save Preferences
                </Button>
              </div>
              <button
                onClick={rejectOptional}
                className="text-[12px] text-center text-[#9CA3AF] hover:text-emerald-600 underline underline-offset-2 transition-colors"
              >
                Reject Optional Cookies
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
