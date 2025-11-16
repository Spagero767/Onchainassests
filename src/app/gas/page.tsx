import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Fuel } from "lucide-react";

export default function GasPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Gas Station</h1>
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>
            This feature is currently under development.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg">
                <Fuel className="h-12 w-12 text-muted-foreground mb-4"/>
                <p className="text-muted-foreground">
                    Soon you'll get detailed gas fee estimations to help you optimize transaction costs.
                </p>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
