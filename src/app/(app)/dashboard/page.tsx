
"use client";

import { KpiCard } from "@/components/dashboard/kpi-card";
import { ChartCard } from "@/components/dashboard/chart-card";
import { DollarSign, Users, ShoppingCart, Activity, TrendingUp, TrendingDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";
import { GlassCard } from "@/components/shared/glass-card";
import { useToast } from "@/hooks/use-toast";

const initialChartData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
];

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState(initialChartData);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  
  const refreshData = () => {
    setIsLoading(true);
    // Simulate fetching new data
    setTimeout(() => {
      const newData = initialChartData.map(item => ({
        ...item,
        value: Math.floor(Math.random() * 5000) + 1000
      }));
      setChartData(newData);
      setIsLoading(false);
      toast({
        title: "Data Refreshed",
        description: "Dashboard data has been updated.",
      });
    }, 1000);
  };

  const handleQuickAction = (actionName: string) => {
    toast({
      title: "Quick Action",
      description: `${actionName} triggered.`,
    });
  };

  const handleCustomizeLayout = () => {
    toast({
      title: "Customize Layout",
      description: "Layout customization feature clicked.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-semibold">Dashboard Overview</h1>
        <Button onClick={refreshData} variant="outline" className="transition-transform hover:scale-105 active:scale-95">
          <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh Data
        </Button>
      </div>

      {/* KPI Cards Section */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          title="Total Revenue"
          value="$45,231.89"
          change="+20.1% from last month"
          changeType="positive"
          icon={DollarSign}
          iconColor="text-green-500"
          accentSide="left"
        />
        <KpiCard
          title="Active Users"
          value="2,350"
          change="+180 since last week"
          changeType="positive"
          icon={Users}
          iconColor="text-blue-500"
          accentSide="left"
        />
        <KpiCard
          title="Sales"
          value="+12,234"
          change="-2% from yesterday"
          changeType="negative"
          icon={ShoppingCart}
          iconColor="text-red-500"
          accentSide="left"
        />
        <KpiCard
          title="System Health"
          value="99.9% Uptime"
          change="All systems operational"
          changeType="neutral"
          icon={Zap}
          iconColor="text-yellow-500"
          accentSide="left"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ChartCard 
          title="Monthly Performance" 
          description="Overview of key metrics trend over the past 6 months."
          data={chartData}
          isLoading={isLoading}
        />
        <GlassCard title="Layout Customization (Coming Soon)" accentSide="top">
          <div className="flex flex-col items-center justify-center h-[300px] text-center p-6">
             <TrendingUp className="w-16 h-16 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Drag & Drop Your Dashboard</h3>
            <p className="text-muted-foreground">
              Soon you'll be able to arrange these cards exactly how you want them. 
              Prioritize your most important metrics with a simple drag and drop interface.
            </p>
            <Button variant="secondary" className="mt-6" onClick={handleCustomizeLayout}>
              Customize Layout
            </Button>
          </div>
        </GlassCard>
      </div>
      
       {/* Placeholder for other sections */}
       <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
         <GlassCard title="Recent Activity" accentSide="top">
            <ul className="space-y-3 text-sm p-2 max-h-60 overflow-y-auto">
                <li className="flex items-center gap-2"><Activity className="w-4 h-4 text-primary"/> User John Doe logged in.</li>
                <li className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-green-500"/> Sales report generated.</li>
                <li className="flex items-center gap-2"><TrendingDown className="w-4 h-4 text-red-500"/> Server CPU usage high.</li>
                <li className="flex items-center gap-2"><Users className="w-4 h-4 text-blue-500"/> New user 'Alice' signed up.</li>
                <li className="flex items-center gap-2"><ShoppingCart className="w-4 h-4 text-yellow-500"/> Product X stock low.</li>
            </ul>
         </GlassCard>
         <GlassCard title="Quick Actions" accentSide="top" className="md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-2">
                <Button variant="outline" onClick={() => handleQuickAction('Generate Report')}>Generate Report</Button>
                <Button variant="outline" onClick={() => handleQuickAction('Add New User')}>Add New User</Button>
                <Button variant="outline" onClick={() => handleQuickAction('View Logs')}>View Logs</Button>
                <Button variant="outline" onClick={() => handleQuickAction('System Check')}>System Check</Button>
                <Button variant="secondary" onClick={() => handleQuickAction('Export Data')}>Export Data</Button>
                <Button variant="destructive" onClick={() => handleQuickAction('Emergency Stop')}>Emergency Stop</Button>
            </div>
         </GlassCard>
       </div>
    </div>
  );
}
