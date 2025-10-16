export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      delay: 0.2
    }
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      delay: 0.8
    }
  }
};

export const itemVariants2 = {
  hidden: { opacity: 0, y: 50 }, // Start 50px below (more dramatic)
  visible: {
    opacity: 1,
    y: 0, // Move up to final position
    transition: { duration: 0.5, ease: 'easeInOut', delay: 0.8 }
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.5, ease: 'easeInOut', delay: 0.8 }
  }
};

export const titleVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 }
};

export const subtitleVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 }
};

export const textVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 }
};

export const buttonVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 }
};

export const imageVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 }
};
