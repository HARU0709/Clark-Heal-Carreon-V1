
"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FloatingWidgetProvider } from "@/components/layout/floating-widget";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      variant="default"
      size="icon"
      onClick={scrollToTop}
      className={cn(
        "rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      )}
      aria-label="Go to top"
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  );
}

function WidgetToggleButton({ toggleWidget }: { toggleWidget: () => void }) {
  return (
    <Button
      size="icon"
      className="rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform animate-wave"
      onClick={toggleWidget}
      aria-label="Open support widget"
    >
      <MessageSquare className="h-7 w-7" />
    </Button>
  );
}

export function FloatingActionButtons() {
    const [isWidgetOpen, setIsWidgetOpen] = useState(false);

    return (
        <>
            <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-4">
               <div className={cn(
                    "transition-transform duration-300 ease-in-out",
                    isWidgetOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
                )}>
                    <WidgetToggleButton toggleWidget={() => setIsWidgetOpen(true)} />
                </div>
                <BackToTopButton />
            </div>
            <FloatingWidgetProvider isOpen={isWidgetOpen} setIsOpen={setIsWidgetOpen} />
        </>
    )
}
