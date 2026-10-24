import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Check, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Precios y Planes de Inversión | Vórtice Integration",
  description:
    "Precios transparentes de puesta en marcha de QA y soporte mensual para empresas medianas y pymes en Chile en CLP + IVA. Empiezas con un levantamiento gratuito.",
  openGraph: {
    title: "Precios y Planes de QA | Vórtice Integration",
    description:
      "Planes transparentes en CLP: Levantamiento gratuito $0 CLP, Puesta en marcha desde $3.200.000 CLP + IVA y Soporte mensual desde $800.000 CLP + IVA.",
  },
};

export default function PreciosPage() {
  return (
    <div className="w-full bg-qa-dark text-gray-100 min-h-screen font-sans">
      {/* Cabecera */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 border-b border-white/10 relative">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" 
          aria-hidden="true" 
        />
        <div className="max-w-6xl mx-auto space-y-4">
          <span className="font-mono text-xs text-qa-cyan uppercase tracking-widest block font-bold">
            // Transparencia Total
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Precios y Planes de Inversión
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Sin presupuestos inflados ni costos ocultos. Todos los valores están expresados en pesos chilenos (CLP) netos más IVA. Empiezas siempre con la sesión técnica gratuita de 30 minutos.
          </p>
        </div>
      </section>

      {/* Planes */}
      <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <span className="font-mono text-xs text-gray-400 font-bold uppercase">
            // Valores netos en pesos chilenos (CLP) + IVA · Facturación en Chile
          </span>
          <span className="text-xs font-mono text-qa-cyan bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/30 inline-block self-start sm:self-auto font-semibold">
            Precio especial para pymes.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 01: Levantamiento */}
          <div className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs text-qa-cyan font-bold uppercase block">
                Diagnóstico Inicial
              </span>
              <h2 className="text-2xl font-bold text-white">
                Levantamiento 30 min
              </h2>
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono block">
                  $0 CLP
                </span>
                <span className="block text-xs font-mono text-gray-400 mt-1">
                  ● 30 minutos · Sin costo ni compromiso
                </span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed font-sans">
                Evaluación técnica online para revisar el estado actual de tu software, tu repositorio y definir la estrategia de pruebas adecuada.
              </p>
              <ul className="text-xs font-mono text-gray-300 space-y-2.5 pt-4 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-qa-cyan shrink-0" />
                  <span>Sesión técnica online de 30 minutos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-qa-cyan shrink-0" />
                  <span>Informe escrito en 24h hábiles (1 a 2 páginas)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-qa-cyan shrink-0" />
                  <span>Diagnóstico objetivo y primeros pasos</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <Link
                href="/levantamiento"
                className="w-full text-center inline-block bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                Agendar Sesión Gratis →
              </Link>
            </div>
          </div>

          {/* Plan 02: Puesta en marcha */}
          <div className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between space-y-6 border border-blue-500/40 shadow-glow-sm relative">
            <span className="absolute -top-3.5 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-mono font-bold px-3 py-0.5 rounded-full uppercase shadow-sm">
              Principal
            </span>
            <div className="space-y-4">
              <span className="font-mono text-xs text-blue-400 font-bold uppercase block">
                Implementación Base
              </span>
              <h2 className="text-2xl font-bold text-white">
                Puesta en Marcha QA
              </h2>
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-mono text-gray-400 block">Inversión</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono block">
                    Desde $3.200.000 CLP
                  </span>
                  <span className="text-xs font-bold text-gray-400 block mt-0.5">+ IVA (Plazo: 10 días hábiles)</span>
                </div>
                <div className="pt-2 border-t border-white/10 space-y-1">
                  <span className="text-xs font-mono text-qa-cyan font-semibold block">
                    Tarifa pymes desde $3.200.000 CLP + IVA
                  </span>
                  <span className="text-xs font-mono text-gray-400 block">
                    Empresas medianas desde $3.800.000 CLP + IVA
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed font-sans">
                Lineamientos de prueba, matriz de regresión, automatización de los flujos críticos e integración en tu pipeline de CI/CD.
              </p>
              <ul className="text-xs font-mono text-gray-300 space-y-2.5 pt-4 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-qa-cyan shrink-0" />
                  <span>Plazo de entrega: 10 días hábiles</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-qa-cyan shrink-0" />
                  <span>Matriz de regresión continua</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-qa-cyan shrink-0" />
                  <span>Automatización E2E de flujos críticos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-qa-cyan shrink-0" />
                  <span>Integración directa en CI/CD</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <Link
                href="/levantamiento"
                className="w-full text-center inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold py-3 px-4 rounded-lg shadow-glow-sm transition-all"
              >
                Solicitar Cotización →
              </Link>
            </div>
          </div>

          {/* Plan 03: Soporte mensual */}
          <div className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs text-qa-cyan font-bold uppercase block">
                Continuidad QA
              </span>
              <h2 className="text-2xl font-bold text-white">
                Soporte Mensual (20 hrs)
              </h2>
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-mono text-gray-400 block">Inversión</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono block">
                    Desde $800.000 CLP
                  </span>
                  <span className="text-xs font-bold text-gray-400 block mt-0.5">/ mes + IVA</span>
                </div>
                <div className="pt-2 border-t border-white/10 space-y-1">
                  <span className="text-xs font-mono text-qa-cyan font-semibold block">
                    Tarifa pymes desde $800.000 CLP + IVA / mes
                  </span>
                  <span className="text-xs font-mono text-gray-400 block">
                    Empresas medianas desde $1.000.000 CLP + IVA / mes
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed font-sans">
                Bolsa de 20 horas mensuales para mantenimiento de suites automatizadas, auditoría de cobertura y apoyo técnico en despliegues.
              </p>
              <ul className="text-xs font-mono text-gray-300 space-y-2.5 pt-4 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-qa-cyan shrink-0" />
                  <span>20 horas mensuales dedicadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-qa-cyan shrink-0" />
                  <span>Mantenimiento y actualización de pruebas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-qa-cyan shrink-0" />
                  <span>Reporte mensual de cobertura y estabilidad</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-qa-cyan shrink-0" />
                  <span>Apoyo técnico en pases a producción</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <Link
                href="/levantamiento"
                className="w-full text-center inline-block bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                Contratar Plan Mensual →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/10 text-center relative">
        <div className="max-w-3xl mx-auto space-y-5 glass-card p-10 sm:p-12 rounded-2xl border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            ¿Tienes dudas sobre el plan adecuado para tu arquitectura?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto font-sans leading-relaxed">
            En la sesión gratuita de 30 minutos revisamos tu stack, el estado de tus pruebas y te recomendamos con honestidad la ruta más conveniente.
          </p>
          <div className="pt-2">
            <Link
              href="/levantamiento"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-3.5 font-semibold text-sm rounded-lg shadow-glow-sm transition-all"
            >
              <span>Agendar levantamiento gratuito →</span>
              <ArrowRight className="w-4 h-4 text-qa-cyan" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
