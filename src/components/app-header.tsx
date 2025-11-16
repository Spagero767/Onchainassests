'use client';
import { SidebarTrigger } from "@/components/ui/sidebar";
import { WalletConnect } from '@/components/wallet-connect';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6 lg:px-8">
      <SidebarTrigger className="md:hidden" />
      <div className="flex-1" />
      <WalletConnect />
    </header>
  );
}
