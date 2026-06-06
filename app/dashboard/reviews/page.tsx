"use client";

import { getReviews } from "@/actions/review";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  XCircle,
  Sparkles,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Spinner } from "@/components/ui/spinner";

export default function ReviewsPage() {
  const { data: reviews, isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => await getReviews(),
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            Review History
          </h1>

          <p className="mt-1 text-muted-foreground">
            View and manage all AI-generated code reviews.
          </p>
        </div>

        <Card className="rounded-3xl border-border/50">
          <CardContent className="flex h-[300px] flex-col items-center justify-center gap-4">
            <Spinner />

            <p className="text-sm text-muted-foreground">
              Loading reviews...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Review History
        </h1>

        <p className="mt-1 text-muted-foreground">
          View and manage all AI-generated code reviews.
        </p>
      </div>

      {/* Empty State */}
      {reviews?.length === 0 ? (
        <Card className="rounded-3xl border-border/50">
          <CardContent className="py-20">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-2xl bg-violet-500/10 p-4">
                <Sparkles className="h-8 w-8 text-violet-300" />
              </div>

              <h2 className="mb-2 text-xl font-semibold">
                No Reviews Yet
              </h2>

              <p className="max-w-md text-muted-foreground">
                Connect a repository and open a pull request to start
                receiving AI-powered code reviews.
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-5">
          {reviews?.map((review: any) => (
            <Card
              key={review.id}
              className="
                rounded-2xl
                border-border/50
                transition-all
                duration-200
                hover:border-violet-500/20
                hover:bg-card/80
              "
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <CardTitle className="text-xl">
                        {review.prTitle}
                      </CardTitle>

                      {review.status === "completed" && (
                        <Badge
                          className=" bg-violet-500/10 text-violet-300 border-violet-500/20
                          "
                        >
                          <CheckCircle2 className="mr-1 h-3 w-3" />
                          Completed
                        </Badge>
                      )}

                      {review.status === "failed" && (
                        <Badge variant="destructive">
                          <XCircle className="mr-1 h-3 w-3" />
                          Failed
                        </Badge>
                      )}

                      {review.status === "pending" && (
                        <Badge variant="secondary">
                          <Clock className="mr-1 h-3 w-3" />
                          Pending
                        </Badge>
                      )}
                    </div>

                    <CardDescription>
                      {review.repository.fullName} • PR #
                      {review.prNumber}
                    </CardDescription>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-xl"
                  >
                    <a
                      href={review.prUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {formatDistanceToNow(
                      new Date(review.createdAt),
                      { addSuffix: true }
                    )}
                  </p>

                  <div
                    className=" rounded-2xl border border-border/50 bg-muted/30 p-4
                    "
                  >
                    <pre
                      className="whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground
                      "
                    >
                      {review.review.substring(0, 500)}
                      {review.review.length > 500 && "..."}
                    </pre>
                  </div>

                  <Button
                    variant="outline"
                    className="rounded-xl"
                  >
                    <a
                      href={review.prUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Full Review on GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}