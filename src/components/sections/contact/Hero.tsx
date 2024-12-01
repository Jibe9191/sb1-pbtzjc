import React from 'react';

export default function ContactHero() {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Get in Touch{' '}
          <span className="relative whitespace-nowrap text-blue-600">
            <span className="relative">With Us</span>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          Have questions about our fleet management solutions? Our team is here to help you optimize your operations.
        </p>
      </div>
    </div>
  );
}