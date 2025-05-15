
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { ArrowRight, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

const resources = [
  {
    id: 1,
    title: "WIC Program Eligibility",
    description: "Information about who qualifies for the Women, Infants and Children nutrition program.",
    category: "Nutrition",
    link: "#"
  },
  {
    id: 2,
    title: "Finding Health Insurance",
    description: "Guide to health insurance options for individuals and families in New York.",
    category: "Healthcare Access",
    link: "#"
  },
  {
    id: 3,
    title: "Pregnancy Resources",
    description: "Support services available for pregnant women and new mothers.",
    category: "Maternal Health",
    link: "#"
  },
  {
    id: 4,
    title: "HIV Testing Locations",
    description: "Free and confidential HIV testing sites throughout New York City.",
    category: "HIV Prevention",
    link: "#"
  },
  {
    id: 5,
    title: "Mental Health Services",
    description: "Resources for mental health support and counseling services.",
    category: "Mental Health",
    link: "#"
  },
  {
    id: 6,
    title: "Food Assistance Programs",
    description: "Information about food pantries, SNAP benefits, and other nutrition support.",
    category: "Nutrition",
    link: "#"
  }
];

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-secondary-softBlue py-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-blue font-heading mb-6">Health Resources</h1>
            <p className="text-xl text-gray-700 max-w-3xl mb-8">
              Access guides, tools, and information to support your health and wellbeing.
            </p>
            
            <div className="flex items-center max-w-lg">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input 
                  placeholder="Search resources..." 
                  className="pl-10"
                />
              </div>
              <Button className="ml-4 bg-primary-blue hover:bg-primary-blue/90">
                Search
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <Card key={resource.id} className="border border-gray-100 hover:shadow-md transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary-softBlue text-primary-blue rounded-full">
                        {resource.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{resource.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-primary-blue p-0 hover:bg-transparent hover:text-primary-blue/80">
                      View Resource <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button className="bg-primary-blue hover:bg-primary-blue/90">
                Load More Resources
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Resources;
