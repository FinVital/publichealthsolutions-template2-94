
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import DonationSection from '../components/DonationSection';
import ChatAssistant from '../components/ChatAssistant';
import BackgroundAnimation from '../components/BackgroundAnimation';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <BackgroundAnimation />
      <Header />
      <main className="flex-grow relative z-10">
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
