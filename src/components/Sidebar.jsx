import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { navItems, socials } from '../data/site';

const Sidebar = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={onClose}
        className="absolute inset-0 bg-crust/85 backdrop-blur-sm"
      />
      <div className="border-surface1 bg-mantle absolute right-0 top-0 h-full w-64 border-l p-6 shadow-xl">
        <div className="mb-8 flex items-center justify-between">
          <span className="text-subtext0 font-mono text-xs">~/menu</span>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="text-text hover:text-accent transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                onClick={onClose}
                className="text-text hover:text-accent font-heading font-bold block text-base transition-colors duration-150"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-surface1 mt-10 flex items-center gap-4 border-t pt-6">
          {socials.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="text-subtext0 hover:text-accent transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

