"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export function CursorGlow() {
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!mounted || theme !== 'dark') {
    return null;
  }

  return (
    <div
      className={cn(
        'hidden md:block fixed inset-0 z-[99] pointer-events-none transition-transform duration-300',
        isPointer && 'transform scale-150'
      )}
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(21, 86, 252, 0.1), transparent 80%)`,
      }}
    />
  );
}
