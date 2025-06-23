'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function AnimatedTitle({ text, className }: { text: string; className?: string }) {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    setIsAnimated(true)
  }, [])

  return (
    <div className="relative">
      <motion.h1
        className={`font-thin text-shadow-lg text-4xl md:text-5xl text-center ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
      {isAnimated && (
        <motion.div
          className="absolute h-14 inset-0 bg-gradient-to-r from-transparent via-background/80 to-transparent dark:via-background/80 pointer-events-none"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 2, delay: 3, repeat: Infinity, repeatDelay: 10 }}
        />
      )}
    </div>
  )
}
