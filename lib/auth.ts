import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./db";
import { polar, checkout, portal, usage, webhooks } from "@polar-sh/better-auth";
import { Polar } from "@polar-sh/sdk";
import { updatePolarCustomerId, updateUserTier } from "./payment/lib/subscription";

export const polarClient = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
  server: "sandbox",
});

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      scope: ["repo"],
    },
  },
  plugins: [
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,

      use: [
        checkout({
          products: [
            {
              productId: "48f97812-abb6-4147-b510-f5616d27165c",
              slug: "codepilot-pro",
            },
          ],
          successUrl: process.env.POLAR_SUCCESS_URL!,
          authenticatedUsersOnly: true,
        }),

        portal({
          returnUrl: process.env.NEXT_PUBLIC_APP_BASE_URL || "http://localhost:3000",
        }),
        usage(),
        webhooks({
          secret: process.env.POLAR_WEBHOOK_SECRET!,
          
          onSubscriptionActive: async (payload) => {
            const customerId = payload.data.customerId;

            const user = await prisma.user.findUnique({
              where: {
                polarCustomerId: customerId,
              },
            });

            if (user) {
              await updateUserTier(
                user.id,
                "PRO",
                "ACTIVE",
                payload.data.id
              );
            }
          },

          onSubscriptionCanceled: async (payload) => {
            const customerId = payload.data.customerId;

            const user = await prisma.user.findUnique({
              where: {
                polarCustomerId: customerId,
              },
            });

            if (user) {
              await updateUserTier(
                user.id,
                user.subscriptionTier as any,
                "CANCELED"
              );
            }
          },

          onSubscriptionRevoked: async (payload) => {
            const customerId = payload.data.customerId;

            const user = await prisma.user.findUnique({
              where: {
                polarCustomerId: customerId,
              },
            });

            if (user) {
              await updateUserTier(
                user.id,
                "FREE",
                "EXPIRED"
              );
            }
          },

          onOrderPaid: async (payload) => {
            console.log("Order paid:", payload.data);
          },
          onCustomerCreated: async (payload) => {
            const user = await prisma.user.findUnique({
              where: {
                email: payload?.data?.email ?? undefined,
              },
            });
            if (user) {
              await updatePolarCustomerId(user.id, payload.data.id);
            }

          }
        })
      ],
    }),
  ],
});