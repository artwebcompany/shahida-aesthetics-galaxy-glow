
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfterCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const beforeAfterImages = [
    {
      before: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop',
      title: 'Hair Transplant Results',
      description: 'Complete hair restoration with natural hairline design. Patient achieved 4,500 grafts with FUE technique.',
      duration: '6 months post-procedure'
    },
    {
      before: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=400&fit=crop',
      title: 'Beard Transplant Excellence',
      description: 'Fuller, denser beard achieved through precision grafting. 2,000 grafts strategically placed for natural growth pattern.',
      duration: '4 months recovery'
    },
    {
      before: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=500&h=400&fit=crop',
      title: 'Eyebrow Enhancement',
      description: 'Artistic eyebrow reconstruction with micro-grafting technique. Perfect symmetry and natural arch creation.',
      duration: '3 months healing'
    },
    {
      before: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=400&fit=crop',
      title: 'Hairline Restoration',
      description: 'Receding hairline completely restored with advanced FUE technique. Natural density and perfect frontal coverage.',
      duration: '8 months results'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, beforeAfterImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-sage-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-6 font-primary">
            Before & After{' '}
            <span className="gradient-text highlight-curved">Transformations</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-secondary">
            Witness the remarkable transformations of our satisfied patients
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="gradient-card rounded-3xl overflow-hidden shadow-2xl border border-emerald-100">
            <div className="relative h-96 md:h-[500px]">
              {beforeAfterImages.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    <div className="relative h-full">
                      <img src={item.before} alt="Before" className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        BEFORE
                      </div>
                    </div>
                    <div className="relative h-full">
                      <img src={item.after} alt="After" className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        AFTER
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-900/90 to-transparent p-8">
                    <div className="text-white">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 font-primary">{item.title}</h3>
                      <p className="text-emerald-100 text-base md:text-lg mb-2 font-secondary">{item.description}</p>
                      <span className="inline-block bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-emerald-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-emerald-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {beforeAfterImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-emerald-600 scale-125' 
                    : 'bg-emerald-300 hover:bg-emerald-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterCarousel;
