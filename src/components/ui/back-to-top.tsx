// components/back-to-top.tsx
"use client";

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <Button
        onClick={scrollToTop}
        className="rounded-full p-3 h-12 w-12 shadow-lg bg-primary hover:bg-primary/80"
      >
        <ChevronUp className="h-6 w-6" />
        <span className="sr-only">Back to top</span>
      </Button>
    </div>
  );
};