"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center">
        <motion.div
          className="text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          TK
        </motion.div>
        <motion.div
          className="w-64 h-2 bg-white/30 rounded-full overflow-hidden mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 256 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <motion.div
            className="w-full h-full bg-white rounded-full"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  )
}

