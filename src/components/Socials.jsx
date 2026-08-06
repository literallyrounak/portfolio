import Section from './Section';
import { socials } from '../data/site';

const Socials = () => {
  return (
    <Section id="socials" title="Elsewhere">
      <div className="grid grid-cols-2 divide-x divide-y divide-[color:var(--border)] sm:grid-cols-4 sm:divide-y-0">
        {socials.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-start gap-2 px-4 py-4 transition-colors hover:bg-[color:var(--hover-bg)]"
            >
              <Icon size={16} className="text-[color:var(--text-muted)] transition-colors group-hover:text-[color:var(--text)]" strokeWidth={1.75} />
              <span className="underline-grow text-[13px] font-medium">{item.label}</span>
            </a>
          );
        })}
      </div>
    </Section>
  );
};

export default Socials;
