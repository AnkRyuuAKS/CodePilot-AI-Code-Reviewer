"use client";

import { getSubscriptionData, syncSubscriptionStatus } from '@/actions/payment';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card";
// import { polarClient } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Spinner } from '@/components/ui/spinner';
import { useQuery } from '@tanstack/react-query';
import { AlertCircle, Check, ExternalLink, Loader2, RefreshCw, X } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react'
import { getCheckout, customerData } from '@/lib/auth-client';
import { toast } from 'sonner';


const SubscriptionPage = () => {
  const PLAN_FEATURES = {
    free: [
      { name: "Up to 5 repositories", included: true },
      { name: "Up to 5 reviews per repository", included: true },
      { name: "Basic code reviews", included: true },
      { name: "Community support", included: true },
      { name: "Advanced analytics", included: false },
      { name: "Priority support", included: false },
    ],

    pro: [
      { name: "Unlimited repositories", included: true },
      { name: "Unlimited reviews", included: true },
      { name: "Advanced code reviews", included: true },
      { name: "Email support", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Priority support", included: true },
    ],
  };
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [portalLoading, setPortalLoading] = useState(false);
  const [syncLoading, setSyncLoading] = useState(false);
  const searchParams = useSearchParams();
  const success = searchParams.get("success");

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["subscription-data"],
    queryFn: getSubscriptionData,
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    if (success === "true") {
      const sync = async () => {
        try {
          await syncSubscriptionStatus();
          toast.success("Subscription status synced successfully!");
          refetch();
        } catch (error) {
          console.error("Sync error:", error);
          toast.error("Failed to sync subscription status");
        }
      }
      sync();
    }
  }, [success, refetch]);


  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-100'>
        <Spinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight">
            Subscription Plans
          </h1>
        </div>

        <Alert variant="destructive" className="max-w-2xl mx-auto">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error fetching subscription data</AlertTitle>
          <AlertDescription className="flex items-center justify-between mt-2">
            <span>
              Failed to load subscription data. Please try again later.
            </span>

            <Button
              variant="outline"
              size="sm"
              onClick={() => refetch()}
            >
              Retry
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    );
  }
  if (!data?.user) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight">
            Subscription Plans
          </h1>
          <p className="text-muted-foreground">
            Please sign in to view your subscription details.
          </p>
        </div>
      </div>
    )
  }

  const currentTier = data.user.subscriptionTier as "FREE" | "PRO";
  const isPro = currentTier === "PRO";
  const isActive = data.user.subscriptionStatus === "ACTIVE";

  const handleSync = async () => {
    try {
      setSyncLoading(true);
      const result = await syncSubscriptionStatus();
      if (result.success) {
        toast.success(`Subscription status: ${result.status}`);
        refetch();
      } else {
        toast.error(result.message || "Failed to sync subscription");
      }
    } catch (error) {
      console.error("Sync error:", error);
      toast.error("Failed to sync subscription");
    } finally {
      setSyncLoading(false);
    }
  }

  const handleUpgrade = async () => {
    try {
      setCheckoutLoading(true);

      await getCheckout();
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Failed to start checkout");
    } finally {
      setCheckoutLoading(false);
    }
  };

  const handleManageSubscription = async () => {
    try {
      setPortalLoading(true);
      await customerData();
    } catch (error) {
      console.error("Portal error:", error);
      toast.error("Failed to open customer portal");
    } finally {
      setPortalLoading(false);
    }
  }


  return (
    <div className="space-y-6">
      <div className='flex items-center justify-between'>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Subscription Plans
          </h1>
          <p className="text-muted-foreground">
            Choose the perfect plan for your needs .Manage your subscription and billing details.
          </p>
        </div>

        <Button variant="outline" size="sm" onClick={handleSync} disabled={syncLoading}>
          {syncLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
          Sync Status
        </Button>
      </div>

      {success && (
        <Alert className="border-green-500 bg-green-50 text-green-800 dark:bg-green-950">
          <Check className="h-4 w-4 text-green-600" />
          <AlertTitle>Subscription successful!</AlertTitle>
          <AlertDescription>
            Your subscription has been successfully updated.
          </AlertDescription>
        </Alert>
      )}

      {data.limits && (
        <Card>
          <CardHeader>
            <CardTitle>Current Usage</CardTitle>
            <CardDescription>
              Your current plan limits and usage
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Repositories</span>

                  <Badge
                    variant={
                      data.limits.repositories.canAdd
                        ? "default"
                        : "destructive"
                    }
                  >
                    {data.limits.repositories.current} /{" "}
                    {data.limits.repositories.limit ?? "∞"}
                  </Badge>
                </div>

                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${data.limits.repositories.canAdd
                      ? "bg-primary"
                      : "bg-destructive"
                      }`}
                    style={{
                      width: data.limits.repositories.limit ? `${Math.min(
                        (data.limits.repositories.current / data.limits.repositories.limit!) * 100, 100)}%`
                        : "0%",
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    Reviews per Repository
                  </span>

                  <Badge variant="outline">
                    {isPro ? "Unlimited" : "5 per repo"}
                  </Badge>
                </div>

                <p className="text-xs text-muted-foreground">
                  {isPro
                    ? "No limits on reviews"
                    : "Free tier allows 5 reviews per repository"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {/* Free Plan */}
        <Card className={!isPro ? "ring-2 ring-primary" : ""} >
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>Free</CardTitle>
                <CardDescription>
                  Perfect for getting started
                </CardDescription>
              </div>
              {!isPro && (
                <Badge className="ml-2">
                  Current Plan
                </Badge>
              )}
            </div>

            <div className="mt-2">
              <span className="text-3xl font-bold">₹0</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              {PLAN_FEATURES.free.map((feature) => (
                <div
                  key={feature.name}
                  className="flex items-center gap-2"
                >
                  {feature.included ? (
                    <Check className="h-4 w-4 text-primary shrink-0" />
                  ) : (
                    <X className="h-4 w-4 text-muted-foreground shrink-0" />
                  )}

                  <span
                    className={
                      feature.included
                        ? ""
                        : "text-muted-foreground"
                    }
                  >
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>

            <Button
              className="w-full"
              variant="outline"
              disabled
            >
              {isPro ? "Downgrade" : "Current Plan"}
            </Button>
          </CardContent>
        </Card>

        {/* Pro Plan */}
        <Card className={isPro ? "ring-2 ring-primary" : ""}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>Pro</CardTitle>
                <CardDescription>
                  For professional developers
                </CardDescription>
              </div>
              {isPro && (
                <Badge className="ml-2">
                  Current Plan
                </Badge>
              )}
            </div>

            <div className="mt-2">
              <span className="text-3xl font-bold">
                ₹999.09
              </span>
              <span className="text-muted-foreground">
                /month
              </span>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              {PLAN_FEATURES.pro.map((feature) => (
                <div
                  key={feature.name}
                  className="flex items-center gap-2"
                >
                  {feature.included ? (
                    <Check className="h-4 w-4 text-primary shrink-0" />
                  ) : (
                    <X className="h-4 w-4 text-muted-foreground shrink-0" />
                  )}
                  <span
                    className={
                      feature.included
                        ? ""
                        : "text-muted-foreground"
                    }
                  >
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>

            {isPro && isActive ? (
              <Button
                className="w-full"
                variant="outline"
                onClick={handleManageSubscription}
                disabled={portalLoading}
              >
                {portalLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Opening Portal...
                  </>
                ) : (
                  <>
                    Manage Subscription
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            ) : (
              <Button
                className="w-full"
                onClick={handleUpgrade}
                disabled={checkoutLoading}
              >
                {checkoutLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading Checkout...
                  </>
                ) : (
                  "Upgrade to Pro"
                )}
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SubscriptionPage
