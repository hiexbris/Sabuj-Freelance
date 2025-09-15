import React from 'react';
import { Eye, Target } from 'lucide-react';
import './VisionMission.css';

const VisionMission: React.FC = () => {
  return (
    <section id="vision" className="vision-mission">
      <div className="vision-mission-container">
        <div className="vision-mission-grid">
          {/* Vision */}
          <div id="vision-content" className="vision-content">
            <div className="section-header">
              <div className="section-icon vision-icon">
                <Eye className="icon" />
              </div>
              <h2 className="section-title">Our Vision</h2>
            </div>
            <p className="section-text">
              To become a global leader in sustainable material innovation, transforming agricultural 
              waste and carbon materials into revolutionary products that drive environmental restoration 
              and economic growth. We envision a world where waste becomes a valuable resource, 
              contributing to a circular economy and a carbon-negative future.
            </p>
          </div>

          {/* Mission */}
          <div id="mission" className="mission-content">
            <div className="section-header">
              <div className="section-icon mission-icon">
                <Target className="icon" />
              </div>
              <h2 className="section-title">Our Mission</h2>
            </div>
            <p className="section-text">
              To develop and commercialize cutting-edge technologies that convert waste materials 
              into high-performance, sustainable products. We are committed to advancing scientific 
              knowledge, fostering innovation partnerships, and creating scalable solutions that 
              address climate challenges while delivering exceptional value to our stakeholders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;