import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-qa-dark text-white border-t-2 border-gray-800 pt-16 pb-12 font-mono">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Identidad */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-2xl font-black tracking-tight text-white block">
              VÓRTICE<span className="text-qa-blue">_</span>
            </span>
            <p className="text-sm text-gray-400 font-sans leading-relaxed max-w-sm">
              Puesta en marcha de áreas de calidad de software y automatización continua para empresas medianas y PyMEs con productos en producción.
            </p>
            <div className="pt-2 text-xs text-gray-400 space-y-1">
              <p>Razón Social: <span className="text-white font-bold">Vórtice Integration Holding SpA</span></p>
              <p>RUT: <span className="text-white font-bold">78.377.882-3</span></p>
              <p>Santiago de Chile</p>
            </div>
          </div>

          {/* Navegación */}
          <div className="md:col-span-3 space-y-3 text-sm">
            <span className="text-xs uppercase tracking-wider text-qa-blue font-bold block">
              // Navegación
            </span>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-qa-neon transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-qa-neon transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/precios" className="text-gray-300 hover:text-qa-neon transition-colors">
                  Precios & Planes
                </Link>
              </li>
              <li>
                <Link href="/levantamiento" className="text-gray-300 hover:text-qa-neon transition-colors">
                  Levantamiento 30 min
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-qa-neon transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto Directo */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-wider text-qa-blue font-bold block">
              // Contacto directo
            </span>

            {/* Email con resaltador neón */}
            <div>
              <span className="text-xs text-gray-400 block mb-1">Correo institucional:</span>
              <a
                href="mailto:contacto@vorticeintegration.com"
                className="inline-block bg-qa-neon text-qa-dark px-2.5 py-1 text-xs font-bold hover:bg-white transition-colors"
              >
                contacto@vorticeintegration.com
              </a>
            </div>

            {/* WhatsApp solo ícono circular */}
            <div>
              <span className="text-xs text-gray-400 block mb-2">WhatsApp:</span>
              <a
                href="https://wa.me/56941939361?text=Hola%20V%C3%B3rtice%2C%20me%20gustar%C3%ADa%20agendar%20un%20levantamiento%20QA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-qa-dark text-white border-2 border-qa-blue flex items-center justify-center hover:bg-qa-blue hover:shadow-hover-neon transition-all"
                aria-label="Contactar por WhatsApp"
                title="Contactar por WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span className="sr-only">(abre WhatsApp en nueva pestaña)</span>
              </a>
            </div>

            {/* Enlace discreto a qachile.cl */}
            <div className="pt-2 text-xs text-gray-400">
              <a
                href="https://qachile.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <span>Para pruebas de carga y estrés, revisa qachile.cl</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                <span className="sr-only">(se abre en una nueva pestaña)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Separador inferior */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <p>&copy; {currentYear} Vórtice Integration Holding SpA. Todos los derechos reservados.</p>
          <p className="text-gray-400">Plataforma de QA & Integración Continua</p>
        </div>
      </div>
    </footer>
  );
}
