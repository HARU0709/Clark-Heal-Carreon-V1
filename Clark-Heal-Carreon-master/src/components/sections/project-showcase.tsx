
"use client";

import { useState, useMemo } from 'react';
import { ProjectCard } from '@/components/cards/project-card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getProjects } from '@/lib/project-data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Archive } from 'lucide-react';
import Link from 'next/link';

const projects = getProjects();

export function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = useMemo(() => {
    const allCategories = projects.map(p => p.category).filter(Boolean) as string[];
    return ['All', ...Array.from(new Set(allCategories))];
  }, []);
  
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }
    return projects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <section id="projects" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-8 md:px-20">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground" style={{ animationDelay: '0.2s' }}>
              A selection of my recent work, showcasing my skills and passion for creating impactful digital solutions.
            </p>
          </div>

          <div className="flex justify-center flex-wrap gap-2 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {categories.map(category => (
              <Button
                key={category}
                variant={activeFilter === category ? 'default' : 'outline'}
                onClick={() => setActiveFilter(category)}
                className="capitalize transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={cn(
                  "project-card-container transition-all duration-500 ease-in-out animate-fade-in-up"
                )}
                style={{ animationDelay: `${index * 100 + 500}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
             <div className="project-card-container transition-all duration-500 ease-in-out animate-fade-in-up" style={{ animationDelay: `${filteredProjects.length * 100 + 500}ms` }}>
                <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg bg-card border-dashed border-2 hover:-translate-y-1">
                    <CardHeader>
                        <CardTitle className="flex items-center text-primary">
                            <Archive className="mr-3 h-6 w-6" />
                            Project Archive
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                        <CardDescription className="text-muted-foreground">
                            Looking for more? You can find a collection of my previous work and older projects on my legacy portfolio site.
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 border-t">
                        <Button asChild className="w-full">
                            <Link href="https://sites.google.com/view/clark-heal-carreon/projects" target="_blank" rel="noopener noreferrer">
                                Visit Previous Projects <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
