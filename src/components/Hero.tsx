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
import { ArrowRight, Phone } from "lucide-react"

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

/* ── Rotating Festpreis seal ── */
function Festpreissiegel({ reduced }: { reduced: boolean }) {
  return (
    <div className="relative h-[112px] w-[112px] sm:h-[128px] sm:w-[128px]">
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        style={
          reduced
            ? undefined
            : { animation: "spinSlow 22s linear infinite", transformOrigin: "center" }
        }
      >
        <defs>
          <path
            id="siegel-kreis"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text
          className="fill-dark/55"
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "8.6px",
            letterSpacing: "2.1px",
            fontWeight: 600,
          }}
        >
          <textPath href="#siegel-kreis" startOffset="0%">
            FESTPREIS · GARANTIERT · KEINE ÜBERRASCHUNGEN ·
          </textPath>
        </text>
      </svg>
      {/* Center mark */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-[1.65rem] font-bold leading-none text-teal sm:text-[1.9rem]">
          fix
        </span>
        <span className="mt-1 font-mono text-[0.5rem] font-medium uppercase tracking-[0.2em] text-dark/45">
          Preis
        </span>
      </div>
    </div>
  )
}

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

  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#F9F9F9] pt-[66px] lg:flex-row lg:items-stretch">

      {/* Editorial ghost number watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-4 top-[16%] hidden select-none font-display text-[16rem] font-bold leading-none text-dark/[0.035] lg:block xl:text-[20rem]"
      >
        01
      </span>
      {/* Hairline */}
      <span aria-hidden className="pointer-events-none absolute left-10 top-0 hidden h-full w-px bg-dark/[0.06] sm:left-16 lg:left-20 lg:block" />

      {/* ─────────── Left: editorial content ─────────── */}
      <div className="relative z-10 flex w-full flex-col justify-center px-7 py-16 sm:px-16 lg:w-[46%] lg:px-20 lg:py-0">

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
          className="mb-7 font-display text-[clamp(2.9rem,5.4vw,5.1rem)] font-bold leading-[1.02] tracking-tight text-dark"
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

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex items-center gap-6 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-dark/40"
        >
          <span><span className="text-teal">10+</span> Jahre</span>
          <span className="h-3 w-px bg-dark/15" />
          <span><span className="text-teal">100%</span> Festpreis</span>
          <span className="h-3 w-px bg-dark/15" />
          <span>Eigenes Team</span>
        </motion.div>
      </div>

      {/* ─────────── Right: living gallery ─────────── */}
      <div className="relative w-full flex-1 lg:w-[54%]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease }}
          className="relative flex h-full items-center justify-center px-7 pb-16 sm:px-16 lg:px-12 lg:pb-0"
          style={{ perspective: 1200 }}
          onMouseMove={onMove}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={onLeave}
        >
          {/* Festpreis seal — overlaps the frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease, delay: 1 }}
            className="absolute bottom-10 left-4 z-30 flex items-center justify-center rounded-full bg-white/85 shadow-xl backdrop-blur-sm sm:left-10 lg:-left-2 lg:bottom-20"
          >
            <Festpreissiegel reduced={reduced} />
          </motion.div>

          {/* Photo stack */}
          <motion.div
            className="relative w-full max-w-[420px] lg:max-w-[460px]"
            style={reduced ? undefined : { rotateX: rotX, rotateY: rotY, x: transX, transformStyle: "preserve-3d" }}
          >
            {/* Depth card peeking behind */}
            <div
              aria-hidden
              className="absolute -right-5 top-6 hidden aspect-[4/5] w-full overflow-hidden rounded-[2px] opacity-40 shadow-lg sm:block"
              style={{ transform: "translateZ(-40px) rotate(2.5deg)" }}
            >
              <Image
                src={nextFoto.src}
                alt=""
                fill
                sizes="460px"
                className="object-cover"
              />
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
                    sizes="(max-width: 1024px) 90vw, 460px"
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
                    <span className="ml-2 text-base font-normal text-white/55">
                      · {cur.ort}
                    </span>
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
          <div className="absolute bottom-5 right-7 z-30 flex items-center gap-2.5 sm:right-16 lg:right-12">
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
