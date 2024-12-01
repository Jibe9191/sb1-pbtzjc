import React from 'react';
import FeatureCarousel from '../../ui/FeatureCarousel';

const features = [
  {
    title: 'Real-Time Route Optimization',
    description: 'Optimize delivery routes in real-time based on traffic conditions, vehicle capacity, and customer preferences to improve efficiency and reduce fuel costs.',
    imageSrc: 'https://dynamix.telimatix.com/files/fleet-tracking-1.svg'
  },
  {
    title: 'Driver Safety Monitoring',
    description: 'Monitor driving patterns and behaviors to identify risks, reduce accidents, and promote safer driving practices across your fleet.',
    imageSrc: 'https://dynamix.telimatix.com/files/fleet-tracking-2.svg'
  },
  {
    title: 'Fleet Utilization Analytics',
    description: 'Track vehicle usage patterns to optimize fleet size, prevent underutilization, and maximize return on investment.',
    imageSrc: 'https://dynamix.telimatix.com/files/fleet-tracking-3.svg'
  },
  {
    title: 'Fuel Management System',
    description: 'Monitor fuel consumption, detect theft, and identify inefficient driving patterns to reduce operational costs.',
    imageSrc: 'https://dynamix.telimatix.com/files/fleet-tracking-4.svg'
  },
  {
    title: 'Predictive Maintenance',
    description: 'Schedule maintenance based on real-time vehicle data to prevent breakdowns and extend vehicle lifespan.',
    imageSrc: 'https://dynamix.telimatix.com/files/fleet-tracking-5.svg'
  },
  {
    title: 'Performance Analytics',
    description: 'Generate comprehensive reports on fleet performance, costs, and efficiency metrics for data-driven decision making.',
    imageSrc: 'https://dynamix.telimatix.com/files/fleet-tracking-6.svg'
  }
];

export default function VehicleTrackingFeatures() {
  return (
    <section className="py-20 bg-[#0A0A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          WITH GPS FLEET TRACKING DATA, YOU CAN:
        </h1>
        <div className="mt-8">
          <FeatureCarousel features={features} />
        </div>
      </div>
    </section>
  );
}