const Badge = ({ text }) => {
  return (
    <span className="font-mono-ui inline-block whitespace-nowrap rounded-md border border-[color:var(--badge-border)] bg-[color:var(--badge-bg)] px-2.5 py-1 text-[11px] leading-none text-[color:var(--text-secondary)]">
      {text}
    </span>
  );
};

export default Badge;
