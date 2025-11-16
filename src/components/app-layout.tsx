import type { PropsWithChildren } from 'react';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { AppHeader } from '@/components/app-header';

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <Sidebar>
        <AppSidebar />
      </Sidebar>
      <SidebarInset>
        <AppHeader />
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
