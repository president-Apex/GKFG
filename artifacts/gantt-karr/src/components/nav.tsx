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

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col gap-0.5">
          <span className="font-serif font-bold text-xl tracking-tight text-primary">G&K Formation Group</span>
          <span className="text-[10px] text-muted-foreground hidden md:inline-block uppercase tracking-wider">Family-Led Business Formation</span>
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
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="col-span-2 pb-2 mb-2 border-b border-border">
                      <Link href="/services" className="font-medium text-primary hover:text-secondary transition-colors block">
                        View All Services &rarr;
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/llc-formation" className="block p-2 hover:bg-muted rounded-md text-sm">
                        <div className="font-medium">LLC Formation</div>
                        <div className="text-muted-foreground text-xs mt-1">Start your business structure</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/notary" className="block p-2 hover:bg-muted rounded-md text-sm">
                        <div className="font-medium">Notary Services</div>
                        <div className="text-muted-foreground text-xs mt-1">Professional document notarization</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/startup-consultation" className="block p-2 hover:bg-muted rounded-md text-sm">
                        <div className="font-medium">Startup Consultation</div>
                        <div className="text-muted-foreground text-xs mt-1">Strategic guidance for launch</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/anna-ai-intake" className="block p-2 hover:bg-muted rounded-md text-sm">
                        <div className="font-medium">AI Intake Setup</div>
                        <div className="text-muted-foreground text-xs mt-1">Powered by Anna AI</div>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <Link href="/resources" className="block p-2 hover:bg-muted rounded-md text-sm">
                        <div className="font-medium">Resource Hub</div>
                        <div className="text-muted-foreground text-xs mt-1">Guides, checklists, and articles</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources/professional-center" className="block p-2 hover:bg-muted rounded-md text-sm">
                        <div className="font-medium">Professional Center</div>
                        <div className="text-muted-foreground text-xs mt-1">Connect with licensed experts</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/locations" className="block p-2 hover:bg-muted rounded-md text-sm">
                        <div className="font-medium">Locations Served</div>
                        <div className="text-muted-foreground text-xs mt-1">Find support in your state</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="block p-2 hover:bg-muted rounded-md text-sm">
                        <div className="font-medium">FAQ</div>
                        <div className="text-muted-foreground text-xs mt-1">Common formation questions</div>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Link href="/consultation">
              <Button variant="ghost" className="hidden xl:inline-flex">Book Consultation</Button>
            </Link>
            <Link href="/how-it-works">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Start My Business Setup</Button>
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
              <div className="flex flex-col gap-6 pt-10">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">Home</Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium">About</Link>
                <div className="flex flex-col gap-3">
                  <h4 className="text-lg font-medium">Services</h4>
                  <Link href="/services" onClick={() => setIsOpen(false)} className="text-muted-foreground ml-4">All Services</Link>
                  <Link href="/services/llc-formation" onClick={() => setIsOpen(false)} className="text-muted-foreground ml-4">LLC Formation</Link>
                  <Link href="/services/notary" onClick={() => setIsOpen(false)} className="text-muted-foreground ml-4">Notary Services</Link>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-lg font-medium">Resources</h4>
                  <Link href="/resources/professional-center" onClick={() => setIsOpen(false)} className="text-muted-foreground ml-4">Professional Center</Link>
                  <Link href="/locations" onClick={() => setIsOpen(false)} className="text-muted-foreground ml-4">Locations Served</Link>
                  <Link href="/faq" onClick={() => setIsOpen(false)} className="text-muted-foreground ml-4">FAQ</Link>
                </div>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium">Contact</Link>
                
                <div className="mt-8 flex flex-col gap-4">
                  <Link href="/consultation" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">Book Free Consultation</Button>
                  </Link>
                  <Link href="/how-it-works" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">Start My Business Setup</Button>
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
