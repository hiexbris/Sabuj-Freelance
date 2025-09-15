import React from 'react';
import { Beaker, Cog, BarChart3 } from 'lucide-react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Beaker className="service-icon" />,
      title: "Research & Development",
      description: "Advanced material science research focusing on sustainable carbon-based solutions and agro-waste transformation technologies."
    },
    {
      icon: <Cog className="service-icon" />,
      title: "Product Development",
      description: "End-to-end product development services, from concept to commercialization, specializing in eco-friendly material applications."
    },
    {
      icon: <BarChart3 className="service-icon" />,
      title: "Sustainability Consulting",
      description: "Strategic consulting for businesses looking to implement sustainable practices and reduce their carbon footprint through innovative solutions."
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
          <p className="services-description">
            We provide comprehensive solutions across the entire innovation lifecycle, 
            from initial research to market-ready sustainable products.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-container">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;