import React from "react";
import { Metadata } from "next";
import { Calendar, ArrowRight } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contacto | Vórtice Integration",
  description:
    "Comunícate con Vórtice Integration Holding SpA. Escríbenos directamente o agenda tu levantamiento QA de 30 minutos online.",
  openGraph: {
    title: "Contacto | Vórtice Integration",
    description:
      "Canales oficiales de contacto de Vórtice Integration Holding SpA. Formulario de levantamiento y agendamiento directo en Google Calendar.",
  },
};

export default function ContactoPage() {
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
            // Canales Oficiales
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Contacto
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Escríbenos directamente a través del formulario o coordina tu levantamiento técnico en nuestro calendario online. Te respondemos en menos de 24 horas hábiles.
          </p>
        </div>
      </section>

      {/* Grid: Formulario + Canales directos */}
      <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6">
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
            <div className="glass-card rounded-2xl p-7 sm:p-8 space-y-5 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 text-qa-cyan flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white leading-none">
                    Agenda Directa
                  </h2>
                  <p className="text-xs font-mono text-gray-400 mt-1">Sesión online de 30 minutos</p>
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                Si prefieres coordinar de inmediato sin intercambio previo de correos, selecciona tu bloque en Google Calendar:
              </p>

              <a
                href="https://calendar.app.google/8JfEzcRHRZGKMaHx9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-mono text-xs uppercase font-bold rounded-lg shadow-glow-sm transition-all"
              >
                <span>Abrir Google Calendar</span>
                <ArrowRight className="w-4 h-4 text-qa-cyan" aria-hidden="true" />
              </a>
            </div>

            {/* Tarjeta de Información y Canales */}
            <div className="glass-card rounded-2xl p-7 sm:p-8 space-y-6 border border-white/10">
              <h2 className="text-lg font-bold text-white leading-none">
                Vías de comunicación oficial
              </h2>

              <div className="space-y-4 text-sm text-gray-300">
                {/* Correo oficial */}
                <div className="space-y-1">
                  <span className="text-xs font-mono text-gray-400 uppercase font-bold block">
                    Correo institucional
                  </span>
                  <div>
                    <a
                      href="mailto:contacto@vorticeintegration.com"
                      className="inline-block text-white font-mono font-bold text-sm hover:text-qa-cyan underline decoration-blue-500/40 transition-colors"
                    >
                      contacto@vorticeintegration.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp oficial */}
                <div className="space-y-1 pt-2 border-t border-white/10">
                  <span className="text-xs font-mono text-gray-400 uppercase font-bold block">
                    WhatsApp oficial
                  </span>
                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href="https://wa.me/56941939361?text=Hola%20V%C3%B3rtice%20Integration%2C%20me%20gustar%C3%ADa%20coordinar%20un%20levantamiento%20t%C3%A9cnico."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-emerald-400 flex items-center justify-center hover:border-emerald-500 hover:bg-emerald-500/10 transition-all focus:outline-none"
                      aria-label="Contactar por WhatsApp"
                      title="Contactar por WhatsApp"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
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
                    <span className="text-xs text-gray-400 font-sans">
                      Haz clic en el ícono para iniciar conversación directa
                    </span>
                  </div>
                </div>

                {/* Datos legales de la Matriz */}
                <div className="pt-4 border-t border-white/10 text-xs font-mono text-gray-400 space-y-1">
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
