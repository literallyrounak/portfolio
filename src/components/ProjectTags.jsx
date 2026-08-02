const ProjectTags = ({ tags }) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex max-h-8 flex-wrap items-center gap-1.5 overflow-hidden pt-1 text-[10px] font-mono">
      {tags.map((tag) => (
        <span
          key={tag}
          className="bg-surface1/55 border border-surface2/30 text-subtext1 rounded-md px-2 py-0.5 select-none"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default ProjectTags;

