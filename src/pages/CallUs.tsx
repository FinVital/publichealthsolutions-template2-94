import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, Clock, Mail, MapPin, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import PhoneAssistant from '../components/PhoneAssistant';
import BackgroundAnimation from '../components/BackgroundAnimation';

const CallUs = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <BackgroundAnimation />
      <Header />
      <main className="flex-grow relative z-10 pt-8 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="section-title text-center mb-4">Contact Our Support Team</h1>
            <p className="text-center text-gray-600 mb-12">
              Get immediate assistance from our dedicated healthcare professionals.
            </p>
            
            {/* Main Contact Card */}
            <Card className="mb-8 shadow-lg border-primary-blue/10">
              <CardHeader className="bg-primary-blue text-white text-center rounded-t-lg">
                <CardTitle className="text-2xl flex justify-center items-center">
                  <Phone className="mr-2 h-6 w-6" />
                  Main Phone Line
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Available Monday to Friday, 9am - 5pm ET
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8 pb-6">
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-primary-blue mb-2">(646) 619-6400</p>
                  <p className="text-gray-500">General Inquiries and Support</p>
                </div>
                
                <div className="flex justify-center">
                  <PhoneAssistant />
                </div>
              </CardContent>
            </Card>
            
            {/* Other Contact Methods */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Clock className="mr-2 h-5 w-5 text-primary-teal" />
                    Hours of Operation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Users className="mr-2 h-5 w-5 text-primary-teal" />
                    Department Directory
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Client Services</span>
                      <span className="font-medium">Ext. 1001</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Healthcare Navigation</span>
                      <span className="font-medium">Ext. 2030</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Maternal Health</span>
                      <span className="font-medium">Ext. 3045</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Main Office</h3>
                      <address className="not-italic text-gray-600">
                        40 Worth Street, 5th Floor<br />
                        New York, NY 10013
                      </address>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Email Contact</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@healthsolutions.org" className="hover:underline">
                          info@healthsolutions.org
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center">
              <p className="text-gray-500 mb-4">
                For emergencies, please dial 911 or visit your nearest emergency room.
              </p>
              <Button asChild className="bg-primary-green hover:bg-primary-green/90">
                <a href="/contact">More Contact Options</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CallUs;
