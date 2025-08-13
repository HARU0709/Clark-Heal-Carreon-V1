
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const newsData = [
  {
    title: "Portfolio Relaunched with Next.js 14",
    date: "2024-08-15",
    content: "My personal portfolio has been completely rebuilt from the ground up using the latest features of Next.js, including Server Components and the App Router for improved performance and a better developer experience.",
    tag: "Update",
    href: "/"
  },
  {
    title: "New Blog Post: 'AI with Genkit'",
    date: "2024-08-05",
    content: "Just published a new article diving into how to integrate Google's Genkit with Next.js to build powerful AI-driven features. Check it out in the Writings section!",
    tag: "Article",
    href: "/blog/genkit-with-nextjs"
  },
  {
    title: "Now Open for Freelance Work",
    date: "2024-08-01",
    content: "I'm excited to announce that I am now accepting new freelance projects. If you have an idea you'd like to bring to life, let's get in touch.",
    tag: "Announcement",
    href: "/#contact"
  },
];

export function NewsTab() {
  return (
    <div className="space-y-2">
      {newsData.map((item, index) => (
        <Link 
          key={index} 
          href={item.href}
          className="block p-4 rounded-lg hover:bg-accent transition-colors"
        >
          <div className="relative pl-6 border-l-2 border-primary/30">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary border-2 border-background" />
              <div className="flex items-center justify-between mb-1">
                  <p className="text-xs text-muted-foreground">{item.date}</p>
                  <Badge variant={item.tag === 'Update' ? 'default' : 'secondary'}>{item.tag}</Badge>
              </div>
              <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
