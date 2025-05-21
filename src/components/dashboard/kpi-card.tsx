"use client";

import * as React from "react";
import { GlassCard } from "@/components/shared/glass-card";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface KpiCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon?: LucideIcon;
  iconColor?: string; // Tailwind color class e.g. text-green-500
  description?: string;
  accentSide?: 'left' | 'top' | 'none';
}

export function KpiCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  iconColor = "text-primary",
  description,
  accentSide = 'left',
}: KpiCardProps) {
  
  const changeColor =
    changeType === "positive" ? "text-green-500 dark:text-green-400" :
    changeType === "negative" ? "text-red-500 dark:text-red-400" :
    "text-muted-foreground";

  return (
    <GlassCard title={title} description={description} accentSide={accentSide} className="h-full">
      <div className="flex items-center justify-between space-x-4 p-0">
        {Icon && (
          <div className={cn("p-3 rounded-lg bg-accent/20", iconColor)}>
            <Icon className="h-6 w-6" />
          </div>
        )}
        <div className="text-right">
          <p className="text-3xl font-bold">{value}</p>
          {change && (
            <p className={cn("text-xs", changeColor)}>
              {change}
            </p>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
