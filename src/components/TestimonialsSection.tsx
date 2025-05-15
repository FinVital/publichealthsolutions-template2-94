
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  initials: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Public Health Solutions helped me access healthcare for my children when I didn't know where to turn. Their staff was compassionate and guided me through every step.",
    name: "Maria R.",
    role: "Parent, Bronx",
    avatar: "/placeholder.svg",
    initials: "MR",
    image: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    quote: "The nutrition program changed my family's life. Not only did we get access to healthy food, but we learned how to prepare nutritious meals on a budget.",
    name: "James T.",
    role: "Program Participant, Brooklyn",
    avatar: "/placeholder.svg",
    initials: "JT",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    quote: "As someone who recently moved to New York, I was lost navigating the healthcare system. The phone assistant connected me with resources I didn't know existed.",
    name: "Sophia K.",
    role: "Healthcare Access Program",
    avatar: "/placeholder.svg",
    initials: "SK",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-secondary-softGreen/30 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Community Voices</h2>
          <p className="section-subtitle">
            Hear from the individuals and families who have been impacted by our programs and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border border-gray-100 hover:shadow-lg transition-shadow relative overflow-hidden">
              <span className="absolute text-[120px] -top-14 -left-10 opacity-10 text-primary-blue">"</span>
              <CardContent className="pt-8 px-6 pb-6 relative z-10">
                <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name}'s story`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary-blue/10 text-primary-blue">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Photo Carousel */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-primary-blue text-center mb-8">Our Community Impact</h3>
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                      alt="Healthcare workshop" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4 bg-white">
                      <h4 className="font-medium">Healthcare Education Workshop</h4>
                      <p className="text-sm text-gray-500">Harlem Community Center</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80" 
                      alt="Family nutritional counseling" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4 bg-white">
                      <h4 className="font-medium">Family Nutrition Program</h4>
                      <p className="text-sm text-gray-500">Brooklyn Community Hub</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80" 
                      alt="Health screening event" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4 bg-white">
                      <h4 className="font-medium">Health Screening Day</h4>
                      <p className="text-sm text-gray-500">Queens Medical Outreach</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1551601651-bc60f254d532?auto=format&fit=crop&q=80" 
                      alt="Maternal care program" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4 bg-white">
                      <h4 className="font-medium">Maternal Care Program</h4>
                      <p className="text-sm text-gray-500">Bronx Family Center</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2 lg:-left-12" />
            <CarouselNext className="right-2 lg:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
