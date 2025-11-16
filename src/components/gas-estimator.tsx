import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Fuel } from 'lucide-react';

const gasData = {
    slow: { gwei: 15, usd: 0.8, time: '~5 min' },
    average: { gwei: 25, usd: 1.35, time: '~2 min' },
    fast: { gwei: 40, usd: 2.16, time: '< 30s' },
};

export function GasEstimator() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Gas Estimator</CardTitle>
        <CardDescription>Current network gas fees.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="average" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="slow">Slow</TabsTrigger>
            <TabsTrigger value="average">Average</TabsTrigger>
            <TabsTrigger value="fast">Fast</TabsTrigger>
          </TabsList>
          <TabsContent value="slow" className="mt-4">
            <GasInfo {...gasData.slow} />
          </TabsContent>
          <TabsContent value="average" className="mt-4">
            <GasInfo {...gasData.average} />
          </TabsContent>
          <TabsContent value="fast" className="mt-4">
            <GasInfo {...gasData.fast} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

function GasInfo({ gwei, usd, time }: { gwei: number, usd: number, time: string }) {
    return (
        <div className="flex items-center justify-between rounded-lg bg-muted/50 p-4">
            <div className="flex items-center gap-3">
                <Fuel className="h-6 w-6 text-primary" />
                <div>
                    <div className="font-bold text-lg">{gwei} <span className="text-sm font-normal text-muted-foreground">Gwei</span></div>
                    <div className="text-sm text-muted-foreground">${usd.toFixed(2)}</div>
                </div>
            </div>
            <div className="text-right">
                <div className="font-medium">{time}</div>
                <div className="text-sm text-muted-foreground">Est. Time</div>
            </div>
        </div>
    )
}
