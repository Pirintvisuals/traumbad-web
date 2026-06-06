// Datengrundlage für die drei Leistungspakete und ihre Unterseiten.
// Jede Arbeit wird zweifach beschrieben: "was" erklärt, worum es sich handelt,
// "wir" erklärt, wie TraumBad sie ausführt.

import type { LucideIcon } from "lucide-react"
import {
  Droplets,
  Lightbulb,
  ShowerHead,
  Sparkles,
  Accessibility,
  LayoutGrid,
  Wrench,
  ShieldCheck,
  Ruler,
  Hammer,
  Layers,
  Grid3x3,
  Zap,
  BadgeCheck,
} from "lucide-react"

export type Arbeit = {
  /** Anker-ID für Direktlinks aus dem Leistungsverzeichnis der Startseite. */
  id: string
  /** Symbol statt Nummer — markiert die Arbeit auf der Unterseite. */
  icon: LucideIcon
  titel: string
  /** Einzeiler für das Leistungsverzeichnis auf der Startseite. */
  kurz: string
  /** Was ist das überhaupt? — Erklärung der Arbeit selbst. */
  was: string
  /** Wie setzt TraumBad das um? */
  wir: string
}

export type AblaufSchritt = {
  titel: string
  text: string
}

export type Bundle = {
  slug: string
  nummer: string
  titel: string
  /** Kurzer Claim, wie auf der Startseite. */
  intro: string
  /** Einleitender Absatz auf der Unterseite. */
  beschreibung: string
  preisVon: string
  preisBis: string
  dauer: string
  ideal: string
  bild: string
  arbeiten: Arbeit[]
  ablauf: AblaufSchritt[]
  inklusive: string[]
}

