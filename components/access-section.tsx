"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Train, Car, Plane } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { useEffect, useMemo, useState } from "react"
import { loadContentClient, type SiteContent } from "@/lib/content"
import DynamicImage from "@/components/dynamic-image"

const BASE_NEARBY = [
  {
    name: "東京ベイエリアテーマパーク",
    time: "当ホテルより13.4㎞",
    description: "夢と魔法の世界で一日中お楽しみいただける大型テーマパークです。",
    image: "/images/attractions/tdr-custom.png",
  },
  {
    name: "船橋多目的アリーナ",
    time: "当ホテルより2㎞",
    description: "コンサートやスポーツイベントが行われる多目的アリーナ施設です。",
    image: "/images/attractions/lala-arena-1.png",
  },
  {
    name: "幕張メッセ",
    time: "",
    description: "日本最大級のコンベンション施設。様々なイベントが開催されます。",
    image: "/images/attractions/makuhari-messe-custom.png",
  },
  {
    name: "ふなばしアンデルセン公園",
    time: "当ホテルより12㎞",
    description: "自然の中でアスレチックや動物とのふれあいが楽しめる公園です。",
    image: "/images/attractions/andersen-park-custom.png",
  },
  {
    name: "東京ベイショッピングモール",
    time: "バスで約15分",
    description: "多彩なショップやレストランが集まる大型商業施設です。",
    image: "/images/attractions/lalaport-custom.png",
  },
  {
    name: "千葉ベイスタジアム",
    time: "電車で約20分",
    description: "プロ野球や大規模コンサートが開催される多目的スタジアムです。",
    image: "/images/attractions/zozo-marine-custom.png",
  },
]

