
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import DonationSection from '../components/DonationSection';
import BackgroundAnimation from '../components/BackgroundAnimation';

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <BackgroundAnimation />
      <Header />
      <main className="flex-grow relative z-10">
        <section className="bg-secondary-softBlue py-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-blue font-heading mb-6">Support Our Mission</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Your donation helps us provide essential health services to thousands of underserved New Yorkers.
            </p>
          </div>
        </section>
        
        <DonationSection />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Donate;
