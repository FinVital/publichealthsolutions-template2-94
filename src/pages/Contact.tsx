
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PhoneAssistant from '../components/PhoneAssistant';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-secondary-softBlue py-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-blue font-heading mb-6">Contact Us</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              We're here to help. Reach out with questions, feedback, or to learn more about our services.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-primary-blue mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                      <Input id="firstName" placeholder="First Name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                      <Input id="lastName" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                    <Input id="phone" placeholder="(123) 456-7890" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" placeholder="How can we help you?" rows={5} />
                  </div>
                  <Button className="w-full bg-primary-blue hover:bg-primary-blue/90">Send Message</Button>
                </form>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-primary-blue mb-6">Contact Information</h2>
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-primary-blue mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Main Office</h3>
                        <p className="text-gray-600">
                          40 Worth Street, 5th Floor<br />
                          New York, NY 10013
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-primary-green mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600">(646) 619-6400</p>
                        <p className="text-gray-500 text-sm mt-1">Monday - Friday, 9am - 5pm</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-primary-teal mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">info@healthsolutions.org</p>
                        <p className="text-gray-500 text-sm mt-1">We aim to respond within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-primary-blue mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 5:00 PM<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary-softGreen/30 rounded-lg p-6 border border-secondary-softGreen/20">
                  <h3 className="text-xl font-medium text-primary-blue mb-4">Need immediate assistance?</h3>
                  <p className="text-gray-700 mb-6">
                    Our phone assistant is available to help connect you with the right resources.
                  </p>
                  <PhoneAssistant />
                </div>
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

export default Contact;