export default function AccessSection() {
  const [site, setSite] = useState<SiteContent | null>(null)

  useEffect(() => {
    setSite(loadContentClient())
  }, [])

  const nearby = useMemo(() => {
    if (!site?.attractions) return BASE_NEARBY
    return BASE_NEARBY.map((a) => {
      const ov = site.attractions?.[a.name]
      return { ...a, image: ov?.image || a.image }
    })
  }, [site])

  const accessMethods = [
    {
      icon: <Train className="h-8 w-8 text-[#0B3D91]" />,
      title: "電車でお越しの場合",
      routes: [
        "京成電鉄「京成船橋駅」から徒歩約5分",
        "JR総武本線「船橋駅」南口から徒歩約7分",
        "東武野田線「船橋駅」からも徒歩圏内",
      ],
      hotelInfo: [
        "📍 〒273-0005 千葉県船橋市本町2-5-14",
        "📞 047-433-1126（24時間受付）",
        "🕐 チェックイン16:00〜 / チェックアウト〜10:00",
      ],
    },
    {
      icon: <Car className="h-8 w-8 text-[#0B3D91]" />,
      title: "お車でお越しの場合",
      routes: ["京葉道路「船橋IC」から約3分", "京葉道路「花輪IC」から約5分", "🅿️ 無料駐車場完備（要予約）"],
      hotelInfo: [
        "📍 〒273-0005 千葉県船橋市本町2-5-14",
        "📞 047-433-1126（24時間受付）",
        "🕐 チェックイン16:00〜 / チェックアウト〜10:00",
      ],
    },
    {
      icon: <Plane className="h-8 w-8 text-[#0B3D91]" />,
      title: "空港からお越しの場合",
      routes: [
        "成田空港より京成線で約40分",
        "羽田空港より京急線・JR線で約50分",
        "リムジンバス「船橋駅前」下車徒歩7分",
        "🅿️ 無料駐車場完備（要予約）",
      ],
      hotelInfo: [
        "📍 〒273-0005 千葉県船橋市本町2-5-14",
        "📞 047-433-1126（24時間受付）",
        "🕐 チェックイン16:00〜 / チェックアウト〜10:00",
      ],
    },
  ]

  return (
    <section id="access" className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 lg:px-6">
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <h2 className="section-title-hilton mb-2 sm:mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-zinc-900">
            アクセス
          </h2>
          <p className="mx-auto max-w-3xl text-sm sm:text-[15px] md:text-lg lg:text-xl text-zinc-600 leading-relaxed px-2 sm:px-0">
            京成船橋駅から徒歩5分、JR船橋駅南口から徒歩7分の好立地。 東京ベイエリアへのアクセスも抜群です。
          </p>
        </div>

        <div className="mb-8 sm:mb-12 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 lg:grid-cols-3">
          {accessMethods.map((method) => (
            <Card key={method.title} className="card-hilton touch-manipulation">
              <CardHeader className="text-center p-4 sm:p-5 md:p-6">
                <div className="mb-2 sm:mb-3 flex justify-center">{method.icon}</div>
                <CardTitle className="text-base sm:text-lg md:text-xl">{method.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-5 md:p-6 pt-0 space-y-4">
                {/* アクセス方法 */}
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900 mb-2">アクセス方法</h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {method.routes.map((route) => (
                      <li key={route} className="flex items-start text-xs sm:text-sm md:text-base text-zinc-600">
                        <span className="mr-2 sm:mr-3 mt-1.5 sm:mt-2 h-1.5 w-1.5 sm:h-2 sm:w-2 flex-shrink-0 rounded-full bg-[#0B3D91]" />
                        {route}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ホテル情報 */}
                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold text-zinc-900 mb-2">ホテル情報</h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {method.hotelInfo.map((info, index) => (
                      <li key={index} className="text-xs sm:text-sm md:text-base text-zinc-600">
                        {info.includes("047-433-1126") ? (
                          <a
                            href="tel:047-433-1126"
                            className="link-hilton touch-manipulation min-h-[44px] inline-flex items-center"
                            aria-label="047-433-1126 に電話する"
                          >
                            {info}
                          </a>
                        ) : (
                          info
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 小さなマップ */}
                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold text-zinc-900 mb-2">地図</h4>
                  <div className="h-32 w-full overflow-hidden rounded-lg bg-zinc-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.8234567890123!2d139.9876543210987!3d35.6987654321098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQxJzU1LjYiTiAxMzhCsDU5JzE1LjYiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`ホテルシロー所在地（${method.title}）`}
                    />
                  </div>
                  <p className="mt-2 text-xs text-zinc-500">クリックで詳細地図を表示</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-8 sm:mb-12 rounded-xl bg-[#F6F8FB] p-4 sm:p-6 md:p-8 text-center">
          <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl font-bold text-zinc-900">詳細地図・ルート検索</h3>
          <a
            href="https://www.google.com/maps/search/?api=1&query=千葉県船橋市本町2-5-14+ホテルシロー"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#0B3D91] text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-blue-800 transition-colors duration-200 touch-manipulation min-h-[48px] shadow-sm hover:shadow-md"
            aria-label="Googleマップでホテルシローの場所を確認"
          >
            <MapPin className="h-5 w-5" />
            Googleマップで開く
          </a>
          <p className="mt-2 text-xs text-zinc-500">ルート検索・詳細地図をご確認いただけます</p>
        </div>

        <div className="rounded-xl bg-[#F6F8FB] p-4 sm:p-6 md:p-8" data-assemble="off">
          <h3 className="mb-4 sm:mb-6 text-center text-xl sm:text-2xl md:text-3xl font-bold text-zinc-900">
            周辺観光地・施設
          </h3>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {nearby.map((attraction) => (
              <Card key={attraction.name} className="card-hilton overflow-hidden touch-manipulation">
                <div className="relative">
                  {/* 画像比率：モバイル 4:3 / sm 3:2 / md 16:9 */}
                  <div className="block sm:hidden">
                    <AspectRatio ratio={4 / 3}>
                      <DynamicImage
                        src={attraction.image || "/placeholder.svg?height=600&width=800&query=attraction mobile"}
                        alt={attraction.name}
                        fill
                        sizes="100vw"
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </AspectRatio>
                  </div>
                  <div className="hidden sm:block md:hidden">
                    <AspectRatio ratio={3 / 2}>
                      <DynamicImage
                        src={attraction.image || "/placeholder.svg?height=600&width=900&query=attraction tablet"}
                        alt={attraction.name}
                        fill
                        sizes="100vw"
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </AspectRatio>
                  </div>
                  <div className="hidden md:block">
                    <AspectRatio ratio={16 / 9}>
                      <DynamicImage
                        src={attraction.image || "/placeholder.svg?height=600&width=1067&query=attraction"}
                        alt={attraction.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </AspectRatio>
                  </div>
                </div>
                <CardHeader className="pb-1 sm:pb-2 p-3 sm:p-4 md:p-5">
                  <CardTitle className="text-sm sm:text-base md:text-lg lg:text-xl">{attraction.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 md:p-5 pt-0">
                  <p className="mb-1 sm:mb-2 text-xs sm:text-sm md:text-base font-semibold text-[#0B3D91]">
                    {attraction.time}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-zinc-600">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
