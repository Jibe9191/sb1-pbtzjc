import React from 'react';
import Navbar from '../components/layout/Navbar';
import ContactHero from '../components/sections/contact/Hero';
import ContactForm from '../components/sections/contact/ContactForm';
import ContactMap from '../components/sections/contact/Map';
import Footer from '../components/layout/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactMap />
      </main>
      <Footer />
    </div>
  );
}