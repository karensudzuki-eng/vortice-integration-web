import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vorticeintegration.com";

export const viewport: Viewport = {
  themeColor: "#102A43",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Vórtice Integration SpA | Diagnóstico Sistémico y Transformación",
    template: "%s | Vórtice Integration SpA",
  },
  description:
    "La mayoría de las fallas no son técnicas: están en cómo las personas y los sistemas se encuentran. Servicios de diagnóstico de madurez y acompañamiento en transformación para empresas y pymes en Chile.",
  keywords: [
    "Vórtice Integration",
    "diagnóstico sistémico",
    "transformación organizacional",
    "calidad de software",
    "madurez de procesos",
    "QA Chile",
    "consultoría de software Chile",
    "pymes Chile",
  ],
  authors: [{ name: "Vórtice Integration SpA" }],
  openGraph: {
    title: "Vórtice Integration SpA | Diagnóstico Sistémico y Transformación",
    description:
      "La mayoría de las fallas no son técnicas: están en cómo las personas y los sistemas se encuentran.",
    url: baseUrl,
    siteName: "Vórtice Integration SpA",
    locale: "es_CL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CL" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-vortice-200 selection:text-vortice-900">
        {/* Enlace accesible para saltar directo al contenido */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-vortice-900 text-white rounded-md shadow-lg outline-none ring-2 ring-white"
        >
          Saltar al contenido principal
        </a>

        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
