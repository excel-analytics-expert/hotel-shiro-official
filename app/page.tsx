// Meraboco. Created by s.kenichi
import dynamic from "next/dynamic"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import MouseEffects from "@/components/mouse-effects"
import ScrollReveal from "@/components/scroll-reveal"
import AssembleOnScroll from "@/components/assemble-on-scroll"

// 画面外（ファーストビュー以降）に表示されるコンポーネントを遅延読み込み（Lazy Load）化
// これにより初期ロード時のJSバンドルサイズが大幅に削減され、モバイルのパフォーマンススコア（TBT, LCPなど）が劇的に改善されます。
const AboutSection = dynamic(() => import("@/components/about-section"))
const RoomsSection = dynamic(() => import("@/components/rooms-section"))
const AmenitiesSection = dynamic(() => import("@/components/amenities-section"))
const AttractionsSection = dynamic(() => import("@/components/attractions-section"))
const ReservationSection = dynamic(() => import("@/components/reservation-section"))
const ContactSection = dynamic(() => import("@/components/contact-section"))
const Footer = dynamic(() => import("@/components/footer"))

export default function Home() {
  return (
    <main className="min-h-screen">
      <MouseEffects />
      <AssembleOnScroll />
      <ScrollReveal />
      
      {/* ファーストビュー（重要コンテンツ）は即時読み込み */}
      <Header />
      <HeroSection />
      
      {/* スクロール後に表示されるコンテンツは遅延読み込み */}
      <AboutSection />
      <RoomsSection />
      <AmenitiesSection />
      <AttractionsSection />
      <ReservationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
