"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export default function MouseEffects() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const raf = useRef<number | null>(null)
  const enabledRef = useRef(true)
  const lastMoveTime = useRef(0)

  const handleMove = useCallback((e: MouseEvent) => {
    if (!enabledRef.current) return

    const now = Date.now()
    if (now - lastMoveTime.current < 16) return // Throttle to ~60fps
    lastMoveTime.current = now

    // 初回マウス移動で展開
    document.body.classList.remove("collapsed")

    if (raf.current) cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => {
      const x = e.clientX
      const y = e.clientY
      setPos({ x, y })
      const mx = Math.max(0, Math.min(1, x / window.innerWidth))
      const my = Math.max(0, Math.min(1, y / window.innerHeight))
      const root = document.documentElement
      root.style.setProperty("--mx", mx.toString())
      root.style.setProperty("--my", my.toString())
    })
  }, [])

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const finePointer = window.matchMedia("(pointer: fine)").matches
    const isMobile = window.innerWidth < 768 || "ontouchstart" in window
    const isLowPerformance = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4

    enabledRef.current = !prefersReduced && finePointer && !isMobile && !isLowPerformance

    // 初期状態は「折りたたみ」
    document.body.classList.add("collapsed")

    // キーボードなどでも2秒後に自動展開（アクセシビリティ）
    const auto = setTimeout(() => {
      document.body.classList.remove("collapsed")
    }, 2000)

    if (enabledRef.current) {
      window.addEventListener("mousemove", handleMove, { passive: true })
    }

    const handleVisibilityChange = () => {
      if (document.hidden && raf.current) {
        cancelAnimationFrame(raf.current)
        raf.current = null
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      clearTimeout(auto)
      window.removeEventListener("mousemove", handleMove)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [handleMove])

  if (!enabledRef.current) return null

  // マウス位置に追従する柔らかいライト（薄いので UI 操作を阻害しません）
  const bg = `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.08), transparent 60%)`

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] transition-[background] duration-150"
      style={{
        background: bg,
        mixBlendMode: "screen",
        willChange: "background", // Added for better performance
      }}
    />
  )
}
