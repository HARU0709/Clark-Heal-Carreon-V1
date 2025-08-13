
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown, Briefcase, Mail, Github, Linkedin, Instagram, Facebook, MessageSquare, ShieldCheck, Rocket, Heart } from 'lucide-react';
import Image from 'next/image';
import { HireMeModal } from '@/components/modals/hire-me-modal';
import { TypeAnimation } from 'react-type-animation';
import { cn } from '@/lib/utils';

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100068850556658&mibextid=ZbWKwL", label: "Facebook", position: 'top-1/4 -right-16' },
  { icon: Instagram, href: "https://www.instagram.com/healium2/", label: "Instagram", position: 'top-1/2 -right-16 -translate-y-1/2' },
  { icon: MessageSquare, href: "https://m.me/clarkheal.carreon", label: "Messenger", position: 'top-1/3 -left-16 -translate-y-1/2' },
  { icon: Linkedin, href: "https://www.linkedin.com/in/clark-heal-l-carreon-917247278/", label: "LinkedIn", position: 'top-2/3 -left-16 -translate-y-1/2' },
  { icon: Github, href: "https://github.com/HARU0709", label: "GitHub", position: 'top-8 -right-8' },
];

const testimonialCards = [
    {
        icon: ShieldCheck,
        text: "Delivers clean, high-quality code every time.",
        position: 'md:top-0 md:-left-28',
        delay: '0.2s',
        duration: '12s',
        color: 'text-blue-500'
    },
    {
        icon: Rocket,
        text: "Transforms complex ideas into elegant solutions.",
        position: 'md:bottom-10 md:-right-32',
        delay: '0.6s',
        duration: '14s',
        color: 'text-green-500'
    },
    {
        icon: Heart,
        text: "A true professional with a passion for user experience.",
        position: 'md:bottom-0 md:-left-32',
        delay: '1s',
        duration: '10s',
        color: 'text-violet-500'
    }
];

export function HeroSection() {
  return (
    <section id="hero" className="py-16 md:py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-8 md:px-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in-up h-24 md:h-32 lg:h-40">
              <span className="block">Hi, I&apos;m</span>
              <TypeAnimation
                sequence={[
                  'Clark Heal Carreon',
                  2000,
                  'a Full-Stack Developer',
                  2000,
                  'a UI/UX Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-primary"
                repeat={Infinity}
              />
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              A passionate Full-Stack Developer and UI/UX enthusiast, crafting seamless digital experiences with creativity and precision. Explore my work and let&apos;s build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" asChild className="shadow-md hover:shadow-lg transition-shadow btn-shimmer">
                <Link href="#projects">
                  <Briefcase className="mr-2 h-5 w-5" />
                  View Projects
                </Link>
              </Button>
              <HireMeModal>
                <Button size="lg" variant="outline" className="shadow-md hover:shadow-lg transition-shadow">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </HireMeModal>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center animate-fade-in-up group" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-80 h-80 md:w-96 md:h-96">
                
                <div className="absolute inset-0 overflow-hidden rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-105 z-20">
                    <Image 
                        src="https://i.ibb.co/Q3hs96cf/1685621767959.jpg" 
                        alt="Clark Heal Carreon" 
                        fill
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
                        priority
                    />
                </div>

                {/* Testimonial Cards for Desktop */}
                 {testimonialCards.map((card, index) => (
                   <div 
                    key={index}
                    className={cn(
                        'hidden md:block absolute p-3 bg-background/80 backdrop-blur-sm rounded-lg shadow-lg text-center animate-float z-30 w-48',
                        card.position
                    )}
                    style={{ animationDelay: card.delay, animationDuration: card.duration }}>
                        <card.icon className={cn("h-6 w-6 mx-auto mb-2", card.color)} />
                        <p className="text-xs text-foreground leading-tight">{card.text}</p>
                    </div>
                 ))}

                 {/* Social Icons for Desktop */}
                 <div className="hidden md:block">
                    {socialLinks.map((social, index) => (
                        <Button
                        key={social.label}
                        variant="default"
                        size="icon"
                        asChild
                        className={cn(
                        'absolute rounded-full transition-all duration-300 ease-in-out transform scale-0 group-hover:scale-100 shadow-lg hover:!scale-110 z-30 h-10 w-10',
                        social.position
                        )}
                        style={{ 
                            transitionDelay: `${index * 100 + 100}ms`
                        }}
                        >
                        <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                            <social.icon />
                        </Link>
                        </Button>
                    ))}
                 </div>
            </div>
             {/* Mobile-only section for cards and icons */}
            <div className="mt-8 space-y-8 md:hidden w-full max-w-sm">
                <div className="space-y-4">
                    {testimonialCards.map((card, index) => (
                        <div 
                            key={index}
                            className='p-4 bg-background/80 backdrop-blur-sm rounded-lg shadow-lg flex items-center gap-4 text-left w-full'
                        >
                            <card.icon className={cn("h-8 w-8 flex-shrink-0", card.color)} />
                            <p className="text-sm text-foreground leading-snug">{card.text}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center gap-4">
                     {socialLinks.map((social) => (
                        <Button
                        key={social.label}
                        variant="default"
                        size="icon"
                        asChild
                        className='rounded-full shadow-lg h-12 w-12'
                        >
                        <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                            <social.icon className="h-6 w-6"/>
                        </Link>
                        </Button>
                    ))}
                </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Link href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-8 w-8 text-primary animate-bounce mx-auto" />
          </Link>
        </div>
      </div>
    </section>
  );
}
