import { AutomationForm } from "./automation-form";

export default function AutomatePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">On-Chain Task Automation</h1>
        <p className="text-muted-foreground mt-2">
            Describe a task you want to automate, and our AI will generate the code for you.
        </p>
      </div>
      <AutomationForm />
    </div>
  );
}
