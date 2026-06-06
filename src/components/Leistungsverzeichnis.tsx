import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { bundles } from "@/lib/bundles"

// "Alles, was wir machen" — das vollständige Leistungsverzeichnis als ruhige,
// scanbare Liste (nicht als Kartenwand). Jede Zeile verlinkt direkt zur
// ausführlichen Erklärung auf der jeweiligen Paket-Unterseite.

export function Leistungsverzeichnis() {
  return (
    <section
      id="leistungsverzeichnis"
      className="bg-white py-24 lg:py-32 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14 lg:mb-18 max-w-2xl">
          <Reveal y={12}>
            <span className="inline-block text-teal text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Alle Leistungen
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] text-dark leading-[1.1] tracking-tight mb-5">
              Alles, was wir machen.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Vom getauschten Wasserhahn bis zur Komplettsanierung — hier sehen Sie jede
              einzelne Leistung auf einen Blick. Tippen Sie auf eine Leistung, und wir
              erklären sie ausführlich.
            </p>
          </Reveal>
        </div>

        {/* Drei Listen — eine je Paket */}
        <div className="grid lg:grid-cols-3 gap-x-10 gap-y-12">
          {bundles.map((bundle) => (
            <Reveal key={bundle.slug} y={20}>
              <div>
                {/* Listen-Kopf */}
                <Link
                  href={`/leistungen/${bundle.slug}`}
                  className="group flex items-baseline justify-between gap-3 pb-4 mb-2 border-b-2 border-dark/10 hover:border-teal transition-colors"
                >
                  <span className="flex items-baseline gap-2.5">
                    <span className="font-mono text-xs font-semibold text-teal">
                      {bundle.nummer}
                    </span>
                    <span className="font-display font-bold text-xl text-dark tracking-tight group-hover:text-teal transition-colors">
                      {bundle.titel}
                    </span>
                  </span>
                  <span className="font-mono text-xs font-semibold text-dark/45 whitespace-nowrap">
                    ab {bundle.preisVon} €
                  </span>
                </Link>

                {/* Leistungen als Liste */}
                <ul className="divide-y divide-border">
                  {bundle.arbeiten.map((arbeit) => {
                    const Icon = arbeit.icon
                    return (
                      <li key={arbeit.id}>
                        <Link
                          href={`/leistungen/${bundle.slug}#${arbeit.id}`}
                          className="group flex items-start gap-3.5 py-3.5 -mx-2 px-2 rounded-lg hover:bg-background transition-colors"
                        >
                          <Icon className="w-[18px] h-[18px] text-teal shrink-0 mt-0.5" />
                          <span className="min-w-0 flex-1">
                            <span className="block font-semibold text-[0.96rem] text-dark leading-snug group-hover:text-teal transition-colors">
                              {arbeit.titel}
                            </span>
                            <span className="block text-muted-foreground text-[0.82rem] leading-snug mt-0.5">
                              {arbeit.kurz}
                            </span>
                          </span>
                          <ArrowRight className="w-4 h-4 text-dark/15 shrink-0 mt-0.5 group-hover:text-teal group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
