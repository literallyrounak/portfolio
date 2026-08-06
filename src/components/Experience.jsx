import { ExternalLink, GitCommitHorizontal } from 'lucide-react';
import Section from './Section';
import Badge from './Badge';
import { contributions } from '../data/experience';

const Experience = () => {
  return (
    <Section id="experience" title="Open Source">
      <div className="divide-y divide-[color:var(--border)]">
        {contributions.map((item, i) => (
          <div key={i} className="px-4 py-5 transition-colors hover:bg-[color:var(--hover-bg)]">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-[16px] font-bold">{item.project}</h3>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex shrink-0 items-center gap-1 text-[12px] text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--text)]"
                >
                  <span className="underline-grow">{item.repo}</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
            <div className="font-mono-ui mt-3 flex items-start gap-2 rounded-md border border-[color:var(--badge-border)] bg-[color:var(--badge-bg)] px-3 py-2 text-[13px] leading-relaxed text-[color:var(--text)]">
              <GitCommitHorizontal size={14} className="mt-[3px] shrink-0 text-[color:var(--accent)]" />
              <span>{item.description}</span>
            </div>
            {item.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag} text={tag} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;