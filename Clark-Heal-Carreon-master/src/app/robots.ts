
import type { MetadataRoute } from 'next';
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '', // Allows all user agents to crawl everything
    },
    sitemap: 'https://clark-heal-carreon.vercel.app/sitemap.xml',
  };
}
