import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, Shield, GitCommit, Search, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Metodología Vórtice | La Forma en que Trabajamos",
  description:
    "El marco de trabajo Vórtice: metodología de aseguramiento de calidad y gestión de pruebas para empresas con software en producción.",
  openGraph: {
    title: "Metodología Vórtice | Vórtice Integration",
    description:
      "Un marco técnico y operativo para estructurar la calidad de software de forma ágil, predecible y sin burocracia.",
  },
};

export default function MetodologiaPage() {
  const pilares = [
    {
      numero: "01",
      titulo: "Diagnóstico de fricción y acuerdos claros",
      descripcion:
        "Analizamos cómo prueba el equipo hoy y establecemos criterios explícitos de aceptación. Se define formalmente qué significa 'aprobado para producción' para evitar discusiones de última hora.",
      icono: Search,
    },
    {
      numero: "02",
      titulo: "Automatización de flujos críticos",
      descripcion:
        "Priorizamos los flujos neurálgicos del negocio: autenticación, pasarelas de pago y transacciones principales. No automatizamos por rellenar métricas, sino para blindar lo que no puede fallar.",
      icono: GitCommit,
    },
    {
      numero: "03",
      titulo: "Integración en el flujo continuo (CI/CD)",
      descripcion:
        "Las pruebas se integran al repositorio de código de tus desarrolladores. Se ejecutan automáticamente en cada cambio sin retrasar el ritmo de despliegue ni generar esperas manuales.",
      icono: Shield,
    },
    {
      numero: "04",
      titulo: "Gobernanza y visibilidad compartida",
      descripcion:
        "Tanto el liderazgo técnico como el equipo de ingeniería tienen visibilidad exacta de la estabilidad del software. La calidad pasa a ser un dato objetivo y medible en cada entrega.",
      icono: BarChart3,
    },
  ];

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
            // Marco de Trabajo Metodológico
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Metodología Vórtice: La Forma en que Trabajamos
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Un marco técnico y operativo de ingeniería diseñado para estructurar la calidad de software de manera predecible, ágil y sin burocracia.
          </p>
        </div>
      </section>

      {/* Explicación del Marco */}
      <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6 space-y-16">
        <div className="glass-card p-8 sm:p-12 rounded-2xl border border-white/10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            ¿Por qué existe el marco Vórtice?
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl">
            <p>
              En la mayoría de las empresas medianas con software en producción ocurre el mismo fenómeno: a medida que el producto crece y se agregan funcionalidades, la velocidad de desarrollo se frena porque los desarrolladores dedican gran parte de su tiempo a reparar fallas que ya habían solucionado antes.
            </p>
            <p>
              El marco Vórtice nació para resolver esa fricción operativa. No es una consultoría teórica con documentos extensos que nadie lee, sino un conjunto de acuerdos, matrices de regresión y automatizaciones prácticas que se instalan directamente en el día a día del equipo.
            </p>
          </div>
        </div>

        {/* Los 4 Pilares del Marco */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-xs text-qa-cyan uppercase tracking-wider block font-bold">
              // Principios Operativos
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Los 4 pilares de la metodología
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pilares.map((pilar) => {
              const IconComponent = pilar.icono;
              return (
                <div
                  key={pilar.numero}
                  className="glass-card glass-card-hover p-8 rounded-2xl space-y-4 border border-white/10"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-bold text-qa-cyan block">
                      // {pilar.numero}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {pilar.titulo}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {pilar.descripcion}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Intermedio */}
        <div className="glass-card border border-blue-500/40 p-8 sm:p-12 rounded-2xl shadow-glow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-white">
              ¿Quieres evaluar cómo aplica este marco a tu plataforma?
            </h3>
            <p className="text-sm text-gray-300">
              En el levantamiento gratuito de 30 minutos revisamos tu flujo actual y te entregamos un diagnóstico claro.
            </p>
          </div>
          <Link
            href="/levantamiento"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-7 py-3.5 font-semibold text-sm rounded-lg shadow-glow-sm transition-all shrink-0"
          >
            <span>Agendar levantamiento de 30 min</span>
            <ArrowRight className="w-4 h-4 text-qa-cyan" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
