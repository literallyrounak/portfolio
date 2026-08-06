const Section = ({ id, title, children, noPadding }) => {
  return (
    <div id={id} className="scroll-m-24 border-b border-[color:var(--border)] px-2 sm:px-0">
      {title && (
        <h2 className="border-b border-[color:var(--border)]">
          <div className="mx-auto max-w-[820px] border-x border-[color:var(--border)] px-4 py-3 text-[24px] font-bold tracking-tight">
            {title}
          </div>
        </h2>
      )}
      <div className={`mx-auto max-w-[820px] border-x border-[color:var(--border)] ${noPadding ? '' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Section;
