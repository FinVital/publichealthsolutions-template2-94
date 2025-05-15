
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import { Button } from "@/components/ui/button";
import PhoneAssistant from '../components/PhoneAssistant';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-secondary-softBlue py-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-blue font-heading mb-6">Our Services</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Public Health Solutions offers a wide range of health services and programs to support individuals and families throughout New York City.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold text-primary-blue mb-4">Need Help?</h2>
                <p className="text-gray-700 mb-6">
                  Our team is available to assist you in finding the right services and programs for your needs.
                </p>
                <div className="flex flex-col space-y-3">
                  <PhoneAssistant />
                  <Button className="bg-primary-blue hover:bg-primary-blue/90">
                    Schedule Appointment
                  </Button>
                </div>
              </div>
              
              {/* Placeholder for actual service content */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 col-span-1 md:col-span-2 lg:col-span-2">
                <h2 className="text-2xl font-bold text-primary-blue mb-4">Services Directory</h2>
                <p className="text-gray-700 mb-6">
                  This page would contain detailed information about all services and programs offered by Public Health Solutions. The content would be organized by category and would include eligibility requirements, application processes, and contact information.
                </p>
                <p className="text-gray-500 italic">
                  Note: This is a placeholder. In a complete implementation, this section would contain detailed service information.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Services;
