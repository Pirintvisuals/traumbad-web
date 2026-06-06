import type { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Impressum | TraumBad Installations",
  description: "Impressum und Offenlegung gemäß §5 ECG und §25 MedienG — TraumBad (Mate Nagy E.U.), Heiligenkreuz, Burgenland.",
  robots: { index: false, follow: true },
}

const rows: { label: string; value: React.ReactNode }[] = [
  { label: "Unternehmen", value: "Mate Nagy E.U. (Einzelunternehmen, inhabergeführt)" },
  { label: "Inhaber", value: "Mate Nagy" },
  { label: "Anschrift", value: "Obere Hauptstraße 4, 7561 Heiligenkreuz, Burgenland, Österreich" },
  {
    label: "Telefon",
    value: (
      <a href="tel:+436606304703" className="text-cta hover:text-cta-dark font-semibold transition-colors">
        +43 660 630 4703
      </a>
    ),
  },
  {
    label: "E-Mail",
    value: (
      <a href="mailto:office@traumbad.eu" className="text-dark hover:text-teal transition-colors">
        office@traumbad.eu
      </a>
    ),
  },
  { label: "UID-Nummer", value: "ATU 78101448" },
  { label: "Unternehmensgegenstand", value: "Badsanierung & Badrenovierung" },
  { label: "Aufsichtsbehörde / Gewerbebehörde", value: "Bezirkshauptmannschaft Jennersdorf" },
  { label: "Anwendbare Rechtsvorschrift", value: "Gewerbeordnung (GewO), abrufbar unter ris.bka.gv.at" },
]

export default function ImpressumPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-dark pt-[100px] pb-14 lg:pt-[120px] lg:pb-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-teal">
            Rechtliches
          </span>
          <h1 className="mt-4 font-display font-bold text-[clamp(2.2rem,5vw,3.4rem)] text-white leading-[1.05] tracking-tight">
            Impressum
          </h1>
          <p className="mt-3 text-white/55">
            Offenlegung gemäß §5 ECG und §25 Mediengesetz.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <dl className="divide-y divide-border border-y border-border">
            {rows.map((row) => (
              <div key={row.label} className="grid sm:grid-cols-[200px_1fr] gap-1 sm:gap-6 py-4">
                <dt className="text-muted-foreground text-sm">{row.label}</dt>
                <dd className="text-dark text-[0.96rem] leading-relaxed">{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 space-y-6 text-muted-foreground text-sm leading-relaxed">
            <div>
              <h2 className="font-display font-bold text-dark text-base mb-2">Haftung für Inhalte</h2>
              <p>
                Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
                Gewähr übernehmen.
              </p>
            </div>
            <div>
              <h2 className="font-display font-bold text-dark text-base mb-2">Urheberrecht</h2>
              <p>
                Alle Fotos zeigen reale, von uns ausgeführte Projekte. Die auf dieser Website
                veröffentlichten Inhalte und Bilder unterliegen dem österreichischen Urheberrecht.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
