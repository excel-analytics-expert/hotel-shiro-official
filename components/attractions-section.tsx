"use client"

import { MapPin, Clock, Car } from "lucide-react"
import Image from "next/image"

const attractions = [
  {
    name: "舞浜エリア",
    description: "家族で楽しめる大型テーマパーク等々",
    image: "/images/attractions/tdr-theme-park.jpg",
    access: "当ホテルより約13.4㎞",
    provider: "提供元：浦安市",
  },
  {
    name: "LaLa arena TOKYO-BAY",
    description: "船橋市の多目的アリーナ。コンサートやスポーツイベントを開催する最新施設",
    image: "/images/attractions/lala-arena.jpg",
    access: "当ホテルより約2㎞",
    provider: "提供元：（株）TOKYO-BAYアリーナマネジメント",
  },
  {
    name: "ふなばしアンデルセン公園",
    description: "18世紀デンマーク牧歌的風景を再現したテーマパーク。家族連れに人気",
    image: "/images/attractions/andersen-park.jpg",
    access: "当ホテルより約12㎞",
    provider: "提供元：公益財団法人船橋市公園協会",
  },
  {
    name: "幕張メッセ",
    description: "国際展示場・国際会議場・幕張イベントホールからなる大型コンベンション施設",
    image: "/images/attractions/makuhari-messe.jpg",
    access: "当ホテルより約8㎞",
    provider: "提供元：株式会社幕張メッセ",
  },
  {
    name: "ZOZOマリンスタジアム",
    description: "千葉ロッテマリーンズの本拠地。プロ野球観戦やイベントが楽しめる",
    image: "/images/attractions/zozo-marine.jpg",
    access: "当ホテルより約9㎞",
    provider: "提供元：千葉市",
  },
  {
    name: "船橋競馬場",
    description: "地方競馬の名門競馬場。ナイター競馬やイベントも開催される歴史ある施設",
    image: "/images/attractions/funabashi-racetrack.jpg",
    access: "当ホテルより約3㎞",
    provider: "提供元：千葉県競馬組合",
  },
]

export default function AttractionsSection() {
  return (
    <section id="attractions" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">周辺観光地・施設</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            ホテルシロー周辺の魅力的な観光スポットをご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {attractions.map((attraction, index) => (
            <div
              key={attraction.name}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="w-full overflow-hidden bg-gray-100">
                <Image
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.name}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                  quality={90}
                />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight">{attraction.name}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{attraction.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0 text-blue-600" />
                  <span className="font-medium">{attraction.access}</span>
                </div>
                {attraction.provider && (
                  <p className="text-xs text-gray-400 mt-3 pt-3 border-t border-gray-100">{attraction.provider}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">ホテルへのアクセス</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-xl border border-blue-100">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <p className="text-base font-bold text-gray-900 mb-2">電車でお越しの場合</p>
              <p className="text-sm text-gray-600">JR船橋駅南口徒歩7分</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-green-50 rounded-xl border border-green-100">
              <Car className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <p className="text-base font-bold text-gray-900 mb-2">車でお越しの場合</p>
              <p className="text-sm text-gray-600">京葉道路船橋IC 5分</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-orange-50 rounded-xl border border-orange-100">
              <Clock className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <p className="text-base font-bold text-gray-900 mb-2">空港からお越しの場合</p>
              <p className="text-sm text-gray-600">成田空港から電車45分</p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=千葉県船橋市本町2-5-14"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl min-h-12 touch-manipulation"
              aria-label="Googleマップでホテルの場所を確認する"
            >
              <MapPin className="h-5 w-5" />
              地図で確認する
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
