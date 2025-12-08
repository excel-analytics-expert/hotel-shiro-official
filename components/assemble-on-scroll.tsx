"use client"

import { useEffect, useState } from "react"

/**
 * AssembleOnScroll
 * - Static-site friendly: shows content by default, adds effects when JS loads
 * - Observes each section (except ones with data-assemble="off" and the hero #home)
 * - Marks items for staggered reveal
 * - Applies type-specific effects:
 *    - .fx-text: gentle fade/slide
 *    - .fx-card: dreamy soft blur + slight scale + glow
 * - Respects prefers-reduced-motion
 * - Graceful fallback for static sites
 */
export default function AssembleOnScroll() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section")).filter((s) => s.id !== "home") // exclude hero

    const observers: IntersectionObserver[] = []

    sections.forEach((section) => {
      if (section.dataset.assemblePrepared === "true") return

      section.classList.add("reveal-section")
      section.dataset.assemblePrepared = "true"

      // Exclude groups with data-assemble="off"
      const groups = Array.from(section.querySelectorAll<HTMLElement>(":scope > *")).filter(
        (g) => g.getAttribute("data-assemble") !== "off",
      )

      groups.forEach((group) => {
        group.classList.add("assemble-group")

        // Exclude items with data-assemble="off" or within a group with data-assemble="off"
        const rawItems = Array.from(group.querySelectorAll<HTMLElement>(":scope > *"))
        const items = rawItems.filter(
          (el) => !el.closest('[data-assemble="off"]') && el.getAttribute("data-assemble") !== "instant",
        )

        items.forEach((el, i) => {
          el.classList.add("assemble-item")
          el.style.setProperty("--i", String(i))

          // Heuristic tagging for text vs card
          const tag = el.tagName
          const isTextTag =
            tag === "H1" ||
            tag === "H2" ||
            tag === "H3" ||
            tag === "H4" ||
            tag === "H5" ||
            tag === "H6" ||
            tag === "P" ||
            tag === "LI" ||
            tag === "SMALL" ||
            tag === "BLOCKQUOTE" ||
            tag === "LABEL" ||
            tag === "SPAN"

          if (isTextTag) {
            el.classList.add("fx-text")
          }
          // If the element itself or its container is marked as a card
          if (
            el.matches('[data-fx="card"], .fx-card') ||
            (el.parentElement && el.parentElement.matches('[data-fx="card"], .fx-card'))
          ) {
            el.classList.add("fx-card")
          }
        })

        if (items.length === 0 && group.getAttribute("data-assemble") !== "off") {
          group.classList.add("assemble-item")
          group.style.setProperty("--i", "0")
        }
      })

      if (groups.length === 0) {
        const children = Array.from(section.children) as HTMLElement[]
        children.forEach((child, i) => {
          if (child.getAttribute("data-assemble") !== "off") {
            child.classList.add("assemble-item")
            child.style.setProperty("--i", String(i))
          }
        })
      }

      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && entry.intersectionRatio > 0.15) {
              section.classList.add("assembled")
              const items = Array.from(section.querySelectorAll<HTMLElement>(".assemble-item"))

              const base = 60
              const step = 120
              items.forEach((el, idx) => {
                const delay = base + idx * step
                el.style.animationDelay = `${delay}ms`
                el.classList.add("in")
              })

              io.disconnect()
            }
          }
        },
        {
          root: null,
          rootMargin: "0px 0px -15% 0px",
          threshold: [0, 0.1, 0.25, 0.4],
        },
      )

      io.observe(section)
      observers.push(io)
    })

    return () => {
      observers.forEach((o) => o.disconnect())
    }
  }, [])

  if (!isClient) return null

  return (
    <>
      <style jsx global>{`
        /* より滑らかなキーフレーム */
        @keyframes text-in {
          from {
            opacity: 0;
            transform: translateY(16px);
            filter: blur(3px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        @keyframes card-in {
          0% {
            opacity: 0;
            transform: translateY(32px) scale(0.96);
            filter: blur(16px) saturate(0.7);
            box-shadow: 0 0 0px rgba(59, 130, 246, 0);
          }
          40% {
            opacity: 0.8;
            transform: translateY(8px) scale(0.98);
            filter: blur(8px) saturate(0.9);
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.1);
          }
          70% {
            opacity: 1;
            transform: translateY(-2px) scale(1.01);
            filter: blur(2px) saturate(1.1);
            box-shadow: 0 12px 35px rgba(59, 130, 246, 0.2);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0) saturate(1);
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
          }
        }

        /* Only hide elements when JS is ready and animations are active */
        .reveal-section .assemble-item {
          opacity: 0;
          transform: translateY(12px);
        }

        /* より滑らかなテキストエフェクト */
        .reveal-section.assembled .assemble-item.in.fx-text {
          animation: text-in 720ms cubic-bezier(0.16, 0.84, 0.44, 1) forwards;
        }

        /* より滑らかなカードエフェクト */
        .reveal-section.assembled .assemble-item.in.fx-card,
        .reveal-section.assembled .assemble-item.in[data-fx='card'] {
          will-change: transform, filter, box-shadow, opacity;
          animation: card-in 1100ms cubic-bezier(0.16, 0.84, 0.44, 1) forwards;
        }

        /* Fallback for items with no role class */
        .reveal-section.assembled .assemble-item.in:not(.fx-text):not(.fx-card) {
          animation: text-in 680ms cubic-bezier(0.16, 0.84, 0.44, 1) forwards;
        }

        /* Static site fallback - show content by default */
        @media (scripting: none) {
          .assemble-item {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            animation: none !important;
          }
        }

        /* Reduced motion accessibility */
        @media (prefers-reduced-motion: reduce) {
          .assemble-item {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </>
  )
}
