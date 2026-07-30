import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import ProcessServerMissouri from "@/pages/ProcessServerMissouri";
import ProcessServerCity from "@/pages/ProcessServerCity";
import ProcessServerLawFirms from "@/pages/ProcessServerLawFirms";
import BlogAvoidingService from "@/pages/BlogAvoidingService";
import Attorneys from "@/pages/Attorneys";
import TermsOfService from "@/pages/TermsOfService";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import NotaryServices from "@/pages/NotaryServices";
import { ChatWidget } from "@/components/ChatWidget";
import { SocialProofPopup } from "@/components/SocialProofPopup";
import { cities, getCityBySlug } from "@/data/cities";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location]);
  return null;
}

const queryClient = new QueryClient();

function CityRoute({ params }: { params: { city: string } }) {
  const city = getCityBySlug(params.city);
  if (!city) return <NotFound />;
  return <ProcessServerCity city={city} />;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/attorneys" component={Attorneys} />
        <Route path="/notary-services" component={NotaryServices} />
        <Route path="/terms" component={TermsOfService} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/process-server-missouri" component={ProcessServerMissouri} />
        <Route path="/process-server-law-firms" component={ProcessServerLawFirms} />
        <Route path="/blog/avoiding-service-missouri" component={BlogAvoidingService} />
        {cities.map((city) => (
          <Route key={city.slug} path={`/process-server-${city.slug}-mo`}>
            {() => <ProcessServerCity city={city} />}
          </Route>
        ))}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <ChatWidget />
        <SocialProofPopup />
        <Toaster />
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
