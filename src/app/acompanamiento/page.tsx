import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Users, AlertTriangle, CheckCircle2, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Acompañamiento en Transformación | Facilitación y Cambio Operacional",
  description:
    "Acompañamiento para personas y equipos técnicos en procesos de cambio. Destrabe de dinámicas operacionales sin promesas terapéuticas ni fórmulas mágicas.",
  openGraph: {
    title: "Acompañamiento en Transformación | Vórtice Integration",
    description:
      "Acompañamiento para equipos técnicos y líderes en adopción de nuevas prácticas, facilitación sistémica y destrabe de dinámicas laborales.",
  },
};

export default function AcompanamientoPage() {
  return (
    <div className="space-y-16 lg:space-y-20 py-8 sm:py-12">
      {/* 1. HERO CABECERA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-vortice-100 text-vortice-900 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-4 h-4 text-vortice-700" aria-hidden="true" />
            <span>Acompañamiento Sistémico</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Acompañar el cambio: cuando la técnica necesita sostenerse en las personas
          </h1>

          <p className="text-lg text-slate-700 leading-relaxed">
            Cambiar la forma en que un equipo trabaja no se logra redactando un manual de procedimientos ni instalando una nueva herramienta. Acompañamos a líderes y equipos de software a transitar la incomodidad del cambio, destrabando conversaciones y consolidando acuerdos sostenibles.
          </p>
        </div>
      </section>

      {/* 2. DECLARACIÓN DE LÍMITES ÉTICOS Y PROFESIONALES (REQUISITO FUNDAMENTAL) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="bg-amber-50 border-2 border-amber-300/80 rounded-2xl p-6 sm:p-8 space-y-4"
          role="region"
          aria-labelledby="disclaimer-heading"
        >
          <div className="flex items-center gap-3 text-amber-900">
            <AlertTriangle className="w-6 h-6 text-amber-700 shrink-0" aria-hidden="true" />
            <h2 id="disclaimer-heading" className="text-lg font-bold">
              Claridad y límite ético de nuestro servicio
            </h2>
          </div>

          <div className="text-sm text-amber-950 leading-relaxed space-y-3">
            <p>
              El acompañamiento que realiza Vórtice Integration SpA tiene foco estrictamente <strong>organizacional, operativo y de dinámicas de trabajo en equipo</strong>. Facilitamos acuerdos laborales, clarificación de roles, gestión de prioridades y comunicación técnica.
            </p>
            <p>
              <strong>No es psicoterapia ni tratamiento de salud mental.</strong> En Vórtice no realizamos diagnósticos clínicos, terapia psicológica ni promesas de sanación personal. Si durante nuestro trabajo detectamos que un colaborador o líder está experimentando un padecimiento de salud mental o una situación de vulnerabilidad clínica, nuestro deber ético es orientar respetuosamente la derivación a profesionales de la salud mental correspondientes.
            </p>
          </div>
        </div>
      </section>

      {/* 3. QUÉ SIGNIFICA ACOMPAÑAR EN VÓRTICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 space-y-3">
          <span className="text-xs uppercase font-bold text-vortice-700 tracking-wider">
            Metodología de trabajo
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            ¿Qué significa acompañar a un equipo en la práctica?
          </h2>
          <p className="text-slate-600 text-base">
            No llegamos a dar clases teóricas. Nos involucramos en el terreno donde ocurren las decisiones cotidianas:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-vortice-50 text-vortice-900 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Observación directa
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Participamos en las instancias clave del equipo (planificaciones, retrospectivas, incidentes) para notar dónde se cortan los flujos de información y qué temas no se dicen.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-vortice-50 text-vortice-900 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Acuerdos explícitos
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Reemplazamos las suposiciones tácitas por pactos claros entre áreas: qué necesita QA para probar a tiempo, qué necesita desarrollo para no retrabajar, qué necesita el negocio para tener calma.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-vortice-50 text-vortice-900 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Destrabe de tensiones
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Facilitamos las conversaciones difíciles que se venían postergando sobre cargas de trabajo insostenibles, expectativas desajustadas o falta de autonomía.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-vortice-50 text-vortice-900 flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Retiro y autonomía
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              El objetivo de Vórtice siempre es retirarse. Instalamos capacidad en los líderes y miembros del equipo para que puedan regular sus propios procesos sin requerir presencia externa eterna.
            </p>
          </div>
        </div>
      </section>

      {/* 4. A QUIÉNES ESTÁ DIRIGIDO */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs uppercase font-bold text-vortice-700 tracking-wider">
              Casos habituales
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              ¿Cuándo tiene sentido iniciar un acompañamiento?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="text-base font-bold text-slate-900">
                Equipos en crecimiento acelerado
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Empresas que pasaron de 5 a 25 personas y donde la comunicación informal ya no funciona: empiezan a duplicarse esfuerzos, se pierden requerimientos y el fundador no puede seguir decidiéndolo todo.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="text-base font-bold text-slate-900">
                Fricción crónica entre Desarrollo y Negocio
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                El área comercial siente que ingeniería no avanza y los ingenieros sienten que el área comercial pide cosas imposibles con plazos irreales. Se requiere un puente que traduzca ambos mundos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="text-base font-bold text-slate-900">
                Post-crisis o fallas graves en producción
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tras caídas reiteradas o incidentes que dañaron la confianza con clientes finales, el equipo necesita reconstruir su seguridad psicológica y sus defensas técnicas sin cacería de brujas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaSection
          title="¿Sientes que tu equipo necesita este tipo de acompañamiento?"
          description="Conversemos 45 minutos en un diagnóstico preliminar para entender qué está pasando y definir si esta alternativa es la adecuada para tu organización."
          primaryButtonText="Agendar diagnóstico inicial"
          primaryButtonHref="/diagnostico"
          secondaryButtonText="Escribir a contacto"
          secondaryButtonHref="/contacto"
        />
      </section>
    </div>
  );
}
