
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="galaxy-bg bg-emerald-gradient relative overflow-hidden">
      <div className="galaxy-overlay relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Logo & Description */}
            <div className="space-y-6" data-aos="fade-up">
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/618512cb-6b85-455b-9517-254932f4dcd4.png" 
                  alt="Dr. Shahid Aesthetics" 
                  className="h-12 w-auto"
                />
                <div className="ml-3">
                  <h3 className="text-2xl font-bold text-white font-primary">Dr. Shahid</h3>
                  <p className="text-emerald-200 font-secondary">Aesthetics</p>
                </div>
              </div>
              <p className="text-emerald-100 leading-relaxed font-secondary">
                Advanced hair transplant and aesthetic treatments in Dubai. Where medical expertise meets artistic precision.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-6" data-aos="fade-up" data-aos-delay="100">
              <h4 className="text-xl font-semibold text-white font-primary">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-emerald-200 hover:text-white transition-colors font-secondary">Home</a></li>
                <li><a href="/about" className="text-emerald-200 hover:text-white transition-colors font-secondary">About Us</a></li>
                <li><a href="/achievement" className="text-emerald-200 hover:text-white transition-colors font-secondary">Achievement</a></li>
                <li><a href="/services" className="text-emerald-200 hover:text-white transition-colors font-secondary">Our Services</a></li>
                <li><a href="/contact" className="text-emerald-200 hover:text-white transition-colors font-secondary">Contact Us</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-xl font-semibold text-white font-primary">Popular Services</h4>
              <ul className="space-y-3">
                <li><span className="text-emerald-200 font-secondary">Maxxi PRP & Biotin PRP</span></li>
                <li><span className="text-emerald-200 font-secondary">Micro FUE Hair Transplant</span></li>
                <li><span className="text-emerald-200 font-secondary">Botox & Fillers</span></li>
                <li><span className="text-emerald-200 font-secondary">Micro Beard Transplant</span></li>
                <li><span className="text-emerald-200 font-secondary">Eyebrow Transplant</span></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6" data-aos="fade-up" data-aos-delay="300">
              <h4 className="text-xl font-semibold text-white font-primary">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-200 font-secondary">Dubai, UAE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-200 font-secondary">+971 56 936 7006</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-200 font-secondary">hello@drshahidaesthetics.com</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4 pt-4">
                <a href="#" className="gradient-button p-3 rounded-full hover:scale-110 transition-transform">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="gradient-button p-3 rounded-full hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="gradient-button p-3 rounded-full hover:scale-110 transition-transform">
                  <Youtube className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-emerald-400/20 pt-8 text-center" data-aos="fade-up">
            <p className="text-emerald-200 font-secondary">
              © 2025 Dr. Shahid Aesthetics. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
