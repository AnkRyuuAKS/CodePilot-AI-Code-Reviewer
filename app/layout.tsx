import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore: Next.js supports global CSS imports in app layout
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { QueryProvider } from "@/providers/query-provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodePilot : AI-Powered Code Review Assistant",
  description: "CodePilot is an AI-powered code review assistant that integrates with your GitHub repositories to provide intelligent feedback, security vulnerability detection, and code quality insights directly in your pull requests. With CodePilot, you can automate code reviews, catch bugs early, and maintain high code quality across your projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main>
              {children}
              <Toaster />
            </main>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
