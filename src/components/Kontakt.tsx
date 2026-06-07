"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, ImagePlus, X } from "lucide-react"

const MAX_FOTOS = 5
const MAX_GROESSE = 10 * 1024 * 1024 // 10 MB pro Bild

type Upload = { file: File; url: string }

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const kontaktInfo = [
  { icon: Phone, label: "Telefon", wert: "+43 660 630 4703", href: "tel:+436606304703" },
  { icon: Mail, label: "E-Mail", wert: "office@traumbad.eu", href: "mailto:office@traumbad.eu" },
  { icon: MapPin, label: "Einsatzgebiet", wert: "Burgenland & Wien", href: null },
  { icon: Clock, label: "Erreichbar", wert: "Mo–Fr, 8–18 Uhr", href: null },
]

export function Kontakt() {
  const [gesendet, setGesendet] = useState(false)
  const [laden, setLaden] = useState(false)
  const [uploads, setUploads] = useState<Upload[]>([])
  const [uploadFehler, setUploadFehler] = useState<string | null>(null)
  const [form, setForm] = useState({
    name: "", telefon: "", email: "", leistung: "", nachricht: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const addDateien = (liste: FileList | null) => {
    if (!liste || liste.length === 0) return
    setUploadFehler(null)
    setUploads((vorher) => {
      const neu: Upload[] = []
      for (const file of Array.from(liste)) {
        if (!file.type.startsWith("image/")) {
          setUploadFehler("Bitte nur Bilddateien (JPG, PNG) hochladen.")
          continue
        }
        if (file.size > MAX_GROESSE) {
          setUploadFehler("Jedes Bild darf höchstens 10 MB groß sein.")
          continue
        }
        if (vorher.length + neu.length >= MAX_FOTOS) {
          setUploadFehler(`Maximal ${MAX_FOTOS} Bilder.`)
          break
        }
        neu.push({ file, url: URL.createObjectURL(file) })
      }
      return [...vorher, ...neu]
    })
  }

  const entferneDatei = (index: number) => {
    setUploadFehler(null)
    setUploads((vorher) => {
      const ziel = vorher[index]
      if (ziel) URL.revokeObjectURL(ziel.url)
      return vorher.filter((_, i) => i !== index)
    })
  }

  // Object-URLs beim Unmount freigeben
  useEffect(() => {
    return () => uploads.forEach((u) => URL.revokeObjectURL(u.url))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLaden(true)
    // TODO: Backend anbinden (Formspree/Resend/API-Route). Bilder als
    // multipart/form-data mitsenden — uploads[].file enthält die Dateien.
    await new Promise((r) => setTimeout(r, 900))
    setLaden(false)
    setGesendet(true)
  }

  return (
    <section id="kontakt" className="bg-background pt-16 pb-24 lg:pt-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-2 flex flex-col"
          >
            <span className="text-teal text-xs font-bold uppercase tracking-[0.2em] mb-6">
              So erreichen Sie uns
            </span>

            <div className="space-y-5 mb-10">
              {kontaktInfo.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-teal" />
                    </div>
                    <div>
                      <div className="text-[11px] text-muted-foreground/70 uppercase tracking-wider font-medium">
                        {item.label}
                      </div>
                      <div className={`font-semibold text-[0.95rem] mt-0.5 ${item.label === "Telefon" ? "text-cta" : "text-dark"}`}>{item.wert}</div>
                    </div>
                  </div>
                )
                return item.href ? (
                  <a key={item.label} href={item.href}
                    className="block hover:opacity-75 transition-opacity cursor-pointer">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </div>

            {/* Guarantee callout */}
            <div className="mt-auto p-5 rounded-2xl border border-teal/20 bg-teal/5">
              <div className="flex items-center gap-2 text-teal font-bold text-sm mb-2">
                <CheckCircle className="w-4 h-4" />
                Festpreis inklusive
              </div>
              <p className="text-dark/65 text-sm leading-relaxed">
                Jedes Angebot von uns ist ein Festpreisangebot. Schriftlich, verbindlich —
                ohne Hintertüren.
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="lg:col-span-3"
          >
            {gesendet ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease }}
                className="h-full flex flex-col items-center justify-center text-center py-20 px-8 bg-white rounded-2xl border border-border"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.2 }}
                >
                  <CheckCircle className="w-16 h-16 text-teal mb-6" />
                </motion.div>
                <h3 className="font-display font-bold text-2xl text-dark mb-3 tracking-tight">
                  Vielen Dank!
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm">
                  Ihre Anfrage ist eingegangen. Wir melden uns innerhalb von 24 Stunden
                  mit einem persönlichen Festpreisangebot.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-border p-7 sm:p-10 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-dark mb-1.5">
                      Ihr Name <span className="text-teal">*</span>
                    </label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      placeholder="Max Mustermann"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-dark placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefon" className="block text-sm font-semibold text-dark mb-1.5">
                      Telefon <span className="text-teal">*</span>
                    </label>
                    <input
                      id="telefon" name="telefon" type="tel" required
                      value={form.telefon} onChange={handleChange}
                      placeholder="+43 ..."
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-dark placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark mb-1.5">
                    E-Mail
                  </label>
                  <input
                    id="email" name="email" type="email"
                    value={form.email} onChange={handleChange}
                    placeholder="ihre@email.at"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-dark placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="leistung" className="block text-sm font-semibold text-dark mb-1.5">
                    Was planen Sie?
                  </label>
                  <select
                    id="leistung" name="leistung"
                    value={form.leistung} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-dark focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors text-sm cursor-pointer"
                  >
                    <option value="">Bitte wählen …</option>
                    <option value="komplett">Komplettsanierung</option>
                    <option value="teil">Teilrenovierung</option>
                    <option value="barrierefrei">Barrierefreies Bad</option>
                    <option value="sonstiges">Sonstiges / ich bin unsicher</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="nachricht" className="block text-sm font-semibold text-dark mb-1.5">
                    Kurze Beschreibung
                  </label>
                  <textarea
                    id="nachricht" name="nachricht" rows={4}
                    value={form.nachricht} onChange={handleChange}
                    placeholder="Größe des Bades, aktuelle Situation, besondere Wünsche oder Fragen …"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-dark placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors text-sm resize-none"
                  />
                </div>

                {/* Foto-Upload */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-1.5">
                    Fotos Ihres Bades{" "}
                    <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>

                  <label
                    htmlFor="fotos"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault()
                      addDateien(e.dataTransfer.files)
                    }}
                    className="flex flex-col items-center justify-center gap-2 w-full px-4 py-7 rounded-lg border-2 border-dashed border-input bg-background hover:border-teal/50 hover:bg-teal/[0.03] cursor-pointer transition-colors text-center"
                  >
                    <ImagePlus className="w-6 h-6 text-teal" />
                    <span className="text-sm text-dark/70">
                      <span className="font-semibold text-teal">Foto auswählen</span> oder hierher ziehen
                    </span>
                    <span className="text-xs text-muted-foreground/60">
                      JPG oder PNG · bis zu {MAX_FOTOS} Bilder
                    </span>
                    <input
                      id="fotos"
                      name="fotos"
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={(e) => {
                        addDateien(e.target.files)
                        e.target.value = ""
                      }}
                    />
                  </label>

                  {uploadFehler && (
                    <p className="mt-2 text-xs text-destructive">{uploadFehler}</p>
                  )}

                  {uploads.length > 0 && (
                    <div className="mt-3 grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                      {uploads.map((u, i) => (
                        <div
                          key={u.url}
                          className="group relative aspect-square rounded-lg overflow-hidden border border-border"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={u.url} alt={u.file.name} className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={() => entferneDatei(i)}
                            aria-label={`${u.file.name} entfernen`}
                            className="absolute top-1 right-1 w-6 h-6 flex items-center justify-center rounded-full bg-dark/70 text-white hover:bg-dark transition-colors cursor-pointer"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={laden}
                  className="w-full flex items-center justify-center gap-2 bg-cta hover:bg-cta-dark text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {laden ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Wird gesendet …
                    </>
                  ) : (
                    <>
                      Kostenloses Festpreisangebot anfordern
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-muted-foreground/60">
                  Unverbindlich & kostenlos · Antwort innerhalb von 24 Stunden
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
