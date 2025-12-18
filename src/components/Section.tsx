import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

const Section = ({ children, className = "", id, delay = 0 }: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`relative w-full max-w-7xl mx-auto px-6 py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;
