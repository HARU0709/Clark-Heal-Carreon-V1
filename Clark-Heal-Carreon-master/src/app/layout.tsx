import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { CursorGlow } from '@/components/ui/cursor-glow';
import { FloatingActionButtons } from '@/components/layout/floating-action-buttons';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Clark Heal Carreon',
    default: 'Clark Heal Carreon - Full-Stack Developer & UI/UX Enthusiast',
  },
  description: 'Personal portfolio of Clark Heal Carreon, a passionate Full-Stack Developer and UI/UX enthusiast crafting seamless digital experiences with creativity and precision.',
  keywords: ['Clark Heal Carreon', 'Full-Stack Developer', 'React Developer', 'Next.js Developer', 'UI/UX Designer', 'Portfolio', 'Web Developer Philippines'],
  authors: [{ name: 'Clark Heal Carreon', url: 'https://clark-heal-carreon.vercel.app/' }],
  creator: 'Clark Heal Carreon',
  publisher: 'Clark Heal Carreon',
  metadataBase: new URL('https://clark-heal-carreon.vercel.app/'),
  verification: {
    google: 'MzTP4c7K9qk4xOm7Tf8eDDHcjcEY85jd-15odopgbEo',
  },
  openGraph: {
    title: 'Clark Heal Carreon - Full-Stack Developer & UI/UX Enthusiast',
    description: 'Personal portfolio of Clark Heal Carreon, showcasing projects and skills in web development and UI/UX design.',
    url: 'https://clark-heal-carreon.vercel.app/',
    siteName: 'Clark Heal Carreon Portfolio',
    images: [
      {
        url: 'https://i.ibb.co/Q3hs96cf/1685621767959.jpg', 
        width: 800,
        height: 600,
        alt: 'Clark Heal Carreon Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clark Heal Carreon - Full-Stack Developer & UI/UX Enthusiast',
    description: 'Explore the portfolio of Clark Heal Carreon, a Full-Stack Developer specializing in React, Next.js, and modern web technologies.',
    creator: '@clarkcarreon',
    images: ['https://i.ibb.co/Q3hs96cf/1685621767959.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CursorGlow />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
          <FloatingActionButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
