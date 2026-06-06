"use client";

import React from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { useTheme } from "next-themes";
import { getContributionStats } from "@/actions/dashboard"
import { useQuery } from "@tanstack/react-query";


const ContributionChart = () => {
  const { theme } = useTheme();

  const { data: contribution, isLoading } = useQuery({
    queryKey: ["contribution-graph"],
    queryFn: async () => await getContributionStats(),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return (
      <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-border/50 bg-card">
        <p className="animate-pulse text-sm text-muted-foreground">
          Loading contribution data...
        </p>
      </div>
    );
  }

  if (!contribution || !contribution.contributions?.length) {
    return (
      <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-border/50 bg-card">
        <p className="text-sm text-muted-foreground">
          No contribution data available
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border/50 bg-card p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            Contribution Activity
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Last 12 months of GitHub activity
          </p>
        </div>

        <div className="rounded-xl bg-violet-500/10 px-4 py-2">
          <span className="text-sm font-semibold text-violet-300">
            {contribution.totalContributions}
          </span>
          <span className="ml-1 text-sm text-muted-foreground">
            contributions
          </span>
        </div>
      </div>

      {/* Graph */}
      <div className="overflow-x-auto">
        <div className="min-w-max rounded-xl border border-border/30 bg-background/40 p-4">
          <ActivityCalendar
            data={contribution.contributions}
            colorScheme={theme === "dark" ? "dark" : "light"}
            blockMargin={4}
            blockSize={11}
            fontSize={13}
            showMonthLabels
            showWeekdayLabels
          />
        </div>
      </div>
    </div>
  );
};

export default ContributionChart;