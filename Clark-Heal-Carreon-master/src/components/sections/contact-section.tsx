
"use client";

import { ContactForm } from '@/components/forms/contact-form';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "Zone 8, Ayala, Zamboanga City, Zamboanga Del Sur Philippines, 7000",
    href: "#",
  },
  {
    icon: Phone,
    label: "Mobile",
    value: "+63 9362536991",
    href: "tel:+639362536991",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Daily 09 am - 05 pm",
    href: "#",
  },
  {
    icon: Mail,
    label: "Email",
    value: "carreonclark72@gmail.com",
    href: "mailto:carreonclark72@gmail.com",
  }
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100068850556658&mibextid=ZbWKwL", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/healium2/", label: "Instagram" },
  { icon: MessageSquare, href: "https://m.me/clarkheal.carreon", label: "Messenger" },
  { icon: Twitter, href: "https://twitter.com/HARU_KUN72?t=rgrmRQeymPgcFLljuX32og&s=03", label: "Twitter" },
];


export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background animate-fade-in">
      <div className="container mx-auto px-8 md:px-20">
        <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground" style={{ animationDelay: '0.2s' }}>
              Have a project in mind or just want to say hi? Feel free to reach out.
            </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <div className="p-6 md:p-8 rounded-lg shadow-lg bg-secondary animate-fade-in-up">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Get in Touch with Us</h3>
            <ContactForm />
          </div>

          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Contact Details</h3>
              <p className="text-muted-foreground mb-6">
                Lorem ipsum dolor sit amet, consecte turin ole adip iscing vipu dalit elit taras tellus neul sarat tame lat maecorper del materno denta low tuco.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactDetails.map((detail) => (
                   <Card key={detail.label} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 flex items-center gap-4">
                       <div className="bg-primary/10 p-3 rounded-lg">
                        <detail.icon className="h-6 w-6 text-primary shrink-0" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{detail.label}</p>
                        <a 
                          href={detail.href} 
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={(e) => { if (detail.href === '#') e.preventDefault(); }}
                        >
                          {detail.value}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-foreground">Social Media:</h4>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="default"
                      size="icon"
                      asChild
                      className="h-9 w-9 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-accent hover:text-accent-foreground"
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

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
