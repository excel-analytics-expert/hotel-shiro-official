import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Globe, CreditCard } from "lucide-react"

export default function ReservationSection() {
  const methods = [
    {
      icon: <Phone className="h-8 w-8 text-[#0B3D91]" />,
      title: "お電話の予約",
      description: "24時間受付・即座に空室確認",
      contact: "047-433-1126",
      note: "深夜・早朝はフロントスタッフが対応",
      href: "tel:047-433-1126",
      cta: "今すぐ電話",
    },
    {
      icon: <Globe className="h-8 w-8 text-[#0B3D91]" />,
      title: "提携予約サイト",
      description: "24時間いつでも予約可能",
      contact: "各予約サイト",
      note: "ポイント利用可能",
      href: "/reservation",
      cta: "提携予約サイト",
    },
  ]

  const CreditCardLogos = () => (
    <div className="mt-4 pt-4 border-t border-gray-200">
      <div className="flex items-center justify-center gap-2 mb-2">
        <CreditCard className="h-4 w-4 text-[#0B3D91]" />
        <span className="text-sm font-medium text-zinc-700">クレジットカード利用可</span>
      </div>
      <div className="flex items-center justify-center gap-3 flex-wrap">
        {/* Visa */}
        <div className="bg-white rounded px-2 py-1 shadow-sm border">
          <span className="text-xs font-bold text-blue-600">VISA</span>
        </div>
        {/* Mastercard */}
        <div className="bg-white rounded px-2 py-1 shadow-sm border">
          <span className="text-xs font-bold text-red-600">Master</span>
        </div>
        {/* JCB */}
        <div className="bg-white rounded px-2 py-1 shadow-sm border">
          <span className="text-xs font-bold text-blue-800">JCB</span>
        </div>
        {/* American Express */}
        <div className="bg-white rounded px-2 py-1 shadow-sm border">
          <span className="text-xs font-bold text-blue-700">AMEX</span>
        </div>
      </div>
    </div>
  )

  return (
    <section id="reservation" className="bg-[#F6F8FB] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="section-title-hilton mb-4 text-4xl text-zinc-900">ご予約</h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-600">
            お電話またはWebサイトで簡単にご予約いただけます。お客様のご都合に合わせてお選びください。
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {methods.map((m) => (
            <Card key={m.title} className="card-hilton text-center">
              <CardHeader>
                <div className="mb-4 flex justify-center">{m.icon}</div>
                <CardTitle className="text-xl">{m.title}</CardTitle>
                <p className="text-zinc-600">{m.description}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-2xl font-bold text-[#0B3D91]">{m.contact}</p>
                <p className="mb-4 text-sm text-zinc-600">{m.note}</p>
                <a
                  href={m.href}
                  target={m.href.startsWith("tel:") ? undefined : m.href === "/reservation" ? undefined : "_blank"}
                  rel={m.href.startsWith("tel:") || m.href === "/reservation" ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center justify-center rounded-full bg-[#0B3D91] px-8 py-3 text-white font-semibold hover:bg-blue-800 transition-colors duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#0B3D91] focus:ring-offset-2 min-h-[44px] touch-manipulation"
                >
                  {m.cta}
                </a>
                <CreditCardLogos />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
