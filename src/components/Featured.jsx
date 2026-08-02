import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { projects, featuredSlugs } from '../data/projects';
import ProjectCard from './ProjectCard';

const Featured = () => {
  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean);

  if (featured.length === 0) return null;

  return (
    <section className="py-8">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="flex items-center gap-2.5 text-2xl font-heading font-extrabold tracking-tight md:text-3xl text-text">
          <Star size={24} className="text-accent" fill="currentColor" />
          <span>Featured Projects</span>
        </h2>
        <Link
          to="/projects"
          className="group text-accent/90 hover:text-accent font-heading text-sm font-semibold hidden items-center gap-1 sm:inline-flex"
        >
          <span>View all</span>
          <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {featured.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <Link
          to="/projects"
          className="group text-accent font-heading text-sm font-semibold inline-flex items-center gap-1"
        >
          <span>View all projects</span>
          <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
};

export default Featured;

