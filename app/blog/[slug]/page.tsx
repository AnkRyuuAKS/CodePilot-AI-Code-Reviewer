import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

import { blogPosts } from "../../../utils/data";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Props {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <article className="min-h-screen bg-[#0D0B14] text-white">
      {/* Hero Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[150px]" />
        <div className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-fuchsia-600/20 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-16">
        {/* Back */}
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 text-gray-400 transition hover:text-violet-400"
        >
          <ArrowLeft size={18} />
          Back to Blog
        </Link>

        {/* Category */}
        <Badge className="mb-5 bg-violet-500/10 text-violet-300">
          {post.subtitle}
        </Badge>

        {/* Title */}
        <h1 className="mb-8 text-5xl font-bold leading-tight md:text-7xl">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="mb-10 flex flex-wrap items-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            June 2026
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} />
            5 min read
          </div>

          <div>
            By <span className="text-white">CodePilot Team</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-white/10">
          <Image
            src={post.image}
            alt={post.title}
            width={1400}
            height={800}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {post.content}
        </div>

        <Separator className="my-16 bg-white/10" />

        {/* Share */}
        <div className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="mb-2 text-xl font-semibold">
            Enjoyed this article?
          </h3>

          <p className="mb-4 text-gray-400">
            Share it with your team and help others build better software.
          </p>

          <div className="flex gap-3">
            <button className="rounded-lg border border-white/10 px-4 py-2 hover:bg-white/5">
              Twitter
            </button>

            <button className="rounded-lg border border-white/10 px-4 py-2 hover:bg-white/5">
              LinkedIn
            </button>

            <button className="rounded-lg border border-white/10 px-4 py-2 hover:bg-white/5">
              Copy Link
            </button>
          </div>
        </div>

        {/* Related Articles */}
        <section>
          <h2 className="mb-8 text-3xl font-bold">
            Related Articles
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-500/40"
              >
                <p className="mb-2 text-sm text-violet-300">
                  {related.subtitle}
                </p>

                <h3 className="font-semibold transition group-hover:text-violet-400">
                  {related.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}