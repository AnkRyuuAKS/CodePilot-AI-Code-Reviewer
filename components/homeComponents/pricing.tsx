"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";

export function Pricing() {
  const { data: session } = useSession();
  const freeFeatures = [
    "Limited repositories (up to 3)",
    "Limited reviews (50 per month)",
    "Community support via Discord",
    "Basic bug detection rules",
  ];

  const proFeatures = [
    "Unlimited connected repositories",
    "Unlimited AI reviews and scans",
    "Faster AI processing queue",
    "Priority email & Slack support",
    "Advanced repository quality analytics",
    "Custom review prompt rules",
  ];

  return (
    <section className="py-24 bg-[#1F1B24] border-t border-[#40354A]/30">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        
        {/* Title */}
        <div className="mx-auto max-w-3xl text-center mb-16 space-y-4">
          <h2 className="text-base font-semibold uppercase tracking-wider text-[#C084FC]">
            Pricing Plans
          </h2>
          <h3 className="text-3xl font-extrabold tracking-tight text-[#F8F7FA] sm:text-5xl">
            Simple Pricing
          </h3>
          <p className="text-base sm:text-lg text-[#B6AEC3] max-w-2xl mx-auto">
            Choose the workspace plan that fits your engineering team. Start reviewing code in minutes.
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* FREE PLAN */}
          <div className="flex flex-col justify-between p-8 rounded-3xl border border-[#40354A] bg-[#282230]/40 text-[#F8F7FA] hover:border-[#40354A]/80 transition-colors duration-300">
            <div>
              <div className="mb-6">
                <h4 className="text-lg font-bold text-[#F8F7FA]">Free Plan</h4>
                <p className="text-xs text-[#B6AEC3] mt-1">For hobbyists and open source developers.</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-[#F8F7FA]">$0</span>
                  <span className="text-sm font-semibold text-[#B6AEC3]">/ month</span>
                </div>
              </div>

              <ul className="space-y-4 border-t border-[#40354A] pt-6 mb-8 text-sm">
                {freeFeatures.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#B6AEC3]">
                    <Check size={14} className="text-[#C084FC] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/login" className="w-full">
              <Button
                variant="ghost"
                className="w-full rounded-xl border border-[#40354A] bg-[#282230]/40 text-[#B6AEC3] hover:bg-[#282230] hover:text-[#F8F7FA] py-5 font-semibold text-sm"
              >
                Start Free
              </Button>
            </Link>
          </div>

          {/* PRO PLAN */}
          <div className="relative flex flex-col justify-between p-8 rounded-3xl border-2 border-[#C084FC] bg-[#282230] text-[#F8F7FA] shadow-xl shadow-purple-500/5 hover:scale-[1.01] transition-transform duration-300">
            {/* Poplular Plan Badge */}
            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#C084FC] text-[#1F1B24] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Most Popular
            </div>

            <div>
              <div className="mb-6">
                <h4 className="text-lg font-bold text-[#F8F7FA]">Pro Plan</h4>
                <p className="text-xs text-[#C084FC] mt-1">For fast-moving engineering teams.</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-[#F8F7FA]">$29</span>
                  <span className="text-sm font-semibold text-[#B6AEC3]">/ user / mo</span>
                </div>
              </div>

              <ul className="space-y-4 border-t border-[#40354A] pt-6 mb-8 text-sm">
                {proFeatures.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#F8F7FA]">
                    <Check size={14} className="text-[#C084FC] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href={session ? "/dashboard/subscription" : "/login"} className="w-full">
              <Button className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold text-sm py-5 flex items-center justify-center gap-1.5 shadow-lg shadow-purple-500/20">
                <span>Upgrade to Pro</span>
                <ArrowRight size={14} />
              </Button>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
