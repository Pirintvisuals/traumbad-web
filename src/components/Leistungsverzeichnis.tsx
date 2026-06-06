import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { bundles } from "@/lib/bundles"

// Vollständiges Leistungsverzeichnis: jede einzelne Arbeit aus allen drei
// Paketen, mit Kurzbeschreibung. Klick führt zur ausführlichen Erklärung
// auf der jeweiligen Paket-Unterseite (Anker auf die konkrete Arbeit).

export function Leistungsverzeichnis() {
  return (
    <section
      id="leistungsverzeichnis"
      className="bg-white py-24 lg:py-32 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-16 lg:mb-20 max-w-2xl">
          <Reveal y={12}>
            <span className="inline-block text-teal text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Leistungsverzeichnis
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] text-dark leading-[1.1] tracking-tight mb-5">
              Jeder Handgriff,
              <br />
              einzeln erklärt.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Hier finden Sie jede einzelne Leistung, die wir ausführen — kurz erklärt.
              Ein Klick führt Sie direkt zum passenden Paket, wo wir genau beschreiben,
              was dahintersteckt und wie wir es umsetzen.
            </p>
          </Reveal>
        </div>

        {/* Eine Gruppe je Paket */}
        <div className="space-y-14 lg:space-y-20">
          {bundles.map((bundle) => (
            <div key={bundle.slug}>
              {/* Gruppen-Kopf */}
              <Reveal y={16}>
                <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 mb-7 pb-5 border-b border-border">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm font-semibold text-teal tabular-nums">
                      {bundle.nummer}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-[1.6rem] text-dark tracking-tight leading-none">
                        {bundle.titel}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1.5">{bundle.intro}</p>
                    </div>
                  </div>
                  <Link
                    href={`/leistungen/${bundle.slug}`}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-dark/70 hover:text-teal transition-colors"
                  >
                    Ganzes Paket ansehen
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </Reveal>

              {/* Leistungen des Pakets */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 lg:gap-4">
                {bundle.arbeiten.map((arbeit, i) => {
                  const Icon = arbeit.icon
                  return (
                    <Reveal key={arbeit.id} delay={i * 0.05} y={20}>
                      <Link
                        href={`/leistungen/${bundle.slug}#${arbeit.id}`}
                        className="group relative flex gap-4 h-full bg-background border border-border rounded-xl p-5 hover:border-teal/40 hover:bg-white hover:shadow-lg hover:shadow-dark/5 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center shrink-0 group-hover:bg-teal/15 transition-colors">
                          <Icon className="w-5 h-5 text-teal" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-display font-bold text-[1.02rem] text-dark tracking-tight leading-snug mb-1 pr-5">
                            {arbeit.titel}
                          </h4>
                          <p className="text-muted-foreground text-[0.85rem] leading-relaxed">
                            {arbeit.kurz}
                          </p>
                        </div>
                        <ArrowUpRight className="absolute top-4 right-4 w-4 h-4 text-dark/20 group-hover:text-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                      </Link>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
