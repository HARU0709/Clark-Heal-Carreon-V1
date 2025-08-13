import { getArticles } from '@/lib/blog-data';
import { BlogListClient } from '@/components/layout/blog-list-client';

export const metadata = {
  title: 'Blog - Clark Heal Carreon',
  description: 'A collection of articles and thoughts on technology, development, and design.',
};

export default function BlogPage() {
  const articles = getArticles();

  return <BlogListClient articles={articles} />;
}
