"use client"

import Link from "next/link"
import { Home } from "lucide-react"
import { usePathname } from "next/navigation"

export default function HomeFab() {
  const pathname = usePathname()

  // ホーム（/）では非表示。ハッシュ付きの "/" はホーム扱いにします
  const isHome = pathname === "/"

  if (isHome) return null

  return (
    <Link
      href="/"
      aria-label="ホームへ戻る"
      title="ホームへ戻る"
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-[80] inline-flex h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 touch-manipulation"
    >
      <Home className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
      <span className="sr-only">{"ホームへ戻る"}</span>
    </Link>
  )
}