export const bundles: Bundle[] = [
  {
    slug: "frischekur",
    nummer: "01",
    titel: "Frischekur",
    intro: "Frischer Look, ohne Baustelle.",
    beschreibung:
      "Ihr Bad ist im Kern in Ordnung, sieht aber müde aus? Bei der Frischekur tauschen wir gezielt jene Teile aus, die den optischen Unterschied machen — ohne Wände aufzustemmen und ohne tagelange Baustelle. Sie behalten Grundriss und Fliesen, bekommen aber ein Bad, das sich wieder neu anfühlt.",
    preisVon: "5.000",
    preisBis: "8.000",
    dauer: "2–4 Tage",
    ideal:
      "Bäder, deren Substanz noch gut ist, deren Ausstattung aber in die Jahre gekommen ist — ideal für Wohnungen, Mietobjekte oder als günstiger Zwischenschritt.",
    bild: "/traumbad-eu-badsanierung-badezimmer-renovierung-27-341x341.jpg",
    arbeiten: [
      {
        id: "armaturen-waschtisch",
        icon: Droplets,
        kurz: "Neue Mischbatterien und Waschtisch — ganz ohne Eingriff in die Wand.",
        titel: "Armaturen & Waschtisch",
        was: "Als Armaturen bezeichnet man alle Wasserhähne und Mischbatterien — also die Hebel, mit denen Sie Temperatur und Menge regeln. Der Waschtisch ist das Waschbecken samt Unterschrank. Beide sind die Teile, die man im Bad am häufigsten berührt und ansieht.",
        wir: "Wir demontieren die alten Armaturen, prüfen die dahinterliegenden Anschlüsse und setzen neue, hochwertige Mischbatterien sowie einen passenden Waschtisch. Verkalkte oder tropfende Hähne verschwinden, ohne dass die Leitungen in der Wand angetastet werden müssen.",
      },
      {
        id: "spiegelschrank-beleuchtung",
        icon: Lightbulb,
        kurz: "Mehr Stauraum und warmweißes, blendfreies Licht am Waschplatz.",
        titel: "Spiegelschrank & Beleuchtung",
        was: "Ein Spiegelschrank vereint Spiegel und Stauraum in einem. Moderne Modelle bringen Licht (oft LED) und Steckdosen gleich mit. Die Beleuchtung entscheidet, ob ein Bad freundlich und hell oder grau und schummrig wirkt.",
        wir: "Wir montieren einen neuen Spiegelschrank, schließen die Beleuchtung fachgerecht an und sorgen für blendfreies, warmweißes Licht am Waschplatz. Auf Wunsch ergänzen wir indirekte LED-Akzente, die dem Raum sofort mehr Tiefe geben.",
      },
      {
        id: "dusche-duschwand",
        icon: ShowerHead,
        kurz: "Klare, dichte Duschwand statt blind gewordenem Glas.",
        titel: "Neue Dusche oder Duschwand",
        was: "Die Duschwand (oder Duschabtrennung) ist die Glas- oder Kunststofffläche, die das Spritzwasser im Duschbereich hält. Mit den Jahren werden solche Wände blind, undicht an den Dichtungen oder unmodern in der Form.",
        wir: "Wir entfernen die alte Abtrennung, erneuern Brausegarnitur und Duschdichtungen und setzen eine neue, klare Duschwand. Das Ergebnis ist dicht, leicht zu reinigen und optisch ein deutlicher Sprung — ohne den Duschboden komplett neu aufbauen zu müssen.",
      },
      {
        id: "fugen-silikon",
        icon: Sparkles,
        kurz: "Frische, schimmelresistente Fugen — sofort gepflegter und dicht.",
        titel: "Oberflächen, Fugen & Silikon",
        was: "Silikonfugen sind die elastischen Dichtnähte zwischen Wanne, Fliesen und Wand. Sie sind die häufigste Schwachstelle im Bad: Werden sie alt, verfärben sie sich, werden porös und lassen Feuchtigkeit durch — Schimmel ist die Folge.",
        wir: "Wir schneiden alte Silikon- und Fugendichtungen sauber heraus, reinigen die Oberflächen und ziehen frische, schimmelresistente Fugen. Wo nötig, frischen wir auch Fliesenfugen auf. Das Bad wirkt sofort gepflegter und ist wieder zuverlässig dicht.",
      },
    ],
    ablauf: [
      {
        titel: "Beratung & Festpreis",
        text: "Wir sehen uns Ihr Bad vor Ort an, hören zu, was Sie stört, und halten alles in einem verbindlichen Festpreisangebot fest.",
      },
      {
        titel: "Materialauswahl",
        text: "Sie wählen Armaturen, Spiegelschrank und Duschwand aus unseren Vorschlägen — wir kümmern uns um Bestellung und Lieferung.",
      },
      {
        titel: "Umsetzung in wenigen Tagen",
        text: "Wir arbeiten zügig und sauber, meist ist Ihr Bad innerhalb von 2 bis 4 Tagen wieder voll nutzbar.",
      },
      {
        titel: "Besenreine Übergabe",
        text: "Wir räumen auf, entsorgen das Altmaterial und übergeben ein fertiges, sofort nutzbares Bad.",
      },
    ],
    inklusive: [
      "Anfahrt & Aufmaß im Service-Gebiet",
      "Demontage & fachgerechte Entsorgung",
      "Markenarmaturen & -ausstattung",
      "Neue Silikon- & Dichtungsarbeiten",
      "Endreinigung & Übergabe",
    ],
  },
  {
    slug: "teilsanierung",
    nummer: "02",
    titel: "Teilsanierung",
    intro: "Wanne raus, Dusche rein.",
    beschreibung:
      "Die Teilsanierung ist der gezielte Umbau ohne Komplettabriss. Der Klassiker: die alte Badewanne weicht einer bodenebenen Dusche, pflegeleichte Wandpaneele ersetzen das Fliesenchaos und die wichtigsten Sanitärteile werden erneuert. Sie bekommen ein spürbar moderneres Bad in wenigen Tagen — ohne den Aufwand und die Kosten einer Kernsanierung.",
    preisVon: "8.500",
    preisBis: "14.000",
    dauer: "5–8 Tage",
    ideal:
      "Bäder, die funktional an Grenzen stoßen — etwa beim Einstieg in die Wanne — oder optisch eine echte Modernisierung brauchen, aber nicht vollständig entkernt werden müssen.",
    bild: "/traumbad-eu-badsanierung-badezimmer-renovierung-23-525x696.jpg",
    arbeiten: [
      {
        id: "wanne-zu-dusche",
        icon: Accessibility,
        kurz: "Raus mit der Wanne, rein mit der bodenebenen Dusche.",
        titel: "Wanne-zu-Dusche-Umbau",
        was: "Beim Wanne-zu-Dusche-Umbau wird die alte Badewanne entfernt und an ihrer Stelle eine bodenebene (auch: bodengleiche oder barrierefreie) Dusche aufgebaut. Bodeneben bedeutet: kein hoher Einstieg mehr, der Duschboden liegt auf einer Höhe mit dem restlichen Boden. Das ist bequemer, sicherer und sieht großzügiger aus.",
        wir: "Wir bauen die Wanne aus, passen den Bodenaufbau und die Abdichtung an, setzen eine flache Duschrinne oder einen Punktablauf und bauen eine ebenerdige Dusche mit Glasabtrennung. Wo möglich, denken wir Barrierefreiheit gleich mit.",
      },
      {
        id: "wandpaneele",
        icon: LayoutGrid,
        kurz: "Großformatige, fugenlose Paneele — pflegeleicht statt Fliesenchaos.",
        titel: "Wandpaneele statt Verfliesung",
        was: "Wandpaneele sind großformatige, fugenlose Platten, die direkt auf die Wand montiert werden — als moderne Alternative zu vielen kleinen Fliesen. Weil es kaum Fugen gibt, gibt es auch kaum Stellen, an denen sich Schmutz und Schimmel festsetzen. Das macht sie besonders pflegeleicht.",
        wir: "Wir montieren hochwertige Wandpaneele passgenau im Dusch- und Waschbereich. Das spart die staubige, tagelange Stemm- und Fliesenarbeit, hält dicht und ergibt eine ruhige, durchgehende Oberfläche, die sich mit einem Wisch reinigen lässt.",
      },
      {
        id: "sanitaer-armaturen",
        icon: Wrench,
        kurz: "WC, Waschtisch und Armaturen wieder zuverlässig und sparsam.",
        titel: "Sanitär & Armaturen erneuern",
        was: "Mit Sanitär sind die wasserführenden Objekte und ihre Anschlüsse gemeint — WC, Waschtisch, Brause- und Wannenarmaturen samt der Zu- und Ableitungen. Über die Jahre verkalken Leitungen, Dichtungen werden spröde und Bauteile veralten technisch.",
        wir: "Wir erneuern die sichtbaren Sanitärobjekte und Armaturen und prüfen die Anschlüsse im Umbaubereich. Undichte oder veraltete Teile werden ersetzt, sodass alles wieder zuverlässig und wassersparend funktioniert.",
      },
      {
        id: "abdichtung",
        icon: ShieldCheck,
        kurz: "Die unsichtbare Schutzschicht, die Ihr Bad dauerhaft trocken hält.",
        titel: "Abdichtung im Nassbereich",
        was: "Die Abdichtung ist eine unsichtbare Schutzschicht unter Fliesen oder Paneelen, die verhindert, dass Wasser in Wand und Boden eindringt. Sie ist die wichtigste — und am häufigsten vernachlässigte — Schicht im Bad. Fehlt sie oder ist sie fehlerhaft, drohen Feuchteschäden, die teuer werden.",
        wir: "Im gesamten Umbaubereich bringen wir eine normgerechte Verbundabdichtung auf, bevor Paneele oder Duschelemente gesetzt werden. So bleibt die Bausubstanz dauerhaft trocken — die Grundlage dafür, dass Ihr neues Bad jahrzehntelang hält.",
      },
    ],
    ablauf: [
      {
        titel: "Beratung & Festpreis",
        text: "Wir klären vor Ort, was umgebaut wird, und legen Umfang, Material und Preis schriftlich und verbindlich fest.",
      },
      {
        titel: "Planung & Material",
        text: "Wir stimmen Dusche, Paneele und Armaturen mit Ihnen ab und koordinieren alle Gewerke, damit nichts aufeinander wartet.",
      },
      {
        titel: "Umbau",
        text: "Demontage, Abdichtung, Dusche, Paneele, Sanitär — Schritt für Schritt, durch ein eingespieltes Team aus einer Hand.",
      },
      {
        titel: "Übergabe",
        text: "Wir prüfen jede Funktion, reinigen besenrein und übergeben Ihr umgebautes Bad einsatzbereit.",
      },
    ],
    inklusive: [
      "Aufmaß, Planung & Festpreisangebot",
      "Demontage der Wanne & Entsorgung",
      "Normgerechte Abdichtung des Nassbereichs",
      "Bodenebene Dusche mit Glasabtrennung",
      "Wandpaneele & neue Armaturen",
      "Funktionsprüfung & Endreinigung",
    ],
  },
  {
    slug: "komplettsanierung",
    nummer: "03",
    titel: "Komplettsanierung",
    intro: "Von der nackten Wand bis zum fertigen Bad.",
    beschreibung:
      "Die Komplettsanierung ist die Königsdisziplin: Wir entkernen Ihr Bad bis auf den Rohbau und bauen es vollständig neu auf — geplant, geliefert und ausgeführt aus einer Hand. Ob klassisch neu verfliest oder in fugenlosem Mikrozement: Sie bekommen ein Bad, das in Grundriss, Technik und Optik exakt zu Ihnen passt. Ein Ansprechpartner, ein Festpreis, ein fertiges Ergebnis.",
    preisVon: "15.000",
    preisBis: "26.000",
    dauer: "3–5 Wochen",
    ideal:
      "Bäder, die grundlegend erneuert werden sollen — veraltete Technik, ungünstiger Grundriss oder Feuchteschäden — und Bauherren, die ein durchgeplantes Ergebnis ohne Kompromisse wollen.",
    bild: "/traumbad-eu-badsanierung-badezimmer-renovierung-31-525x696.jpg",
    arbeiten: [
      {
        id: "aufmass-planung",
        icon: Ruler,
        kurz: "Millimetergenaue Vermessung und ein durchdachter neuer Grundriss.",
        titel: "Aufmaß & Planung",
        was: "Das Aufmaß ist die exakte Vermessung des Raums; die Planung legt fest, wo künftig Dusche, WC, Waschtisch, Leitungen und Steckdosen sitzen. Bei einer Komplettsanierung wird der Grundriss neu gedacht — hier entscheidet sich, wie gut sich das Bad später nutzen lässt.",
        wir: "Wir vermessen millimetergenau, besprechen Ihre Wünsche und erstellen einen klaren Plan inklusive Materialauswahl. Erst wenn alles steht, beginnt die Baustelle — so gibt es keine bösen Überraschungen und keine Nachforderungen.",
      },
      {
        id: "demontage-rohinstallation",
        icon: Hammer,
        kurz: "Rückbau bis zum Rohbau und neue Wasser- und Stromleitungen.",
        titel: "Demontage & Rohinstallation",
        was: "Bei der Demontage wird das Bad bis auf den Rohbau zurückgebaut. Die Rohinstallation umfasst alles, was später hinter Fliesen und Wänden verschwindet: Wasserleitungen, Abflussrohre, Vorwandelemente (die tragenden Gerüste für WC und Waschtisch) und Stromleitungen.",
        wir: "Wir entkernen fachgerecht, entsorgen das Altmaterial und verlegen Wasser-, Abwasser- und Elektroleitungen neu und normgerecht. Diese unsichtbare Arbeit ist das Fundament — sie entscheidet über Funktion und Lebensdauer des gesamten Bades.",
      },
      {
        id: "abdichtung-untergrund",
        icon: Layers,
        kurz: "Normgerechte Abdichtung und ein ebener, tragfähiger Untergrund.",
        titel: "Abdichtung & Untergrund",
        was: "Bevor der erste Belag kommt, werden Boden und Wände im Nassbereich abgedichtet und der Untergrund vorbereitet — etwa durch Ausgleichen und Grundieren. Diese Schichten sind später nicht mehr sichtbar, aber sie verhindern, dass Wasser in die Bausubstanz zieht.",
        wir: "Wir bringen eine normgerechte Verbundabdichtung auf und stellen einen ebenen, tragfähigen Untergrund her. So liegt jeder Belag fest und dauerhaft trocken auf — die Voraussetzung für ein Bad, das Jahrzehnte hält.",
      },
      {
        id: "fliesen-mikrozement",
        icon: Grid3x3,
        kurz: "Robuster Fliesen-Klassiker oder fugenloser Mikrozement — Ihre Wahl.",
        titel: "Fliesen oder Mikrozement",
        was: "Hier fällt die optische Grundsatzentscheidung. Fliesen sind der robuste Klassiker in unzähligen Formaten. Mikrozement ist ein fugenloser, mineralischer Spachtelbelag, der Wände und Böden in einer durchgehenden, modernen Oberfläche überzieht — ganz ohne Fugen, dafür mit nahtloser, ruhiger Optik.",
        wir: "Wir verlegen Ihre Fliesen sauber und fluchtgerecht oder spachteln Mikrozement in mehreren Schichten von Hand auf. Beide Varianten führen wir fachgerecht und versiegelt aus — Sie entscheiden über Look und Pflegeaufwand, wir über die handwerkliche Qualität.",
      },
      {
        id: "sanitaer-elektrik",
        icon: Zap,
        kurz: "Objekte gesetzt, Strom fertig, Licht gezielt inszeniert.",
        titel: "Sanitär, Elektrik & Beleuchtung",
        was: "Jetzt werden die sichtbaren Objekte gesetzt: WC, Waschtisch, Dusche, Armaturen — und die Elektrik wird fertiggestellt: Steckdosen, Schalter, Spiegel- und Raumbeleuchtung. Gutes Licht und durchdachte Steckdosen machen im Alltag oft den größten Unterschied.",
        wir: "Wir montieren alle Sanitärobjekte millimetergenau, schließen Strom und Licht fachgerecht an und setzen mit warmweißer, blendfreier Beleuchtung gezielte Akzente. Funktion und Atmosphäre entstehen hier im Zusammenspiel.",
      },
      {
        id: "endkontrolle-uebergabe",
        icon: BadgeCheck,
        kurz: "Jede Funktion geprüft, besenrein und schlüsselfertig übergeben.",
        titel: "Endkontrolle & Übergabe",
        was: "Vor der Übergabe wird jede Funktion geprüft — Dichtheit, Abläufe, Strom, Mechanik — und das Bad gereinigt. Die Übergabe ist der Moment, in dem aus der Baustelle wieder Ihr Bad wird.",
        wir: "Wir testen jede Leitung und jedes Bauteil, beheben letzte Kleinigkeiten und übergeben besenrein. Erst wenn alles sitzt und Sie zufrieden sind, ist der Auftrag für uns abgeschlossen.",
      },
    ],
    ablauf: [
      {
        titel: "Beratung, Aufmaß & Festpreis",
        text: "Wir planen Ihr Bad gemeinsam durch und halten Umfang, Material und Gesamtpreis verbindlich im Vertrag fest.",
      },
      {
        titel: "Entkernung & Rohinstallation",
        text: "Wir bauen zurück und verlegen Wasser, Abwasser und Strom neu — das unsichtbare Fundament Ihres Bades.",
      },
      {
        titel: "Abdichtung, Beläge & Montage",
        text: "Abdichten, fliesen oder spachteln, Sanitär und Beleuchtung setzen — alle Gewerke koordiniert aus einer Hand.",
      },
      {
        titel: "Endkontrolle & Übergabe",
        text: "Wir prüfen jede Funktion, reinigen besenrein und übergeben Ihr neues Bad schlüsselfertig.",
      },
    ],
    inklusive: [
      "Aufmaß, Planung & Festpreisangebot",
      "Komplette Entkernung & Entsorgung",
      "Neue Wasser-, Abwasser- & Elektroleitungen",
      "Normgerechte Abdichtung",
      "Fliesen oder Mikrozement nach Wahl",
      "Sanitärobjekte, Elektrik & Beleuchtung",
      "Schlüsselfertige Übergabe",
    ],
  },
]

export function getBundle(slug: string): Bundle | undefined {
  return bundles.find((b) => b.slug === slug)
}

export const bundleSlugs = bundles.map((b) => b.slug)
