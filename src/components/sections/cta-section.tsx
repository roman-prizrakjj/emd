import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";

export function CtaSection() {
  return (
    <SectionWrapper id="contact" className="bg-primary text-primary-foreground">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы Трансформировать Ваш Бизнес?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Свяжитесь с нами сегодня, чтобы обсудить ваши потребности в обучении и внедрении AI. Наша команда экспертов поможет вам разработать индивидуальное решение.
          </p>
          <div className="space-y-6">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
              <Mail className="mr-2 h-5 w-5" /> Запросить консультацию
            </Button>
            <div className="flex items-center space-x-3 text-primary-foreground/90">
              <Phone className="h-6 w-6" />
              <span>+7 (XXX) XXX-XX-XX</span>
            </div>
            <div className="flex items-center space-x-3 text-primary-foreground/90">
              <Mail className="h-6 w-6" />
              <span>info@neurocodepro.ru</span>
            </div>
          </div>
        </div>
        <div className="hidden md:block relative aspect-square max-w-md mx-auto">
           <Image
            src="https://placehold.co/600x600.png"
            alt="Команда NeuroCodePro обсуждает проект"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-2xl"
            data-ai-hint="team meeting"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
