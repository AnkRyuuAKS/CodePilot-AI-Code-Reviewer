<div align="center">
  <img 
    src="https://github.com/user-attachments/assets/93952b96-9d47-4973-ae5d-0268aa63446e"
    alt="CodePilot Logo"
    width="180"
  />

# CodePilot

### AI-Powered Code Reviews for Modern Development Teams

Automatically review pull requests, retrieve repository context with RAG, and generate intelligent code reviews directly on GitHub.

</div>

CodePilot is an AI-powered code review platform inspired by tools like CodeRabbit. It seamlessly integrates with GitHub repositories to automate the code review process and help development teams maintain high-quality code.

## Tech Stack

**Frontend:** Next.js, TypeScript, Tailwind CSS, shadcn/ui, React Query  
**Backend:** Next.js Server Actions, Prisma, PostgreSQL  
**Authentication:** Better Auth, GitHub OAuth  
**AI & RAG:** Google Gemini, Jina Embeddings, Pinecone Vector Database  
**Workflow Orchestration:** Inngest  
**Integrations:** GitHub API (Octokit)  
**Billing:** Polar Subscriptions & Checkout

## Features

### Authentication & User Management

* Secure GitHub OAuth authentication powered by Better Auth
* Session management and protected dashboard routes
* User-specific repository and review management
* Subscription-aware access control and feature gating

### Repository Integration

* One-click GitHub repository connection
* Automated GitHub webhook configuration
* Repository synchronization and management dashboard
* Support for multiple connected repositories per user

### AI-Powered Code Review

* Automatic pull request review generation
* Context-aware code analysis using Retrieval-Augmented Generation (RAG)
* AI-generated summaries, walkthroughs, and actionable feedback
* Detection of potential bugs, security risks, performance issues, and maintainability concerns
* Automated review comment posting directly on GitHub pull requests

### Repository Indexing & Semantic Search

* Full repository indexing pipeline
* Source code chunking and embedding generation
* Pinecone-powered vector storage and semantic retrieval
* Context retrieval from the entire codebase for accurate reviews
* Intelligent code search using vector similarity matching

### Background Processing & Automation

* Event-driven architecture powered by Inngest
* Asynchronous repository indexing workflows
* Automated pull request processing pipeline
* Reliable background job execution and retries
* Scalable event-based review generation

### Billing & Subscription Management

* Polar-powered subscription and payment processing
* Free and Pro tier support
* Usage tracking and repository limits
* Customer portal for subscription management
* Secure checkout and billing workflows

### Developer Experience

* Modern Next.js App Router architecture
* Type-safe backend and frontend with TypeScript
* Prisma ORM for database management
* PostgreSQL database integration
* React Query for efficient client-side data fetching and caching
* Responsive and modern SaaS dashboard UI

### AI & Infrastructure

* Google Gemini-powered review generation
* Jina AI vector embeddings for code indexing
* Pinecone vector database integration
* GitHub API integration through Octokit
* Retrieval-Augmented Generation (RAG) architecture for context-aware reviews


## How It Works

1. Connect a GitHub repository.
2. CodePilot indexes the repository and stores embeddings in Pinecone.
3. When a pull request is opened or updated, GitHub triggers a webhook.
4. Relevant code context is retrieved using semantic search.
5. An AI model analyzes the PR diff and repository context.
6. A detailed review is posted back to the pull request automatically.

## The Rag pipeline :
<img width="2308" height="1134" alt="mermaid-diagram-readme" src="https://github.com/user-attachments/assets/95be1989-9692-45b7-a66d-a3724c9f4462" />
## Workflow Orchestration with Inngest

CodePilot uses **Inngest** as a durable workflow orchestration platform to manage long-running, event-driven tasks such as repository indexing and AI-powered pull request reviews. By leveraging Inngest, CodePilot can execute background workflows reliably, handle retries automatically, and scale processing independently from the main application.

### 1. Repository Indexing Workflow (`process-task`)

This workflow is triggered whenever a user connects a GitHub repository to CodePilot.

#### Responsibilities

1. Fetch all source code files from the connected GitHub repository.
2. Process and chunk the repository contents.
3. Generate **1024-dimensional vector embeddings** using the **Jina Embeddings Model**.
4. Store the generated embeddings in **Pinecone Vector Database**.
5. Create a searchable semantic representation of the entire codebase for future retrieval.

#### Outcome

The repository is indexed and becomes available for context-aware Retrieval-Augmented Generation (RAG) during pull request reviews.

---

### 2. Pull Request Review Workflow (`generate-review`)

This workflow is triggered automatically whenever a pull request is opened or updated in a connected repository.

#### Responsibilities

1. Fetch the pull request diff and metadata from GitHub.
2. Generate embeddings for the changed code in the pull request.
3. Query the Pinecone Vector Database to retrieve semantically relevant code from the indexed repository.
4. Combine:

   * Pull request changes
   * Retrieved repository context
   * Pull request metadata
5. Send the enriched context to the Large Language Model (LLM) for analysis.
6. Generate a detailed AI-powered code review including:

   * Summary
   * Walkthrough
   * Potential issues
   * Suggestions
   * Security and performance considerations
7. Post the generated review directly back to the GitHub pull request as a comment.

#### Outcome

Developers receive context-aware, automated code reviews directly within their GitHub workflow, enabling faster reviews and improved code quality.

---

### Workflow Overview

```text
Repository Connected
        ↓
Repository Indexing (Inngest)
        ↓
GitHub Source Files
        ↓
Jina Embeddings (1024-D)
        ↓
Pinecone Vector Database

Pull Request Opened/Updated
        ↓
Fetch PR Diff
        ↓
Generate Query Embeddings
        ↓
Retrieve Relevant Context from Pinecone
        ↓
LLM Analysis (Gemini)
        ↓
AI Review Generation
        ↓
Post Review Comment to GitHub
```

