import { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { Nav } from "./nav";
import { Footer } from "./footer";
import { CookieBanner } from "./cookie-banner";
import { SocialProof } from "./social-proof";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <ScrollToTop />
      <Nav />
      <main className="flex-grow pb-[52px] md:pb-0">
        {children}
      </main>
      <Footer />
      <CookieBanner />
      <SocialProof />
      {/* Mobile sticky CTA — hidden on md+ */}
      <Link href="/how-it-works" className="md:hidden">
        <div
          className="fixed bottom-0 left-0 right-0 z-[1000] flex items-center justify-center font-bold text-sm"
          style={{ height: "52px", background: "#C9A84C", color: "#1a2f4e" }}
        >
          Start My Business Setup →
        </div>
      </Link>
    </div>
  );
}
