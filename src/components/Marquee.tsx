"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const signals = [
  "Festpreisgarantie",
  "Meisterbetrieb",
  "Burgenland & Wien",
  "Komplettsanierung",
  "Barrierefreies Bad",
  "Keine Nachkalkulation",
  "Schnelle Ausführung",
  "Schriftliche Garantie",
  "Kostenlose Beratung",
  "Termingerecht",
]

// doubled for seamless loop
const doubled = [...signals, ...signals]

export function Marquee() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="bg-[#EFEFED] border-y border-dark/8 py-4 overflow-hidden"
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        className="flex items-center gap-0 whitespace-nowrap w-max"
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-dark/40 text-xs font-semibold uppercase tracking-[0.18em] px-6">
              {item}
            </span>
            <span className="text-teal text-[10px]">·</span>
          </span>
        ))}
      </motion.div>
    </motion.div>
  )
}
