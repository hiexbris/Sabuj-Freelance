import React from 'react';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Together for <span className="hero-highlight">Change</span>
          </h1>
          <p className="hero-subtitle">
            Climate Tech start-up solving carbon material & agro-waste challenges.
          </p>
          <button
            onClick={scrollToAbout}
            className="hero-cta"
          >
            Learn More
            <ArrowDown className="hero-cta-icon" />
          </button>
        </div>
      </div>
      
      {/* Subtle background pattern */}
      <div className="hero-background"></div>
    </section>
  );
};

export default Hero;