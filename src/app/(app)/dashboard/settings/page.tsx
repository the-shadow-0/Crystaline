
"use client";

import { GlassCard } from "@/components/shared/glass-card";
import { Settings as SettingsIcon, User, Bell, Shield, Edit, Camera } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/auth-context"; // For user data
import { useToast } from "@/hooks/use-toast";

export default function SettingsPage() {
  const { user } = useAuth();
  const { toast } = useToast();

  const handleChangePicture = () => {
    toast({
      title: "Change Picture",
      description: "Functionality to change profile picture clicked.",
    });
  };

  const handleSaveChanges = () => {
    toast({
      title: "Save Profile Changes",
      description: "Attempting to save profile information.",
    });
  };

  const handleChangePassword = () => {
    toast({
      title: "Change Password",
      description: "Change password process initiated.",
    });
  };
  
  const handleManageApiKeys = () => {
    toast({
      title: "Manage API Keys",
      description: "Navigating to API key management.",
    });
  };

  const handleViewLoginHistory = () => {
    toast({
      title: "View Login History",
      description: "Fetching login history.",
    });
  };


  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">Settings</h1>

      {/* User Profile Section */}
      <GlassCard title="User Profile" icon={User} accentSide="top">
        <div className="p-6 space-y-6">
          <div className="flex items-center space-x-6">
            <div className="relative group">
              <Avatar className="h-24 w-24 border-2 border-primary/50" data-ai-hint="user avatar">
                <AvatarImage src={`https://placehold.co/96x96.png?text=${user?.name ? user.name.charAt(0).toUpperCase() : 'U'}`} alt={user?.name || 'User'} />
                <AvatarFallback className="text-3xl">{user?.name ? user.name.charAt(0).toUpperCase() : 'U'}</AvatarFallback>
              </Avatar>
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute bottom-0 right-0 rounded-full h-8 w-8 bg-background/80 group-hover:opacity-100 opacity-0 transition-opacity"
                onClick={handleChangePicture}
              >
                <Camera className="h-4 w-4" />
                <span className="sr-only">Change picture</span>
              </Button>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{user?.name || "User Name"}</h2>
              <p className="text-muted-foreground">{user?.email || "user@example.com"}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" defaultValue={user?.name || ""} placeholder="Enter your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue={user?.email || ""} placeholder="user@example.com" readOnly className="cursor-not-allowed bg-muted/50" />
            </div>
          </div>
          
          <div className="flex justify-start space-x-3">
            <Button onClick={handleSaveChanges}>
              <Edit className="mr-2 h-4 w-4" /> Save Changes
            </Button>
            <Button variant="outline" onClick={handleChangePassword}>Change Password</Button>
          </div>
        </div>
      </GlassCard>

      {/* Notification Preferences Section */}
      <GlassCard title="Notification Preferences" icon={Bell} accentSide="top">
        <div className="p-6 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Email Summaries</h3>
              <p className="text-sm text-muted-foreground">
                Get daily email summaries of dashboard activity.
              </p>
            </div>
            <Switch id="email-summaries" defaultChecked onCheckedChange={(checked) => toast({ title: 'Email Summaries', description: checked ? 'Enabled' : 'Disabled'})} />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Push Notifications</h3>
              <p className="text-sm text-muted-foreground">
                Receive push notifications for important updates.
              </p>
            </div>
            <Switch id="push-notifications" defaultChecked onCheckedChange={(checked) => toast({ title: 'Push Notifications', description: checked ? 'Enabled' : 'Disabled'})}/>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">SMS Alerts</h3>
              <p className="text-sm text-muted-foreground">
                Get critical alerts via SMS (charges may apply).
              </p>
            </div>
            <Switch id="sms-alerts" onCheckedChange={(checked) => toast({ title: 'SMS Alerts', description: checked ? 'Enabled' : 'Disabled'})} />
          </div>

           <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Newsletter Subscription</h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to our monthly product updates and news.
              </p>
            </div>
            <Switch id="newsletter-subscription" defaultChecked onCheckedChange={(checked) => toast({ title: 'Newsletter Subscription', description: checked ? 'Enabled' : 'Disabled'})}/>
          </div>
        </div>
      </GlassCard>

      {/* Security Settings Section */}
      <GlassCard title="Security Settings" icon={Shield} accentSide="top">
        <div className="p-6 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                <h3 className="text-lg font-medium">Two-Factor Authentication (2FA)</h3>
                <p className="text-sm text-muted-foreground">
                    Enhance your account security by enabling 2FA.
                </p>
                </div>
                <Switch id="2fa-switch" onCheckedChange={(checked) => toast({ title: 'Two-Factor Authentication', description: checked ? 'Enabled' : 'Disabled'})} />
            </div>
            <Button variant="outline" onClick={handleManageApiKeys}>Manage API Keys</Button>
            <Button variant="outline" onClick={handleViewLoginHistory}>View Login History</Button>
        </div>
      </GlassCard>
      
      <GlassCard accentSide="top">
        <div className="p-6 flex flex-col items-center justify-center text-center">
            <SettingsIcon className="w-16 h-16 text-primary mb-4" />
            <p className="text-muted-foreground">
              More settings and customization options will be available here.
            </p>
            <p className="text-sm mt-2">Content for this section is under development.</p>
        </div>
      </GlassCard>
    </div>
  );
}
