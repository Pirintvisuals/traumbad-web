import type { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Leistungen } from "@/components/Leistungen"
import { Leistungsverzeichnis } from "@/components/Leistungsverzeichnis"
import { PageHero } from "@/components/PageHero"

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
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Leistungen" }]}
        eyebrow="Leistungen"
        title="Alles für Ihr neues Bad — zum Festpreis."
        description="Drei Pakete — von der schnellen Frischekur bis zur kompletten Sanierung. Wählen Sie, was zu Ihrem Vorhaben passt, oder sehen Sie sich weiter unten jede einzelne Leistung im Detail an. Der Preis steht vorher fest."
        image="/traumbad-eu-badsanierung-badezimmer-renovierung-25-341x341.jpg"
        imageAlt="Modern saniertes Badezimmer von TraumBad"
        priority
      />

      {/* Die drei Pakete + vollständiges Leistungsverzeichnis */}
      <Leistungen />
      <Leistungsverzeichnis />

      <Footer />
    </main>
  )
}
