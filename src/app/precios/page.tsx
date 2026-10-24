import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Precios & Planes | Vórtice Integration",
  description:
    "Precios transparentes de puesta en marcha de QA y soporte mensual para empresas medianas y PyMEs en Chile. Empiezas con un levantamiento gratuito.",
  openGraph: {
    title: "Precios y Planes de QA | Vórtice Integration",
    description:
      "Planes transparentes: Levantamiento gratuito $0 USD, Puesta en marcha desde $3.400 USD + IVA y Soporte mensual desde $850 USD + IVA. Equivalencias en UF y CLP.",
  },
};

export default function PreciosPage() {
  return (
    <div className="w-full bg-qa-canvas min-h-screen">
      {/* Cabecera */}
      <section className="bg-qa-dark text-white py-16 px-6 border-b border-qa-dark">
        <div className="max-w-6xl mx-auto space-y-4">
          <span className="font-mono text-xs text-qa-blue uppercase tracking-widest block font-bold">
            // Transparencia Total
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-none">
            Precios y Planes de Inversión
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl font-sans leading-relaxed">
            Sin presupuestos inflados ni costos ocultos. Empiezas siempre con la sesión técnica gratuita de 30 minutos y tú decides si avanzar.
          </p>
        </div>
      </section>

      {/* Planes */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <span className="font-mono text-xs text-qa-blue font-bold uppercase">
            // Planes adaptados al mercado chileno (Valores netos + IVA)
          </span>
          <span className="bg-qa-menta text-qa-dark font-mono font-bold text-xs px-3 py-1.5 border border-qa-dark uppercase">
            Precio especial para pymes.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 01 */}
          <div className="bg-white border-2 border-qa-dark p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-6px_6px_0px_#0052ff]">
            <div className="space-y-4">
              <span className="font-mono text-xs text-qa-blue font-bold uppercase block">
                Diagnóstico Inicial
              </span>
              <h2 className="text-2xl font-extrabold text-qa-dark">
                Levantamiento 30 min
              </h2>
              <div>
                <span className="bg-qa-neon text-qa-dark font-mono font-extrabold text-4xl px-2 py-1 inline-block">
                  $0 USD
                </span>
                <span className="block text-xs font-mono text-gray-500 mt-2">
                  ● 0 UF — Sin costo ni compromiso
                </span>
              </div>
              <p className="text-sm text-gray-700 font-sans leading-relaxed">
                Evaluación técnica para revisar el estado actual de tu software y definir la estrategia de QA.
              </p>
              <ul className="text-xs font-mono text-gray-700 space-y-2 pt-4 border-t border-gray-200">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-qa-blue shrink-0" />
                  <span>Sesión online de 30 minutos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-qa-blue shrink-0" />
                  <span>Informe escrito en 24h hábiles</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-qa-blue shrink-0" />
                  <span>Recomendación de primeros pasos</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <Link
                href="/levantamiento"
                className="w-full text-center inline-block bg-qa-dark text-white font-mono font-bold py-3 px-4 text-xs uppercase hover:bg-qa-blue transition-colors"
              >
                Agendar Sesión Gratis →
              </Link>
            </div>
          </div>

          {/* Plan 02 */}
          <div className="bg-white border-4 border-qa-blue p-8 flex flex-col justify-between relative shadow-[8px_8px_0px_#0052ff] transition-all duration-200 hover:-translate-y-1 hover:translate-x-1">
            <span className="absolute -top-4 right-4 bg-qa-blue text-white font-mono text-xs font-bold px-3 py-1 uppercase">
              Recomendado
            </span>
            <div className="space-y-4">
              <span className="font-mono text-xs text-qa-blue font-bold uppercase block">
                Implementación Base
              </span>
              <h2 className="text-2xl font-extrabold text-qa-dark">
                Puesta en Marcha
              </h2>
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-mono text-gray-500 block">Empresas desde</span>
                  <span className="text-lg font-bold text-gray-800 font-mono">4.000 USD + IVA</span>
                </div>
                <div className="pt-1 border-t border-gray-200">
                  <span className="text-xs font-mono text-qa-blue font-bold block">Precio especial para pymes:</span>
                  <span className="bg-qa-neon text-qa-dark font-mono font-extrabold text-3xl px-2 py-0.5 inline-block">
                    $3.400 USD
                  </span>
                  <span className="text-xs font-bold text-qa-dark block mt-0.5">+ IVA</span>
                  <span className="inline-block bg-qa-menta text-qa-dark text-xs font-mono font-bold px-2 py-0.5 mt-1 border border-qa-dark">
                    Aprox. 85 UF / $3.200.000 CLP
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-700 font-sans leading-relaxed">
                Diseño, configuración de pipeline y automatización de los flujos críticos iniciales de tu plataforma.
              </p>
              <ul className="text-xs font-mono text-gray-700 space-y-2 pt-4 border-t border-gray-200">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-qa-blue shrink-0" />
                  <span>Plazo de ejecución: 10 días hábiles</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-qa-blue shrink-0" />
                  <span>Lineamientos y matriz de regresión</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-qa-blue shrink-0" />
                  <span>Automatización E2E en Playwright</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-qa-blue shrink-0" />
                  <span>Integración directa en CI/CD</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <Link
                href="/levantamiento"
                className="w-full text-center inline-block bg-qa-blue text-white font-mono font-bold py-3 px-4 text-xs uppercase hover:shadow-hover-neon transition-all"
              >
                Solicitar Cotización →
              </Link>
            </div>
          </div>

          {/* Plan 03 */}
          <div className="bg-white border-2 border-qa-dark p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-6px_6px_0px_#0052ff]">
            <div className="space-y-4">
              <span className="font-mono text-xs text-qa-blue font-bold uppercase block">
                Continuidad QA
              </span>
              <h2 className="text-2xl font-extrabold text-qa-dark">
                Soporte Mensual
              </h2>
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-mono text-gray-500 block">Empresas desde</span>
                  <span className="text-lg font-bold text-gray-800 font-mono">1.000 USD + IVA / mes</span>
                </div>
                <div className="pt-1 border-t border-gray-200">
                  <span className="text-xs font-mono text-qa-blue font-bold block">Precio especial para pymes:</span>
                  <span className="bg-qa-neon text-qa-dark font-mono font-extrabold text-3xl px-2 py-0.5 inline-block">
                    $850 USD
                  </span>
                  <span className="text-xs font-bold text-qa-dark block mt-0.5">/ mes + IVA</span>
                  <span className="inline-block bg-qa-menta text-qa-dark text-xs font-mono font-bold px-2 py-0.5 mt-1 border border-qa-dark">
                    Aprox. 21 UF / $800.000 CLP mes
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-700 font-sans leading-relaxed">
                Mantenimiento continuo de suites automatizadas, ejecución de pruebas de regresión y soporte técnico.
              </p>
              <ul className="text-xs font-mono text-gray-700 space-y-2 pt-4 border-t border-gray-200">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-qa-blue shrink-0" />
                  <span>20 horas mensuales dedicadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-qa-blue shrink-0" />
                  <span>Mantenimiento y actualización de scripts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-qa-blue shrink-0" />
                  <span>Reporte mensual de cobertura y estabilidad</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-qa-blue shrink-0" />
                  <span>Apoyo técnico en pases a producción</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <Link
                href="/levantamiento"
                className="w-full text-center inline-block bg-qa-dark text-white font-mono font-bold py-3 px-4 text-xs uppercase hover:bg-qa-blue transition-colors"
              >
                Contratar Plan Mensual →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-qa-dark text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight uppercase leading-none">
            ¿Tienes dudas técnicas sobre la implementación?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto font-sans">
            En los 30 minutos de levantamiento revisamos tu arquitectura de software y te entregamos un diagnóstico claro.
          </p>
          <div className="pt-2">
            <Link
              href="/levantamiento"
              className="inline-block bg-qa-blue text-white px-8 py-3.5 font-bold font-mono text-sm uppercase tracking-wider hover:shadow-hover-neon transition-all"
            >
              Agendar levantamiento gratuito →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
