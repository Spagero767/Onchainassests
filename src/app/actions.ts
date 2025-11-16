'use server';

import { automateOnChainTask } from '@/ai/flows/automate-on-chain-tasks';
import { z } from 'zod';

const TaskSchema = z.object({
  taskDescription: z.string().min(10, "Please describe your task in at least 10 characters."),
});

type State = {
  message: string;
  errors?: {
    taskDescription?: string[];
  } | null;
  data?: {
    code: string;
  } | null;
};

export async function generateAutomationCode(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = TaskSchema.safeParse({
    taskDescription: formData.get('taskDescription'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid input.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await automateOnChainTask({
      taskDescription: validatedFields.data.taskDescription,
    });
    return {
      message: 'success',
      data: result,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An error occurred while generating code. Please try again.',
      errors: null,
    };
  }
}
