
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const DonationSection = () => {
  const donationAmounts = [25, 50, 100, 250, 500];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-secondary-softBlue/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue font-heading mb-6">
              Help Us Make a Difference
            </h2>
            <p className="text-gray-700 mb-6">
              Your support helps us provide essential health services to thousands of underserved New Yorkers. Together, we can make quality healthcare accessible to everyone in our community.
            </p>
            <p className="text-gray-700 mb-8">
              Donations directly fund our programs for maternal health, nutrition assistance, HIV prevention, and healthcare access. Every dollar makes a difference in someone's life.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="bg-primary-blue/10 p-3 rounded-full mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-blue">
                    <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Tax Deductible</h4>
                  <p className="text-sm text-gray-500">All donations qualify</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-primary-green/10 p-3 rounded-full mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-green">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Transparent</h4>
                  <p className="text-sm text-gray-500">See your impact</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-primary-teal/10 p-3 rounded-full mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-teal">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Local Impact</h4>
                  <p className="text-sm text-gray-500">Serving New York</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-primary-blue/10 p-3 rounded-full mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-blue">
                    <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Community Focus</h4>
                  <p className="text-sm text-gray-500">For all New Yorkers</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-lg border-0">
            <CardHeader className="bg-primary-blue text-white rounded-t-lg">
              <CardTitle className="text-2xl">Make a Donation</CardTitle>
              <CardDescription className="text-white/80">
                Your gift makes quality healthcare accessible to all
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <p className="font-medium mb-3">Select an amount</p>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                    {donationAmounts.map(amount => (
                      <Button
                        key={amount}
                        variant="outline"
                        className="border-gray-300 hover:border-primary-blue hover:bg-primary-blue/5"
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-medium mb-3">Or enter a custom amount</p>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="text"
                      placeholder="Other amount"
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue"
                    />
                  </div>
                </div>

                <div>
                  <p className="font-medium mb-3">Donation type</p>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      className="flex-1 border-primary-blue bg-primary-blue/5"
                    >
                      One-time
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-gray-300 hover:border-primary-blue hover:bg-primary-blue/5"
                    >
                      Monthly
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col space-y-4">
              <Button className="w-full bg-primary-green hover:bg-primary-green/90 py-6">
                Donate Now
              </Button>
              <p className="text-xs text-center text-gray-500">
                Secure payment processing. Your information is protected.
              </p>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-primary-blue mb-10">Your Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-primary-blue text-4xl font-bold mb-2">
                5,000+
              </div>
              <p className="text-gray-700">
                Families receiving nutrition assistance every month
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-primary-green text-4xl font-bold mb-2">
                12,000+
              </div>
              <p className="text-gray-700">
                Children enrolled in health support programs annually
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-primary-teal text-4xl font-bold mb-2">
                20,000+
              </div>
              <p className="text-gray-700">
                Health insurance enrollments facilitated each year
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
