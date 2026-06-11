import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { PageHero } from "@/components/PageHero"
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
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Referenzen" }]}
        eyebrow="Referenzen"
        title={
          <>
            Handwerk,
            <br />
            das man sieht.
          </>
        }
        description="Keine Renderings, keine Katalogbilder — echte Bäder, die wir in Burgenland und Wien gebaut haben. Filtern Sie nach Art der Sanierung und klicken Sie sich durch."
        image="/traumbad-eu-badsanierung-badezimmer-renovierung-30-341x341.jpg"
        imageAlt="Von TraumBad fertiggestelltes Badezimmer im Burgenland"
        priority
      />

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
