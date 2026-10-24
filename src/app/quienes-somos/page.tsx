import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, ExternalLink, ShieldCheck, Layers, Award, CheckCircle2 } from "lucide-react";
import { GlowDivider } from "@/components/GlowDivider";

export const metadata: Metadata = {
  title: "Quiénes Somos | Vórtice Integration Holding SpA",
  description:
    "Conoce Vórtice Integration Holding SpA: empresa matriz de ingeniería de calidad de software, el marco de trabajo Vórtice y la línea de servicio QA Chile.",
  openGraph: {
    title: "Quiénes Somos | Vórtice Integration Holding SpA",
    description:
      "Empresa matriz de aseguramiento de calidad de software en Chile. Marco metodológico Vórtice y línea especializada QA Chile.",
  },
};

export default function QuienesSomosPage() {
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
            // Identidad Corporativa
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Quiénes Somos
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Vórtice Integration Holding SpA es una firma chilena de ingeniería orientada al aseguramiento de calidad de software, marcos de gobernanza técnica y continuidad operativa para empresas con productos en producción.
          </p>
        </div>
      </section>

      {/* Separador brillante */}
      <GlowDivider label="PROPÓSITO" />

      {/* Resumen corporativo (Dos frases clave) */}
      <section className="py-16 px-4 sm:px-6 bg-[#080e1a] border-y border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 sm:p-12 rounded-2xl border border-qa-gold/40 shadow-gold-sm space-y-5 text-center">
            <span className="font-mono text-xs text-qa-gold uppercase tracking-widest block font-bold">
              // Propósito y Misión
            </span>
            <p className="text-xl sm:text-2xl font-bold text-white leading-relaxed">
              Vórtice Integration Holding SpA es una firma chilena de ingeniería orientada al aseguramiento de calidad de software y continuidad operativa para empresas con productos en producción.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Diseñamos marcos de trabajo técnicos pragmáticos y automatización continua para que los equipos de desarrollo liberen código con certeza y sin fallas en producción.
            </p>
          </div>
        </div>
      </section>

      {/* Separador brillante */}
      <GlowDivider label="ESTRUCTURA DEL HOLDING" />

      {/* Estructura del Grupo: La Matriz y sus Líneas */}
      <section className="py-20 px-4 sm:px-6 bg-qa-dark">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="space-y-4">
            <span className="font-mono text-xs text-qa-gold uppercase tracking-wider block font-bold">
              // Estructura del Holding
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              La Matriz y sus Líneas de Servicio
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed">
              Operamos como una empresa matriz que desarrolla marcos de trabajo metodológicos e implanta ingeniería de calidad para distintos sectores del mercado tecnológico y digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Matriz y Marco Vórtice */}
            <div className="glass-card glass-card-hover p-8 rounded-2xl border border-qa-gold/30 shadow-gold-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-qa-gold/15 border border-qa-gold/30 flex items-center justify-center text-qa-gold">
                <Layers className="w-6 h-6" aria-hidden="true" />
              </div>
              <span className="text-xs font-mono font-bold text-qa-gold uppercase block">
                Empresa Matriz // Metodología
              </span>
              <h3 className="text-xl font-bold text-white">
                Vórtice Integration Holding SpA
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Desarrolla el <strong>Marco Metodológico Vórtice</strong>, un sistema de gestión y calidad de software pragmático para empresas medianas y pymes con software en producción. Centraliza la gobernanza, las matrices de regresión y la puesta en marcha de áreas de QA en 10 días hábiles.
              </p>
              <div className="pt-2">
                <Link
                  href="/metodologia"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-qa-gold hover:text-white transition-colors"
                >
                  <span>Conoce la Metodología Vórtice →</span>
                </Link>
              </div>
            </div>

            {/* Línea Especializada QA Chile */}
            <div className="glass-card glass-card-hover p-8 rounded-2xl border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-gray-300">
                <ShieldCheck className="w-6 h-6" aria-hidden="true" />
              </div>
              <span className="text-xs font-mono font-bold text-gray-400 uppercase block">
                Línea de Servicio // Comercio Electrónico
              </span>
              <h3 className="text-xl font-bold text-white">
                QA Chile (qachile.cl)
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Línea de servicio del holding especializada exclusivamente en calidad y pruebas continuas para e-commerce. Protege la pasarela de pagos, los carritos de compra y la estabilidad en temporadas de alta concurrencia.
              </p>
              <div className="pt-2">
                <a
                  href="https://qachile.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-qa-gold hover:text-white transition-colors"
                >
                  <span>Visitar qachile.cl</span>
                  <ExternalLink className="w-3.5 h-3.5 text-qa-gold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Compromiso Institucional */}
          <div className="glass-card p-8 sm:p-10 rounded-2xl border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white">
              Nuestros principios de trabajo
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-300">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-mono font-bold">
                  <CheckCircle2 className="w-4 h-4 text-qa-gold" />
                  <span>Sin burocracia</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Entregamos herramientas y suites funcionales en el repositorio, no informes teóricos de 100 páginas.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-mono font-bold">
                  <CheckCircle2 className="w-4 h-4 text-qa-gold" />
                  <span>Certeza en cada release</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Las pruebas automatizadas entregan un veredicto objetivo antes de cada despliegue a producción.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-mono font-bold">
                  <CheckCircle2 className="w-4 h-4 text-qa-gold" />
                  <span>Autonomía técnica</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Capacitamos y transferimos todo el conocimiento para que tu equipo mantenga y evolucione las pruebas.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-gray-400">
              Vórtice Integration Holding SpA · RUT: 78.377.882-3 · Santiago de Chile
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-8 glass-card rounded-2xl border border-white/10">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-white">
                ¿Quieres conversar sobre la calidad de tu software?
              </h4>
              <p className="text-xs text-gray-400">
                Agenda tu levantamiento de 30 minutos sin costo ni compromiso.
              </p>
            </div>
            <Link
              href="/levantamiento"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-qa-gold to-qa-gold-light hover:from-qa-gold-light hover:to-qa-gold text-qa-dark text-xs font-bold uppercase px-6 py-3 rounded-lg shadow-gold-sm transition-all shrink-0"
            >
              <span>Agendar levantamiento →</span>
              <ArrowRight className="w-4 h-4 text-qa-dark" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
