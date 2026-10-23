import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-20 pt-12 pb-16 border-t border-ash/50 bg-canvas text-slate">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Identidad */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-display text-3xl tracking-tight text-dark block">
              VÓRTICE INTEGRATION
            </span>
            <p className="text-sm text-slate leading-relaxed max-w-sm">
              Puesta en marcha de áreas de calidad de software y automatización para empresas medianas y pymes en Chile.
            </p>
            <div className="pt-2 text-xs text-slate space-y-1">
              <p>Razón Social: <span className="font-medium text-dark">Vórtice Integration Holding SpA</span></p>
              <p>RUT: <span className="font-medium text-dark">78.377.882-3</span></p>
              <p>Santiago de Chile</p>
            </div>
          </div>

          {/* Enlaces navegación */}
          <div className="md:col-span-3 space-y-2 text-sm">
            <span className="font-semibold text-xs uppercase tracking-wider text-dark block mb-3">
              Navegación
            </span>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-dark transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-dark transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/precios" className="hover:text-dark transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/levantamiento" className="hover:text-dark transition-colors">
                  Levantamiento de 30 min
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-dark transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Canales directos y WhatsApp */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-semibold text-xs uppercase tracking-wider text-dark block">
              Contacto directo
            </span>

            {/* Email con acento amarillo #fff100 */}
            <div>
              <span className="text-xs text-smoke block mb-1">Correo:</span>
              <a
                href="mailto:contacto@vorticeintegration.com"
                className="inline-block bg-voltage px-2.5 py-1 text-dark text-sm font-medium rounded hover:bg-voltage/90 transition-colors"
              >
                contacto@vorticeintegration.com
              </a>
            </div>

            {/* WhatsApp solo ícono circular sin número escrito */}
            <div>
              <span className="text-xs text-smoke block mb-2">WhatsApp:</span>
              <a
                href="https://wa.me/56941939361?text=Hola%20V%C3%B3rtice%2C%20me%20gustar%C3%ADa%20agendar%20un%20levantamiento%20QA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark text-white flex items-center justify-center hover:bg-dark/80 transition-transform hover:scale-105 focus:outline-none"
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
            <div className="pt-2 text-xs text-smoke">
              <a
                href="https://qachile.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-dark transition-colors"
              >
                <span>Para pruebas de carga y estrés, revisa qachile.cl</span>
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
                <span className="sr-only">(se abre en una nueva pestaña)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Separador inferior */}
        <div className="mt-12 pt-6 border-t border-ash/40 flex flex-col sm:flex-row items-center justify-between text-xs text-smoke gap-3">
          <p>&copy; {currentYear} Vórtice Integration Holding SpA. Todos los derechos reservados.</p>
          <p>Santiago de Chile</p>
        </div>
      </div>
    </footer>
  );
}
