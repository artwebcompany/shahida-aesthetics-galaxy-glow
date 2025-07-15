
import React from 'react';
import { Gift, Clock, Phone } from 'lucide-react';

const PromoBanner = () => {
  return (
    <section className="relative z-20 -mb-32">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-3xl shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 py-16 px-8">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2" data-aos="fade-right">
                <div className="flex items-center mb-4">
                  <Gift className="w-8 h-8 text-emerald-200 mr-3" />
                  <span className="text-emerald-200 font-semibold font-secondary">Special Offer</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-primary">
                  Get <span className="highlight-curved-thick">30% OFF</span> Your First Treatment
                </h2>
                <p className="text-emerald-100 text-lg mb-6 font-secondary">
                  Book your consultation today and receive exclusive discount on all our premium services. Limited time offer!
                </p>
                <div className="flex items-center text-emerald-200 mb-4">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-medium font-secondary">Offer valid until March 31, 2025</span>
                </div>
              </div>

              <div className="text-center lg:text-right" data-aos="fade-left">
                <button className="bg-white text-emerald-800 px-8 py-4 rounded-lg font-bold text-lg mb-4 hover:bg-emerald-50 transition-colors font-secondary">
                  Book Now & Save
                </button>
                <div className="flex items-center justify-center lg:justify-end text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  <span className="font-semibold font-secondary">+971 56 936 7006</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
