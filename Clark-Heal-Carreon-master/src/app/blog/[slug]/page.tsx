import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getArticles, getNextArticle, getPreviousArticle } from '@/lib/blog-data';
import type { Article } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, ArrowRight, CalendarDays, Linkedin, Twitter, Facebook, Printer } from 'lucide-react';
import { ArticlePageClient } from '@/components/layout/article-page-client';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }
 
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.tags,
    authors: [{ name: article.author, url: 'https://clark-heal-carreon.vercel.app/' }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `/blog/${article.slug}`,
      type: 'article',
      publishedTime: new Date(article.date).toISOString(),
      authors: [article.author],
      images: [
        {
          url: article.imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
        ...previousImages,
      ],
    },
     twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      creator: '@clarkcarreon',
      images: [article.imageUrl],
    },
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const allArticles = getArticles();
  const topReads = allArticles.filter(a => a.id !== article.id).slice(0, 3);
  const previousArticle = getPreviousArticle(article.id);
  const nextArticle = getNextArticle(article.id);

  return (
    <ArticlePageClient 
        article={article}
        topReads={topReads}
        previousArticle={previousArticle}
        nextArticle={nextArticle}
    />
  );
}
