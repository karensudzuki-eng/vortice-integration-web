import React from "react";
import { Metadata } from "next";
import { Calendar, Mail, ArrowRight } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contacto",
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
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-20">
      {/* Cabecera */}
      <section className="pt-8 sm:pt-12 space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-mint text-dark text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-tag">
          <span>Canales de contacto</span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl text-dark tracking-tight uppercase leading-tightest">
          Contacto
        </h1>

        <p className="text-lg text-slate leading-relaxed">
          Escríbenos directamente a través del formulario o coordina tu levantamiento técnico en nuestro calendario online. Te respondemos en menos de 24 horas hábiles.
        </p>
      </section>

      {/* Grid: Formulario + Canales directos */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
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
          <div className="bg-white rounded-32 p-6 sm:p-7 space-y-4 border border-ash/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-dark text-white flex items-center justify-center">
                <Calendar className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-display text-2xl text-dark uppercase leading-none">
                  Agenda Directa
                </h2>
                <p className="text-xs text-smoke">Sesión de 30 minutos</p>
              </div>
            </div>

            <p className="text-sm text-slate leading-relaxed">
              Si prefieres coordinar de inmediato sin intercambio de correos, selecciona tu bloque en Google Calendar:
            </p>

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

          {/* Tarjeta de Información y Canales */}
          <div className="bg-white rounded-32 p-6 sm:p-7 space-y-5 border border-ash/30">
            <h2 className="font-display text-2xl text-dark uppercase leading-none">
              Vías de comunicación
            </h2>

            <div className="space-y-4 text-sm text-slate">
              {/* Correo con highlight amarillo #fff100 */}
              <div className="space-y-1">
                <span className="text-xs text-smoke uppercase font-semibold block">Correo institucional</span>
                <div>
                  <a
                    href="mailto:contacto@vorticeintegration.com"
                    className="inline-block bg-voltage px-2.5 py-1 text-dark text-sm font-medium rounded hover:bg-voltage/90 transition-colors"
                  >
                    contacto@vorticeintegration.com
                  </a>
                </div>
              </div>

              {/* WhatsApp con solo ícono circular */}
              <div className="space-y-1 pt-2">
                <span className="text-xs text-smoke uppercase font-semibold block">WhatsApp directo</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://wa.me/56941939361?text=Hola%20V%C3%B3rtice%2C%20me%20gustar%C3%ADa%20agendar%20un%20levantamiento%20QA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-dark text-white flex items-center justify-center hover:bg-dark/80 transition-transform hover:scale-105 focus:outline-none"
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
                  <span className="text-xs text-smoke">Haz clic en el ícono para iniciar una conversación en WhatsApp</span>
                </div>
              </div>

              {/* Datos legales */}
              <div className="pt-3 border-t border-canvas text-xs text-slate space-y-1">
                <p><strong>Razón Social:</strong> Vórtice Integration Holding SpA</p>
                <p><strong>RUT:</strong> 78.377.882-3</p>
                <p>Santiago de Chile</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
