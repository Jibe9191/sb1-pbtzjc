import React from 'react';
import { MapPin, BarChart2, Bell, Clock, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Real-time GPS Tracking & Route Optimization',
    description: 'Track your entire fleet in real-time and optimize routes for maximum efficiency and fuel savings.'
  },
  {
    icon: BarChart2,
    title: 'Advanced Analytics & Custom Reports',
    description: 'Make data-driven decisions with comprehensive analytics and customizable reporting tools.'
  },
  {
    icon: Bell,
    title: 'Predictive Maintenance & Alert System',
    description: 'Stay ahead of vehicle maintenance and receive instant alerts for critical events.'
  },
  {
    icon: Clock,
    title: 'Driver Behavior Monitoring',
    description: 'Monitor driving patterns, reduce risks, and promote safer driving habits across your fleet.'
  },
  {
    icon: Shield,
    title: 'Enhanced Security Features',
    description: 'Protect your fleet with advanced security features including geofencing and unauthorized use detection.'
  },
  {
    icon: Zap,
    title: 'Fuel Management System',
    description: 'Track fuel consumption, identify inefficiencies, and reduce operational costs with smart fuel monitoring.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything you need to manage your fleet
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Powerful features designed to help you track, analyze, and optimize your fleet operations.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="relative p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
                <a href="#" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700">
                  Learn more
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}