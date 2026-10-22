import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight, ShieldCheck } from "lucide-react";

interface CtaSectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function CtaSection({
  title = "¿Conversemos sobre lo que está trabando la operación de tu equipo?",
  description = "Una conversación de diagnóstico de 45 minutos para mirar los flujos reales de trabajo y los desajustes entre personas y sistemas. Sin jerga, sin presentaciones de venta y con foco directo en resolver fricciones.",
  primaryButtonText = "Agenda un diagnóstico de 45 minutos",
  primaryButtonHref = "/diagnostico",
  secondaryButtonText = "Formulario de contacto general",
  secondaryButtonHref = "/contacto",
}: CtaSectionProps) {
  return (
    <section className="bg-vortice-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden my-12 border border-vortice-800">
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-vortice-800/80 text-vortice-200 text-xs font-semibold uppercase tracking-wider border border-vortice-700">
          <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
          <span>Conversación directa y confidencial</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryButtonHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-vortice-950 bg-white hover:bg-slate-100 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-vortice-900"
          >
            <Calendar className="w-5 h-5 text-vortice-800" aria-hidden="true" />
            <span>{primaryButtonText}</span>
          </Link>

          {secondaryButtonText && secondaryButtonHref && (
            <Link
              href={secondaryButtonHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-vortice-800 hover:bg-vortice-700 transition-colors border border-vortice-700 focus:outline-none focus:ring-2 focus:ring-vortice-400"
            >
              <span>{secondaryButtonText}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
