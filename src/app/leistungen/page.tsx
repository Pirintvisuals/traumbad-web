import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Leistungen } from "@/components/Leistungen"
import { Leistungsverzeichnis } from "@/components/Leistungsverzeichnis"
import { Reveal } from "@/components/Reveal"

export const metadata: Metadata = {
  title: "Leistungen – Badsanierung zum Festpreis | TraumBad",
  description:
    "Alle Leistungen von TraumBad auf einen Blick: drei Pakete von der Frischekur bis zur Komplettsanierung — und jede einzelne Arbeit, verständlich erklärt. Alles zum Festpreis.",
  openGraph: {
    title: "Leistungen – Badsanierung zum Festpreis | TraumBad",
    description:
      "Drei Pakete von der Frischekur bis zur Komplettsanierung — und jede einzelne Leistung, verständlich erklärt.",
    locale: "de_AT",
    type: "website",
  },
}

export default function LeistungenPage() {
  return (
    <main>
      <Navbar />

      {/* Page header */}
      <section className="relative bg-dark pt-[100px] pb-14 lg:pt-[120px] lg:pb-18 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.10] pointer-events-none"
          style={{ background: "radial-gradient(circle at 75% 25%, #2ABFBF 0%, transparent 60%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal y={12}>
            <nav aria-label="Brotkrümel" className="mb-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
              <Link href="/" className="text-white/45 hover:text-white transition-colors">
                Start
              </Link>
              <span className="text-white/25">/</span>
              <span className="text-teal font-medium">Leistungen</span>
            </nav>
          </Reveal>
          <Reveal>
            <h1 className="font-display font-bold text-[clamp(2.4rem,5.5vw,4rem)] text-white leading-[1.05] tracking-tight mb-4 max-w-3xl">
              Alles für Ihr neues Bad — zum Festpreis.
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-white/55 text-lg leading-relaxed max-w-2xl">
              Drei Pakete — von der schnellen Frischekur bis zur kompletten Sanierung.
              Wählen Sie, was zu Ihrem Vorhaben passt, oder sehen Sie sich weiter unten
              jede einzelne Leistung im Detail an. Der Preis steht vorher fest.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Die drei Pakete + vollständiges Leistungsverzeichnis */}
      <Leistungen />
      <Leistungsverzeichnis />

      <Footer />
    </main>
  )
}
