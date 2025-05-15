
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Public Health Solutions helped me access healthcare for my children when I didn't know where to turn. Their staff was compassionate and guided me through every step.",
    name: "Maria R.",
    role: "Parent, Bronx",
    avatar: "/placeholder.svg",
    initials: "MR"
  },
  {
    id: 2,
    quote: "The nutrition program changed my family's life. Not only did we get access to healthy food, but we learned how to prepare nutritious meals on a budget.",
    name: "James T.",
    role: "Program Participant, Brooklyn",
    avatar: "/placeholder.svg",
    initials: "JT"
  },
  {
    id: 3,
    quote: "As someone who recently moved to New York, I was lost navigating the healthcare system. The phone assistant connected me with resources I didn't know existed.",
    name: "Sophia K.",
    role: "Healthcare Access Program",
    avatar: "/placeholder.svg",
    initials: "SK"
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
