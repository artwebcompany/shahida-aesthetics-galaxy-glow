
import React, { useEffect, useState } from 'react';
import { CheckCircle, Heart, Users, Microscope } from 'lucide-react';

const AboutSection = () => {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Heart,
      title: 'Hair Transplant Excellence',
      description: 'Advanced FUE techniques for natural-looking results'
    },
    {
      icon: Microscope,
      title: 'Latest Technology',
      description: 'State-of-the-art equipment and innovative procedures'
    },
    {
      icon: Users,
      title: 'Personalized Care',
      description: 'Each treatment tailored to individual needs and goals'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-emerald-50 to-sage-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-emerald-900 leading-tight">
                About{' '}
                <span className="gradient-text">Dr. Shahid</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Dr. Shahid Clinic, we specialize in artistic hair restoration and advanced aesthetic treatments designed to bring out the best version of yourself. With a combination of medical expertise and artistic touch, every procedure is performed with precision and personalization.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex items-start space-x-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-3 rounded-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-emerald-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-6 rounded-xl text-white">
              <p className="text-lg font-medium mb-2">Our Philosophy</p>
              <p className="opacity-90">
                "We believe that hair transplant and aesthetic treatments are art, not just science."
              </p>
            </div>
          </div>

          <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200">
                  <img
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
                    alt="Modern clinic interior"
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                  <h4 className="font-semibold text-emerald-900 mb-2">Modern Facility</h4>
                  <p className="text-sm text-gray-600">State-of-the-art clinic in Dubai</p>
                </div>

                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-xl mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-emerald-900 mb-2">Certified Excellence</h4>
                  <p className="text-sm text-gray-600">International certifications and standards</p>
                </div>
              </div>

              <div className="space-y-6 mt-12">
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
                    alt="Professional team"
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                  <h4 className="font-semibold text-emerald-900 mb-2">Expert Team</h4>
                  <p className="text-sm text-gray-600">Experienced professionals dedicated to your care</p>
                </div>

                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-700 mb-2">10+</div>
                    <p className="text-sm text-gray-600">Years of Excellence in Aesthetic Medicine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
