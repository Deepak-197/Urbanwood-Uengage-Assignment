import type { Metadata, Viewport } from "next"
import { DM_Sans, DM_Serif_Display } from "next/font/google"

import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
})

export const metadata: Metadata = {
  title: {
    default: "UrbanWood | Handcrafted Modern Furniture",
    template: "%s | UrbanWood",
  },
  description:
    "Discover premium handcrafted wooden furniture. Chairs, tables, sofas, and beds designed for modern living with timeless quality.",
  metadataBase: new URL("https://urbanwood.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "UrbanWood",
    title: "UrbanWood | Handcrafted Modern Furniture",
    description:
      "Discover premium handcrafted wooden furniture. Chairs, tables, sofas, and beds designed for modern living with timeless quality.",
  },
}

export const viewport: Viewport = {
  themeColor: "#f6f1ea",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
