import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: 'GoodFirstFind',
    description: 'A platform for finding good first issues in open-source projects and keeping track of them.',
    tech: ['react', 'nodejs', 'express', 'mongodb'],
    github: 'https://github.com/literallyrounak/GoodFirstFind',
    live: 'https://goodfirstfind.onrender.com/',
    status: 'in-progress'
  },
  {
    title: 'Chatot',
    description: 'A real-time chat application with authentication using React, Express, MongoDB and Socket.io.',
    tech: ['react', 'nodejs', 'express', 'mongodb', 'socket.io'],
    github: 'https://github.com/literallyrounak/chatot',
    live: 'https://chatot-4u65.onrender.com/'
  },
  {
    title: 'Hoopa - Url Shortener',
    description: 'A URL shortener built with Custom Alias & Analytics using React, Node.js, Express and MongoDB.',
    tech: ['react', 'nodejs', 'express', 'mongodb'],
    github: 'https://github.com/literallyrounak/hoopa',
    live: 'https://hoopa-3542.onrender.com/'
  },
  {
    title: 'Slowpoke',
    description: 'Minimalistic React Application which uses NewsAPI to fetch and show news.',
    tech: ['js', 'react'],
    github: 'https://github.com/literallyrounak/slowpoke',
    live: 'https://literallyrounak.github.io/slowpoke'
  },
  {
    title: 'Espeon',
    description: 'Web Application containing all company wise questions available on LeetCode premium in a sophisticated way.',
    tech: ['react', 'js', 'python'],
    github: 'https://github.com/literallyrounak/espeon',
    live: 'https://literallyrounak.github.io/espeon'
  },
  {
    title: 'Filmbase',
    description: 'A simple React app which uses Open Movie Database search to fetch and show movie details such as cast, runtime, etc.',
    tech: ['react', 'js', 'css'],
    github: 'https://github.com/literallyrounak/filmbase',
    live: 'https://literallyrounak.github.io/filmbase'
  }
];

const TechIcon = ({ name }) => {
  const mapping = {
    react: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    js: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    express: 'https://cdn.simpleicons.org/express/white',
    'socket.io': 'https://cdn.simpleicons.org/socketdotio/white',
    css: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    tailwindcss: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    ts: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
  };
  
  const url = mapping[name] || `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;
  
  return (
    <img 
      src={url} 
      alt={name} 
      className="tech-icon-colorful"
      title={name}
      onError={(e) => { e.target.src = `https://cdn.simpleicons.org/${name}/white`; }}
    />
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <div className="project-content">
                <div className="project-card-header">
                  <div className="project-title-group">
                    <h3>{project.title}</h3>
                    {project.status === 'in-progress' && (
                      <span className="in-progress-badge">
                        <span className="pulse-dot"></span>
                        In Progress
                      </span>
                    )}
                  </div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-icon-link">
                    <Github size={20} />
                  </a>
                </div>
                <p className="project-desc text-secondary">{project.description}</p>
                
                <div className="project-footer">
                  <div className="project-tech-icons">
                    {project.tech.map((t, i) => (
                      <TechIcon key={i} name={t} />
                    ))}
                  </div>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="view-link">
                    View Live <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
