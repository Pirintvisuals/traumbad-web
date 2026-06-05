"use client"

import { useState, useMemo, useCallback, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { fotos, kategorien } from "@/lib/referenzen"

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

export function ReferenzenGrid() {
  const [filter, setFilter] = useState<(typeof kategorien)[number]>("Alle")
  const [selected, setSelected] = useState<number | null>(null)

  const visible = useMemo(
    () => (filter === "Alle" ? fotos : fotos.filter((f) => f.kategorie === filter)),
    [filter]
  )

  // Reset lightbox when the filter changes so indices stay valid.
  useEffect(() => {
    setSelected(null)
  }, [filter])

  const close = useCallback(() => setSelected(null), [])
  const prev = useCallback(
    () => setSelected((s) => (s === null ? null : s === 0 ? visible.length - 1 : s - 1)),
    [visible.length]
  )
  const next = useCallback(
    () => setSelected((s) => (s === null ? null : s === visible.length - 1 ? 0 : s + 1)),
    [visible.length]
  )

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
    return () => {
      document.body.style.overflow = ""
    }
  }, [selected])

  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2.5 mb-10 lg:mb-14">
          {kategorien.map((k) => {
            const active = filter === k
            return (
              <button
                key={k}
                onClick={() => setFilter(k)}
                className={[
                  "px-4 py-2 rounded-full text-sm font-semibold border transition-colors duration-200 cursor-pointer",
                  active
                    ? "bg-teal border-teal text-white"
                    : "bg-white border-border text-dark/60 hover:border-teal hover:text-dark",
                ].join(" ")}
              >
                {k}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 lg:gap-3 auto-rows-[220px] lg:auto-rows-[260px]"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((foto, i) => (
              <motion.button
                key={foto.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.05, ease }}
                onClick={() => setSelected(i)}
                className={[
                  "relative overflow-hidden group rounded-xl text-left cursor-pointer",
                  foto.tall ? "row-span-2" : "",
                ].join(" ")}
                aria-label={`${foto.label} öffnen`}
              >
                <Image
                  src={foto.src}
                  alt={foto.label}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  loading={i < 4 ? "eager" : "lazy"}
                />

                {/* Teal left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-teal origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out z-10" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 delay-75 z-10">
                  <p className="text-teal text-[9px] font-bold uppercase tracking-[0.22em] mb-1">
                    {foto.kategorie} · {foto.sub}
                  </p>
                  <p className="text-white text-sm font-semibold leading-snug">{foto.label}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && visible[selected] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center cursor-default"
            style={{ background: "rgba(22, 28, 28, 0.97)" }}
            onClick={close}
          >
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-5 z-10">
              <div>
                <span className="text-teal text-[9px] font-bold uppercase tracking-[0.22em]">
                  {visible[selected].label}
                </span>
                <span className="text-white/20 text-xs ml-3">
                  {selected + 1} / {visible.length}
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

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease }}
              className="absolute top-0 left-0 right-0 h-[2px] bg-teal origin-left z-10"
            />

            <button
              className="absolute left-5 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full border border-white/10 hover:border-white/30 text-white/50 hover:text-white transition-all duration-200 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              className="absolute right-5 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full border border-white/10 hover:border-white/30 text-white/50 hover:text-white transition-all duration-200 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={visible[selected].id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3, ease }}
                className="relative max-h-[82vh] max-w-[88vw]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={visible[selected].src}
                  width={visible[selected].w}
                  height={visible[selected].h}
                  alt={visible[selected].label}
                  className="max-h-[82vh] max-w-[88vw] w-auto h-auto object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
