import { Nav } from "./nav";
import { Footer } from "./footer";
import { SocialProof } from "./social-proof";
import { CookieBanner } from "./cookie-banner";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Nav />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <SocialProof />
      <CookieBanner />
    </div>
  );
}
