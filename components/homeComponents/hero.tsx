"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle, GitPullRequest, AlertCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";


export function Hero() {
    const { data: session } = useSession();
  
  return (
    <section className="relative overflow-hidden pt-24 pb-20 lg:pt-36 lg:pb-32 bg-[#1F1B24]">
      
      {/* Background Ambient Glows & Grid Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#40354a_1px,transparent_1px),linear-gradient(to_bottom,#40354a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.15]" />
        
        {/* Colorful glows */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-violet-500/10 blur-[150px]" />
        <div className="absolute bottom-[-5%] left-1/3 h-[400px] w-[500px] rounded-full bg-fuchsia-500/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#40354A] bg-[#282230]/80 px-4 py-1.5 text-xs text-[#C084FC] mb-8 animate-fade-in shadow-md hover:border-[#C084FC]/30 transition-all duration-300">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#C084FC] animate-pulse" />
            <span className="font-semibold tracking-wide font-sans">CodePilot v1.0 is now live</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-extrabold tracking-tight text-[#F8F7FA] sm:text-7xl lg:leading-[1.1] mb-6 max-w-3xl">
            AI-Powered{" "}
            <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Code Reviews
            </span>{" "}
            for Faster Pull Requests
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-[#B6AEC3] leading-relaxed max-w-2xl mb-10">
            Catch bugs, security issues, and code quality problems before they reach production.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 w-full sm:w-auto">
            <Link href={session ? "/dashboard" : "/login"} className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-xl shadow-purple-500/20 border-none px-8 py-6 text-sm font-semibold flex items-center justify-center gap-2 group transition-all duration-200 hover:scale-[1.01]">
                <span>{session ? "Go to Dashboard" : "Get Started"}</span>
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link href="#demo" className="w-full sm:w-auto">
              <Button
                variant="ghost"
                className="w-full sm:w-auto rounded-xl border border-[#40354A] bg-[#282230]/40 text-[#B6AEC3] hover:bg-[#282230] hover:text-[#F8F7FA] px-8 py-6 text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200"
              >
                <Play size={14} className="fill-[#B6AEC3] stroke-none" />
                <span>View Demo</span>
              </Button>
            </Link>
          </div>

          {/* Centered Dashboard Mockup Screenshot with Glowing Edges */}
          <div className="relative w-full max-w-5xl rounded-2xl border border-[#40354A] bg-[#282230]/30 p-2 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-violet-500/30">
            {/* Ambient accent glow around mockup */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

            <div className="rounded-xl border border-[#40354A] bg-[#1F1B24] overflow-hidden text-left shadow-inner">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-[#40354A] bg-[#282230]/75 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="text-[11px] text-[#B6AEC3] ml-2 font-mono">github.com/codepilot/app/pull/12</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#C084FC] font-mono bg-[#1F1B24] border border-[#40354A] px-2.5 py-1 rounded-md">
                  <GitPullRequest size={12} className="text-[#C084FC]" />
                  <span>PR #12 - Active</span>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-6 font-mono text-xs sm:text-sm overflow-x-auto select-none leading-relaxed">
                <div className="text-zinc-500">1 // Fetch user details securely</div>
                <div>
                  <span className="text-purple-400">async function</span>{" "}
                  <span className="text-blue-400">getUserProfile</span>
                  <span className="text-zinc-300">(userId: string) &#123;</span>
                </div>
                <div>
                  <span className="text-zinc-500">3</span> &nbsp;&nbsp;
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-zinc-300">db =</span>{" "}
                  <span className="text-purple-400">await</span>{" "}
                  <span className="text-blue-400">connectToDatabase</span>
                  <span className="text-zinc-300">();</span>
                </div>
                
                {/* Red line (removed) */}
                <div className="bg-red-500/10 border-l-2 border-red-500 py-1 my-1">
                  <span className="text-red-400/80 pl-2">-</span>&nbsp;&nbsp;
                  <span className="text-zinc-300">
                    <span className="text-purple-400">return</span> db.query(
                    <span className="text-green-300">&apos;SELECT * FROM profiles WHERE id = &apos;</span> + userId
                    );
                  </span>
                </div>
                
                {/* Green line (added) */}
                <div className="bg-emerald-500/10 border-l-2 border-emerald-500 py-1 my-1">
                  <span className="text-emerald-400 pl-2">+</span>&nbsp;&nbsp;
                  <span className="text-zinc-300">
                    <span className="text-purple-400">return</span> db.query(
                    <span className="text-green-300">&apos;SELECT * FROM profiles WHERE id = $1&apos;</span>, [userId]
                    );
                  </span>
                </div>
                
                {/* AI Review Comment Callout */}
                <div className="mt-6 ml-4 sm:ml-8 rounded-xl border border-violet-500/20 bg-violet-500/5 p-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/10 rounded-full blur-xl pointer-events-none" />
                  <div className="flex items-start gap-3">
                    <img
                      src="/logos/logo4-rg.png"
                      alt="CodePilot"
                      className="h-8 w-8 object-contain rounded-lg shrink-0"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#F8F7FA]">CodePilot</span>
                        <span className="text-[10px] bg-red-500/10 text-red-400 border border-red-500/20 px-1.5 py-0.5 rounded font-sans uppercase tracking-wider font-semibold">Security Alert</span>
                      </div>
                      <p className="text-xs text-[#B6AEC3] leading-normal font-sans">
                        SQL injection vulnerability detected. The original query concatenated raw inputs directly. I have converted it to use parameterized queries to secure the database call.
                      </p>
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
