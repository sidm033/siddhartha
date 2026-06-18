'use client'

import { motion } from 'framer-motion'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 0.6 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-brand-bg flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-black tracking-tight mb-2">
            <span className="text-brand-primary">S</span>
            <span className="text-brand-text/80">M</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs text-white/20 tracking-[4px] uppercase"
          >
            Loading
          </motion.p>
        </motion.div>

        <div className="w-48 h-[2px] bg-white/[0.06] rounded-full mt-6 mx-auto overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"
          />
        </div>
      </div>
    </motion.div>
  )
}
