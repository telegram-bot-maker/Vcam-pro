import React from "react";
import { motion } from "motion/react";

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function GlassContainer({ children, className = "", id, delay = 0 }: GlassContainerProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`liquid-glass-card rounded-3xl p-6 md:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}
