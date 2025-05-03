"use client";

import { motion } from "framer-motion";

export default function Tagline() {
  return (
    <motion.div
      className="flex justify-center gap-5 mt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.5 }}
    >
      <blockquote className="text-lg text-center italic text-primetime mt-8">
        “Faith, focus, and fresh code.”
      </blockquote>
    </motion.div>
  );
}
