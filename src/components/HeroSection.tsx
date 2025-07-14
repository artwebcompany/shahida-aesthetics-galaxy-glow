
import React, { useEffect, useState } from 'react';
import { Play, Star, Users, Award, Calendar } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, number: '69,000+', label: 'Satisfied Patients' },
    { icon: Award, number: '236+', label: 'Professional Doctors' },
    { icon: Calendar, number: '19,000+', label: 'Successful Procedures' },
    { icon: Star, number: '320+', label: 'National Awards' }
  ];

  return (
    <section id="home" className="relative min-h-screen galaxy-bg bg-galaxy-gradient overflow-hidden">
      <div className="galaxy-overlay relative z-10">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-twinkle"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-emerald-300 rounded-full animate-twinkle" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-twinkle" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-emerald-200 rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/3 right-10 w-1 h-1 bg-white rounded-full animate-twinkle" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`} data-aos="fade-right">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight font-primary">
                  Your{' '}
                  <span className="gradient-text highlight-curved">Aesthetic</span>
                  <br />
                  Genius
                </h1>
                <p className="text-xl text-emerald-100 leading-relaxed max-w-lg font-secondary">
                  Advanced hair transplant and aesthetic treatments in Dubai. Where medical expertise meets artistic precision for natural, beautiful results.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="gradient-button text-white px-8 py-4 rounded-lg font-semibold font-secondary transition-all duration-300">
                  Book Consultation
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 font-secondary">
                  View Services
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`text-center gradient-card-dark p-4 rounded-xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white font-primary">{stat.number}</div>
                    <div className="text-sm text-emerald-200 font-secondary">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} data-aos="fade-left">
              <div className="relative gradient-card-dark rounded-3xl p-8 border border-emerald-400/20">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop"
                  alt="Dr. Shahid Clinic"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent rounded-3xl"></div>
              </div>

              <div className="absolute -top-6 -right-6 gradient-button p-4 rounded-full animate-float">
                <Star className="w-8 h-8 text-white" />
              </div>

              <div className="absolute -bottom-6 -left-6 gradient-button p-4 rounded-full animate-float" style={{ animationDelay: '1s' }}>
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
