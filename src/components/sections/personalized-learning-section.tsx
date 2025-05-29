import { SectionWrapper } from "@/components/ui/section-wrapper";
import { PersonalizedLearningForm } from "@/components/personalized-learning-form";
import { Lightbulb } from "lucide-react";

export function PersonalizedLearningSection() {
  return (
    <SectionWrapper id="personalized-learning" className="bg-background">
      <div className="text-center mb-12 md:mb-16">
        <Lightbulb className="h-12 w-12 text-accent mx-auto mb-4 animate-bounce" />
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Персонализированные Планы Обучения с AI</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Наш интеллектуальный инструмент анализирует навыки вашей команды и потребности бизнеса для создания уникальных образовательных траекторий.
        </p>
      </div>
      <PersonalizedLearningForm />
    </SectionWrapper>
  );
}
