'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Building2, Award, Languages, Briefcase, GraduationCap } from 'lucide-react'

const infoCards = [
  { icon: MapPin, label: 'Location', value: 'India', color: '#2563EB' },
  { icon: Building2, label: 'Current', value: 'Black Coat Technologies', color: '#7C3AED' },
  { icon: Award, label: 'Certification', value: 'IIT Roorkee — PG AI/ML', color: '#06B6D4' },
  { icon: Briefcase, label: 'Experience', value: '9+ Years Full Stack & AI', color: '#10B981' },
  { icon: GraduationCap, label: 'Education', value: 'B.Tech Computer Science', color: '#F59E0B' },
  { icon: Languages, label: 'Languages', value: 'English, Hindi, Bengali', color: '#EC4899' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-bg pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-brand-primary font-mono text-sm mb-3 tracking-wider">01 — ABOUT</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 tracking-tight">
            Engineering at the<br />
            <span className="text-gradient">intersection of AI & scale</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-white/60 leading-relaxed">
              I&apos;m a <span className="text-white font-semibold">Senior Full Stack & AI Engineer</span> with
              9+ years of experience building products that scale. From startup MVPs to enterprise platforms,
              I architect and deliver end-to-end solutions.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              I hold an <span className="text-brand-primary font-semibold">Executive Post Graduate Certification
              in AI & Machine Learning from IIT Roorkee</span>, backed by the Department of Science &
              Technology (Government of India). This formal training, combined with years of hands-on
              building, gives me a unique ability to integrate AI deeply into production systems.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              My approach: understand the problem, design the architecture, ship fast, and iterate.
              I don&apos;t just write code — I build products that solve real problems at scale.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              {['Product Thinker', 'System Architect', 'AI Builder', 'Startup Ready', 'Team Leader'].map((tag) => (
                <span key={tag} className="px-4 py-2 text-sm font-medium text-white/60 border border-white/10 rounded-full hover:border-brand-primary/30 hover:text-brand-primary transition-all duration-300 cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {infoCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="group p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-brand-primary/20 transition-all duration-500"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                  style={{ background: `${card.color}15` }}
                >
                  <card.icon size={20} style={{ color: card.color }} />
                </div>
                <p className="text-xs text-white/30 font-medium uppercase tracking-wider mb-1">{card.label}</p>
                <p className="text-sm text-white/80 font-semibold">{card.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
