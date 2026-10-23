import React from "react";
import { Metadata } from "next";
import { Calendar, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Levantamiento QA de 30 Minutos",
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
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-20">
      {/* Cabecera */}
      <section className="pt-8 sm:pt-12 space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-mint text-dark text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-tag">
          <span>Online &bull; Gratuito &bull; Sin compromiso</span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl text-dark tracking-tight uppercase leading-tightest">
          Levantamiento QA de 30 minutos
        </h1>

        <p className="text-lg text-slate leading-relaxed">
          Una sesión técnica directa para revisar cómo prueba hoy tu equipo y definir qué necesitas para dejar de probar a última hora. Sin discursos de venta ni compromisos.
        </p>

        <div className="pt-2">
          <a
            href="https://calendar.app.google/8JfEzcRHRZGKMaHx9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-dark text-white text-base font-medium px-6 py-3.5 rounded-lg hover:bg-dark/90 transition-colors"
          >
            <Calendar className="w-5 h-5" aria-hidden="true" />
            <span>Agendar levantamiento en Google Calendar</span>
          </a>
        </div>
      </section>

      {/* Qué pasa en los 30 minutos + Qué recibe el cliente */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Qué pasa en los 30 minutos */}
        <div className="bg-white rounded-32 p-6 sm:p-8 space-y-5 border border-ash/30">
          <span className="font-display text-3xl text-dark uppercase block leading-none">
            Qué pasa en los 30 minutos
          </span>
          <p className="text-sm text-slate">
            Una conversación técnica de tres puntos con foco en tu operación real:
          </p>
          <ul className="space-y-4 text-sm text-slate pt-2 border-t border-canvas">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-dark text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                1
              </span>
              <div>
                <strong className="text-dark block">Cómo se prueba hoy:</strong>
                <span>Revisamos el flujo real con el que tu equipo valida antes de desplegar código a producción.</span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-dark text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                2
              </span>
              <div>
                <strong className="text-dark block">Dónde se rompe:</strong>
                <span>Identificamos los puntos ciegos, los cuellos de botella y los errores recurrentes reportados por usuarios.</span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-dark text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                3
              </span>
              <div>
                <strong className="text-dark block">Qué primer paso tiene sentido:</strong>
                <span>Definimos la prioridad inmediata que entregará estabilidad sin sobrecargar a los desarrolladores.</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Qué recibe el cliente después */}
        <div className="bg-white rounded-32 p-6 sm:p-8 space-y-5 border border-ash/30 flex flex-col justify-between">
          <div className="space-y-5">
            <span className="font-display text-3xl text-dark uppercase block leading-none">
              Qué recibes después
            </span>
            <div className="p-4 bg-canvas rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-dark font-bold text-sm">
                <FileText className="w-5 h-5 text-dark" aria-hidden="true" />
                <span>Informe escrito de 1 a 2 páginas</span>
              </div>
              <p className="text-xs text-slate leading-relaxed">
                Entregado en un plazo máximo de 24 horas hábiles posteriores a la sesión.
              </p>
            </div>

            <ul className="space-y-2.5 text-sm text-slate">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-dark shrink-0 mt-0.5" />
                <span>Diagnóstico objetivo del estado actual de madurez de QA.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-dark shrink-0 mt-0.5" />
                <span>Ruta priorizada de primeros pasos para reducir fallas en producción.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-dark shrink-0 mt-0.5" />
                <span>Recomendación honesta sobre si avanzar a la puesta en marcha o no.</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-canvas text-xs text-smoke">
            Sin compromisos comerciales. El informe te pertenece y tu equipo puede implementarlo por su cuenta si así lo prefiere.
          </div>
        </div>
      </section>

      {/* Formulario alternativo o agendamiento directo */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-smoke block">
              Dos opciones para coordinar
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-dark tracking-tight uppercase leading-none">
              ¿Prefieres agendar directamente o escribirnos?
            </h2>
            <p className="text-sm text-slate leading-relaxed">
              Puedes abrir el calendario de Google Calendar y elegir de inmediato tu bloque de 30 minutos, o dejarnos tus datos en el formulario y te contactamos en menos de 24 horas hábiles.
            </p>

            <div className="p-5 bg-white rounded-32 border border-ash/30 space-y-3">
              <span className="font-semibold text-sm text-dark block">
                Agendamiento directo:
              </span>
              <a
                href="https://calendar.app.google/8JfEzcRHRZGKMaHx9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-dark text-white text-sm font-medium hover:bg-dark/90 transition-colors"
              >
                <span>Abrir Google Calendar</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
