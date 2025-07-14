
import React from 'react';
import ContactSection from '../components/ContactSection';
import InteractiveMap from '../components/InteractiveMap';

const Contact = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen galaxy-bg bg-sage-gradient relative overflow-hidden flex items-center">
        <div className="galaxy-overlay relative z-10 w-full">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center" data-aos="fade-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 font-primary">
                Contact <span className="gradient-text highlight-curved">Us</span>
              </h1>
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto font-secondary">
                Get in touch with our expert team for your aesthetic consultation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-sage-50">
        <div className="container mx-auto px-4">
          <InteractiveMap />
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Contact;
