
import React, { useEffect, useState } from 'react';
import { Scissors, Droplets, Syringe, Eye, Heart, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Droplets,
      title: 'Maxxi PRP & Biotin PRP',
      description: 'Advanced plasma therapy enriched with biotin for hair growth and skin rejuvenation',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
      features: ['Natural hair growth', 'Skin rejuvenation', 'Non-invasive', 'Proven results']
    },
    {
      icon: Scissors,
      title: 'Micro FUE Hair Transplant',
      description: 'Precision hair transplant technique with natural results and minimal invasion',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
      features: ['Natural hairline', 'Minimal scarring', 'Quick recovery', 'Lifetime results']
    },
    {
      icon: Syringe,
      title: 'Mesotherapy',
      description: 'Non-invasive treatment injecting vitamins, enzymes, and hormones into the skin',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop',
      features: ['Skin hydration', 'Anti-aging', 'Cellulite reduction', 'Hair loss treatment']
    },
    {
      icon: Heart,
      title: 'Micro Beard Transplant',
      description: 'Natural beard transplantation for desired shape and thickness',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
      features: ['Natural appearance', 'Custom design', 'Permanent solution', 'Expert technique']
    },
    {
      icon: Sparkles,
      title: 'Botox & Fillers',
      description: 'Professional botox and dermal filler treatments for smooth, youthful skin',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop',
      features: ['Wrinkle reduction', 'Volume restoration', 'Natural look', 'Quick procedure']
    },
    {
      icon: Eye,
      title: 'Eyebrow Transplant',
      description: 'Eyebrow transplantation for full and symmetrical eyebrow appearance',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop',
      features: ['Perfect symmetry', 'Natural growth', 'Customized shape', 'Permanent results']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Patient Registration',
      description: 'Welcome and registration to ensure a good initial experience'
    },
    {
      step: '02',
      title: 'Initial Examination',
      description: 'Comprehensive evaluation by professional medical staff'
    },
    {
      step: '03',
      title: 'Report & Diagnosis',
      description: 'Test results analyzed for appropriate treatment'
    },
    {
      step: '04',
      title: 'Ongoing Care',
      description: 'We maintain continuity of care after the initial visit'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-emerald-50 to-sage-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-6">
            Our{' '}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive aesthetic treatments combining medical expertise with artistic precision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-emerald-100 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-600 to-emerald-500 p-3 rounded-full">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={`bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-3xl p-8 md:p-12 text-white ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Treatment Process</h3>
            <p className="text-emerald-100 text-lg">Step by step journey to your transformation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className={`text-center ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white/20 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.step}
                </div>
                <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                <p className="text-emerald-100">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Why Choose Us?</h3>
            <p className="text-gray-700 text-lg mb-6">
              Dr. Shahid combines medical expertise with a unique aesthetic approach. We don't just improve your appearance, we create art from every procedure.
            </p>
            <blockquote className="text-xl italic text-emerald-700 font-medium">
              "We believe that hair transplant and aesthetic treatments are art, not just science."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
