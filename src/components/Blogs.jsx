import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Blogs.css';

const Blogs = () => {
  return (
    <section id="blogs" className="blogs">
      <div className="container">
        <h2 className="section-title">Writing</h2>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="blog-teaser"
        >
          <a href="https://uncurated-blog.vercel.app" target="_blank" rel="noopener noreferrer" className="blog-link-card">
            <div className="blog-link-info">
              <h3>Uncurated</h3>
              <p className="text-secondary">Personal blog covering web dev, MERN, and more.</p>
            </div>
            <ArrowUpRight size={24} className="blog-link-icon" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
