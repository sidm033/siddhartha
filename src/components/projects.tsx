'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowUpRight, ChevronDown, Layers, Zap, Target, BarChart3 } from 'lucide-react'
import { projects } from '@/lib/data'

function ArchitectureDiagram({ nodes, color, isVisible }: {
  nodes: { name: string; type: string }[]
  color: string
  isVisible: boolean
}) {
  return (
    <div className="flex flex-col items-center gap-1 py-4">
      {nodes.map((node, i) => (
        <div key={node.name} className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="px-4 py-2 rounded-lg text-xs font-mono font-medium border transition-all duration-300 hover:scale-105"
            style={{
              borderColor: `${color}30`,
              background: `${color}08`,
              color: `${color}`,
            }}
          >
            {node.name}
          </motion.div>
          {i < nodes.length - 1 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={isVisible ? { height: 24, opacity: 1 } : {}}
              transition={{ delay: i * 0.15 + 0.1, duration: 0.3 }}
              className="w-[1px] overflow-hidden"
              style={{ background: `${color}30` }}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-surface/50" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-brand-primary font-mono text-sm mb-3 tracking-wider">04 — WORK</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mb-16">
            End-to-end products built from idea to production. Each project is a case study in engineering excellence.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, idx) => {
            const isExpanded = expanded === idx

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.7 }}
              >
                <div
                  className={`group rounded-2xl border transition-all duration-500 overflow-hidden ${
                    isExpanded
                      ? 'bg-white/[0.04] border-white/10'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.03] hover:border-white/10'
                  }`}
                  style={isExpanded ? { borderColor: `${project.color}30` } : {}}
                >
                  {/* Header */}
                  <button
                    onClick={() => setExpanded(isExpanded ? null : idx)}
                    className="w-full text-left p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ background: project.color }}
                        />
                        <span className="text-xs font-mono text-white/30 uppercase tracking-wider">
                          {project.subtitle}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-brand-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/40 mt-2 max-w-2xl">{project.description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((t) => (
                          <span key={t} className="px-3 py-1 text-xs font-medium text-white/40 bg-white/[0.04] rounded-full border border-white/[0.06]">
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-3 py-1 text-xs font-medium text-white/30 bg-white/[0.04] rounded-full border border-white/[0.06]">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={20} className="text-white/30" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Expanded case study */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-8 border-t border-white/[0.06]">
                          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                            {[
                              { icon: Target, title: 'Problem', text: project.problem },
                              { icon: Zap, title: 'Challenge', text: project.challenge },
                              { icon: Layers, title: 'Solution', text: project.solution },
                              { icon: BarChart3, title: 'Impact', text: project.impact },
                            ].map((item, i) => (
                              <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="space-y-3"
                              >
                                <div className="flex items-center gap-2">
                                  <item.icon size={16} style={{ color: project.color }} />
                                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">{item.title}</h4>
                                </div>
                                <p className="text-sm text-white/50 leading-relaxed">{item.text}</p>
                              </motion.div>
                            ))}
                          </div>

                          <div className="grid md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-white/[0.06]">
                            {/* Features */}
                            <div>
                              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Key Features</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.features.map((f) => (
                                  <span
                                    key={f}
                                    className="px-3 py-1.5 text-xs font-medium rounded-lg border"
                                    style={{
                                      color: project.color,
                                      borderColor: `${project.color}25`,
                                      background: `${project.color}08`,
                                    }}
                                  >
                                    {f}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Architecture */}
                            <div>
                              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Architecture</h4>
                              <ArchitectureDiagram
                                nodes={project.architecture}
                                color={project.color}
                                isVisible={isExpanded}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
