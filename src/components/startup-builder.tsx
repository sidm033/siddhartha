'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Brain, Store, Smartphone, LayoutDashboard, Users, Building2,
  MessageCircle, Zap, Rocket, Clock, ArrowRight,
} from 'lucide-react'
import { whatCanIBuild } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  Brain, Store, Smartphone, LayoutDashboard, Users, Building2, MessageCircle, Zap,
}

const colors = ['#2563EB', '#7C3AED', '#06B6D4', '#10B981', '#F59E0B', '#EC4899', '#EF4444', '#8B5CF6']

export default function StartupBuilder() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-bg pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Startup Builder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-brand-accent font-mono text-sm mb-3 tracking-wider">07 — CAPABILITIES</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            From Idea to<br />
            <span className="text-gradient">Production</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mb-16">
            I don&apos;t just code — I build complete products. From architecture to deployment,
            every system designed for scale from day one.
          </p>
        </motion.div>

        {/* What Can I Build */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center">
              <Rocket size={20} className="text-brand-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white">What Can I Build in 30 Days?</h3>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {whatCanIBuild.map((item, idx) => {
              const Icon = iconMap[item.icon]
              const color = colors[idx]

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + idx * 0.06, duration: 0.5 }}
                  className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-all duration-500 cursor-default overflow-hidden"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(200px circle at 50% 100%, ${color}06, transparent)`,
                    }}
                  />

                  <div className="relative z-10">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6"
                      style={{ background: `${color}12` }}
                    >
                      {Icon && <Icon size={22} style={{ color }} />}
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                    <div className="flex items-center gap-1.5 text-xs text-white/30">
                      <Clock size={12} />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Capabilities row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { title: 'MVP Development', desc: 'Rapid prototyping to production-ready products in weeks', color: '#2563EB' },
            { title: 'SaaS Platforms', desc: 'Multi-tenant architectures with billing, auth, and admin panels', color: '#7C3AED' },
            { title: 'AI Products', desc: 'LLM-powered apps with RAG, agents, and intelligent automation', color: '#EC4899' },
            { title: 'Enterprise Systems', desc: 'Scalable microservices, ERP, CRM, and workflow engines', color: '#10B981' },
          ].map((item, i) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-all duration-500"
            >
              <div
                className="w-1 h-8 rounded-full mb-4"
                style={{ background: item.color }}
              />
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">{item.title}</h4>
              <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
