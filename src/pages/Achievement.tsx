
import React from 'react';
import AchievementSection from '../components/AchievementSection';

const Achievement = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen galaxy-bg bg-cosmic-gradient relative overflow-hidden flex items-center">
        <div className="galaxy-overlay relative z-10 w-full">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center" data-aos="fade-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 font-primary">
                Our <span className="gradient-text highlight-curved">Achievements</span>
              </h1>
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto font-secondary">
                Celebrating milestones and recognition in aesthetic medicine excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      <AchievementSection />
    </div>
  );
};

export default Achievement;
