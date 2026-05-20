import { Nav } from "./nav";
import { Footer } from "./footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Nav />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
