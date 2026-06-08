import { inngest } from "../client"
import { getPullRequestDiff, postReviewComment } from "@/lib/github-lib/github"
import { retrieveContext } from "@/lib/ai/lib/rag"
import { generateText } from "ai"
import { google } from "@ai-sdk/google"
import prisma from "@/lib/db"

export const genrateReview = inngest.createFunction(
    { id: "genrate-review", triggers: { event: "pr.review.requested" } },

    async ({ event, step }) => {
        console.log("route comes here");
        const { owner, repo, prNumber, userId } = event.data;

        const { diff, title, description, token } = await step.run("fetch-pr-data", async () => {
            const account = await prisma.account.findFirst({
                where: {
                    userId: userId,
                    providerId: "github"
                }
            });
            if (!account?.accessToken) {
                throw new Error("No Github access token found");
            }
            const data = await getPullRequestDiff(account.accessToken, owner, repo, prNumber);
            return { ...data, token: account.accessToken }
        });

        const context = await step.run("retrieve-context", async () => {
            const query = `${title}\n${description}`;

            return await retrieveContext(query, `${owner}/${repo}`)
        })

        const review = await step.run("generate-ai-review", async () => {
            const prompt = `
You are a senior code reviewer.

PR Title: ${title}
PR Description: ${description || "No description provided"}

Context:
${context.join("\n\n")}

Diff:
\`\`\`diff
${diff}
\`\`\`

Return markdown with:

## Summary
## Walkthrough
## Strengths
## Issues
## Suggestions

If the PR changes application flow, also include a valid Mermaid sequence diagram.

Prioritize correctness, security, performance, maintainability, and edge cases. Be concise and actionable.
`;
            const { text } = await generateText({
                model: google("gemini-2.5-flash"),
                prompt
            })
            return text;
        })

        await step.run("post-comment", async () => {
            await postReviewComment(token, owner, repo, prNumber, review);
        })

        await step.run("save-review", async () => {
            const repository = await prisma.repository.findFirst({
                where: {
                    owner,
                    name:repo
                }
            })
            if (repository) {
                await prisma.review.create({
                    data: {
                        repositoryId: repository.id,
                        prNumber,
                        prTitle: title,
                        prUrl:`https://github.com/${owner}/${repo}/pull/${prNumber}`,
                        review,
                        status:"completed",
                    }
                })
            }
        })
        return { success: true };
    }
)