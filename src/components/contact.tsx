'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/lib/data'

const socials = [
  { name: 'GitHub', url: siteConfig.github, icon: 'GH' },
  { name: 'LinkedIn', url: siteConfig.linkedin, icon: 'LI' },
  { name: 'StackOverflow', url: siteConfig.stackoverflow, icon: 'SO' },
  { name: 'Twitter', url: siteConfig.twitter, icon: 'TW' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-surface/30" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/5 rounded-full blur-[150px]" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-brand-primary font-mono text-sm mb-3 tracking-wider">08 — CONTACT</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Let&apos;s Build<br />
            <span className="text-gradient">Something Great</span>
          </h2>
          <p className="text-lg text-white/40 max-w-lg mx-auto mb-12">
            I&apos;m open to new opportunities, freelance projects, and collaborations.
            Whether you need a full product built or AI expertise — let&apos;s talk.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="grid sm:grid-cols-3 gap-4 mb-12"
        >
          <a
            href={`mailto:${siteConfig.email}`}
            className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-brand-primary/20 transition-all duration-500"
          >
            <Mail size={24} className="text-brand-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-xs text-white/30 uppercase tracking-wider mb-1">Email</p>
            <p className="text-sm text-white/70 font-medium">{siteConfig.email}</p>
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-brand-secondary/20 transition-all duration-500"
          >
            <Phone size={24} className="text-brand-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-xs text-white/30 uppercase tracking-wider mb-1">Phone</p>
            <p className="text-sm text-white/70 font-medium">(+91) 9874440732</p>
          </a>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <MapPin size={24} className="text-brand-accent mx-auto mb-3" />
            <p className="text-xs text-white/30 uppercase tracking-wider mb-1">Location</p>
            <p className="text-sm text-white/70 font-medium">India</p>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center gap-3"
        >
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white/50 hover:text-white hover:bg-white/[0.06] hover:border-brand-primary/20 transition-all duration-300"
            >
              <span className="text-xs font-bold font-mono">{s.icon}</span>
              <span className="text-sm font-medium hidden sm:inline">{s.name}</span>
              <ArrowUpRight size={14} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
            </a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <a
            href={`mailto:${siteConfig.email}?subject=Let's%20Work%20Together`}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-brand-primary text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/25 hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            <Mail size={20} className="relative z-10" />
            <span className="relative z-10">Send Me an Email</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
