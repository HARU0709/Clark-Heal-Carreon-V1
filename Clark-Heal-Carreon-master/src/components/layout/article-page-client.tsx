
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import type { Article } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, ArrowRight, CalendarDays, Linkedin, Twitter, Facebook, Printer, Instagram, Home, BookOpen } from 'lucide-react';
import { ReadingProgressBar } from '@/components/ui/reading-progress-bar';
import { Separator } from '../ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

function ArticleSidebar({ topReads, currentSlug }: { topReads: Article[], currentSlug: string }) {
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    // This ensures window is accessed only on the client, after hydration
    setShareUrl(window.location.href);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <aside className="sticky top-24 space-y-8">
       <Card>
            <CardContent className="p-0">
                <nav className="flex flex-col">
                    <Link href="/" className="flex items-center space-x-3 p-4 hover:bg-accent transition-colors rounded-t-lg">
                        <Home className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                            <p className="font-medium text-foreground text-sm">Back to Home</p>
                        </div>
                    </Link>
                    <Separator />
                    <Link href="/blog" className="flex items-center space-x-3 p-4 hover:bg-accent transition-colors rounded-b-lg">
                        <BookOpen className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                            <p className="font-medium text-foreground text-sm">View all articles</p>
                        </div>
                    </Link>
                </nav>
            </CardContent>
        </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top Reads</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {topReads.map(article => (
              <li key={article.id}>
                <Link href={`/blog/${article.slug}`} className="font-medium hover:text-primary transition-colors text-sm group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        width={80}
                        height={60}
                        className="rounded-md object-cover aspect-[4/3]"
                        data-ai-hint={article.imageHint}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="line-clamp-2 leading-snug group-hover:underline">{article.title}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Share this Article</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Button variant="default" size="icon" asChild className="transition-transform duration-300 ease-in-out hover:scale-110">
            <Link href={`https://twitter.com/intent/tweet?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="default" size="icon" asChild className="transition-transform duration-300 ease-in-out hover:scale-110">
            <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="default" size="icon" asChild className="transition-transform duration-300 ease-in-out hover:scale-110">
            <Link href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
              <Facebook className="h-5 w-5" />
            </Link>
          </Button>
           <Button variant="default" size="icon" asChild className="transition-transform duration-300 ease-in-out hover:scale-110">
            <Link href="https://instagram.com/clarkcarreon" target="_blank" rel="noopener noreferrer" aria-label="Share on Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="default" size="icon" onClick={handlePrint} aria-label="Print article" className="transition-transform duration-300 ease-in-out hover:scale-110">
            <Printer className="h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    </aside>
  );
}

export function ArticlePageClient({ article, topReads, previousArticle, nextArticle }: { article: Article, topReads: Article[], previousArticle?: Article, nextArticle?: Article }) {
    return (
        <TooltipProvider>
            <ReadingProgressBar />
            <div className="bg-secondary py-12 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                        <article className="lg:col-span-2 bg-background p-6 sm:p-8 md:p-12 rounded-lg shadow-lg">
                            <header className="mb-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {article.tags.map(tag => (
                                        <Badge key={tag} variant="secondary">{tag}</Badge>
                                    ))}
                                </div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-4 leading-tight">{article.title}</h1>
                                <div className="flex items-center space-x-4 text-muted-foreground">
                                    <div className="flex items-center space-x-2">
                                        <Avatar className="h-9 w-9">
                                            <AvatarImage src={article.authorImageUrl} alt={article.author} />
                                            <AvatarFallback>{article.author.substring(0, 1)}</AvatarFallback>
                                        </Avatar>
                                        <span className="font-medium text-foreground">{article.author}</span>
                                    </div>
                                    <span className="hidden sm:block">|</span>
                                    <div className="flex items-center space-x-2">
                                        <CalendarDays className="h-5 w-5" />
                                        <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                                    </div>
                                </div>
                            </header>

                            <div className="aspect-video overflow-hidden rounded-lg mb-8 shadow-md">
                                <Image
                                    src={article.imageUrl}
                                    alt={article.title}
                                    width={1200}
                                    height={675}
                                    className="object-cover w-full h-full"
                                    priority
                                    data-ai-hint={article.imageHint}
                                />
                            </div>

                            <div
                                className="prose prose-lg dark:prose-invert max-w-none prose-p:leading-relaxed prose-headings:text-primary"
                                dangerouslySetInnerHTML={{ __html: article.content }}
                            />
                        </article>

                        <div className="lg:col-span-1">
                            <ArticleSidebar topReads={topReads} currentSlug={article.slug} />
                        </div>
                    </div>

                    <nav className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            {previousArticle && (
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link href={`/blog/${previousArticle.slug}`} className="block group">
                                            <Card className="h-full hover:border-primary transition-colors">
                                                <CardContent className="p-6 flex items-center space-x-4">
                                                    <ArrowLeft className="h-8 w-8 text-primary flex-shrink-0 transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                                                    <div>
                                                        <p className="text-sm text-muted-foreground">Previous Article</p>
                                                        <p className="font-semibold line-clamp-1">{previousArticle.title}</p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{previousArticle.title}</p>
                                    </TooltipContent>
                                </Tooltip>
                            )}
                        </div>
                        <div>
                            {nextArticle && (
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link href={`/blog/${nextArticle.slug}`} className="block group">
                                            <Card className="h-full hover:border-primary transition-colors">
                                                <CardContent className="p-6 flex items-center justify-end text-right space-x-4">
                                                    <div>
                                                        <p className="text-sm text-muted-foreground">Next Article</p>
                                                        <p className="font-semibold line-clamp-1">{nextArticle.title}</p>
                                                    </div>
                                                    <ArrowRight className="h-8 w-8 text-primary flex-shrink-0 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{nextArticle.title}</p>
                                    </TooltipContent>
                                </Tooltip>
                            )}
                        </div>
                    </nav>
                </div>
            </div>
        </TooltipProvider>
    );
}
