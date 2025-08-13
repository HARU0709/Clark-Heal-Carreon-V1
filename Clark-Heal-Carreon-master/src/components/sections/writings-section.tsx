
"use client";

import { ArticleCard } from '@/components/cards/article-card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { getArticles } from '@/lib/blog-data';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function WritingsSection() {
  const articles = getArticles();
  const displayedArticles = articles.slice(0, 3);

  return (
    <section id="writings" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-8 md:px-20">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            From My <span className="text-primary">Desk</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground" style={{ animationDelay: '0.2s' }}>
            Sharing my thoughts on technology, development, and everything in between.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedArticles.map((article, index) => (
            <div 
              key={article.id} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100 + 400}ms` }}
            >
              <ArticleCard article={article} />
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="block md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-xs mx-auto"
          >
            <CarouselContent>
              {displayedArticles.map((article, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                     <ArticleCard article={article} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
        
        {articles.length > 3 && (
            <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <Button asChild size="lg">
                    <Link href="/blog">
                        View All Articles
                    </Link>
                </Button>
            </div>
        )}
      </div>
    </section>
  );
}
