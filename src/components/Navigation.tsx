
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Achievement', href: '/achievement' },
    { name: 'Our Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-white/20 ${
        isScrolled 
          ? 'bg-emerald-900/80 backdrop-blur-md' 
          : 'bg-white/10 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/618512cb-6b85-455b-9517-254932f4dcd4.png" 
                alt="Dr. Shahid Aesthetics" 
                className="h-10 w-auto"
              />
              <div className="ml-3">
                <h1 className="text-xl font-bold text-white font-primary">Dr. Shahid</h1>
                <p className="text-xs text-emerald-200 font-secondary">Aesthetics</p>
              </div>
            </Link>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative text-white hover:text-emerald-300 transition-colors duration-300 font-medium font-secondary ${
                      location.pathname === item.href ? 'text-emerald-300' : ''
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.href && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
                    )}
                  </Link>
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
          <div className="md:hidden bg-emerald-900/90 backdrop-blur-md border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-white hover:text-emerald-300 block px-3 py-2 rounded-md text-base font-medium transition-colors font-secondary relative ${
                    location.pathname === item.href ? 'text-emerald-300 bg-emerald-800/50' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-r-full"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 gradient-button text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default Navigation;
