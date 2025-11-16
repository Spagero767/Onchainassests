import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function ContractsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Smart Contract Interaction</h1>
       <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>
            This feature is currently under development.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg">
                <FileText className="h-12 w-12 text-muted-foreground mb-4"/>
                <p className="text-muted-foreground">
                    Soon you'll be able to interact with any deployed smart contract directly from this app.
                </p>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
