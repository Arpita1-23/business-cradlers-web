import { useEffect, useRef } from 'react'

export default function HeroCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []
    let mouse = { x: null, y: null }

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    })
    canvas.addEventListener('mouseleave', () => {
      mouse.x = null
      mouse.y = null
    })

    const PARTICLE_COUNT = 120
    const CONNECTION_DISTANCE = 150
    const MOUSE_DISTANCE = 180

    const TECH_LABELS = ['React', 'Flutter', 'Django', 'AI', 'API', 'Cloud', 'SQL', 'JS', 'Python', 'Git', 'Node', 'CSS', 'ML', 'REST', 'AWS']

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.z = Math.random() * 2 + 0.5
        this.vx = (Math.random() - 0.5) * 0.8 * this.z
        this.vy = (Math.random() - 0.5) * 0.8 * this.z
        this.radius = Math.random() * 2.5 + 1
        this.baseRadius = this.radius
        this.opacity = Math.random() * 0.6 + 0.3
        this.color = Math.random() > 0.5 ? '#b87333' : Math.random() > 0.5 ? '#c4bbb0' : '#6a9fd8'
        this.label = Math.random() > 0.6 ? TECH_LABELS[Math.floor(Math.random() * TECH_LABELS.length)] : null
        this.pulse = Math.random() * Math.PI * 2
        this.pulseSpeed = Math.random() * 0.03 + 0.01
      }
      update() {
        this.pulse += this.pulseSpeed
        this.radius = this.baseRadius + Math.sin(this.pulse) * 0.8

        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1

        if (mouse.x !== null) {
          const dx = this.x - mouse.x
          const dy = this.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MOUSE_DISTANCE) {
            const force = (MOUSE_DISTANCE - dist) / MOUSE_DISTANCE
            this.x += dx * force * 0.03
            this.y += dy * force * 0.03
          }
        }
      }
      draw() {
        ctx.save()

        const grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 3)
        grd.addColorStop(0, this.color)
        grd.addColorStop(1, 'transparent')

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.globalAlpha = this.opacity * 0.4
        ctx.fill()

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacity
        ctx.fill()

        if (this.label) {
          ctx.font = `${10 * this.z}px monospace`
          ctx.fillStyle = this.color
          ctx.globalAlpha = this.opacity * 0.6
          ctx.fillText(this.label, this.x + this.radius + 3, this.y + 4)
        }

        ctx.restore()
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.5
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            )
            gradient.addColorStop(0, particles[i].color)
            gradient.addColorStop(1, particles[j].color)

            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = gradient
            ctx.globalAlpha = opacity
            ctx.lineWidth = 0.8
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }

        if (mouse.x !== null) {
          const dx = particles[i].x - mouse.x
          const dy = particles[i].y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MOUSE_DISTANCE) {
            const opacity = (1 - dist / MOUSE_DISTANCE) * 0.6
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = '#b87333'
            ctx.globalAlpha = opacity
            ctx.lineWidth = 1
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85
      }}
    />
  )
}
