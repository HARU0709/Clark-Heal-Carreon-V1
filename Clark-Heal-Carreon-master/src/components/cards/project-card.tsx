"use client";

import Image from 'next/image';
import { useRef, useState } from 'react';
import type { Project } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) / (width / 2);
    const y = (clientY - top - height / 2) / (height / 2);

    setStyle({
      transform: `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.05, 1.05, 1.05)`,
    });
  };

  const onMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)',
    });
  };

  return (
    <Card
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style}
      className="flex flex-col h-full overflow-hidden shadow-lg transition-transform duration-300 ease-out rounded-lg"
    >
      <CardHeader className="p-0" style={{ transform: 'translateZ(40px)' }}>
        <div className="aspect-video overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={600}
            height={400}
            className="object-cover w-full h-full"
            data-ai-hint={project.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow space-y-4" style={{ transform: 'translateZ(30px)' }}>
        <CardTitle className="text-2xl font-semibold text-primary">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-3">{project.description}</CardDescription>
        <div className="space-y-2">
          <h4 className="font-medium text-sm text-foreground">Top Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {project.skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 border-t" style={{ transform: 'translateZ(20px)' }}>
        <Button asChild className="w-full">
          <Link href={`/projects/${project.slug}`}>
            <Eye className="mr-2 h-4 w-4" />
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
