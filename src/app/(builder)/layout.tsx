"use client";
import { motion } from "framer-motion";
export default function BuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "100%" }}
      exit={{ opacity: 0, width: window.innerWidth }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
