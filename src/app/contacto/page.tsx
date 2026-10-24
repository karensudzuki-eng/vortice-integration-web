import React from "react";
import { Metadata } from "next";
import { Calendar, ArrowRight } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contacto | Vórtice Integration",
  description:
    "Comunícate con Vórtice Integration. Escríbenos directamente o agenda tu levantamiento QA de 30 minutos online.",
  openGraph: {
    title: "Contacto | Vórtice Integration",
    description:
      "Canales de contacto de Vórtice Integration. Formulario de levantamiento y agendamiento directo en Google Calendar.",
  },
};

export default function ContactoPage() {
  return (
    <div className="w-full bg-qa-canvas min-h-screen">
      {/* Cabecera */}
      <section className="bg-qa-dark text-white py-16 px-6 border-b border-qa-dark">
        <div className="max-w-6xl mx-auto space-y-4">
          <span className="font-mono text-xs text-qa-blue uppercase tracking-widest block font-bold">
            // Canales de contacto
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-none">
            Contacto
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl font-sans leading-relaxed">
            Escríbenos directamente a través del formulario o coordina tu levantamiento técnico en nuestro calendario online. Te respondemos en menos de 24 horas hábiles.
          </p>
        </div>
      </section>

      {/* Grid: Formulario + Canales directos */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Formulario */}
          <div className="lg:col-span-7">
            <LeadForm
              formTitle="ENVÍANOS UN MENSAJE"
              formSubtitle="Te responderemos en menos de 24 horas hábiles."
            />
          </div>

          {/* Canales directos */}
          <div className="lg:col-span-5 space-y-6">
            {/* Tarjeta Google Calendar */}
            <div className="bg-white border-2 border-qa-dark p-6 sm:p-8 space-y-4 shadow-brutal-dark">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-qa-dark text-white flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-qa-neon" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-qa-dark uppercase leading-none font-sans">
                    Agenda Directa
                  </h2>
                  <p className="text-xs font-mono text-gray-500 mt-1">Sesión online de 30 minutos</p>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed font-sans">
                Si prefieres coordinar de inmediato sin intercambio de correos, selecciona tu bloque en Google Calendar:
              </p>

              <a
                href="https://calendar.app.google/8JfEzcRHRZGKMaHx9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-qa-dark text-white font-mono text-xs uppercase font-bold hover:bg-qa-blue transition-colors"
              >
                <span>Abrir Google Calendar</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            {/* Tarjeta de Información y Canales */}
            <div className="bg-white border-2 border-qa-dark p-6 sm:p-8 space-y-5 shadow-brutal-dark">
              <h2 className="text-xl font-extrabold text-qa-dark uppercase leading-none font-sans">
                Vías de comunicación
              </h2>

              <div className="space-y-4 text-sm text-gray-700">
                {/* Correo con highlight amarillo #fff100 */}
                <div className="space-y-1">
                  <span className="text-xs font-mono text-gray-500 uppercase font-bold block">Correo institucional</span>
                  <div>
                    <a
                      href="mailto:contacto@vorticeintegration.com"
                      className="inline-block bg-qa-neon text-qa-dark font-mono font-bold text-sm px-2.5 py-1 border border-qa-dark hover:shadow-[2px_2px_0px_#0052ff] transition-all"
                    >
                      contacto@vorticeintegration.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp con solo ícono circular */}
                <div className="space-y-1 pt-2">
                  <span className="text-xs font-mono text-gray-500 uppercase font-bold block">WhatsApp directo</span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://wa.me/56941939361?text=Hola%20V%C3%B3rtice%2C%20me%20gustar%C3%ADa%20agendar%20un%20levantamiento%20QA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-qa-dark text-white flex items-center justify-center hover:bg-qa-blue transition-transform hover:scale-105 focus:outline-none"
                      aria-label="Contactar por WhatsApp"
                      title="Contactar por WhatsApp"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                    </a>
                    <span className="text-xs text-gray-500 font-sans">Haz clic en el ícono para iniciar conversación</span>
                  </div>
                </div>

                {/* Datos legales */}
                <div className="pt-4 border-t border-gray-200 text-xs font-mono text-gray-600 space-y-1">
                  <p><strong>Razón Social:</strong> Vórtice Integration Holding SpA</p>
                  <p><strong>RUT:</strong> 78.377.882-3</p>
                  <p>Santiago de Chile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
