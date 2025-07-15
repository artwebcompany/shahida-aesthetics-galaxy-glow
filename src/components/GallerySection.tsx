
import React, { useEffect, useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GallerySection = () => {
  const navigate = useNavigate();
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

  // Only show 2 products
  const products = [
    {
      name: 'Premium Hair Growth Serum',
      description: 'Advanced formula for hair growth with clinically proven ingredients',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=300&fit=crop',
      price: 'Rp 299.000',
      originalPrice: 'Rp 399.000',
      rating: 4.9,
      reviews: 234
    },
    {
      name: 'Complete Hair Transplant Recovery Kit',
      description: 'Comprehensive post-procedure care essentials for optimal healing',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop',
      price: 'Rp 599.000',
      originalPrice: 'Rp 799.000',
      rating: 4.8,
      reviews: 156
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

        {/* Products Section */}
        <div className={`mb-20 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-6 font-primary">
              Featured{' '}
              <span className="gradient-text highlight-curved">Products</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-secondary">
              Premium hair care products for optimal results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <div
                key={index}
                className={`group gradient-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-emerald-100 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{product.rating} ({product.reviews} ulasan)</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-emerald-900 mb-2 font-primary">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 font-secondary">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-emerald-700 font-primary">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => navigate('/products')}
                    className="w-full gradient-button text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 font-secondary flex items-center justify-center space-x-2"
                  >
                    <span>Lihat Detail</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Products Button */}
          <div className="text-center mt-12">
            <button 
              onClick={() => navigate('/products')}
              className="gradient-button text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 font-secondary flex items-center space-x-2 mx-auto"
            >
              <span>Lihat Semua Produk</span>
              <ArrowRight className="w-5 h-5" />
            </button>
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
