const images = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', { eager: true });

const ProjectMockup = ({ project }) => {
  const slug = project.slug;
  const imageKey = `../assets/projects/${slug}.png`;
  const imageSrc = images[imageKey]?.default || null;

  return (
    <div className="relative bg-surface0 border border-surface1 aspect-video w-full overflow-hidden rounded-xl shadow-inner group-hover:border-accent/40 transition-colors duration-200 flex items-center justify-center">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-surface1/30 text-subtext0 font-mono text-xs gap-1.5 select-none animate-pulse-subtle">
          <span className="text-xl">🖼️</span>
          <span>{project.title} screenshot</span>
        </div>
      )}
    </div>
  );
};

export default ProjectMockup;

