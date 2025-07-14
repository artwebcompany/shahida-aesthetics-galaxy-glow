
import React, { useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import HeroSection from '../components/HeroSection';
import ProcessSection from '../components/ProcessSection';
import WhyChooseSection from '../components/WhyChooseSection';
import PromoBanner from '../components/PromoBanner';
import PricingSection from '../components/PricingSection';
import VideoSection from '../components/VideoSection';
import GallerySection from '../components/GallerySection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  return (
    <>
      {!showContent && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      {showContent && (
        <div className="min-h-screen">
          <HeroSection />
          
          {/* Section Separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          
          <ProcessSection />
          
          {/* Section Separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          
          <WhyChooseSection />
          
          {/* Section Separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          
          <PromoBanner />
          
          {/* Section Separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          
          <PricingSection />
          
          {/* Section Separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          
          <VideoSection />
          
          {/* Section Separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          
          <GallerySection />
          
          {/* Section Separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          
          <TestimonialsSection />
          
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
