import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-title">STPL</h3>
            <p className="footer-subtitle">Sabuj Tech Private Limited</p>
          </div>
          
          <p className="footer-description">
            Climate Tech start-up solving carbon material & agro-waste challenges.
          </p>
          
          <div className="footer-copyright">
            <p className="copyright-text">
              © {new Date().getFullYear()} Sabuj Tech Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;