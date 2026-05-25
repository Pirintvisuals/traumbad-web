"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Typewriter } from "@/components/ui/typewriter"

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease, delay } },
  }
}

const dots = [
  { left: "4%",  top: "8%",  size: 7,  opacity: 0.14, delay: "0s",    dur: "4.2s" },
  { left: "38%", top: "5%",  size: 5,  opacity: 0.10, delay: "0.3s",  dur: "5.2s" },
  { left: "22%", top: "13%", size: 4,  opacity: 0.12, delay: "1.6s",  dur: "4.8s" },
  { left: "2%",  top: "38%", size: 10, opacity: 0.07, delay: "0.5s",  dur: "6.1s" },
  { left: "3%",  top: "60%", size: 4,  opacity: 0.12, delay: "1.9s",  dur: "5.5s" },
  { left: "8%",  top: "86%", size: 6,  opacity: 0.11, delay: "0.8s",  dur: "4.6s" },
  { left: "28%", top: "88%", size: 4,  opacity: 0.09, delay: "2.1s",  dur: "5.0s" },
  { left: "42%", top: "79%", size: 5,  opacity: 0.13, delay: "1.4s",  dur: "4.3s" },
  { left: "15%", top: "74%", size: 3,  opacity: 0.16, delay: "0.2s",  dur: "3.9s" },
  { left: "2%",  top: "25%", size: 5,  opacity: 0.10, delay: "1.1s",  dur: "5.8s" },
  { left: "33%", top: "40%", size: 6,  opacity: 0.07, delay: "0.7s",  dur: "6.4s" },
  { left: "60%", top: "10%", size: 5,  opacity: 0.08, delay: "0.9s",  dur: "5.3s" },
  { left: "85%", top: "83%", size: 4,  opacity: 0.07, delay: "2.0s",  dur: "4.9s" },
  { left: "72%", top: "50%", size: 3,  opacity: 0.06, delay: "1.3s",  dur: "6.7s" },
]

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-stretch overflow-hidden bg-[#F9F9F9] pt-[66px]">

      {/* Background dots */}
      {dots.map((d, i) => (
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

      {/* Left: content */}
      <div className="relative z-10 w-full lg:w-[45%] flex flex-col justify-center px-10 sm:px-16 lg:px-20 py-20 lg:py-0">

        <motion.h1
          {...fadeUp(0.15)}
          className="font-display font-bold text-[clamp(3.4rem,6.5vw,5.6rem)] text-dark leading-[1.04] tracking-tight mb-8"
        >
          Wir bauen
          <br />
          Ihr{" "}
          <Typewriter
            text={["schönes", "helles", "perfektes", "modernes", "zeitloses", "makelloses"]}
            speed={72}
            deleteSpeed={38}
            waitTime={2200}
            initialDelay={600}
            className="text-teal italic"
            cursorChar="_"
            cursorClassName="ml-0.5 opacity-80"
          />
          <br />
          Traumbad.
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-dark/50 text-[1rem] leading-[1.8] max-w-sm mb-10"
        >
          Von der Planung bis zur Schlüsselübergabe —
          zum garantierten Festpreis.
        </motion.p>

        <motion.div {...fadeUp(0.42)} className="flex flex-col sm:flex-row gap-3">
          <Link
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark text-white font-semibold text-[0.95rem] px-7 py-3.5 rounded-md transition-all duration-300 cursor-pointer shadow-md"
          >
            Kostenloses Angebot
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#galerie"
            className="inline-flex items-center justify-center gap-2 border border-dark/15 hover:border-dark/30 text-dark/65 font-medium text-[0.95rem] px-7 py-3.5 rounded-md transition-all duration-300 cursor-pointer"
          >
            Referenzen ansehen
          </Link>
        </motion.div>
      </div>

      {/* Right: image with diagonal reveal */}
      <motion.div
        className="hidden lg:block lg:w-[55%]"
        initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
        animate={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}
        transition={{ duration: 1.3, ease: "circOut" }}
        style={{
          backgroundImage: "url(/traumbad-eu-badsanierung-badezimmer-renovierung-31-525x696.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Mobile: subtle image texture */}
      <div
        className="absolute inset-0 lg:hidden -z-0"
        style={{
          backgroundImage: "url(/traumbad-eu-badsanierung-badezimmer-renovierung-31-525x696.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 0.07,
        }}
      />
    </section>
  )
}
