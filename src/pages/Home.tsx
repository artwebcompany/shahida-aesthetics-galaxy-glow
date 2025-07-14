
import React, { useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import HeroSection from '../components/HeroSection';
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
          <VideoSection />
          <GallerySection />
          <TestimonialsSection />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
