import React, { useState, useCallback, useEffect } from 'react';
import FeatureCard from '../FeatureCard';
import Navigation from './Navigation';

interface Feature {
  title: string;
  description: string;
  imageSrc: string;
}

interface FeatureCarouselProps {
  features: Feature[];
}

export default function FeatureCarousel({ features }: FeatureCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const canNavigatePrevious = currentIndex > 0;
  const canNavigateNext = currentIndex < features.length - 3;

  const handleNext = useCallback(() => {
    if (canNavigateNext) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [canNavigateNext]);

  const handlePrevious = useCallback(() => {
    if (canNavigatePrevious) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [canNavigatePrevious]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      handlePrevious();
    } else if (event.key === 'ArrowRight') {
      handleNext();
    }
  }, [handlePrevious, handleNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }
    if (touchStart - touchEnd < -75) {
      handlePrevious();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="relative">
      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-1/3 flex-shrink-0"
            >
              <FeatureCard
                {...feature}
                isActive={index >= currentIndex && index < currentIndex + 3}
              />
            </div>
          ))}
        </div>
      </div>

      <Navigation
        onPrevious={handlePrevious}
        onNext={handleNext}
        currentIndex={currentIndex}
        totalSlides={features.length}
        canNavigatePrevious={canNavigatePrevious}
        canNavigateNext={canNavigateNext}
      />
    </div>
  );
}