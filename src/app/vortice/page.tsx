import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Compass, Lightbulb, User, ArrowRight, HeartHandshake, Eye } from "lucide-react";
import { DiagramSystem } from "@/components/DiagramSystem";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Sobre Vórtice | El Marco Sistémico de Integración",
  description:
    "Conoce el marco de trabajo Vórtice: su origen en la operación diaria, sus principios fundamentales y cómo conectamos la técnica con las dinámicas humanas.",
  openGraph: {
    title: "Sobre Vórtice | Marco Sistémico",
    description:
      "Qué es el marco Vórtice, sus principios y para qué sirve en organizaciones y empresas de software en Chile.",
  },
};

export default function VorticePage() {
  return (
    <div className="space-y-16 lg:space-y-24 py-8 sm:py-12">
      {/* 1. CABECERA / HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-vortice-100 text-vortice-900 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-4 h-4 text-vortice-700" aria-hidden="true" />
            <span>Fundamentos y Propósito</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            El marco Vórtice: mirar donde la técnica y lo humano se cruzan
          </h1>

          <p className="text-lg text-slate-700 leading-relaxed">
            Vórtice no nació en una sala de reuniones corporativa ni como una teoría de manual. Nació en las trincheras de proyectos de software reales, tras años observando cómo equipos talentosos fracasaban no por falta de capacidad técnica, sino por silencios, presiones desalineadas y procesos que nadie entendía.
          </p>
        </div>
      </section>

      {/* 2. ORIGEN DEL MARCO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-vortice-700 uppercase tracking-wider">
              El origen
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Los mismos dolores, repetidos en diferentes roles
            </h2>

            <p className="text-slate-700 text-base leading-relaxed">
              Quienes lideramos o trabajamos en desarrollo de software conocemos bien este ciclo: el equipo de programación culpa a los requerimientos poco claros; el equipo de QA culpa a las prisas del desarrollo; operaciones culpa a la falta de pruebas; y gerencia siente que cada sprint cuesta más y rinde menos.
            </p>

            <p className="text-slate-700 text-base leading-relaxed">
              Al transitar por distintos roles —desde la ejecución técnica en testing y desarrollo hasta la gestión de personas y la toma de decisiones estratégicas— se hace evidente una verdad contundente:
            </p>

            <blockquote className="p-4 bg-vortice-50 border-l-4 border-vortice-700 rounded-r-xl text-slate-900 font-medium text-base italic">
              &ldquo;Los cuellos de botella más costosos no se solucionan con otra librería ni con otra reunión diaria de 15 minutos: se resuelven cuando las personas pueden hablar de lo que verdaderamente está trabando su labor sin miedo al juicio.&rdquo;
            </blockquote>
          </div>

          <div className="lg:col-span-6">
            <DiagramSystem />
          </div>
        </div>
      </section>

      {/* 3. FRASE DE FONDO (CON NOTA PARA LA FUNDADORA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-vortice-950 via-vortice-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-vortice-800 shadow-xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold uppercase tracking-wider">
            <Lightbulb className="w-4 h-4 text-amber-400" aria-hidden="true" />
            <span>Premisa Central de Vórtice</span>
          </div>

          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            &ldquo;La tecnología es la vía para entrar al mundo corporativo y conectar con lo humano.&rdquo;
          </blockquote>

          <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
            A través del código, los despliegues y las métricas de calidad de software abrimos la puerta para abordar lo que verdaderamente sostiene o erosiona a las organizaciones: la confianza, la claridad en los acuerdos y el cuidado de los equipos que sostienen el negocio.
          </p>

          <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-xs text-amber-300/90 font-mono">
            [Nota de revisión editorial: frase de fondo a validar y ajustar en su redacción definitiva con la fundadora]
          </div>
        </div>
      </section>

      {/* 4. PRINCIPIOS DEL MARCO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="principles-heading">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs uppercase font-bold text-vortice-700 tracking-wider">
            Bases operativas
          </span>
          <h2 id="principles-heading" className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Los principios que guían nuestro trabajo
          </h2>
          <p className="text-slate-600 text-base">
            Cuatro convicciones no negociables que rigen cada diagnóstico y cada ciclo de acompañamiento:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              El software refleja la calidad de los vínculos de su equipo
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Si en un equipo hay desconfianza, silos o miedo a reportar errores tempranamente, el software resultante será frágil y tendrá parches por doquier. Mejorar la arquitectura del código requiere primero sanear las conversaciones del equipo.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Las personas no son recursos intercambiables
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Tratar a los profesionales como engranajes mecánicos en un diagrama de Gantt desgasta el talento y diluye la responsabilidad. Miramos a las personas con su contexto, sus cargas y su potencial real de aporte.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Ninguna herramienta reemplaza un acuerdo explícito
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Ningún software de gestión (Jira, ClickUp, Notion) ni framework de moda resuelve la falta de un acuerdo sincero sobre qué significa &ldquo;listo para producción&rdquo; o cómo se prioriza una urgencia real.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              El diagnóstico debe preceder siempre a la intervención
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              No ofrecemos paquetes cerrados ni recetas estándar sin antes escuchar, mirar el flujo de trabajo y entender la realidad particular de la empresa. Intervenir a ciegas suele generar más fricción que beneficio.
            </p>
          </div>
        </div>
      </section>

      {/* 5. PARA QUÉ SIRVE */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-10">
            <span className="text-xs uppercase font-bold text-vortice-700 tracking-wider">
              Impacto concreto
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              ¿Para qué sirve el marco Vórtice en tu empresa?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Sirve para devolverle la claridad y la previsibilidad a la operación diaria de empresas y pymes de base tecnológica:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <Eye className="w-6 h-6 text-vortice-800" aria-hidden="true" />
              <h3 className="font-bold text-slate-900 text-base">Visibilizar sin buscar culpables</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mapeamos dónde se traban las entregas y por qué ocurren errores reiterados, enfocándonos en el sistema y el proceso, nunca en señalar con el dedo a individuos.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <HeartHandshake className="w-6 h-6 text-vortice-800" aria-hidden="true" />
              <h3 className="font-bold text-slate-900 text-base">Alinear negocio y tecnología</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Traducimos las necesidades comerciales a realidades técnicas viables y viceversa, reduciendo las expectativas desmedidas y las entregas frustradas.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <Compass className="w-6 h-6 text-vortice-800" aria-hidden="true" />
              <h3 className="font-bold text-slate-900 text-base">Instalar autonomía real</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No generamos dependencia de consultores externos permanentes. Entregamos criterios y prácticas que el equipo propio hace suyas y sostiene en el tiempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BIOGRAFÍA DE LA FUNDADORA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="bio-heading">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-vortice-100 shadow-md mb-4 bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/karen-sudzuki.png"
                  alt="Karen Sudzuki Toro - Fundadora de Vórtice Integration"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Karen Sudzuki Toro
              </h3>
              <p className="text-sm font-medium text-vortice-700 mt-0.5">
                Fundadora de Vórtice Integration
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Santiago, Chile
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100 w-full space-y-2 text-xs text-slate-600">
                <a
                  href="mailto:karen.sudzuki@vorticeintegration.com"
                  className="flex items-center justify-center gap-1.5 text-vortice-800 hover:text-vortice-950 font-medium"
                >
                  karen.sudzuki@vorticeintegration.com
                </a>
                <a
                  href="https://calendar.app.google/8JfEzcRHRZGKMaHx9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-vortice-50 text-vortice-900 font-semibold hover:bg-vortice-100 transition-colors w-full"
                >
                  <span>Agendar 45 min con Karen</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="md:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vortice-100 text-vortice-900 text-xs font-semibold uppercase tracking-wider">
                Liderazgo y Trayectoria
              </div>

              <h2 id="bio-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Detrás del marco Vórtice
              </h2>

              <p className="text-slate-700 text-base leading-relaxed">
                Creo firmemente que la tecnología solo genera valor cuando los equipos y procesos que la sostienen están bien articulados. Llevo más de <strong>12 años liderando áreas de Calidad de Software (QA), Integración y Gobernanza TI</strong> en organizaciones de misión crítica (HealthTech, FinTech y sector público), donde la estrategia debe traducirse en ejecución estable y continuidad de negocio.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-vortice-800">
                    Formación Académica
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    &bull; <strong>Ingeniería en Computación e Informática</strong> (Universidad Andrés Bello - UNAB).
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    &bull; Especialización ejecutiva en <strong>Liderazgo por MIT Professional Education</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Especialidad Práctica
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Creación de áreas de QA desde cero (caso FALP de 2 a 10 ingenieros), protocolos Go/No-Go y automatización moderna (Playwright, k6, n8n, Supabase y Docker).
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
                <p>
                  A través de <strong>Vórtice Integration</strong> pongo a disposición de fundadores, gerencias de tecnología y líderes de operaciones un acompañamiento directo y diagnóstico sistémico: diseñamos marcos donde TI, Operaciones y Comités de Dirección toman decisiones con información confiable y sin fricciones destructivas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaSection
          title="¿Quieres revisar la madurez de tu equipo?"
          description="Agenda una conversación de 45 minutos. Te entregaremos una mirada sincera sobre dónde están las trabas y si tiene sentido iniciar un acompañamiento."
          primaryButtonText="Agendar diagnóstico de 45 minutos"
          primaryButtonHref="/diagnostico"
          secondaryButtonText="Volver al inicio"
          secondaryButtonHref="/"
        />
      </section>
    </div>
  );
}
