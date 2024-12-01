import React from 'react';

const clients = [
  { name: 'Company 1', logo: 'https://images.unsplash.com/photo-1603366445787-09714680cbf1?auto=format&fit=crop&q=80&w=200' },
  { name: 'Company 2', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200' },
  { name: 'Company 3', logo: 'https://images.unsplash.com/photo-1599305446868-59e861c36faa?auto=format&fit=crop&q=80&w=200' },
  { name: 'Company 4', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200' },
];

export default function SocialProof() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-lg font-medium text-gray-600 mb-8">
          Trusted by leading companies worldwide
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex justify-center items-center grayscale hover:grayscale-0 transition-all"
            >
              <img
                className="h-12 object-contain"
                src={client.logo}
                alt={client.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}