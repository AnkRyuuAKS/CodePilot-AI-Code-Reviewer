"use client";

import React from "react";
import { Check, Settings, GitBranch, Shield, Heart } from "lucide-react";

export function DashboardShowcase() {
  const highlights = [
    {
      title: "Repository Management",
      description: "Connect and manage repositories from one place.",
    },
    {
      title: "Contribution Analytics",
      description: "Track commits, pull requests, and development activity.",
    },
    {
      title: "Review History",
      description: "View all generated reviews.",
    },
    {
      title: "Repository Insights",
      description: "Analyze activity and project health.",
    },
  ];

  return (
    <section className="py-24 bg-[#1F1B24] border-t border-[#40354A]/30">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Content Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-base font-semibold uppercase tracking-wider text-[#C084FC]">
                Centralized Hub
              </h2>
              <h3 className="text-3xl font-extrabold tracking-tight text-[#F8F7FA] sm:text-4xl">
                Manage Everything From One Dashboard
              </h3>
              <p className="text-sm sm:text-base text-[#B6AEC3] leading-relaxed">
                Connect your organization and gain full oversight of your engineering quality. Customize review guidelines, view insights, and review history all in a single premium workspace.
              </p>
            </div>

            {/* Clean Bullet Points */}
            <ul className="space-y-4">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-[#C084FC] mt-0.5">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#F8F7FA]">{item.title}</h4>
                    <p className="text-xs text-[#B6AEC3] mt-0.5">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Mockup Screenshot Column */}
          <div className="lg:col-span-7">
            <div className="relative w-full rounded-2xl border border-[#40354A] bg-[#282230]/40 p-2 backdrop-blur-xl shadow-2xl">
              <div className="rounded-xl border border-[#40354A] bg-[#1F1B24] overflow-hidden text-left shadow-inner">
                
                {/* Mockup Window Header */}
                <div className="flex items-center justify-between border-b border-[#40354A] bg-[#282230]/75 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                    <span className="text-[10px] text-[#B6AEC3] ml-2 font-mono">dashboard.codepilot.ai/repositories</span>
                  </div>
                  <span className="text-[10px] text-[#B6AEC3] font-mono">Admin Console</span>
                </div>

                {/* Dashboard Screenshot Mockup Content */}
                <div className="p-5 space-y-6">
                  
                  {/* Repo list panel */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-[#F8F7FA]">Active Repositories (3)</h4>
                      <button className="text-[10px] text-[#C084FC] font-semibold hover:underline">Add Repository</button>
                    </div>

                    <div className="space-y-2">
                      {/* Repo 1 */}
                      <div className="flex items-center justify-between p-3 border border-[#40354A] bg-[#282230]/30 rounded-xl hover:border-violet-500/20 transition-all duration-200">
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 bg-[#1F1B24] border border-[#40354A] rounded-lg">
                            <GitBranch size={14} className="text-[#C084FC]" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#F8F7FA]">codepilot-app</p>
                            <p className="text-[9px] text-[#B6AEC3]">Connected 2 weeks ago</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">Active</span>
                          <span className="text-[9px] text-[#B6AEC3]">98% Coverage</span>
                        </div>
                      </div>

                      {/* Repo 2 */}
                      <div className="flex items-center justify-between p-3 border border-[#40354A] bg-[#282230]/30 rounded-xl hover:border-violet-500/20 transition-all duration-200">
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 bg-[#1F1B24] border border-[#40354A] rounded-lg">
                            <Settings size={14} className="text-[#C084FC]" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#F8F7FA]">auth-service</p>
                            <p className="text-[9px] text-[#B6AEC3]">Connected 1 month ago</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">Active</span>
                          <span className="text-[9px] text-[#B6AEC3]">94% Coverage</span>
                        </div>
                      </div>

                      {/* Repo 3 */}
                      <div className="flex items-center justify-between p-3 border border-[#40354A] bg-[#282230]/30 rounded-xl hover:border-violet-500/20 transition-all duration-200">
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 bg-[#1F1B24] border border-[#40354A] rounded-lg">
                            <Settings size={14} className="text-[#C084FC]" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#F8F7FA]">billing-gateway</p>
                            <p className="text-[9px] text-[#B6AEC3]">Connected 3 days ago</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] bg-[#40354A]/80 text-[#B6AEC3] px-2 py-0.5 rounded">Setup pending</span>
                          <span className="text-[9px] text-[#B6AEC3]">&mdash;</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Insights card */}
                  <div className="border border-[#40354A]/60 bg-[#282230]/30 p-4 rounded-xl space-y-3">
                    <h5 className="text-[11px] font-bold text-[#F8F7FA]">Repository Health Score</h5>
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-black text-violet-400">92/100</div>
                      <div className="flex-1 space-y-1">
                        <div className="h-1.5 w-full bg-[#40354A] rounded-full overflow-hidden">
                          <div className="h-full w-[92%] bg-[#C084FC] rounded-full" />
                        </div>
                        <div className="flex justify-between text-[9px] text-[#B6AEC3]">
                          <span>Critical Security Flaws: 0</span>
                          <span>Logical Bugs: 3</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
