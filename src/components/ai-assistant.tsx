'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react'
import { aiResponses } from '@/lib/data'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const suggestions = [
  'Who is Siddhartha?',
  'Show AI experience',
  'Show Flutter projects',
  'Why should we hire him?',
]

function getAIResponse(input: string): string {
  const lower = input.toLowerCase()
  if (lower.includes('who') || lower.includes('about') || lower.includes('siddhartha')) return aiResponses.who
  if (lower.includes('flutter') || lower.includes('mobile')) return aiResponses.flutter
  if (lower.includes('ai') || lower.includes('ml') || lower.includes('machine') || lower.includes('openai') || lower.includes('claude') || lower.includes('gpt')) return aiResponses.ai
  if (lower.includes('aws') || lower.includes('cloud') || lower.includes('lambda')) return aiResponses.aws
  if (lower.includes('problem') || lower.includes('solve') || lower.includes('build') || lower.includes('what can')) return aiResponses.problem
  if (lower.includes('hire') || lower.includes('why') || lower.includes('should')) return aiResponses.hire
  return aiResponses.default
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Siddhartha's AI assistant. Ask me about his skills, projects, AI expertise, or why you should work with him." },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function handleSend(text: string) {
    const q = text.trim()
    if (!q) return

    setMessages((prev) => [...prev, { role: 'user', content: q }])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'assistant', content: getAIResponse(q) }])
      setTyping(false)
    }, 800 + Math.random() * 600)
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white flex items-center justify-center shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 transition-all duration-300 hover:scale-105 ${
          open ? 'hidden' : ''
        }`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[540px] max-h-[calc(100vh-48px)] rounded-2xl overflow-hidden flex flex-col border border-white/10 shadow-2xl shadow-black/40"
            style={{ background: 'rgba(3, 7, 18, 0.95)', backdropFilter: 'blur(20px)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                  <Sparkles size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">AI Assistant</p>
                  <p className="text-[10px] text-white/30">Ask about Siddhartha</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="p-2 text-white/30 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center ${
                    msg.role === 'assistant' ? 'bg-brand-primary/20' : 'bg-white/10'
                  }`}>
                    {msg.role === 'assistant' ? <Bot size={14} className="text-brand-primary" /> : <User size={14} className="text-white/60" />}
                  </div>
                  <div className={`max-w-[80%] p-3 rounded-xl text-sm leading-relaxed ${
                    msg.role === 'assistant'
                      ? 'bg-white/[0.04] text-white/70'
                      : 'bg-brand-primary/20 text-white/80'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                    <Bot size={14} className="text-brand-primary" />
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.04]">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                          className="w-1.5 h-1.5 rounded-full bg-brand-primary"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && (
              <div className="px-5 pb-2 flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    className="px-3 py-1.5 text-xs font-medium text-white/40 bg-white/[0.04] rounded-full border border-white/[0.06] hover:text-brand-primary hover:border-brand-primary/20 transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-4 py-3 border-t border-white/[0.06]">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(input) }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about skills, projects, AI..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-sm text-white placeholder-white/20 outline-none focus:border-brand-primary/30 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center text-white disabled:opacity-30 hover:bg-brand-primary/80 transition-all"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
