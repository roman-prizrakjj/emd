'use server';

/**
 * @fileOverview Summarizes AI research documents to extract key insights.
 *
 * - summarizeAiResearch - A function that summarizes AI research documents.
 * - SummarizeAiResearchInput - The input type for the summarizeAiResearch function.
 * - SummarizeAiResearchOutput - The return type for the summarizeAiResearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeAiResearchInputSchema = z.object({
  researchDocument: z
    .string()
    .describe('The research document content to be summarized.'),
});
export type SummarizeAiResearchInput = z.infer<typeof SummarizeAiResearchInputSchema>;

const SummarizeAiResearchOutputSchema = z.object({
  summary: z.string().describe('A summarized report highlighting key insights, challenges, and opportunities.'),
});
export type SummarizeAiResearchOutput = z.infer<typeof SummarizeAiResearchOutputSchema>;

export async function summarizeAiResearch(input: SummarizeAiResearchInput): Promise<SummarizeAiResearchOutput> {
  return summarizeAiResearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeAiResearchPrompt',
  input: {schema: SummarizeAiResearchInputSchema},
  output: {schema: SummarizeAiResearchOutputSchema},
  prompt: `You are an expert business analyst specializing in the Russian AI market.

You will analyze the provided research document and create a concise summary highlighting key insights, challenges, and opportunities for businesses.

Research Document: {{{researchDocument}}}`,
});

const summarizeAiResearchFlow = ai.defineFlow(
  {
    name: 'summarizeAiResearchFlow',
    inputSchema: SummarizeAiResearchInputSchema,
    outputSchema: SummarizeAiResearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
