import React from 'react';
import { Shield, Droplets, DollarSign, Zap, Gauge, Award } from 'lucide-react';
import './Products.css';

const Products: React.FC = () => {
  const features = [
    {
      icon: <Shield className="product-icon" />,
      title: "143× Stronger Shield",
      description: "Advanced protective coating technology"
    },
    {
      icon: <Droplets className="product-icon" />,
      title: "Waterproof Protection",
      description: "Superior moisture resistance capabilities"
    },
    {
      icon: <Shield className="product-icon" />,
      title: "Antimicrobial Properties",
      description: "Natural antibacterial and antifungal protection"
    },
    {
      icon: <DollarSign className="product-icon" />,
      title: "Cost Saving Solution",
      description: "Economical alternative to traditional materials"
    },
    {
      icon: <Zap className="product-icon" />,
      title: "Enhanced Yarn Durability",
      description: "Extended lifespan and performance"
    },
    {
      icon: <Gauge className="product-icon" />,
      title: "3.5× Scratch Resistance",
      description: "Superior surface protection technology"
    }
  ];

  return (
    <section id="products" className="products">
      <div className="products-container">
        <div className="products-header">
          <h2 className="products-title">Products & Features</h2>
          <p className="products-description">
            Our innovative products deliver exceptional performance metrics, 
            setting new standards in sustainable material technology.
          </p>
        </div>

        <div className="products-grid">
          {features.map((feature, index) => (
            <div key={index} className="product-card">
              <div className="product-icon-container">
                {feature.icon}
              </div>
              <h3 className="product-title">{feature.title}</h3>
              <p className="product-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="products-highlight">
          <div className="highlight-card">
            <Award className="highlight-icon" />
            <h3 className="highlight-title">Industry Leading Performance</h3>
            <p className="highlight-description">
              Our products consistently outperform traditional materials in durability, 
              sustainability, and cost-effectiveness, backed by rigorous testing and validation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;