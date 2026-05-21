import { useEffect } from "react";
import { useLocation } from "wouter";
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
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <CookieBanner />
      <SocialProof />
    </div>
  );
}
