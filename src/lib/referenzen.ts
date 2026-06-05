// Gemeinsame Datenquelle für die Galerie-Sektion (Startseite) und die
// Referenzen-Unterseite. Echte Projektfotos ersetzen später die Platzhalter.

export type Foto = {
  id: number
  src: string
  w: number
  h: number
  label: string
  sub: string
  tall: boolean
  kategorie: "Komplettsanierung" | "Teilsanierung" | "Frischekur" | "Barrierefrei"
}

export const fotos: Foto[] = [
  {
    id: 1,
    src: "/traumbad-eu-badsanierung-badezimmer-renovierung-23-525x696.jpg",
    w: 525, h: 696,
    label: "Komplettsanierung",
    sub: "Burgenland",
    tall: true,
    kategorie: "Komplettsanierung",
  },
  {
    id: 2,
    src: "/traumbad-eu-badsanierung-badezimmer-renovierung-20-341x341.jpg",
    w: 341, h: 341,
    label: "Bodenebene Dusche",
    sub: "Wien",
    tall: false,
    kategorie: "Teilsanierung",
  },
  {
    id: 3,
    src: "/traumbad-eu-badsanierung-badezimmer-renovierung-25-341x341.jpg",
    w: 341, h: 341,
    label: "Elegante Neugestaltung",
    sub: "Burgenland",
    tall: false,
    kategorie: "Komplettsanierung",
  },
  {
    id: 4,
    src: "/traumbad-eu-badsanierung-badezimmer-renovierung-26-341x341.jpg",
    w: 341, h: 341,
    label: "Duschkabine & Armaturen",
    sub: "Wien",
    tall: false,
    kategorie: "Teilsanierung",
  },
  {
    id: 5,
    src: "/traumbad-eu-badsanierung-badezimmer-renovierung-31-525x696.jpg",
    w: 525, h: 696,
    label: "Premium-Sanierung",
    sub: "Wien",
    tall: true,
    kategorie: "Komplettsanierung",
  },
  {
    id: 6,
    src: "/traumbad-eu-badsanierung-badezimmer-renovierung-27-341x341.jpg",
    w: 341, h: 341,
    label: "Waschtisch & Spiegel",
    sub: "Burgenland",
    tall: false,
    kategorie: "Frischekur",
  },
  {
    id: 7,
    src: "/traumbad-eu-badsanierung-badezimmer-renovierung-28-341x341.jpg",
    w: 341, h: 341,
    label: "Hochwertige Fliesenarbeit",
    sub: "Wien",
    tall: false,
    kategorie: "Komplettsanierung",
  },
  {
    id: 8,
    src: "/traumbad-eu-badsanierung-badezimmer-renovierung-29-341x341.jpg",
    w: 341, h: 341,
    label: "Barrierefreies Bad",
    sub: "Burgenland",
    tall: false,
    kategorie: "Barrierefrei",
  },
  {
    id: 9,
    src: "/traumbad-eu-badsanierung-badezimmer-renovierung-30-341x341.jpg",
    w: 341, h: 341,
    label: "Badsanierung",
    sub: "Burgenland",
    tall: false,
    kategorie: "Teilsanierung",
  },
  {
    id: 10,
    src: "/traumbad-eu-badsanierung-badezimmer-renovierung-32-341x341.jpg",
    w: 341, h: 341,
    label: "Schlüsselfertige Übergabe",
    sub: "Wien",
    tall: false,
    kategorie: "Komplettsanierung",
  },
]

export const kategorien = [
  "Alle",
  "Komplettsanierung",
  "Teilsanierung",
  "Frischekur",
  "Barrierefrei",
] as const
