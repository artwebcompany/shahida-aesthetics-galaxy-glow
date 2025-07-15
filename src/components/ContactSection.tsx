
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
    
    // Create WhatsApp message
    const message = `Hello Dr. Shahid Aesthetics!

I would like to schedule a consultation.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}

Thank you!`;

    const whatsappNumber = '+971569367006';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
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
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-primary">
              Contact{' '}
              <span className="gradient-text highlight-curved">Us</span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto font-secondary">
              Have Questions? Contact Us Now!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="gradient-card-dark rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 font-primary">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-emerald-200 focus:outline-none focus:border-emerald-400 transition-colors font-secondary"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-emerald-200 focus:outline-none focus:border-emerald-400 transition-colors font-secondary"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-emerald-200 focus:outline-none focus:border-emerald-400 transition-colors font-secondary"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-emerald-200 focus:outline-none focus:border-emerald-400 transition-colors resize-none font-secondary"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full gradient-button text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 font-secondary"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send to WhatsApp</span>
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
                    className={`gradient-card-dark rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="gradient-button p-3 rounded-lg w-fit mb-4">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2 font-primary">{info.title}</h4>
                    <a
                      href={info.link}
                      className="text-emerald-200 hover:text-emerald-100 transition-colors font-secondary"
                    >
                      {info.content}
                    </a>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="gradient-card-dark rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 font-primary">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.link}
                      className="gradient-button p-4 rounded-full hover:shadow-lg transition-all duration-300"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map or Additional Info */}
              <div className="gradient-card-dark rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4 font-primary">Visit Our Clinic</h3>
                <p className="text-emerald-100 mb-4 font-secondary">
                  Located in the heart of Dubai, our state-of-the-art facility offers the latest in aesthetic medicine technology.
                </p>
                <button className="gradient-button text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 font-secondary">
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className={`border-t border-white/20 pt-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-4 font-primary">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-emerald-200 hover:text-emerald-100 transition-colors font-secondary">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-4 font-primary">Popular Services</h4>
                <ul className="space-y-2">
                  {popularServices.map((service, index) => (
                    <li key={index}>
                      <a href="#services" className="text-emerald-200 hover:text-emerald-100 transition-colors text-sm font-secondary">
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-4 font-primary">Contact Information</h4>
                <div className="space-y-2 text-emerald-200 font-secondary">
                  <p>Dubai, UAE</p>
                  <p>hello@drshahidaesthetics.com</p>
                  <p>+971 56 936 7006</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 pt-8 border-t border-white/20">
              <p className="text-emerald-200 font-secondary">
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
