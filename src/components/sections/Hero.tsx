import React from 'react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Optimize Your Fleet,{' '}
          <span className="relative whitespace-nowrap text-blue-600">
            <span className="relative">Maximize Savings</span>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          Real-time GPS tracking for your entire fleet. Gain complete visibility, reduce costs, and improve efficiency with our advanced fleet management solution.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <Button variant="primary" size="lg">Start Free Trial</Button>
          <Button variant="outline" size="lg">Book Demo</Button>
        </div>
        <div className="mt-16 lg:mt-24">
          <img
            className="mx-auto w-[70%] rounded-lg"
            src="https://dynamix.telimatix.com/files/FleetTrack%20.png"
            alt="Telimatix Dashboard Interface"
          />
        </div>
      </div>
    </div>
  );
}