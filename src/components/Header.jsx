import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import Breadcrumb from './Breadcrumb';
import Sidebar from './Sidebar';
import { navItems } from '../data/site';

const MotionSpan = motion.span;

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <div className="header sticky top-0 z-40 flex h-24 items-center justify-between p-5 pb-10 select-none">
        <Breadcrumb />
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="text-text hover:text-accent rounded p-2 md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu size={24} />
        </button>
        <nav className="hidden items-center gap-1.5 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`relative rounded-md px-3.5 py-1.5 text-sm font-heading font-semibold transition-colors duration-200 ${
                  active ? 'text-text' : 'text-subtext0 hover:text-text'
                }`}
              >
                {active && (
                  <MotionSpan
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-md bg-surface1/60 border border-surface2/40"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}

          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="text-subtext0 hover:text-text cursor-pointer rounded-md px-3.5 py-1.5 text-sm font-heading font-semibold transition-colors duration-200"
          >
            More...
          </button>
        </nav>
      </div>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <style>{`
        .header {
          mask: linear-gradient(black, black, transparent);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
      `}</style>
    </>
  );
};

export default Header;

