
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-secondary-softBlue py-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-blue font-heading mb-6">About Us</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Public Health Solutions is dedicated to improving the health of families and communities in New York.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-primary-blue mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  For over 60 years, Public Health Solutions has been a leader in addressing public health challenges and developing pioneering solutions. As New York's largest public health nonprofit, we improve health outcomes and help families thrive by providing services directly to vulnerable communities.
                </p>
                <p className="text-gray-700">
                  We implement and manage health programs that benefit thousands of New Yorkers, and we support more than 200 community-based organizations working to create healthier communities.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" 
                  alt="Public Health Solutions team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Team images */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary-blue mb-8 text-center">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
                    alt="Healthcare professional"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Dr. Sarah Johnson</h3>
                    <p className="text-gray-600">Chief Medical Director</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                    alt="Program director"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Michael Torres</h3>
                    <p className="text-gray-600">Community Programs Director</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                    alt="Healthcare administrator"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Amara Williams</h3>
                    <p className="text-gray-600">Chief Operating Officer</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80"
                    alt="Nutritional specialist"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Leila Chen</h3>
                    <p className="text-gray-600">Nutritional Programs Lead</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 lg:col-span-1">
                <h2 className="text-2xl font-bold text-primary-blue mb-4">Our Values</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-primary-blue/10 text-primary-blue p-2 rounded-full mr-3">✓</span>
                    <div>
                      <h3 className="font-bold">Equity</h3>
                      <p className="text-gray-600">We believe all New Yorkers deserve equal access to quality healthcare.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-blue/10 text-primary-blue p-2 rounded-full mr-3">✓</span>
                    <div>
                      <h3 className="font-bold">Innovation</h3>
                      <p className="text-gray-600">We develop creative solutions to complex health problems.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-blue/10 text-primary-blue p-2 rounded-full mr-3">✓</span>
                    <div>
                      <h3 className="font-bold">Compassion</h3>
                      <p className="text-gray-600">We serve with empathy and understanding for every individual.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 lg:col-span-2">
                <h2 className="text-2xl font-bold text-primary-blue mb-4">Our Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      Our programs directly impact thousands of families throughout New York City's five boroughs. We focus on areas with the greatest health disparities and work to provide accessible solutions.
                    </p>
                    <img
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
                      alt="Community outreach program"
                      className="w-full h-48 rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80"
                      alt="Healthcare consultation"
                      className="w-full h-48 rounded-lg object-cover mb-4"
                    />
                    <p className="text-gray-700">
                      Through partnerships with over 200 community organizations, we've expanded our reach and created sustainable health improvements across diverse neighborhoods.
                    </p>
                  </div>
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

export default About;
