import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  currentSlide: number;
  totalSlides: number;
}

export default function Navigation({ onPrevious, onNext, currentSlide, totalSlides }: NavigationProps) {
  return (
    <>
      <button
        onClick={onPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-3 text-[#22C55E] hover:text-white transition-colors duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-12 w-12" />
      </button>
      
      <button
        onClick={onNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-3 text-[#22C55E] hover:text-white transition-colors duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="h-12 w-12" />
      </button>

      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex space-x-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-[#22C55E]' 
                : 'bg-white/20 hover:bg-white/30'
            }`}
          />
        ))}
      </div>
    </>
  );
}