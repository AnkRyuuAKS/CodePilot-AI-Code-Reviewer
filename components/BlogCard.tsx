import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  subtitle: string;
  excerpt: string;
  imageSrc: string;
  slug: string;
}

export default function BlogCard({ title, subtitle, excerpt, imageSrc, slug }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} legacyBehavior>
      <a className="block rounded-xl bg-white/5 backdrop-blur-sm p-4 transition-transform hover:scale-[1.02] hover:shadow-xl">
        <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-300">{subtitle}</p>
        <p className="mt-2 text-gray-400 line-clamp-2">{excerpt}</p>
      </a>
    </Link>
  );
}
