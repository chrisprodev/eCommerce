const quickEaseIn = [0.25, 0.66, 0.33, 0.95];

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const fadeUp = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: quickEaseIn,
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};
