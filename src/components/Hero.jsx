import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram, Mail, Globe, Calendar } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <div className="hero-heading-row">
            <h1>Hi, I'm Rounak.</h1>
          </div>
          
          <p className="hero-bio">
            A Frontend focused <span className='highlight'>Fullstack developer</span>, currently pursuing Computer Science & Engineering at NIT Durgapur. I build responsive and clean web applications using <span className='highlight'>React, Node.js and Express</span>. I am currently diving deep into backend with GoLang and Django. 
            <br /><br />
            I'm Open to <span className='highlight'>freelance projects</span> and <span className='highlight'>collaborations</span>.
          </p>

          <div className="hero-main-actions">
            <a href="https://linkedin.com/in/literallyrounak" className="btn-modern primary">
              <Mail size={18} />
              Get in touch
            </a>
          </div>
          
          <div className="hero-social-row">
            <a href="https://twitter.com/literallyrounak" target="_blank" rel="noopener noreferrer" className="hero-social-item">
              <Twitter size={18} /> Twitter
            </a>
            <a href="https://linkedin.com/in/literallyrounak" target="_blank" rel="noopener noreferrer" className="hero-social-item">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="https://github.com/literallyrounak" target="_blank" rel="noopener noreferrer" className="hero-social-item">
              <Github size={18} /> GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
