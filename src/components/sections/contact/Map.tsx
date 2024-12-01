import React from 'react';

export default function ContactMap() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000"
            alt="Office Location Map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}