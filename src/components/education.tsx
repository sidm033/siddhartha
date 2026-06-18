'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, Star, BookOpen, Building2 } from 'lucide-react'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-bg" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Decorative glow for IIT section */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/5 rounded-full blur-[150px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-brand-primary font-mono text-sm mb-3 tracking-wider">05 — EDUCATION</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 tracking-tight">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        {/* IIT Roorkee - Featured */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative mb-8"
        >
          <div className="group relative p-8 sm:p-10 rounded-3xl border border-brand-primary/20 bg-gradient-to-br from-brand-primary/[0.06] to-brand-secondary/[0.03] overflow-hidden">
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-[-1px] rounded-3xl bg-gradient-to-r from-brand-primary/30 via-brand-secondary/30 to-brand-accent/30 animate-border-glow" />
            </div>

            {/* Badge */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6, type: 'spring' }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-lg shadow-brand-primary/20"
              >
                <Award size={32} className="text-white" />
              </motion.div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Star size={16} className="text-yellow-400" />
                <span className="text-xs font-bold text-yellow-400/80 uppercase tracking-wider">
                  Government of India Certified
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 pr-20 sm:pr-24">
                Executive Post Graduate Certification in Artificial Intelligence and Machine Learning
              </h3>

              <div className="flex flex-wrap items-center gap-4 mt-4 mb-6">
                <div className="flex items-center gap-2 text-brand-primary">
                  <Building2 size={16} />
                  <span className="font-semibold">IIT Roorkee</span>
                </div>
                <div className="flex items-center gap-2 text-white/50">
                  <BookOpen size={16} />
                  <span className="text-sm">Department of Science & Technology</span>
                </div>
              </div>

              <p className="text-white/50 max-w-2xl leading-relaxed mb-8">
                Comprehensive program covering Machine Learning, Deep Learning, Natural Language Processing,
                Computer Vision, Reinforcement Learning, and AI system design. Backed by the Government of India&apos;s
                Department of Science & Technology.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Machine Learning', icon: '🧠' },
                  { label: 'Deep Learning', icon: '🔬' },
                  { label: 'NLP', icon: '💬' },
                  { label: 'Computer Vision', icon: '👁️' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.06] text-center hover:border-brand-primary/20 transition-all duration-300"
                  >
                    <span className="text-2xl block mb-2">{item.icon}</span>
                    <span className="text-xs text-white/60 font-medium">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* B.Tech */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <div className="group p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 flex items-center gap-6">
            <div className="w-14 h-14 rounded-xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap size={28} className="text-brand-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">B.Tech in Computer Science & Engineering</h3>
              <p className="text-sm text-brand-accent font-medium mt-1">Narula Institute of Technologies</p>
              <p className="text-xs text-white/30 mt-1">2014 — 2016</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
