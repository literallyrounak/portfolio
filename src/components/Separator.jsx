const Separator = () => {
  return (
    <div
      className="h-5 w-full border-b border-[color:var(--border)]"
      style={{
        backgroundImage:
          'repeating-linear-gradient(315deg, var(--border) 0, var(--border) 1px, transparent 0, transparent 50%)',
        backgroundSize: '9px 9px',
        opacity: 0.6,
      }}
    />
  );
};

export default Separator;
