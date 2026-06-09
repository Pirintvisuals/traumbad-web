import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Marquee } from "@/components/Marquee"
import { Zahlen } from "@/components/Zahlen"
import { Leistungen } from "@/components/Leistungen"
import { Staerken } from "@/components/Staerken"
import { Galerie } from "@/components/Galerie"
import { Bewertungen } from "@/components/Bewertungen"
import { Abschluss } from "@/components/Abschluss"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Zahlen />
      <Leistungen showAllLink />
      <Staerken />
      <Galerie />
      <Bewertungen />
      <Abschluss />
      <Footer />
    </main>
  )
}
