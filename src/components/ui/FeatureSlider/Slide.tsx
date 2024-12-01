import React from 'react';

interface SlideProps {
  title: string;
  imageSrc: string;
  isActive: boolean;
}

export default function Slide({ title, imageSrc, isActive }: SlideProps) {
  return (
    <div 
      className={`w-full h-full transition-all duration-500
        ${isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}
    >
      <div className="bg-white rounded-2xl p-8 shadow-lg mx-4 h-[400px] flex flex-col items-center justify-between">
        <div className="w-full h-64 relative mb-6">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-lg text-gray-800 text-center font-medium max-w-sm">
          {title}
        </p>
      </div>
    </div>
  );
}