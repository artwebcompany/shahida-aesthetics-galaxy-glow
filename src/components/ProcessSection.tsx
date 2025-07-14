
import React from 'react';
import { UserPlus, Stethoscope, FileText, Heart } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Patient Registration',
      description: 'Welcome and registration to ensure a good initial experience',
      number: '01'
    },
    {
      icon: Stethoscope,
      title: 'Initial Examination',
      description: 'Comprehensive evaluation by professional medical staff',
      number: '02'
    },
    {
      icon: FileText,
      title: 'Report & Diagnosis',
      description: 'Test results analyzed for proper treatment',
      number: '03'
    },
    {
      icon: Heart,
      title: 'Ongoing Care',
      description: 'We maintain continuity of care after the initial visit',
      number: '04'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-sage-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-6 font-primary">
            Our <span className="gradient-text highlight-curved">Treatment Process</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-secondary">
            Step by step process to ensure the best care and results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="gradient-card rounded-2xl p-8 text-center relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute -top-4 -right-4 gradient-button text-white font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center font-primary">
                {step.number}
              </div>
              <div className="gradient-button p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-900 mb-4 font-primary">{step.title}</h3>
              <p className="text-gray-700 font-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
