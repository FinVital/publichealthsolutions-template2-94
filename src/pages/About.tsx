
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
            
            {/* Placeholder for actual about content */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold text-primary-blue mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                This page would contain detailed information about the organization, including its history, leadership team, achievements, and vision for the future. It would also include information about partnerships and funders.
              </p>
              <p className="text-gray-500 italic">
                Note: This is a placeholder. In a complete implementation, this section would contain the organization's full story.
              </p>
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
