'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, ArrowRight } from 'lucide-react'
import { timeline } from '@/lib/data'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-bg pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-brand-primary font-mono text-sm mb-3 tracking-wider">03 — JOURNEY</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 tracking-tight">
            Career <span className="text-gradient">Timeline</span>
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.06]">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent"
            />
          </div>

          <div className="space-y-16">
            {timeline.map((item, idx) => {
              const isLeft = idx % 2 === 0

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    isLeft ? '' : 'md:direction-rtl'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className="w-[18px] h-[18px] rounded-full bg-brand-bg border-[3px] border-brand-primary shadow-lg shadow-brand-primary/20">
                      <div className="w-full h-full rounded-full bg-brand-primary/30 animate-ping" />
                    </div>
                  </div>

                  {/* Year badge */}
                  <div className={`hidden md:flex ${isLeft ? 'justify-end' : 'justify-start md:order-2'}`}>
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-primary/10 border border-brand-primary/20">
                      <span className="text-2xl font-bold font-mono text-brand-primary">{item.year}</span>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`ml-16 md:ml-0 ${isLeft ? 'md:order-1' : ''}`} style={{ direction: 'ltr' }}>
                    <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-brand-primary/20 transition-all duration-500">
                      <span className="md:hidden text-sm font-mono text-brand-primary font-bold">{item.year}</span>
                      <h3 className="text-xl font-bold text-white mt-1 mb-1 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                      <p className="text-sm text-brand-primary/80 font-medium flex items-center gap-2 mb-3">
                        <Briefcase size={14} />
                        {item.company}
                      </p>
                      <p className="text-sm text-white/50 leading-relaxed mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1 text-xs font-medium text-white/50 bg-white/[0.04] rounded-full border border-white/[0.06]">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
