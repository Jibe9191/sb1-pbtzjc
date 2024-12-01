import React from 'react';
import Button from '../../ui/Button';

export default function VehicleTrackingHero() {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Advanced Vehicle Tracking{' '}
          <span className="relative whitespace-nowrap text-blue-600">
            <span className="relative">Made Simple</span>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          Track your vehicles in real-time, optimize routes, and improve fleet efficiency with our advanced GPS tracking solution.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <Button variant="primary" size="lg">Request Live Demo</Button>
          <Button variant="outline" size="lg">View Pricing</Button>
        </div>
        <div className="mt-16 lg:mt-24">
          <img
            className="mx-auto w-[70%] rounded-lg shadow-xl"
            src="https://images.unsplash.com/photo-1621600411688-4be93cd68504?auto=format&fit=crop&q=80&w=2000"
            alt="Vehicle Tracking Dashboard"
          />
        </div>
      </div>
    </div>
  );
}