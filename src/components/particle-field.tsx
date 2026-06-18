'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  connections: number
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    const particleCount = Math.min(Math.floor((width * height) / 12000), 120)

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas!.width = width
      canvas!.height = height
    }
    resize()

    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      connections: 0,
    }))

    function onMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)

      const particles = particlesRef.current
      const mouse = mouseRef.current
      const connectionDistance = 150
      const mouseRadius = 200

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.connections = 0

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < mouseRadius) {
          const force = (mouseRadius - dist) / mouseRadius
          p.vx += dx * force * 0.0008
          p.vy += dy * force * 0.0008
        }

        p.vx *= 0.99
        p.vy *= 0.99

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const ddx = p.x - p2.x
          const ddy = p.y - p2.y
          const d = Math.sqrt(ddx * ddx + ddy * ddy)

          if (d < connectionDistance) {
            p.connections++
            p2.connections++
            const alpha = (1 - d / connectionDistance) * 0.15

            const mouseDistToLine = Math.min(
              Math.sqrt((mouse.x - p.x) ** 2 + (mouse.y - p.y) ** 2),
              Math.sqrt((mouse.x - p2.x) ** 2 + (mouse.y - p2.y) ** 2)
            )
            const isNearMouse = mouseDistToLine < mouseRadius

            if (isNearMouse) {
              ctx.strokeStyle = `rgba(37, 99, 235, ${alpha * 2})`
            } else {
              ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`
            }

            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }

        const nearMouse = dist < mouseRadius
        const glow = nearMouse ? Math.max(0, 1 - dist / mouseRadius) : 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size + glow * 2, 0, Math.PI * 2)

        if (nearMouse) {
          ctx.fillStyle = `rgba(37, 99, 235, ${p.opacity + glow * 0.5})`
          ctx.shadowColor = 'rgba(37, 99, 235, 0.5)'
          ctx.shadowBlur = 10
        } else {
          ctx.fillStyle = `rgba(148, 163, 184, ${p.opacity})`
          ctx.shadowColor = 'transparent'
          ctx.shadowBlur = 0
        }

        ctx.fill()
        ctx.shadowBlur = 0
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', resize, { passive: true })
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: 'none' }}
    />
  )
}
