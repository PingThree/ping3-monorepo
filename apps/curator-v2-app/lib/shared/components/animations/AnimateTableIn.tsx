'use client'

import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

export function AnimateTableIn({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 1.3,
        ease: 'easeOut',
      }}
      className="flex flex-col gap-4"
      style={{
        willChange: 'opacity, transform, filter',
        backfaceVisibility: 'hidden',
      }}
    >
      {children}
    </motion.div>
  )
}
