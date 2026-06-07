"use client";

import React from "react";
import { GitPullRequest, ArrowRight, Brain, MessageSquare, Database, FileDiff, Cpu, Code } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="py-24 bg-[#1F1B24] border-t border-[#40354A]/30">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        
        {/* Title & Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20 space-y-4">
          <h2 className="text-base font-semibold uppercase tracking-wider text-[#C084FC]">
            Workflow Pipeline
          </h2>
          <h3 className="text-3xl font-extrabold tracking-tight text-[#F8F7FA] sm:text-5xl">
            How CodePilot Reviews Your Pull Requests
          </h3>
          <p className="text-base sm:text-lg text-[#B6AEC3] max-w-2xl mx-auto">
            CodePilot plugs directly into your GitHub workspace, automating code verification in three transparent steps.
          </p>
        </div>

        {/* 3-Step Horizontal Timeline (collapses to vertical on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 max-w-6xl mx-auto relative">
          
          {/* Connector lines (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-violet-500/20 via-[#40354A] to-violet-500/20 z-0 transform -translate-y-24" />

          {/* STEP 1 */}
          <div className="flex flex-col space-y-6 relative z-10">
            {/* Step badge */}
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/10 border border-[#C084FC]/30 text-[#C084FC] font-mono font-bold text-sm shrink-0">
                01
              </div>
              <h4 className="text-xl font-bold text-[#F8F7FA]">Pull Request Opened</h4>
            </div>

            <p className="text-sm text-[#B6AEC3] leading-relaxed">
              Developer creates or updates a pull request on GitHub, instantly triggering CodePilot through webhook integrations.
            </p>

            {/* GitHub PR Illustration */}
            <div className="border border-[#40354A] bg-[#282230]/40 p-4 rounded-2xl flex flex-col gap-3 shadow-md h-56 justify-center">
              <div className="flex items-center gap-3 border-b border-[#40354A]/40 pb-3">
                <div className="bg-emerald-500/10 text-emerald-400 p-1.5 rounded-lg">
                  <GitPullRequest size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-[#F8F7FA] truncate">feat: add-social-auth</p>
                  <p className="text-[10px] text-[#B6AEC3]">opened by <span className="font-semibold text-violet-400">octocat</span> &bull; main &larr; feature</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-3/4 rounded bg-[#40354A]" />
                <div className="h-2 w-1/2 rounded bg-[#40354A]" />
              </div>
              <div className="flex gap-2 mt-2">
                <span className="text-[10px] bg-[#40354A]/80 text-[#B6AEC3] px-2.5 py-1 rounded-md">1 commit</span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-md font-mono">Checks pending</span>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="flex flex-col space-y-6 relative z-10">
            {/* Step badge */}
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/10 border border-[#C084FC]/30 text-[#C084FC] font-mono font-bold text-sm shrink-0">
                02
              </div>
              <h4 className="text-xl font-bold text-[#F8F7FA]">AI Analysis Engine</h4>
            </div>

            <p className="text-sm text-[#B6AEC3] leading-relaxed">
              CodePilot automatically fetches the PR diff, builds complete repository context, constructs prompts, and runs bug, security, and quality scans.
            </p>

            {/* Pipeline Flowchart Visualizer */}
            <div className="border border-[#40354A] bg-[#282230]/40 p-4 rounded-2xl flex flex-col justify-center gap-2 shadow-md h-56">
              <div className="grid grid-cols-5 items-center justify-center gap-1 font-mono text-[9px]">
                
                {/* Node 1: GitHub */}
                <div className="flex flex-col items-center gap-1.5 p-1 bg-[#1F1B24] border border-[#40354A] rounded-lg">
                  <GitPullRequest size={12} className="text-purple-400" />
                  <span className="text-[#F8F7FA] text-center scale-90">GitHub</span>
                </div>
                
                <ArrowRight size={10} className="text-[#B6AEC3] justify-self-center animate-pulse" />
                
                {/* Node 2: Diff Extract */}
                <div className="flex flex-col items-center gap-1.5 p-1 bg-[#1F1B24] border border-[#40354A] rounded-lg">
                  <FileDiff size={12} className="text-purple-400" />
                  <span className="text-[#F8F7FA] text-center scale-90">Diff</span>
                </div>
                
                <ArrowRight size={10} className="text-[#B6AEC3] justify-self-center animate-pulse" />

                {/* Node 3: Context */}
                <div className="flex flex-col items-center gap-1.5 p-1 bg-[#1F1B24] border border-[#40354A] rounded-lg">
                  <Database size={12} className="text-purple-400" />
                  <span className="text-[#F8F7FA] text-center scale-90">Context</span>
                </div>
                
              </div>

              {/* Vertical arrow block */}
              <div className="flex justify-center my-0.5">
                <span className="h-4 w-[1px] bg-dashed border-l border-[#40354A] block" />
              </div>

              <div className="grid grid-cols-3 items-center justify-center gap-2 font-mono text-[9px]">
                
                <div className="col-start-2 flex flex-col items-center gap-1.5 p-1 bg-[#1F1B24] border border-[#40354A] rounded-lg">
                  <Cpu size={12} className="text-purple-400" />
                  <span className="text-[#F8F7FA] text-center scale-90">Generator</span>
                </div>
                
                <ArrowRight size={10} className="text-[#B6AEC3] justify-self-center animate-pulse" />

                <div className="flex flex-col items-center gap-1.5 p-1.5 bg-[#C084FC]/10 border border-[#C084FC]/40 rounded-lg">
                  <Brain size={12} className="text-[#C084FC]" />
                  <span className="text-[#C084FC] text-center font-bold scale-90">LLM</span>
                </div>
                
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="flex flex-col space-y-6 relative z-10">
            {/* Step badge */}
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/10 border border-[#C084FC]/30 text-[#C084FC] font-mono font-bold text-sm shrink-0">
                03
              </div>
              <h4 className="text-xl font-bold text-[#F8F7FA]">Review Posted</h4>
            </div>

            <p className="text-sm text-[#B6AEC3] leading-relaxed">
              AI comments, safety reviews, and quality optimization warnings are submitted back onto relevant lines in the PR thread.
            </p>

            {/* GitHub review comment example */}
            <div className="border border-[#40354A] bg-[#282230]/40 p-4 rounded-2xl flex flex-col gap-3 shadow-md h-56 justify-center">
              <div className="bg-[#1F1B24] border border-[#40354A]/80 rounded-xl overflow-hidden text-[10px]">
                <div className="bg-[#282230]/50 border-b border-[#40354A]/80 px-3 py-1.5 flex items-center justify-between text-zinc-400">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center text-[8px] text-white font-bold">CP</div>
                    <span className="font-bold text-[#F8F7FA]">CodePilot</span>
                    <span className="text-[9px] bg-violet-500/10 text-[#C084FC] px-1.5 py-0.5 rounded font-sans">app</span>
                  </div>
                  <span>2m ago</span>
                </div>
                <div className="p-3 space-y-1.5 font-sans leading-relaxed text-[#B6AEC3]">
                  <p className="font-bold text-[#F8F7FA]">Review Summary</p>
                  <p>Analyzed 2 files. Detected 1 minor security issue in OAuth callback. Refactoring is recommended.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
