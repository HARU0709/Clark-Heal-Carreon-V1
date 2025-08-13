
import type { SkillCategory } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, LayoutPanelLeft, Server, Wind, GitFork, Package, Palette, Settings, Cloud } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const skillData: SkillCategory[] = [
  {
    categoryName: 'Frontend Development',
    icon: LayoutPanelLeft,
    skills: [
      { name: 'HTML5', icon: Code, color: 'text-orange-600 dark:text-orange-400', tooltip: '5+ years of experience' },
      { name: 'CSS3', icon: Palette, color: 'text-blue-600 dark:text-blue-400', tooltip: '5+ years of experience' },
      { name: 'JavaScript (ES6+)', icon: Code, color: 'text-yellow-500 dark:text-yellow-400', tooltip: '5+ years of experience' },
      { name: 'TypeScript', icon: Code, color: 'text-blue-500 dark:text-blue-400', tooltip: '4+ years of experience' },
      { name: 'React', icon: LayoutPanelLeft, color: 'text-sky-500 dark:text-sky-400', tooltip: '2+ years of experience' },
      { name: 'Next.js', icon: Server, color: 'text-neutral-800 dark:text-neutral-200', tooltip: '2+ years of experience' },
      { name: 'Tailwind CSS', icon: Wind, color: 'text-teal-500 dark:text-teal-400', tooltip: '3+ years of experience' },
      { name: 'ShadCN UI', icon: LayoutPanelLeft, color: 'text-neutral-700 dark:text-neutral-300', tooltip: 'Component library for rapid UI development' },
    ],
  },
  {
    categoryName: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: Server, color: 'text-green-600 dark:text-green-400', tooltip: '4+ years of experience' },
      { name: 'Express.js', icon: Server, color: 'text-neutral-700 dark:text-neutral-300', tooltip: 'Building RESTful APIs' },
      { name: 'Python', icon: Code, color: 'text-blue-500 dark:text-blue-400', tooltip: '2+ years of experience' },
      { name: 'Django', icon: Server, color: 'text-green-700 dark:text-green-500', tooltip: 'Rapid development and clean design' },
      { name: 'REST APIs', icon: Settings, color: 'text-emerald-500 dark:text-emerald-400', tooltip: 'Designing and consuming RESTful services' },
      { name: 'GraphQL', icon: Settings, color: 'text-pink-500 dark:text-pink-400', tooltip: 'Efficient data fetching with GraphQL' },
    ],
  },
  {
    categoryName: 'Databases & Storage',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', icon: Database, color: 'text-sky-700 dark:text-sky-400', tooltip: 'Relational database management' },
      { name: 'MongoDB', icon: Database, color: 'text-green-500 dark:text-green-400', tooltip: 'NoSQL document-oriented database' },
      { name: 'Firebase', icon: Cloud, color: 'text-amber-500 dark:text-amber-400', tooltip: 'Backend-as-a-Service platform' },
      { name: 'SQL', icon: Database, color: 'text-indigo-500 dark:text-indigo-400', tooltip: 'Proficient in writing complex queries' },
    ],
  },
  {
    categoryName: 'Tools & Platforms',
    icon: Settings,
    skills: [
      { name: 'Git & GitHub', icon: GitFork, color: 'text-neutral-700 dark:text-neutral-300', tooltip: 'Version control and collaboration' },
      { name: 'Docker', icon: Package, color: 'text-blue-500 dark:text-blue-400', tooltip: 'Containerization for consistent environments' },
      { name: 'VS Code', icon: Code, color: 'text-sky-600 dark:text-sky-400', tooltip: 'My primary code editor' },
      { name: 'Figma', icon: Palette, color: 'text-purple-500 dark:text-purple-400', tooltip: 'Collaborative design and prototyping' },
      { name: 'Genkit', icon: Settings, color: 'text-violet-500 dark:text-violet-400', tooltip: 'AI development toolkit' },
    ],
  },
];

export function SkillsSection() {
  return (
    <TooltipProvider>
      <section id="skills" className="py-16 md:py-24 bg-secondary animate-fade-in">
        <div className="container mx-auto px-8 md:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              My Technical <span className="text-primary">Skills</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A snapshot of the technologies and tools I work with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillData.map((category, categoryIndex) => (
              <Card 
                key={category.categoryName} 
                className="bg-card shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-lg animate-fade-in-up" 
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary flex items-center">
                    {category.icon && <category.icon className="mr-3 h-6 w-6 animate-pop-in" style={{ animationDelay: `${categoryIndex * 0.1 + 0.2}s` }} />}
                    {category.categoryName}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                       <Tooltip key={skill.name}>
                        <TooltipTrigger asChild>
                           <Badge 
                            variant="secondary" 
                            className="text-sm py-1.5 px-3 flex items-center gap-2 shadow-sm opacity-0 animate-fade-in-up cursor-pointer transition-all duration-200 hover:bg-primary/10 hover:shadow-md hover:scale-105"
                            style={{ animationDelay: `${categoryIndex * 0.1 + (skillIndex + 1) * 0.05}s`, animationFillMode: 'forwards' }}
                          >
                            {skill.icon && <skill.icon className={cn("h-4 w-4", skill.color || 'text-muted-foreground')} />}
                            <span className="font-medium">{skill.name}</span>
                          </Badge>
                        </TooltipTrigger>
                         {skill.tooltip && (
                          <TooltipContent>
                            <p>{skill.tooltip}</p>
                          </TooltipContent>
                        )}
                      </Tooltip>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}
