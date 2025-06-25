'use client'

import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

export function AnimateTextInUp({ as, children }: PropsWithChildren & { as?: string }) {
  const MotionComponent = motion(as || 'p')

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3, ease: 'easeOut' }}
      style={{
        willChange: 'opacity, transform',
        backfaceVisibility: 'hidden',
      }}
      className="text-2xl font-thin text-center text-black/50 dark:text-white/50"
    >
      {children}
    </MotionComponent>
  )
}
