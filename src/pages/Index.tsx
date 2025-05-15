
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import DonationSection from '../components/DonationSection';
import ChatAssistant from '../components/ChatAssistant';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <TestimonialsSection />
        <DonationSection />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Index;
