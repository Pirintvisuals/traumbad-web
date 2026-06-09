"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

type Stat = {
  ziel: number
  prefix?: string
  suffix?: string
  label: string
  unter: string
  /* the Festpreis stat is the anchor — rendered in teal, slightly louder */
  anchor?: boolean
}

const stats: Stat[] = [
  { ziel: 10, suffix: "+", label: "Jahre", unter: "Erfahrung im Burgenland" },
  { ziel: 200, suffix: "+", label: "Bäder", unter: "sauber fertiggestellt" },
  { ziel: 100, suffix: "%", label: "Festpreis", unter: "schriftlich & verbindlich", anchor: true },
]

/* Counts from 0 → ziel once the strip scrolls into view. */
function CountUp({ ziel, prefix = "", suffix = "", run }: { ziel: number; prefix?: string; suffix?: string; run: boolean }) {
  const reduced = useReducedMotion()
  const [wert, setWert] = useState(reduced ? ziel : 0)

  useEffect(() => {
    if (!run || reduced) {
      setWert(ziel)
      return
    }
    const dauer = 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min((now - start) / dauer, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3)
      setWert(Math.round(eased * ziel))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, ziel, reduced])

  return (
    <span className="tabular-nums">
      {prefix}
      {wert}
      {suffix}
    </span>
  )
}

export function Zahlen() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      aria-label="TraumBad in Zahlen"
      className="bg-white border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y divide-border sm:divide-y-0 sm:divide-x sm:divide-border">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
              className="flex flex-col items-center sm:items-start gap-1 py-7 first:pt-0 last:pb-0 sm:py-0 sm:px-10 sm:first:pl-0 sm:last:pr-0"
            >
              <div className="flex items-baseline gap-2">
                <span
                  className={[
                    "font-mono font-bold leading-none tracking-tight",
                    "text-[2.9rem] sm:text-[3.1rem] lg:text-[3.6rem]",
                    s.anchor ? "text-teal" : "text-dark",
                  ].join(" ")}
                >
                  <CountUp ziel={s.ziel} prefix={s.prefix} suffix={s.suffix} run={inView} />
                </span>
                <span
                  className={[
                    "font-display font-semibold text-base sm:text-lg",
                    s.anchor ? "text-teal" : "text-dark/70",
                  ].join(" ")}
                >
                  {s.label}
                </span>
              </div>
              <span className="font-sans text-sm text-muted-foreground text-center sm:text-left">
                {s.unter}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
