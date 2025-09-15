import React from 'react';
import { FileText, Star, Beaker } from 'lucide-react';
import './Technology.css';

const Technology: React.FC = () => {
  return (
    <section id="technology" className="technology">
      <div className="technology-container">
        <div className="technology-header">
          <h2 className="technology-title">Our Technology</h2>
          <p className="technology-description">
            Pioneering research and innovation protected by intellectual property rights, 
            ensuring our competitive advantage in sustainable technology.
          </p>
        </div>

        <div className="technology-grid">
          <div className="tech-item">
            <div className="tech-icon primary-bg">
              <FileText className="icon" />
            </div>
            <h3 className="tech-title">Patents Filed</h3>
            <p className="tech-description">Multiple patent applications protecting our innovative processes</p>
          </div>

          <div className="tech-item">
            <div className="tech-icon accent-bg">
              <Star className="icon" />
            </div>
            <h3 className="tech-title">Breakthrough Innovation</h3>
            <p className="tech-description">Cutting-edge material science advancements</p>
          </div>

          <div className="tech-item">
            <div className="tech-icon primary-bg">
              <Beaker className="icon" />
            </div>
            <h3 className="tech-title">R&D Excellence</h3>
            <p className="tech-description">Continuous research and development initiatives</p>
          </div>
        </div>

        <div className="technology-portfolio">
          <h3 className="portfolio-title">Intellectual Property Portfolio</h3>
          <p className="portfolio-description">
            Our comprehensive patent portfolio protects groundbreaking innovations in 
            carbon material processing and sustainable manufacturing techniques.
          </p>
          <div className="portfolio-tags">
            <span className="portfolio-tag">Material Science Patents</span>
            <span className="portfolio-tag">Process Innovation</span>
            <span className="portfolio-tag">Sustainable Technology</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;