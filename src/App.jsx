import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Separator from './components/Separator';
import About from './components/About';
import Socials from './components/Socials';
import TechStack from './components/TechStack';
import Cursor from './components/Cursor';
import Experience from './components/Experience';
import ProjectsSection from './components/ProjectsSection';
import GithubActivity from './components/GithubActivity';
import Footer from './components/Footer';

const MotionDiv = motion.div;

function App() {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <>
    <Cursor />
    <MotionDiv
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="min-h-screen"
    >
      <Nav isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <Separator />
      <About />
      <Socials />
      <TechStack />
      <Experience />
      <ProjectsSection />
      <GithubActivity />
      <Footer />
    </MotionDiv>
    </>
  );
}

export default App;