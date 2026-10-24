import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { GlowDivider } from "@/components/GlowDivider";
import {
  IconMethodAudit,
  IconMethodCritical,
  IconMethodLoop,
  IconMethodGovernance,
} from "@/components/icons/GoldIcons";

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
      icono: IconMethodAudit,
    },
    {
      numero: "02",
      titulo: "Automatización de flujos críticos",
      descripcion:
        "Priorizamos los flujos neurálgicos del negocio: autenticación, pasarelas de pago y transacciones principales. No automatizamos por rellenar métricas, sino para blindar lo que no puede fallar.",
      icono: IconMethodCritical,
    },
    {
      numero: "03",
      titulo: "Integración en el flujo continuo (CI/CD)",
      descripcion:
        "Las pruebas se integran al repositorio de código de tus desarrolladores. Se ejecutan automáticamente en cada cambio sin retrasar el ritmo de despliegue ni generar esperas manuales.",
      icono: IconMethodLoop,
    },
    {
      numero: "04",
      titulo: "Gobernanza y visibilidad compartida",
      descripcion:
        "Tanto el liderazgo técnico como el equipo de ingeniería tienen visibilidad exacta de la estabilidad del software. La calidad pasa a ser un dato objetivo y medible en cada entrega.",
      icono: IconMethodGovernance,
    },
  ];

  return (
    <div className="w-full bg-qa-dark text-gray-100 min-h-screen font-sans">
      {/* Cabecera */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 relative">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[280px] bg-qa-gold/10 rounded-full blur-[130px] pointer-events-none -z-10" 
          aria-hidden="true" 
        />
        <div className="max-w-6xl mx-auto space-y-4">
          <span className="font-mono text-xs text-qa-gold uppercase tracking-widest block font-bold">
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

      {/* Separador brillante */}
      <GlowDivider label="MARCO VÓRTICE" />

      {/* Explicación del Marco */}
      <section className="py-20 px-4 sm:px-6 bg-[#080e1a] border-y border-white/10 space-y-16">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="glass-card p-8 sm:p-12 rounded-2xl border border-qa-gold/30 shadow-gold-sm space-y-6">
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
              <span className="font-mono text-xs text-qa-gold uppercase tracking-wider block font-bold">
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
                    className="glass-card glass-card-hover p-8 rounded-2xl border border-white/10 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-qa-gold/15 border border-qa-gold/30 flex items-center justify-center text-qa-gold">
                        <IconComponent className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-2xl font-bold text-qa-gold">
                        {pilar.numero}
                      </span>
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
        </div>
      </section>

      {/* Separador brillante */}
      <GlowDivider label="RESULTADOS" />

      {/* Resultados de la Metodología */}
      <section className="py-20 px-4 sm:px-6 bg-qa-dark">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="glass-card p-8 sm:p-12 rounded-2xl border border-qa-gold/40 shadow-gold-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Qué cambia con el marco Vórtice implementado
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300 pt-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-bold font-mono">
                  <CheckCircle2 className="w-5 h-5 text-qa-gold shrink-0" />
                  <span>Despliegues sin miedo</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Los desarrolladores liberan código con la seguridad de que las pruebas automatizadas alertarán cualquier regresión antes de tocar producción.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-bold font-mono">
                  <CheckCircle2 className="w-5 h-5 text-qa-gold shrink-0" />
                  <span>Velocidad de entrega</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Se eliminan los ciclos manuales de verificación de horas o días: el pipeline informa el estado en minutos.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-bold font-mono">
                  <CheckCircle2 className="w-5 h-5 text-qa-gold shrink-0" />
                  <span>Tranquilidad del CTO</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Certeza objetiva sobre qué partes del producto están protegidas y cuáles requieren atención.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-8 glass-card rounded-2xl border border-white/10">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">
                ¿Quieres aplicar este marco a tu software?
              </h3>
              <p className="text-xs text-gray-400">
                Inicia con el diagnóstico técnico de 30 minutos sin costo.
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
