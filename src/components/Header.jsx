import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container nav">
        <div className="nav-left">
          <a href="#" className="nav-logo">
            <img src="https://github.com/literallyrounak.png" alt="Rounak" className="nav-avatar-logo" />
          </a>
        </div>
        
        <ul className="nav-links">
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#github-activity" className="nav-link">Activity</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
