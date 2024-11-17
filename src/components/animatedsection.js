// components/AnimatedSection.js
"use client";

import { motion } from "framer-motion";

export function AnimatedSection({ children }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-blue-600 text-white py-20 text-center"
    >
      {children}
    </motion.section>
  );
}
