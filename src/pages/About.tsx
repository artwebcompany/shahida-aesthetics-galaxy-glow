
import React, { useEffect } from 'react';
import { CheckCircle, Heart, Users, Microscope, Award, Star } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Heart,
      title: 'Hair Transplant Excellence',
      description: 'Advanced FUE techniques for natural-looking results with minimal downtime'
    },
    {
      icon: Microscope,
      title: 'Latest Technology',
      description: 'State-of-the-art equipment and innovative procedures for optimal outcomes'
    },
    {
      icon: Users,
      title: 'Personalized Care',
      description: 'Each treatment tailored to individual needs and aesthetic goals'
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Highly trained professionals with years of experience in aesthetic medicine'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Shahid',
      role: 'Lead Aesthetic Surgeon',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop'
    },
    {
      name: 'Dr. Sarah Ahmed',
      role: 'Hair Transplant Specialist',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Aesthetic Medicine Expert',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen galaxy-bg bg-emerald-gradient relative overflow-hidden flex items-center">
        <div className="galaxy-overlay relative z-10 w-full">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center" data-aos="fade-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 font-primary">
                About <span className="gradient-text highlight-curved">Dr. Shahid</span>
              </h1>
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto font-secondary">
                Leading the future of aesthetic medicine with innovative treatments and personalized care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-sage-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <h2 className="text-4xl lg:text-5xl font-bold text-emerald-900 leading-tight font-primary">
                Our <span className="highlight-curved-thick">Philosophy</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-secondary">
                At Dr. Shahid Clinic, we believe that aesthetic medicine is an art form. Every procedure is performed with meticulous attention to detail, combining medical expertise with artistic vision to create natural, beautiful results.
              </p>
              
              <div className="gradient-card p-6 rounded-xl">
                <p className="text-lg font-medium mb-2 text-emerald-900 font-primary">Our Mission</p>
                <p className="text-gray-700 font-secondary">
                  "To transform lives through innovative aesthetic treatments while maintaining the highest standards of safety, quality, and patient care."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6" data-aos="fade-left">
              {teamMembers.map((member, index) => (
                <div key={member.name} className="gradient-card rounded-2xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-emerald-900 mb-1 font-primary">{member.name}</h4>
                    <p className="text-sm text-gray-600 font-secondary">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 galaxy-bg bg-cosmic-gradient">
        <div className="galaxy-overlay container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-primary">
              Why Choose <span className="gradient-text highlight-curved">Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="gradient-card-dark rounded-2xl p-6 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="gradient-button p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 font-primary">{feature.title}</h3>
                <p className="text-emerald-200 font-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
