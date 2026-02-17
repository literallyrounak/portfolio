import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';
import './GitHubActivity.css';

const GitHubActivity = () => {
  return (
    <section id="github-activity" className="github-activity">
      <div className="container">
        <h2 className="section-title">GitHub Activity</h2>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="calendar-outer"
        >
          <GitHubCalendar 
            username="literallyrounak" 
            blockSize={10}
            blockMargin={3}
            blockRadius={5}
            colorScheme="dark"
            fontSize={12}
            theme={{
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubActivity;
