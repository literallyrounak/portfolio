import React from 'react';
import { Mail, Github, Twitter, Linkedin, Instagram, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">Let's connect: </h2>
          </div>
          
          <div className="footer-social-icons">
            <a href="https://twitter.com/literallyrounak" target="_blank" rel="noopener noreferrer" className="footer-icon-link"><Twitter size={20} /></a>
            <a href="https://linkedin.com/in/literallyrounak" target="_blank" rel="noopener noreferrer" className="footer-icon-link"><Linkedin size={20} /></a>
            <a href="https://github.com/literallyrounak" target="_blank" rel="noopener noreferrer" className="footer-icon-link"><Github size={20} /></a>
            <a href="https://instagram.com/literallyrounak" target="_blank" rel="noopener noreferrer" className="footer-icon-link"><Instagram size={20} /></a>
          </div>
          
          <div className="footer-bottom-minimal">
            <p>© {new Date().getFullYear()} Rounak Kumar Gupta</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
