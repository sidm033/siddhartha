'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Bot, Database, MessageSquare, Workflow, Eye, Brain } from 'lucide-react'
import { aiLabItems } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  Bot, Database, MessageSquare, Workflow, Eye, Brain,
}

export default function AILab() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="ai-lab" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-surface/50" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* AI glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[150px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-brand-secondary font-mono text-sm mb-3 tracking-wider">06 — AI LAB</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            AI Research <span className="text-gradient">Lab</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mb-4">
            Building production AI systems — not just prompts. From intelligent agents to computer vision,
            backed by IIT Roorkee certification.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 mb-16">
            <Brain size={14} className="text-brand-secondary" />
            <span className="text-xs font-semibold text-brand-secondary">IIT Roorkee PG in AI/ML</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {aiLabItems.map((item, idx) => {
            const Icon = iconMap[item.icon]

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(400px circle at 50% 100%, ${item.color}08, transparent)`,
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6"
                    style={{ background: `${item.color}12` }}
                  >
                    {Icon && <Icon size={24} style={{ color: item.color }} />}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">{item.description}</p>

                  {/* Animated dots */}
                  <div className="flex gap-1 mt-4">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: item.color }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-16 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
        >
          <h3 className="text-lg font-bold text-white mb-8 text-center">AI System Architecture</h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { name: 'Flutter / React App', color: '#2563EB' },
              { name: 'API Gateway', color: '#7C3AED' },
              { name: 'Node.js / FastAPI', color: '#10B981' },
              { name: 'AI Orchestrator', color: '#EC4899' },
              { name: 'LLM (OpenAI / Claude)', color: '#F59E0B' },
              { name: 'Vector DB / RAG', color: '#06B6D4' },
            ].map((node, i) => (
              <div key={node.name} className="flex items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="px-5 py-3 rounded-xl text-sm font-mono font-medium border hover:scale-105 transition-transform"
                  style={{
                    borderColor: `${node.color}30`,
                    background: `${node.color}08`,
                    color: node.color,
                  }}
                >
                  {node.name}
                </motion.div>
                {i < 5 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: 32 } : {}}
                    transition={{ delay: 0.8 + i * 0.1 + 0.05 }}
                    className="hidden sm:block h-[1px] bg-white/10"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
