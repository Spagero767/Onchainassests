import { TransactionHistory } from '@/components/transaction-history';
import { GasEstimator } from '@/components/gas-estimator';
import { QuickActions } from '@/components/quick-actions';

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground mt-1">An overview of your on-chain activity.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <TransactionHistory />
                </div>
                <div className="space-y-8">
                    <GasEstimator />
                    <QuickActions />
                </div>
            </div>
        </div>
    );
}
