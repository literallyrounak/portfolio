import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import GitHubActivity from './components/GitHubActivity';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';
import BlobCursor from './components/BlobCursor';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <BlobCursor />
        <Hero />
        <Projects />
        <GitHubActivity />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

export default App
