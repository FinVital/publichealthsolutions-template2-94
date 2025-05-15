
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-secondary-softBlue to-white py-20 md:py-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-blue font-heading leading-tight">
              Quality Healthcare for All New Yorkers
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0">
              Public Health Solutions provides essential health services and support for families and communities in New York, with a focus on underserved populations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="text-lg px-8 py-6 bg-primary-blue hover:bg-primary-blue/90 shadow-lg"
                asChild
              >
                <Link to="/services">
                  Find Help
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-6 border-primary-blue text-primary-blue hover:bg-primary-blue/10"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-softPurple rounded-full opacity-50 animate-float delay-300"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-softGreen rounded-full opacity-50 animate-float"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
              alt="Healthcare professional helping a patient" 
              className="rounded-xl shadow-xl object-cover w-full h-[500px] relative z-10"
            />
          </div>
        </div>
      </div>
      
      {/* Statistics */}
      <div className="container-custom mt-16 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-primary-blue mb-2">60+</h3>
            <p className="text-gray-600">Years Serving New York</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-primary-teal mb-2">200K+</h3>
            <p className="text-gray-600">New Yorkers Served Annually</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-primary-green mb-2">40+</h3>
            <p className="text-gray-600">Community Programs</p>
          </div>
        </div>
      </div>

      {/* Additional Image Gallery */}
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80" 
              alt="Mother and child receiving healthcare" 
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80" 
              alt="Healthcare professional with patient" 
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80" 
              alt="Community health outreach" 
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
