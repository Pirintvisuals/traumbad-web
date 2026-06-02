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

function Thumb({
  p,
  active,
  onClick,
  className,
}: {
  p: (typeof projekte)[number]
  active: boolean
  onClick: () => void
  className: string
}) {
  return (
    <button
      onClick={onClick}
      aria-label={`${p.label} anzeigen`}
      aria-current={active}
      className={[
        "relative shrink-0 cursor-pointer overflow-hidden rounded-lg transition-all duration-300",
        active
          ? "opacity-100 ring-2 ring-teal ring-offset-2 ring-offset-[#F9F9F9]"
          : "opacity-45 hover:opacity-85",
        className,
      ].join(" ")}
    >
      <Image src={p.src} alt={p.label} fill sizes="90px" className="object-cover" />
    </button>
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

      {/* ─────────── Left: editorial content ─────────── */}
      <div className="relative z-10 flex w-full flex-col justify-center px-7 py-16 sm:px-16 lg:w-[42%] lg:px-16 lg:py-0 xl:px-20">

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

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex items-center gap-5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-dark/40"
        >
          <span><span className="text-teal">10+</span> Jahre</span>
          <span className="h-3 w-px bg-dark/15" />
          <span><span className="text-teal">100%</span> Festpreis</span>
          <span className="h-3 w-px bg-dark/15" />
          <span>Eigenes Team</span>
        </motion.div>
      </div>

      {/* ─────────── Middle: vertical project rail (desktop) ─────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.7 }}
        className="relative z-10 hidden shrink-0 flex-col items-center justify-center gap-3 px-4 lg:flex xl:px-6"
      >
        <span className="mb-1 font-mono text-[0.58rem] uppercase tracking-[0.22em] text-dark/35 [writing-mode:vertical-rl] rotate-180">
          Referenzen
        </span>
        {projekte.map((p, i) => (
          <Thumb
            key={p.src}
            p={p}
            active={i === index}
            onClick={() => setIndex(i)}
            className="h-[64px] w-[54px] xl:h-[74px] xl:w-[62px]"
          />
        ))}
      </motion.div>

      {/* ─────────── Right: living gallery ─────────── */}
      <div className="relative w-full flex-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease }}
          className="relative flex h-full flex-col items-center justify-center px-7 pb-12 sm:px-16 lg:px-6 lg:pb-0 xl:px-10"
          style={{ perspective: 1200 }}
          onMouseMove={onMove}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={onLeave}
        >
          {/* Photo stack */}
          <motion.div
            className="relative w-full max-w-[500px] lg:max-w-[560px]"
            style={reduced ? undefined : { rotateX: rotX, rotateY: rotY, x: transX, transformStyle: "preserve-3d" }}
          >
            {/* Depth card peeking behind */}
            <div
              aria-hidden
              className="absolute -right-7 top-8 hidden w-full rounded-[22px] bg-white p-3 opacity-55 shadow-lg sm:block"
              style={{ transform: "translateZ(-40px) rotate(2.5deg)" }}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[14px] bg-dark">
                <Image src={nextFoto.src} alt="" fill sizes="560px" className="object-cover" />
                <div className="absolute inset-0 bg-[#F9F9F9]/25" />
              </div>
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
              className="relative w-full cursor-grab rounded-[22px] bg-white p-3 shadow-2xl ring-1 ring-black/5 active:cursor-grabbing"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[14px] bg-dark">
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
                    sizes="(max-width: 1024px) 90vw, 560px"
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
              </div>
            </motion.div>
          </motion.div>

          {/* Mobile project rail (horizontal) */}
          <div className="mt-5 flex items-center justify-center gap-2.5 lg:hidden">
            {projekte.map((p, i) => (
              <Thumb
                key={p.src}
                p={p}
                active={i === index}
                onClick={() => setIndex(i)}
                className="h-12 w-12"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
