import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Check, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { WaveDivider } from "@/components/WaveDivider";

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
      {/* Cabecera con glow dorado */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 relative">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[280px] bg-qa-gold/10 rounded-full blur-[130px] pointer-events-none -z-10" 
          aria-hidden="true" 
        />
        <div className="max-w-6xl mx-auto space-y-4">
          <span className="font-mono text-xs text-qa-gold uppercase tracking-widest block font-bold">
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

      {/* Separador ondulado */}
      <WaveDivider fillColor="#080e1a" />

      {/* Planes */}
      <section className="py-20 px-4 sm:px-6 bg-[#080e1a] border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <span className="font-mono text-xs text-gray-400 font-bold uppercase">
              // Valores netos en pesos chilenos (CLP) + IVA · Facturación en Chile
            </span>
            <span className="text-xs font-mono text-qa-gold bg-qa-gold/10 px-3 py-1 rounded-full border border-qa-gold/30 inline-block self-start sm:self-auto font-semibold">
              Precio especial para pymes.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan 01: Levantamiento */}
            <div className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between space-y-6 border border-white/10">
              <div className="space-y-4">
                <span className="font-mono text-xs text-qa-gold font-bold uppercase block">
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
                    <Check className="w-4 h-4 text-qa-gold shrink-0" />
                    <span>Sesión técnica online de 30 minutos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-qa-gold shrink-0" />
                    <span>Informe escrito en 24h hábiles (1 a 2 páginas)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-qa-gold shrink-0" />
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
            <div className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between space-y-6 border border-qa-gold/50 shadow-gold-sm relative bg-qa-gold/5">
              <span className="absolute -top-3.5 right-6 bg-gradient-to-r from-qa-gold to-qa-gold-light text-qa-dark text-[11px] font-mono font-bold px-3 py-0.5 rounded-full uppercase shadow-sm">
                Principal
              </span>
              <div className="space-y-4">
                <span className="font-mono text-xs text-qa-gold font-bold uppercase block">
                  Puesta en Marcha · 10 Días
                </span>
                <h2 className="text-2xl font-bold text-white">
                  QA Básico Integral
                </h2>
                <div>
                  <div className="space-y-1">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-mono text-qa-gold">Pymes:</span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                        $3.200.000 CLP
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between border-t border-white/10 pt-1 text-xs font-mono text-gray-400">
                      <span>Empresas medianas:</span>
                      <span className="font-bold text-gray-200">Desde $3.800.000 CLP</span>
                    </div>
                  </div>
                  <span className="block text-xs font-mono text-gray-400 mt-1">
                    + IVA · Plazo garantizado de 10 días hábiles
                  </span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-sans">
                  Implementamos las directrices, la matriz de pruebas, automatizamos los flujos críticos del producto y los conectamos a tu pipeline de CI.
                </p>
                <ul className="text-xs font-mono text-gray-300 space-y-2.5 pt-4 border-t border-white/10">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-qa-gold shrink-0" />
                    <span>Lineamientos y acuerdos de prueba del equipo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-qa-gold shrink-0" />
                    <span>Plan y matriz de regresión continua</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-qa-gold shrink-0" />
                    <span>Automatización de flujos críticos (Playwright)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-qa-gold shrink-0" />
                    <span>Integración en CI (GitHub / GitLab / Bitbucket)</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <Link
                  href="/levantamiento"
                  className="w-full text-center inline-block bg-gradient-to-r from-qa-gold to-qa-gold-light hover:from-qa-gold-light hover:to-qa-gold text-qa-dark text-xs font-bold py-3.5 px-4 rounded-lg shadow-gold-sm transition-all"
                >
                  Empezar con Levantamiento →
                </Link>
              </div>
            </div>

            {/* Plan 03: Soporte mensual */}
            <div className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between space-y-6 border border-white/10">
              <div className="space-y-4">
                <span className="font-mono text-xs text-qa-gold font-bold uppercase block">
                  Continuidad Operativa
                </span>
                <h2 className="text-2xl font-bold text-white">
                  Soporte Mensual 20h
                </h2>
                <div>
                  <div className="space-y-1">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-mono text-qa-gold">Pymes:</span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                        $800.000 CLP
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between border-t border-white/10 pt-1 text-xs font-mono text-gray-400">
                      <span>Empresas medianas:</span>
                      <span className="font-bold text-gray-200">Desde $950.000 CLP</span>
                    </div>
                  </div>
                  <span className="block text-xs font-mono text-gray-400 mt-1">
                    / mes + IVA · Bolsa de 20 horas mensuales
                  </span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-sans">
                  Acompañamiento continuo de ingeniería para mantener tus pruebas al día, revisar cobertura y apoyar en despliegues a producción.
                </p>
                <ul className="text-xs font-mono text-gray-300 space-y-2.5 pt-4 border-t border-white/10">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-qa-gold shrink-0" />
                    <span>20 horas mensuales de ingeniería QA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-qa-gold shrink-0" />
                    <span>Revisión y auditoría de cobertura de código</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-qa-gold shrink-0" />
                    <span>Mantenimiento y actualización de pruebas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-qa-gold shrink-0" />
                    <span>Apoyo técnico directo en despliegues</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <Link
                  href="/levantamiento"
                  className="w-full text-center inline-block bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  Consultar por Soporte →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separador ondulado */}
      <WaveDivider flip fillColor="#060a14" />

      {/* Preguntas Frecuentes sobre Precios */}
      <section className="py-20 px-4 sm:px-6 bg-qa-dark">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="font-mono text-xs text-qa-gold uppercase tracking-wider block font-bold">
              // Dudas Frecuentes
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Preguntas frecuentes sobre la contratación
            </h2>
          </div>

          <div className="space-y-4">
            <div className="glass-card p-6 rounded-xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base">
                ¿El levantamiento de 30 minutos realmente no tiene costo ni compromiso?
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Totalmente gratuito y sin compromiso. Es una sesión técnica para evaluar tu arquitectura y entregarte un informe escrito en 24h hábiles. Si después decides implementar el plan por tu cuenta con tu equipo interno, el diagnóstico queda para ti.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base">
                ¿Qué califica para el precio especial pymes?
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Aplica a startups y empresas con menos de 50 colaboradores o con facturación acorde al segmento pyme en Chile. Lo confirmamos durante la sesión de levantamiento de 30 minutos.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base">
                ¿Cómo se realiza la facturación?
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Factura electrónica en pesos chilenos (CLP) emitida por Vórtice Integration Holding SpA (RUT 78.377.882-3).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
