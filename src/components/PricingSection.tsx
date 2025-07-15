
import React, { useState, useEffect } from 'react';
import { Check, Star, Crown, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const PricingSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 450);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const plans = [
    {
      name: 'Basic Package',
      price: 'AED 2,500',
      icon: Star,
      features: [
        'Initial Consultation',
        'Basic Hair Analysis',
        'Treatment Plan',
        'Follow-up Support',
        '3 Months Warranty'
      ],
      popular: false
    },
    {
      name: 'Premium Package',
      price: 'AED 4,500',
      icon: Crown,
      features: [
        'Comprehensive Consultation',
        'Advanced Hair Analysis',
        'Premium Treatment Plan',
        'PRP Therapy Included',
        'VIP Support',
        '6 Months Warranty'
      ],
      popular: true
    },
    {
      name: 'Luxury Package',
      price: 'AED 7,500',
      icon: Sparkles,
      features: [
        'Complete Aesthetic Makeover',
        'Full Hair Transplant',
        'Botox & Fillers',
        'Ongoing Maintenance',
        'Priority Support',
        '1 Year Warranty'
      ],
      popular: false
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % plans.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + plans.length) % plans.length);
  };

  return (
    <section className="py-20 galaxy-bg bg-cosmic-gradient relative overflow-hidden">
      <div className="galaxy-overlay relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-primary">
              Choose Your <span className="gradient-text highlight-curved">Package</span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto font-secondary">
              Tailored packages to meet your aesthetic needs and budget
            </p>
          </div>

          {isMobile ? (
            // Mobile Slider
            <div className="relative max-w-sm mx-auto">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {plans.map((plan, index) => (
                    <div
                      key={plan.name}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div
                        className={`gradient-card-dark rounded-3xl p-8 relative ${
                          plan.popular ? 'ring-2 ring-emerald-400' : ''
                        }`}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        {plan.popular && (
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 gradient-button px-6 py-2 rounded-full text-white font-semibold text-sm">
                            Most Popular
                          </div>
                        )}
                        
                        <div className="text-center mb-8">
                          <div className="gradient-button p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <plan.icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2 font-primary">{plan.name}</h3>
                          <div className="text-4xl font-bold text-emerald-400 font-primary">{plan.price}</div>
                        </div>

                        <ul className="space-y-4 mb-8">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-emerald-200 font-secondary">
                              <Check className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <button className="w-full gradient-button text-white py-3 rounded-lg font-semibold transition-all duration-300 font-secondary">
                          Choose Package
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 gradient-button p-2 rounded-full text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 gradient-button p-2 rounded-full text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {plans.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-emerald-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          ) : (
            // Desktop Grid
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`gradient-card-dark rounded-3xl p-8 relative ${
                    plan.popular ? 'ring-2 ring-emerald-400' : ''
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 gradient-button px-6 py-2 rounded-full text-white font-semibold text-sm">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="gradient-button p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-primary">{plan.name}</h3>
                    <div className="text-4xl font-bold text-emerald-400 font-primary">{plan.price}</div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-emerald-200 font-secondary">
                        <Check className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full gradient-button text-white py-3 rounded-lg font-semibold transition-all duration-300 font-secondary">
                    Choose Package
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
