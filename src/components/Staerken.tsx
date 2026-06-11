"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { staerken } from "@/lib/staerken"

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

export function Staerken() {
  return (
    <section id="staerken" className="bg-white py-16 sm:py-20 lg:py-32 border-b border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="mb-12 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="inline-block text-teal text-xs font-bold uppercase tracking-[0.2em] mb-4"
            >
              Warum TraumBad
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08, ease }}
              className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] text-dark leading-[1.1] tracking-tight mb-5"
            >
              Klein, aber fein — und kompromisslos gründlich.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16, ease }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Wir sind ein inhabergeführter Betrieb aus dem Burgenland — keine anonyme Firma,
              sondern ein festes Team mit einem Namen, der für die Arbeit geradesteht.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="shrink-0"
          >
            <Link
              href="/ueber-uns"
              className="group inline-flex items-center gap-2 text-dark font-semibold border border-border hover:border-teal rounded-md px-5 py-3 transition-colors duration-200 cursor-pointer"
            >
              Mehr über uns
              <ArrowRight className="w-4 h-4 text-teal group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Strength grid — each Stärke gets its own icon chip instead of a number. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {staerken.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.titel}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease }}
                className="group relative bg-white p-7 lg:p-9 hover:bg-background transition-colors duration-300"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="font-display font-bold text-[1.2rem] text-dark mb-3 tracking-tight">
                  {s.titel}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[0.95rem]">{s.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
