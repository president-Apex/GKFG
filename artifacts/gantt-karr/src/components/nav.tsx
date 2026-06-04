import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const keyServices = [
  { label: "LLC Formation Assistance", href: "/services/llc-formation" },
  { label: "Corporation Filing Assistance", href: "/services/corporation-filing" },
  { label: "EIN Application Assistance", href: "/services/ein-assistance" },
  { label: "Missouri Registered Agent", href: "/services/registered-agent", badge: "MO & KS Exclusive" },
  { label: "Mobile Notary Services", href: "/services/mobile-notary", badge: "Coming Soon" },
  { label: "Online Notary Services", href: "/services/online-notary", badge: "Coming Soon" },
  { label: "Loan Signing Services", href: "/loan-signing", badge: "MO & KS Exclusive" },
  { label: "Startup Packages", href: "/services/launch-packages" },
  { label: "Anna AI Intake", href: "/services/anna-ai-intake" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col gap-0.5">
          <span className="font-serif font-bold text-xl tracking-tight text-primary">Gantt Key Formation Group</span>
          <span className="text-[10px] text-muted-foreground hidden md:inline-block uppercase tracking-wider">Founder-Led Business Formation</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[520px] p-4">
                    <Link
                      href="/services"
                      className="block font-semibold text-primary hover:text-secondary transition-colors text-sm mb-4 pb-3 border-b border-border"
                    >
                      View All Services &rarr;
                    </Link>
                    <ul className="grid grid-cols-2 gap-1">
                      {keyServices.map((s) => (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            className="flex items-center justify-between gap-2 p-2 hover:bg-muted rounded-md text-sm text-foreground/80 hover:text-foreground transition-colors group"
                          >
                            <span>{s.label}</span>
                            {s.badge && (
                              <span className="text-[9px] font-bold uppercase tracking-wider bg-secondary/15 text-secondary border border-secondary/20 rounded-full px-1.5 py-0.5 flex-shrink-0">
                                {s.badge}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>States</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[320px] gap-1 p-4">
                    {[
                      { name: "Missouri", slug: "missouri", region: "Kansas City Metro — Home State" },
                      { name: "Kansas", slug: "kansas", region: "KC Metro & Johnson County" },
                      { name: "Arizona", slug: "arizona", region: "Phoenix & Scottsdale" },
                      { name: "Tennessee", slug: "tennessee", region: "Nashville Metro" },
                      { name: "North Carolina", slug: "north-carolina", region: "Charlotte Metro" },
                      { name: "Georgia", slug: "georgia", region: "Atlanta Metro" },
                      { name: "Montana", slug: "montana", region: "Statewide + Out-of-State Investors" },
                    ].map((s) => (
                      <li key={s.slug}>
                        <Link href={`/states/${s.slug}`} className="block p-2 hover:bg-muted rounded-md text-sm">
                          <div className="font-medium">{s.name}</div>
                          <div className="text-muted-foreground text-xs mt-0.5">{s.region}</div>
                        </Link>
                      </li>
                    ))}
                    <li className="border-t border-border mt-1 pt-1">
                      <Link href="/states" className="block p-2 hover:bg-muted rounded-md text-sm font-semibold text-secondary">
                        View All 7 States →
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[340px] gap-1 p-4">
                    <li>
                      <Link href="/resources" className="block p-2 hover:bg-muted rounded-md text-sm">
                        <div className="font-medium">Resource Hub</div>
                        <div className="text-muted-foreground text-xs mt-0.5">Guides, checklists, and articles</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources/professional-center" className="block p-2 hover:bg-muted rounded-md text-sm">
                        <div className="font-medium">Professional Center</div>
                        <div className="text-muted-foreground text-xs mt-0.5">Connect with licensed experts</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="block p-2 hover:bg-muted rounded-md text-sm">
                        <div className="font-medium">Blog & Articles</div>
                        <div className="text-muted-foreground text-xs mt-0.5">Formation guides and startup tips</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/locations" className="block p-2 hover:bg-muted rounded-md text-sm">
                        <div className="font-medium">Locations Served</div>
                        <div className="text-muted-foreground text-xs mt-0.5">Find support in your state</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="block p-2 hover:bg-muted rounded-md text-sm">
                        <div className="font-medium">FAQ</div>
                        <div className="text-muted-foreground text-xs mt-0.5">Common formation questions</div>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-3">
            <Link href="/pricing">
              <Button variant="ghost" size="sm" className="hidden xl:inline-flex text-foreground/70 hover:text-foreground">Pricing</Button>
            </Link>
            <Link href="/founding-partners">
              <Button variant="ghost" size="sm" className="hidden xl:inline-flex text-foreground/70 hover:text-foreground">Partners</Button>
            </Link>
            <Link href="/consultation">
              <Button variant="ghost" size="sm" className="hidden xl:inline-flex">Book Consultation</Button>
            </Link>
            <Link href="/how-it-works">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">Start My Business Setup</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <div className="flex flex-col gap-5 pt-10">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-primary">Home</Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium">About</Link>

                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-semibold">Services</h4>
                  <Link href="/services" onClick={() => setIsOpen(false)} className="text-secondary text-sm font-medium ml-2">View All Services &rarr;</Link>
                  {keyServices.map((s) => (
                    <Link key={s.href} href={s.href} onClick={() => setIsOpen(false)} className="text-muted-foreground text-sm ml-2 hover:text-foreground transition-colors">
                      {s.label}{s.badge ? ` (${s.badge})` : ""}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-semibold">Resources</h4>
                  <Link href="/resources" onClick={() => setIsOpen(false)} className="text-muted-foreground text-sm ml-2">Resource Hub</Link>
                  <Link href="/resources/professional-center" onClick={() => setIsOpen(false)} className="text-muted-foreground text-sm ml-2">Professional Center</Link>
                  <Link href="/blog" onClick={() => setIsOpen(false)} className="text-muted-foreground text-sm ml-2">Blog & Articles</Link>
                  <Link href="/locations" onClick={() => setIsOpen(false)} className="text-muted-foreground text-sm ml-2">Locations Served</Link>
                  <Link href="/faq" onClick={() => setIsOpen(false)} className="text-muted-foreground text-sm ml-2">FAQ</Link>
                </div>

                <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-lg font-medium">Pricing</Link>
                <Link href="/states" onClick={() => setIsOpen(false)} className="text-lg font-medium">States</Link>
                <Link href="/founding-partners" onClick={() => setIsOpen(false)} className="text-lg font-medium">Partners</Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium">Contact</Link>

                <div className="mt-6 flex flex-col gap-3">
                  <Link href="/consultation" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">Book Free Consultation</Button>
                  </Link>
                  <Link href="/how-it-works" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Start My Business Setup</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
