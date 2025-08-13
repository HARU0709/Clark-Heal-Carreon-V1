export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  imageHint: string;
  gallery?: {
    url: string;
    caption: string;
    imageHint: string;
  }[];
  projectUrl: string;
  repoUrl?: string;
  skills: string[];
  achievements: string[];
  category?: string;
  myRole?: string;
  responsibilities?: string[];
  problemStatement?: string;
  solution?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Skill {
  name:string;
  icon?: React.ElementType; // For Lucide icons
  color?: string;
  tooltip?: string;
}

export interface SkillCategory {
  categoryName: string;
  icon: React.ElementType;
  skills: Skill[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  imageUrl?: string;
  imageHint?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  imageHint: string;
  slug: string;
  author: string;
  authorImageUrl: string;
  date: string;
  tags: string[];
}
