
import type { Testimonial } from '@/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "Clark is an exceptional developer with a keen eye for detail and a strong commitment to quality. He consistently delivered outstanding results and was a pleasure to work with. His problem-solving skills are top-notch!",
    author: 'Alvin Reyes',
  },
  {
    id: '2',
    quote: "Working with Clark on our recent project was a fantastic experience. His technical expertise and proactive communication ensured we stayed on track and launched successfully. Highly recommended!",
    author: 'Jericho Dela Cruz',
  },
  {
    id: '3',
    quote: "The UI/UX work Clark provided was transformative for our application. He has a great understanding of user needs and translates them into beautiful, functional designs. A true asset to any team.",
    author: 'Renzo Bautista',
  },
  {
    id: '4',
    quote: "His ability to quickly grasp complex requirements and turn them into elegant, scalable solutions is impressive. He's a reliable and talented engineer.",
    author: 'Danica Santos',
  },
  {
    id: '5',
    quote: "Clark was instrumental in our platform's redesign. His frontend skills and design sensibility elevated the user experience to a new level.",
    author: 'Mayumi Navarro',
  },
  {
    id: '6',
    quote: "A true professional. He delivers clean code, meets deadlines, and is always ready to help his teammates. I would work with him again in a heartbeat.",
    author: 'Clarisse Ramirez',
  }
];

const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length > 1) {
        return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg w-[350px] md:w-[450px] flex-shrink-0">
    <CardHeader className="relative p-6">
      <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/30" />
    </CardHeader>
    <CardContent className="p-6 flex-grow">
      <p className="text-muted-foreground italic leading-relaxed">
        "{testimonial.quote}"
      </p>
    </CardContent>
    <CardFooter className="p-6 border-t bg-secondary/50 rounded-b-lg">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src={testimonial.imageUrl} alt={testimonial.author} data-ai-hint={testimonial.imageHint} />
          <AvatarFallback>{getInitials(testimonial.author)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-foreground">{testimonial.author}</p>
        </div>
      </div>
    </CardFooter>
  </Card>
);

export function TestimonialSection() {
  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-8 md:px-20">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What Others <span className="text-primary">Say</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground" style={{ animationDelay: '0.2s' }}>
            Kind words from colleagues and clients I've had the pleasure to work with.
          </p>
        </div>
      </div>
      <div className="relative flex flex-col gap-4 overflow-hidden">
         {/* This div creates the fade effect at the edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none"></div>

        <div className="flex gap-4 animate-scroll-right">
          {[...firstRow, ...firstRow].map((testimonial, index) => (
             <TestimonialCard key={`first-${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
        <div className="flex gap-4 animate-scroll-left">
          {[...secondRow, ...secondRow].map((testimonial, index) => (
            <TestimonialCard key={`second-${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
