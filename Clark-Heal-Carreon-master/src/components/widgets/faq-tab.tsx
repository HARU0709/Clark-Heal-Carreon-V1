
"use client";

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search } from 'lucide-react';
import { CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '../ui/button';

const faqData = [
  {
    question: "What technologies do you specialize in?",
    answer: (
      <>
        I specialize in the MERN stack and Next.js for full-stack development. You can see a full list of my technical skills in the{' '}
        <Button variant="link" asChild className="p-0 h-auto font-normal"><Link href="/#skills">Skills section</Link></Button>.
      </>
    ),
    keywords: 'technologies skills mern next.js'
  },
  {
    question: "Are you available for freelance projects?",
    answer: (
        <>
            Yes, I am currently open to new freelance opportunities. Please reach out via the{' '}
            <Button variant="link" asChild className="p-0 h-auto font-normal"><Link href="/#contact">Contact section</Link></Button> to discuss your project.
        </>
    ),
    keywords: 'freelance projects availability contact'
  },
  {
    question: "How can I download your resume?",
    answer: (
        <>
            You can download my resume by clicking the &quot;Download Resume&quot; button in the{' '}
             <Button variant="link" asChild className="p-0 h-auto font-normal"><Link href="/#about">About Me section</Link></Button>.
        </>
    ),
    keywords: 'download resume cv about'
  },
  {
    question: "What is your design philosophy?",
    answer: "I believe in creating user-centered designs that are both beautiful and functional, focusing on clean layouts, intuitive navigation, and clear user feedback.",
    keywords: 'design philosophy ui ux'
  },
  {
    question: "Where can I see more of your work?",
    answer: (
        <>
            My featured projects are showcased in the{' '}
            <Button variant="link" asChild className="p-0 h-auto font-normal"><Link href="/#projects">Projects section</Link></Button>.
            For more, you can visit my legacy portfolio linked in the Project Archive.
        </>
    ),
    keywords: 'work projects portfolio showcase'
  },
  {
    question: "What is your typical project workflow?",
    answer: "My workflow typically involves four main phases: Discovery & Planning, Design & Prototyping, Development & Implementation, and finally Testing & Deployment.",
    keywords: 'workflow process project'
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines can vary greatly depending on the scope and complexity. A small brochure website might take a few weeks, while a full-stack application could take several months. I provide a detailed time estimate after our initial discovery and planning phase.",
    keywords: 'timeline project duration'
  },
  {
    question: "What are you passionate about learning next?",
    answer: "I'm currently deepening my expertise in building AI-powered applications using tools like Google's Genkit. I'm also exploring advanced cloud-native technologies and containerization with Docker and Kubernetes to build more scalable and resilient systems.",
    keywords: 'learning ai genkit docker kubernetes'
  }
];

export function FaqTab() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = useMemo(() => {
    if (!searchTerm) return faqData;
    const lowercasedTerm = searchTerm.toLowerCase();
    return faqData.filter(faq =>
      faq.question.toLowerCase().includes(lowercasedTerm) ||
      (typeof faq.answer === 'string' && faq.answer.toLowerCase().includes(lowercasedTerm)) ||
      (faq.keywords && faq.keywords.toLowerCase().includes(lowercasedTerm))
    );
  }, [searchTerm]);

  return (
    <div className="space-y-4">
      <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Accordion type="single" collapsible className="w-full">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))
        ) : (
          <p className="text-muted-foreground text-center py-4">No results found.</p>
        )}
      </Accordion>
    </div>
  );
}
