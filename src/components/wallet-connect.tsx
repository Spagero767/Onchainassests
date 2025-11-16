'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { WalletCards, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function WalletConnect() {
  const [account, setAccount] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const connectWallet = async () => {
    if (isClient && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }
      } catch (error) {
        console.error("User rejected request", error);
      }
    } else {
      alert("Please install MetaMask to use this feature!");
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
  };
  
  if (!isClient) {
    return <Button disabled><WalletCards className="mr-2 h-4 w-4" />Connect Wallet</Button>
  }

  if (!account) {
    return (
      <Button onClick={connectWallet}>
        <WalletCards className="mr-2 h-4 w-4" />
        Connect Wallet
      </Button>
    );
  }

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-3">
                <Avatar className="h-6 w-6">
                    <AvatarFallback>{account.slice(2, 4).toUpperCase()}</AvatarFallback>
                </Avatar>
                <span className="font-mono text-sm">
                    {`${account.substring(0, 6)}...${account.substring(account.length - 4)}`}
                </span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={disconnectWallet}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Disconnect</span>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  );
}
