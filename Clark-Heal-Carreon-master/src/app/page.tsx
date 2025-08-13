import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ProjectShowcase } from '@/components/sections/project-showcase';
import { SkillsSection } from '@/components/sections/skills-section';
import { TestimonialSection } from '@/components/sections/testimonial-section';
import { ContactSection } from '@/components/sections/contact-section';
import { WritingsSection } from '@/components/sections/writings-section';
import { CtaSection } from '@/components/sections/cta-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectShowcase />
      <SkillsSection />
      <WritingsSection />
      <TestimonialSection />
      <ContactSection />
      <CtaSection />
    </>
  );
}
