
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const InteractiveMap = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      id: 1,
      name: 'Dr. Shahid Aesthetics - Main Clinic',
      address: 'Dubai Healthcare City, Dubai, UAE',
      phone: '+971 56 936 7006',
      email: 'hello@drshahidaesthetics.com',
      hours: 'Mon-Sat: 9:00 AM - 8:00 PM',
      coordinates: { lat: 25.2048, lng: 55.2708 }
    }
  ];

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl" data-aos="fade-up">
      <div className="grid lg:grid-cols-2">
        {/* Map Section */}
        <div className="relative h-96 lg:h-full bg-gradient-to-br from-emerald-100 to-emerald-200">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-emerald-900 mb-2 font-primary">Interactive Map</h3>
              <p className="text-emerald-700 font-secondary">Located in Dubai Healthcare City</p>
              <button className="gradient-button text-white px-6 py-3 rounded-lg mt-4 font-medium font-secondary">
                <Navigation className="w-4 h-4 mr-2 inline" />
                Get Directions
              </button>
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-emerald-900 mb-6 font-primary">
            <span className="highlight-curved">Visit Us</span>
          </h3>
          
          {locations.map((location, index) => (
            <div
              key={location.id}
              className={`gradient-card p-6 rounded-xl mb-4 cursor-pointer transition-all duration-300 ${
                activeLocation === index ? 'ring-2 ring-emerald-500' : ''
              }`}
              onClick={() => setActiveLocation(index)}
            >
              <h4 className="font-semibold text-emerald-900 mb-4 font-primary">{location.name}</h4>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-600 mt-1" />
                  <span className="text-gray-700 font-secondary">{location.address}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700 font-secondary">{location.phone}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700 font-secondary">{location.email}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700 font-secondary">{location.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
