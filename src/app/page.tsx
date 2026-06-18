'use client'

import { useState, useEffect, useCallback } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import AILab from '@/components/ai-lab'
import Education from '@/components/education'
import StartupBuilder from '@/components/startup-builder'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import AIAssistant from '@/components/ai-assistant'
import CommandPalette from '@/components/command-palette'
import LoadingScreen from '@/components/loading-screen'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [commandOpen, setCommandOpen] = useState(false)

  const openCommand = useCallback(() => setCommandOpen(true), [])
  const closeCommand = useCallback(() => setCommandOpen(false), [])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setCommandOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <Navbar onCommandOpen={openCommand} />
      <CommandPalette open={commandOpen} onClose={closeCommand} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AILab />
        <Education />
        <StartupBuilder />
        <Contact />
      </main>

      <Footer />
      <AIAssistant />
    </>
  )
}
