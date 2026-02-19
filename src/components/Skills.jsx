import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const SkillTile = ({ name, icon }) => {
  const mapping = {
    js: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    ts: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    react: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    nextjs: 'https://cdn.simpleicons.org/nextdotjs/white',
    redux: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
    tailwindcss: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
    framer: 'https://cdn.simpleicons.org/framer/white',
    nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    express: 'https://cdn.simpleicons.org/express/white',
    mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    prisma: 'https://cdn.simpleicons.org/prisma/white',
    socketio: 'https://cdn.simpleicons.org/socketdotio/white',
    git: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    github: 'https://cdn.simpleicons.org/github/white',
    vscode: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
    npm: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
    postman: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
    vercel: 'https://cdn.simpleicons.org/vercel/white',
    openai: 'https://cdn.simpleicons.org/openai/white',
    notion: 'https://cdn.simpleicons.org/notion/white'
  };

  const url = mapping[icon] || `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`;

  return (
    <motion.div 
      className="skill-tile"
      whileHover={{ y: -5 }}
    >
      <img 
        src={url} 
        alt={name} 
        className="skill-tile-img" 
        onError={(e) => { e.target.src = `https://cdn.simpleicons.org/${icon}/white`; }}
      />
      <span className="skill-tile-label">{name}</span>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills }) => (
  <div className="skill-category-block">
    <h3 className="skill-category-subtitle">{title}</h3>
    <div className="skill-tiles-grid">
      {skills.map((skill, i) => (
        <SkillTile key={i} name={skill.name} icon={skill.icon} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML', icon: 'html5' },
    { name: 'CSS', icon: 'css3' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'React', icon: 'react' },
    { name: 'Redux', icon: 'redux' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' },
    { name: 'Framer Motion', icon: 'framer' },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Express', icon: 'express' },
    { name: 'Socket.io', icon: 'socketio' },
  ];

  const toolsSkills = [
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'VS Code', icon: 'vscode' },
    { name: 'Postman', icon: 'postman' },
    { name: 'Linux', icon: 'linux' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Tools</h2>
        
        <div className="skills-categories-container">
          <SkillCategory title="Frontend" skills={frontendSkills} />
          <SkillCategory title="Backend" skills={backendSkills} />
          <SkillCategory title="Tools & Platforms" skills={toolsSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
