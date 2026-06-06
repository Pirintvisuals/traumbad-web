import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Marquee } from "@/components/Marquee"
import { Leistungen } from "@/components/Leistungen"
import { Leistungsverzeichnis } from "@/components/Leistungsverzeichnis"
import { Staerken } from "@/components/Staerken"
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
      <Leistungsverzeichnis />
      <Staerken />
      <Galerie />
      <Festpreis />
      <Bewertungen />
      <Kontakt />
      <Footer />
    </main>
  )
}
