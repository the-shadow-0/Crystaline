
"use client";

import { GlassCard } from "@/components/shared/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FolderPlus, ListChecks, CalendarDays, Users, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import type React from 'react'; // explicit type import
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface Project {
  id: string;
  name: string;
  description: string;
  status: "Planning" | "In Progress" | "On Hold" | "Completed" | "Cancelled";
  dueDate: string;
  progress: number; // 0-100
  team: { id: string; name: string; avatarUrl: string; avatarFallback: string }[];
  tags: string[];
}

const mockProjects: Project[] = [
  {
    id: "1",
    name: "Website Redesign",
    description: "Complete overhaul of the corporate website with new branding and features.",
    status: "In Progress",
    dueDate: "2024-09-30",
    progress: 65,
    team: [
      { id: "t1", name: "Alice", avatarUrl: "https://placehold.co/32x32.png?text=A", avatarFallback: "A" },
      { id: "t2", name: "Bob", avatarUrl: "https://placehold.co/32x32.png?text=B", avatarFallback: "B" },
    ],
    tags: ["Web", "Marketing", "UI/UX"],
  },
  {
    id: "2",
    name: "Mobile App Development",
    description: "Develop a new cross-platform mobile application for customer engagement.",
    status: "Planning",
    dueDate: "2024-12-15",
    progress: 15,
    team: [
      { id: "t3", name: "Charlie", avatarUrl: "https://placehold.co/32x32.png?text=C", avatarFallback: "C" },
      { id: "t4", name: "Diana", avatarUrl: "https://placehold.co/32x32.png?text=D", avatarFallback: "D" },
      { id: "t5", name: "Eve", avatarUrl: "https://placehold.co/32x32.png?text=E", avatarFallback: "E" },
    ],
    tags: ["Mobile", "Development", "iOS", "Android"],
  },
  {
    id: "3",
    name: "Q3 Marketing Campaign",
    description: "Launch and manage the marketing campaign for the new product line.",
    status: "Completed",
    dueDate: "2024-07-15",
    progress: 100,
    team: [
      { id: "t1", name: "Alice", avatarUrl: "https://placehold.co/32x32.png?text=A", avatarFallback: "A" },
    ],
    tags: ["Marketing", "Social Media"],
  },
  {
    id: "4",
    name: "Infrastructure Upgrade",
    description: "Upgrade server infrastructure for better performance and scalability.",
    status: "On Hold",
    dueDate: "2024-10-31",
    progress: 30,
    team: [
      { id: "t2", name: "Bob", avatarUrl: "https://placehold.co/32x32.png?text=B", avatarFallback: "B" },
      { id: "t6", name: "Frank", avatarUrl: "https://placehold.co/32x32.png?text=F", avatarFallback: "F" },
    ],
    tags: ["IT", "DevOps", "Infrastructure"],
  },
];

const statusColorMap: Record<Project["status"], string> = {
  "Planning": "bg-blue-500/20 text-blue-700 dark:bg-blue-500/30 dark:text-blue-400 border-blue-500/30",
  "In Progress": "bg-yellow-500/20 text-yellow-700 dark:bg-yellow-500/30 dark:text-yellow-400 border-yellow-500/30",
  "On Hold": "bg-gray-500/20 text-gray-700 dark:bg-gray-500/30 dark:text-gray-400 border-gray-500/30",
  "Completed": "bg-green-500/20 text-green-700 dark:bg-green-500/30 dark:text-green-400 border-green-500/30",
  "Cancelled": "bg-red-500/20 text-red-700 dark:bg-red-500/30 dark:text-red-400 border-red-500/30",
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { toast } = useToast();
  const handleViewDetails = () => {
    toast({
      title: "View Project Details",
      description: `Viewing details for project: ${project.name}`,
    });
  };

  return (
    <GlassCard className="flex flex-col h-full" accentSide="left">
      <div className="flex-grow space-y-3 p-0">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{project.name}</h3>
          <Badge className={cn("text-xs", statusColorMap[project.status])} variant="outline">
            {project.status}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
        
        <div className="space-y-1">
          <div className="flex items-center text-xs text-muted-foreground">
            <CalendarDays className="mr-2 h-4 w-4" />
            Due: {project.dueDate}
          </div>
          <Progress value={project.progress} aria-label={`${project.progress}% complete`} className="h-2" />
          <p className="text-xs text-muted-foreground text-right">{project.progress}% complete</p>
        </div>

        <div>
          <p className="text-xs font-medium mb-1">Team:</p>
          <div className="flex -space-x-2">
            {project.team.map(member => (
              <Avatar key={member.id} className="h-6 w-6 border-2 border-card" data-ai-hint="member avatar">
                <AvatarImage src={member.avatarUrl} alt={member.name} />
                <AvatarFallback>{member.avatarFallback}</AvatarFallback>
              </Avatar>
            ))}
             {project.team.length > 3 && <Avatar className="h-6 w-6 border-2 border-card bg-muted text-muted-foreground"><AvatarFallback>+{project.team.length-3}</AvatarFallback></Avatar>}
          </div>
        </div>
         <div className="pt-2">
            <p className="text-xs font-medium mb-1">Tags:</p>
            <div className="flex flex-wrap gap-1">
                {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
            </div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-dashed flex justify-end">
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary" onClick={handleViewDetails}>View Details</Button>
      </div>
    </GlassCard>
  );
};

export default function ProjectsPage() {
  const { toast } = useToast();

  const handleNewProject = () => {
    toast({
      title: "New Project",
      description: "Attempting to create a new project.",
    });
  };

  const handleFilter = () => {
    toast({
      title: "Filter Projects",
      description: "Filter action triggered.",
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-semibold">Projects Overview</h1>
        <div className="flex gap-2 w-full md:w-auto">
          <Button 
            variant="outline" 
            className="flex-1 md:flex-initial transition-transform hover:scale-105 active:scale-95"
            onClick={handleNewProject}
          >
            <FolderPlus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>

      <GlassCard accentSide="top" className="p-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-grow w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search projects..." className="pl-10 w-full bg-background/70" />
            </div>
            <Button variant="outline" onClick={handleFilter}>
                <Filter className="mr-2 h-4 w-4" />
                Filter
            </Button>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {mockProjects.length === 0 && (
         <GlassCard>
            <div className="flex flex-col items-center justify-center h-64 text-center p-6">
                <ListChecks className="w-20 h-20 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Projects Yet</h3>
                <p className="text-muted-foreground mb-4">
                    Get started by creating your first project.
                </p>
                <Button onClick={handleNewProject}>
                    <FolderPlus className="mr-2 h-4 w-4" /> Create Project
                </Button>
            </div>
        </GlassCard>
      )}
    </div>
  );
}
