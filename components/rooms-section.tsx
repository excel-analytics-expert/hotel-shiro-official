"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useMemo, useState } from "react"
import { loadContentClient, type SiteContent } from "@/lib/content"

type Room = {
  name: string
  price: string
  image: string
  size: string
  bed: string
  amenities: string[]
  description: string
}

const BASE_ROOMS: Room[] = [
  {
    name: "スタンダードルーム",
    price: "¥6,000",
    image: "/images/rooms/standard-room.jpeg",
    size: "快適さを追求した機能的な客室",
    bed: "マニフレックス高反発マットレス・枕",
    amenities: ["無料Wi‑Fi", "衛星放送", "個別空調", "ユニットバス", "空気清浄機（加湿機能付き）", "洗浄機付トイレ"],
    description: "ビジネスにも観光にも最適です。",
  },
  {
    name: "ツインルーム",
    price: "¥12,000",
    image: "/images/rooms/twin.jpeg",
    size: "ゆったりとした空間",
    bed: "マニフレックス高反発マットレス・枕×2",
    amenities: ["無料Wi‑Fi", "衛星放送", "個別空調", "ユニットバス", "空気清浄機（加湿機能付き）", "洗浄機付トイレ"],
    description: "出張や友人同士でのご利用に便利。",
  },
  {
    name: "ハリウッド",
    price: "¥13,000",
    image: "/images/rooms/hollywood.jpeg",
    size: "ハリウッドスタイル（ベッド幅280cm）",
    bed: "マニフレックス高反発マットレス・枕（ベッド幅280cm）",
    amenities: ["無料Wi‑Fi", "衛星放送", "個別空調", "ユニットバス", "空気清浄機（加湿機能付き）", "洗浄機付トイレ"],
    description:
      "（床）アレルバスター配合フローリングを使用、ベッド幅280cmの広々としたハリウッドスタイルをご体感ください",
  },
  {
    name: "和室（お子様連れ特化型）",
    price: "¥14,000",
    image: "/images/rooms/washitsu.jpeg",
    size: "お子様連れのご家族に最適な和の空間・赤ちゃん大歓迎!!",
    bed: "畳（アレルバスター配合の「美草」を使用）（布団、マニフレックス高反発マットレス）",
    amenities: ["無料Wi‑Fi", "衛星放送", "個別空調", "和風バス", "空気清浄機（加湿機能付き）", "洗浄機付トイレ"],
    description: "お子様連れ特化型和室で、ご家族でのご滞在を快適にサポート",
  },
]

export default function RoomsSection() {
  const [site, setSite] = useState<SiteContent | null>(null)
  const [overrides, setOverrides] = useState<{ [key: string]: Partial<Room> }>({})

  useEffect(() => {
    setSite(loadContentClient())
    const storedOverrides = localStorage.getItem("roomOverrides")
    if (storedOverrides) {
      setOverrides(JSON.parse(storedOverrides))
    }
  }, [])

  const rooms = useMemo(() => {
    if (!site?.rooms) return BASE_ROOMS
    return BASE_ROOMS.map((r) => {
      const ov = overrides[r.name] || site.rooms?.[r.name]
      return { ...r, price: ov?.price || r.price, image: ov?.image || r.image }
    })
  }, [site, overrides])

  return (
    <section id="rooms" className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-2 sm:px-4 lg:px-6">
        <div className="mb-6 sm:mb-8 md:mb-12 text-center">
          <h2 className="section-title-hilton mb-2 sm:mb-3 md:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-900">
            客室・料金
          </h2>
          <p className="mx-auto max-w-3xl text-xs sm:text-sm md:text-base lg:text-lg text-zinc-600 leading-relaxed px-1 sm:px-2">
            全42室の快適で機能的な客室をご用意しております。
            全室マニフレックス高反発マットレス・枕を採用し、質の高い睡眠をお約束いたします。
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2">
          {rooms.map((room) => (
            <Card key={room.name} className="card-hilton overflow-hidden touch-manipulation group flex flex-col h-full">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden bg-gray-100">
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  quality={85}
                  priority
                />
                <div className="absolute top-3 right-3 sm:hidden">
                  <div className="bg-[#0B3D91] text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    {room.price}〜
                  </div>
                </div>
              </div>

              <CardHeader className="p-3 sm:p-4 md:p-5 pb-2 sm:pb-3">
                <CardTitle className="flex items-center justify-between gap-2">
                  <span className="text-sm sm:text-base md:text-lg font-semibold text-zinc-900">{room.name}</span>
                  <span className="hidden sm:inline text-sm md:text-base font-bold text-[#0B3D91] whitespace-nowrap">
                    {room.price}〜/泊
                  </span>
                </CardTitle>
              </CardHeader>

              <CardContent className="p-3 sm:p-4 md:p-5 pt-0 flex-1 flex flex-col">
                <div className="mb-3 sm:mb-4 space-y-1.5 sm:space-y-2 flex-1">
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    <strong className="text-zinc-800">特徴:</strong> {room.size}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    <strong className="text-zinc-800">寝具:</strong> {room.bed}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{room.description}</p>
                </div>

                <div className="mt-auto space-y-2">
                  {(room.name === "スタンダードルーム" || room.name === "ツインルーム") && (
                    <p className="text-[10px] sm:text-xs text-zinc-500 leading-relaxed font-bold">
                      ※掲載写真は一例です。空室状況により実際のお部屋が異なる場合がございます。
                    </p>
                  )}
                  <a
                    href="/reservation"
                    className="inline-flex items-center justify-center rounded-full bg-[#0B3D91] px-4 py-3 sm:px-6 sm:py-3 text-white font-semibold hover:bg-blue-800 active:bg-blue-900 transition-colors duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#0B3D91] focus:ring-offset-2 min-h-[44px] touch-manipulation w-full text-sm"
                    aria-label={`${room.name}を予約する`}
                  >
                    予約する
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 md:mt-10 text-center text-xs sm:text-sm text-zinc-500 leading-relaxed px-1 sm:px-2 space-y-1">
          <p>※料金は1室1泊あたりの税込価格です</p>
          <p className="text-xs">※時期により料金が変動する場合があります</p>
        </div>
      </div>
    </section>
  )
}
