import { motion } from 'framer-motion';

export default function Animation({ children }) {
  return (
    <motion.div
      initial={{ scaleX: 0, rotateX: 0 }}
      animate={{ scaleX: 1, rotateX: [45, 0] }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}