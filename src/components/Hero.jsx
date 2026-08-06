import { NAME, GITHUB_USER } from '../data/site';

const Hero = () => {
  return (
    <div id="top" className="scroll-m-24 border-b border-[color:var(--border)] px-2 sm:px-0">
      <div className="mx-auto max-w-[820px] border-x border-[color:var(--border)]">
        <div className="flex flex-col sm:flex-row">
          <div className="flex items-center justify-center border-b border-[color:var(--border)] p-6 sm:w-[180px] sm:border-b-0 sm:border-r">
            <img
              src={`https://github.com/${GITHUB_USER}.png`}
              alt={NAME}
              className="h-24 w-24 rounded-full border border-[color:var(--border)] object-cover sm:h-28 sm:w-28"
            />
          </div>
          <div className="flex-1">
            <h1 className="border-b border-[color:var(--border)] px-4 py-4 text-[28px] font-bold tracking-tight sm:text-[36px]">
              {NAME}
            </h1>
            <p className="px-4 py-3 text-[15px] text-[color:var(--text-secondary)]">
              CS student building reliable full-stack apps and backend systems.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 border-t border-[color:var(--border)] text-[13px] sm:grid-cols-3">
          <div className="border-r border-[color:var(--border)] px-4 py-3">
            <span className="text-[color:var(--text-muted)]">Focus</span>
            <p className="mt-0.5 font-medium">Backend & System Design</p>
          </div>
          <div className="border-r border-[color:var(--border)] px-4 py-3 sm:border-r">
            <span className="text-[color:var(--text-muted)]">Stack</span>
            <p className="mt-0.5 font-medium">MERN & Go</p>
          </div>
          <div className="col-span-2 border-t border-[color:var(--border)] px-4 py-3 sm:col-span-1 sm:border-t-0">
            <span className="text-[color:var(--text-muted)]">Based in</span>
            <p className="mt-0.5 font-medium">India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;