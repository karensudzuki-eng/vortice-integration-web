import React from "react";
import { Metadata } from "next";
import { Calendar, FileText, CheckCircle2 } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Levantamiento QA de 30 Minutos | Vórtice Integration",
  description:
    "Levantamiento de 30 minutos online y gratuito para empresas con software en producción. Recibes un informe escrito de 1 a 2 páginas con el estado actual y los primeros pasos.",
  openGraph: {
    title: "Levantamiento QA Gratuito | Vórtice Integration",
    description:
      "Sesión online de 30 minutos sin costo. Diagnóstico del estado actual de tus pruebas y entrega de informe ejecutivo.",
  },
};

export default function LevantamientoPage() {
  return (
    <div className="w-full bg-qa-canvas min-h-screen">
      {/* Cabecera */}
      <section className="bg-qa-dark text-white py-16 px-6 border-b border-qa-dark">
        <div className="max-w-6xl mx-auto space-y-4">
          <span className="font-mono text-xs text-qa-blue uppercase tracking-widest block font-bold">
            // Diagnóstico Sin Costo
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-none">
            Levantamiento QA de 30 Minutos
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl font-sans leading-relaxed">
            Una sesión técnica directa para revisar cómo prueba hoy tu equipo y definir qué necesitas para dejar de probar a última hora. Sin discursos de venta ni compromisos.
          </p>
          <div className="pt-2">
            <a
              href="https://calendar.app.google/8JfEzcRHRZGKMaHx9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-qa-blue text-white px-6 py-3.5 font-bold font-mono text-sm uppercase tracking-wider hover:shadow-hover-neon transition-all"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>Agendar en Google Calendar →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Qué pasa en los 30 minutos + Qué recibe el cliente */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
          {/* Qué pasa en los 30 minutos */}
          <div className="bg-white border-2 border-qa-dark p-8 space-y-5 shadow-brutal-dark">
            <span className="font-mono text-xs text-qa-blue font-bold uppercase block">
              // Metodología de la sesión
            </span>
            <h2 className="text-2xl font-extrabold text-qa-dark uppercase leading-tight">
              Qué pasa en los 30 minutos
            </h2>
            <p className="text-sm text-gray-700 font-sans">
              Una conversación técnica de tres puntos con foco en tu operación real:
            </p>
            <ul className="space-y-4 text-sm text-gray-700 pt-3 border-t border-gray-200 font-sans">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-qa-dark text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  01
                </span>
                <div>
                  <strong className="text-qa-dark block font-mono">Cómo se prueba hoy:</strong>
                  <span>Revisamos el flujo real con el que tu equipo valida antes de desplegar código a producción.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-qa-dark text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  02
                </span>
                <div>
                  <strong className="text-qa-dark block font-mono">Dónde se rompe:</strong>
                  <span>Identificamos los puntos ciegos, los cuellos de botella y los errores recurrentes reportados por usuarios.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-qa-dark text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  03
                </span>
                <div>
                  <strong className="text-qa-dark block font-mono">Qué primer paso tiene sentido:</strong>
                  <span>Definimos la prioridad inmediata que entregará estabilidad sin sobrecargar a los desarrolladores.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Qué recibe el cliente después */}
          <div className="bg-white border-2 border-qa-dark p-8 space-y-5 shadow-brutal-dark flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-mono text-xs text-qa-blue font-bold uppercase block">
                // Entregable técnico
              </span>
              <h2 className="text-2xl font-extrabold text-qa-dark uppercase leading-tight">
                Qué recibes después
              </h2>
              <div className="p-4 bg-qa-canvas border border-qa-dark space-y-1">
                <div className="flex items-center gap-2 text-qa-dark font-bold text-sm font-mono">
                  <FileText className="w-4 h-4 text-qa-blue" aria-hidden="true" />
                  <span>Informe escrito de 1 a 2 páginas</span>
                </div>
                <p className="text-xs text-gray-600 font-sans">
                  Entregado en un plazo máximo de 24 horas hábiles posteriores a la sesión.
                </p>
              </div>

              <ul className="space-y-2.5 text-sm text-gray-700 font-sans pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-qa-blue shrink-0 mt-0.5" />
                  <span>Diagnóstico objetivo del estado actual de madurez de QA.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-qa-blue shrink-0 mt-0.5" />
                  <span>Ruta priorizada de primeros pasos para reducir fallas en producción.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-qa-blue shrink-0 mt-0.5" />
                  <span>Recomendación honesta sobre si avanzar a la puesta en marcha o no.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-200 text-xs font-mono text-gray-500">
              ● Sin compromisos comerciales. El informe te pertenece y tu equipo puede implementarlo por su cuenta.
            </div>
          </div>
        </div>

        {/* Sección Formulario / Coordinación */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs text-qa-blue uppercase block font-bold">
              // Canales de agendamiento
            </span>
            <h2 className="text-3xl font-extrabold text-qa-dark tracking-tight uppercase leading-none">
              ¿Prefieres agendar directamente o escribirnos?
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed font-sans">
              Puedes abrir el calendario de Google Calendar y elegir de inmediato tu bloque de 30 minutos, o dejarnos tus antecedentes en el formulario y te contactamos en menos de 24 horas hábiles.
            </p>

            <div className="p-6 bg-white border-2 border-qa-dark space-y-3 shadow-brutal-dark font-mono">
              <span className="font-bold text-sm text-qa-dark block">
                &gt; Agendamiento inmediato:
              </span>
              <a
                href="https://calendar.app.google/8JfEzcRHRZGKMaHx9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-qa-dark text-white text-xs uppercase font-bold hover:bg-qa-blue transition-colors"
              >
                <span>Abrir Google Calendar →</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <LeadForm
              formTitle="SOLICITAR LEVANTAMIENTO POR FORMULARIO"
              formSubtitle="Déjanos tus datos y nos pondremos en contacto para coordinar la sesión."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
