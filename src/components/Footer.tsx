import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[#070b13] text-gray-400 border-t border-qa-border pt-16 pb-12 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Identidad de la Matriz */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-xl font-bold tracking-tight text-white block font-mono">
              VÓRTICE INTEGRATION<span className="text-qa-blue">_</span>
            </span>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Empresa matriz de ingeniería de calidad de software y marcos metodológicos de gestión para empresas con software en producción.
            </p>
            <div className="pt-1 text-xs text-gray-400 space-y-1">
              <p>
                <strong>Vórtice Integration Holding SpA</strong> · RUT 78.377.882-3 · Santiago de Chile
              </p>
            </div>
          </div>

          {/* Navegación Corporativa */}
          <div className="md:col-span-3 space-y-3 text-sm">
            <span className="text-xs uppercase tracking-wider text-qa-blue font-bold font-mono block">
              // Navegación
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/metodologia" className="hover:text-white transition-colors">
                  Metodología Vórtice
                </Link>
              </li>
              <li>
                <Link href="/precios" className="hover:text-white transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/quienes-somos" className="hover:text-white transition-colors">
                  Quiénes somos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Línea de Servicio & Contacto Directo */}
          <div className="md:col-span-4 space-y-4 text-sm">
            <span className="text-xs uppercase tracking-wider text-qa-blue font-bold font-mono block">
              // Canales oficiales
            </span>

            {/* Email oficial */}
            <div>
              <span className="text-xs text-gray-500 block mb-1">Correo institucional:</span>
              <a
                href="mailto:contacto@vorticeintegration.com"
                className="text-white hover:text-qa-blue font-mono text-sm underline decoration-qa-blue/50 underline-offset-4 transition-colors"
              >
                contacto@vorticeintegration.com
              </a>
            </div>

            {/* WhatsApp oficial */}
            <div>
              <span className="text-xs text-gray-500 block mb-2">WhatsApp:</span>
              <a
                href="https://wa.me/56941939361?text=Hola%20V%C3%B3rtice%20Integration%2C%20me%20gustar%C3%ADa%20coordinar%20un%20levantamiento%20t%C3%A9cnico."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-gray-300 hover:text-white transition-colors p-2 bg-qa-surface rounded border border-qa-border hover:border-qa-blue"
                aria-label="Contactar por WhatsApp"
                title="Contactar por WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="text-qa-blue"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>Iniciar conversación en WhatsApp</span>
              </a>
            </div>

            {/* Línea QA Chile obligatoria */}
            <div className="pt-2 text-xs text-gray-400">
              <p>
                QA Chile es una línea de servicio de Vórtice Integration Holding SpA.{" "}
                <a
                  href="https://qachile.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-qa-blue hover:underline"
                >
                  <span>[qachile.cl]</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bloque Legal Obligatorio Idéntico */}
        <div className="mt-12 pt-6 border-t border-qa-border flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <p>
            Vórtice Integration Holding SpA · RUT 78.377.882-3 · Santiago de Chile
          </p>
          <p>
            &copy; {currentYear} Vórtice Integration Holding SpA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
