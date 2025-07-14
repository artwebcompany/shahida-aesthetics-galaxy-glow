
import React, { useEffect, useState } from 'react';
import { Trophy, Users, Star, Award, Target, Heart } from 'lucide-react';

const AchievementSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    patients: 0,
    doctors: 0,
    procedures: 0,
    awards: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('achievement');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { patients: 69000, doctors: 236, procedures: 19000, awards: 320 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    Object.keys(targets).forEach((key) => {
      let current = 0;
      const target = targets[key as keyof typeof targets];
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepTime);
    });
  };

  const achievements = [
    {
      icon: Users,
      number: counters.patients,
      suffix: '+',
      label: 'Satisfied Patients',
      description: 'Transformed lives across the globe',
      color: 'from-emerald-600 to-emerald-500'
    },
    {
      icon: Award,
      number: counters.doctors,
      suffix: '+',
      label: 'Professional Doctors',
      description: 'Expert medical team',
      color: 'from-sage-600 to-sage-500'
    },
    {
      icon: Target,
      number: counters.procedures,
      suffix: '+',
      label: 'Successful Procedures',
      description: 'Perfect results every time',
      color: 'from-emerald-700 to-emerald-600'
    },
    {
      icon: Trophy,
      number: counters.awards,
      suffix: '+',
      label: 'National Awards',
      description: 'Recognition for excellence',
      color: 'from-sage-700 to-sage-600'
    }
  ];

  const milestones = [
    {
      year: '2015',
      title: 'Clinic Established',
      description: 'Dr. Shahid Aesthetics opened in Dubai'
    },
    {
      year: '2018',
      title: 'International Recognition',
      description: 'First international aesthetic award'
    },
    {
      year: '2020',
      title: '50,000 Patients',
      description: 'Milestone achievement in patient care'
    },
    {
      year: '2023',
      title: 'Advanced Technology',
      description: 'Latest equipment and techniques introduced'
    }
  ];

  return (
    <div>
      {/* Statistics Section */}
      <section id="achievement" className="py-20 bg-gradient-to-br from-emerald-50 to-sage-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-6 font-primary">
              Our{' '}
              <span className="gradient-text highlight-curved">Statistics</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-secondary">
              Numbers that showcase our commitment to excellence in aesthetic medicine
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.label}
                className={`gradient-card rounded-2xl p-8 text-center border border-emerald-200 hover:shadow-lg transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`bg-gradient-to-r ${achievement.color} p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-emerald-900 mb-2 font-primary">
                  {achievement.number.toLocaleString()}{achievement.suffix}
                </div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-3 font-primary">{achievement.label}</h3>
                <p className="text-gray-600 text-sm font-secondary">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>

      {/* Journey Section */}
      <section className="py-20 galaxy-bg bg-cosmic-gradient relative overflow-hidden">
        <div className="galaxy-overlay relative z-10">
          <div className="container mx-auto px-4">
            <div className={`gradient-card-dark rounded-3xl p-8 border border-white/20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h3 className="text-3xl font-bold text-white text-center mb-12 font-primary">Our Journey</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`text-center ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-2xl font-bold py-3 px-6 rounded-full mb-4 inline-block font-primary">
                      {milestone.year}
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3 font-primary">{milestone.title}</h4>
                    <p className="text-emerald-100 font-secondary">{milestone.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>

      {/* Award Section */}
      <section className="py-20 bg-gradient-to-br from-sage-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="gradient-card rounded-2xl p-8 max-w-4xl mx-auto">
              <Star className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-emerald-900 mb-4 font-primary">Award-Winning Excellence</h3>
              <p className="text-gray-700 text-lg font-secondary">
                Recognized nationally and internationally for our commitment to patient care and innovative aesthetic treatments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AchievementSection;
