"use server";

import prisma from "@/lib/db";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { createWebhook, getRepositories } from "@/lib/github-lib/github";
import { inngest } from "@/inngest/client";

export const fetchRepositories = async (
  page: number = 1,
  perPage: number = 10,
) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("Unauthorized User");
  }

  const githubRepos = await getRepositories(page, perPage);

  const dbRepos = await prisma.repository.findMany({
    where: {
      userId: session.user.id,
    },
  });

  const connectedRepoIds = new Set(dbRepos.map((repo) => repo.githubId));

  const result = githubRepos?.map((repo: any) => ({
    ...repo,
    isConnected: connectedRepoIds.has(BigInt(repo.id)),
  }));
  return result;
};

export const connectRepository = async (
  owner: string,
  repo: string,
  githubId: number,
) => {
  try {


    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      throw new Error("Unauthorised");
    }

    //* TODO: CHECK IF USER CAN CONNECT MORE REPO
    const webhook = await createWebhook(owner, repo);

    if (!webhook) {
      throw new Error("Failed to create webhook");
    }
    //* TRIGGER REPOSITORY INDEXING FOR RAG (FIRE AND FORGET)
    // Fire Inngest event
    await inngest.send({
      name: "repository.connected",
      data: {
        owner,
        repo,
        userId: session.user.id,
      },
    });

    await prisma.repository.create({
      data: {
        githubId: BigInt(githubId),
        name: repo,
        owner,
        fullName: `${owner}/${repo}`,
        url: `https://github.com/${owner}/${repo}`,
        userId: session.user.id,
      },
    });

    //* INCREMENT REPOSITORY COUND FOR USAGE TRACKING

    return {
      success: true,
    };
  } catch (error) {
    console.log("Ther is error in connection", error);
  }
};