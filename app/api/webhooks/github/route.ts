import { reviewPullRequest } from "@/actions/ai_action";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const event = req.headers.get("x-github-event");

    if (event === "ping") {
      return NextResponse.json({ message: "pong", status: 200 });
    }

    if (event === "pull_request") {
      console.log("Event: pull_request");
      const action = body.action;
      const repo = body.repository.full_name;
      const prNumber = body.number

      const [owner, repoName] = repo.split("/")
      if (action === "opened" || action === "synchronize") {
        try {
          console.log(`Processing review for ${repo}#${prNumber}`);
          await reviewPullRequest(owner, repoName, prNumber);

          console.log(`Review completed for ${repo}#${prNumber}`);
        } catch (e) {
          console.log(`Review failed for ${repo}#${prNumber}:`, e);
        }
      }
    }

    //* HANDLE LATER

    return NextResponse.json({ message: "Event processes" }, { status: 200 });
  } catch (error) {
    console.error("Error processing webhook", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}