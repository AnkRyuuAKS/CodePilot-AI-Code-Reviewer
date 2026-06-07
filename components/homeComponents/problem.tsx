"use client";

import React from "react";
import { Clock, ShieldAlert, Sparkles } from "lucide-react";

export function Problem() {
  const cards = [
    {
      icon: Clock,
      title: "Slow Manual Reviews",
      description: "Reviewers spend too much time reviewing repetitive code changes and formatting inconsistencies, delaying shipping speeds.",
    },
    {
      icon: ShieldAlert,
      title: "Missed Bugs",
      description: "Critical security flaws and logical bugs often reach production simply because manual reviewers overlook them under pressure.",
    },
    {
      icon: Sparkles,
      title: "Inconsistent Feedback",
      description: "Review quality fluctuates wildly depending on reviewer experience, seniority, and workload, creating knowledge silos.",
    },
  ];

  return (
    <section className="py-24 bg-[#1F1B24] border-t border-[#40354A]/30">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        
        {/* Title & Headline */}
        <div className="mx-auto max-w-3xl text-center mb-16 space-y-4">
          <h2 className="text-base font-semibold uppercase tracking-wider text-[#C084FC]">
            The Engineering Bottleneck
          </h2>
          <h3 className="text-3xl font-extrabold tracking-tight text-[#F8F7FA] sm:text-5xl">
            Code Reviews Are Slowing Teams Down
          </h3>
          <p className="text-base sm:text-lg text-[#B6AEC3] max-w-2xl mx-auto">
            Modern development cycles demand agility, yet manual review cycles remain bottlenecked by repetitive workflows and human fatigue.
          </p>
        </div>

        {/* 3 cards in one row layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-[#40354A] bg-[#282230] p-8 hover:bg-[#282230]/80 transition-all duration-300 hover:border-violet-500/20 shadow-md"
            >
              {/* Subtle hover accent line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#C084FC]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-[#C084FC] mb-6 group-hover:scale-105 transition-transform duration-200">
                <card.icon className="h-6 w-6" />
              </div>

              <h4 className="text-lg font-bold text-[#F8F7FA] mb-3">
                {card.title}
              </h4>
              <p className="text-sm text-[#B6AEC3] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
