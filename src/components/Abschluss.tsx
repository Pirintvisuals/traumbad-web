import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Reveal } from "@/components/Reveal"

// Ruhiger Schluss-CTA der Startseite — führt auf die dedizierte /kontakt-Seite.
// Greift die dunkle, teal-akzentuierte Bildsprache der Seiten-Header auf,
// damit sich alles zusammengehörig anfühlt.

export function Abschluss() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-dark px-8 py-14 sm:px-14 lg:px-20 lg:py-20">
            {/* Teal glow — same language as the page headers */}
            <div
              className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.12] pointer-events-none"
              style={{ background: "radial-gradient(circle at 75% 25%, #2ABFBF 0%, transparent 60%)" }}
            />

            <div className="relative z-10 max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-teal">
                Kostenlos & unverbindlich
              </span>
              <h2 className="mt-4 font-display font-bold text-[clamp(2rem,4.5vw,3.4rem)] text-white leading-[1.08] tracking-tight">
                Bereit für Ihr neues Bad?
              </h2>
              <p className="mt-5 text-white/55 text-lg leading-relaxed">
                Erzählen Sie uns kurz von Ihrem Vorhaben — Sie erhalten innerhalb von 24
                Stunden ein verbindliches Festpreisangebot. Ohne Verpflichtung.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4">
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-cta hover:bg-cta-dark text-white font-semibold px-7 py-3.5 transition-colors duration-200 cursor-pointer"
                >
                  Anfrage stellen
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+436606304703"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 hover:border-cta/50 text-cta font-semibold px-7 py-3.5 transition-colors duration-200 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  +43 660 630 4703
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
