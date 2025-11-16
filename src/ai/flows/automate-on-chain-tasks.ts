'use server';
/**
 * @fileOverview Automates on-chain tasks by generating code based on user descriptions.
 *
 * - automateOnChainTask - A function that generates code to automate common on-chain tasks.
 * - AutomateOnChainTaskInput - The input type for the automateOnChainTask function.
 * - AutomateOnChainTaskOutput - The return type for the automateOnChainTask function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutomateOnChainTaskInputSchema = z.object({
  taskDescription: z
    .string()
    .describe(
      'A description of the on-chain task to automate, e.g., automatically send 1 ETH to a specific address every month.'
    ),
});
export type AutomateOnChainTaskInput = z.infer<typeof AutomateOnChainTaskInputSchema>;

const AutomateOnChainTaskOutputSchema = z.object({
  code: z.string().describe('The code to automate the on-chain task.'),
});
export type AutomateOnChainTaskOutput = z.infer<typeof AutomateOnChainTaskOutputSchema>;

export async function automateOnChainTask(input: AutomateOnChainTaskInput): Promise<AutomateOnChainTaskOutput> {
  return automateOnChainTaskFlow(input);
}

const prompt = ai.definePrompt({
  name: 'automateOnChainTaskPrompt',
  input: {schema: AutomateOnChainTaskInputSchema},
  output: {schema: AutomateOnChainTaskOutputSchema},
  prompt: `You are an expert blockchain developer. Generate code to automate the following on-chain task:

{{taskDescription}}

Provide only the code, do not include any explanations.`,
});

const automateOnChainTaskFlow = ai.defineFlow(
  {
    name: 'automateOnChainTaskFlow',
    inputSchema: AutomateOnChainTaskInputSchema,
    outputSchema: AutomateOnChainTaskOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
