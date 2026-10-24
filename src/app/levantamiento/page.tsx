import React from "react";
import { Metadata } from "next";
import { Calendar, FileText, CheckCircle2 } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { GlowDivider } from "@/components/GlowDivider";
import { QaReportMockup } from "@/components/QaReportMockup";

export const metadata: Metadata = {
  title: "Levantamiento QA de 30 Minutos | Vórtice Integration",
  description:
    "Levantamiento técnico de 30 minutos online y gratuito para empresas con software en producción. Recibes un informe escrito de 1 a 2 páginas con el diagnóstico actual y los primeros pasos.",
  openGraph: {
    title: "Levantamiento QA Gratuito | Vórtice Integration",
    description:
      "Sesión online de 30 minutos sin costo. Diagnóstico del estado actual de tus pruebas y entrega de informe ejecutivo.",
  },
};

export default function LevantamientoPage() {
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
            // Diagnóstico Sin Costo
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Levantamiento QA de 30 Minutos
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Una sesión técnica directa para revisar cómo prueba hoy tu equipo y definir qué necesitas para dejar de probar a última hora. Sin discursos de venta ni compromisos.
          </p>
          <div className="pt-2">
            <a
              href="https://calendar.app.google/8JfEzcRHRZGKMaHx9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-qa-gold to-qa-gold-light hover:from-qa-gold-light hover:to-qa-gold text-qa-dark px-7 py-3.5 font-bold text-sm rounded-lg shadow-gold-sm hover:shadow-gold-md transition-all"
            >
              <Calendar className="w-4 h-4 text-qa-dark" aria-hidden="true" />
              <span>Agendar en Google Calendar →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Separador brillante */}
      <GlowDivider label="METODOLOGÍA DE LA SESIÓN" />

      {/* Qué pasa en los 30 minutos + Mockup visual del reporte entregable */}
      <section className="py-20 px-4 sm:px-6 bg-[#080e1a] border-y border-white/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Qué pasa en los 30 minutos */}
            <div className="lg:col-span-5 glass-card rounded-2xl p-7 sm:p-8 space-y-6 border border-white/10">
              <span className="font-mono text-xs text-qa-gold font-bold uppercase block">
                // Conversación Técnica Directa
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Qué pasa en los 30 minutos
              </h2>
              <p className="text-sm text-gray-300">
                Una conversación técnica de tres puntos con foco en tu operación real:
              </p>
              <ul className="space-y-4 text-sm text-gray-300 pt-3 border-t border-white/10">
                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 bg-qa-gold/15 text-qa-gold border border-qa-gold/30 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 rounded-lg">
                    01
                  </span>
                  <div>
                    <strong className="text-white block font-mono">Cómo se prueba hoy:</strong>
                    <span className="text-gray-300 text-xs sm:text-sm">Revisamos el flujo real con el que tu equipo valida antes de desplegar código a producción.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 bg-qa-gold/15 text-qa-gold border border-qa-gold/30 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 rounded-lg">
                    02
                  </span>
                  <div>
                    <strong className="text-white block font-mono">Dónde se rompe:</strong>
                    <span className="text-gray-300 text-xs sm:text-sm">Identificamos los puntos ciegos, los cuellos de botella y los errores recurrentes reportados por usuarios.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 bg-qa-gold/15 text-qa-gold border border-qa-gold/30 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 rounded-lg">
                    03
                  </span>
                  <div>
                    <strong className="text-white block font-mono">Qué primer paso tiene sentido:</strong>
                    <span className="text-gray-300 text-xs sm:text-sm">Definimos la prioridad inmediata que entregará estabilidad sin sobrecargar a los desarrolladores.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* MOCKUP VISUAL DEL REPORTE DE QA ENTREGABLE */}
            <div className="lg:col-span-7 space-y-3">
              <span className="font-mono text-xs text-qa-gold font-bold uppercase tracking-wider block">
                // Entregable tangible en 24h hábiles
              </span>
              <QaReportMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Separador brillante */}
      <GlowDivider label="FORMULARIO DE CONTACTO" />

      {/* Formulario de Solicitud */}
      <section className="py-20 px-4 sm:px-6 bg-qa-dark">
        <div className="max-w-3xl mx-auto">
          <LeadForm
            formTitle="AGENDAR LEVANTAMIENTO TÉCNICO"
            formSubtitle="Ingresa los datos de tu empresa y equipo. Te responderemos en menos de 24 horas hábiles para coordinar la sesión."
          />
        </div>
      </section>
    </div>
  );
}
