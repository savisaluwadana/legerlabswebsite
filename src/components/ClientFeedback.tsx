import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

const ClientFeedback: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // This would typically come from a CMS or API
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Solutions",
      quote: "Ledgerlabs transformed our financial operations completely. Their data analytics helped us identify cost savings of over 30% and streamline our bookkeeping processes. Best investment we ever made!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b2c4?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CFO",
      company: "GrowthTech Inc",
      quote: "The level of insight we get from their custom dashboards is incredible. We can now make data-driven decisions that have accelerated our growth by 45%. Pranesh and Thomas are absolute professionals!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Operations Director",
      company: "InnovateCorp",
      quote: "Professional, reliable, and incredibly knowledgeable. Ledgerlabs has been instrumental in our company's financial success and compliance management. They make complex financial data so easy to understand!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Founder",
      company: "EcoSolutions Ltd",
      quote: "Their tax compliance expertise saved us thousands in potential penalties. The peace of mind knowing our finances are in expert hands is invaluable. Highly recommend their services!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Managing Director",
      company: "Future Finance",
      quote: "The business consulting services provided by Ledgerlabs helped us restructure our operations and achieve 25% revenue growth in just 8 months. Their insights are game-changing!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "CEO",
      company: "MetricWorks",
      quote: "Outstanding service quality and attention to detail. Their financial planning strategies have positioned us perfectly for our upcoming expansion. They truly understand business!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "Priya Sharma",
      role: "Finance Manager",
      company: "Digital Dynamics",
      quote: "Working with Ledgerlabs has been a breath of fresh air. They automated our entire bookkeeping process and now we save 15 hours per week on financial admin. Incredible value!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1559254022-b03db5f5e38d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 8,
      name: "Robert Martinez",
      role: "Business Owner",
      company: "Coastal Enterprises",
      quote: "From day one, Pranesh and his team showed genuine care for our business success. Their strategic advice helped us navigate a difficult financial period and come out stronger than ever.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 9,
      name: "Amanda Foster",
      role: "Startup Founder",
      company: "NextGen Apps",
      quote: "As a startup, every dollar counts. Ledgerlabs helped us optimize our financial structure and secure funding 40% faster than expected. They're not just accountants, they're strategic partners!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-blue)] mb-6">
            Success Stories From Our <span className="accent">Valued Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real businesses, real results. Discover how Ledgerlabs has helped companies like yours achieve financial excellence and sustainable growth.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 mx-4">
            <div className="flex items-center mb-4">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold text-[var(--primary-blue)]">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-service-meta">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
            
            <div className="flex mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <p className="text-gray-700 italic leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </p>
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-[var(--primary-blue)]" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-[var(--primary-blue)]" />
          </button>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-[var(--primary-blue)] text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-service-meta">
                    {testimonial.role}
                  </p>
                  <p className="text-service-meta font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {testimonials.length > 6 && !showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="btn-primary"
            >
              Discover More Success Stories
            </button>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-[var(--primary-blue)] mb-2">50+</div>
            <div className="text-service-meta">Happy Clients</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-[var(--accent-red)] mb-2">98%</div>
            <div className="text-service-meta">Client Satisfaction</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-[var(--primary-blue)] mb-2">5+</div>
            <div className="text-service-meta">Years Experience</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-[var(--accent-red)] mb-2">24/7</div>
            <div className="text-service-meta">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
