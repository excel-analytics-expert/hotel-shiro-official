'use client'

import { useEffect, useRef } from 'react'

/**
 * Continuous per-section reveal factor (--reveal 0..1) driven by scroll.
 * Excludes the hero (#home) so the top image remains unchanged.
 */
export default function ScrollReveal() {
  const raf = useRef<number | null>(null)
  const enabled = useRef(true)
  const sectionsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    enabled.current = !reduce

    // pick all sections inside main, excluding the hero (#home)
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section'))
      .filter(s => s.id !== 'home')
    sectionsRef.current = sections

    // Mark sections to be animated
    sections.forEach((el) => {
      el.classList.add('reveal-section')
      // initialize
      el.style.setProperty('--reveal', '0')
    })

    const update = () => {
      if (!enabled.current) {
        sections.forEach((el) => el.style.setProperty('--reveal', '1'))
        return
      }

      const vh = window.innerHeight
      const viewportCenter = vh / 2
      const smoothing = Math.max(320, Math.min(0.9 * vh, 900)) // clamp range for nicer feel

      for (const el of sectionsRef.current) {
        const rect = el.getBoundingClientRect()
        const sectionCenter = rect.top + rect.height / 2
        const distance = Math.abs(sectionCenter - viewportCenter)
        // normalized distance (0 near center -> 1 far away)
        const normDist = Math.min(1, distance / smoothing)
        // reveal progress 0..1 (0 far, 1 centered)
        const progress = 1 - normDist
        el.style.setProperty('--reveal', progress.toFixed(3))
      }
    }

    const onScroll = () => {
      if (raf.current) cancelAnimationFrame(raf.current)
      raf.current = requestAnimationFrame(update)
    }

    // Initial pass
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return null
}
