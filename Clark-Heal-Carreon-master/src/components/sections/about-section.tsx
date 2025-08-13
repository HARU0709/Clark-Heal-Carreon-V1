
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Download, 
  Sparkles, 
  ShieldCheck, 
  Rocket, 
  Heart, 
  BrainCircuit, 
  Code, 
  Palette,
  GraduationCap,
  BookOpen,
  Coffee,
  Globe,
  Trophy,
  Lightbulb,
  Users,
  Bike
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { cn } from '@/lib/utils';

type Interest = {
  icon: React.ElementType;
  text: string;
  explanation: string;
};

const coreValues = [
    { icon: ShieldCheck, text: 'Quality-focused' },
    { icon: Rocket, text: 'Innovation-driven' },
    { icon: Heart, text: 'User-centered' },
    { icon: BrainCircuit, text: 'Continuous learner' },
];

const education = [
    {
        degree: 'Bachelor of Science in Information Technology',
        institution: 'Zamboanga Peninsula Polytechnic State University',
        period: 'June 12, 2023',
        details: ["Dean's Lister"],
    },
    {
        degree: 'Information and Communication Technology',
        institution: 'Ayala National High School',
        period: 'April 6, 2017',
        details: ["With Honors"],
    },
    {
        degree: 'Elementary Education',
        institution: 'Ayala Elementary School',
        period: 'March 30, 2012',
        details: [],
    },
];

const interests: Interest[] = [
    { icon: BookOpen, text: 'Reading', explanation: 'My passion for reading ranges from technical books that keep me ahead of software trends to the immersive worlds of manga, novels, and diverse storytelling.' },
    { icon: Coffee, text: 'Coffee', explanation: 'Whether it\'s a meticulously crafted espresso or a simple morning brew, I appreciate the art and science behind a great cup of coffee.' },
    { icon: Globe, text: 'Traveling', explanation: 'Exploring new places, from bustling cityscapes to serene natural landscapes, fuels my curiosity and broadens my perspective.' },
    { icon: Bike, text: 'Motorcycle Rides', explanation: 'The freedom of the open road on two wheels offers a unique blend of adrenaline and mindfulness that I find incredibly refreshing.' },
];

const achievements = [
    'Technical Drafting NC III (2016)',
    '3D Animation NC II (2017)',
    'Computer System Servicing NC II (2017)',
    'Logo making contest (2016)',
    'Certificate of Participation for Information Security Training (2021)',
    'Certificate of Recognition for attending ICT camp (2023) as Guest Speaker.',
];


