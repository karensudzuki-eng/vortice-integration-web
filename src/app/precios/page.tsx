import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Precios claros de puesta en marcha de QA y soporte mensual para empresas medianas y pymes en Chile. Empiezas con un levantamiento gratuito.",
  openGraph: {
    title: "Precios de QA | Vórtice Integration",
    description:
      "Planes transparentes: Levantamiento gratuito $0 USD, Puesta en marcha desde 4.000 USD + IVA y Soporte mensual desde 1.000 USD + IVA. Precio especial pymes.",
  },
};

export default function PreciosPage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-20">
      {/* Cabecera */}
      <section className="pt-8 sm:pt-12 space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-mint text-dark text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-tag">
          <span>Inversión transparente</span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl text-dark tracking-tight uppercase leading-tightest">
          Precios
        </h1>

        <p className="text-lg text-slate leading-relaxed">
          Sin cotizaciones infinitas ni costos ocultos. Empiezas siempre con el levantamiento gratuito y tú decides si avanzar a la puesta en marcha.
        </p>
      </section>

      {/* Tarjetas de Precios */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Levantamiento */}
          <div className="bg-white rounded-32 p-6 sm:p-8 space-y-6 border border-ash/30 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="inline-block bg-mint text-dark text-xs font-bold uppercase px-3 py-1 rounded-tag">
                Sin costo
              </span>
              <h2 className="font-display text-3xl text-dark tracking-tight uppercase leading-none">
                Levantamiento QA
              </h2>
              <div>
                <span className="text-4xl font-extrabold text-dark tracking-tight">$0 USD</span>
                <span className="text-xs text-smoke block mt-1">Sesión online de 30 minutos</span>
              </div>
              <p className="text-sm text-slate leading-relaxed">
                Diagnóstico inicial del estado de pruebas de tu software y entrega de informe escrito de 1 a 2 páginas.
              </p>
              <ul className="text-xs text-slate space-y-2 pt-2 border-t border-canvas">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-dark shrink-0" />
                  <span>Sin costo ni compromiso</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-dark shrink-0" />
                  <span>Informe escrito en 24h hábiles</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-dark shrink-0" />
                  <span>Recomendación de primeros pasos</span>
                </li>
              </ul>
            </div>

            <Link
              href="/levantamiento"
              className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-dark text-white text-sm font-medium hover:bg-dark/90 transition-colors"
            >
              Agendar gratis
            </Link>
          </div>

          {/* 2. Puesta en marcha */}
          <div className="bg-white rounded-32 p-6 sm:p-8 space-y-6 border-2 border-dark flex flex-col justify-between">
            <div className="space-y-4">
              <span className="inline-block bg-dark text-white text-xs font-bold uppercase px-3 py-1 rounded-tag">
                Puesta en marcha
              </span>
              <h2 className="font-display text-3xl text-dark tracking-tight uppercase leading-none">
                QA Básico
              </h2>
              <div>
                <span className="text-xs uppercase text-smoke block">Desde</span>
                <span className="text-4xl font-extrabold text-dark tracking-tight">4.000 USD</span>
                <span className="text-xs text-smoke block mt-1">+ IVA (Pymes desde 3.400 USD + IVA)</span>
              </div>
              <p className="text-sm text-slate leading-relaxed">
                Estructuración del área e integración en CI en 10 días hábiles.
              </p>
              <ul className="text-xs text-slate space-y-2 pt-2 border-t border-canvas">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-dark shrink-0" />
                  <span>Lineamientos y criterios de calidad</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-dark shrink-0" />
                  <span>Plan y matriz de regresión</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-dark shrink-0" />
                  <span>Automatización de flujos críticos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-dark shrink-0" />
                  <span>Integración en pipeline de CI</span>
                </li>
              </ul>
            </div>

            <Link
              href="/levantamiento"
              className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-dark text-white text-sm font-medium hover:bg-dark/90 transition-colors"
            >
              Comenzar con levantamiento
            </Link>
          </div>

          {/* 3. Soporte mensual */}
          <div className="bg-white rounded-32 p-6 sm:p-8 space-y-6 border border-ash/30 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="inline-block bg-canvas text-dark text-xs font-bold uppercase px-3 py-1 rounded-tag">
                Continuidad
              </span>
              <h2 className="font-display text-3xl text-dark tracking-tight uppercase leading-none">
                Soporte Mensual
              </h2>
              <div>
                <span className="text-xs uppercase text-smoke block">Desde</span>
                <span className="text-4xl font-extrabold text-dark tracking-tight">1.000 USD</span>
                <span className="text-xs text-smoke block mt-1">+ IVA al mes (Pymes desde 850 USD + IVA)</span>
              </div>
              <p className="text-sm text-slate leading-relaxed">
                20 horas al mes para asegurar que las pruebas sigan corriendo y acompañar los despliegues.
              </p>
              <ul className="text-xs text-slate space-y-2 pt-2 border-t border-canvas">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-dark shrink-0" />
                  <span>20 horas mensuales dedicadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-dark shrink-0" />
                  <span>Mantenimiento de pruebas automatizadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-dark shrink-0" />
                  <span>Revisión periódica de cobertura</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-dark shrink-0" />
                  <span>Apoyo técnico en pases a producción</span>
                </li>
              </ul>
            </div>

            <Link
              href="/levantamiento"
              className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-dark text-white text-sm font-medium hover:bg-dark/90 transition-colors"
            >
              Consultar disponibilidad
            </Link>
          </div>
        </div>

        <div className="text-center pt-2">
          <span className="inline-block bg-mint px-4 py-1.5 rounded-tag text-xs font-semibold text-dark">
            Precio especial para pymes.
          </span>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-dark text-white rounded-32 p-8 sm:p-12 text-center space-y-5">
        <h2 className="font-display text-4xl sm:text-6xl text-white uppercase leading-tightest max-w-2xl mx-auto">
          ¿Tienes dudas sobre cuál plan necesitas?
        </h2>
        <p className="text-smoke text-sm sm:text-base max-w-md mx-auto">
          En los 30 minutos de levantamiento revisamos tu software y te decimos con total franqueza si te conviene contratar o no.
        </p>
        <div>
          <Link
            href="/levantamiento"
            className="inline-flex items-center justify-center gap-2 bg-white text-dark text-sm font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
          >
            <span>Agendar levantamiento gratuito</span>
            <ArrowRight className="w-4 h-4 text-dark" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
