import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Calendar, ArrowRight, CheckCircle2, Shield, GitBranch, Cpu, Users } from "lucide-react";
import { LineCard } from "@/components/LineCard";
import { DiagramSystem } from "@/components/DiagramSystem";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Inicio | Vórtice Integration SpA",
  description:
    "La mayoría de las fallas no son técnicas: están en cómo las personas y los sistemas se encuentran. Descubre el marco Vórtice y nuestras líneas de servicio en Chile.",
  openGraph: {
    title: "Vórtice Integration SpA | Inicio",
    description:
      "La mayoría de las fallas no son técnicas: están en cómo las personas y los sistemas se encuentran.",
  },
};

export default function HomePage() {
  return (
    <div className="space-y-16 lg:space-y-24 py-8 sm:py-12">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-vortice-100 text-vortice-900 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Vórtice Integration SpA &bull; Chile</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              &ldquo;La mayoría de las fallas no son técnicas:{" "}
              <span className="text-vortice-800 underline decoration-emerald-500/80 decoration-4 underline-offset-8">
                están en cómo las personas y los sistemas se encuentran.
              </span>
              &rdquo;
            </h1>

            <p className="text-lg text-slate-700 leading-relaxed max-w-2xl">
              Ayudamos a empresas y pymes a mirar lo que realmente traba sus operaciones y desarrollos. Conectamos la calidad del software con las dinámicas humanas de quienes lo construyen y usan, sin discursos corporativos vacíos.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/diagnostico"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white bg-vortice-900 hover:bg-vortice-800 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vortice-900 text-center"
              >
                <Calendar className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                <span>Agenda un diagnóstico de 45 minutos</span>
              </Link>

              <Link
                href="/vortice"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-slate-800 bg-white hover:bg-slate-100 transition-colors border border-slate-300 focus:outline-none focus:ring-2 focus:ring-vortice-700 text-center"
              >
                <span>Conoce nuestro marco de trabajo</span>
                <ArrowRight className="w-4 h-4 text-slate-500" aria-hidden="true" />
              </Link>
            </div>

            <div className="pt-4 flex items-center gap-6 text-xs text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Conversación directa
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Sin venta forzada
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Foco en problemas reales
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <DiagramSystem />
          </div>
        </div>
      </section>

      {/* 2. BLOQUE: NUESTRAS LÍNEAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="lines-heading">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase font-semibold text-vortice-700 tracking-wider">
            Estructura del Grupo
          </span>
          <h2 id="lines-heading" className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Nuestras líneas de acción
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Abordamos los problemas operacionales desde la técnica, los acuerdos de equipo y el flujo integral del negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Línea 1: QA y automatización -> qachile.cl */}
          <LineCard
            title="QA y automatización"
            tagline="Aseguramiento de software y pruebas funcionales"
            description="Línea especializada en testing manual, automatización de pruebas regresivas y control de calidad en ciclos de entrega continua. Este servicio se opera y comercializa a través de nuestra marca especializada QA Chile."
            features={[
              "Automatización de pruebas end-to-end",
              "Testing funcional de plataformas web y móviles",
              "Integración en pipelines de CI/CD",
              "Reportabilidad objetiva de defectos",
            ]}
            href="https://qachile.cl"
            isExternal={true}
            ctaText="Ver servicios en qachile.cl"
            badge="Marca de Servicio"
            icon={<Cpu className="w-6 h-6 text-vortice-800" />}
          />

          {/* Línea 2: Diagnóstico de madurez organizacional -> /diagnostico */}
          <LineCard
            title="Diagnóstico de madurez"
            tagline="Mapeo de fricciones entre equipos y sistemas"
            description="Una radiografía práctica de 45 minutos para identificar dónde se frena el trabajo: desajustes de comunicación, supuestos en el código, traspasos poco claros o procesos que la gente evade por burocráticos."
            features={[
              "Identificación de cuellos de botella invisibles",
              "Evaluación del encuentro entre personas y tecnología",
              "Informe de brechas y prioridades operativas",
              "Ruta de acción clara para los siguientes 90 días",
            ]}
            href="/diagnostico"
            isExternal={false}
            ctaText="Solicitar diagnóstico"
            badge="Marco Vórtice"
            icon={<GitBranch className="w-6 h-6 text-vortice-800" />}
          />

          {/* Línea 3: Acompañamiento en transformación -> /acompanamiento */}
          <LineCard
            title="Acompañamiento en transformación"
            tagline="Facilitación sistémica del cambio operacional"
            description="Acompañamos a líderes y equipos técnicos en la adopción real de nuevas formas de trabajo. Sin recetas rígidas ni promesas mágicas: facilitamos acuerdos sostenibles y destrabamos la colaboración diaria."
            features={[
              "Alineación práctica de roles y expectativas",
              "Destrabe de conversaciones difíciles en el equipo",
              "Adopción cultural de buenas prácticas técnicas",
              "Seguimiento cercano sin dependencia externa",
            ]}
            href="/acompanamiento"
            isExternal={false}
            ctaText="Conocer acompañamiento"
            badge="Acompañamiento"
            icon={<Users className="w-6 h-6 text-vortice-800" />}
          />
        </div>
      </section>

      {/* 3. BLOQUE DE ENFOQUE: 3 IDEAS MÁXIMO, SIN JERGA */}
      <section className="bg-white border-y border-slate-200 py-16" aria-labelledby="approach-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs uppercase font-semibold text-vortice-700 tracking-wider">
              En qué creemos
            </span>
            <h2 id="approach-heading" className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Nuestro enfoque en tres ideas simples
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Sin metodologías de moda ni palabras rebuscadas. Lo que hemos comprobado en años de operación real:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-vortice-900 text-white font-bold flex items-center justify-center text-lg">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Los errores casi nunca nacen en el código
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cuando un sistema falla en producción, casi siempre venía de un requerimiento ambiguo, un silencio en una reunión de planificación o una fecha límite fijada sin mirar la capacidad real del equipo. Resolver el código sin tocar la dinámica solo posterga el siguiente fallo.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-vortice-900 text-white font-bold flex items-center justify-center text-lg">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Automatizar el caos solo lo hace más rápido
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Comprar herramientas caras o agregar suites de tests automáticos sobre un flujo desordenado genera frustración y costos innecesarios. Primero ordenamos los criterios, aclaramos responsabilidades y recién entonces la técnica multiplica el valor.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-vortice-900 text-white font-bold flex items-center justify-center text-lg">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Mirar el sistema completo evita parches eternos
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Un equipo no funciona por partes aisladas. El área comercial, el equipo de desarrollo, operaciones y los usuarios finales forman una red viva. Si no se observa cómo interactúan todos ellos, se termina parchando el síntoma y la herida sigue abierta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BLOQUE DE CASOS Y POLÍTICA DE CONFIDENCIALIDAD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="cases-heading">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vortice-100 text-vortice-900 text-xs font-semibold uppercase tracking-wider">
              <Shield className="w-4 h-4 text-emerald-600" aria-hidden="true" />
              <span>Confidencialidad y Experiencia de Campo</span>
            </div>

            <h2 id="cases-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Casos de estudio y experiencias de campo
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              En Vórtice operamos bajo estrictos acuerdos de confidencialidad (NDA) con organizaciones de misión crítica en industrias como HealthTech, FinTech y servicios esenciales. Por respeto a nuestros clientes, no publicamos logos comerciales ni métricas ficticias con fines publicitarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">
                Creación de áreas de QA desde cero
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Estructuración de procesos de testing, diseño de roles y escalamiento de células técnicas desde 2 hasta 10 especialistas con trazabilidad total.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">
                Protocolos Go/No-Go y mitigación de riesgo
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Matrices de prueba E2E y acuerdos de entrega previa a producción que reducen incidentes graves y evitan despliegues de fin de semana con desgaste.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">
                Integración sistémica TI y Operaciones
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Marcos de trabajo donde comités de dirección, ingeniería y áreas usuarias toman decisiones compartidas con visibilidad técnica confiable.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-slate-500 max-w-xl mx-auto">
            Las bitácoras detalladas y aprendizajes anonimizados se publicarán en este espacio conforme concluyan los ciclos activos de acompañamiento.
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaSection
          title="¿Conversamos 45 minutos sobre tu operación?"
          description="Sin presentaciones comerciales prefabricadas. Revisamos juntos dónde están ocurriendo los desacoples en tu equipo y qué caminos concretos tienen sentido para tu empresa."
          primaryButtonText="Agenda un diagnóstico de 45 minutos"
          primaryButtonHref="/diagnostico"
          secondaryButtonText="Escríbenos una consulta"
          secondaryButtonHref="/contacto"
        />
      </section>
    </div>
  );
}
