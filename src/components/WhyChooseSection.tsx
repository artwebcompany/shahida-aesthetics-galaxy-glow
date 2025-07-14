
import React from 'react';
import { Shield, Award, Users, Heart, Star, Microscope } from 'lucide-react';

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Advanced safety protocols and sterile environment for all procedures'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: '320+ national awards and international recognition for excellence'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '236+ professional doctors with years of specialized experience'
    },
    {
      icon: Heart,
      title: 'Patient Care',
      description: 'Personalized approach with 69,000+ satisfied patients worldwide'
    },
    {
      icon: Star,
      title: 'Natural Results',
      description: 'Artistic precision ensuring natural-looking, beautiful outcomes'
    },
    {
      icon: Microscope,
      title: 'Latest Technology',
      description: 'State-of-the-art equipment and innovative treatment methods'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sage-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-6 font-primary">
            Why Choose <span className="gradient-text highlight-curved">Dr. Shahid</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-secondary">
            We combine medical expertise with artistic precision to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="gradient-card rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="gradient-button p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-900 mb-4 font-primary">{reason.title}</h3>
              <p className="text-gray-700 font-secondary">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <div className="gradient-card rounded-3xl p-8 max-w-4xl mx-auto">
            <blockquote className="text-2xl text-emerald-900 font-medium mb-4 font-primary italic">
              "We believe that hair transplant and aesthetic treatments are art, not just science."
            </blockquote>
            <cite className="text-emerald-700 font-semibold font-secondary">- Dr. Shahid, Lead Aesthetic Surgeon</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
