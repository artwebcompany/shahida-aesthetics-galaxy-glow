
import React, { useEffect, useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('videos');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const videos = [
    {
      id: 't1qSt70-PqE',
      title: 'Hair Transplant Procedure',
      description: 'Watch our expert technique in action',
      thumbnail: 'https://img.youtube.com/vi/t1qSt70-PqE/maxresdefault.jpg'
    },
    {
      id: '_w595tN-rW0',
      title: 'Patient Transformation',
      description: 'Amazing before and after results',
      thumbnail: 'https://img.youtube.com/vi/_w595tN-rW0/maxresdefault.jpg'
    }
  ];

  const openVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/shorts/${videoId}`, '_blank');
  };

  return (
    <section id="videos" className="py-20 galaxy-bg bg-emerald-gradient relative overflow-hidden">
      <div className="galaxy-overlay relative z-10">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Video{' '}
              <span className="gradient-text">Gallery</span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Cinematic experience collection from our patients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className={`group relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-500 cursor-pointer ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => openVideo(video.id)}
              >
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-6 rounded-full group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                      <Play className="w-12 h-12 text-white fill-current" />
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{video.title}</h3>
                  <p className="text-emerald-200">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <button className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 animate-pulse-glow">
              View More Videos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
