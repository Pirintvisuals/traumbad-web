import type { Metadata } from "next"
import { Bricolage_Grotesque, Source_Sans_3 } from "next/font/google"
import { MotionProvider } from "@/components/MotionProvider"
import "./globals.css"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "TraumBad Installations – Badrenovierung Burgenland",
  description:
    "Premium-Badrenovierungen in Burgenland & Wien. Komplettsanierung, Teilrenovierung und barrierefreie Bäder – immer zum Festpreis. Meisterbetrieb aus dem Burgenland.",
  keywords: [
    "Badrenovierung Burgenland",
    "Badsanierung Wien",
    "Festpreis Badsanierung",
    "Meisterbetrieb Bad",
    "Badezimmer renovieren",
    "barrierefreies Bad",
  ],
  openGraph: {
    title: "TraumBad Installations – Badrenovierung Burgenland",
    description: "Premium-Badrenovierungen zum Festpreis. Meisterbetrieb aus dem Burgenland.",
    locale: "de_AT",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="de-AT"
      className={`${bricolage.variable} ${sourceSans.variable}`}
    >
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
