import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowLeft, Check, Clock, Users, Phone } from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Reveal } from "@/components/Reveal"
import { bundles, getBundle } from "@/lib/bundles"

export function generateStaticParams() {
  return bundles.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata(
  props: PageProps<"/leistungen/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params
  const bundle = getBundle(slug)
  if (!bundle) return {}

  const title = `${bundle.titel} – Badrenovierung zum Festpreis | TraumBad`
  const description = `${bundle.intro} ${bundle.beschreibung.slice(0, 120)}…`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: "de_AT",
      type: "article",
      images: [bundle.bild],
    },
  }
}

export default async function BundlePage(props: PageProps<"/leistungen/[slug]">) {
  const { slug } = await props.params
  const bundle = getBundle(slug)
  if (!bundle) notFound()

  const andere = bundles.filter((b) => b.slug !== bundle.slug)

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-dark pt-[120px] pb-20 lg:pt-[150px] lg:pb-28 overflow-hidden">
        {/* Teal glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.10] pointer-events-none"
          style={{ background: "radial-gradient(circle at 75% 25%, #2ABFBF 0%, transparent 60%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal y={12}>
            <Link
              href="/#leistungen"
              className="inline-flex items-center gap-2 text-white/45 hover:text-teal text-sm font-medium mb-10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Alle Leistungen
            </Link>
          </Reveal>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <span className="inline-block text-teal text-xs font-bold uppercase tracking-[0.2em] mb-5">
                  Leistung {bundle.nummer}
                </span>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="font-display font-bold text-[clamp(2.4rem,5.5vw,4rem)] text-white leading-[1.05] tracking-tight mb-4">
                  {bundle.titel}
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="text-teal font-semibold text-lg mb-6">{bundle.intro}</p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="text-white/55 text-lg leading-relaxed max-w-2xl mb-9">
                  {bundle.beschreibung}
                </p>
              </Reveal>

              {/* Festpreis + meta */}
              <Reveal delay={0.24}>
                <div className="flex flex-wrap items-end gap-x-10 gap-y-6 mb-10">
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-mono font-bold text-[2rem] text-white tracking-tight leading-none">
                        {bundle.preisVon}
                      </span>
                      <span className="font-mono text-white/35 text-xl leading-none">–</span>
                      <span className="font-mono font-bold text-[2rem] text-white tracking-tight leading-none">
                        {bundle.preisBis}
                      </span>
                      <span className="font-mono font-bold text-[2rem] text-white/55 tracking-tight leading-none">
                        €
                      </span>
                    </div>
                    <span className="mt-2 inline-block font-mono text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-teal">
                      Festpreis · inkl. Material
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-white/55 text-sm">
                    <Clock className="w-4 h-4 text-teal shrink-0" />
                    <span>{bundle.dauer}</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/#kontakt"
                    className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-semibold px-6 py-3.5 rounded-md transition-colors shadow-sm"
                  >
                    Kostenvoranschlag anfragen
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+436606304703"
                    className="inline-flex items-center gap-2 border border-white/15 hover:border-teal text-white font-semibold px-6 py-3.5 rounded-md transition-colors"
                  >
                    <Phone className="w-4 h-4 text-teal" />
                    +43 660 630 4703
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Image */}
            <Reveal delay={0.2} className="hidden lg:block">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={bundle.bild}
                  alt={`Referenz: ${bundle.titel}`}
                  fill
                  sizes="(max-width: 1024px) 0px, 35vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Für wen */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 lg:py-12">
          <Reveal>
            <div className="flex items-start gap-4 max-w-4xl">
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-teal" />
              </div>
              <div>
                <h2 className="font-display font-bold text-dark text-lg mb-1.5 tracking-tight">
                  Für wen ist die {bundle.titel} gedacht?
                </h2>
                <p className="text-muted-foreground leading-relaxed">{bundle.ideal}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Arbeiten — das Herzstück: was wir machen und was es ist */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mb-14 lg:mb-18">
            <Reveal>
              <span className="inline-block text-teal text-xs font-bold uppercase tracking-[0.2em] mb-4">
                Das steckt drin
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display font-bold text-[clamp(1.9rem,4vw,2.9rem)] text-dark leading-[1.1] tracking-tight mb-5">
                Welche Arbeiten in der {bundle.titel} stecken — und was sie bedeuten.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Damit Sie genau wissen, wofür Sie bezahlen, erklären wir jeden Arbeitsschritt
                in Klartext: was er ist und wie wir ihn ausführen.
              </p>
            </Reveal>
          </div>

          <div className="space-y-5 lg:space-y-6">
            {bundle.arbeiten.map((arbeit, i) => (
              <Reveal key={arbeit.titel} delay={i * 0.05}>
                <div className="group bg-white border border-border rounded-2xl p-7 lg:p-9 hover:shadow-xl hover:shadow-dark/5 transition-all duration-400">
                  <div className="grid lg:grid-cols-[auto_1fr] gap-5 lg:gap-9">
                    {/* Number */}
                    <div className="flex lg:flex-col items-center lg:items-start gap-4">
                      <span className="font-mono font-bold text-2xl text-teal tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="hidden lg:block w-px flex-1 bg-border group-hover:bg-teal/30 transition-colors" />
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-[1.4rem] text-dark mb-5 tracking-tight">
                        {arbeit.titel}
                      </h3>

                      <div className="grid sm:grid-cols-2 gap-6 lg:gap-10">
                        <div>
                          <span className="inline-block text-[0.7rem] font-bold uppercase tracking-[0.16em] text-dark/40 mb-2.5">
                            Was ist das?
                          </span>
                          <p className="text-muted-foreground leading-relaxed text-[0.96rem]">
                            {arbeit.was}
                          </p>
                        </div>
                        <div className="sm:border-l sm:border-border sm:pl-6 lg:pl-10">
                          <span className="inline-block text-[0.7rem] font-bold uppercase tracking-[0.16em] text-teal mb-2.5">
                            Das machen wir
                          </span>
                          <p className="text-muted-foreground leading-relaxed text-[0.96rem]">
                            {arbeit.wir}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="bg-white py-20 lg:py-28 border-y border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <span className="inline-block text-teal text-xs font-bold uppercase tracking-[0.2em] mb-4">
              So läuft es ab
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display font-bold text-[clamp(1.9rem,4vw,2.9rem)] text-dark leading-[1.1] tracking-tight mb-14 max-w-2xl">
              Vom ersten Anruf bis zur Übergabe.
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {bundle.ablauf.map((schritt, i) => (
              <Reveal key={schritt.titel} delay={i * 0.08}>
                <div className="relative border border-border rounded-2xl p-7 h-full hover:border-teal/40 transition-colors">
                  <span className="font-mono font-bold text-5xl text-dark/5 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display font-bold text-lg text-dark mt-4 mb-2.5 tracking-tight">
                    {schritt.titel}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{schritt.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inklusive + CTA */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <Reveal>
                <span className="inline-block text-teal text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  Im Festpreis enthalten
                </span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="font-display font-bold text-[clamp(1.9rem,4vw,2.9rem)] text-dark leading-[1.1] tracking-tight mb-8">
                  Alles inklusive. Keine versteckten Posten.
                </h2>
              </Reveal>
              <ul className="space-y-3.5">
                {bundle.inklusive.map((item, i) => (
                  <Reveal key={item} delay={i * 0.05}>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-teal" />
                      </span>
                      <span className="text-dark/75 leading-relaxed">{item}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            {/* CTA card */}
            <Reveal delay={0.1}>
              <div className="bg-dark rounded-2xl p-9 lg:p-11 relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-72 h-72 opacity-[0.12] pointer-events-none"
                  style={{ background: "radial-gradient(circle at 70% 30%, #2ABFBF 0%, transparent 60%)" }}
                />
                <div className="relative z-10">
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="font-mono font-bold text-3xl text-white tracking-tight leading-none">
                      {bundle.preisVon}
                    </span>
                    <span className="font-mono text-white/35 text-xl leading-none">–</span>
                    <span className="font-mono font-bold text-3xl text-white tracking-tight leading-none">
                      {bundle.preisBis} €
                    </span>
                  </div>
                  <span className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-teal">
                    Festpreis · inkl. Material
                  </span>

                  <p className="text-white/55 leading-relaxed mt-6 mb-8">
                    Ihr {bundle.titel}-Projekt beginnt mit einem kostenlosen Aufmaß und einem
                    verbindlichen Kostenvoranschlag — innerhalb von 24 Stunden, ohne
                    Verpflichtung.
                  </p>

                  <Link
                    href="/#kontakt"
                    className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark text-white font-semibold px-6 py-3.5 rounded-md transition-colors w-full sm:w-auto"
                  >
                    Anfrage stellen
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+436606304703"
                    className="flex items-center gap-2 text-white/70 hover:text-teal font-semibold mt-5 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-teal" />
                    +43 660 630 4703
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Andere Pakete */}
      <section className="bg-white py-20 lg:py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-2xl text-dark tracking-tight mb-9">
              Andere Leistungen
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
            {andere.map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.08}>
                <Link
                  href={`/leistungen/${b.slug}`}
                  className="group flex items-center justify-between gap-6 bg-background border border-border rounded-2xl p-7 hover:border-teal/40 hover:shadow-lg hover:shadow-dark/5 transition-all duration-300"
                >
                  <div>
                    <span className="font-mono text-xs font-semibold text-teal">
                      Leistung {b.nummer}
                    </span>
                    <h3 className="font-display font-bold text-xl text-dark mt-1 mb-1 tracking-tight">
                      {b.titel}
                    </h3>
                    <p className="text-muted-foreground text-sm">{b.intro}</p>
                    <span className="inline-block font-mono text-sm font-bold text-dark/70 mt-3">
                      ab {b.preisVon} €
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-dark/30 group-hover:text-teal group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
