"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Cpu } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative bg-background text-foreground pt-16 md:pt-24 lg:pt-32">
      <div className="absolute inset-0 opacity-10">
        {/* Subtle background pattern or image if desired */}
      </div>
      <div className="container relative z-10 flex flex-col items-center text-center py-16 md:py-24 lg:py-32">
        <Cpu className="h-16 w-16 md:h-24 md:w-24 mb-6 text-primary animate-pulse" />
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-md">
          EMD.education
        </h1>
        <p className="mt-6 max-w-3xl text-lg sm:text-xl md:text-2xl text-foreground/90 drop-shadow-sm">
          Корпоративное обучение Нейрокодингу и внедрение AI инструментов для российских компаний. Повысьте эффективность вашего бизнеса с передовыми технологиями.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={scrollToContact}>
            Начать сотрудничество <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/70 text-primary hover:bg-primary/10 hover:text-primary" 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Узнать больше об услугах
          </Button>
        </div>
      </div>
      {/* Optional: keep a subtle gradient if background is not pitch black, or remove if it's very dark */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div> */}
    </section>
  );
}
