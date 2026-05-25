"use client"

import { motion } from "framer-motion"
import { Bath, Wrench, Accessibility } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const leistungen = [
  {
    icon: Bath,
    nummer: "01",
    titel: "Komplettsanierung",
    intro: "Von der nackten Wand bis zum fertigen Bad.",
    beschreibung:
      "Wir planen, liefern und bauen — und gehen erst, wenn alles sitzt. Fliesen, Sanitär, Elektrik, Beleuchtung: alles aus einer Hand, ein Ansprechpartner, ein Festpreis.",
    details: [
      "Aufmaß & Planung inklusive",
      "Fliesenarbeiten & Abdichtung",
      "Sanitär- und Elektroinstallation",
      "Besenreine Übergabe",
    ],
  },
  {
    icon: Wrench,
    nummer: "02",
    titel: "Teilrenovierung",
    intro: "Nicht immer muss alles neu.",
    beschreibung:
      "Wir tauschen aus, was stört — Dusche, Armaturen, Waschtisch, Fliesen — präzise, sauber und ohne unnötige Zusatzarbeiten. Zum Festpreis, ohne Überraschungen.",
    details: [
      "Dusche & Badewanne",
      "Armaturen & Waschtisch",
      "Fliesen & Oberflächen",
      "Licht & Spiegelschrank",
    ],
  },
  {
    icon: Accessibility,
    nummer: "03",
    titel: "Barrierefreies Bad",
    intro: "Sicher. Komfortabel. Wohnlich.",
    beschreibung:
      "Bodenebene Dusche, rutschfeste Böden, smarte Haltesysteme. Wir bauen Ihr Bad so um, dass es Sie unterstützt — heute und in Zukunft. Normgerecht und trotzdem schön.",
    details: [
      "Bodenebene Dusche",
      "Rutschhemmende Böden",
      "Haltegriffe & Stützgeländer",
      "Türverbreiterung möglich",
    ],
  },
]

export function Leistungen() {
  return (
    <section id="leistungen" className="bg-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="mb-16 lg:mb-20 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="inline-block text-teal text-xs font-bold uppercase tracking-[0.2em] mb-4"
          >
            Was wir machen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08, ease }}
            className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] text-dark leading-[1.1] tracking-tight mb-5"
          >
            Drei Leistungen.
            <br />
            Ein Versprechen.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Egal ob Sie komplett neu anfangen oder nur gezielt renovieren — wir machen es
            richtig. Zum vereinbarten Preis. Ohne Wenn und Aber.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          {leistungen.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.titel}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.12, ease }}
                className="group relative bg-white border border-border rounded-2xl p-8 overflow-hidden hover:shadow-xl hover:shadow-dark/5 hover:-translate-y-1 transition-all duration-400 cursor-default"
              >
                {/* Number watermark */}
                <span className="absolute top-6 right-7 font-display font-bold text-6xl text-dark/4 select-none leading-none">
                  {item.nummer}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-7 group-hover:bg-teal/15 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-teal" />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-[1.35rem] text-dark mb-1 tracking-tight">
                  {item.titel}
                </h3>
                <p className="text-teal font-semibold text-sm mb-4">{item.intro}</p>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-[0.92rem] mb-7">
                  {item.beschreibung}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {item.details.map((d) => (
                    <li key={d} className="flex items-center gap-2.5 text-sm text-dark/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>

                {/* Animated bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-teal origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-b-2xl" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
