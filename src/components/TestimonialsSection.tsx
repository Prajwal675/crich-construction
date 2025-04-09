
import React, { useState } from 'react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    quote: "BuildAcre transformed our house into the dream home we always wanted. Their attention to detail and quality workmanship exceeded our expectations. The team was professional, reliable, and a pleasure to work with throughout the project.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    quote: "We hired BuildAcre for our office renovation, and they delivered exceptional results on time and within budget. Their team understood our vision and brought it to life perfectly. The workspace has transformed our company culture.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote: "As someone who works in the industry, I have high standards for construction work. BuildAcre met and exceeded those standards with their professionalism, expertise, and attention to detail. They're my go-to recommendation now.",
    rating: 4
  },
  {
    name: "David Thompson",
    role: "Real Estate Developer",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    quote: "I've worked with many construction companies over the years, and BuildAcre stands out for their reliability and quality. Their team communicates effectively, resolves issues promptly, and consistently delivers excellent results.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from the clients who've experienced the BuildAcre difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card h-full flex flex-col">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-buildacre-orange' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-muted-foreground flex-grow">
                {expandedIndex === index 
                  ? testimonial.quote 
                  : `${testimonial.quote.substring(0, 150)}...`}
              </p>
              
              <button 
                onClick={() => toggleExpanded(index)}
                className="mt-4 text-buildacre-blue font-medium hover:underline self-start"
              >
                {expandedIndex === index ? 'Read less' : 'Read more'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
