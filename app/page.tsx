import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import RoomsSection from "@/components/rooms-section"
import AmenitiesSection from "@/components/amenities-section"
import AttractionsSection from "@/components/attractions-section"
import ReservationSection from "@/components/reservation-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import MouseEffects from "@/components/mouse-effects"
import ScrollReveal from "@/components/scroll-reveal"
import AssembleOnScroll from "@/components/assemble-on-scroll"

export default function Home() {
  return (
    <main className="min-h-screen">
      <MouseEffects />
      <AssembleOnScroll />
      <ScrollReveal />
      <Header />
      <HeroSection />
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
