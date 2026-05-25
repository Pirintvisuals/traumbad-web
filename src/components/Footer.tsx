import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

const footerLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Galerie", href: "#galerie" },
  { label: "Festpreis", href: "#festpreis" },
  { label: "Stimmen", href: "#bewertungen" },
  { label: "Kontakt", href: "#kontakt" },
]

const rechtlichLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark border-t border-white/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.svg"
                width={100}
                height={55}
                alt="TraumBad Installations"
                className="h-10 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-[280px] mb-7">
              Premium-Badrenovierungen in Burgenland und Wien. Meisterbetrieb mit
              Festpreisgarantie — transparent, zuverlässig, termingerecht.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+436606304703"
                className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-teal shrink-0" />
                +43 660 630 4703
              </a>
              <a
                href="mailto:office@traumbad.eu"
                className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-teal shrink-0" />
                office@traumbad.eu
              </a>
              <div className="flex items-center gap-2.5 text-white/50 text-sm">
                <MapPin className="w-3.5 h-3.5 text-teal shrink-0" />
                Burgenland, Österreich
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white/25 text-[11px] font-bold uppercase tracking-[0.18em] mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-white/25 text-[11px] font-bold uppercase tracking-[0.18em] mb-5">
              Rechtliches
            </h3>
            <ul className="space-y-3">
              {rechtlichLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <div className="inline-flex items-center gap-2 border border-teal/25 bg-teal/5 px-3.5 py-2 rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                <span className="text-teal text-[11px] font-semibold uppercase tracking-wide">
                  Festpreisgarantie
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {year} TraumBad Installations. Alle Rechte vorbehalten.
          </p>
          <p className="text-white/15 text-xs">
            Meisterbetrieb · Burgenland · Österreich
          </p>
        </div>
      </div>
    </footer>
  )
}
