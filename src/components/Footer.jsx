import { socials } from '../data/site';

const Footer = () => {
  return (
    <div className="px-2 sm:px-0">
      <div className="mx-auto flex max-w-[820px] flex-col items-start justify-between gap-3 border-x border-[color:var(--border)] px-4 py-6 text-[12px] text-[color:var(--text-muted)] sm:flex-row sm:items-center">
        <span>© {new Date().getFullYear()} Rounak Kumar Gupta</span>
        <div className="flex flex-wrap gap-4">
          {socials.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="underline-grow transition-colors hover:text-[color:var(--text)]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
