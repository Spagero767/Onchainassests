import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export function QuickActions() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start gap-4 p-6 text-left">
                    <Link href="/automate">
                        <Bot className="h-6 w-6 text-muted-foreground"/>
                        <div className="flex-1">
                            <p className="font-semibold">Automate a Task</p>
                            <p className="text-xs text-muted-foreground">AI-powered code generation</p>
                        </div>
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start gap-4 p-6 text-left">
                    <Link href="/contracts">
                        <FileText className="h-6 w-6 text-muted-foreground"/>
                        <div className="flex-1">
                            <p className="font-semibold">Interact with Contract</p>
                            <p className="text-xs text-muted-foreground">Call contract functions</p>
                        </div>
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}
