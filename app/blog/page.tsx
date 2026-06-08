import Link from "next/link";
import { blogPosts } from "@/utils/data";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0D0B14]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[150px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-fuchsia-600/20 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* Hero */}
        <div className="mb-20 text-center">
          <Badge
            variant="secondary"
            className="mb-6 border border-violet-500/30 bg-violet-500/10 text-violet-300"
          >
            ✨ CodePilot Blog
          </Badge>

          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
            Engineering insights for
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {" "}
              modern developers
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Tutorials, AI code review strategies, software engineering
            best practices, and product updates from the CodePilot team.
          </p>
        </div>

        {/* Featured Post */}
        <Link href={`/blog/${featuredPost.slug}`}>
          <Card className="group mb-14 overflow-hidden border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-violet-500/40 hover:shadow-[0_0_60px_rgba(139,92,246,0.15)]">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-[350px]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center p-10">
                <Badge className="mb-4 w-fit bg-violet-500/10 text-violet-300">
                  Featured
                </Badge>

                <h2 className="mb-4 text-4xl font-bold text-white">
                  {featuredPost.title}
                </h2>

                <p className="mb-6 text-gray-400">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-2 text-violet-400">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Card>
        </Link>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {remainingPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
            >
              <Card className="group h-full overflow-hidden border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <CardHeader>
                  <Badge
                    variant="secondary"
                    className="w-fit bg-violet-500/10 text-violet-300"
                  >
                    {post.subtitle}
                  </Badge>

                  <h3 className="text-xl font-bold text-white">
                    {post.title}
                  </h3>
                </CardHeader>

                <CardContent>
                  <p className="mb-4 text-sm text-gray-400 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-violet-400">
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}