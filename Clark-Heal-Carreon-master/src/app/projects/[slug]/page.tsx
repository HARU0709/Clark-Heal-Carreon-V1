import { notFound } from 'next/navigation';
import { getProjectBySlug, getProjects } from '@/lib/project-data';
import { ProjectPageClient } from '@/components/layout/project-page-client';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }
 
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: project.title,
    description: project.description,
    keywords: project.skills,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `/projects/${project.slug}`,
      type: 'article', // Using 'article' type can be beneficial for portfolio projects
      images: [
        {
          url: project.imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
        ...previousImages,
      ],
    },
     twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      creator: '@clarkcarreon',
      images: [project.imageUrl],
    },
  }
}

export function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} />;
}
