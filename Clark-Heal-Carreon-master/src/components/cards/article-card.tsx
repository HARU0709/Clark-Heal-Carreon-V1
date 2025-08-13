import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, CalendarDays } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <Link href={`/blog/${article.slug}`} className="block aspect-video overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.title}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            data-ai-hint={article.imageHint}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow space-y-3">
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
        <CardTitle className="text-xl font-bold">
           <Link href={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
            {article.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-3">{article.excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 mt-auto border-t flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
         <div className="flex items-center space-x-3">
            <Avatar className="h-9 w-9">
              <AvatarImage src={article.authorImageUrl} alt={article.author} />
              <AvatarFallback>{article.author.substring(0, 1)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-foreground">{article.author}</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
                <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </div>
            </div>
          </div>
        <Button asChild variant="outline" size="sm">
          <Link href={`/blog/${article.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
