'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { generateAutomationCode } from '@/app/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Bot, Copy, Loader2, Wand2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Generate Code
        </>
      )}
    </Button>
  );
}

export function AutomationForm() {
  const initialState = { message: '', errors: null, data: null };
  const [state, formAction] = useFormState(generateAutomationCode, initialState);
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message === 'success' && state.data?.code) {
      setGeneratedCode(state.data.code);
      formRef.current?.reset();
    } else if (state.message && state.message !== 'success') {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
  }, [state, toast]);

  const handleCopy = () => {
    if (generatedCode) {
      navigator.clipboard.writeText(generatedCode);
      toast({
        title: "Copied to clipboard!",
        description: "The code has been copied to your clipboard.",
      });
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <form action={formAction} ref={formRef}>
        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle>Describe Your Task</CardTitle>
            <CardDescription>
              e.g., "Automatically send 1 ETH to a specific address every month."
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <Textarea
              name="taskDescription"
              placeholder="Enter your task description here..."
              rows={8}
              required
              className="resize-none h-full"
            />
            {state?.errors?.taskDescription && (
              <p className="text-sm font-medium text-destructive pt-2">
                {state.errors.taskDescription[0]}
              </p>
            )}
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </Card>
      </form>
      
      <Card className="h-full flex flex-col min-h-[300px] lg:min-h-0">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Generated Code</CardTitle>
            <CardDescription>The AI-generated code will appear here.</CardDescription>
          </div>
          {generatedCode && (
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={handleCopy}
              aria-label="Copy code"
            >
              <Copy className="h-4 w-4" />
            </Button>
          )}
        </CardHeader>
        <CardContent className="flex-1 relative p-0">
          <div className="h-full w-full absolute">
            {generatedCode ? (
              <pre className="h-full w-full p-6 bg-muted/50 rounded-b-lg overflow-auto text-sm">
                <code>{generatedCode}</code>
              </pre>
            ) : (
              <div className="flex h-full items-center justify-center rounded-b-lg border-2 border-dashed border-muted-foreground/20 m-6 mt-0">
                <div className="text-center text-muted-foreground">
                    <Bot className="mx-auto h-10 w-10 mb-2"/>
                    <p>Your code will appear here</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
