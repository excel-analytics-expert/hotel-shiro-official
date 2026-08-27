import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Clock, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#F6F8FB] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="section-title-hilton mb-4 text-4xl text-zinc-900">お問い合わせ・ご予約</h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-600">
            ご不明な点やご質問がございましたら、お気軽にお問い合わせください。お電話にて承っております。
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="mb-8 grid gap-6 md:grid-cols-3">
            <Card className="card-hilton text-center">
              <CardHeader className="pb-3">
                <div className="mb-2 flex justify-center">
                  <Phone className="h-6 w-6 text-[#0B3D91]" />
                </div>
                <CardTitle className="text-lg">お電話の予約・お問合せ</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="tel:047-433-1126"
                  className="mb-2 inline-flex items-center justify-center text-2xl font-bold text-[#0B3D91] underline-offset-4 hover:underline touch-manipulation min-h-[48px] px-2 py-1 rounded-lg transition-colors hover:bg-blue-50"
                  aria-label="047-433-1126 に電話する（24時間受付）"
                  title="047-433-1126 に電話する（24時間受付）"
                >
                  047-433-1126
                </a>
                <p className="text-sm text-zinc-600">
                  受付時間: 24時間対応
                  <br />
                  ※深夜・早朝はフロントスタッフが対応いたします
                </p>
              </CardContent>
            </Card>

            <Card className="card-hilton text-center">
              <CardHeader className="pb-3">
                <div className="mb-2 flex justify-center">
                  <Clock className="h-6 w-6 text-[#0B3D91]" />
                </div>
                <CardTitle className="text-lg">チェックイン・チェックアウト</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>チェックイン:</strong> 16:00〜
                  </p>
                  <p>
                    <strong>チェックアウト:</strong> 〜10:00
                  </p>
                  <p className="text-zinc-600">※ご到着予定時刻より大幅な遅れがある場合は事前にご連絡ください</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hilton text-center">
              <CardHeader className="pb-3">
                <div className="mb-2 flex justify-center">
                  <MapPin className="h-6 w-6 text-[#0B3D91]" />
                </div>
                <CardTitle className="text-lg">住所</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=千葉県船橋市本町2-5-14+ホテルシロー"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-4 text-sm text-zinc-600 hover:text-[#0B3D91] transition-colors underline-offset-2 hover:underline"
                  aria-label="Googleマップで千葉県船橋市本町2-5-14を開く"
                >
                  〒273-0005
                  <br />
                  千葉県船橋市本町2-5-14
                </a>
                <div className="h-32 w-full overflow-hidden rounded-lg bg-zinc-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.8234567890123!2d139.9876543210987!3d35.6987654321098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQxJzU1LjYiTiAxMzhCsDU5JzE1LjYiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ホテルシロー所在地（小）"
                  />
                </div>
                <p className="mt-2 text-xs text-zinc-500">クリックで詳細地図を表示</p>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-xl bg-[#0B3D91] p-8 text-center text-white">
            <h4 className="mb-6 text-2xl font-bold">提携予約サイト</h4>
            <div className="mx-auto max-w-md">
              <a
                href="/reservation"
                className="inline-flex items-center justify-center w-full rounded-full bg-white text-[#0B3D91] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B3D91] min-h-[44px] touch-manipulation"
              >
                提携予約サイト
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
