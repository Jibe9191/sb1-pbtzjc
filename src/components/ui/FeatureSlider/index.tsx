import React, { useState, useEffect, useCallback } from 'react';
import Slide from './Slide';
import SliderNavigation from './Navigation';

const features = [
  {
    title: 'Improve customer service provision through improved route planning.',
    imageSrc: 'https://dynamix.telimatix.com/files/fleet-tracking-1.svg'
  },
  {
    title: 'Reduce accident risk within your fleet by observing unsafe driving behaviors.',
    imageSrc: 'https://dynamix.telimatix.com/files/fleet-tracking-2.svg'
  },
  {
    title: 'Detect over- or underutilization of vehicles and equipment.',
    imageSrc: 'https://dynamix.telimatix.com/files/fleet-tracking-3.svg'
  },
  {
    title: 'Monitor fuel consumption and identify potential fuel theft.',
    imageSrc: 'https://dynamix.telimatix.com/files/fleet-tracking-4.svg'
  },
  {
    title: 'Track maintenance schedules and prevent unexpected breakdowns.',
    imageSrc: 'https://dynamix.telimatix.com/files/fleet-tracking-5.svg'
  },
  {
    title: 'Generate comprehensive reports for fleet performance analysis.',
    imageSrc: 'https://dynamix.telimatix.com/files/fleet-tracking-6.svg'
  }
];

export default function FeatureSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  }, []);

  const handlePrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  }, []);

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

  const getVisibleSlides = () => {
    const slides = [];
    const totalSlides = features.length;
    
    // Previous slide
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    slides.push({ ...features[prevIndex], index: prevIndex });
    
    // Current slide
    slides.push({ ...features[currentSlide], index: currentSlide });
    
    // Next slide
    const nextIndex = (currentSlide + 1) % totalSlides;
    slides.push({ ...features[nextIndex], index: nextIndex });
    
    return slides;
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
      <div
        className="w-full flex items-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full flex transition-transform duration-500 ease-out">
          {getVisibleSlides().map((feature, idx) => (
            <div
              key={feature.index}
              className="w-full min-w-full"
              style={{
                transform: `translateX(${(idx - 1) * 100}%)`,
                transition: 'transform 0.5s ease-out'
              }}
            >
              <Slide
                title={feature.title}
                imageSrc={feature.imageSrc}
                isActive={feature.index === currentSlide}
              />
            </div>
          ))}
        </div>
      </div>
      
      <SliderNavigation
        onPrevious={handlePrevious}
        onNext={handleNext}
        currentSlide={currentSlide}
        totalSlides={features.length}
      />
    </div>
  );
}