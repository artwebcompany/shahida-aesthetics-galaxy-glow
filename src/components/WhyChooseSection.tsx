
import React from 'react';

const WhyChooseSection = () => {
  const reasons = [
    {
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      title: 'Safety First',
      description: 'Advanced safety protocols and sterile environment for all procedures. We prioritize your health and well-being with state-of-the-art medical equipment and internationally certified safety standards.'
    },
    {
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      title: 'Award Winning',
      description: '320+ national awards and international recognition for excellence in aesthetic medicine. Our achievements reflect our commitment to delivering world-class treatments and exceptional patient care.'
    },
    {
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop',
      title: 'Expert Team',
      description: '236+ professional doctors with years of specialized experience in aesthetic procedures. Our team consists of board-certified specialists who stay updated with the latest techniques and innovations.'
    },
    {
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      title: 'Patient Care',
      description: 'Personalized approach with 69,000+ satisfied patients worldwide. We believe in creating customized treatment plans that address your unique needs and aesthetic goals with compassionate care.'
    },
    {
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop',
      title: 'Natural Results',
      description: 'Artistic precision ensuring natural-looking, beautiful outcomes. Our philosophy focuses on enhancing your natural beauty rather than creating artificial changes, delivering results that look effortlessly beautiful.'
    },
    {
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      title: 'Latest Technology',
      description: 'State-of-the-art equipment and innovative treatment methods. We invest in cutting-edge technology and proven techniques to ensure you receive the most advanced and effective treatments available.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sage-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-6 font-primary">
            Why Choose <span className="gradient-text highlight-curved">Dr. Shahid</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-secondary">
            We combine medical expertise with artistic precision to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 h-64">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white mb-2 font-primary">{reason.title}</h3>
                </div>
                <div className="absolute inset-0 bg-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="text-gray-700 font-secondary leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <div className="gradient-card rounded-3xl p-8 max-w-4xl mx-auto">
            <blockquote className="text-2xl text-emerald-900 font-medium mb-4 font-primary italic">
              "We believe that hair transplant and aesthetic treatments are art, not just science."
            </blockquote>
            <cite className="text-emerald-700 font-semibold font-secondary">- Dr. Shahid, Lead Aesthetic Surgeon</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
