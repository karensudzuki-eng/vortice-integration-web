import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, ExternalLink, ShieldCheck, Layers, Award } from "lucide-react";

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
      {/* Cabecera */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 border-b border-white/10 relative">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" 
          aria-hidden="true" 
        />
        <div className="max-w-6xl mx-auto space-y-4">
          <span className="font-mono text-xs text-qa-cyan uppercase tracking-widest block font-bold">
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

      {/* Estructura del Grupo: La Matriz y sus Líneas */}
      <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6 space-y-16">
        <div className="space-y-4">
          <span className="font-mono text-xs text-qa-cyan uppercase tracking-wider block font-bold">
            // Estructura del Holding
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            La Matriz y sus Líneas de Servicio
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Operamos como una empresa matriz que desarrolla tecnología propia, implanta marcos de trabajo metodológicos y gestiona marcas de servicio especializadas para distintos sectores del mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Matriz y Marco Vórtice */}
          <div className="glass-card glass-card-hover p-8 rounded-2xl border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Layers className="w-6 h-6" aria-hidden="true" />
            </div>
            <span className="text-xs font-mono font-bold text-qa-cyan uppercase block">
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
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-qa-cyan hover:text-white transition-colors"
              >
                <span>Conoce la Metodología Vórtice →</span>
              </Link>
            </div>
          </div>

          {/* Línea Especializada QA Chile */}
          <div className="glass-card glass-card-hover p-8 rounded-2xl border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
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
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-qa-cyan hover:text-white transition-colors"
              >
                <span>Visitar qachile.cl</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* PERFIL DE LA FUNDADORA [CONFIRMAR TEXTO Y FOTO] */}
        <div className="glass-card p-8 sm:p-12 rounded-2xl border border-white/10 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <span className="font-mono text-xs text-qa-cyan uppercase tracking-wider block font-bold">
              // Liderazgo & Fundadora
            </span>
            <span className="text-[11px] font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              [CONFIRMAR TEXTO Y FOTO]
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Placeholder de fotografía */}
            <div className="md:col-span-4 flex flex-col items-center justify-center">
              <div className="w-52 h-52 sm:w-60 sm:h-60 bg-[#050912] rounded-2xl border-2 border-dashed border-white/15 flex flex-col items-center justify-center p-6 text-center text-gray-400 space-y-3">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shadow-sm">
                  <Award className="w-7 h-7" aria-hidden="true" />
                </div>
                <span className="text-xs font-mono font-semibold text-gray-300">
                  [FOTO DE LA FUNDADORA]
                </span>
                <span className="text-[11px] text-gray-500">
                  Pendiente de confirmación final
                </span>
              </div>
            </div>

            {/* Breve biografía */}
            <div className="md:col-span-8 space-y-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white">
                  Fundadora de Vórtice Integration Holding SpA
                </h3>
                <p className="text-xs font-mono text-qa-cyan">
                  Ingeniería de Software & Calidad Continua
                </p>
              </div>

              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>
                  Especialista en aseguramiento de calidad de software y gobernanza técnica de sistemas en producción. Con trayectoria liderando iniciativas de calidad, automatización e integración continua en empresas y organizaciones en Chile.
                </p>
                <p>
                  Fundó Vórtice Integration para dotar a las empresas medianas y pymes de un marco de ingeniería riguroso pero accesible, eliminando el desperdicio de horas de desarrollo en corrección de regresiones y profesionalizando los despliegues de software.
                </p>
              </div>

              <div className="pt-2 text-xs font-mono text-gray-400">
                <span>Razón Social: Vórtice Integration Holding SpA · RUT: 78.377.882-3 · Santiago de Chile</span>
              </div>
            </div>
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold uppercase px-6 py-3 rounded-lg shadow-glow-sm transition-all shrink-0"
          >
            <span>Agendar levantamiento →</span>
            <ArrowRight className="w-4 h-4 text-qa-cyan" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
