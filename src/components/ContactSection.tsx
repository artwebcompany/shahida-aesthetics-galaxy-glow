
import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Send } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+971 56 936 7006',
      link: 'tel:+971569367006'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@drshahidaesthetics.com',
      link: 'mailto:hello@drshahidaesthetics.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Dubai, UAE',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: '9:00 AM - 8:00 PM',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', link: '#' },
    { icon: Instagram, label: 'Instagram', link: '#' },
    { icon: Youtube, label: 'YouTube', link: '#' }
  ];

  const quickLinks = [
    'Home', 'About Us', 'Achievement', 'Our Services', 'Contact Us'
  ];

  const popularServices = [
    'Maxxi PRP & Biotin PRP', 'Botox & Fillers', 'Micro FUE Hair Transplant',
    'Micro Beard Transplant', 'Eyebrow Transplant'
  ];

  return (
    <section id="contact" className="py-20 galaxy-bg bg-cosmic-gradient relative overflow-hidden">
      <div className="galaxy-overlay relative z-10">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Contact{' '}
              <span className="gradient-text">Us</span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Have Questions? Contact Us Now!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-emerald-200 focus:outline-none focus:border-emerald-400 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-emerald-200 focus:outline-none focus:border-emerald-400 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-emerald-200 focus:outline-none focus:border-emerald-400 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Notes/Consultation Request"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-emerald-200 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 animate-pulse-glow"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-3 rounded-lg w-fit mb-4">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">{info.title}</h4>
                    <a
                      href={info.link}
                      className="text-emerald-200 hover:text-emerald-100 transition-colors"
                    >
                      {info.content}
                    </a>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.link}
                      className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-4 rounded-full hover:shadow-lg transition-all duration-300 animate-pulse-glow"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map or Additional Info */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Visit Our Clinic</h3>
                <p className="text-emerald-100 mb-4">
                  Located in the heart of Dubai, our state-of-the-art facility offers the latest in aesthetic medicine technology.
                </p>
                <button className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className={`border-t border-white/20 pt-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-emerald-200 hover:text-emerald-100 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-4">Popular Services</h4>
                <ul className="space-y-2">
                  {popularServices.map((service, index) => (
                    <li key={index}>
                      <a href="#services" className="text-emerald-200 hover:text-emerald-100 transition-colors text-sm">
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-4">Contact Information</h4>
                <div className="space-y-2 text-emerald-200">
                  <p>Dubai, UAE</p>
                  <p>hello@drshahidaesthetics.com</p>
                  <p>+971 56 936 7006</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 pt-8 border-t border-white/20">
              <p className="text-emerald-200">
                © 2025 Dr. Shahid Aesthetics. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
