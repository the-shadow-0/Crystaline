
"use client";

import { GlassCard } from "@/components/shared/glass-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserPlus, Edit3, Trash2, MoreHorizontal, ShieldCheck, UserCog } from "lucide-react";
import type React from 'react';
import { useToast } from "@/hooks/use-toast";

interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  avatarFallback: string;
  role: "Admin" | "Editor" | "Viewer";
  status: "Active" | "Inactive" | "Pending";
  lastLogin: string;
}

const mockUsers: User[] = [
  { id: "1", name: "Alice Wonderland", email: "alice@example.com", avatarUrl: "https://placehold.co/40x40.png?text=AW", avatarFallback: "AW", role: "Admin", status: "Active", lastLogin: "2024-07-28 10:00 AM" },
  { id: "2", name: "Bob The Builder", email: "bob@example.com", avatarUrl: "https://placehold.co/40x40.png?text=BB", avatarFallback: "BB", role: "Editor", status: "Active", lastLogin: "2024-07-27 03:15 PM" },
  { id: "3", name: "Charlie Brown", email: "charlie@example.com", avatarUrl: "https://placehold.co/40x40.png?text=CB", avatarFallback: "CB", role: "Viewer", status: "Inactive", lastLogin: "2024-06-15 09:30 AM" },
  { id: "4", name: "Diana Prince", email: "diana@example.com", avatarUrl: "https://placehold.co/40x40.png?text=DP", avatarFallback: "DP", role: "Editor", status: "Pending", lastLogin: "N/A" },
  { id: "5", name: "Edward Scissorhands", email: "edward@example.com", avatarUrl: "https://placehold.co/40x40.png?text=ES", avatarFallback: "ES", role: "Viewer", status: "Active", lastLogin: "2024-07-28 01:20 PM" },
];

const statusVariant = (status: User["status"]): "default" | "secondary" | "destructive" | "outline" => {
  switch (status) {
    case "Active": return "default"; // Default often maps to primary
    case "Inactive": return "secondary";
    case "Pending": return "outline";
    default: return "default";
  }
}

const roleIcon = (role: User["role"]): React.ReactElement => {
  switch (role) {
    case "Admin": return <ShieldCheck className="h-4 w-4 text-primary" />;
    case "Editor": return <UserCog className="h-4 w-4 text-blue-500" />;
    case "Viewer": return <UserCog className="h-4 w-4 text-gray-500" />;
    default: return <UserCog className="h-4 w-4 text-gray-500" />;
  }
}


export default function UsersPage() {
  const { toast } = useToast();

  const handleAddNewUser = () => {
    toast({
      title: "Add New User",
      description: "Attempting to add a new user.",
    });
  };

  const handleEditUser = (userName: string) => {
    toast({
      title: "Edit User",
      description: `Editing user: ${userName}`,
    });
  };

  const handleChangeRole = (userName: string) => {
    toast({
      title: "Change User Role",
      description: `Changing role for user: ${userName}`,
    });
  };

  const handleDeleteUser = (userName: string) => {
    toast({
      title: "Delete User",
      description: `Attempting to delete user: ${userName}`,
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-semibold">User Management</h1>
        <Button 
          variant="outline" 
          className="transition-transform hover:scale-105 active:scale-95"
          onClick={handleAddNewUser}
        >
          <UserPlus className="mr-2 h-4 w-4" />
          Add New User
        </Button>
      </div>

      <GlassCard title="Current Users" description="List of all users in the system.">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Avatar</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Login</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Avatar className="h-10 w-10 border" data-ai-hint="user avatar">
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback>{user.avatarFallback}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {roleIcon(user.role)}
                    {user.role}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={statusVariant(user.status)}>{user.status}</Badge>
                </TableCell>
                <TableCell>{user.lastLogin}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onSelect={() => handleEditUser(user.name)}>
                        <Edit3 className="mr-2 h-4 w-4" />
                        Edit User
                      </DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => handleChangeRole(user.name)}>
                        <UserCog className="mr-2 h-4 w-4" />
                        Change Role
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem 
                        className="text-red-600 hover:!text-red-600 focus:!text-red-600 focus:!bg-red-100 dark:focus:!bg-red-900/50"
                        onSelect={() => handleDeleteUser(user.name)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete User
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </GlassCard>
    </div>
  );
}
