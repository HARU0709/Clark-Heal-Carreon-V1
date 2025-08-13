
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { FaqTab } from '@/components/widgets/faq-tab';
import { NewsTab } from '@/components/widgets/news-tab';
import { MessageTab } from '@/components/widgets/message-tab';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// This is now the provider that contains the full-screen widget UI
export function FloatingWidgetProvider({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void; }) {
  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className={cn(
        "fixed bottom-0 right-0 z-50 transition-all duration-300 ease-in-out sm:bottom-8 sm:right-8",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <Card className="w-full h-[70vh] sm:w-[400px] sm:h-[600px] shadow-2xl rounded-t-lg sm:rounded-lg flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
          <div>
            <CardTitle>Support & Info</CardTitle>
            <CardDescription>Get help or stay updated.</CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleWidget} aria-label="Close widget">
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent className="p-0 flex-grow overflow-hidden">
          <Tabs defaultValue="faq" className="w-full h-full flex flex-col">
            <TabsList className="grid w-full grid-cols-3 rounded-none">
              <TabsTrigger value="faq">FAQs</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="messages">Message</TabsTrigger>
            </TabsList>
            <div className="flex-grow overflow-y-auto">
              <TabsContent value="faq" className="p-4 m-0">
                <FaqTab />
              </TabsContent>
              <TabsContent value="news" className="p-4 m-0">
                <NewsTab />
              </TabsContent>
              <TabsContent value="messages" className="p-0 m-0 h-full">
                <MessageTab />
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
