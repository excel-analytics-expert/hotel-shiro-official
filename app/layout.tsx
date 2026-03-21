import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { GoogleAnalytics } from "@next/third-parties/google"
import HomeFab from "@/components/home-fab"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "(公式)ホテルシローWebサイト | 千葉県船橋市のビジネスホテル",
  description:
    "千葉県船橋市にあるビジネスホテルシロー。JR船橋駅南口から徒歩7分。東京ディズニーリゾートへのアクセス良好。",
  keywords:
    "ホテルシロー,船橋,ビジネスホテル,東京ディズニーリゾート,千葉,宿泊,予約,JR船橋駅,駐車場無料,24時間受付,観光,出張,アクセス良好,船橋市本町",
  authors: [{ name: "Hotel Shiro", url: "https://hotel-shiro-official.com" }],
  creator: "Hotel Shiro",
  publisher: "Hotel Shiro",
  category: "travel",
  classification: "business hotel",
  metadataBase: new URL("https://hotel-shiro-official.com"),
  alternates: {
    canonical: "https://hotel-shiro-official.com",
    languages: {
      "ja-JP": "https://hotel-shiro-official.com",
    },
  },
  openGraph: {
    title: "(公式)ホテルシローWebサイト | 千葉県船橋市のビジネスホテル",
    description:
      "千葉県船橋市にあるビジネスホテルシロー。JR船橋駅南口から徒歩7分。東京ディズニーリゾートへのアクセス良好。",
    url: "https://hotel-shiro-official.com",
    siteName: "ホテルシロー公式サイト",
    images: [
      {
        url: "/images/hero/funabashi-cityscape.jpg",
        width: 1200,
        height: 630,
        alt: "ホテルシロー - 船橋駅周辺の都市景観",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "(公式)ホテルシローWebサイト | 千葉県船橋市のビジネスホテル",
    description:
      "千葉県船橋市にあるビジネスホテルシロー。JR船橋駅南口から徒歩7分。東京ディズニーリゾートへのアクセス良好。",
    images: ["/images/hero/funabashi-cityscape.jpg"],
    site: "@hotel_shiro_funabashi",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // 正式ドメイン(hotel-shiro-official.com)用の最新コードを反映
    google: "5YKCv39_on_4oWkC-D7gCfT9XNVxEvTuPvM3eifaaGQ",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    "geo.region": "JP-12",
    "geo.placename": "Funabashi, Chiba",
    "geo.position": "35.694389;139.983611",
    ICBM: "35.694389, 139.983611",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <head>
        <link rel="preload" href="/images/hero/funabashi-cityscape.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/hero/wall-sign.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/hero/exterior-entrance.jpg" as="image" type="image/jpeg" />
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-48x48.png" sizes="48x48" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="theme-color" content="#0B3D91" />
        <meta name="msapplication-TileColor" content="#0B3D91" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ホテルシロー" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: "ホテルシロー",
              description: "千葉県船橋市にあるビジネスホテル。JR船橋駅南口から徒歩7分。",
              url: "https://hotel-shiro-official.com",
              telephone: "+81-47-433-1126",
              address: {
                "@type": "PostalAddress",
                streetAddress: "本町2-5-14",
                addressLocality: "船橋市",
                addressRegion: "千葉県",
                postalCode: "273-0005",
                addressCountry: "JP",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 35.694389,
                longitude: 139.983611,
              },
              checkinTime: "16:00",
              checkoutTime: "10:00",
              numberOfRooms: 42,
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "無料駐車場" },
                { "@type": "LocationFeatureSpecification", name: "24時間受付" },
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <HomeFab />
        <GoogleAnalytics gaId="G-Q52JJSZ84B" />
      </body>
    </html>
  )
}