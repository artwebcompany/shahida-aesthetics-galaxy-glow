
import React, { useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import AchievementSection from '../components/AchievementSection';
import ServicesSection from '../components/ServicesSection';
import VideoSection from '../components/VideoSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  return (
    <>
      {!showContent && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      {showContent && (
        <div className="min-h-screen">
          <Navigation />
          <HeroSection />
          <AboutSection />
          <AchievementSection />
          <ServicesSection />
          <VideoSection />
          <GallerySection />
          <ContactSection />
        </div>
      )}
    </>
  );
};

export default Index;
