import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import ProjectMockup from './ProjectMockup';
import ProjectTags from './ProjectTags';

const MotionDiv = motion.div;

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const ProjectCard = ({ project, index = 0 }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="border-surface1 bg-surface0 hover:border-accent/40 hover:-translate-y-1.5 group flex flex-col justify-between space-y-4 rounded-2xl border p-4 shadow-sm transition-all duration-200"
    >
      <div className="space-y-3.5">
        <Link to={`/projects/${project.slug}`} className="block overflow-hidden rounded-xl">
          <ProjectMockup project={project} />
        </Link>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-3">
            <Link to={`/projects/${project.slug}`} className="block group/title">
              <h2 className="text-text group-hover/title:text-accent font-heading text-lg font-bold tracking-tight transition-colors flex items-center gap-1">
                <span>{project.title}</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover/title:opacity-100 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all duration-200 text-accent" />
              </h2>
            </Link>
            <span className="text-subtext0 font-mono text-[10px] whitespace-nowrap">
              {formatDate(project.date)}
            </span>
          </div>
          <p className="text-subtext1 line-clamp-2 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      <div className="space-y-3.5 pt-1">
        <ProjectTags tags={project.tech} />

        <div className="border-t border-surface1/60 pt-3 flex items-center justify-between">
          <Link
            to={`/projects/${project.slug}`}
            className="text-subtext1 hover:text-text font-heading text-xs font-semibold flex items-center gap-1 transition-colors"
          >
            Read details
          </Link>
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtext0 hover:text-accent p-1 transition-colors"
              title="GitHub Repository"
            >
              <Github size={15} />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-subtext0 hover:text-accent p-1 transition-colors"
                title="Live Demo"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default ProjectCard;

