'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'rotate'

interface RevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  once?: boolean
}

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  once = false,
}: RevealProps) {
  // Animações iniciais para cada direção
  const variants: Record<Direction, any> = {
    up: { opacity: 0, y: 50 },
    down: { opacity: 0, y: -50 },
    left: { opacity: 0, x: -100 },
    right: { opacity: 0, x: 100 },
    zoom: { opacity: 0, scale: 1.2 },
    rotate: { opacity: 0, rotate: -10 },
  }

  // Estado final da animação
  const finalState: Record<Direction, any> = {
    up: { opacity: 1, y: 0 },
    down: { opacity: 1, y: 0 },
    left: { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
    zoom: { opacity: 1, scale: 1 },
    rotate: { opacity: 1, rotate: 0 },
  }

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={finalState[direction]}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
