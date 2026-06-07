import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Reveal } from "@/components/Reveal"
import { ReferenzenGrid } from "@/components/ReferenzenGrid"

export const metadata: Metadata = {
  title: "Referenzen – Unsere Badsanierungen | TraumBad Burgenland",
  description:
    "Echte Projekte, echte Bäder: Komplettsanierungen, Teilumbauten und barrierefreie Bäder aus Burgenland und Wien. Sehen Sie selbst, wie wir arbeiten.",
  openGraph: {
    title: "Referenzen – Unsere Badsanierungen | TraumBad",
    description:
      "Echte Projekte aus Burgenland und Wien. Komplettsanierung, Teilsanierung und barrierefreie Bäder.",
    locale: "de_AT",
    type: "website",
  },
}

export default function ReferenzenPage() {
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
              <span className="text-teal font-medium">Referenzen</span>
            </nav>
          </Reveal>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-16 lg:items-end">
            <Reveal delay={0.06}>
              <h1 className="font-display font-bold text-[clamp(2.4rem,5.5vw,4.2rem)] text-white leading-[1.05] tracking-tight">
                Handwerk,
                <br />
                das man sieht.
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-white/55 text-lg leading-relaxed">
                Keine Renderings, keine Katalogbilder — echte Bäder, die wir in Burgenland und
                Wien gebaut haben. Filtern Sie nach Art der Sanierung und klicken Sie sich
                durch.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Filterable grid */}
      <ReferenzenGrid />

      {/* CTA */}
      <section className="bg-white py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-border rounded-2xl p-8 lg:p-12 bg-background">
            <div className="max-w-xl">
              <h2 className="font-display font-bold text-[clamp(1.6rem,3vw,2.3rem)] text-dark leading-[1.1] tracking-tight mb-3">
                Soll Ihr Bad das nächste hier sein?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Erzählen Sie uns kurz, was Ihnen vorschwebt. Mate Nagy kommt persönlich vorbei
                und erstellt ein unverbindliches Festpreisangebot.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-dark text-white font-semibold px-6 py-3.5 rounded-md transition-colors shadow-sm"
              >
                Anfrage stellen
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+436606304703"
                className="inline-flex items-center justify-center gap-2 border border-border hover:border-cta/40 text-dark font-semibold px-6 py-3.5 rounded-md transition-colors"
              >
                <Phone className="w-4 h-4 text-cta" />
                Anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
