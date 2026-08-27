"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Menu, X, Phone, MapPin, Instagram, Facebook } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const menuItems = [
    { name: "ホーム", href: "#home", id: "home" },
    { name: "客室・料金", href: "#rooms", id: "rooms" },
    { name: "設備・サービス", href: "#amenities", id: "amenities" },
    { name: "周辺観光地・施設", href: "#attractions", id: "attractions" },
    { name: "ご予約", href: "#reservation", id: "reservation" },
    { name: "お問い合わせ", href: "#contact", id: "contact" },
  ]

  useEffect(() => {
    const handler = () => {
      const headerH = 64
      const offset = 36
      const y = window.scrollY + headerH + offset

      const sections = menuItems.map((m) => {
        const el = document.getElementById(m.id)
        return { id: m.id, top: el?.offsetTop ?? 0, bottom: (el?.offsetTop ?? 0) + (el?.offsetHeight ?? 0) }
      })

      let current = "home"
      for (const s of sections) {
        if (y >= s.top && y < s.bottom) {
          current = s.id
          break
        }
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        current = sections[sections.length - 1]?.id ?? "home"
      }
      setActiveSection(current)
    }

    handler()
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) {
      const headerH = 64
      const extra = 8
      const top = el.offsetTop - headerH - extra
      window.scrollTo({ top, behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => smoothScroll(e, "#home")}
            className="text-xl sm:text-2xl font-bold text-[#1e3a8a] flex-shrink-0 mr-4"
          >
            ホテルシロー
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center space-x-4 lg:space-x-6 md:flex">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => smoothScroll(e, item.href)}
                className={`relative text-xs lg:text-sm tracking-wide uppercase transition-colors whitespace-nowrap ${
                  activeSection === item.id ? "font-semibold text-[#0B3D91]" : "text-gray-700 hover:text-[#0B3D91]"
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 mx-auto h-0.5 w-6 rounded-full bg-[#0B3D91]" />
                )}
              </a>
            ))}
          </nav>

          {/* Right info + reserve */}
          <div className="hidden items-center space-x-2 lg:space-x-4 md:flex">
            <div className="text-right hidden lg:block">
              <a
                href="tel:047-433-1126"
                className="mb-1 flex items-center font-bold text-gray-700 hover:text-[#0B3D91] transition-colors touch-manipulation min-h-[44px]"
                aria-label="047-433-1126 に電話する（24時間受付）"
                title="047-433-1126 に電話する（24時間受付）"
              >
                <Phone className="mr-1 h-4 w-4" />
                <span className="text-sm">047-433-1126</span>
              </a>
              <div className="flex items-center text-gray-600">
                <MapPin className="mr-1 h-3 w-3" />
                <span className="text-xs">〒273-0005 千葉県船橋市本町2-5-14</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <a
                href="https://www.instagram.com/hotel_shiro_funabashi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram - ホテルシロー"
                title="Instagram - ホテルシロー"
                className="rounded p-1.5 lg:p-2 text-gray-700 transition-colors hover:text-pink-600 touch-manipulation"
              >
                <Instagram className="h-4 w-4 lg:h-5 lg:w-5" />
                <span className="sr-only">{"Instagram"}</span>
              </a>
              <a
                href="https://www.facebook.com/hotel.siro/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook - ホテルシロー"
                title="Facebook - ホテルシロー"
                className="rounded p-1.5 lg:p-2 text-gray-700 transition-colors hover:text-[#0B3D91] touch-manipulation"
              >
                <Facebook className="h-4 w-4 lg:h-5 lg:w-5" />
                <span className="sr-only">{"Facebook"}</span>
              </a>
            </div>
            <a href="/reservation" className="btn-hilton text-sm lg:text-base px-3 lg:px-4 py-2">
              予約する
            </a>
          </div>

          {/* Mobile */}
          <button
            className="md:hidden p-2 -mr-2 touch-manipulation"
            onClick={() => setIsMenuOpen((p) => !p)}
            aria-label="メニューを開閉"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t py-4 md:hidden animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => smoothScroll(e, item.href)}
                  className={`relative rounded-lg px-4 py-3 text-base tracking-wide uppercase transition-colors touch-manipulation ${
                    activeSection === item.id
                      ? "bg-[#EFF4FF] font-semibold text-[#0B3D91]"
                      : "text-gray-700 hover:text-[#0B3D91] active:bg-gray-50"
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-[#0B3D91]" />
                  )}
                </a>
              ))}
              <div className="border-t pt-4 mt-4">
                <a
                  href="tel:047-433-1126"
                  className="mb-3 flex items-center font-bold text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors touch-manipulation min-h-[48px]"
                  aria-label="047-433-1126 に電話する（24時間受付）"
                  title="047-433-1126 に電話する（24時間受付）"
                >
                  <Phone className="mr-3 h-5 w-5" />
                  <span className="text-lg">047-433-1126</span>
                </a>
                <div className="mb-4 flex items-center text-gray-600 px-4">
                  <MapPin className="mr-3 h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">〒273-0005 千葉県船橋市本町2-5-14</span>
                </div>
                <div className="flex items-center gap-4 px-4 mb-4">
                  <a
                    href="https://www.instagram.com/hotel_shiro_funabashi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-gray-700 transition-colors hover:text-pink-600 active:text-pink-700 py-2 touch-manipulation"
                    aria-label="Instagram - ホテルシロー"
                    title="Instagram - ホテルシロー"
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="text-base">Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/hotel.siro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-gray-700 transition-colors hover:text-[#0B3D91] active:text-[#0B3D91]/80 py-2 touch-manipulation"
                    aria-label="Facebook - ホテルシロー"
                    title="Facebook - ホテルシロー"
                  >
                    <Facebook className="h-6 w-6" />
                    <span className="text-base">Facebook</span>
                  </a>
                </div>
                <div className="px-4">
                  <a href="/reservation" className="btn-hilton w-full text-center py-3 text-lg touch-manipulation">
                    予約する
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
