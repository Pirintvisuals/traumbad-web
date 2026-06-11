import { Fragment } from "react"
import Link from "next/link"
import Image from "next/image"
import { Reveal } from "@/components/Reveal"

export type Crumb = { label: string; href?: string }

/**
 * Einheitlicher Unterseiten-Kopf: kompakter dunkler Header mit Brotkrümel,
 * Titel und Bild — bewusst gleich auf allen Unterseiten, damit sofort klar
 * ist „das ist eine Unterseite". Kompakt wie auf Referenzen/Leistungen,
 * kein großer Hero wie auf der Startseite.
 */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  priority = false,
}: {
  crumbs: Crumb[]
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  image: string
  imageAlt: string
  priority?: boolean
}) {
  return (
    <section className="relative bg-dark pt-[100px] pb-14 lg:pt-[120px] lg:pb-18 overflow-hidden">
      {/* Teal-Schimmer */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.10] pointer-events-none"
        style={{ background: "radial-gradient(circle at 75% 25%, #2ABFBF 0%, transparent 60%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Brotkrümel — „du bist hier" */}
        <Reveal y={12}>
          <nav
            aria-label="Brotkrümel"
            className="mb-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"
          >
            {crumbs.map((c, i) => (
              <Fragment key={c.label}>
                {i > 0 && <span className="text-white/25">/</span>}
                {c.href ? (
                  <Link href={c.href} className="text-white/45 hover:text-white transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-teal font-medium">{c.label}</span>
                )}
              </Fragment>
            ))}
          </nav>
        </Reveal>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-16 lg:items-center">
          <div>
            {eyebrow && (
              <Reveal>
                <span className="inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] text-teal mb-5">
                  {eyebrow}
                </span>
              </Reveal>
            )}
            <Reveal delay={0.06}>
              <h1 className="font-display font-bold text-[clamp(2.4rem,5.5vw,4rem)] text-white leading-[1.05] tracking-tight">
                {title}
              </h1>
            </Reveal>
            {description && (
              <Reveal delay={0.12}>
                <p className="mt-5 text-white/55 text-lg leading-relaxed max-w-2xl">
                  {description}
                </p>
              </Reveal>
            )}
          </div>

          {/* Bild — echtes Referenzbad, gleiche Form auf jeder Unterseite */}
          <Reveal delay={0.18}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority={priority}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
