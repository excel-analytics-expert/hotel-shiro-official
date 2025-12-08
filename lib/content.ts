export type Slide = {
  image: string
  title: string
  subtitle: string
  description: string
}

export type RoomOverride = {
  image?: string
  price?: string
}

export type AttractionOverride = {
  name: string
  image?: string
}

export type SiteContent = {
  slides?: Slide[]
  rooms?: Record<string, RoomOverride>
  attractions?: Record<string, AttractionOverride>
  updatedAt?: number
  version: 1
}

export const DEFAULT_CONTENT_KEY = "site.content.v1"

// Updated default slides to use the newly provided images
export const defaultSlides: Slide[] = [
  {
    image: "/images/hero/funabashi-cityscape.jpg",
    title: "心地よいおもてなし",
    subtitle: "JR船橋駅南口から徒歩7分の好立地",
    description: "ビジネスにも観光にも最適な立地で、快適なご滞在をお約束いたします。",
  },
  {
    image: "/images/hero/wall-sign.jpg",
    title: "快適な客室空間",
    subtitle: "全室Wi‑Fi完備・デスクワーク対応",
    description: "機能的で清潔な客室で、ゆっくりとお休みいただけます。",
  },
  {
    image: "/images/hero/exterior-entrance.jpg",
    title: "24時間安心サポート",
    subtitle: "いつでもお気軽にお声がけください",
    description: "フロントスタッフが24時間体制でお客様をサポートいたします。",
  },
]

export function loadContentClient(): SiteContent | null {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(DEFAULT_CONTENT_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as SiteContent
    if (parsed && (parsed as any).version === 1) return parsed
    return null
  } catch {
    return null
  }
}

export function saveContentClient(data: SiteContent) {
  if (typeof window === "undefined") return
  const payload: SiteContent = { ...data, updatedAt: Date.now(), version: 1 }
  window.localStorage.setItem(DEFAULT_CONTENT_KEY, JSON.stringify(payload))
}

export function toDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result))
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
