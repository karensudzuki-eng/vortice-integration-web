import React from "react";
import { Metadata } from "next";
import { Calendar, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { WaveDivider } from "@/components/WaveDivider";

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
      {/* Cabecera con glow dorado */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 relative">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[280px] bg-qa-gold/10 rounded-full blur-[130px] pointer-events-none -z-10" 
          aria-hidden="true" 
        />
        <div className="max-w-6xl mx-auto space-y-4">
          <span className="font-mono text-xs text-qa-gold uppercase tracking-widest block font-bold">
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

      {/* Separador ondulado */}
      <WaveDivider fillColor="#080e1a" />

      {/* Grid: Formulario + Canales directos */}
      <section className="py-20 px-4 sm:px-6 bg-[#080e1a] border-y border-white/10">
        <div className="max-w-6xl mx-auto">
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
              <div className="glass-card rounded-2xl p-7 sm:p-8 space-y-5 border border-qa-gold/30 shadow-gold-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-qa-gold/15 border border-qa-gold/30 text-qa-gold flex items-center justify-center shrink-0">
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
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-gradient-to-r from-qa-gold to-qa-gold-light hover:from-qa-gold-light hover:to-qa-gold text-qa-dark font-mono text-xs uppercase font-bold rounded-lg shadow-gold-sm hover:shadow-gold-md transition-all"
                >
                  <span>Abrir Google Calendar</span>
                  <ArrowRight className="w-4 h-4 text-qa-dark" aria-hidden="true" />
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
                    <span className="text-xs font-mono text-gray-400 uppercase font-bold flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-qa-gold" />
                      Correo institucional
                    </span>
                    <div>
                      <a
                        href="mailto:contacto@vorticeintegration.com"
                        className="inline-block text-white font-mono font-bold text-sm hover:text-qa-gold underline decoration-qa-gold/40 transition-colors"
                      >
                        contacto@vorticeintegration.com
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-gray-400 uppercase font-bold flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-qa-gold" />
                      WhatsApp oficial
                    </span>
                    <div>
                      <a
                        href="https://wa.me/56941939361"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white font-mono font-bold text-sm hover:text-qa-gold underline decoration-qa-gold/40 transition-colors"
                      >
                        +56 9 4193 9361
                      </a>
                    </div>
                  </div>

                  {/* Ubicación y Razón Social */}
                  <div className="space-y-1 pt-2 border-t border-white/10">
                    <span className="text-xs font-mono text-gray-400 uppercase font-bold flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-qa-gold" />
                      Ubicación y Entidad
                    </span>
                    <p className="font-mono text-xs text-gray-300 leading-relaxed">
                      Vórtice Integration Holding SpA<br />
                      RUT: 78.377.882-3<br />
                      Santiago de Chile
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separador ondulado */}
      <WaveDivider flip fillColor="#060a14" />
    </div>
  );
}
