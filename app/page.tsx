import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Header } from "@/components/header";
import { Hero } from "@/components/homeComponents/hero";
import { Problem } from "@/components/homeComponents/problem";
import { HowItWorks } from "@/components/homeComponents/how-it-works";
import { Features } from "@/components/homeComponents/features";
import { DashboardShowcase } from "@/components/homeComponents/dashboard-showcase";
import { AiReviewShowcase } from "@/components/homeComponents/ai-review-showcase";
import { Pricing } from "@/components/homeComponents/pricing";
import { FaGithub } from "react-icons/fa";
import { Star } from "lucide-react";

export default async function Home() {

  return (
    <div className="min-h-screen bg-[#1F1B24] text-white flex flex-col font-sans select-none overflow-x-hidden">
      {/* Premium Navigation Header */}
      <Header />

      {/* Landing Page Content */}
      <main className="flex-1">

        {/* Section 1: Hero */}
        <Hero/>

        {/* Section 2: Problem Section */}
        <Problem />

        {/* Section 3: How CodePilot Works */}
        <HowItWorks />

        {/* Section 4: Features Grid */}
        <Features />

        {/* Section 5: Dashboard Showcase */}
        <DashboardShowcase />

        {/* Section 6: AI Review Showcase */}
        <AiReviewShowcase />

        {/* Section 7: Subscription Section */}
        <Pricing />

      </main>

      {/* Simple Footer */}
      <footer className="border-t border-[#40354A]/30 bg-[#1F1B24] py-12 text-[#B6AEC3]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            {/* Brand */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-400 to-purple-600 text-white font-bold text-sm shadow-lg shadow-purple-500/20">
                  CP
                </div>

                <div>
                  <h3 className="font-bold tracking-tight text-[#F8F7FA]">
                    CodePilot
                  </h3>
                  <p className="text-xs text-zinc-500">
                    AI-powered code reviews for modern teams
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a
                href="/dashboard"
                className="transition-colors hover:text-[#F8F7FA]"
              >
                Dashboard
              </a>

              <a
                href="/dashboard/reviews"
                className="transition-colors hover:text-[#F8F7FA]"
              >
                Reviews
              </a>

              <a
                href="/dashboard/subscription"
                className="transition-colors hover:text-[#F8F7FA]"
              >
                Pricing
              </a>

              <a
                href="/blog"
                className="transition-colors hover:text-[#F8F7FA]"
              >
                Blog
              </a>
            </div>

            {/* GitHub CTA */}
            <a
              href="https://github.com/AnkRyuuAKS/CodePilot-AI-Code-Reviewer"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-xl border border-[#40354A] bg-[#2A2433] px-4 py-2 text-sm font-medium text-[#F8F7FA] transition-all hover:border-violet-500/50 hover:bg-[#312B3D]"
            >
              <FaGithub className="h-4 w-4" />

              <span>Star on GitHub</span>

              <Star className="h-4 w-4 transition-transform group-hover:scale-110" />
            </a>
          </div>

          <div className="mt-8 border-t border-[#40354A]/30 pt-6 text-center">
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} CodePilot. Built for developers who ship.
            </p>
          </div>
        </div>
      </footer>
    </div>

  );

}