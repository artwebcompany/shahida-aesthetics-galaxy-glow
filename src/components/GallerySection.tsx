
import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Heart } from 'lucide-react';

const GallerySection = () => {
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

    const element = document.getElementById('gallery');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const beforeAfterImages = [
    {
      before: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      title: 'Hair Transplant Results',
      description: '6 months post-procedure'
    },
    {
      before: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
      title: 'Beard Transplant',
      description: '4 months recovery'
    },
    {
      before: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop',
      title: 'Eyebrow Enhancement',
      description: '3 months healing'
    }
  ];

  const products = [
    {
      name: 'Premium Hair Serum',
      description: 'Advanced formula for hair growth',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=300&fit=crop',
      price: 'AED 299'
    },
    {
      name: 'Biotin Complex',
      description: 'Essential vitamins for hair health',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop',
      price: 'AED 199'
    },
    {
      name: 'Recovery Kit',
      description: 'Post-procedure care essentials',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop',
      price: 'AED 399'
    },
    {
      name: 'Anti-Aging Cream',
      description: 'Premium skincare formula',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop',
      price: 'AED 449'
    }
  ];

  const testimonials = [
    {
      name: 'Alexa Milton',
      role: 'Physiotherapist',
      content: 'Professional service and natural results. I highly recommend this clinic!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop'
    },
    {
      name: 'Pelican Steve',
      role: 'Neurologist',
      content: 'Very personal approach and satisfying results.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=100&h=100&fit=crop'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-emerald-50 to-sage-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Before & After Gallery */}
        <div className={`mb-20 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-6 font-primary">
              Before & After{' '}
              <span className="gradient-text highlight-curved">Transformations</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-secondary">
              See the real changes from our patients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterImages.map((item, index) => (
              <div
                key={index}
                className={`gradient-card rounded-3xl shadow-lg overflow-hidden border border-emerald-100 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={item.before} alt="Before" className="w-full h-48 object-cover" />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative">
                    <img src={item.after} alt="After" className="w-full h-48 object-cover" />
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      AFTER
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-emerald-900 mb-2 font-primary">{item.title}</h3>
                  <p className="text-gray-600 font-secondary">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Beauty Products Gallery */}
        <div className={`mb-20 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-6 font-primary">
              Beauty{' '}
              <span className="gradient-text highlight-curved">Products</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-secondary">
              Premium skincare and hair care products for optimal results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className={`group gradient-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-emerald-100 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-600 to-emerald-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-emerald-900 mb-2 font-primary">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 font-secondary">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-emerald-700 font-primary">{product.price}</span>
                    <button className="gradient-button text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 font-secondary">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Patient Testimonials */}
        <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-6 font-primary">
              Patient{' '}
              <span className="gradient-text highlight-curved">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-secondary">
              What our patients say about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`gradient-button rounded-3xl p-8 text-white ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-bold font-primary">{testimonial.name}</h4>
                    <p className="text-emerald-100 font-secondary">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                  ))}
                </div>
                
                <p className="text-emerald-100 text-lg italic font-secondary">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
