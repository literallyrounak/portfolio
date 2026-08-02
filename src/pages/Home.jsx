import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionSection = motion.section;
import Featured from '../components/Featured';
import { socials } from '../data/site';

const Home = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-8 md:px-0 md:py-16">
      <MotionSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
        className="space-y-6 max-w-2xl"
      >
        <div className="space-y-3">
          <h1 className="text-4xl font-heading font-extrabold tracking-tight md:text-5xl leading-none">
            Hey! I&apos;m <span className="text-accent">Rounak</span>
          </h1>
        </div>

        <p className="text-subtext1 text-base md:text-lg leading-relaxed max-w-xl font-normal">
          I&apos;m a CS student who builds full-stack web stuff. I like writing clean Node.js backends and fast React frontends, and I try to keep things simple and easy to work with.
          These days I&apos;m mostly learning Go and messing around with backend/systems things.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          {socials.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                className="flex items-center gap-2 text-subtext0 hover:text-accent transition-colors duration-200 rounded-lg px-3 py-1.5"
              >
                <Icon size={18} strokeWidth={1.75} />
                {/* <span>{link.label}</span> */}
              </a>
            );
          })}
          <Link
            to="/about"
            className="group text-accent hover:text-accent/80 inline-flex items-center gap-1 text-sm font-heading font-semibold transition-colors duration-200 pl-1"
          >
            <span>More about me</span>
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </MotionSection>

      <Featured />
    </div>
  );
};

export default Home;
