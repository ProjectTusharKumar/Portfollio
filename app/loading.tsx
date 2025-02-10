"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center">
        <motion.div
          className="text-4xl font-bold text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          TK
        </motion.div>
        <motion.div
          className="w-48 h-1 bg-muted rounded-full overflow-hidden mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 192 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="w-full h-full bg-primary rounded-full" />
        </motion.div>
      </div>
    </div>
  )
}

