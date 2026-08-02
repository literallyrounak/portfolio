import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

const PageTransition = ({ children }) => (
  <MotionDiv
    variants={variants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.22, ease: 'easeOut' }}
  >
    {children}
  </MotionDiv>
);

export default PageTransition;
