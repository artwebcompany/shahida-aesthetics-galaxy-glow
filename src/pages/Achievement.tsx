
import React from 'react';
import AchievementSection from '../components/AchievementSection';
import Footer from '../components/Footer';

const Achievement = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 galaxy-bg bg-cosmic-gradient relative overflow-hidden">
        <div className="galaxy-overlay relative z-10 w-full">
          <div className="container mx-auto px-4">
            <div className="text-center" data-aos="fade-up">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-primary">
                Our <span className="gradient-text highlight-curved">Achievements</span>
              </h1>
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto font-secondary">
                Celebrating milestones and recognition in aesthetic medicine excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>

      <AchievementSection />
      
      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
      
      <Footer />
    </div>
  );
};

export default Achievement;
