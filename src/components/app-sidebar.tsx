'use client';

import { usePathname } from 'next/navigation';
import { Bot, FileText, Fuel, LayoutDashboard, Bolt, User } from 'lucide-react';
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import Link from 'next/link';

export function AppSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/automate', label: 'Automate', icon: Bot },
    { href: '/contracts', label: 'Contracts', icon: FileText },
    { href: '/gas', label: 'Gas Station', icon: Fuel },
  ];

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Bolt size={20} />
          </div>
          <span className="font-semibold text-lg group-data-[collapsible=icon]:hidden">
            OnChainAssist
          </span>
        </div>
      </SidebarHeader>

      <SidebarMenu className="flex-1">
        {menuItems.map(({ href, label, icon: Icon }) => (
          <SidebarMenuItem key={href}>
            <SidebarMenuButton asChild isActive={pathname === href} tooltip={label}>
              <Link href={href}>
                <Icon />
                <span>{label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>

      <SidebarFooter>
         <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton tooltip="Profile">
                    <User />
                    <span>Profile</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
         </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
