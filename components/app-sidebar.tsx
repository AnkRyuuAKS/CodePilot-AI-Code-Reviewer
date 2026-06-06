"use client";

import React from "react";
import { BookOpen, Settings, Moon, Sun, LogOut } from "lucide-react";
import { FaGithub } from "react-icons/fa"
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from "./ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Logout from "@/app/(auth)/_components/logout"
import { Button } from "./ui/button";

export const AppSidebar = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    const { data: session } = useSession();

    useEffect(() => {
        setMounted(true);
    }, []);

    const navItems = [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: BookOpen,
        },
        {
            title: "Repository",
            url: "/dashboard/repository",
            icon: FaGithub,
        },
        {
            title: "Reviews",
            url: "/dashboard/reviews",
            icon: BookOpen,
        },
        {
            title: "Subscription",
            url: "/dashboard/subscription",
            icon: BookOpen,
        },
        {
            title: "Settings",
            url: "/dashboard/settings",
            icon: Settings,
        },
    ];

    const isActive = (url: string) => {
        return pathname === url || pathname.startsWith(url + "/dashboard");
    };

    if (!mounted || !session) return null;

    const user = session.user;
    const userName = user.name || "Guest";
    const userEmail = user.email || "";
    const userAvatar = user.image || "";
    const userInitials = userName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();

    return (
        <Sidebar className="border-r border-border/50">
            <SidebarHeader className="border-b border-border/50">
                <div className="flex flex-col gap-4 px-3 py-6">
                    <div className="flex items-center gap-4 rounded-xl border border-border/50 bg-card px-3 py-4 transition-colors hover:bg-card/80">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                            <FaGithub className="h-6 w-6" />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold tracking-wide text-muted-foreground">
                                Connected Account
                            </p>

                            <p className="truncate text-sm font-medium">
                                @{userName}
                            </p>
                        </div>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent className="flex-col gap-1 px-3 py-6">
                <div className="mb-2">
                    <p className="text-sidebar-foreground/60 mb-3 px-3 text-xs font-semibold tracking-widest uppercase">
                        Menu
                    </p>
                </div>

                <SidebarMenu className="gap-2">
                    {navItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <Link href={item.url}>
                                <SidebarMenuButton
                                    tooltip={item.title}
                                    className={`h-11 rounded-xl px-4 transition-all duration-200 ${isActive(item.url)
                                        ? "border border-violet-500/20 bg-violet-500/10 text-violet-300 font-semibold"
                                        : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                                        }`}
                                >
                                    <item.icon className="h-5 w-5 shrink-0" />
                                    <span className="text-sm font-medium">{item.title}</span>
                                </SidebarMenuButton>
                            </Link>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>

            <SidebarFooter className="border-t px-3 py-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger >
                                <div>
                                    <SidebarMenuButton
                                        size="lg"
                                        className="h-14 rounded-xl px-4 transition-all duration-200 hover:bg-sidebar-accent/50 data-[state=open]:bg-sidebar-accent"
                                    >
                                        <Avatar className="h-10 w-10 shrink-0 rounded-xl border border-violet-500/20">
                                            <AvatarImage
                                                src={userAvatar || "/placeholder.svg"}
                                                alt={userName}
                                            />
                                            <AvatarFallback className="rounded-xl bg-violet-500/10 text-violet-300">
                                                {userInitials}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="grid min-w-0 flex-1 text-left text-sm leading-relaxed">
                                            <span className="truncate text-base font-semibold">
                                                {userName}
                                            </span>
                                            <span className="text-sidebar-foreground/70 truncate text-xs">
                                                {userEmail}
                                            </span>
                                        </div>
                                    </SidebarMenuButton>
                                </div>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent
                                className="w-80 rounded-xl border border-border/50 bg-card p-2"
                                align="end"
                                side="right"
                                sideOffset={8}
                            >
                                <div className="border-t border-b px-2 py-3">
                                    <DropdownMenuItem>
                                        <Avatar className="h-10 w-10 shrink-0 rounded-lg">
                                            <AvatarImage
                                                src={userAvatar || "/placeholder.svg"}
                                                alt={userName}
                                            />
                                            <AvatarFallback className="rounded-lg">
                                                {userInitials}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="grid min-w-0 flex-1 text-left text-sm leading-relaxed">
                                            <span className="truncate text-base font-semibold">
                                                {userName}
                                            </span>
                                            <span className="text-sidebar-foreground/70 truncate text-xs">
                                                {userEmail}
                                            </span>
                                        </div>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() =>
                                            setTheme(theme === "dark" ? "light" : "dark")
                                        }
                                        className="cursor-pointer flex items-center gap-3 rounded-lg px-3 py-3"
                                    >
                                        {theme === "dark" ? (
                                            <>
                                                <Sun className="h-5 w-5 shrink-0" />
                                                <span>Light mode</span>
                                            </>
                                        ) : (
                                            <>
                                                <Moon className="h-5 w-5 shrink-0" />
                                                <span>Dark mode</span>
                                            </>
                                        )}
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="my-1 cursor-pointer rounded-lg px-3 py-3 font-medium transition-colors hover:bg-red-500/10 hover:text-red-400">
                                        <LogOut className="mr-3 h-5 w-5 shrink-0" />
                                        <Logout>Sign out</Logout>
                                    </DropdownMenuItem>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
};