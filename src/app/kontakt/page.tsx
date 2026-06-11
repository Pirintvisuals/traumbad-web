import type { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Kontakt } from "@/components/Kontakt"
import { PageHero } from "@/components/PageHero"

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
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Kontakt" }]}
        eyebrow="Kontakt"
        title="Schreiben Sie uns. Wir melden uns."
        description="Schildern Sie kurz Ihr Vorhaben — wir antworten innerhalb von 24 Stunden mit einem konkreten Festpreisangebot. Unverbindlich und kostenlos."
        image="/traumbad-eu-badsanierung-badezimmer-renovierung-28-341x341.jpg"
        imageAlt="Fertig saniertes Badezimmer von TraumBad im Burgenland"
        priority
      />

      <Kontakt />

      <Footer />
    </main>
  )
}
