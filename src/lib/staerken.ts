import { Award, Handshake, Wind, FileCheck, Layers, MapPin } from "lucide-react"
import type { LucideIcon } from "lucide-react"

// Die echten Stärken laut traumbad.eu — Grundlage für die Startseiten-Sektion
// "Warum TraumBad" und die Über-uns-Seite.

export type Staerke = {
  icon: LucideIcon
  titel: string
  text: string
}

export const staerken: Staerke[] = [
  {
    icon: Award,
    titel: "10 Jahre Erfahrung",
    text: "Seit über zehn Jahren sanieren wir Bäder in Burgenland und Umgebung. Hunderte fertige Projekte — und bei jedem dieselbe Handschrift.",
  },
  {
    icon: Handshake,
    titel: "Der Chef kommt selbst",
    text: "Mate Nagy betreut Ihr Projekt persönlich — von der kostenlosen Erstbesichtigung bis zur Übergabe. Kein Subunternehmer, kein Callcenter.",
  },
  {
    icon: Wind,
    titel: "Sauber & staubarm",
    text: "Wir arbeiten so sauber wie möglich und halten die Staubbelastung gering. Ihr Zuhause bleibt während der Arbeiten bewohnbar.",
  },
  {
    icon: FileCheck,
    titel: "Festpreis, schriftlich",
    text: "Klares Angebot vorab — keine versteckten Kosten, keine Nachforderungen. Was wir nennen, das gilt bis zur letzten Fliese.",
  },
  {
    icon: Layers,
    titel: "Alles aus einer Hand",
    text: "Sanitär, Fliesen, Elektrik und Heizung aus einem Haus. Ein eingespieltes Team, ein Ansprechpartner, ein sauberes Ergebnis.",
  },
  {
    icon: MapPin,
    titel: "Regional & schnell vor Ort",
    text: "Mitten im Burgenland zuhause. Wir sind rasch bei Ihnen — und werden termingerecht fertig, ohne offene Baustellen.",
  },
]
