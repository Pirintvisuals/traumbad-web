import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Marquee } from "@/components/Marquee"
import { Leistungen } from "@/components/Leistungen"
import { Galerie } from "@/components/Galerie"
import { Festpreis } from "@/components/Festpreis"
import { Bewertungen } from "@/components/Bewertungen"
import { Kontakt } from "@/components/Kontakt"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Leistungen />
      <Galerie />
      <Festpreis />
      <Bewertungen />
      <Kontakt />
      <Footer />
    </main>
  )
}
