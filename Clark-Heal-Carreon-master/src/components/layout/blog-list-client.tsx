"use client";

import { useState, useMemo } from 'react';
import type { Article } from '@/types';
import { ArticleCard } from '@/components/cards/article-card';
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext, PaginationLink } from '@/components/ui/pagination';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const ARTICLES_PER_PAGE = 6;

export function BlogListClient({ articles }: { articles: Article[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    articles.forEach(article => {
      article.tags.forEach(tag => tags.add(tag));
    });
    return ['All', ...Array.from(tags)];
  }, [articles]);

  const filteredArticles = useMemo(() => {
    setCurrentPage(1); // Reset to first page on filter change
    return articles
      .filter(article => 
        (article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      .filter(article => 
        !activeTag || activeTag === 'All' || article.tags.includes(activeTag)
      );
  }, [articles, searchTerm, activeTag]);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);

  const currentArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
    const endIndex = startIndex + ARTICLES_PER_PAGE;
    return filteredArticles.slice(startIndex, endIndex);
  }, [currentPage, filteredArticles]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  const getPaginationItems = () => {
    if (totalPages <= 1) return [];
    
    const items: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
      return items;
    }

    items.push(1);
    if (currentPage > 3) {
      items.push('...');
    }

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      items.push(i);
    }
    
    if (currentPage < totalPages - 2) {
      items.push('...');
    }
    items.push(totalPages);
    return items;
  }

  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-8 md:px-20">
        <div className="mb-12">
           <Button asChild variant="outline" className="mb-8 animate-fade-in-up">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              My <span className="text-primary">Writings</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground" style={{ animationDelay: '0.2s' }}>
              A collection of articles on technology, development, and everything in between.
            </p>
          </div>
        </div>

        <div className="mb-12 space-y-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              type="search"
              placeholder="Search articles..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {allTags.map(tag => (
              <Button
                key={tag}
                variant={activeTag === tag || (tag === 'All' && !activeTag) ? 'default' : 'outline'}
                onClick={() => setActiveTag(tag === 'All' ? null : tag)}
                className="capitalize"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentArticles.map((article, index) => (
            <div
              key={article.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100 + 400}ms` }}
            >
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
        
        {currentArticles.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
                <p className="text-lg">No articles found.</p>
                <p>Try adjusting your search or filters.</p>
            </div>
        )}

        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
              {getPaginationItems().map((item, index) => (
                <PaginationItem key={index}>
                  {typeof item === 'number' ? (
                    <PaginationLink
                      href="#"
                      onClick={(e) => { e.preventDefault(); handlePageChange(item); }}
                      isActive={currentPage === item}
                    >
                      {item}
                    </PaginationLink>
                  ) : (
                    <span className="px-4 py-2">...</span>
                  )}
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
}
