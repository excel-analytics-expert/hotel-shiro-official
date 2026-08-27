// Meraboco. Created by s.kenichi
import type React from "react"
import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import HomeFab from "@/components/home-fab"
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
  preload: true,
})

export const metadata: Metadata = {
  title: '(公式)ホテルシローWebサイト | 千葉県船橋市のビジネスホテル',
  description: '千葉県船橋市にあるビジネスホテルシロー。JR船橋駅南口から徒歩7分。東京ディズニーリゾートへのアクセス良好。',
  authors: [{ name: 'Hotel Shiro', url: 'https://hotel-shiro-official.com' }],
  creator: 'Hotel Shiro',
  publisher: 'Hotel Shiro',
  keywords: ['ホテルシロー', '船橋', 'ビジネスホテル', '東京ディズニーリゾート', '千葉', '宿泊', '予約', 'JR船橋駅', '駐車場無料', '24時間受付', '観光', '出張', 'アクセス良好', '船橋市本町'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'travel',
  classification: 'business hotel',
  other: {
    'geo.region': 'JP-12',
    'geo.placename': 'Funabashi, Chiba',
    'geo.position': '35.694389;139.983611',
    'ICBM': '35.694389, 139.983611',
  },
  alternates: {
    canonical: 'https://hotel-shiro-official.com',
    languages: {
      'ja-JP': 'https://hotel-shiro-official.com',
    },
  },
  verification: {
    google: '5YKCv39_on_4oWkC-D7gCfT9XNVxEvTuPvM3eifaaGQ',
    yahoo: 'your-yahoo-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  openGraph: {
    title: '(公式)ホテルシローWebサイト | 千葉県船橋市のビジネスホテル',
    description: '千葉県船橋市にあるビジネスホテルシロー。JR船橋駅南口から徒歩7分。東京ディズニーリゾートへのアクセス良好。',
    url: 'https://hotel-shiro-official.com',
    siteName: 'ホテルシロー公式サイト',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: 'https://hotel-shiro-official.com/images/hero/funabashi-cityscape.jpg',
        width: 1200,
        height: 630,
        alt: 'ホテルシロー - 船橋駅周辺の都市景観',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@hotel_shiro_funabashi',
    title: '(公式)ホテルシローWebサイト | 千葉県船橋市のビジネスホテル',
    description: '千葉県船橋市にあるビジネスホテルシロー。JR船橋駅南口から徒歩7分。東京ディズニーリゾートへのアクセス良好。',
    images: ['https://hotel-shiro-official.com/images/hero/funabashi-cityscape.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    'name': 'ホテルシロー',
    'description': '千葉県船橋市にあるビジネスホテル。JR船橋駅南口から徒歩7分。',
    'url': 'https://hotel-shiro-official.com',
    'telephone': '+81-47-433-1126',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '本町2-5-14',
      'addressLocality': '船橋市',
      'addressRegion': '千葉県',
      'postalCode': '273-0005',
      'addressCountry': 'JP'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 35.694389,
      'longitude': 139.983611
    },
    'checkinTime': '16:00',
    'checkoutTime': '10:00',
    'numberOfRooms': 42,
    'amenityFeature': [
      {
        '@type': 'LocationFeatureSpecification',
        'name': '無料駐車場'
      },
      {
        '@type': 'LocationFeatureSpecification',
        'name': '24時間受付'
      }
    ]
  }

  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable} antialiased`}>
      <head>
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-white text-zinc-900 selection:bg-blue-600 selection:text-white">
        {children}
        <HomeFab />
        <GoogleAnalytics gaId="G-Q52JJSZ84B" />
      </body>
    </html>
  )
}