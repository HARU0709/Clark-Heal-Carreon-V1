
"use client";

import { ContactForm } from "@/components/forms/contact-form";
import { ResponsiveDialog } from "@/components/ui/responsive-dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageSquare } from "lucide-react";

interface HireMeModalProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
}

const ModalContent = () => (
    <div className="py-4 space-y-6">
        <ContactForm />

        <div className="relative">
            <div className="absolute inset-0 flex items-center">
                <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                Or
                </span>
            </div>
        </div>

        <Button variant="outline" className="w-full" asChild>
            <Link href="https://m.me/clarkcarreon" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-4 w-4" />
                Message on Messenger
            </Link>
        </Button>
  </div>
);


export function HireMeModal({ children }: HireMeModalProps) {
  return (
    <ResponsiveDialog
      title="Contact Me"
      description="I'm excited to hear about your project. Please fill out the form below, or message me directly."
      content={<ModalContent />}
    >
      {children}
    </ResponsiveDialog>
  );
}
