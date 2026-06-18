'use client'

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState, MouseEvent } from 'react'
import { Monitor, Server, Smartphone, Cloud, GitBranch, Brain, Database } from 'lucide-react'
import { skillCategories } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  Monitor, Server, Smartphone, Cloud, GitBranch, Brain, Database,
}

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })

  function onMouseMove(e: MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function SkillBar({ proficiency, delay, isInView }: { proficiency: number; delay: number; isInView: boolean }) {
  return (
    <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${proficiency}%` } : { width: 0 }}
        transition={{ duration: 1, delay: delay + 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="h-full rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary"
      />
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-surface/50 pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-brand-primary font-mono text-sm mb-3 tracking-wider">02 — SKILLS</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            Tech <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mb-16">
            Full-stack expertise spanning frontend, backend, mobile, cloud, AI, and databases. Every tool chosen for production impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.icon]
            const isExpanded = expanded === idx

            return (
              <TiltCard key={category.name} className="perspective-1000">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.08, duration: 0.6 }}
                  onClick={() => setExpanded(isExpanded ? null : idx)}
                  className={`group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] cursor-pointer transition-all duration-500 hover:bg-white/[0.04] ${
                    isExpanded ? 'border-brand-primary/30 bg-white/[0.04]' : 'hover:border-white/10'
                  }`}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(300px circle at 50% 0%, ${category.color}08, transparent)`,
                    }}
                  />

                  <div className="relative z-10">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3"
                      style={{ background: `${category.color}12` }}
                    >
                      {Icon && <Icon size={24} className="transition-colors" style={{ color: category.color }} />}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1">{category.name}</h3>
                    <p className="text-xs text-white/30 mb-4">{category.skills.length} technologies</p>

                    <div className="space-y-3">
                      {category.skills.slice(0, isExpanded ? undefined : 3).map((skill, si) => (
                        <div key={skill.name}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-white/70">{skill.name}</span>
                            <span className="text-xs text-white/30 font-mono">{skill.proficiency}%</span>
                          </div>
                          <SkillBar proficiency={skill.proficiency} delay={idx * 0.08 + si * 0.05} isInView={isInView} />
                        </div>
                      ))}
                    </div>

                    {!isExpanded && category.skills.length > 3 && (
                      <p className="text-xs text-brand-primary mt-3 font-medium">
                        +{category.skills.length - 3} more — click to expand
                      </p>
                    )}

                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 pt-4 border-t border-white/[0.06]"
                      >
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div>
                            <p className="text-lg font-bold text-white">{Math.max(...category.skills.map(s => s.years))}</p>
                            <p className="text-[10px] text-white/30 uppercase">Max Years</p>
                          </div>
                          <div>
                            <p className="text-lg font-bold text-white">{category.skills.reduce((a, s) => a + s.projects, 0)}</p>
                            <p className="text-[10px] text-white/30 uppercase">Projects</p>
                          </div>
                          <div>
                            <p className="text-lg font-bold text-white">{Math.round(category.skills.reduce((a, s) => a + s.proficiency, 0) / category.skills.length)}%</p>
                            <p className="text-[10px] text-white/30 uppercase">Avg Prof.</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </TiltCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
