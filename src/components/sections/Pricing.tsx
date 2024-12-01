import React from 'react';
import Button from '../ui/Button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 49,
    description: 'Perfect for small fleets',
    features: [
      'Up to 10 vehicles',
      'Real-time GPS tracking',
      'Basic reporting',
      'Email support',
      'Mobile app access'
    ]
  },
  {
    name: 'Professional',
    price: 99,
    description: 'Ideal for growing businesses',
    features: [
      'Up to 50 vehicles',
      'Advanced analytics',
      'Route optimization',
      'Priority support',
      'API access'
    ],
    recommended: true
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For large scale operations',
    features: [
      'Unlimited vehicles',
      'Custom integrations',
      'Dedicated account manager',
      '24/7 phone support',
      'Custom reporting'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan for your fleet size and needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 bg-white rounded-2xl shadow-sm border ${
                plan.recommended ? 'border-blue-600 ring-2 ring-blue-600' : 'border-gray-200'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                    Recommended
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-gray-600">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </p>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  variant={plan.recommended ? 'primary' : 'outline'}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}