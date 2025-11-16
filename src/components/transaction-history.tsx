import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowRightLeft, CircleCheck, LoaderCircle, CircleAlert } from 'lucide-react';

const transactions = [
  { id: 1, hash: '0xabc...def', method: 'Swap', age: '2m ago', value: '1.2 ETH', status: 'Success' },
  { id: 2, hash: '0xghi...jkl', method: 'Approve', age: '5m ago', value: '0 ETH', status: 'Success' },
  { id: 3, hash: '0xmno...pqr', method: 'Transfer', age: '10s ago', value: '0.5 ETH', status: 'Pending' },
  { id: 4, hash: '0xstu...vwx', method: 'Mint', age: '15m ago', value: '1 NFT', status: 'Success' },
  { id: 5, hash: '0xyza...bcd', method: 'Contract Call', age: '20m ago', value: '0 ETH', status: 'Failed' },
];

const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
        case 'Success': return <CircleCheck className="h-4 w-4" />;
        case 'Pending': return <LoaderCircle className="h-4 w-4 animate-spin" />;
        case 'Failed': return <CircleAlert className="h-4 w-4" />;
        default: return null;
    }
}

export function TransactionHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
        <CardDescription>Your recent on-chain activity.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%]">Transaction</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Value</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted shrink-0">
                        <ArrowRightLeft className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                        <div className="font-medium font-mono text-sm">{tx.hash}</div>
                        <div className="text-xs text-muted-foreground">{tx.age}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                    <Badge variant="outline">{tx.method}</Badge>
                </TableCell>
                <TableCell className="font-medium">{tx.value}</TableCell>
                <TableCell className="text-right">
                  <Badge variant={tx.status === 'Failed' ? 'destructive' : tx.status === 'Pending' ? 'outline' : 'secondary'}>
                    <div className="flex items-center gap-1.5">
                      <StatusIcon status={tx.status} />
                      {tx.status}
                    </div>
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
