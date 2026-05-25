"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { FileCheck, Calculator, ShieldCheck, ArrowRight } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * to))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to])

  return <span ref={ref}>{count}{suffix}</span>
}

const saelulen = [
  {
    icon: Calculator,
    titel: "Transparente Aufstellung",
    text: "Jede Leistung, jedes Material — einzeln aufgelistet, bevor wir beginnen. Sie wissen genau, wofür Sie bezahlen.",
  },
  {
    icon: FileCheck,
    titel: "Schriftliche Bindung",
    text: "Der vereinbarte Betrag ist im Vertrag fixiert. Änderungen nur auf Ihren ausdrücklichen Wunsch — und nur mit neuer Unterschrift.",
  },
  {
    icon: ShieldCheck,
    titel: "Keine Nachforderungen",
    text: "Unvorhergesehenes kalkulieren wir ein. Nicht hinterher auf Ihre Rechnung. Was wir nennen, das gilt.",
  },
]

const stats = [
  { value: 200, suffix: "+", label: "abgeschlossene Projekte" },
  { value: 100, suffix: "%", label: "Festpreisquote" },
  { value: 24, suffix: "h", label: "Antwortzeit" },
]

export function Festpreis() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="festpreis" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #EEF9F9 0%, #F4FAFA 50%, #F9F9F9 100%)" }}
    >
      {/* Subtle teal accent top-right */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle at 80% 20%, #2ABFBF 0%, transparent 60%)" }}
      />

      {/* Background dots */}
      {[
        { left: "1%",  top: "10%", size: 6,  opacity: 0.12, delay: "0s",   dur: "4.8s" },
        { left: "97%", top: "20%", size: 5,  opacity: 0.10, delay: "0.6s", dur: "5.4s" },
        { left: "4%",  top: "75%", size: 4,  opacity: 0.11, delay: "1.4s", dur: "5.0s" },
        { left: "95%", top: "72%", size: 7,  opacity: 0.08, delay: "0.3s", dur: "6.0s" },
        { left: "50%", top: "3%",  size: 4,  opacity: 0.09, delay: "1.8s", dur: "4.5s" },
        { left: "25%", top: "95%", size: 5,  opacity: 0.10, delay: "2.3s", dur: "5.7s" },
        { left: "75%", top: "92%", size: 3,  opacity: 0.13, delay: "0.9s", dur: "3.9s" },
      ].map((d, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none select-none"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            backgroundColor: "#2ABFBF",
            opacity: d.opacity,
            animation: `floatDot ${d.dur} ${d.delay} ease-in-out infinite`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="inline-block text-teal text-xs font-bold uppercase tracking-[0.2em] mb-4"
          >
            Unser Versprechen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="font-display font-bold text-[clamp(2.2rem,5vw,4rem)] text-dark leading-[1.05] tracking-tight mb-6"
          >
            Der Preis steht,
            <br />
            bevor der erste
            <br />
            <span className="text-teal">Stein fällt.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.18, ease }}
            className="text-dark/55 text-lg leading-relaxed max-w-xl"
          >
            Unser Angebot ist keine Schätzung — es ist eine schriftliche Zusage. Was wir
            kalkulieren, zahlen Sie. Nicht mehr. Das ist kein Marketing, das ist unser
            Geschäftsmodell.
          </motion.p>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease }}
          className="grid grid-cols-3 gap-0 border border-border bg-white rounded-2xl overflow-hidden shadow-sm mb-14"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-7 text-center ${i < stats.length - 1 ? "border-r border-border" : ""}`}
            >
              <div className="font-display font-bold text-3xl sm:text-4xl text-dark mb-1">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {saelulen.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.titel}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.12, ease }}
                className="border border-border rounded-2xl p-7 bg-white hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-teal" />
                </div>
                <h3 className="font-display font-bold text-lg text-dark mb-3 tracking-tight">
                  {s.titel}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.text}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA stripe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-t border-border pt-10"
        >
          <div>
            <div className="text-dark font-display font-bold text-xl tracking-tight">
              Interesse an einem Festpreisangebot?
            </div>
            <div className="text-muted-foreground text-sm mt-1">
              Unverbindlich. Kostenlos. Innerhalb von 24 Stunden.
            </div>
          </div>
          <Link
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-semibold px-6 py-3.5 rounded-md transition-colors cursor-pointer shrink-0"
          >
            Angebot anfragen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
