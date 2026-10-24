import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.vorticeintegration.cl";

export const viewport: Viewport = {
  themeColor: "#0b0f19",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Vórtice Integration | Puesta en Marcha de QA para Empresas y PyMEs",
    template: "%s | Vórtice Integration",
  },
  description:
    "Tu software sale sin QA. Te ayudamos a ponerlo en marcha. Levantamiento de 30 minutos online y gratuito para empresas y PyMEs con software en producción.",
  keywords: [
    "Vórtice Integration",
    "QA Automation Chile",
    "Pruebas de Software",
    "Testing continuo",
    "Playwright Chile",
    "QA PyMEs",
    "Levantamiento QA gratuito",
  ],
  authors: [{ name: "Vórtice Integration Holding SpA" }],
  openGraph: {
    title: "Vórtice Integration | Puesta en Marcha de QA",
    description:
      "Tu software sale sin QA. Te ayudamos a ponerlo en marcha. Empiezas con un levantamiento de 30 minutos, gratuito y sin compromiso.",
    url: baseUrl,
    siteName: "Vórtice Integration",
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
    <html
      lang="es-CL"
      className={`${bebasNeue.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-qa-canvas text-qa-dark antialiased font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-qa-dark text-white font-mono text-sm border-2 border-qa-blue shadow-brutal-blue outline-none"
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