export function AboutSection() {
  const [activeInterest, setActiveInterest] = useState<Interest | null>(null);

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-8 md:px-20">

        <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                About <span className="text-primary">Me</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
                A brief introduction about my background, education, and personal journey into the world of technology and design.
            </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8 animate-fade-in-up">
             <Card className="bg-card shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                        <Sparkles className="mr-3 h-6 w-6 text-primary" />
                        My Background
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <p>
                        I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. With over 5 years of experience in the industry, I've worked on a diverse range of projects from e-commerce platforms to complex enterprise applications.
                    </p>
                    <p>
                        My approach combines technical expertise with a keen eye for design, ensuring that the applications I build are not only functional but also deliver exceptional user experiences. I'm constantly learning and exploring new technologies to stay at the forefront of web development.
                    </p>
                    
                    <Separator className="my-6" />

                    <div>
                        <h4 className="font-semibold text-lg text-foreground mb-4">Core Values</h4>
                        <div className="flex flex-wrap gap-2">
                            {coreValues.map(value => (
                                <Badge key={value.text} variant="secondary" className="px-3 py-1.5 flex items-center gap-2">
                                    <value.icon className="h-4 w-4 text-primary" />
                                    <span>{value.text}</span>
                                </Badge>
                            ))}
                        </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4 pt-4">
                        <Card className="bg-secondary/50 hover:shadow-md transition-shadow backdrop-blur-lg border border-white/10">
                            <CardContent className="p-6 space-y-2">
                                <Code className="h-8 w-8 text-primary mb-2"/>
                                <h5 className="font-bold text-lg text-foreground">Development</h5>
                                <p className="text-sm text-muted-foreground">Building modern, responsive web applications with React, Node.js, and other cutting-edge technologies.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-secondary/50 hover:shadow-md transition-shadow backdrop-blur-lg border border-white/10">
                            <CardContent className="p-6 space-y-2">
                                <Palette className="h-8 w-8 text-primary mb-2"/>
                                <h5 className="font-bold text-lg text-foreground">Design</h5>
                                <p className="text-sm text-muted-foreground">Creating intuitive user interfaces and experiences that are both beautiful and functional.</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="pt-6">
                         <Button variant="default" size="lg" asChild className="shadow-md hover:shadow-lg transition-shadow">
                            <Link href="https://drive.google.com/uc?export=download&id=1GkJh73VGIdRZwAg2Cy-06Obq58FECWHg" rel="noopener noreferrer" download="Clark-Heal-Carreon-Resume.pdf">
                            <Download className="mr-2 h-5 w-5" />
                            Download Resume
                            </Link>
                        </Button>
                    </div>

                </CardContent>
             </Card>
            <Card className="bg-card shadow-lg">
              <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                      <div className="bg-primary/10 p-2 rounded-lg mr-3">
                          <Users className="h-5 w-5 text-primary" />
                      </div>
                      Personal Interests
                  </CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                      {interests.map(interest => (
                          <button
                              key={interest.text}
                              onClick={() => setActiveInterest(activeInterest?.text === interest.text ? null : interest)}
                              className={cn(
                                  "flex flex-col items-center justify-center gap-2 p-4 rounded-lg cursor-pointer transition-all duration-300",
                                  activeInterest?.text === interest.text
                                      ? 'bg-primary/10 border-primary'
                                      : 'bg-secondary hover:bg-secondary/80'
                              )}
                          >
                              <div className={cn(
                                  "flex items-center justify-center h-12 w-12 rounded-full transition-colors",
                                  activeInterest?.text === interest.text ? 'bg-primary' : 'bg-primary/10'
                              )}>
                                  <interest.icon className={cn(
                                      "h-6 w-6 transition-colors",
                                      activeInterest?.text === interest.text ? 'text-primary-foreground' : 'text-primary'
                                  )} />
                              </div>
                              <span className="text-sm font-medium text-foreground text-center">{interest.text}</span>
                          </button>
                      ))}
                  </div>
                  {activeInterest && (
                    <div className="p-4 bg-secondary rounded-lg min-h-[80px] flex items-center">
                      <p className="text-muted-foreground text-sm text-center w-full">{activeInterest.explanation}</p>
                    </div>
                  )}
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Card className="bg-card shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                        <div className="bg-primary/10 p-2 rounded-lg mr-3">
                           <GraduationCap className="h-5 w-5 text-primary" />
                        </div>
                        Education
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {education.map((edu, index) => (
                        <div key={index} className="relative pl-8">
                             <div className="absolute left-1.5 top-1.5 h-full w-px bg-border" />
                             <div className={`absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 ${index === 0 ? 'border-primary bg-background' : 'border-green-400 bg-background'}`} />
                            <p className="font-semibold text-foreground">{edu.degree}</p>
                            <p className="text-sm text-muted-foreground">{edu.institution}</p>
                            <Badge variant="secondary" className={`my-2 ${index === 0 ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300' : 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300'}`}>{edu.period}</Badge>
                            <ul className="text-sm text-muted-foreground list-disc pl-5 mt-2 space-y-1">
                                {edu.details.map(detail => <li key={detail}>{detail}</li>)}
                            </ul>
                        </div>
                    ))}
                </CardContent>
            </Card>
            
            <Card className="bg-card shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                        <Trophy className="mr-3 h-5 w-5 text-primary" />
                        Achievements
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {achievements.map(ach => (
                        <div key={ach} className="flex items-start gap-3">
                            <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-muted-foreground">{ach}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
