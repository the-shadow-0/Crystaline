"use client";

import * as React from "react";
import { GlassCard } from "@/components/shared/glass-card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { CardDescription } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

interface ChartDataPoint {
  name: string;
  value: number;
}

interface ChartCardProps {
  title: string;
  description?: string;
  data: ChartDataPoint[];
  isLoading?: boolean;
}

const COLORS = ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))'];


export function ChartCard({ title, description, data, isLoading = false }: ChartCardProps) {
  
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (isLoading || !isClient) {
    return (
      <GlassCard title={title} description={description}>
        <Skeleton className="h-[300px] w-full rounded-md" />
      </GlassCard>
    );
  }
  
  return (
    <GlassCard title={title}>
      {description && <CardDescription className="mb-4">{description}</CardDescription>}
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border)/0.5)" />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
            <Tooltip
              cursor={{ fill: 'hsl(var(--accent)/0.2)' }}
              contentStyle={{ 
                backgroundColor: 'hsl(var(--popover))', 
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)',
                color: 'hsl(var(--popover-foreground))'
              }}
            />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Bar dataKey="value" name="Metric" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  );
}
