import { Image } from 'lucide-react';

const Pics = () => {
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-8 md:px-0 md:py-16">
      <h1 className="mb-8 flex items-center gap-3 text-3xl font-heading font-extrabold tracking-tight text-text">
        <Image size={28} className="text-accent" />
        <span>Pics</span>
      </h1>
      <p className="text-subtext1 font-mono text-sm">No pics uploaded yet.</p>
    </div>
  );
};

export default Pics;

