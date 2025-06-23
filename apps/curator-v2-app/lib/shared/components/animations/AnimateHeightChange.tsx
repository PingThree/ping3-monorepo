'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { PropsWithChildren } from 'react'
import useMeasure from 'react-use-measure'

export function AnimateHeightChange({ children, ...rest }: PropsWithChildren) {
  const [ref, { height }] = useMeasure()

  return (
    <motion.div animate={{ height: height || 'auto ' }}>
      <AnimatePresence mode="wait" initial={false}>
        <div ref={ref} {...rest}>
          {children}
        </div>
      </AnimatePresence>
    </motion.div>
  )
}
