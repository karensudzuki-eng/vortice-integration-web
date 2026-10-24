import React from "react";
import { Metadata } from "next";
import { Calendar, FileText, CheckCircle2 } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";

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
      {/* Cabecera */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 border-b border-white/10 relative">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" 
          aria-hidden="true" 
        />
        <div className="max-w-6xl mx-auto space-y-4">
          <span className="font-mono text-xs text-qa-cyan uppercase tracking-widest block font-bold">
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
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-7 py-3.5 font-semibold text-sm rounded-lg shadow-glow-sm transition-all"
            >
              <Calendar className="w-4 h-4 text-qa-cyan" aria-hidden="true" />
              <span>Agendar en Google Calendar →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Qué pasa en los 30 minutos + Qué recibe el cliente */}
      <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
          {/* Qué pasa en los 30 minutos */}
          <div className="glass-card rounded-2xl p-8 sm:p-9 space-y-6">
            <span className="font-mono text-xs text-qa-cyan font-bold uppercase block">
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
                <span className="w-7 h-7 bg-white/10 text-qa-cyan border border-white/10 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 rounded-lg">
                  01
                </span>
                <div>
                  <strong className="text-white block font-mono">Cómo se prueba hoy:</strong>
                  <span className="text-gray-300">Revisamos el flujo real con el que tu equipo valida antes de desplegar código a producción.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-7 h-7 bg-white/10 text-qa-cyan border border-white/10 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 rounded-lg">
                  02
                </span>
                <div>
                  <strong className="text-white block font-mono">Dónde se rompe:</strong>
                  <span className="text-gray-300">Identificamos los puntos ciegos, los cuellos de botella y los errores recurrentes reportados por usuarios.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-7 h-7 bg-white/10 text-qa-cyan border border-white/10 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 rounded-lg">
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
          <div className="glass-card rounded-2xl p-8 sm:p-9 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <span className="font-mono text-xs text-qa-cyan font-bold uppercase block">
                // Entregable técnico
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Qué recibes después
              </h2>
              <div className="p-4 bg-[#050912] rounded-xl border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-sm font-mono">
                  <FileText className="w-4 h-4 text-qa-cyan" aria-hidden="true" />
                  <span>Informe escrito de 1 a 2 páginas</span>
                </div>
                <p className="text-xs text-gray-400">
                  Entregado en un plazo máximo de 24 horas hábiles posteriores a la sesión.
                </p>
              </div>

              <ul className="space-y-3 text-sm text-gray-300 pt-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Diagnóstico objetivo del estado actual de madurez de QA.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Ruta priorizada de primeros pasos para reducir fallas en producción.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Recomendación honesta sobre si avanzar a la puesta en marcha o no.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-gray-400">
              ● Sin compromisos comerciales. El informe te pertenece y tu equipo puede implementarlo por su cuenta.
            </div>
          </div>
        </div>

        {/* Sección Formulario / Coordinación */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-5">
            <span className="font-mono text-xs text-qa-cyan uppercase block font-bold">
              // Canales de agendamiento
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              ¿Prefieres agendar directamente o escribirnos?
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Puedes abrir el calendario de Google Calendar y elegir de inmediato tu bloque de 30 minutos, o dejarnos tus antecedentes en el formulario y te contactamos en menos de 24 horas hábiles.
            </p>

            <div className="p-6 glass-card rounded-xl border border-white/10 space-y-3">
              <span className="font-bold text-sm text-white font-mono block">
                &gt; Agendamiento inmediato:
              </span>
              <a
                href="https://calendar.app.google/8JfEzcRHRZGKMaHx9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs uppercase font-semibold rounded-lg transition-colors"
              >
                <span>Abrir Google Calendar →</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <LeadForm
              formTitle="SOLICITAR LEVANTAMIENTO POR FORMULARIO"
              formSubtitle="Déjanos tus datos y nos pondremos en contacto para coordinar la sesión técnica."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
