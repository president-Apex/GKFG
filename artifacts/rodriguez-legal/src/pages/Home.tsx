import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { PainPoints } from "@/components/PainPoints";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { About } from "@/components/About";
import { Pricing } from "@/components/Pricing";
import { AttorneyReferral } from "@/components/AttorneyReferral";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <PainPoints />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <About />
        <Pricing />
        <AttorneyReferral />
        <ServiceAreas />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
