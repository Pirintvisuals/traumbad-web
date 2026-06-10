"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"
import { ArrowRight, Phone, MoveHorizontal } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

type Projekt = {
  src: string
  label: string
  ort: string
  spec: string
  type?: "ba"
  vorher?: string
  after?: string
}

/* ── Curated featured projects (the photos ARE the product) ── */
const projekte: Projekt[] = [
  {
    // Before/After comparison card.
    // TODO: replace `vorher` with the REAL pre-renovation photo of this room.
    // Right now `vorher` reuses the finished photo with a "worn" filter as a
    // placeholder so the slider is demonstrable — do NOT publish as-is.
    type: "ba",
    src: "/traumbad-eu-badsanierung-badezimmer-renovierung-31-525x696.jpg",
    after: "/traumbad-eu-badsanierung-badezimmer-renovierung-31-525x696.jpg",
    vorher: "/traumbad-eu-badsanierung-badezimmer-renovierung-31-525x696.jpg",
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

/* ── Before/After slider ── */
function VorherNachher({
  vorher,
  nachher,
  alt,
  reduced,
  placeholder,
  onInteract,
}: {
  vorher: string
  nachher: string
  alt: string
  reduced: boolean
  placeholder?: boolean
  onInteract?: () => void
}) {
  const [pct, setPct] = useState(62)
  const [dragging, setDragging] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  /* one-time auto-demo sweep so visitors notice it's interactive */
  useEffect(() => {
    if (reduced) return
    const t1 = setTimeout(() => setPct(26), 650)
    const t2 = setTimeout(() => setPct(52), 1550)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [reduced])

  const move = (clientX: number) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    setPct(Math.max(3, Math.min(97, ((clientX - r.left) / r.width) * 100)))
  }

  const slide = dragging ? "none" : "0.7s cubic-bezier(0.22,1,0.36,1)"

  return (
    <div
      ref={ref}
      className="absolute inset-0 touch-none select-none"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId)
        setDragging(true)
        onInteract?.()
        move(e.clientX)
      }}
      onPointerMove={(e) => dragging && move(e.clientX)}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
    >
      {/* After (full) */}
      <Image
        src={nachher}
        alt={alt}
        fill
        priority
        sizes="(max-width: 1024px) 90vw, 560px"
        className="object-cover"
      />

      {/* Before (clipped to the left of the handle) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pct}% 0 0)`, transition: `clip-path ${slide}` }}>
        <Image
          src={vorher}
          alt=""
          fill
          sizes="(max-width: 1024px) 90vw, 560px"
          className="object-cover"
          style={placeholder ? { filter: "grayscale(0.7) brightness(0.8) contrast(0.95)" } : undefined}
        />
      </div>

      {/* Labels */}
      <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 font-mono text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
        Vorher
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-teal/90 px-2.5 py-1 font-mono text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
        Nachher
      </span>

      {/* Divider + handle */}
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 -translate-x-1/2 bg-white/90"
        style={{ left: `${pct}%`, transition: `left ${slide}` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-dark shadow-lg ring-1 ring-black/10">
          <MoveHorizontal className="h-4 w-4" />
        </div>
      </div>
    </div>
  )
}

function Thumb({
  p,
  active,
  onClick,
  className,
  badge,
}: {
  p: Projekt
  active: boolean
  onClick: () => void
  className: string
  badge?: string
}) {
  return (
    <button
      onClick={onClick}
      aria-label={`${p.label} anzeigen`}
      aria-current={active}
      className={[
        "relative shrink-0 cursor-pointer overflow-hidden rounded-lg transition-all duration-300",
        active ? "opacity-100 ring-2 ring-teal ring-offset-2 ring-offset-background" : "opacity-45 hover:opacity-85",
        className,
      ].join(" ")}
    >
      <Image src={p.src} alt={p.label} fill sizes="90px" className="object-cover" />
      {badge && (
        <span className="absolute inset-x-0 bottom-0 bg-black/60 py-0.5 text-center font-mono text-[0.5rem] font-bold uppercase tracking-wider text-white">
          {badge}
        </span>
      )}
    </button>
  )
}

/* Where each card sits based on its distance from the front of the deck.
   pos 0 = front; higher = further back. The old front animates to the
   back-most slot on change, so it reads as being shuffled into the pack. */
function deckSlot(pos: number) {
  switch (pos) {
    case 0:
      return { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 }
    case 1:
      return { x: 28, y: -16, scale: 0.945, rotate: 3, opacity: 0.6 }
    case 2:
      return { x: 50, y: -30, scale: 0.89, rotate: 5.5, opacity: 0.3 }
    default:
      return { x: 64, y: -42, scale: 0.85, rotate: 7.5, opacity: 0 }
  }
}

export function Hero() {
  const reduced = useReducedMotion() ?? false
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = projekte.length

  const go = (dir: number) => setIndex((i) => (i + dir + n) % n)

  const cur = projekte[index]
  const isBA = cur.type === "ba" && !!cur.vorher && !!cur.after

  /* Auto-advance the deck (paused on hover / interaction). The before/after
     card gets a longer dwell so visitors can play with the slider. */
  useEffect(() => {
    if (reduced || paused) return
    const dwell = isBA ? 7200 : 5200
    const t = setTimeout(() => setIndex((i) => (i + 1) % n), dwell)
    return () => clearTimeout(t)
  }, [index, paused, reduced, isBA, n])

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

  return (
    <section className="relative flex flex-col overflow-hidden bg-background pt-[66px] lg:min-h-[100dvh] lg:flex-row lg:items-stretch">

      {/* Ambient depth — faint grid + soft teal glows so the warm-white isn't flat */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(28,28,28,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,28,28,0.035) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse 80% 70% at 68% 45%, black, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 68% 45%, black, transparent 75%)",
          }}
        />
        <div
          className="absolute right-[-8%] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--color-teal) 12%, transparent), transparent 65%)" }}
        />
        <div
          className="absolute -left-[10%] bottom-[-12%] h-[460px] w-[460px] rounded-full"
          style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--color-teal) 6%, transparent), transparent 70%)" }}
        />
      </div>

      {/* Editorial ghost number watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-4 top-[16%] hidden select-none font-display text-[16rem] font-bold leading-none text-dark/[0.035] lg:block xl:text-[20rem]"
      >
        01
      </span>

      {/* ─────────── Left: editorial content ─────────── */}
      <div className="relative z-10 flex w-full flex-col justify-center px-7 py-12 sm:px-16 sm:py-16 lg:w-[42%] lg:px-16 lg:py-0 xl:px-20">

        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="mb-7 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-teal" />
          <span className="font-mono text-[0.66rem] font-medium uppercase tracking-[0.24em] text-dark/50">
            Inhabergeführt · Burgenland
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
                stroke="var(--color-teal)"
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
            href="/kontakt"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-cta px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-md transition-colors duration-300 hover:bg-cta-dark cursor-pointer"
          >
            Kostenvoranschlag anfordern
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="tel:+436606304703"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-dark/15 px-7 py-3.5 text-[0.95rem] font-semibold text-cta transition-colors duration-300 hover:border-cta/40 cursor-pointer"
          >
            <Phone className="h-4 w-4" />
            +43 660 630 4703
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-dark/40"
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
            key={p.src + i}
            p={p}
            active={i === index}
            onClick={() => setIndex(i)}
            badge={p.type === "ba" ? "V/N" : undefined}
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
          {/* Photo deck — on change, the front card shuffles to the back of the pack */}
          <motion.div
            className="relative w-full max-w-[500px] lg:max-w-[560px]"
            style={reduced ? undefined : { rotateX: rotX, rotateY: rotY, x: transX, transformStyle: "preserve-3d" }}
          >
            <div className="relative aspect-[4/5] w-full" style={{ transformStyle: "preserve-3d" }}>
              {projekte.map((p, i) => {
                const pos = (i - index + n) % n
                const slot = deckSlot(pos)
                const front = pos === 0
                const cardBA = p.type === "ba" && !!p.vorher && !!p.after
                const zIndex = Math.max(0, 40 - pos * 10)
                return (
                  <motion.div
                    key={p.src + i}
                    initial={false}
                    animate={slot}
                    transition={
                      reduced
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 260, damping: 30, mass: 0.9 }
                    }
                    style={{ zIndex, pointerEvents: front ? "auto" : "none" }}
                    onClick={() => {
                      if (front && !cardBA) go(1)
                    }}
                    className={[
                      "absolute inset-0 rounded-[22px] bg-white p-3 shadow-2xl ring-1 ring-black/5",
                      front && !cardBA ? "cursor-pointer" : "",
                    ].join(" ")}
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-[14px] bg-dark">
                      {cardBA && front ? (
                        <VorherNachher
                          vorher={p.vorher!}
                          nachher={p.after!}
                          alt={`${p.label} — Badsanierung in ${p.ort}`}
                          reduced={reduced}
                          placeholder
                          onInteract={() => setPaused(true)}
                        />
                      ) : (
                        <Image
                          src={cardBA ? p.after! : p.src}
                          alt={`${p.label} — Badsanierung in ${p.ort}`}
                          fill
                          priority={i === 0}
                          sizes="(max-width: 1024px) 90vw, 560px"
                          className="object-cover"
                        />
                      )}

                      {/* Gradient + caption — only on the front card */}
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-6 pt-16">
                        {front && (
                          <>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-[0.62rem] font-semibold tracking-[0.2em] text-teal">
                                PROJEKT N°{String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="h-px w-5 bg-white/30" />
                              <span className="font-mono text-[0.62rem] tracking-[0.16em] text-white/55">
                                {p.spec}
                              </span>
                            </div>
                            <p className="mt-1.5 font-display text-xl font-semibold leading-tight text-white">
                              {p.label}
                              <span className="ml-2 text-base font-normal text-white/55">· {p.ort}</span>
                            </p>
                          </>
                        )}
                      </div>

                      {/* Auto-advance progress bar — front non-slider card only */}
                      {front && !cardBA && (
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
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Mobile project rail (horizontal) */}
          <div className="mt-5 flex items-center justify-center gap-2.5 lg:hidden">
            {projekte.map((p, i) => (
              <Thumb
                key={p.src + i}
                p={p}
                active={i === index}
                onClick={() => setIndex(i)}
                badge={p.type === "ba" ? "V/N" : undefined}
                className="h-12 w-12"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
