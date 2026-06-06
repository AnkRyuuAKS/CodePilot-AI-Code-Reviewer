// src/inngest/functions.ts
import prisma from "@/lib/db";
import { inngest } from "../client";
import { getRepoFileContents } from "@/lib/github-lib/github";
import { indexCodebase } from "@/lib/ai/lib/rag";

export const processTask = inngest.createFunction(
  { id: "index-repo", triggers: { event: "repository.connected" } },
  async ({ event, step }) => {
    const { owner, repo, userId } = event.data;

    const files = await step.run("fetch-files", async () => {

      const account = await prisma.account.findFirst({
        where: {
          userId: userId,
          providerId:"github"
        }
      })

      if (!account?.accessToken) {
        throw new Error("No gitHub access token found")
      }

      return await getRepoFileContents(account.accessToken, owner, repo);
    })
    
    await step.run("index-codebase", async () => {
      console.log("files loaded");
      await indexCodebase(`${owner}/${repo}`, files);
    })

    return {success:true,indexFiles:files.length}
  }
);