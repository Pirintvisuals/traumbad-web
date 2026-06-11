import type { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { PageHero } from "@/components/PageHero"

export const metadata: Metadata = {
  title: "Datenschutz | TraumBad Installations",
  description: "Datenschutzerklärung gemäß DSGVO — wie TraumBad (Mate Nagy E.U.) mit Ihren Daten umgeht.",
  robots: { index: false, follow: true },
}

const abschnitte: { titel: string; text: React.ReactNode }[] = [
  {
    titel: "Verantwortlicher",
    text: (
      <>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist Mate Nagy E.U.,
        Obere Hauptstraße 4, 7561 Heiligenkreuz, Österreich. Bei Fragen zum Datenschutz
        erreichen Sie uns unter{" "}
        <a href="mailto:office@traumbad.eu" className="text-teal hover:text-teal-dark transition-colors">
          office@traumbad.eu
        </a>{" "}
        oder{" "}
        <a href="tel:+436606304703" className="text-cta hover:text-cta-dark font-semibold transition-colors">
          +43 660 630 4703
        </a>
        .
      </>
    ),
  },
  {
    titel: "Kontaktaufnahme & Anfrageformular",
    text: (
      <>
        Wenn Sie uns über das Anfrageformular oder per E-Mail kontaktieren, verarbeiten wir
        die von Ihnen angegebenen Daten (Name, Telefonnummer, E-Mail-Adresse, gewünschte
        Leistung und Ihre Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage und für
        die Erstellung eines Kostenvoranschlags. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
        DSGVO (vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
        Interesse an der Beantwortung Ihrer Anfrage).
      </>
    ),
  },
  {
    titel: "Speicherdauer",
    text: "Wir speichern Ihre Daten nur so lange, wie es für die Bearbeitung Ihrer Anfrage und die anschließende Geschäftsbeziehung erforderlich ist, bzw. solange gesetzliche Aufbewahrungspflichten bestehen.",
  },
  {
    titel: "Weitergabe an Dritte",
    text: "Eine Weitergabe Ihrer Daten an Dritte erfolgt nicht, außer dies ist zur Vertragserfüllung notwendig oder Sie haben ausdrücklich eingewilligt.",
  },
  {
    titel: "Ihre Rechte",
    text: "Ihnen stehen die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch zu. Sie haben außerdem das Recht, sich bei der österreichischen Datenschutzbehörde (dsb.gv.at) zu beschweren.",
  },
  {
    titel: "Server-Logs",
    text: "Beim Aufruf dieser Website werden durch den Hosting-Provider technisch notwendige Daten (z. B. IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene Seite) verarbeitet, um den sicheren und stabilen Betrieb zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.",
  },
]

export default function DatenschutzPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Datenschutz" }]}
        eyebrow="Rechtliches"
        title="Datenschutz"
        description="Wie wir mit Ihren Daten umgehen — gemäß DSGVO."
        image="/traumbad-eu-badsanierung-badezimmer-renovierung-32-341x341.jpg"
        imageAlt="Von TraumBad saniertes Badezimmer im Burgenland"
      />

      <section className="bg-background py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-10">
          {abschnitte.map((a) => (
            <div key={a.titel}>
              <h2 className="font-display font-bold text-dark text-lg mb-3 tracking-tight">
                {a.titel}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
