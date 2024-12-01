import React from 'react';
import Button from '../../ui/Button';

export default function VehicleTrackingDemo() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Transform Your Fleet Management?
        </h2>
        <p className="mt-4 text-xl text-blue-100">
          Schedule a personalized demo and see our vehicle tracking solution in action
        </p>
        <div className="mt-10">
          <Button variant="secondary" size="lg">
            Request Demo
          </Button>
        </div>
      </div>
    </section>
  );
}