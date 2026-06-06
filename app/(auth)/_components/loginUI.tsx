"use client";

import { signIn } from "@/lib/auth-client";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const loginUI = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGithubLogin = async () => {
    setIsLoading(true);

    try {
      await signIn();
      console.log("the data is loaded");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#1F1B24] text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 flex min-h-screen">
        {/* Left Section */}
        <div className="flex flex-1 items-center px-12 lg:px-24">
          <div className="max-w-xl">
            {/* Logo */}
            <div className="mb-12 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400 to-purple-600 shadow-lg shadow-purple-500/25">
                <span className="text-lg font-bold">CP</span>
              </div>

              <span className="text-2xl font-bold tracking-tight">
                CodePilot
              </span>
            </div>

            {/* Hero */}
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
              AI-Powered
              <span className="block bg-gradient-to-r from-violet-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Code Reviews
              </span>
              for Modern Teams
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-zinc-400">
              Detect bugs, security vulnerabilities, and code quality issues
              before they reach production. Review pull requests faster with
              intelligent AI suggestions.
            </p>

            {/* Stats */}
            <div className="mt-12 flex gap-10">
              <div>
                <h3 className="text-2xl font-bold text-violet-300">50%</h3>
                <p className="text-sm text-zinc-500">
                  Faster Code Reviews
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-violet-300">24/7</h3>
                <p className="text-sm text-zinc-500">
                  Automated Analysis
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-violet-300">100+</h3>
                <p className="text-sm text-zinc-500">
                  Review Checks
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-1 items-center justify-center px-8">
          <div className="w-full max-w-md">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              {/* Header */}
              <div className="mb-8">
                <h2 className="mb-2 text-3xl font-bold">
                  Welcome Back
                </h2>

                <p className="text-zinc-400">
                  Continue with GitHub to access your repositories and pull
                  requests.
                </p>
              </div>

              {/* Login Button */}
              <button
                onClick={handleGithubLogin}
                disabled={isLoading}
                className="hover:cursor group flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white px-4 py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-violet-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span className="transition-transform group-hover:rotate-6">
                  <FaGithub size={20} />
                </span>

                {isLoading ? "Signing In..." : "Continue with GitHub"}
              </button>

              {/* Divider */}
              <div className="my-8 flex items-center">
                <div className="h-px flex-1 bg-white/10" />
                <span className="px-4 text-sm text-zinc-500">
                  Secure Authentication
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Links */}
              <div className="space-y-4 text-center">
                <p className="text-sm text-zinc-400">
                  New to CodePilot?
                  <a
                    href="#"
                    className="ml-2 font-medium text-violet-400 transition-colors hover:text-violet-300"
                  >
                    Get Started
                  </a>
                </p>

                <a
                  href="#"
                  className="block text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
                >
                  Self-Hosted Deployment
                </a>
              </div>

              {/* Footer */}
              <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-zinc-500">
                <a href="#" className="hover:text-zinc-300">
                  Terms of Service
                </a>

                <span className="mx-2">•</span>

                <a href="#" className="hover:text-zinc-300">
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Bottom Text */}
            <p className="mt-6 text-center text-sm text-zinc-500">
              Trusted by developers to review code faster and ship with
              confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginUI;