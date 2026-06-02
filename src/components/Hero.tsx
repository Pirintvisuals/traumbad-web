"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"
import { ArrowRight, Phone, Check } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

/* ── Curated featured projects (the photos ARE the product) ── */
const projekte = [
  {
    src: "/traumbad-eu-badsanierung-badezimmer-renovierung-31-525x696.jpg",
    label: "Komplettsanierung",
    ort: "Eisenstadt",
    spec: "9 m² · 18 Tage",
  },
  {
    src: "/traumbad-eu-badsanierung-badezimmer-renovierung-23-525x696.jpg",
    label: "Bodenebene Walk-in-Dusche",
    ort: "Wien",
    spec: "11 m² · 21 Tage",
  },
  {
    src: "/traumbad-eu-badsanierung-badezimmer-renovierung-25-341x341.jpg",
    label: "Waschtisch in Eiche",
    ort: "Neusiedl am See",
    spec: "Maßanfertigung",
  },
  {
    src: "/traumbad-eu-badsanierung-badezimmer-renovierung-28-341x341.jpg",
    label: "Großformat-Fliesen",
    ort: "Burgenland",
    spec: "120 × 60 cm",
  },
  {
    src: "/traumbad-eu-badsanierung-badezimmer-renovierung-30-341x341.jpg",
    label: "Barrierefreies Bad",
    ort: "Mattersburg",
    spec: "Schwellenlos",
  },
]

/* ── The journey: Planung → Übergabe, ending in the Festpreis promise ── */
const schritte = [
  { nr: "01", titel: "Planung", sub: "3D-Entwurf" },
  { nr: "02", titel: "Sanierung", sub: "Eigenes Team" },
  { nr: "03", titel: "Übergabe", sub: "Schlüsselfertig" },
]

export function Hero() {
  const reduced = useReducedMotion() ?? false
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = projekte.length

  const go = (dir: number) => setIndex((i) => (i + dir + n) % n)

  /* Auto-advance */
  useEffect(() => {
    if (reduced || paused) return
    const t = setTimeout(() => setIndex((i) => (i + 1) % n), 5200)
    return () => clearTimeout(t)
  }, [index, paused, reduced, n])

  /* Cursor parallax on the photo stack */
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 120, damping: 18, mass: 0.4 })
  const sy = useSpring(py, { stiffness: 120, damping: 18, mass: 0.4 })
  const rotY = useTransform(sx, [-0.5, 0.5], [6, -6])
  const rotX = useTransform(sy, [-0.5, 0.5], [-5, 5])
  const transX = useTransform(sx, [-0.5, 0.5], [-10, 10])

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return
    const r = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width - 0.5)
    py.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    px.set(0)
    py.set(0)
    setPaused(false)
  }

  const cur = projekte[index]
  const nextFoto = projekte[(index + 1) % n]

  /* gentle, reduced-motion-aware entrance */
  const appear = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, scale: 0.6 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.5, ease, delay },
        }

  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#F9F9F9] pt-[66px] lg:flex-row lg:items-stretch">

      {/* Editorial ghost number watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-4 top-[16%] hidden select-none font-display text-[16rem] font-bold leading-none text-dark/[0.035] lg:block xl:text-[20rem]"
      >
        01
      </span>

      {/* ─────────── Left: editorial content ─────────── */}
      <div className="relative z-10 flex w-full flex-col justify-center px-7 py-16 sm:px-16 lg:w-[44%] lg:px-20 lg:py-0">

        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="mb-7 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-teal" />
          <span className="font-mono text-[0.66rem] font-medium uppercase tracking-[0.24em] text-dark/50">
            Meisterbetrieb · Burgenland
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.18 }}
          className="mb-7 font-display text-[clamp(2.7rem,5vw,4.6rem)] font-bold leading-[1.03] tracking-tight text-dark"
        >
          <span className="block">Wir bauen</span>
          <span className="relative inline-block">
            <span className="italic text-teal">Ihr Traumbad.</span>
            {/* Hand-drawn underline */}
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M2 7C45 3 110 2 160 5C210 8 260 9 298 4"
                stroke="#2ABFBF"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.1, ease, delay: 0.9 }}
              />
            </svg>
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.34 }}
          className="mb-9 max-w-md text-[1.02rem] leading-[1.8] text-dark/55"
        >
          Von der Planung bis zur Schlüsselübergabe — alles aus einer Hand,
          zum garantierten <span className="font-semibold text-dark/80">Festpreis</span>.
          Ein kleines Team, das jedes Bad persönlich übernimmt.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.46 }}
          className="flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Link
            href="#kontakt"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-teal px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-md transition-colors duration-300 hover:bg-teal-dark cursor-pointer"
          >
            Kostenvoranschlag anfordern
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="tel:+436606304703"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-dark/15 px-7 py-3.5 text-[0.95rem] font-medium text-dark/70 transition-colors duration-300 hover:border-dark/30 hover:text-dark cursor-pointer"
          >
            <Phone className="h-4 w-4 text-teal" />
            +43 660 630 4703
          </Link>
        </motion.div>

        {/* Mobile process row (spine collapses to a horizontal stepper) */}
        <div className="mt-11 lg:hidden">
          <div className="flex items-stretch">
            {schritte.map((s, i) => (
              <div key={s.nr} className="flex flex-1 items-center">
                <div className="flex flex-col items-center gap-1.5">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full border border-teal/50 bg-[#F9F9F9]">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                  </span>
                  <span className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.12em] text-dark/60">
                    {s.titel}
                  </span>
                </div>
                <span className="mx-1 h-px flex-1 bg-dark/15" />
              </div>
            ))}
            {/* Festpreis terminal */}
            <div className="flex flex-col items-center gap-1.5">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-teal text-white">
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              <span className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.12em] text-teal">
                Festpreis
              </span>
            </div>
          </div>
          <p className="mt-3 font-mono text-[0.62rem] tracking-[0.04em] text-dark/40">
            Ein Ablauf, ein Team, ein garantierter Preis.
          </p>
        </div>
      </div>

      {/* ─────────── Middle: vertical process spine (desktop) ─────────── */}
      <div className="relative z-10 hidden shrink-0 items-center px-6 lg:flex xl:px-8">
        <div className="relative flex h-[360px] flex-col justify-between xl:h-[400px]">
          {/* connecting line */}
          <motion.span
            aria-hidden
            className="absolute left-[9px] top-2 bottom-2 w-0.5 origin-top bg-gradient-to-b from-teal/40 via-teal/30 to-teal"
            initial={reduced ? false : { scaleY: 0 }}
            animate={reduced ? undefined : { scaleY: 1 }}
            transition={{ duration: 1, ease, delay: 0.6 }}
          />

          {schritte.map((s, i) => (
            <motion.div key={s.nr} {...appear(0.8 + i * 0.16)} className="relative flex items-center gap-3.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                <span className="h-3 w-3 rounded-full border-2 border-teal/60 bg-[#F9F9F9]" />
              </span>
              <div className="leading-none">
                <p className="font-mono text-[0.82rem] font-semibold text-dark">
                  <span className="text-teal/60">{s.nr}</span> {s.titel}
                </p>
                <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-dark/40">
                  {s.sub}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Festpreis — the emphasized terminal node (replaces the old seal) */}
          <motion.div {...appear(0.8 + schritte.length * 0.16)} className="relative flex items-center gap-3.5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal text-white shadow-[0_0_0_4px_rgba(42,191,191,0.15)]">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
            </span>
            <div className="leading-none">
              <p className="font-display text-[0.98rem] font-bold text-dark">Festpreis garantiert</p>
              <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-teal">
                Schriftlich fixiert
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─────────── Right: living gallery ─────────── */}
      <div className="relative w-full flex-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease }}
          className="relative flex h-full items-center justify-center px-7 pb-16 sm:px-16 lg:px-6 lg:pb-0 xl:px-10"
          style={{ perspective: 1200 }}
          onMouseMove={onMove}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={onLeave}
        >
          {/* Photo stack */}
          <motion.div
            className="relative w-full max-w-[480px] lg:max-w-[540px]"
            style={reduced ? undefined : { rotateX: rotX, rotateY: rotY, x: transX, transformStyle: "preserve-3d" }}
          >
            {/* Depth card peeking behind */}
            <div
              aria-hidden
              className="absolute -right-6 top-7 hidden aspect-[4/5] w-full overflow-hidden rounded-[2px] opacity-40 shadow-lg sm:block"
              style={{ transform: "translateZ(-40px) rotate(2.5deg)" }}
            >
              <Image src={nextFoto.src} alt="" fill sizes="540px" className="object-cover" />
              <div className="absolute inset-0 bg-[#F9F9F9]/30" />
            </div>

            {/* Front frame */}
            <motion.div
              drag={reduced ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.16}
              onDragStart={() => setPaused(true)}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(1)
                else if (info.offset.x > 60) go(-1)
              }}
              className="relative aspect-[4/5] w-full cursor-grab overflow-hidden rounded-[2px] bg-dark shadow-2xl active:cursor-grabbing"
              style={{ transformStyle: "preserve-3d" }}
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={index}
                  initial={{ clipPath: "inset(0 0 0 100%)" }}
                  animate={{ clipPath: "inset(0 0 0 0%)" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reduced ? 0 : 0.85, ease }}
                  className="absolute inset-0"
                >
                  <Image
                    src={cur.src}
                    alt={`${cur.label} — Badsanierung in ${cur.ort}`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 90vw, 540px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Gradient + caption */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-6 pt-16">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[0.62rem] font-semibold tracking-[0.2em] text-teal">
                    PROJEKT N°{String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-5 bg-white/30" />
                  <span className="font-mono text-[0.62rem] tracking-[0.16em] text-white/55">
                    {cur.spec}
                  </span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease }}
                    className="mt-1.5 font-display text-xl font-semibold leading-tight text-white"
                  >
                    {cur.label}
                    <span className="ml-2 text-base font-normal text-white/55">· {cur.ort}</span>
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Auto-advance progress bar */}
              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-white/15">
                <div
                  key={`${index}-${paused}-${reduced}`}
                  className="h-full origin-left bg-teal"
                  style={
                    reduced
                      ? { transform: "scaleX(1)" }
                      : {
                          animation: "growBar 5.2s linear forwards",
                          animationPlayState: paused ? "paused" : "running",
                        }
                  }
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Index buttons */}
          <div className="absolute bottom-5 right-7 z-30 flex items-center gap-2.5 sm:right-16 lg:right-6 xl:right-10">
            {projekte.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Projekt ${i + 1} anzeigen`}
                className="cursor-pointer font-mono text-[0.7rem] tracking-wider transition-colors duration-200"
              >
                <span className={i === index ? "text-teal" : "text-dark/30 hover:text-dark/55"}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
