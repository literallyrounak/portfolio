import Section from './Section';
import ProjectRow from './ProjectRow';
import { projects, featuredSlugs } from '../data/projects';

const ProjectsSection = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="divide-y divide-[color:var(--border)]">
        {projects.map((project) => (
          <ProjectRow key={project.slug} project={project} defaultOpen={featuredSlugs.includes(project.slug)} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
