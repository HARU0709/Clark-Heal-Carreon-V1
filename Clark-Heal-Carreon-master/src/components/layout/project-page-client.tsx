
"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, CheckCircle, ArrowLeft, User, Briefcase, Target, BrainCircuit, ListChecks } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function ProjectPageClient({ project }: { project: Project }) {
  return (
    <div className="animate-fade-in-up pb-16 md:pb-24">
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 leading-tight">{project.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl -mt-12">
        <div className="mb-8">
            <Button asChild variant="outline" className="bg-background shadow-md">
                <Link href="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Projects
                </Link>
            </Button>
        </div>
        
        <Card className="shadow-lg overflow-hidden">
            <Carousel className="w-full relative">
              <CarouselContent>
                {(project.gallery && project.gallery.length > 0 ? project.gallery : [{ url: project.imageUrl, caption: project.title, imageHint: project.imageHint }]).map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={item.url}
                        alt={item.caption}
                        fill
                        className="object-cover"
                        data-ai-hint={item.imageHint}
                        priority={index === 0}
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                        <p className="text-white text-sm md:text-base font-semibold">{item.caption}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex" />
            </Carousel>
        </Card>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="md:col-span-2 space-y-10">
                {/* About Project Section */}
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center text-2xl">
                            <Briefcase className="mr-3 h-6 w-6 text-primary" />
                            About this project
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                       <div>
                            <h3 className="font-semibold text-foreground mb-2 flex items-center"><Target className="mr-2 h-5 w-5"/> The Problem</h3>
                            <p>{project.problemStatement || 'N/A'}</p>
                       </div>
                       <div>
                            <h3 className="font-semibold text-foreground mb-2 flex items-center"><BrainCircuit className="mr-2 h-5 w-5"/> The Solution</h3>
                            <p>{project.solution || project.longDescription || project.description}</p>
                       </div>
                    </CardContent>
                </Card>

                {/* Role & Responsibilities Section */}
                {project.myRole && project.responsibilities && (
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center text-2xl">
                                <User className="mr-3 h-6 w-6 text-primary" />
                                My Role & Responsibilities
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <h3 className="font-semibold text-foreground">Role: {project.myRole}</h3>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-foreground flex items-center"><ListChecks className="mr-2 h-5 w-5"/> Key Responsibilities:</h4>
                                <ul className="space-y-2 list-none p-0">
                                    {project.responsibilities.map((responsibility, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-muted-foreground">{responsibility}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>

            <aside className="space-y-8 md:col-span-1">
                 {/* Links Section */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Project Links</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                        <Button asChild className="w-full">
                        <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                            View Live Project <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                        </Button>
                        {project.repoUrl && (
                        <Button asChild variant="outline" className="w-full">
                            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub Repository
                            </Link>
                        </Button>
                        )}
                    </CardContent>
                </Card>
                {/* Technologies Section */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Technologies Used</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <div className="flex flex-wrap gap-2">
                            {project.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">{skill}</Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Key Achievements Section */}
                {project.achievements && project.achievements.length > 0 && (
                    <Card>
                         <CardHeader>
                            <CardTitle className="text-xl">Key Achievements</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 list-none p-0">
                                {project.achievements.map((achievement) => (
                                    <li key={achievement} className="flex items-start text-sm">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2.5 mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground">{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                )}
            </aside>
        </div>
      </div>
    </div>
  );
}
