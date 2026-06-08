export interface BlogPost {
  title: string;
  subtitle: string;
  slug: string; // snake_case
  excerpt: string;
  content: string; // markdown string
  image: string; // relative path to public image
}

export const blogPosts: BlogPost[] = [
  {
    title: "Unlocking AI-Powered Code Reviews",
    subtitle: "How AI transforms the review process",
    slug: "unlocking_ai_powered_code_reviews",
    excerpt:
      "Explore how AI accelerates code reviews, catches bugs early, and helps teams ship better software.",
    content: `

# Unlocking AI-Powered Code Reviews

Code review is one of the most important stages of software development. It helps teams maintain quality, improve collaboration, and catch issues before deployment.

## Why Traditional Reviews Struggle

As projects scale, developers face:

* Larger pull requests
* Increased review time
* Missed edge cases
* Reviewer fatigue

These challenges slow down delivery and increase the risk of production bugs.

## How AI Helps

AI-powered review tools analyze pull requests automatically and identify:

* Potential bugs
* Security vulnerabilities
* Performance bottlenecks
* Code style inconsistencies

## Benefits

### Faster Reviews

Developers receive feedback immediately after opening a pull request.

### Higher Quality

Automated analysis catches common issues before human review begins.

### Better Productivity

Engineers spend less time on repetitive checks and more time solving complex problems.

## Final Thoughts

AI is not replacing developers. Instead, it acts as a powerful assistant that improves review quality and speeds up development workflows.
`,
    image: "/blog_card_1.png",
  },
  {
    title: "Building a Modern Dashboard",
    subtitle: "Design patterns for responsive dashboards",
    slug: "building_a_modern_dashboard",
    excerpt:
      "Learn how to build clean, responsive dashboards that scale from startup MVPs to enterprise products.",
    content: `

# Building a Modern Dashboard

Dashboards are often the first thing users see after logging in. A well-designed dashboard can dramatically improve user experience.

## Core Principles

### Simplicity

Avoid overwhelming users with excessive information.

### Visual Hierarchy

Highlight the most important metrics first.

### Consistency

Use consistent spacing, typography, and colors.

## Dashboard Sections

A modern dashboard typically includes:

* Summary cards
* Analytics charts
* Activity feeds
* Recent notifications
* Quick actions

## Responsive Design

Dashboards should adapt seamlessly to:

* Mobile devices
* Tablets
* Desktop monitors

CSS Grid and Flexbox make responsive layouts much easier to implement.

## Conclusion

A great dashboard combines functionality, performance, and usability into a single experience.
`,
    image: "/blog_card_2.png",
  },
  {
    title: "Optimizing Prisma Queries",
    subtitle: "Performance tricks for Prisma ORM",
    slug: "optimizing_prisma_queries",
    excerpt: "Learn how to reduce query time and improve database performance with Prisma.",
    content: `# Optimizing Prisma Queries

Prisma makes database access simple, but inefficient queries can still impact performance.

## Common Mistakes

- Over-fetching data
- N+1 query problems
- Missing indexes

## Optimization Tips

### Select Only What You Need

Use select instead of retrieving entire records.

### Add Database Indexes

Indexes dramatically improve lookup speed.

### Use Pagination

Never load thousands of records at once.

## Conclusion

Small query improvements can have a huge impact on application performance.`,
    image: "/blog_card_2.png",
  },

  {
    title: "Next.js 14: What's New?",
    subtitle: "A quick look at the latest Next.js features",
    slug: "nextjs_14_whats_new",
    excerpt: "Explore the latest improvements in Next.js and how they enhance developer experience.",
    content: `# Next.js 14: What's New?

Next.js continues to improve the React development experience.

## Key Features

### Server Actions

Reduce API boilerplate by running server-side logic directly from components.

### Improved Caching

Smarter caching improves application performance.

### Better Streaming

Users receive content faster through enhanced streaming capabilities.

## Why It Matters

These features help teams build faster and more scalable applications.

## Conclusion

Next.js remains one of the strongest choices for modern full-stack development.`,
    image: "/blog_card_1.png",
  },

  {
    title: "Mastering Pull Request Reviews",
    subtitle: "Improve collaboration across teams",
    slug: "mastering_pull_request_reviews",
    excerpt: "Best practices for writing, reviewing, and managing pull requests effectively.",
    content: `# Mastering Pull Request Reviews

Pull requests are more than code changes—they are communication tools.

## Write Better PRs

- Keep them small
- Add clear descriptions
- Include screenshots when needed

## Review Efficiently

Focus on:

- Correctness
- Security
- Maintainability

## Avoid

- Huge PRs
- Vague descriptions
- Unclear requirements

## Conclusion

Good pull requests reduce review time and improve software quality.`,
    image: "/blog_card_2.png",
  },

  {
    title: "The Future of AI in Software Engineering",
    subtitle: "How AI is changing development",
    slug: "future_of_ai_in_software_engineering",
    excerpt: "From code generation to automated reviews, AI is transforming software development.",
    content: `# The Future of AI in Software Engineering

AI tools are becoming part of every developer's workflow.

## Current Applications

- Code completion
- Test generation
- Documentation writing
- Code review

## What's Next?

Future systems may:

- Design architectures
- Detect production risks
- Generate complete features

## Human Developers Still Matter

AI can assist, but engineering judgment remains essential.

## Conclusion

The future belongs to developers who learn how to collaborate effectively with AI tools.`,
    image: "/blog_card_1.png",
  }
];
