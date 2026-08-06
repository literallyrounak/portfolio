import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const HOVER_SELECTOR = 'a, button, [data-cursor-hover]';
const MotionDiv = motion.div;

const Cursor = () => {
  const [enabled] = useState(() => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const leadX = useSpring(x, { stiffness: 900, damping: 45, mass: 0.2 });
  const leadY = useSpring(y, { stiffness: 900, damping: 45, mass: 0.2 });
  const ghostX = useSpring(x, { stiffness: 160, damping: 22, mass: 0.6 });
  const ghostY = useSpring(y, { stiffness: 160, damping: 22, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add('custom-cursor');

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHovering(Boolean(e.target.closest(HOVER_SELECTOR)));
    };

    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.classList.remove('custom-cursor');
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <MotionDiv
        className="pointer-events-none fixed left-0 top-0 z-[999] rounded-full"
        style={{
          x: ghostX,
          y: ghostY,
          translateX: '-50%',
          translateY: '-50%',
          width: hovering ? 34 : 24,
          height: hovering ? 34 : 24,
          border: '1px solid var(--accent)',
          opacity: hovering ? 0.9 : 0.5,
          transition: 'width 0.25s ease, height 0.25s ease, opacity 0.25s ease',
        }}
      />
      <MotionDiv
        className="pointer-events-none fixed left-0 top-0 z-[999] rounded-full"
        style={{
          x: leadX,
          y: leadY,
          translateX: '-50%',
          translateY: '-50%',
          width: hovering ? 4 : 6,
          height: hovering ? 4 : 6,
          backgroundColor: hovering ? 'var(--accent)' : 'var(--text)',
          transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
        }}
      />
    </>
  );
};

export default Cursor;