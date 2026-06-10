"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { Phone, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const navLinks = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
]

/* Single morphing control: three bars that animate into an X when the
   drawer opens. Lives in the header (above the drawer) so it doubles as
   the close button — no separate X needed. */
function MenuToggle({ open, onClick }: { open: boolean; onClick: () => void }) {
  const t = { duration: 0.32, ease }
  return (
    <button
      onClick={onClick}
      className="lg:hidden relative inline-flex h-10 w-10 -mr-1 items-center justify-center rounded-md text-dark/70 hover:text-dark hover:bg-dark/5 transition-colors cursor-pointer"
      aria-label={open ? "Menü schließen" : "Menü öffnen"}
      aria-expanded={open}
    >
      <span className="relative block h-[14px] w-[22px]">
        <motion.span
          className="absolute left-0 top-0 h-[2px] w-full rounded-full bg-current"
          style={{ transformOrigin: "center" }}
          animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={t}
        />
        <motion.span
          className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-current"
          animate={open ? { opacity: 0, scaleX: 0.4 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.2, ease }}
        />
        <motion.span
          className="absolute left-0 bottom-0 h-[2px] w-full rounded-full bg-current"
          style={{ transformOrigin: "center" }}
          animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          transition={t}
        />
      </span>
    </button>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const prevScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY
      setScrolled(current > 50)
      // Don't auto-hide the bar while the drawer is open (the toggle lives in it).
      if (!mobileOpen && current > prevScrollY.current && current > 120) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      prevScrollY.current = current
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [mobileOpen])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  // Close on Escape.
  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          hidden ? "-translate-y-full" : "translate-y-0",
          scrolled || mobileOpen
            ? "bg-white shadow-[0_2px_24px_rgba(0,0,0,0.07)] border-b border-dark/8"
            : "bg-white/85 backdrop-blur-md border-b border-dark/6"
        )}
      >
        {/* Teal top accent stripe */}
        <div className="h-[3px] bg-teal w-full absolute top-0 left-0" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center h-[66px]">

            {/* Logo — always dark, no inversion needed */}
            <Link href="/" className="justify-self-start shrink-0 flex items-center pt-px" onClick={() => setMobileOpen(false)}>
              <Image
                src="/logo.svg"
                width={100}
                height={55}
                alt="TraumBad Installations"
                className="h-9 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav — true-centered via the middle grid column */}
            <nav className="hidden lg:flex justify-self-center items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-dark/55 hover:text-dark px-3 py-1.5 rounded-md hover:bg-dark/4 transition-all duration-200 cursor-pointer group"
                >
                  {link.label}
                  {/* teal underline on hover */}
                  <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-left rounded-full" />
                </Link>
              ))}
            </nav>

            {/* Right: phone + CTA */}
            <div className="justify-self-end flex items-center gap-2 sm:gap-3 lg:gap-4">

              {/* Vertical divider */}
              <div className="hidden lg:block w-px h-5 bg-dark/12" />

              {/* Phone (text) — CTA accent, from md up */}
              <a
                href="tel:+436606304703"
                className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-cta hover:text-cta-dark transition-colors duration-200 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                +43 660 630 4703
              </a>

              {/* CTA */}
              <Link
                href="/kontakt"
                className="hidden sm:inline-flex items-center bg-cta hover:bg-cta-dark text-white text-sm font-semibold px-5 py-2.5 rounded-md shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                Angebot anfragen
              </Link>

              {/* Phone (icon) — below md, so the number is reachable on every screen size */}
              <a
                href="tel:+436606304703"
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-cta hover:bg-cta/10 transition-colors cursor-pointer"
                aria-label="Anrufen: +43 660 630 4703"
              >
                <Phone className="w-5 h-5" />
              </a>

              {/* Animated hamburger — toggles + morphs to X */}
              <MenuToggle open={mobileOpen} onClick={() => setMobileOpen((o) => !o)} />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer — sits below the header (pt clears the 66px bar) so the
          morphing toggle stays visible and acts as the close control.
          Backdrop + panel are direct keyed children of AnimatePresence so their
          exit animations actually play on close. */}
      <AnimatePresence>
        {mobileOpen && [
          /* Backdrop */
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="fixed inset-0 z-40 bg-dark/50 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          />,

          /* Panel */
          <motion.aside
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 40 }}
            className="fixed top-0 right-0 bottom-0 z-40 w-[min(84vw,340px)] bg-white shadow-2xl flex flex-col pt-[66px] lg:hidden"
          >
              <motion.nav
                className="flex flex-col px-7 pt-6"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
                }}
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: 28 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.4, ease } },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="group flex items-center justify-between py-4 border-b border-border/50 text-[1.15rem] font-display font-semibold text-dark hover:text-teal transition-colors cursor-pointer"
                    >
                      {link.label}
                      <ArrowRight className="w-4 h-4 text-dark/25 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-teal transition-all duration-300" />
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease, delay: 0.34 }}
                className="mt-auto px-7 pb-9 flex flex-col gap-3"
              >
                <a
                  href="tel:+436606304703"
                  className="flex items-center gap-2.5 text-cta font-semibold py-1 cursor-pointer"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  +43 660 630 4703
                </a>
                <Link
                  href="/kontakt"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 bg-cta text-white font-semibold py-3.5 px-4 rounded-md hover:bg-cta-dark transition-colors cursor-pointer shadow-sm"
                >
                  Angebot anfragen
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-center text-xs text-muted-foreground pt-1">
                  Festpreisgarantie · Inhabergeführt · Burgenland
                </p>
              </motion.div>
          </motion.aside>,
        ]}
      </AnimatePresence>
    </>
  )
}
