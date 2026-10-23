import React from "react";
import { Metadata } from "next";
import { Mail, MapPin, Calendar, Clock, MessageSquare, ShieldCheck } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contacto y Agendamiento | Vórtice Integration SpA",
  description:
    "Comunícate con Vórtice Integration SpA. Envíanos tu consulta sobre diagnóstico sistémico o agenda una conversación de 45 minutos.",
  openGraph: {
    title: "Contacto | Vórtice Integration SpA",
    description:
      "Formulario de contacto y agendamiento de diagnóstico sistémico para empresas y pymes en Chile.",
  },
};

export default function ContactoPage() {
  return (
    <div className="space-y-16 lg:space-y-20 py-8 sm:py-12">
      {/* 1. HERO CABECERA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-vortice-100 text-vortice-900 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-4 h-4 text-vortice-700" aria-hidden="true" />
            <span>Canal Directo</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Conversemos sobre tu equipo y tus desafíos
          </h1>

          <p className="text-lg text-slate-700 leading-relaxed">
            Puedes escribirnos a través del formulario detallado o coordinar directamente una videollamada de diagnóstico en nuestra agenda. Respondemos en menos de 24 horas hábiles.
          </p>
        </div>
      </section>

      {/* 2. GRID PRINCIPAL: FORMULARIO + DATOS DE CONTACTO & CALENDARIO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Columna Izquierda: Formulario de leads */}
          <div className="lg:col-span-7">
            <LeadForm
              defaultLine="Consulta general"
              formTitle="Envíanos tu mensaje o solicitud"
              formDescription="Completa los antecedentes de tu organización para derivar tu inquietud a la persona idónea de nuestro equipo."
              submitButtonText="Enviar mensaje a Vórtice"
              showCalendarPromptOnSuccess={true}
            />
          </div>

          {/* Columna Derecha: Canales directos + Bloque Calendario */}
          <div className="lg:col-span-5 space-y-8">
            {/* Tarjeta de Calendario Directo */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-vortice-50 text-vortice-800 flex items-center justify-center font-bold">
                  <Calendar className="w-5 h-5 text-vortice-800" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Agenda una videollamada directa
                  </h2>
                  <p className="text-xs text-slate-500">
                    Bloques de 45 minutos para diagnóstico
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Si prefieres evitar el intercambio de correos y coordinar directamente un horario de encuentro con Karen Sudzuki, selecciona tu espacio en el calendario oficial:
              </p>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-vortice-800">
                  <Clock className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                  <span>Google Calendar &bull; Diagnóstico Vórtice</span>
                </div>
                <a
                  href="https://calendar.app.google/8JfEzcRHRZGKMaHx9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white bg-vortice-900 hover:bg-vortice-800 transition-colors focus:outline-none focus:ring-2 focus:ring-vortice-700"
                >
                  <Calendar className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <span>Abrir calendario de agendamiento</span>
                </a>
                <p className="text-[11px] text-slate-500 text-center">
                  Sesión online de 45 minutos sin costo inicial
                </p>
              </div>
            </div>

            {/* Datos de contacto y ubicación */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-5">
              <h2 className="text-lg font-bold text-slate-900">
                Información de contacto
              </h2>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-vortice-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-1">
                    <strong className="block text-slate-900 font-semibold">Correos directos</strong>
                    <div>
                      <a
                        href="mailto:contacto@vorticeintegration.com"
                        className="text-vortice-700 hover:underline block text-sm"
                      >
                        contacto@vorticeintegration.com
                      </a>
                      <a
                        href="mailto:karen.sudzuki@vorticeintegration.com"
                        className="text-vortice-700 hover:underline block text-sm"
                      >
                        karen.sudzuki@vorticeintegration.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">WhatsApp de contacto</strong>
                    <a
                      href="https://wa.me/56941939361?text=Hola%20Karen,%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20diagn%C3%B3stico%20en%20V%C3%B3rtice%20Integration"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-semibold hover:underline"
                    >
                      +56 9 4193 9361
                    </a>
                    <span className="block text-xs text-slate-500 mt-0.5">
                      Atención ágil para dudas operativas y coordinación
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-vortice-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Ubicación</strong>
                    <span>Santiago de Chile</span>
                    <span className="block text-xs text-slate-500 mt-0.5">
                      Atención presencial en Santiago y remota para todo Chile y Latinoamérica
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Razón social y RUT</strong>
                    <span>Vórtice Integration Holding SpA</span>
                    <span className="block text-xs text-slate-600 font-mono mt-0.5">
                      RUT: 78.377.882-3
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Aviso sobre QA Chile */}
            <div className="p-5 rounded-2xl bg-vortice-50 border border-vortice-100 text-xs text-slate-700 space-y-2">
              <strong className="block font-bold text-vortice-900">
                ¿Buscas cotizar servicios específicos de QA o automatización?
              </strong>
              <p>
                Los servicios directos de testing de software se canalizan a través de nuestra marca especializada{" "}
                <a
                  href="https://qachile.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-vortice-800 underline hover:text-vortice-950"
                >
                  qachile.cl
                </a>
                . También puedes solicitarlo mediante este formulario y coordinaremos la respuesta de manera integrada.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
