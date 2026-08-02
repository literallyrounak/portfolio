import { useParams, Link } from 'react-router-dom';
import { CalendarDays, Github, ExternalLink, ArrowLeft } from 'lucide-react';
import ProjectMockup from '../components/ProjectMockup';
import ProjectTags from '../components/ProjectTags';
import { getProject } from '../data/projects';

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <div className="mx-auto max-w-prose space-y-4 px-4 py-16 text-center md:px-0 font-mono text-sm">
        <p className="text-subtext1">Project not found.</p>
        <Link to="/projects" className="link">
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto mb-12 max-w-prose px-4 md:px-0 py-8 space-y-8">
      {/* Back button */}
      <div>
        <Link
          to="/projects"
          className="group text-subtext1 hover:text-accent font-heading text-sm font-semibold inline-flex items-center gap-1.5 transition-colors duration-200"
        >
          <ArrowLeft size={15} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
          <span>Back to projects</span>
        </Link>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-md">
        <ProjectMockup project={project} />
      </div>

      <header className="space-y-4 border-b border-surface1/60 pb-6">
        <h1 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-text">
          {project.title}
        </h1>

        <div className="text-subtext0 flex flex-wrap items-center gap-x-6 gap-y-2.5 font-mono text-xs">
          <div className="flex items-center gap-1.5">
            <CalendarDays size={14} className="text-accent" />
            <span>{formatDate(project.date)}</span>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:text-accent flex items-center gap-1.5 transition-colors"
            title="View on GitHub"
          >
            <Github size={14} className="transition-transform duration-200 group-hover:scale-110 text-accent" />
            <span>GitHub</span>
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:text-accent flex items-center gap-1.5 transition-colors"
              title="Live site"
            >
              <ExternalLink size={14} className="transition-transform duration-200 group-hover:scale-110 text-accent" />
              <span>Live Demo</span>
            </a>
          )}
        </div>

        <div className="pt-2">
          <ProjectTags tags={project.tech} />
        </div>
      </header>

      <div className="text-subtext1 space-y-6 text-base leading-relaxed font-sans">
        {project.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
};

export default ProjectDetail;
