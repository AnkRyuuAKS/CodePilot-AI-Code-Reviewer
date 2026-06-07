"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import { Menu, X, ArrowRight, User, Settings, CreditCard, LogOut, Loader2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  className?: string;
}

export function Header({ className = "" }: HeaderProps) {
  const pathname = usePathname();
  const { data: session, isPending } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Reviews", href: "/dashboard/reviews" },
    { name: "Subscription", href: "/dashboard/subscription" },
    { name: "Blog", href: "/blog" },
  ];

  const handleSignOut = async () => {
    setIsLoggingOut(true);
    try {
      await signOut();
      window.location.href = "/login";
    } catch (error) {
      console.error("Failed to sign out:", error);
      setIsLoggingOut(false);
    }
  };

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard" || pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const user = session?.user;
  const userInitials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "CP";

  return (
    <header
      className={`sticky top-0 z-50 w-full h-20 border-b border-[#40354A]/60 bg-[#1F1B24]/85 backdrop-blur-md transition-all duration-200 ${className}`}
    >
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6 lg:px-8">
        
        {/* Left Section: Logo & Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/logos/logo4-rg.png"
            alt="CodePilot Logo"
            className="h-10 w-10 object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-xl font-extrabold tracking-tight text-[#F8F7FA] font-sans">
            CodePilot
          </span>
        </Link>

        {/* Center Section: Desktop Pill Navigation */}
        <nav className="hidden md:flex items-center justify-center">
          <div className="flex items-center gap-1.5 rounded-full border border-[#40354A] bg-[#282230]/60 p-1.5 backdrop-blur-xl">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative rounded-full px-5 py-1.5 text-sm font-medium transition-all duration-200 outline-none select-none ${
                    active
                      ? "bg-violet-500/10 text-[#C084FC] shadow-sm shadow-purple-500/5"
                      : "text-[#B6AEC3] hover:bg-white/5 hover:text-[#F8F7FA]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Right Section: Auth User Area */}
        <div className="flex items-center gap-4">
          {isPending ? (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#40354A] bg-[#282230]">
              <Loader2 className="h-4 w-4 animate-spin text-[#C084FC]" />
            </div>
          ) : session ? (
            <div className="flex items-center gap-3">
              <span className="hidden lg:inline-block text-sm font-medium text-[#B6AEC3]">
                {user?.name}
              </span>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none focus:ring-0 focus-visible:outline-none">
                  <div className="relative cursor-pointer group">
                    <Avatar className="h-10 w-10 rounded-xl border border-violet-500/30 transition-all duration-200 group-hover:border-[#C084FC] group-hover:ring-2 group-hover:ring-violet-500/20">
                      <AvatarImage
                        src={user?.image || undefined}
                        alt={user?.name || "User avatar"}
                      />
                      <AvatarFallback className="rounded-xl bg-[#282230] text-[#C084FC] font-semibold">
                        {userInitials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </DropdownMenuTrigger>
                
                <DropdownMenuContent
                  className="w-56 rounded-xl border border-[#40354A] bg-[#282230] p-1.5 text-[#F8F7FA]"
                  align="end"
                  sideOffset={8}
                >
                  <div className="px-2 py-2 text-xs text-[#B6AEC3]">
                    <p className="font-semibold text-[#F8F7FA] truncate">{user?.name}</p>
                    <p className="truncate">{user?.email}</p>
                  </div>
                  <DropdownMenuSeparator className="bg-[#40354A]/80" />
                  
                  <DropdownMenuItem className="rounded-lg hover:bg-white/5 focus:bg-white/5 text-[#F8F7FA]">
                    <Link href="/dashboard/settings" className="flex items-center gap-2.5 px-2 py-2 cursor-pointer">
                      <User size={15} className="text-[#B6AEC3]" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem className="rounded-lg hover:bg-white/5 focus:bg-white/5 text-[#F8F7FA]">
                    <Link href="/dashboard/settings" className="flex items-center gap-2.5 px-2 py-2 cursor-pointer">
                      <Settings size={15} className="text-[#B6AEC3]" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem  className="rounded-lg hover:bg-white/5 focus:bg-white/5 text-[#F8F7FA]">
                    <Link href="/dashboard/subscription" className="flex items-center gap-2.5 px-2 py-2 cursor-pointer">
                      <CreditCard size={15} className="text-[#B6AEC3]" />
                      <span>Billing</span>
                    </Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuSeparator className="bg-[#40354A]/80" />
                  
                  <DropdownMenuItem
                    onClick={handleSignOut}
                    disabled={isLoggingOut}
                    className="rounded-lg text-red-400 hover:bg-red-500/10 focus:bg-red-500/10 focus:text-red-400 cursor-pointer flex items-center gap-2.5 px-2 py-2"
                  >
                    <LogOut size={15} />
                    <span>{isLoggingOut ? "Signing out..." : "Sign Out"}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="rounded-xl border border-transparent text-[#B6AEC3] hover:bg-white/5 hover:text-[#F8F7FA] px-4 py-2 text-sm font-medium"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/login">
                <Button className="rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-lg shadow-purple-500/15 border-none px-4 py-2 text-sm font-medium flex items-center gap-1.5 transition-all duration-200">
                  <span>Get Started</span>
                  <ArrowRight size={14} />
                </Button>
              </Link>
            </div>
          )}

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger >
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="rounded-xl border border-[#40354A] bg-[#282230]/50 hover:bg-[#282230] text-[#F8F7FA]"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-[300px] border-l border-[#40354A] bg-[#1F1B24] p-6 text-[#F8F7FA]"
              >
                <SheetHeader className="mb-8 p-0 text-left">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src="/logos/logo4-rg.png"
                        alt="CodePilot Logo"
                        className="h-9 w-9 object-contain rounded-lg"
                      />
                      <SheetTitle className="text-lg font-extrabold tracking-tight text-[#F8F7FA]">
                        CodePilot
                      </SheetTitle>
                    </div>
                  </div>
                </SheetHeader>

                <div className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                          active
                            ? "bg-violet-500/10 text-[#C084FC]"
                            : "text-[#B6AEC3] hover:bg-white/5 hover:text-[#F8F7FA]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>

                {!session && (
                  <div className="mt-8 border-t border-[#40354A] pt-6 flex flex-col gap-3">
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                      <Button
                        variant="ghost"
                        className="w-full justify-center rounded-xl text-[#B6AEC3] hover:bg-white/5 hover:text-[#F8F7FA]"
                      >
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full justify-center rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>
    </header>
  );
}
