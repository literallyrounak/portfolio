import { useState } from 'react';
import { ChevronDown, Star, Github, ExternalLink } from 'lucide-react';
import Badge from './Badge';
import { useRepoStars } from '../lib/useRepoStars';

const ProjectRow = ({ project, defaultOpen }) => {
  const [expanded, setExpanded] = useState(!!defaultOpen);
  const stars = useRepoStars(project.org, project.repo);

  return (
    <div className="px-4 py-5 transition-colors hover:bg-[color:var(--hover-bg)]">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-baseline justify-between gap-2 text-left"
      >
        <h3 className="underline-grow text-[17px] font-bold">{project.title}</h3>
        <span className="flex shrink-0 items-center gap-2 text-[12px] text-[color:var(--text-muted)]">
          {stars !== null && stars > 0 && (
            <span className="flex items-center gap-1">
              <Star size={12} />
              {stars}
            </span>
          )}
          {project.status === 'live' ? 'Live' : 'In progress'}
          <ChevronDown size={14} className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
        </span>
      </button>

      <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="mb-3 mt-2 text-[13px] leading-relaxed text-[color:var(--text-secondary)]">
            {project.description}
          </p>
          {project.content?.length > 0 && (
            <div className="mb-3 space-y-2 text-[13px] leading-relaxed text-[color:var(--text-secondary)]">
              {project.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}
          <div className="mb-3 flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <Badge key={tag} text={tag} />
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-[12px]">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--text)]"
            >
              <Github size={13} />
              <span className="underline-grow">Source</span>
            </a>
            {project.live && project.live !== project.github && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--text)]"
              >
                <ExternalLink size={13} />
                <span className="underline-grow">Live</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectRow;
