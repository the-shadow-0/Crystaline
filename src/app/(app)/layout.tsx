"use client"; // Required for hooks like useAuth

import AppShell from '@/components/layout/app-shell';
import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation'; // Corrected import
import { useEffect } from 'react';
import type React from 'react'; // explicit type import

export default function AuthenticatedAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    // Full page loader while auth state is resolving
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
        <p className="ml-4 text-lg font-semibold">Loading Crystaline...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    // This path should ideally not be taken if redirection in useEffect works,
    // but as a fallback, prevents rendering children.
    return null; 
  }

  return <AppShell>{children}</AppShell>;
}
