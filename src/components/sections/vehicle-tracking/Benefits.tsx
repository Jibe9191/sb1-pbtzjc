import React from 'react';
import { TrendingUp, Clock, Shield, Fuel } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increased Productivity',
    description: 'Optimize routes and reduce idle time to maximize fleet efficiency.'
  },
  {
    icon: Clock,
    title: 'Time Management',
    description: 'Improve scheduling and reduce overtime costs with accurate tracking.'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Prevent unauthorized use and protect your vehicles 24/7.'
  },
  {
    icon: Fuel,
    title: 'Reduced Costs',
    description: 'Save on fuel and maintenance through better fleet management.'
  }
];

export default function VehicleTrackingBenefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Our Vehicle Tracking Solution?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover how our tracking system can transform your fleet operations
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="text-center p-6"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-blue-600/10 flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}