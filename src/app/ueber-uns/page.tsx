import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, MapPin, Quote } from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Reveal } from "@/components/Reveal"
import { staerken } from "@/lib/staerken"

export const metadata: Metadata = {
  title: "Über uns – Mate Nagy & TraumBad Installations | Badrenovierung Burgenland",
  description:
    "Inhabergeführt, seit über 10 Jahren. Mate Nagy betreut Ihre Badsanierung persönlich — von der kostenlosen Erstbesichtigung bis zur Übergabe. Klein, aber fein, aus dem Burgenland.",
  openGraph: {
    title: "Über uns – Mate Nagy & TraumBad Installations",
    description:
      "Inhabergeführt, seit über 10 Jahren. Persönlich betreut, sauber gearbeitet, zum Festpreis.",
    locale: "de_AT",
    type: "article",
  },
}

const stats = [
  { value: "10+", label: "Jahre Erfahrung" },
  { value: "200+", label: "fertige Bäder" },
  { value: "1", label: "Ansprechpartner" },
  { value: "100%", label: "Festpreis" },
]

export default function UeberUnsPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-background pt-[120px] pb-16 lg:pt-[150px] lg:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <span className="inline-block text-teal text-xs font-bold uppercase tracking-[0.2em] mb-5">
                  Über uns
                </span>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="font-display font-bold text-[clamp(2.4rem,5.5vw,4.2rem)] text-dark leading-[1.04] tracking-tight mb-6">
                  Klein, aber fein.
                  <br />
                  Seit über <span className="text-teal">zehn Jahren.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-5">
                  TraumBad ist ein inhabergeführter Betrieb aus Heiligenkreuz im Burgenland.
                  Keine anonyme Firma, kein Callcenter — sondern ein fester Name, der für jedes
                  Bad geradesteht: <strong className="text-dark font-semibold">Mate Nagy</strong>.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-9">
                  Vom ersten Plan bis zur letzten Fliese begleitet Sie eine Person — die, die
                  auch die Arbeit macht.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/#kontakt"
                    className="inline-flex items-center gap-2 bg-cta hover:bg-cta-dark text-white font-semibold px-6 py-3.5 rounded-md transition-colors shadow-sm"
                  >
                    Anfrage stellen
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+436606304703"
                    className="inline-flex items-center gap-2 border border-border hover:border-cta/40 text-cta font-semibold px-6 py-3.5 rounded-md transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +43 660 630 4703
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="hidden lg:block">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-xl">
                <Image
                  src="/traumbad-eu-badsanierung-badezimmer-renovierung-23-525x696.jpg"
                  alt="Von TraumBad fertiggestelltes Badezimmer im Burgenland"
                  fill
                  sizes="(max-width: 1024px) 0px, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div
                  className={`px-4 py-9 lg:py-11 text-center ${
                    i < stats.length - 1 ? "lg:border-r border-border" : ""
                  } ${i < 2 ? "border-b lg:border-b-0 border-border" : ""} ${
                    i === 0 ? "border-r border-border" : ""
                  } ${i === 2 ? "border-r border-border" : ""}`}
                >
                  <div className="font-mono font-bold text-3xl lg:text-4xl text-dark tracking-tight mb-1">
                    {s.value}
                  </div>
                  <div className="text-muted-foreground text-xs sm:text-sm">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <span className="inline-block text-teal text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  Unsere Geschichte
                </span>
                <h2 className="font-display font-bold text-[clamp(1.9rem,4vw,2.9rem)] text-dark leading-[1.1] tracking-tight">
                  Der Chef steht
                  <br />
                  selbst auf der
                  <br />
                  Baustelle.
                </h2>
              </div>
            </Reveal>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-2xl">
              <Reveal delay={0.06}>
                <p>
                  Angefangen hat alles mit einer einfachen Überzeugung: Ein Bad ist kein
                  Massenprodukt. Es wird jeden Tag benutzt, es soll Jahrzehnte halten — und es
                  verdient jemanden, der sich verantwortlich fühlt. Genau das ist bei uns
                  Programm.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Seit über zehn Jahren saniert{" "}
                  <strong className="text-dark font-semibold">Mate Nagy</strong> Bäder im
                  Burgenland und in Wien. Er kommt persönlich zur kostenlosen Erstbesichtigung,
                  plant mit Ihnen, koordiniert die Arbeiten und übergibt Ihnen am Ende das
                  fertige Bad. Kein Subunternehmer, der die Arbeit weiterreicht. Kein
                  Callcenter, das Sie vertröstet. Ein Ansprechpartner — von Anfang bis Ende.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p>
                  Weil wir bewusst klein bleiben, können wir uns auf das konzentrieren, was
                  zählt: saubere, staubarme Arbeit, ehrliche Beratung und ein Preis, der vorher
                  feststeht und hinterher gilt. „Klein, aber fein“ ist für uns keine Floskel,
                  sondern unser Geschäftsmodell.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="border-l-2 border-teal pl-6 py-1 mt-2">
                  <Quote className="w-7 h-7 text-teal/30 mb-3" />
                  <p className="font-display text-dark text-xl lg:text-2xl font-medium leading-snug tracking-tight">
                    „Ihr neues Traumbad — vom ersten Plan bis zur letzten Fliese. Dafür stehe
                    ich mit meinem Namen.“
                  </p>
                  <p className="text-sm font-semibold text-dark mt-4">
                    Mate Nagy <span className="text-muted-foreground font-normal">· Inhaber</span>
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stärken */}
      <section className="bg-white py-20 lg:py-28 border-y border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mb-14 lg:mb-18">
            <Reveal>
              <span className="inline-block text-teal text-xs font-bold uppercase tracking-[0.2em] mb-4">
                Was uns ausmacht
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display font-bold text-[clamp(1.9rem,4vw,2.9rem)] text-dark leading-[1.1] tracking-tight mb-5">
                Sechs Gründe, warum Ihr Bad bei uns gut aufgehoben ist.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {staerken.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.titel} delay={(i % 3) * 0.08}>
                  <div className="h-full border border-border rounded-2xl p-8 hover:shadow-lg hover:shadow-dark/5 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-teal" />
                    </div>
                    <h3 className="font-display font-bold text-[1.2rem] text-dark mb-3 tracking-tight">
                      {s.titel}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-[0.95rem]">
                      {s.text}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Einzugsgebiet */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 text-teal text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  <MapPin className="w-4 h-4" />
                  Einzugsgebiet
                </span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="font-display font-bold text-[clamp(1.9rem,4vw,2.9rem)] text-dark leading-[1.1] tracking-tight mb-5">
                  Zuhause im Burgenland. Schnell bei Ihnen.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Unser Betrieb sitzt in Heiligenkreuz im Burgenland. Von hier aus sind wir rasch
                  bei Ihnen — im gesamten Burgenland, im angrenzenden Niederösterreich und in
                  Wien.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="text-muted-foreground leading-relaxed">
                  Sie sind nicht sicher, ob Ihr Ort dabei ist? Rufen Sie kurz an — wir sagen es
                  Ihnen ehrlich.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="bg-dark rounded-2xl p-9 lg:p-11 relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-72 h-72 opacity-[0.12] pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 70% 30%, #2ABFBF 0%, transparent 60%)",
                  }}
                />
                <div className="relative z-10">
                  <h3 className="font-display font-bold text-white text-xl tracking-tight mb-2">
                    Kostenlose Erstbesichtigung
                  </h3>
                  <p className="text-white/55 leading-relaxed mb-8">
                    Mate Nagy kommt persönlich vorbei, sieht sich Ihr Bad an und erstellt ein
                    unverbindliches Festpreisangebot — innerhalb von 24 Stunden.
                  </p>
                  <Link
                    href="/#kontakt"
                    className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-dark text-white font-semibold px-6 py-3.5 rounded-md transition-colors w-full sm:w-auto"
                  >
                    Termin anfragen
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+436606304703"
                    className="flex items-center gap-2 text-cta hover:text-cta-dark font-semibold mt-5 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +43 660 630 4703
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
