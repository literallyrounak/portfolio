import { useState } from 'react';
import { Sun, Moon, Github } from 'lucide-react';
import { GITHUB_USER } from '../data/site';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tech', href: '#tech' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

const Nav = ({ isDark, toggleTheme }) => {
  const [rotation, setRotation] = useState(0);

  const handleToggle = () => {
    setRotation((prev) => prev + 360);
    toggleTheme();
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[color:var(--bg)]/85 px-2 backdrop-blur sm:px-0">
      <nav className="mx-auto flex max-w-[820px] items-center justify-between border-x border-[color:var(--border)] px-4 py-3">
        <a
          href="#top"
          onClick={(e) => handleLinkClick(e, '#top')}
          className="text-[16px] font-bold tracking-tight text-[color:var(--text)]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Rounak<span className="text-[color:var(--accent)]">.</span>
        </a>
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden gap-5 sm:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-[13px] text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--text)]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--badge-border)] transition-transform hover:scale-105"
          >
            <Github size={14} />
          </a>
          <button
            type="button"
            onClick={handleToggle}
            aria-label="Toggle theme"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--badge-border)] transition-transform hover:scale-105"
          >
            <span
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;