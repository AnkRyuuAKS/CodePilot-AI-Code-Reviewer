"use client";

import React, { useState } from "react";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

interface LogoutProps {
  children?: React.ReactNode;
  className?: string;
}

const Logout = ({ children, className = "" }: LogoutProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);

    try {
        await signOut();
        router.push('/login');
    } catch (error) {
      console.error("Logout failed:", error);
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className={`
        group inline-flex items-center gap-2 rounded-lg
        px-4 py-2 text-sm font-medium
        text-zinc-300
        transition-all duration-200
        hover:bg-red-500/10
        hover:text-red-400
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
    >
      <LogOut
        size={16}
        className="transition-transform duration-200 group-hover:-translate-x-1"
      />

      {isLoading ? "Signing out..." : children || "Sign Out"}
    </button>
  );
};

export default Logout;