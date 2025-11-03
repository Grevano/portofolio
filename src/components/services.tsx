import React from 'react';
import { FaCode, FaMobileAlt } from 'react-icons/fa';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-secondary-blue p-8 rounded-lg shadow-lg text-center hover:shadow-xl hover:scale-105 hover:bg-primary-blue transition-all duration-300">
    <div className="text-accent-light-blue text-5xl mb-4 flex justify-center hover:text-accent-teal transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-text-light text-2xl font-bold mb-3">{title}</h3>
    <p className="text-accent-light-blue leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-dark-blue-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-text-light text-4xl font-bold text-center mb-12">
          What I <span className="text-primary-blue">Offer</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            icon={<FaCode />}
            title="Frontend Development"
            description="Building responsive and interactive websites using modern technologies like React.js, with a focus on seamless user experience and fast performance."
          />
          <ServiceCard
            icon={<FaMobileAlt />}
            title="Mobile Development"
            description="Design and develop cross-platform mobile applications for Android and iOS using Flutter, ensuring consistent appearance and reliable functionality."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
