
import type { MetadataRoute } from 'next';
import { getProjects } from '@/lib/project-data';
import { getArticles } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://clark-heal-carreon.vercel.app';
  const staticDate = '2024-08-01'; // A single, valid, hardcoded date for everything.

  const projects = getProjects();
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: staticDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const articles = getArticles();
  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: staticDate, // Using the same hardcoded date for guaranteed validity.
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: staticDate,
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: staticDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...projectUrls,
    ...articleUrls,
  ];
}
