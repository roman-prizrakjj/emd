import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { ServiceItem } from "@/types";
import { GraduationCap, BrainCircuit, Settings2, GitMerge, Cpu, LifeBuoy, Zap } from "lucide-react";

const services: ServiceItem[] = [
  {
    icon: GraduationCap,
    title: "Обучающие Программы",
    description: "Комплексные корпоративные тренинги по нейрокодингу и внедрению AI-инструментов.",
    keywords: "education online course"
  },
  {
    icon: BrainCircuit,
    title: "Персонализированное Обучение",
    description: "AI-инструмент для оценки навыков команды и создания индивидуальных планов развития.",
    keywords: "ai machine learning"
  },
  {
    icon: Settings2,
    title: "Консалтинг по Рабочим Пространствам",
    description: "Помощь в создании специализированных, AI-оптимизированных рабочих мест для нейрокодинга.",
    keywords: "office workspace"
  },
  {
    icon: GitMerge,
    title: "Поддержка Интеграции",
    description: "Руководство по интеграции AI-инструментов в существующие CI/CD пайплайны и рабочие процессы.",
    keywords: "teamwork collaboration"
  },
  {
    icon: Cpu,
    title: "Фокус на Российские AI",
    description: "Обучение работе с российскими AI-платформами, такими как GigaCode и Yandex Code Assistant.",
    keywords: "technology server"
  },
  {
    icon: LifeBuoy,
    title: "Постоянная Поддержка",
    description: "Непрерывная поддержка и ресурсы для развития навыков и эффективного внедрения AI.",
    keywords: "support help"
  },
];

export function ServicesSection() {
  return (
    <SectionWrapper id="services" className="bg-background">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Наши Услуги</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Мы предлагаем полный спектр передовых решений для трансформации вашего бизнеса с помощью искусственного интеллекта.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col bg-card hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <CardHeader className="bg-muted p-6">
              <div className="flex items-center space-x-4">
                <service.icon className="h-10 w-10 text-primary" />
                <CardTitle className="text-xl font-semibold text-primary">{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardDescription className="text-card-foreground">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

