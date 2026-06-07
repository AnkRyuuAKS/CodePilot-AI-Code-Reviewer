"use client";

import React from "react";
import { Check, ShieldAlert, Sparkles, MessageSquare, AlertCircle, FileCode } from "lucide-react";

export function AiReviewShowcase() {
  const highlights = [
    { title: "Bug Reports", desc: "Instantly flags runtime exceptions and logical errors." },
    { title: "Security Warnings", desc: "Highlights data leakage and injection risks." },
    { title: "Optimization Suggestions", desc: "Points out algorithm efficiency and performance wins." },
    { title: "Refactoring Recommendations", desc: "Suggests structures to keep code DRY and maintainable." },
    { title: "Best Practice Guidance", desc: "Aligns reviews with clean code principles." },
  ];

  return (
    <section className="py-24 bg-[#1F1B24] border-t border-[#40354A]/30">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Side: Mockup GitHub Inline Review Comment */}
          <div className="lg:col-span-7 order-last lg:order-first">
            <div className="relative w-full rounded-2xl border border-[#40354A] bg-[#282230]/40 p-2 backdrop-blur-xl shadow-2xl">
              <div className="rounded-xl border border-[#40354A] bg-[#1F1B24] overflow-hidden text-left shadow-inner">
                
                {/* Window Header */}
                <div className="flex items-center justify-between border-b border-[#40354A] bg-[#282230]/75 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                    <span className="text-[10px] text-[#B6AEC3] ml-2 font-mono">github.com/codepilot/app/pull/12</span>
                  </div>
                  <span className="text-[10px] text-[#B6AEC3] font-mono">Files Changed</span>
                </div>

                {/* Code Diff & Inline Comment Mockup */}
                <div className="p-4 font-mono text-[11px] overflow-x-auto space-y-4">
                  
                  {/* Code Block */}
                  <div className="rounded-lg border border-[#40354A] bg-[#282230]/20 overflow-hidden leading-relaxed">
                    <div className="bg-[#282230]/40 px-3 py-1.5 border-b border-[#40354A]/80 flex items-center justify-between text-zinc-400">
                      <span>api/routes/users.ts</span>
                      <span>Line 42</span>
                    </div>
                    <div className="p-3">
                      <div><span className="text-zinc-500">41</span> &nbsp; <span className="text-purple-400">const</span> jwtToken = req.headers.authorization;</div>
                      <div className="bg-red-500/10 border-l-2 border-red-500 py-0.5"><span className="text-zinc-500">42</span> <span className="text-red-400">-</span> &nbsp; <span className="text-purple-400">const</span> decoded = jwt.decode(jwtToken);</div>
                      <div className="bg-emerald-500/10 border-l-2 border-emerald-500 py-0.5"><span className="text-zinc-500">42</span> <span className="text-emerald-400">+</span> &nbsp; <span className="text-purple-400">const</span> decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);</div>
                    </div>
                  </div>

                  {/* CodePilot Review Comment box */}
                  <div className="border border-[#40354A] bg-[#282230] rounded-xl overflow-hidden shadow-lg">
                    <div className="bg-[#282230]/80 border-b border-[#40354A]/70 px-3 py-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center text-[9px] text-white font-bold">CP</div>
                        <span className="text-xs font-bold text-[#F8F7FA]">CodePilot</span>
                        <span className="text-[9px] bg-red-500/10 text-red-400 border border-red-500/20 px-1.5 py-0.2 rounded font-sans">Security Warning</span>
                      </div>
                      <span className="text-[10px] text-[#B6AEC3]">Just now</span>
                    </div>

                    <div className="p-4 space-y-3 font-sans leading-relaxed text-[#B6AEC3]">
                      <p className="text-xs text-[#F8F7FA] font-semibold">JWT Verification Failure</p>
                      <p className="text-xs">
                        Using <code className="font-mono text-amber-400 text-[10px] bg-[#1F1B24] px-1 py-0.5 rounded">jwt.decode</code> only decodes the payload without validating the signature. Unverified signatures allow users to forge tokens. Always verify tokens using <code className="font-mono text-emerald-400 text-[10px] bg-[#1F1B24] px-1 py-0.5 rounded">jwt.verify</code>.
                      </p>
                      
                      <div className="flex items-center gap-3 pt-2 text-[10px] font-mono border-t border-[#40354A]/60">
                        <span className="text-red-400 flex items-center gap-1"><AlertCircle size={10} /> Signature Unchecked</span>
                        <span className="text-[#C084FC] flex items-center gap-1"><Sparkles size={10} /> Auto-fix proposed</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-base font-semibold uppercase tracking-wider text-[#C084FC]">
                Context-Aware Reviews
              </h2>
              <h3 className="text-3xl font-extrabold tracking-tight text-[#F8F7FA] sm:text-4xl">
                Understand Every Review
              </h3>
              <p className="text-sm sm:text-base text-[#B6AEC3] leading-relaxed">
                CodePilot runs static checks alongside deep semantic AI analyses. Comments are posted **directly inside GitHub pull requests** exactly where the issue is, allowing you to review suggestions, accept auto-fixes, and collaborate seamlessly.
              </p>
            </div>

            {/* List of generated report details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-3.5 border border-[#40354A]/50 bg-[#282230]/20 rounded-xl">
                  <h4 className="text-xs font-bold text-[#F8F7FA]">{item.title}</h4>
                  <p className="text-[11px] text-[#B6AEC3] mt-1 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
