import { Folder } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8 md:px-0 md:py-16">
      <h1 className="mb-8 flex items-center gap-3 text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-text">
        <Folder size={28} className="text-accent" />
        <span>Projects</span>
      </h1>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      ) : (
        <p className="text-subtext1 font-mono text-sm">No projects published yet.</p>
      )}
    </div>
  );
};

export default Projects;

