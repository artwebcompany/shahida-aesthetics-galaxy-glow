
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Achievement', href: '#achievement' },
    { name: 'Our Services', href: '#services' },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-emerald-900/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/618512cb-6b85-455b-9517-254932f4dcd4.png" 
                alt="Dr. Shahid Aesthetics" 
                className="h-10 w-auto"
              />
              <div className="ml-3">
                <h1 className="text-xl font-bold text-white">Dr. Shahid</h1>
                <p className="text-xs text-emerald-200">Aesthetics</p>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-emerald-300 transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-emerald-300 transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-emerald-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-emerald-300 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow z-40"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default Navigation;
