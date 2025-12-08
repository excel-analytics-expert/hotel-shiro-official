"use client"

import { useEffect, useMemo, useState } from "react"
import DynamicImage from "@/components/dynamic-image"
import { ChevronLeft, ChevronRight, MapPin, Phone } from "lucide-react"
import { defaultSlides, type Slide } from "@/lib/content"

const SLIDE_DURATION = 5000
const STORAGE_KEY = "slides-v2"

export default function HeroSection() {
  const [slides, setSlides] = useState<Slide[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved) return JSON.parse(saved) as Slide[]
      } catch {}
    }
    return defaultSlides
  })
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [slides.length])

  const next = () => setCurrent((p) => (p + 1) % slides.length)
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length)
  const go = (i: number) => setCurrent(i)

  const currentSlide = useMemo(() => slides[current], [current, slides])

  return (
    <section id="home" className="relative h-[100svh] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full parallax-scale">
        {slides.map((s, i) => (
          <div
            key={`${s.title}-${i}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
          >
            <DynamicImage
              src={s.image || "/placeholder.svg?height=900&width=1600&query=hotel hero background"}
              alt={s.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
              priority={i === 0}
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        aria-label="前のスライド"
        className="absolute left-2 sm:left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 backdrop-blur-sm p-3 sm:p-2 text-white transition-all hover:bg-black/50 active:bg-black/60 touch-manipulation shadow-lg"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={next}
        aria-label="次のスライド"
        className="absolute right-2 sm:right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 backdrop-blur-sm p-3 sm:p-2 text-white transition-all hover:bg-black/50 active:bg-black/60 touch-manipulation shadow-lg"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Copy */}
      <div className="absolute inset-0 z-10 flex items-center justify-center parallax-layer-2">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-4 sm:mb-6">
            {/* Title */}
            <h1 className="mb-2 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider drop-shadow-2xl [text-shadow:_3px_3px_12px_rgb(0_0_0_/_90%)]">
              <span className="text-[#7FB3FF]">ホテルシロー</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-blue-100 tracking-wide drop-shadow-lg [text-shadow:_2px_2px_6px_rgb(0_0_0_/_80%)]">
              船橋の心温まるビジネスホテル ✨
            </p>
          </div>

          <div className="mb-8 sm:mb-10 flex min-h-[160px] sm:min-h-[180px] flex-col justify-center space-y-3 sm:space-y-4 bg-black/25 backdrop-blur-md rounded-3xl p-5 sm:p-7 border border-white/10 shadow-2xl">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold drop-shadow-lg [text-shadow:_2px_2px_8px_rgb(0_0_0_/_90%)]">
              {currentSlide.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-blue-100 font-medium drop-shadow-lg [text-shadow:_2px_2px_6px_rgb(0_0_0_/_80%)]">
              {currentSlide.subtitle}
            </p>
            <p className="mx-auto max-w-2xl text-balance text-xs sm:text-sm lg:text-base xl:text-lg text-gray-100 px-2 sm:px-0 drop-shadow-md [text-shadow:_1px_1px_4px_rgb(0_0_0_/_70%)] leading-relaxed">
              {currentSlide.description}
            </p>
          </div>

          <div className="mb-8 sm:mb-10 flex flex-col justify-center gap-4 sm:gap-5 sm:flex-row px-4 sm:px-0">
            <a
              href="/reservation"
              className="btn-hilton text-base sm:text-lg py-3 sm:py-2 touch-manipulation shadow-xl hover:shadow-2xl transition-shadow"
            >
              今すぐ予約
            </a>
            <a
              href="#rooms"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById("rooms")
                if (el) {
                  const headerH = 64
                  const extra = 8
                  const top = el.offsetTop - headerH - extra
                  window.scrollTo({ top, behavior: "smooth" })
                }
              }}
              className="btn-hilton-outline text-base sm:text-lg py-3 sm:py-2 touch-manipulation shadow-lg hover:shadow-xl transition-shadow"
            >
              客室・料金を見る
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-100 sm:flex-row px-4 sm:px-0">
            {/* Google Map Link */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=千葉県船橋市本町2-5-14+ホテルシロー"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-2 hover:bg-black/30 transition-colors touch-manipulation"
              aria-label="Googleマップで千葉県船橋市本町2-5-14を開く"
            >
              <MapPin className="h-4 w-4 flex-shrink-0 text-blue-200" />
              <span className="text-center sm:text-left">千葉県船橋市本町2-5-14</span>
            </a>
            <a
              href="tel:047-433-1126"
              className="group inline-flex items-center gap-2 rounded-full px-4 py-3 text-gray-100 outline-none hover:text-white focus-visible:ring-2 focus-visible:ring-white/70 touch-manipulation active:text-white/80 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors min-h-[48px]"
              aria-label="047-433-1126 に電話する（24時間受付）"
              title="047-433-1126 に電話する（24時間受付）"
            >
              <Phone className="h-5 w-5 text-green-200" />
              <span className="underline-offset-4 group-hover:underline text-base font-medium">047-433-1126</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex gap-3 sm:gap-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`スライド ${i + 1} に移動`}
              className={`h-3 w-3 sm:h-2.5 sm:w-2.5 rounded-full transition-all touch-manipulation shadow-sm ${i === current ? "bg-white scale-110" : "bg-white/60 hover:bg-white/80"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
