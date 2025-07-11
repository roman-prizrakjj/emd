"use client";

import { useActionState } from "react"; // Changed from "react-dom" and "useFormState"
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { generateLearningPathAction, type PersonalizedLearningFormState } from "@/app/actions";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle, AlertTriangle } from "lucide-react";

const initialState: PersonalizedLearningFormState = {
  message: null,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Сгенерировать План
    </Button>
  );
}

export function PersonalizedLearningForm() {
  const [state, formAction] = useActionState(generateLearningPathAction, initialState); // Changed from useFormState
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Успех!",
          description: state.message,
          variant: "default", 
        });
      } else {
        toast({
          title: "Ошибка",
          description: state.message,
          variant: "destructive",
        });
        if (state.errors?._form) {
           state.errors._form.forEach(errMsg => toast({ title: "Ошибка Формы", description: errMsg, variant: "destructive" }));
        }
      }
    }
  }, [state, toast]);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg bg-card text-card-foreground">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Создайте Персональный План Обучения</CardTitle>
        <CardDescription className="text-muted-foreground">
          Введите данные о навыках вашей команды и потребностях компании, чтобы наш AI сгенерировал индивидуальные пути развития.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="teamSkillsData" className="text-lg font-medium text-foreground/90">Навыки Команды</Label>
            <Textarea
              id="teamSkillsData"
              name="teamSkillsData"
              placeholder="Пример: Иван Петров: Python, SQL, Анализ данных\nАнна Сидорова: JavaScript, React, Управление проектами"
              rows={5}
              className="text-base bg-input text-foreground placeholder:text-muted-foreground"
              aria-invalid={!!state.errors?.teamSkillsData}
              aria-describedby="teamSkillsData-error"
            />
            {state.errors?.teamSkillsData && (
              <p id="teamSkillsData-error" className="text-sm text-destructive"> 
                {state.errors.teamSkillsData.join(", ")}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyNeeds" className="text-lg font-medium text-foreground/90">Потребности Компании</Label>
            <Textarea
              id="companyNeeds"
              name="companyNeeds"
              placeholder="Пример: Разработать AI-чатбота для клиентской поддержки, улучшить аналитику данных для маркетинга."
              rows={5}
              className="text-base bg-input text-foreground placeholder:text-muted-foreground"
              aria-invalid={!!state.errors?.companyNeeds}
              aria-describedby="companyNeeds-error"
            />
            {state.errors?.companyNeeds && (
              <p id="companyNeeds-error" className="text-sm text-destructive">
                {state.errors.companyNeeds.join(", ")}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-end pt-4">
          <SubmitButton />
        </CardFooter>
      </form>

      {state.learningPaths && state.success && (
        <div className="mt-6 p-6 border-t border-green-500/30 bg-green-500/10 rounded-b-lg">
          <h3 className="text-xl font-semibold text-green-400 mb-3 flex items-center">
            <CheckCircle className="h-6 w-6 mr-2 text-green-400" />
            Сгенерированный План Обучения:
          </h3>
          <pre className="whitespace-pre-wrap bg-black/20 p-4 rounded-md shadow text-sm text-foreground/90 overflow-x-auto">
            {state.learningPaths}
          </pre>
        </div>
      )}
      {!state.success && state.message && !state.learningPaths && (
         <div className="mt-6 p-6 border-t border-red-500/30 bg-red-500/10 rounded-b-lg">
          <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-center">
            <AlertTriangle className="h-6 w-6 mr-2 text-red-400" />
            Результат:
          </h3>
          <p className="text-red-400">{state.message}</p>
        </div>
      )}
    </Card>
  );
}
