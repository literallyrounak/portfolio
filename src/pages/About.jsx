import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { aboutParagraphs, socials, GITHUB_USER, NAME } from '../data/site';

const MotionSection = motion.section;

const About = () => {
  return (
    <div className="mx-auto max-w-3xl space-y-16 px-4 py-8 md:px-0 md:py-16">
      {/* Intro section */}
      <MotionSection
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex flex-col gap-8 md:flex-row md:items-start"
      >
        <div className="relative group mx-auto md:mx-0 flex-shrink-0">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-accent/30 to-green/30 opacity-55 blur-sm transition duration-300 group-hover:opacity-80" />
          <img
            src={`https://github.com/${GITHUB_USER}.png`}
            alt={NAME}
            className="relative h-32 w-32 rounded-2xl border border-surface1 object-cover shadow-md"
          />
        </div>
        <div className="space-y-4 flex-1">
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight">
            About Me
          </h1>
          <div className="space-y-4 max-w-xl text-subtext1 text-base leading-relaxed">
            {aboutParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Contact Section */}
      <MotionSection
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: 0.1 }}
        className="space-y-6"
      >
        <div className="border-b border-surface1/60 pb-2">
          <h2 className="text-xl font-heading font-bold tracking-tight">Get In Touch</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {socials.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface0 border border-surface1 text-subtext1 hover:border-accent hover:text-text flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-mono transition-colors duration-200"
              >
                <Icon size={14} />
                <span>{link.label}</span>
              </a>
            );
          })}
          <a
            href="#"
            className="bg-surface0 border border-surface1 text-subtext1 hover:border-accent hover:text-text flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-mono transition-colors duration-200"
          >
            <FileText size={14} />
            <span>Resume</span>
          </a>
        </div>
      </MotionSection>
    </div>
  );
};

export default About;
