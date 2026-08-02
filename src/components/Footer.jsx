import { useEffect, useState } from 'react';
import { socials } from '../data/site';

const Footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Date().toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-6xl px-4 pb-12 pt-10">
      <footer className="border-t border-surface1/60 pt-6 flex flex-col gap-6 text-xs md:flex-row md:justify-between md:items-center">
        {/* Left Side: Prompt and availability status */}
        <div className="space-y-2 text-left font-mono">
          <div className="flex items-center gap-2 text-subtext0">
            <span className="text-accent font-bold">rounak ~ $</span>
            <span className="text-subtext1">cat status.json</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-subtext0">
            <span className="text-subtext1">[{time || '--:--:--'}]</span>
            <span className="text-surface2">•</span>
            <div className="flex items-center gap-1.5" title="Availability Status">
              <span className="relative flex h-2 w-2">
                <span className="bg-green/75 absolute inline-flex h-full w-full animate-ping rounded-full" />
                <span className="bg-green relative inline-flex h-2 w-2 rounded-full" />
              </span>
              <span className="text-subtext1">Available for freelance roles</span>
            </div>
          </div>
        </div>

        {/* Right Side: built info + social links */}
        <div className="space-y-2 md:text-right font-mono text-subtext0">
          <div>
            Built with <span className="text-text">React + Vite + Tailwind</span>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1 md:justify-end">
            {socials.map((item, i) => (
              <span key={item.href} className="flex items-center gap-3">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-200"
                >
                  {item.label}
                </a>
                {i !== socials.length - 1 && <span className="text-surface2">•</span>}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

