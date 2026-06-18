'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight, Home, User, Code2, Briefcase, FolderOpen, FlaskConical, Mail, GraduationCap, X } from 'lucide-react'

const commands = [
  { label: 'Home', section: 'Navigation', icon: Home, href: '#home' },
  { label: 'About Me', section: 'Navigation', icon: User, href: '#about' },
  { label: 'Skills & Tech', section: 'Navigation', icon: Code2, href: '#skills' },
  { label: 'Experience', section: 'Navigation', icon: Briefcase, href: '#experience' },
  { label: 'Projects', section: 'Navigation', icon: FolderOpen, href: '#projects' },
  { label: 'AI Lab', section: 'Navigation', icon: FlaskConical, href: '#ai-lab' },
  { label: 'Education', section: 'Navigation', icon: GraduationCap, href: '#education' },
  { label: 'Contact', section: 'Navigation', icon: Mail, href: '#contact' },
]

export default function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)

  const filtered = useMemo(() =>
    commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase())),
    [query]
  )

  const execute = useCallback((cmd: typeof commands[0]) => {
    onClose()
    setQuery('')
    const el = document.querySelector(cmd.href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }, [onClose])

  useEffect(() => {
    if (!open) return
    setQuery('')
    setSelected(0)

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key === 'ArrowDown') { e.preventDefault(); setSelected((s) => Math.min(s + 1, filtered.length - 1)) }
      if (e.key === 'ArrowUp') { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)) }
      if (e.key === 'Enter' && filtered[selected]) { execute(filtered[selected]) }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, filtered, selected, onClose, execute])

  useEffect(() => { setSelected(0) }, [query])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[61] w-[520px] max-w-[calc(100vw-48px)] rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50"
            style={{ background: 'rgba(17, 24, 39, 0.95)', backdropFilter: 'blur(20px)' }}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06]">
              <Search size={18} className="text-white/30" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search commands..."
                className="flex-1 bg-transparent text-sm text-white placeholder-white/20 outline-none"
              />
              <button onClick={onClose} className="text-xs text-white/20 border border-white/10 px-2 py-0.5 rounded">
                ESC
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[300px] overflow-y-auto py-2">
              {filtered.length === 0 ? (
                <p className="px-5 py-8 text-center text-sm text-white/20">No results found</p>
              ) : (
                filtered.map((cmd, i) => (
                  <button
                    key={cmd.label}
                    onClick={() => execute(cmd)}
                    onMouseEnter={() => setSelected(i)}
                    className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${
                      i === selected ? 'bg-brand-primary/10' : 'hover:bg-white/[0.03]'
                    }`}
                  >
                    <cmd.icon size={16} className={i === selected ? 'text-brand-primary' : 'text-white/30'} />
                    <span className={`text-sm font-medium flex-1 ${i === selected ? 'text-white' : 'text-white/60'}`}>
                      {cmd.label}
                    </span>
                    {i === selected && <ArrowRight size={14} className="text-brand-primary" />}
                  </button>
                ))
              )}
            </div>

            <div className="px-5 py-3 border-t border-white/[0.06] flex items-center justify-between">
              <div className="flex gap-3 text-[10px] text-white/20">
                <span>↑↓ Navigate</span>
                <span>↵ Open</span>
                <span>Esc Close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
