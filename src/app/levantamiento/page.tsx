import React from "react";
import { Metadata } from "next";
import { Calendar, FileText, CheckCircle2 } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { WaveDivider } from "@/components/WaveDivider";

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

      {/* Separador ondulado */}
      <WaveDivider fillColor="#080e1a" />

      {/* Qué pasa en los 30 minutos + Qué recibe el cliente */}
      <section className="py-20 px-4 sm:px-6 bg-[#080e1a] border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
            {/* Qué pasa en los 30 minutos */}
            <div className="glass-card rounded-2xl p-8 sm:p-9 space-y-6 border border-white/10">
              <span className="font-mono text-xs text-qa-gold font-bold uppercase block">
                // Metodología de la sesión
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
                    <span className="text-gray-300">Revisamos el flujo real con el que tu equipo valida antes de desplegar código a producción.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 bg-qa-gold/15 text-qa-gold border border-qa-gold/30 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 rounded-lg">
                    02
                  </span>
                  <div>
                    <strong className="text-white block font-mono">Dónde se rompe:</strong>
                    <span className="text-gray-300">Identificamos los puntos ciegos, los cuellos de botella y los errores recurrentes reportados por usuarios.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 bg-qa-gold/15 text-qa-gold border border-qa-gold/30 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 rounded-lg">
                    03
                  </span>
                  <div>
                    <strong className="text-white block font-mono">Qué primer paso tiene sentido:</strong>
                    <span className="text-gray-300">Definimos la prioridad inmediata que entregará estabilidad sin sobrecargar a los desarrolladores.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Qué recibe el cliente después */}
            <div className="glass-card rounded-2xl p-8 sm:p-9 space-y-6 flex flex-col justify-between border border-qa-gold/30 shadow-gold-sm">
              <div className="space-y-5">
                <span className="font-mono text-xs text-qa-gold font-bold uppercase block">
                  // Entregable tangible en 24h
                </span>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-qa-gold/15 border border-qa-gold/30 flex items-center justify-center text-qa-gold shrink-0">
                    <FileText className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Informe escrito de 1 a 2 páginas
                  </h2>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Dentro de las 24 horas hábiles posteriores a la sesión, recibirás un informe técnico y ejecutivo que incluye:
                </p>
                <ul className="space-y-2.5 text-xs font-mono text-gray-300 pt-2 border-t border-white/10">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-qa-gold shrink-0" />
                    <span>Diagnóstico objetivo del estado actual de tus pruebas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-qa-gold shrink-0" />
                    <span>Matriz de riesgos en los flujos neurálgicos identificados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-qa-gold shrink-0" />
                    <span>Hoja de ruta con los primeros pasos de automatización recomendados</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-gray-400 font-mono">
                ● Documento confidencial de libre uso para tu equipo de ingeniería.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separador ondulado */}
      <WaveDivider flip fillColor="#060a14" />

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
