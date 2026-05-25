"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#galerie", label: "Galerie" },
  { href: "#festpreis", label: "Festpreis" },
  { href: "#bewertungen", label: "Stimmen" },
  { href: "#kontakt", label: "Kontakt" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const prevScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY
      setScrolled(current > 50)
      if (current > prevScrollY.current && current > 120) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      prevScrollY.current = current
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          hidden ? "-translate-y-full" : "translate-y-0",
          scrolled
            ? "bg-white shadow-[0_2px_24px_rgba(0,0,0,0.07)] border-b border-dark/8"
            : "bg-white/85 backdrop-blur-md border-b border-dark/6"
        )}
      >
        {/* Teal top accent stripe */}
        <div className="h-[3px] bg-teal w-full absolute top-0 left-0" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-[66px]">

            {/* Logo — always dark, no inversion needed */}
            <Link href="/" className="shrink-0 flex items-center pt-px">
              <Image
                src="/logo.svg"
                width={100}
                height={55}
                alt="TraumBad Installations"
                className="h-9 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
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

            {/* Right: separator + phone + CTA */}
            <div className="flex items-center gap-4">

              {/* Vertical divider */}
              <div className="hidden lg:block w-px h-5 bg-dark/12" />

              {/* Phone — teal to draw the eye */}
              <a
                href="tel:+436606304703"
                className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-teal-dark transition-colors duration-200 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                +43 660 630 4703
              </a>

              {/* CTA */}
              <Link
                href="#kontakt"
                className="hidden sm:inline-flex items-center bg-teal hover:bg-teal-dark text-white text-sm font-semibold px-5 py-2.5 rounded-md shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                Angebot anfragen
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 -mr-1 text-dark/60 hover:text-dark cursor-pointer transition-colors"
                aria-label="Menü öffnen"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-dark/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-[300px] bg-white flex flex-col shadow-2xl">

            {/* Teal top stripe in drawer */}
            <div className="h-[3px] bg-teal w-full" />

            <div className="flex items-center justify-between px-6 h-16 border-b border-border">
              <Image
                src="/logo.svg"
                width={80}
                height={44}
                alt="TraumBad"
                className="h-8 w-auto"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 cursor-pointer text-dark/40 hover:text-dark transition-colors"
                aria-label="Menü schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col px-6 py-6 gap-0">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[16px] font-medium text-dark/70 hover:text-teal py-3 border-b border-border/40 transition-colors cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto px-6 pb-8 flex flex-col gap-3">
              <a
                href="tel:+436606304703"
                className="flex items-center gap-2 text-teal font-semibold py-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                +43 660 630 4703
              </a>
              <Link
                href="#kontakt"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center bg-teal text-white font-semibold py-3.5 px-4 rounded-md hover:bg-teal-dark transition-colors cursor-pointer shadow-sm"
              >
                Angebot anfragen
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
