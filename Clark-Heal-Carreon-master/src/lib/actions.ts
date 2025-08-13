'use server';

import { z } from 'zod';
import type { ContactFormData } from '@/types';

// Schema for Contact Form
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function handleContactFormAction(
  data: ContactFormData
): Promise<{ success: boolean; message: string; fieldErrors?: Record<string, string[]> }> {
  const validation = ContactFormSchema.safeParse(data);
  if (!validation.success) {
    return {
      success: false,
      message: "Invalid input.",
      fieldErrors: validation.error.flatten().fieldErrors,
    };
  }

  // In a real application, you would send an email or save to a database here.
  console.log("Contact form submission received:", validation.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: "Thank you for your message! I'll get back to you soon." };
}
