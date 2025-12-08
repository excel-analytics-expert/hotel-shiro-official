import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coffee, Sparkles, Shirt, Phone, Package, Clock } from "lucide-react"

export default function AmenitiesSection() {
  const services = [
    {
      icon: <Coffee className="h-8 w-8 text-blue-600" />,
      title: "自動販売機",
      description: "2階に設置されており、飲み物をいつでもご購入いただけます",
      time: "24時間利用可能",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-blue-600" />,
      title: "クリーニング",
      description: "フロントにてお申し付けください",
      time: "フロントにてご相談",
    },
    {
      icon: <Shirt className="h-8 w-8 text-blue-600" />,
      title: "コインランドリー",
      description: "フロント後方に設置されており、長期滞在にも安心",
      time: "24時間利用可能",
    },
    {
      icon: <Phone className="h-8 w-8 text-blue-600" />,
      title: "モーニングコール",
      description: "部屋の電話機から24時間設定が可能です",
      time: "24時間設定可能",
    },
    {
      icon: <Package className="h-8 w-8 text-blue-600" />,
      title: "宅配便",
      description: "フロントにてお取り次ぎいたします（着払いのみ）",
      time: "フロントにてご相談",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "24時間フロント",
      description: "いつでもスタッフがお客様をサポートいたします",
      time: "24時間対応",
    },
  ]

  return (
    <section id="amenities" className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-2 sm:px-4 lg:px-6">
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            設備・サービス
          </h2>
          <p className="mx-auto max-w-3xl text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 px-1 sm:px-0">
            快適なご滞在のために、充実した設備とサービスをご用意しております。
            全室マニフレックス高反発マットレス・枕を採用し、質の高い睡眠環境を提供いたします。
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="text-center transition-shadow hover:shadow-lg">
              <CardHeader className="pb-2 sm:pb-3 p-3 sm:p-4 md:p-6">
                <div className="mb-2 sm:mb-3 flex justify-center">{s.icon}</div>
                <CardTitle className="text-sm sm:text-base md:text-lg">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 md:p-6 pt-0">
                <p className="mb-2 text-xs sm:text-sm text-gray-600">{s.description}</p>
                <p className="text-xs font-semibold text-blue-600">{s.time}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 rounded-lg bg-blue-50 p-3 sm:p-4 md:p-6 lg:p-8 text-center">
          <h3 className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl font-bold text-gray-900">客室設備・アメニティ</h3>
          <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="text-left">
              <h4 className="mb-3 sm:mb-4 font-semibold text-gray-900 text-sm sm:text-base">客室設備</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <li>• テレビ、衛星放送（無料）</li>
                <li>• 電話、電気ポット</li>
                <li>• 冷蔵庫</li>
                <li>• ドライヤー</li>
                <li>• 空気清浄機（加湿機能付き）</li>
                <li>• 個別空調</li>
                <li>• 洗浄機付トイレ</li>
                <li>• 無料Wi‑Fi</li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="mb-3 sm:mb-4 font-semibold text-gray-900 text-sm sm:text-base">アメニティ</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <li>• ボディーソープ、シャンプー、リンス</li>
                <li>• 入浴剤　フロント前よりお持ちください</li>
                <li>• ハミガキセット　フロント前よりお持ちください</li>
                <li>• カミソリ、ヘアブラシ　フロント前よりお持ちください</li>
                <li>• タオル、バスタオル</li>
                <li>• パジャマ、スリッパ</li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="mb-3 sm:mb-4 font-semibold text-gray-900 text-sm sm:text-base">特別設備</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <li>• 全室マニフレックス高反発枕</li>
                <li>• 全室マニフレックス高反発マットレス</li>
                <li>• 質の高い睡眠環境</li>
                <li>• 快適な寝心地</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
