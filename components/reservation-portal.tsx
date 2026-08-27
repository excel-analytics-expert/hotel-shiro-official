import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Phone, Calendar, Gift } from "lucide-react"
import Link from "next/link"
import { Home } from "lucide-react"

export default function ReservationPortal() {
  const sites = [
    {
      name: "楽天トラベル",
      url: "https://travel.rakuten.co.jp/HOTEL/27748/?s_kwcid=paidsearch&ifd=152995&iasid=weg_trmd_travel-booking_&ultra_advid=3093437606&ultra_cid=2039583540&ultra_agid=153197527837&gclsrc=aw.ds&&saf_src=google_g&saf_pt=&saf_kw=&saf_dv=&saf_cam=2039583540&saf_grp=153197527837&saf_ad=673010133340&account_id=3093437606&saf_acc=3093437606&saf_cam_tp=search&gad_source=1&gad_campaignid=2039583540&gbraid=0AAAAAD-xRgPeXEEA_-Mk5RqKa74c37jv0&gclid=Cj0KCQjwqebEBhD9ARIsAFZMbfxQnFc5amt0wXPyYMSksRsLYRYZzJn3KbdTELKTcF18yNxYB-CpmOgaAoTgEALw_wcB",
      color: "bg-red-50 border-red-200 hover:bg-red-100",
      button: "bg-red-600 hover:bg-red-700",
      description: "楽天ポイントでお得に宿泊！楽天会員様におすすめです。",
      icon: <Gift className="h-8 w-8 text-red-500" />,
      features: ["楽天ポイントが貯まる・使える", "楽天会員なら簡単予約", "お得なクーポンあり"],
    },
    {
      name: "じゃらんnet",
      url: "https://www.jalan.net/yad322863/",
      color: "bg-orange-50 border-orange-200 hover:bg-orange-100",
      button: "bg-orange-600 hover:bg-orange-700",
      description: "豊富なプランと口コミで安心予約。Pontaポイントもお得です。",
      icon: <Calendar className="h-8 w-8 text-orange-500" />,
      features: ["Pontaポイントが貯まる・使える", "じゃらん限定プランあり", "口コミ・評価が豊富"],
    },
    {
      name: "るるぶトラベル",
      url: "https://www.rurubu.travel/hotel/japan/funabashi/hotel-shiro?cid=1839115",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      button: "bg-[#0B3D91] hover:bg-[#0a357e]",
      description: "JTBグループの安心感。旅行プランと合わせてご利用いただけます。",
      icon: <Gift className="h-8 w-8 text-blue-500" />,
      features: ["JTBの安心サポート", "るるぶトラベル限定特典", "旅行プランも充実"],
    },
  ]

  return (
    <section className="min-h-[100svh] bg-[#F6F8FB] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 flex justify-start">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#0B3D91] underline-offset-4 hover:underline"
            aria-label="ホームへ戻る"
            title="ホームへ戻る"
          >
            <Home className="h-4 w-4" />
            ホームへ戻る
          </Link>
        </div>
        <div className="mb-16 text-center">
          <h1 className="section-title-hilton mb-4 text-4xl text-zinc-900">ご予約・空室検索</h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-zinc-600">
            ホテルシローのご予約は、以下の予約サイトからお選びいただけます✨
            <br />
            各サイトでポイントやクーポンをお得にご活用ください。
          </p>

          <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-sm ring-1 ring-zinc-200/70">
            <h2 className="mb-4 text-2xl font-bold text-zinc-900">
              ホテル<span className="text-[#0B3D91]">シロー</span>
            </h2>
            <div className="grid gap-4 text-sm text-zinc-600 md:grid-cols-2">
              <div>
                <p>
                  <strong>住所:</strong>{" "}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=千葉県船橋市本町2-5-14+ホテルシロー"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0B3D91] hover:underline underline-offset-2"
                    aria-label="Googleマップで千葉県船橋市本町2-5-14を開く"
                  >
                    千葉県船橋市本町2-5-14
                  </a>
                </p>
                <p>
                  <strong>最寄駅:</strong> JR船橋駅南口から徒歩7分
                </p>
              </div>
              <div>
                <p>
                  <strong>チェックイン:</strong> 16:00〜
                </p>
                <p>
                  <strong>チェックアウト:</strong> 〜10:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-3">
          {sites.map((site) => (
            <Card key={site.name} className={`${site.color} card-hilton border-2 text-center`}>
              <CardHeader className="pb-4">
                <div className="mb-4 flex justify-center">{site.icon}</div>
                <CardTitle className="text-2xl font-bold text-zinc-900">{site.name}</CardTitle>
                <p className="mt-2 text-sm text-zinc-600">{site.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="mb-3 font-semibold text-zinc-900">特典・サービス</h4>
                  <ul className="space-y-2">
                    {site.features.map((f) => (
                      <li key={f} className="flex items-start text-sm text-zinc-600">
                        <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-zinc-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${site.button} inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white shadow-sm transition-all hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3D91] focus-visible:ring-offset-2`}
                >
                  {site.name}で予約する
                  <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-xl bg-[#0B3D91] p-8 text-center text-white">
          <h3 className="mb-4 text-2xl font-bold">お電話の予約・お問合せ</h3>
          <p className="mb-6 text-blue-100">
            ちょっとしたご質問やお急ぎのご予約は、お気軽にお電話ください。24時間いつでもスタッフがお待ちしております。
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <Phone className="h-8 w-8 text-blue-100" />
              <a
                href="tel:047-433-1126"
                className="text-3xl font-bold underline-offset-4 hover:underline touch-manipulation min-h-[48px] inline-flex items-center px-2 py-1 rounded transition-colors hover:bg-white/10"
                aria-label="047-433-1126 に電話する（24時間受付）"
                title="047-433-1126 に電話する（24時間受付）"
              >
                047-433-1126
              </a>
            </div>
            <p className="text-sm text-blue-100">受付時間: 24時間対応</p>
            <a
              href="tel:047-433-1126"
              className="btn-hilton-secondary inline-flex items-center gap-2 touch-manipulation"
            >
              <Phone className="h-5 w-5" />
              今すぐ電話する
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
