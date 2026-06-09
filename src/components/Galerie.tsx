"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { fotos } from "@/lib/referenzen"

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

export function Galerie() {
  const [selected, setSelected] = useState<number | null>(null)

  const close = useCallback(() => setSelected(null), [])
  const prev = useCallback(() =>
    setSelected((s) => (s === null ? null : s === 0 ? fotos.length - 1 : s - 1)), [])
  const next = useCallback(() =>
    setSelected((s) => (s === null ? null : s === fotos.length - 1 ? 0 : s + 1)), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [close, prev, next])

  useEffect(() => {
    document.body.style.overflow = selected !== null ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [selected])

  return (
    <section
      id="galerie"
      className="relative bg-dark py-16 sm:py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="mb-14 lg:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="block text-teal text-[0.68rem] font-bold uppercase tracking-[0.28em] mb-4"
            >
              Unsere Arbeiten
            </motion.span>
            {/* Clip-wipe reveal — a different arrival than the fade-ups elsewhere,
                so the dark gallery reads as the page's main visual beat. */}
            <motion.h2
              initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
              whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.08, ease }}
              className="font-display font-bold text-[clamp(2.2rem,4.6vw,3.8rem)] text-white leading-[1.06] tracking-tight"
            >
              Handwerk,
              <br />
              das bleibt.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="shrink-0 border border-white/10 rounded-full px-4 py-2 text-white/30 text-xs font-medium tracking-wider"
          >
            {fotos.length} abgeschlossene Projekte
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-2.5 auto-rows-[220px] lg:auto-rows-[255px]">
          {fotos.map((foto, i) => (
            <motion.div
              key={foto.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: (i % 3) * 0.08, ease }}
              onClick={() => setSelected(i)}
              className={[
                "relative overflow-hidden group cursor-pointer",
                foto.tall ? "row-span-2" : "",
              ].join(" ")}
            >
              <Image
                src={foto.src}
                alt={foto.label}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                loading={i < 4 ? "eager" : "lazy"}
              />

              {/* Teal left accent line — sweeps down on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-teal origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out z-10" />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Label — slides up */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 delay-75 z-10">
                <p className="text-teal text-[9px] font-bold uppercase tracking-[0.22em] mb-1">
                  Badsanierung · {foto.sub}
                </p>
                <p className="text-white text-sm font-semibold leading-snug">
                  {foto.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to full references page */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="mt-12 lg:mt-14 flex justify-center"
        >
          <Link
            href="/referenzen"
            className="group relative z-10 inline-flex items-center gap-2.5 border border-white/15 hover:border-teal text-white font-semibold px-7 py-3.5 rounded-md transition-colors duration-200"
          >
            Alle Referenzen ansehen
            <ArrowRight className="w-4 h-4 text-teal group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center cursor-default"
            style={{ background: "var(--overlay-dark)" }}
            onClick={close}
          >
            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-5 z-10">
              <div>
                <span className="text-teal text-[9px] font-bold uppercase tracking-[0.22em]">
                  {fotos[selected].label}
                </span>
                <span className="text-white/20 text-xs ml-3">
                  {selected + 1} / {fotos.length}
                </span>
              </div>
              <button
                onClick={close}
                className="flex items-center gap-2 text-white/40 hover:text-white text-xs font-medium uppercase tracking-widest transition-colors cursor-pointer"
                aria-label="Schließen"
              >
                Schließen
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Teal top accent stripe */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease }}
              className="absolute top-0 left-0 right-0 h-[2px] bg-teal origin-left z-10"
            />

            {/* Prev */}
            <button
              className="absolute left-5 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full border border-white/10 hover:border-white/30 text-white/50 hover:text-white transition-all duration-200 cursor-pointer"
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next */}
            <button
              className="absolute right-5 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full border border-white/10 hover:border-white/30 text-white/50 hover:text-white transition-all duration-200 cursor-pointer"
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3, ease }}
                className="relative max-h-[82vh] max-w-[88vw]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={fotos[selected].src}
                  width={fotos[selected].w}
                  height={fotos[selected].h}
                  alt={fotos[selected].label}
                  className="max-h-[82vh] max-w-[88vw] w-auto h-auto object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Dot navigation */}
            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              {fotos.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setSelected(i) }}
                  className={[
                    "transition-all duration-200 rounded-full cursor-pointer",
                    i === selected
                      ? "w-5 h-1.5 bg-teal"
                      : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40",
                  ].join(" ")}
                  aria-label={`Bild ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
