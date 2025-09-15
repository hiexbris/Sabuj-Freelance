import React from 'react';
import { Leaf, Lightbulb, Recycle } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Us</h2>
          <p className="about-description">
            At Sabuj Tech Private Limited, we are pioneering sustainable solutions that transform waste into valuable resources, 
            creating a cleaner, greener future for generations to come.
          </p>
        </div>

        <div className="about-features">
          <div className="feature-card">
            <div className="feature-icon">
              <Leaf className="icon" />
            </div>
            <h3 className="feature-title">Sustainability</h3>
            <p className="feature-description">
              Committed to environmental stewardship through innovative waste management solutions
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Lightbulb className="icon" />
            </div>
            <h3 className="feature-title">Innovation</h3>
            <p className="feature-description">
              Cutting-edge technology development for carbon material applications
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Recycle className="icon" />
            </div>
            <h3 className="feature-title">Carbon Neutrality</h3>
            <p className="feature-description">
              Leading the transition to a carbon-neutral economy through smart material solutions
            </p>
          </div>
        </div>

        <div className="about-content">
          <p className="content-text">
            We specialize in converting agricultural waste and carbon materials into high-performance, 
            sustainable products that meet the demanding needs of modern industries. Our research-driven 
            approach combines scientific excellence with practical applications, ensuring that our 
            innovations create real-world impact while addressing critical environmental challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;