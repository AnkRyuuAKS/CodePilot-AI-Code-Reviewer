# CodePilot

CodePilot is an AI-powered code review platform inspired by tools like CodeRabbit. It integrates with GitHub repositories, automatically indexes source code using vector embeddings, and performs intelligent pull request reviews using Large Language Models.

## Features

- GitHub repository integration
- Automatic webhook-based PR reviews
- Repository indexing with vector embeddings
- Retrieval-Augmented Generation (RAG) for code context
- AI-generated code reviews with actionable feedback
- Pull request summaries and walkthroughs
- Pinecone-powered semantic code search
- Inngest-based background processing
- Built with Next.js, Prisma, PostgreSQL, and TypeScript

## How It Works

1. Connect a GitHub repository.
2. CodePilot indexes the repository and stores embeddings in Pinecone.
3. When a pull request is opened or updated, GitHub triggers a webhook.
4. Relevant code context is retrieved using semantic search.
5. An AI model analyzes the PR diff and repository context.
6. A detailed review is posted back to the pull request automatically.

## Tech Stack

- Next.js
- TypeScript
- Prisma
- PostgreSQL
- Pinecone
- Inngest
- GitHub API
- Jina Embeddings
- Google Gemini