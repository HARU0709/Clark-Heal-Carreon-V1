"use client"

import { Button } from '@/components/ui/button';
import { HireMeModal } from '@/components/modals/hire-me-modal';
import { Send } from 'lucide-react';

export function CtaSection() {
  return (
    <section id="cta" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-8 md:px-20">
        <div className="cta-glow-container bg-primary text-primary-foreground rounded-lg shadow-xl p-8 md:p-12 text-center animate-fade-in-up">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 relative z-10">
            Ready to bring your ideas to life?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90 relative z-10">
            Let's collaborate and create something amazing together. I'm currently available for freelance projects and new opportunities.
          </p>
          <div className="relative z-10">
            <HireMeModal>
              <Button size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-shadow btn-shimmer text-lg px-8 py-6">
                <Send className="mr-2 h-5 w-5" />
                Let's Talk
              </Button>
            </HireMeModal>
          </div>
        </div>
      </div>
    </section>
  );
}
