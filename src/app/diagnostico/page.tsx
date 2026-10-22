import React from "react";
import { Metadata } from "next";
import {
  FileText,
  Clock,
  CheckCircle2,
  Sliders,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Diagnóstico de Madurez Organizacional | Sesión de 45 Minutos",
  description:
    "Identifica los desajustes reales entre personas y sistemas en tu empresa. Sesión de diagnóstico de 45 minutos y hoja de ruta clara de prioridades.",
  openGraph: {
    title: "Diagnóstico de Madurez Organizacional | Vórtice Integration",
    description:
      "Una conversación técnica y sistémica para mapear cuellos de botella reales en tu equipo de software y operaciones.",
  },
};

export default function DiagnosticoPage() {
  return (
    <div className="space-y-16 lg:space-y-20 py-8 sm:py-12">
      {/* 1. HERO CABECERA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-vortice-100 text-vortice-900 text-xs font-semibold uppercase tracking-wider">
            <Clock className="w-4 h-4 text-vortice-700" aria-hidden="true" />
            <span>Diagnóstico de 45 minutos</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Diagnóstico de madurez: miramos dónde se traba tu operación
          </h1>

          <p className="text-lg text-slate-700 leading-relaxed">
            Una sesión directa de trabajo, sin discursos de venta ni jerga teórica. Analizamos cómo se coordinan tus equipos, cómo prueban y liberan código, y por qué las cosas no están fluyendo a la velocidad o con la calma que deberían.
          </p>
        </div>
      </section>

      {/* 2. QUÉ ANALIZA Y QUÉ ENTREGA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Lo que revisamos */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-vortice-50 text-vortice-900 flex items-center justify-center font-bold">
                <Sliders className="w-5 h-5 text-vortice-800" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                Qué observamos durante la sesión
              </h2>
            </div>

            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-slate-900 block font-semibold">
                    1. El flujo real de software a producción
                  </strong>
                  Frecuencia de despliegues, cuellos de botella en testing y estabilidad real de los sistemas tras cada pase.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-slate-900 block font-semibold">
                    2. Claridad en acuerdos y criterios de calidad
                  </strong>
                  Cómo se define si una tarea está lista, quién asume la responsabilidad del testing y dónde se producen los malentendidos.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-slate-900 block font-semibold">
                    3. La dinámica humana del equipo
                  </strong>
                  Sobrecarga de personas clave (el &ldquo;héroe&rdquo; que salva todo a medianoche), niveles de fricción inter-áreas y espacios de conversación genuina.
                </div>
              </li>
            </ul>
          </div>

          {/* Lo que te entregamos */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-900 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5 text-emerald-700" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                Qué te entregamos al finalizar
              </h2>
            </div>

            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-slate-900 block font-semibold">
                    Mapa de fricciones prioritarias
                  </strong>
                  Un resumen ejecutivo de los 2 o 3 nudos críticos que explican el 80% de los retrasos y errores en tu equipo.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-slate-900 block font-semibold">
                    Ruta de acción a 90 días
                  </strong>
                  Recomendaciones concretas ordenadas por impacto y viabilidad real, sin obligarte a contratar servicios adicionales.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-slate-900 block font-semibold">
                    Claridad sobre el siguiente paso
                  </strong>
                  Te diremos con total franqueza si tu equipo necesita un acompañamiento profundo, una mejora puntual en QA con nuestra marca qachile.cl, o si pueden resolverlo internamente.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. FORMULARIO DE LEAD + AGENDAMIENTO */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" id="solicitud">
        <div className="mb-6 text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-vortice-700">
            Paso 1 de 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Solicita tu sesión de diagnóstico
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Ingresa los datos de tu empresa. Al enviar el formulario podrás abrir inmediatamente el calendario de disponibilidad.
          </p>
        </div>

        <LeadForm
          defaultLine="Diagnóstico de madurez organizacional"
          formTitle="Datos de tu equipo y contexto"
          formDescription="Esta información nos permite preparar la sesión con foco específico en tu industria y tamaño de equipo."
          submitButtonText="Enviar y pasar al calendario de agendamiento"
          showCalendarPromptOnSuccess={true}
        />
      </section>

      {/* 4. ESPACIO PREPARADO: TERMÓMETRO DE MADUREZ (FASE 2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 border border-slate-200 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-600" aria-hidden="true" />
              <span>Próximamente &bull; Fase 2</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Termómetro de Madurez Sistémica (Autoevaluación online)
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Estamos preparando una herramienta interactiva de 7 minutos que permitirá a gerentes de tecnología, fundadores y líderes de operaciones responder un breve cuestionario estructurado y obtener un índice preliminar de madurez en tres dimensiones: personas, procesos y código.
            </p>

            <div className="p-4 bg-white rounded-xl border border-dashed border-slate-300 text-xs font-mono text-slate-500 space-y-1">
              <p className="font-semibold text-slate-700">[ESPACIO PREPARADO PARA FASE 2]</p>
              <p>&bull; Componente interactivo de preguntas y ponderaciones automáticas.</p>
              <p>&bull; Gráfico de radar con puntaje en QA, comunicación y gobierno operativo.</p>
              <p>&bull; Descarga inmediata de reporte preliminar en PDF.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
