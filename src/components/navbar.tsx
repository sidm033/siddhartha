'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Command } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#ai-lab', label: 'AI Lab' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ onCommandOpen }: { onCommandOpen: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-bg/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        <a href="#home" className="relative group">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-brand-primary">S</span>
            <span className="text-brand-text/90">M</span>
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-brand-primary to-brand-secondary group-hover:w-full transition-all duration-300" />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onCommandOpen}
            className="ml-2 flex items-center gap-2 px-3 py-1.5 text-xs text-white/40 border border-white/10 rounded-lg hover:border-brand-primary/30 hover:text-white/60 transition-all"
          >
            <Command size={12} />
            <span>K</span>
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white/60 hover:text-white"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-bg/95 backdrop-blur-2xl border-b border-white/5"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
