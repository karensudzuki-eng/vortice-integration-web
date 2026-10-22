import React from "react";
import Link from "next/link";
import { ExternalLink, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-vortice-950 text-slate-300 border-t border-vortice-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Columna 1: Identidad y propuesta */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-white text-vortice-950 flex items-center justify-center font-bold text-lg">
                V
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Vórtice Integration SpA
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              &ldquo;La mayoría de las fallas no son técnicas: están en cómo las personas y los sistemas se encuentran.&rdquo;
            </p>
            <p className="text-xs text-slate-400">
              Marco de trabajo para diagnóstico sistémico, calidad de software y transformación organizacional en Chile.
            </p>
          </div>

          {/* Columna 2: Navegación de páginas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:underline"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/vortice"
                  className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:underline"
                >
                  Sobre el marco Vórtice
                </Link>
              </li>
              <li>
                <Link
                  href="/diagnostico"
                  className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:underline"
                >
                  Diagnóstico de madurez
                </Link>
              </li>
              <li>
                <Link
                  href="/acompanamiento"
                  className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:underline"
                >
                  Acompañamiento en transformación
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:underline"
                >
                  Blog y artículos (Fase 2)
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:underline"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Nuestras Líneas y Marcas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Líneas del Grupo
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://qachile.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors focus:outline-none focus:underline"
                >
                  <span>QA Chile (qachile.cl)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                  <span className="sr-only">(se abre en una nueva pestaña)</span>
                </a>
                <p className="text-xs text-slate-400 mt-0.5">
                  Marca de servicio para aseguramiento de calidad y pruebas automatizadas.
                </p>
              </li>
              <li>
                <Link
                  href="/diagnostico"
                  className="text-slate-300 hover:text-white transition-colors block focus:outline-none focus:underline"
                >
                  Diagnóstico de madurez organizacional
                </Link>
                <p className="text-xs text-slate-400 mt-0.5">
                  Mapeo de fricciones entre equipos, procesos y herramientas.
                </p>
              </li>
              <li>
                <Link
                  href="/acompanamiento"
                  className="text-slate-300 hover:text-white transition-colors block focus:outline-none focus:underline"
                >
                  Acompañamiento en transformación
                </Link>
                <p className="text-xs text-slate-400 mt-0.5">
                  Facilitación sistémica y destrabe operacional de equipos.
                </p>
              </li>
            </ul>
          </div>

          {/* Columna 4: Datos Legales y Contacto */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Información Legal y Contacto
            </h3>
            <div className="text-sm text-slate-300 space-y-2">
              <p>
                <strong className="text-white block font-medium">Razón Social:</strong>
                Vórtice Integration SpA
              </p>
              <p>
                <strong className="text-white block font-medium">RUT de la empresa:</strong>
                <span className="text-slate-400">[PLACEHOLDER: 77.XXX.XXX-X]</span>
              </p>
              <p className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Santiago, Chile <span className="text-xs text-slate-400">[PLACEHOLDER: Ciudad / Comuna]</span></span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                <a
                  href="mailto:contacto@vorticeintegration.com"
                  className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:underline"
                >
                  contacto@vorticeintegration.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Separador inferior */}
        <div className="mt-12 pt-8 border-t border-vortice-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {currentYear} Vórtice Integration SpA. Todos los derechos reservados.
          </p>
          <p className="text-slate-400">
            Sitio institucional y marco metodológico de Vórtice Integration.
          </p>
        </div>
      </div>
    </footer>
  );
}
