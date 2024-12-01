import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Pricing from '../components/sections/Pricing';
import SocialProof from '../components/sections/SocialProof';
import Footer from '../components/layout/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default Home;