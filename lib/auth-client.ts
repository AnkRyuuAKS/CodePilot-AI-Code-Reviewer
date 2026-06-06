// import { createAuthClient } from "better-auth/react";

// export const { signIn, signUp, useSession, signOut } = createAuthClient({
//   baseURL: process.env.BETTER_AUTH_URL,
// });


import { router } from "better-auth/api"
import { createAuthClient } from "better-auth/react";

const authClient = createAuthClient();

export const useSession = authClient.useSession;

export const signIn = async () => {
  return authClient.signIn.social({
    provider: "github",
  });
};

export const signOut = async () => {
  return authClient.signOut();
};