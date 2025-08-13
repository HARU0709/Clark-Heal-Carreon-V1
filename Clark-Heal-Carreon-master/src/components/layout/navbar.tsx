
"use client";

import Link from 'next/link';
import { Menu, X, Briefcase, User, Settings, MessageSquareQuote, Send, PenSquare } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { cn } from '@/lib/utils';
import { HireMeModal } from '@/components/modals/hire-me-modal';

const navLinks = [
  { href: '#about', label: 'About', icon: User },
  { href: '#projects', label: 'Projects', icon: Briefcase },
  { href: '#skills', label: 'Skills', icon: Settings },
  { href: '#writings', label: 'Writings', icon: PenSquare },
  { href: '#testimonials', label: 'Testimonials', icon: MessageSquareQuote },
  { href: '#contact', label: 'Contact', icon: Send },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Handle shadow on scroll
      setIsScrolled(window.scrollY > 10);
      
      // Handle active link
      let current = '';
      const sectionElements = document.querySelectorAll('section[id]');
      sectionElements.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = `#${section.id}`;
        }
      });
      setActiveLink(current);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const AppLogo = () => (
     <Link href="/" className="text-xl md:text-2xl font-bold text-primary hover:opacity-80 transition-opacity" onClick={(e) => {
        if (window.location.pathname === '/') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }}>
        Clark Heal Carreon
      </Link>
  );

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
        isScrolled ? "shadow-md border-border/0" : "shadow-none"
      )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-8 md:px-20">
        <AppLogo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center md:flex">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" asChild>
              <Link href={link.href} className={cn(
                  "flex items-center space-x-2 px-2 py-2 lg:px-3 text-foreground hover:text-primary transition-colors",
                  activeLink === link.href && "text-primary"
                )}>
                <link.icon className="h-4 w-4" />
                <span>{link.label}</span>
              </Link>
            </Button>
          ))}
           <div className="ml-4">
            <ThemeToggle />
          </div>
          <div className="h-6 w-px bg-border mx-2" />
          <div>
            <HireMeModal>
              <Button>
                <Send className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
            </HireMeModal>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-0 bg-background flex flex-col">
               <SheetHeader className="p-6 pb-4 border-b">
                  <SheetTitle>
                    <Link href="/" className="text-xl font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                        Clark Heal Carreon
                    </Link>
                  </SheetTitle>
              </SheetHeader>
              <div className="flex-grow p-6">
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link, index) => (
                    <SheetClose key={link.href} asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center space-x-4 rounded-lg p-3 text-base font-medium text-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground",
                          activeLink === link.href ? "bg-accent text-accent-foreground" : "hover:translate-x-2",
                          "opacity-0 animate-fade-in-up"
                        )}
                        style={{ animationDelay: `${150 + index * 50}ms` }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <link.icon className="h-5 w-5" />
                        <span>{link.label}</span>
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
              <div className="p-6 mt-auto border-t">
                  <HireMeModal>
                      <Button className="w-full h-12 text-base" onClick={() => setIsMobileMenuOpen(false)}>
                          <Send className="mr-2 h-5 w-5" />
                          Hire Me
                      </Button>
                  </HireMeModal>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
