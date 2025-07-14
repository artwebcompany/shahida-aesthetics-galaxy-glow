
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Alexa Milton",
      role: "Physiotherapist",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
      rating: 5,
      text: "Professional service and natural results. I highly recommend this clinic! The staff was incredibly knowledgeable and made me feel comfortable throughout the entire process."
    },
    {
      name: "Pelican Steve",
      role: "Neurologist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      rating: 5,
      text: "Very personal approach and satisfying results. Dr. Shahid's expertise is truly remarkable and the clinic maintains the highest standards of care."
    },
    {
      name: "Sarah Johnson",
      role: "Business Executive",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      rating: 5,
      text: "Amazing transformation! The hair transplant looks completely natural and the recovery was much faster than expected. Couldn't be happier with the results."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-sage-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-6 font-primary">
            Patient <span className="highlight-curved">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-secondary">
            Hear what our patients say about their transformation journey
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="gradient-card rounded-3xl p-8 md:p-12 text-center">
                    <Quote className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
                    
                    <p className="text-lg md:text-xl text-gray-700 mb-8 italic font-secondary leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-emerald-200"
                      />
                      <div className="text-left">
                        <h4 className="text-xl font-semibold text-emerald-900 font-primary">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 font-secondary">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 gradient-button p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 gradient-button p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-emerald-500 w-8' 
                    : 'bg-emerald-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
