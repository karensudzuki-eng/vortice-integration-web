import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.vorticeintegration.cl";

export const viewport: Viewport = {
  themeColor: "#0b0f19",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Vórtice Integration | Puesta en marcha de QA para empresas medianas en Chile",
    template: "%s | Vórtice Integration",
  },
  description:
    "Tu software sale a producción sin pruebas sistemáticas: ponemos en marcha tu área de QA en 10 días. Empieza con un levantamiento gratuito de 30 min.",
  keywords: [
    "Vórtice Integration",
    "QA Chile",
    "Puesta en marcha de QA",
    "Automatización de pruebas",
    "QA para empresas medianas",
    "Calidad de software",
    "Testing continuo",
  ],
  authors: [{ name: "Vórtice Integration Holding SpA" }],
  openGraph: {
    title: "Vórtice Integration | Puesta en marcha de QA para empresas medianas en Chile",
    description:
      "Tu software sale a producción sin pruebas sistemáticas: ponemos en marcha tu área de QA en 10 días. Empieza con un levantamiento gratuito de 30 min.",
    url: baseUrl,
    siteName: "Vórtice Integration Holding SpA",
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
      <body className="min-h-screen flex flex-col bg-qa-dark text-gray-100 antialiased font-sans selection:bg-qa-blue selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-qa-dark text-white font-mono text-sm border border-qa-blue shadow-tech-accent outline-none"
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
