import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Kontakt } from "@/components/Kontakt"
import { Reveal } from "@/components/Reveal"

export const metadata: Metadata = {
  title: "Kontakt – Kostenloses Festpreisangebot | TraumBad",
  description:
    "Schildern Sie kurz Ihr Vorhaben — wir antworten innerhalb von 24 Stunden mit einem verbindlichen Festpreisangebot. Inhabergeführt, Burgenland & Wien.",
  openGraph: {
    title: "Kontakt – Kostenloses Festpreisangebot | TraumBad",
    description:
      "In 24 Stunden zum verbindlichen Festpreisangebot. Unverbindlich und kostenlos.",
    locale: "de_AT",
    type: "website",
  },
}

export default function KontaktPage() {
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
              <span className="text-teal font-medium">Kontakt</span>
            </nav>
          </Reveal>
          <Reveal>
            <h1 className="font-display font-bold text-[clamp(2.4rem,5.5vw,4rem)] text-white leading-[1.05] tracking-tight mb-4 max-w-3xl">
              Schreiben Sie uns. Wir melden uns.
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-white/55 text-lg leading-relaxed max-w-2xl">
              Schildern Sie kurz Ihr Vorhaben — wir antworten innerhalb von 24 Stunden mit
              einem konkreten Festpreisangebot. Unverbindlich und kostenlos.
            </p>
          </Reveal>
        </div>
      </section>

      <Kontakt />

      <Footer />
    </main>
  )
}
