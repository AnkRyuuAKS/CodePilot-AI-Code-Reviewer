"use client";

import React from "react";
import { Bug, ShieldCheck, FileCheck, Zap, Repeat, GitFork } from "lucide-react";

export function Features() {
  const items = [
    {
      icon: Bug,
      title: "Bug Detection",
      description: "Automatically pinpoint logical syntax bugs, index errors, null dereferences, and connection leaks before code gets merged.",
    },
    {
      icon: ShieldCheck,
      title: "Security Analysis",
      description: "Detect hardcoded API keys, environment credentials, SQL injections, and outdated packages directly in the PR diff.",
    },
    {
      icon: FileCheck,
      title: "Code Quality Insights",
      description: "Receive actionable recommendations regarding code complexity, duplicate blocks, styling, and test coverage suggestions.",
    },
    {
      icon: Zap,
      title: "Fast Reviews",
      description: "Cut down code review cycles from days to minutes. Reviews trigger instantly, allowing developers to iterate quickly.",
    },
    {
      icon: Repeat,
      title: "Consistent Feedback",
      description: "Ensure that every pull request, no matter how small or complex, receives the same high-standard quality assessment every single time.",
    },
    {
      icon: GitFork,
      title: "Repository Context Awareness",
      description: "Reviews are not isolated diff checks. CodePilot maps repository structures and architecture patterns for accurate contextual feedback.",
    },
  ];

  return (
    <section className="py-24 bg-[#1F1B24] border-t border-[#40354A]/30">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        
        {/* Title */}
        <div className="mx-auto max-w-3xl text-center mb-16 space-y-4">
          <h2 className="text-base font-semibold uppercase tracking-wider text-[#C084FC]">
            Robust Feature Set
          </h2>
          <h3 className="text-3xl font-extrabold tracking-tight text-[#F8F7FA] sm:text-5xl">
            Why Developers Use CodePilot
          </h3>
          <p className="text-base sm:text-lg text-[#B6AEC3] max-w-2xl mx-auto">
            CodePilot works side-by-side with your development team to enforce best practices, secure APIs, and ship clean code.
          </p>
        </div>

        {/* 2-column feature grid layout (2 columns x 3 rows on large screens) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl border border-[#40354A] bg-[#282230] p-8 hover:bg-[#282230]/80 transition-all duration-300 hover:border-violet-500/20 shadow-md"
            >
              {/* Subtle accent hover decoration */}
              <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-[#C084FC]/40 to-[#A855F7]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-3xl" />
              
              <div className="flex gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-[#C084FC] shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#F8F7FA] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#B6AEC3] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
