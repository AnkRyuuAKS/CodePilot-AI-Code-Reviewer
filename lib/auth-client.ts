// import { createAuthClient } from "better-auth/react";

// export const { signIn, signUp, useSession, signOut } = createAuthClient({
//   baseURL: process.env.BETTER_AUTH_URL,
// });


import { createAuthClient } from "better-auth/react";
import { polarClient } from "@polar-sh/better-auth";

const authClient = createAuthClient({
  baseURL: "/",
  plugins: [polarClient()],//This is correct only if you've configured the Polar plugin on the server:
});

export const useSession = authClient.useSession;

export const signIn = async () => {
  return authClient.signIn.social({
    provider: "github",
  });
};

export const signOut = async () => {
  return authClient.signOut();
};