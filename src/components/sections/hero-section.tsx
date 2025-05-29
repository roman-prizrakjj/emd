"use client";

import { Button, buttonVariants } from "@/components/ui/button";
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
    <section id="hero" className="relative bg-gradient-to-b from-background to-primary/20 text-foreground pt-16 md:pt-24 lg:pt-32">
      <div className="absolute inset-0 opacity-10">
        {/* Subtle background pattern or image if desired */}
      </div>
      <div className="container relative z-10 flex flex-col items-center text-center py-16 md:py-24 lg:py-32">
        <Cpu className="h-16 w-16 md:h-24 md:w-24 mb-6 text-accent animate-pulse" />
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-md">
          EMD.education
        </h1>
        <p className="mt-6 max-w-3xl text-lg sm:text-xl md:text-2xl text-foreground/90 drop-shadow-sm">
          Корпоративное обучение Нейрокодингу и внедрение AI инструментов для российских компаний. Повысьте эффективность вашего бизнеса с передовыми технологиями.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={scrollToContact}>
            Начать сотрудничество <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-foreground/50 text-foreground hover:bg-foreground/10 hover:text-background" 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Узнать больше об услугах
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
