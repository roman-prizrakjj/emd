"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Brain } from "lucide-react";
import * as React from "react";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (href: string) => {
    setMobileNavOpen(false);
    const element = document.getElementById(href.substring(2)); // Remove '/#'
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-border" : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl text-primary">{siteConfig.name}</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {siteConfig.mainNav.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavLinkClick(item.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                "text-foreground" 
              )}
            >
              {item.title}
            </button>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className={cn("text-foreground")} />
                <span className="sr-only">Открыть меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background text-foreground">
              <div className="flex flex-col space-y-4 p-4">
                <Link href="/" className="flex items-center space-x-2 mb-4" onClick={() => setMobileNavOpen(false)}>
                  <Brain className="h-8 w-8 text-primary" />
                  <span className="font-bold text-xl text-primary">{siteConfig.name}</span>
                </Link>
                {siteConfig.mainNav.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavLinkClick(item.href)}
                    className="text-left text-lg font-medium text-foreground hover:text-primary"
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
