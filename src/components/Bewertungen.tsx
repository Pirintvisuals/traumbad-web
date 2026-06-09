"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const bewertungen = [
  {
    name: "H. Horváth",
    ort: "Eisenstadt",
    datum: "März 2025",
    sterne: 5,
    text: "Schnell, ordentlich, kein Stress. Der Festpreis war ein Versprechen und kein Lockvogelangebot — und wurde auf den Cent genau eingehalten. So soll das sein.",
  },
  {
    name: "Familie Tóth",
    ort: "Mattersburg",
    datum: "Jänner 2025",
    sterne: 5,
    text: "Hätte nicht gedacht, dass eine Komplettsanierung so reibungslos laufen kann. Das Team war pünktlich, die Arbeit sauber, und am Ende hat der Preis gestimmt. Besser geht's nicht.",
  },
  {
    name: "R. Weinberger",
    ort: "Neusiedl am See",
    datum: "Oktober 2024",
    sterne: 5,
    text: "Barrierefreier Umbau für meine Mutter — keine einfache Aufgabe. TraumBad hat alles berücksichtigt, geduldig erklärt und sauber ausgeführt. Absolute Empfehlung.",
  },
  {
    name: "G. Schreiber",
    ort: "Wiener Neustadt",
    datum: "August 2024",
    sterne: 5,
    text: "Zum zweiten Mal beauftragt. Diesmal Dusche und Waschtisch. Wieder alles top — schnelle Terminvergabe, pünktlich, kein Dreck, Festpreis gehalten. Mehr braucht's wirklich nicht.",
  },
]

export function Bewertungen() {
  return (
    <section id="bewertungen" className="relative bg-white py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header — centered, with the rating pulled up as the focal element
            (the other sections lead with a left-aligned eyebrow; this one differs). */}
        <div className="mb-14 lg:mb-18 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2 mb-7"
          >
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-teal text-teal" />
              ))}
            </div>
            <span className="font-mono font-bold text-dark text-sm leading-none">5,0</span>
            <span className="h-3 w-px bg-border" />
            <span className="text-muted-foreground text-xs">aus Kundenbewertungen</span>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05, ease }}
            className="block text-teal text-xs font-bold uppercase tracking-[0.2em] mb-4"
          >
            Kundenstimmen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.12, ease }}
            className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] text-dark leading-[1.1] tracking-tight max-w-2xl"
          >
            Was unsere Kunden wirklich sagen.
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {bewertungen.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.1, ease }}
              className="bg-background border border-border rounded-2xl p-7 lg:p-8"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: b.sterne }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-teal text-teal" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-dark/75 leading-[1.75] text-[0.95rem] mb-6">
                &ldquo;{b.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between border-t border-border pt-5">
                <div>
                  <div className="font-semibold text-dark text-sm">{b.name}</div>
                  <div className="text-muted-foreground text-xs mt-0.5">{b.ort}</div>
                </div>
                <div className="text-muted-foreground/60 text-xs">{b.datum}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-muted-foreground/50 text-xs mt-10"
        >
          Echte Rückmeldungen aus abgeschlossenen Projekten in Burgenland &amp; Wien.
        </motion.p>
      </div>
    </section>
  )
}
