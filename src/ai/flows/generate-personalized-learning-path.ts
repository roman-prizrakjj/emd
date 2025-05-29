'use server';
/**
 * @fileOverview Generates personalized learning paths for team members based on their skills and company needs.
 *
 * - generatePersonalizedLearningPath - A function that generates personalized learning paths.
 * - GeneratePersonalizedLearningPathInput - The input type for the generatePersonalizedLearningPath function.
 * - GeneratePersonalizedLearningPathOutput - The return type for the generatePersonalizedLearningPath function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedLearningPathInputSchema = z.object({
  teamSkillsData: z
    .string()
    .describe(
      'A string containing team members skills data, each member separated by newlines, and each skill separated by commas.'
    ),
  companyNeeds: z
    .string()
    .describe('A description of the company needs and focus areas.'),
});
export type GeneratePersonalizedLearningPathInput = z.infer<typeof GeneratePersonalizedLearningPathInputSchema>;

const GeneratePersonalizedLearningPathOutputSchema = z.object({
  learningPaths: z
    .string()
    .describe('Personalized learning paths for each team member.'),
});
export type GeneratePersonalizedLearningPathOutput = z.infer<typeof GeneratePersonalizedLearningPathOutputSchema>;

export async function generatePersonalizedLearningPath(input: GeneratePersonalizedLearningPathInput): Promise<GeneratePersonalizedLearningPathOutput> {
  return generatePersonalizedLearningPathFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedLearningPathPrompt',
  input: {schema: GeneratePersonalizedLearningPathInputSchema},
  output: {schema: GeneratePersonalizedLearningPathOutputSchema},
  prompt: `You are an AI learning path generator. You will generate personalized learning paths for team members based on their skills and company needs.

      Team Skills Data: {{{teamSkillsData}}}
      Company Needs: {{{companyNeeds}}}

      Generate personalized learning paths for each team member, focusing on the most relevant AI skills and tools for the company's needs. Return a string containing learning paths for each team member, each path separated by a newline.
      `,
});

const generatePersonalizedLearningPathFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedLearningPathFlow',
    inputSchema: GeneratePersonalizedLearningPathInputSchema,
    outputSchema: GeneratePersonalizedLearningPathOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
