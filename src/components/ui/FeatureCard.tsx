import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  isActive: boolean;
}

export default function FeatureCard({ title, description, imageSrc, isActive }: FeatureCardProps) {
  return (
    <div 
      className={`flex-shrink-0 w-full transition-all duration-500 px-4
        ${isActive ? 'opacity-100' : 'opacity-50'}`}
    >
      <div className="bg-white rounded-2xl p-8 h-full flex flex-col">
        <div className="flex-1 mb-6">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-48 object-contain"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}