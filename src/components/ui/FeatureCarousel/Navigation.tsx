import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  currentIndex: number;
  totalSlides: number;
  canNavigatePrevious: boolean;
  canNavigateNext: boolean;
}

export default function Navigation({
  onPrevious,
  onNext,
  currentIndex,
  totalSlides,
  canNavigatePrevious,
  canNavigateNext,
}: NavigationProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
      <button
        onClick={onPrevious}
        disabled={!canNavigatePrevious}
        className={`pointer-events-auto p-3 rounded-full bg-white/10 backdrop-blur-sm text-white
          transition-all duration-200 ${
            canNavigatePrevious
              ? 'opacity-100 hover:bg-white/20'
              : 'opacity-50 cursor-not-allowed'
          }`}
        aria-label="Previous slides"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      
      <button
        onClick={onNext}
        disabled={!canNavigateNext}
        className={`pointer-events-auto p-3 rounded-full bg-white/10 backdrop-blur-sm text-white
          transition-all duration-200 ${
            canNavigateNext
              ? 'opacity-100 hover:bg-white/20'
              : 'opacity-50 cursor-not-allowed'
          }`}
        aria-label="Next slides"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
    </div>
  );
}