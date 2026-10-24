import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Check, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { WaveDivider } from "@/components/WaveDivider";
import { PricingCards } from "@/components/PricingCards";

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

      {/* Planes con halo dorado y gráfico de alcance */}
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

          <PricingCards />
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
