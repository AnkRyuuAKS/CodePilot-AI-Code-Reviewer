import type React from "react";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { requireAuth } from "@/utils/auth-utils";

const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  await requireAuth();

  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <div className="relative">
          <SidebarTrigger
            className="
      fixed
      left-10 ml-3.5
      top-5
      z-50
      h-11
      w-11
      rounded-xl
      border
      border-border/50
      bg-card
      shadow-md
      hover:bg-violet-500/10
      hover:text-violet-300
    "
          />

          <header className="sticky top-0 z-20 h-20 border-b border-border/50 bg-background/80 backdrop-blur-md">
            <div className="flex items-center gap-4">
              {/* Logo */}
              <img
                src="/logos/logo4-rg.png"
                alt="CodePilot Logo"
                className="h-11 w-11 object-contain rounded-xl shadow-sm"
              />

              {/* Brand */}
              <div>
                <h1 className="text-xl font-bold tracking-tight">
                  CodePilot
                </h1>
                <p className="text-xs text-muted-foreground">
                  AI-powered code reviews
                </p>
              </div>
            </div>
          </header>
        </div>

        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;