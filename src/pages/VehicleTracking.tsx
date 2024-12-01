import React from 'react';
import Navbar from '../components/layout/Navbar';
import VehicleTrackingHero from '../components/sections/vehicle-tracking/Hero';
import VehicleTrackingFeatures from '../components/sections/vehicle-tracking/Features';
import VehicleTrackingBenefits from '../components/sections/vehicle-tracking/Benefits';
import VehicleTrackingDemo from '../components/sections/vehicle-tracking/Demo';
import Footer from '../components/layout/Footer';

export default function VehicleTracking() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <VehicleTrackingHero />
        <VehicleTrackingFeatures />
        <VehicleTrackingBenefits />
        <VehicleTrackingDemo />
      </main>
      <Footer />
    </div>
  );
}