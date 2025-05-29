"use server";

import { generatePersonalizedLearningPath, type GeneratePersonalizedLearningPathInput, type GeneratePersonalizedLearningPathOutput } from "@/ai/flows/generate-personalized-learning-path";
import { z } from "zod";

const PersonalizedLearningSchema = z.object({
  teamSkillsData: z.string().min(10, "Пожалуйста, предоставьте информацию о навыках команды (минимум 10 символов)."),
  companyNeeds: z.string().min(10, "Пожалуйста, опишите потребности компании (минимум 10 символов)."),
});

export interface PersonalizedLearningFormState {
  message: string | null;
  learningPaths?: string;
  errors?: {
    teamSkillsData?: string[];
    companyNeeds?: string[];
    _form?: string[];
  };
  success: boolean;
}

export async function generateLearningPathAction(
  prevState: PersonalizedLearningFormState,
  formData: FormData
): Promise<PersonalizedLearningFormState> {
  const rawData = {
    teamSkillsData: formData.get("teamSkillsData"),
    companyNeeds: formData.get("companyNeeds"),
  };

  const validatedFields = PersonalizedLearningSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      message: "Ошибка валидации. Пожалуйста, проверьте введенные данные.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    const input: GeneratePersonalizedLearningPathInput = {
      teamSkillsData: validatedFields.data.teamSkillsData,
      companyNeeds: validatedFields.data.companyNeeds,
    };
    const result: GeneratePersonalizedLearningPathOutput = await generatePersonalizedLearningPath(input);
    
    return {
      message: "Персонализированный план обучения успешно сгенерирован!",
      learningPaths: result.learningPaths,
      success: true,
    };
  } catch (error) {
    console.error("Error generating learning path:", error);
    return {
      message: "Произошла ошибка при генерации плана обучения. Пожалуйста, попробуйте еще раз.",
      errors: { _form: ["Не удалось связаться с AI сервисом."] },
      success: false,
    };
  }
}
