'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, ExternalLink, FlaskConical, FileText, Calendar } from 'lucide-react'
import ParticleField from './particle-field'
import { heroTypingPhrases } from '@/lib/data'

function TypeWriter() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    const current = heroTypingPhrases[phraseIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setText(current.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setPhraseIndex((phraseIndex + 1) % heroTypingPhrases.length)
        }
      }
    }, isDeleting ? 30 : 80)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex])

  return (
    <span className="font-mono">
      <span className="text-white/40">Building </span>
      <span className="text-brand-primary">{text}</span>
      <span className="animate-pulse text-brand-primary">|</span>
    </span>
  )
}

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const counted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          const duration = 2000
          const start = performance.now()
          function tick(now: number) {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * value))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref}>{count}{suffix}</span>
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-brand-bg" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <ParticleField />

      {/* Gradient orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '3s' }} />

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-0"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm font-medium text-brand-primary">Available for opportunities</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6">
          <span className="text-brand-text">Siddhartha</span>
          <br />
          <span className="text-gradient">Mukherjee</span>
        </motion.h1>

        {/* Title */}
        <motion.p variants={fadeUp} className="text-lg sm:text-xl text-white/40 font-medium mb-4 tracking-wide">
          Senior Full Stack & AI Engineer
        </motion.p>

        {/* Typing */}
        <motion.div variants={fadeUp} className="text-lg sm:text-xl mb-8 h-8">
          <TypeWriter />
        </motion.div>

        {/* Description */}
        <motion.p variants={fadeUp} className="text-base sm:text-lg text-white/50 max-w-2xl leading-relaxed mb-10">
          I build AI products, SaaS platforms, mobile applications, cloud systems, and enterprise solutions from idea to production.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-16">
          <a href="#projects" className="group relative inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/25 hover:-translate-y-0.5">
            <span className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            <ExternalLink size={18} className="relative z-10" />
            <span className="relative z-10">View Projects</span>
          </a>
          <a href="#ai-lab" className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white/80 font-semibold rounded-xl hover:bg-white/5 hover:border-brand-primary/30 transition-all duration-300 hover:-translate-y-0.5">
            <FlaskConical size={18} />
            <span>Explore AI Lab</span>
          </a>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white/80 font-semibold rounded-xl hover:bg-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5">
            <Calendar size={18} />
            <span>Book Consultation</span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { value: 9, suffix: '+', label: 'Years Exp.' },
            { value: 50, suffix: '+', label: 'Projects' },
            { value: 20, suffix: '+', label: 'Mobile Apps' },
            { value: 30, suffix: '+', label: 'Web Platforms' },
            { value: 15, suffix: '+', label: 'AI Integrations' },
            { value: 100, suffix: 'K+', label: 'Users Impacted' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-brand-primary/20 transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-white/40 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} className="text-white/30" />
        </motion.div>
        <span className="text-[10px] text-white/20 tracking-[3px] uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}
