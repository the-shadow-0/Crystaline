
"use client";

import type React from 'react';
import AppSidebar from './sidebar';
import AppTopBar from './topbar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
        <p className="ml-4 text-lg font-semibold">Loading Frosted Insights...</p>
      </div>
    );
  }
  
  if (!isAuthenticated) {
     // This should ideally not be reached if AuthContext redirect works fine
    return null;
  }

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen">
        <AppSidebar />
        <div className="flex flex-1 flex-col w-full"> {/* Ensured w-full is present */}
          <AppTopBar />
          <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

    