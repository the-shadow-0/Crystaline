
"use client";

import { GlassCard } from "@/components/shared/glass-card";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { Button } from "@/components/ui/button";
import { ChartCard } from "@/components/dashboard/chart-card";
import { Target, TrendingUp, TrendingDown, PlusCircle, LineChart, Users, DollarSign, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const initialSalesData = [
  { name: 'Jan', value: 1200 },
  { name: 'Feb', value: 1500 },
  { name: 'Mar', value: 1300 },
  { name: 'Apr', value: 1700 },
  { name: 'May', value: 1600 },
  { name: 'Jun', value: 1900 },
];

export default function KpiPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [salesTrendData, setSalesTrendData] = useState(initialSalesData);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleAddNewKpi = () => {
    toast({
      title: "Action Triggered",
      description: "Attempting to add a new KPI.",
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-semibold">Key Performance Indicators</h1>
        <Button 
          variant="outline" 
          className="transition-transform hover:scale-105 active:scale-95"
          onClick={handleAddNewKpi}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New KPI
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <KpiCard
          title="Customer Acquisition Cost (CAC)"
          value="$150.75"
          change="-5.2% from last quarter"
          changeType="positive" // Lower CAC is good
          icon={DollarSign}
          description="Average cost to acquire a new customer."
          accentSide="left"
        />
        <KpiCard
          title="Monthly Recurring Revenue (MRR)"
          value="$12,500"
          change="+2.1% from last month"
          changeType="positive"
          icon={TrendingUp}
          description="Total predictable revenue generated monthly."
          accentSide="left"
        />
        <KpiCard
          title="Customer Churn Rate"
          value="3.5%"
          change="+0.5% from last month"
          changeType="negative" // Higher churn is bad
          icon={TrendingDown}
          description="Percentage of customers lost during a period."
          accentSide="left"
        />
        <KpiCard
          title="Average Order Value (AOV)"
          value="$78.20"
          change="+1.8% from last month"
          changeType="positive"
          icon={ShoppingBag}
          description="Average amount spent per order."
          accentSide="left"
        />
        <KpiCard
          title="Lead Conversion Rate"
          value="18%"
          change="-1.2% from last week"
          changeType="negative"
          icon={Users}
          description="Percentage of leads converted to customers."
          accentSide="left"
        />
        <KpiCard
          title="Website Traffic"
          value="25,300 visits"
          change="+15% from last month"
          changeType="positive"
          icon={LineChart}
          description="Total visits to the website this month."
          accentSide="left"
        />
      </div>

      <GlassCard title="Sales Trend Analysis" accentSide="top">
        <ChartCard
          title=""
          description="Visualizing sales performance over the last six months."
          data={salesTrendData}
          isLoading={isLoading}
        />
      </GlassCard>

      <GlassCard title="Detailed KPI Breakdown (Under Development)" accentSide="top">
        <div className="flex flex-col items-center justify-center h-64 text-center p-6">
          <Target className="w-20 h-20 text-primary mb-4" />
          <p className="text-muted-foreground">
            This area will provide in-depth analysis, customizable dashboards, and goal tracking for each KPI.
          </p>
          <p className="text-sm mt-2">Stay tuned for more advanced KPI management features!</p>
        </div>
      </GlassCard>
    </div>
  );
}
