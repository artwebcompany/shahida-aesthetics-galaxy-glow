
import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="loading-screen galaxy-bg">
      <div className="galaxy-overlay flex flex-col items-center justify-center">
        <div className="relative mb-8">
          <img 
            src="/lovable-uploads/618512cb-6b85-455b-9517-254932f4dcd4.png" 
            alt="Dr. Shahid Aesthetics" 
            className="w-32 h-32 object-contain animate-pulse-glow"
          />
          <div className="absolute inset-0 animate-spin-slow">
            <div className="w-40 h-40 border-2 border-emerald-400 border-t-transparent rounded-full"></div>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2 animate-fade-in-up">
            Dr. Shahid Aesthetics
          </h1>
          <p className="text-emerald-200 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Your Aesthetic Genius
          </p>
          <div className="mt-6 flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
