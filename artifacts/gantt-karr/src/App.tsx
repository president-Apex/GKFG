import { Router as WouterRouter, Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout";

import Home from "@/pages/home";
import About from "@/pages/about";
import MeetTheFounder from "@/pages/meet-the-founder";
import MeetKaileyanne from "@/pages/meet-kaileyanne";
import MeetAnna from "@/pages/meet-anna";
import Contact from "@/pages/contact";
import Partner from "@/pages/partner";
import ServicesHub from "@/pages/services-hub";
import HowItWorks from "@/pages/how-it-works";
import Pricing from "@/pages/pricing";
import Consultation from "@/pages/consultation";
import FAQ from "@/pages/faq";
import Blog from "@/pages/blog";
import ResourcesHub from "@/pages/resources-hub";
import LocationsHub from "@/pages/locations-hub";
import ServiceDetail from "@/pages/service-detail";
import ResourceDetail from "@/pages/resource-detail";
import LocationDetail from "@/pages/location-detail";
import CorporationFiling from "@/pages/corporation-filing";
import BOIReporting from "@/pages/boi-reporting";
import RegisteredAgentMissouri from "@/pages/registered-agent-missouri";
import PrivacyPolicy from "@/pages/privacy-policy";
import CookiePolicy from "@/pages/cookie-policy";
import TermsOfService from "@/pages/terms-of-service";
import MessagingTerms from "@/pages/messaging-terms";
import DisclaimerPage from "@/pages/disclaimer";
import DocumentUpload from "@/pages/document-upload";
import RefundPolicy from "@/pages/refund-policy";
import ServiceAgreement from "@/pages/service-agreement";
import ClientIntake from "@/pages/client-intake";
import FormationQuestionnaire from "@/pages/formation-questionnaire";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/meet-the-founder" component={MeetTheFounder} />
        <Route path="/meet-kaileyanne" component={MeetKaileyanne} />
        <Route path="/meet-anna" component={MeetAnna} />
        <Route path="/contact" component={Contact} />
        <Route path="/become-a-partner" component={Partner} />
        <Route path="/services" component={ServicesHub} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/consultation" component={Consultation} />
        <Route path="/faq" component={FAQ} />
        <Route path="/blog" component={Blog} />
        <Route path="/resources" component={ResourcesHub} />
        <Route path="/locations" component={LocationsHub} />
        <Route path="/services/corporation-filing" component={CorporationFiling} />
        <Route path="/services/boi-reporting" component={BOIReporting} />
        <Route path="/services/registered-agent" component={RegisteredAgentMissouri} />
        <Route path="/services/:slug" component={ServiceDetail} />
        <Route path="/resources/:type" component={ResourceDetail} />
        <Route path="/locations/:state/:city" component={LocationDetail} />
        <Route path="/locations/:state" component={LocationDetail} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/cookie-policy" component={CookiePolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/messaging-terms" component={MessagingTerms} />
        <Route path="/disclaimer" component={DisclaimerPage} />
        <Route path="/documents" component={DocumentUpload} />
        <Route path="/refund-policy" component={RefundPolicy} />
        <Route path="/service-agreement" component={ServiceAgreement} />
        <Route path="/client-intake" component={ClientIntake} />
        <Route path="/formation-questionnaire" component={FormationQuestionnaire} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
