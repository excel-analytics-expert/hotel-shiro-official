import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] py-12 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              ホテル<span className="text-[#8FB0FF]">シロー</span>
            </h3>
            <p className="mb-4 text-sm text-blue-100/90">
              千葉県船橋市のビジネスホテル。 駅から徒歩圏内の好立地で、快適なご滞在をお約束いたします。
            </p>
            <div className="space-y-2 text-sm text-blue-100/90">
              <a
                href="https://www.google.com/maps/search/?api=1&query=千葉県船橋市本町2-5-14+ホテルシロー"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition-colors hover:text-white underline-offset-2 hover:underline touch-manipulation min-h-[44px]"
                aria-label="Googleマップで千葉県船橋市本町2-5-14を開く"
              >
                <MapPin className="mr-2 h-4 w-4" />
                <span>千葉県船橋市本町2-5-14</span>
              </a>
              <a
                href="tel:047-433-1126"
                className="flex items-center transition-colors hover:text-white touch-manipulation min-h-[44px]"
                aria-label="047-433-1126 に電話する（24時間受付）"
                title="047-433-1126 に電話する（24時間受付）"
              >
                <Phone className="mr-2 h-4 w-4" />
                <span>047-433-1126（24時間受付）</span>
              </a>
            </div>
            <div className="pt-3 flex items-center gap-4">
              <a
                href="https://www.instagram.com/hotel_shiro_funabashi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-100/90 transition-colors hover:text-white"
                aria-label="Instagram - ホテルシロー"
                title="Instagram - ホテルシロー"
              >
                <Instagram className="h-4 w-4" />
                <span>@hotel_shiro_funabashi</span>
              </a>
              <a
                href="https://www.facebook.com/hotel.siro/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-100/90 transition-colors hover:text-white"
                aria-label="Facebook - ホテルシロー"
                title="Facebook - ホテルシロー"
              >
                <Facebook className="h-4 w-4" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">サイトマップ</h4>
            <ul className="space-y-2 text-sm text-blue-100/90">
              <li>
                <a href="#home" className="transition-colors hover:text-white">
                  ホーム
                </a>
              </li>
              <li>
                <a href="#rooms" className="transition-colors hover:text-white">
                  客室・料金
                </a>
              </li>
              <li>
                <a href="#amenities" className="transition-colors hover:text-white">
                  設備・サービス
                </a>
              </li>
              <li>
                <a href="#attractions" className="transition-colors hover:text-white">
                  周辺観光地・施設
                </a>
              </li>
              <li>
                <a href="#reservation" className="transition-colors hover:text-white">
                  ご予約
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-white">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">ご予約・お問い合わせ</h4>
            <div className="space-y-3 text-sm text-blue-100/90">
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>24時間受付</span>
              </div>
              <a
                href="tel:047-433-1126"
                className="text-lg font-semibold text-white underline-offset-4 hover:underline touch-manipulation min-h-[44px] inline-flex items-center px-2 py-1 rounded transition-colors hover:bg-white/10"
                aria-label="047-433-1126 に電話する（24時間受付）"
                title="047-433-1126 に電話する（24時間受付）"
              >
                <Phone className="mr-2 h-4 w-4" />
                <span>047-433-1126</span>
              </a>
              <p>
                チェックイン: 16:00〜
                <br />
                チェックアウト: 〜10:00
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">オンライン予約</h4>
            <div className="space-y-2">
              <a
                href="/reservation"
                className="inline-flex items-center justify-center w-full px-6 py-4 text-base font-semibold text-white bg-[#0B3D91] border-2 border-[#0B3D91] rounded-full transition-all duration-200 hover:bg-white hover:text-[#0B3D91] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0A2540] touch-manipulation min-h-[48px]"
                aria-label="公式・提携Webサイト予約ページへ移動"
              >
                公式・提携Webサイト予約
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-blue-100/80">© 2024 ホテルシロー All rights reserved.</p>
          <p className="mt-2 text-xs text-blue-100/60">※一部画像はAI生成技術を使用しています</p>
        </div>
      </div>
    </footer>
  )
}
