
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight, MessageSquare } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100068850556658&mibextid=ZbWKwL", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/healium2/", label: "Instagram" },
  { icon: MessageSquare, href: "https://m.me/clarkheal.carreon", label: "Messenger" },
  { icon: Twitter, href: "https://twitter.com/HARU_KUN72?t=rgrmRQeymPgcFLljuX32og&s=03", label: "Twitter" },
];

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#contact', label: 'Contact' },
];

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-card text-card-foreground border-t-4 border-primary">
      <div className="container mx-auto py-12 px-8 md:px-20">
        
        {/* Top section with navigation */}
        <div className="flex flex-wrap justify-between items-center mb-10 pb-8 border-b">
           <div className="flex-shrink-0 mb-4 md:mb-0">
             <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
                Clark Heal Carreon
            </Link>
           </div>
           <nav className="flex flex-wrap gap-x-6 gap-y-2">
             {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="font-medium text-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
           </nav>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Column 1: Follow Me */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Follow Me</h4>
             <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="default"
                  size="icon"
                  asChild
                  className="rounded-full h-9 w-9 transition-transform duration-300 ease-in-out hover:scale-110"
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          
          {/* Column 2: About Us */}
          <div className="space-y-4 lg:col-span-2">
             <h4 className="font-semibold text-lg">About Me</h4>
             <p className="text-muted-foreground text-sm leading-relaxed">
              A passionate Full-Stack Developer and UI/UX enthusiast crafting seamless digital experiences with creativity and precision. Dedicated to building innovative, user-friendly applications that solve real-world problems.
            </p>
          </div>

          {/* Column 3: Contact and Subscribe */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Stay Updated</h4>
            <div className='space-y-1'>
                <p className="text-sm font-medium">Call: <a href="tel:+639362536991" className="text-muted-foreground hover:text-primary">+63 9362536991</a></p>
                <p className="text-sm font-medium">Email: <a href="mailto:carreonclark72@gmail.com" className="text-muted-foreground hover:text-primary">carreonclark72@gmail.com</a></p>
            </div>
             <form className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Enter Email" className="flex-1" />
                <Button type="submit" size="icon">
                    <ArrowRight className="h-4 w-4" />
                </Button>
            </form>
          </div>

        </div>

        {/* Bottom copyright section */}
        <div className="text-center pt-8 border-t">
            <p className="text-sm text-muted-foreground">
                {currentYear !== null ? `© ${currentYear} Clark Heal Carreon. All rights reserved.` : 'Loading copyright...'}
            </p>
        </div>
      </div>
    </footer>
  );
}
