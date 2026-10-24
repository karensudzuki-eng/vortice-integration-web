import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios | Vórtice Integration",
  description:
    "Servicios de QA para empresas medianas y PyMEs en Chile: Levantamiento gratuito de 30 min, puesta en marcha en 10 días y soporte mensual.",
  openGraph: {
    title: "Servicios de QA | Vórtice Integration",
    description:
      "Levantamiento gratuito de 30 minutos, puesta en marcha de QA básico y soporte mensual continuo para plataformas con software en producción.",
  },
};

export default function ServiciosPage() {
  return (
    <div className="w-full bg-qa-canvas min-h-screen">
      {/* Cabecera */}
      <section className="bg-qa-dark text-white py-16 px-6 border-b border-qa-dark">
        <div className="max-w-6xl mx-auto space-y-4">
          <span className="font-mono text-xs text-qa-blue uppercase tracking-widest block font-bold">
            // Oferta de Servicios B2B
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-none">
            Nuestros Servicios de QA
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl font-sans leading-relaxed">
            Diseñados para empresas medianas (aprox. 30 a 200 personas) que tienen software en producción y necesitan poner en marcha su aseguramiento de calidad sin burocracia ni equipos sobredimensionados.
          </p>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Servicio 01: Levantamiento */}
          <div className="bg-white border-2 border-qa-dark p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-6px_6px_0px_#0052ff]">
            <div className="space-y-4">
              <span className="font-mono text-xs text-qa-blue font-bold uppercase block">
                Fase 00 // Sin costo
              </span>
              <h2 className="text-2xl font-extrabold text-qa-dark leading-tight">
                Levantamiento QA
              </h2>
              <div>
                <span className="bg-qa-neon text-qa-dark font-mono font-extrabold text-3xl px-2 py-1 inline-block">
                  $0 USD
                </span>
                <span className="block text-xs font-mono text-gray-500 mt-2">
                  ● 30 minutos • 0 UF • Sin compromiso
                </span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed font-sans">
                Sesión técnica online de 30 minutos donde revisamos el estado de tu software, cómo prueba tu equipo hoy y dónde se generan los cuellos de botella.
              </p>
              <div className="pt-4 border-t border-gray-200 space-y-2 text-xs font-mono text-gray-700">
                <p className="font-bold text-qa-dark">Entregable en 24h hábiles:</p>
                <p>&gt; Informe escrito de 1 a 2 páginas con diagnóstico de riesgos y primeros pasos prioritarios.</p>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/levantamiento"
                className="w-full text-center inline-block bg-qa-dark text-white font-mono font-bold py-3 px-4 text-xs uppercase hover:bg-qa-blue transition-colors"
              >
                Agendar levantamiento →
              </Link>
            </div>
          </div>

          {/* Servicio 02: Puesta en marcha */}
          <div className="bg-white border-4 border-qa-blue p-8 flex flex-col justify-between relative shadow-[6px_6px_0px_#0052ff] transition-all duration-200 hover:-translate-y-1 hover:translate-x-1">
            <span className="absolute -top-4 right-4 bg-qa-blue text-white font-mono text-xs font-bold px-3 py-1 uppercase">
              Recomendado
            </span>
            <div className="space-y-4">
              <span className="font-mono text-xs text-qa-blue font-bold uppercase block">
                Fase 01 // 10 Días Hábiles
              </span>
              <h2 className="text-2xl font-extrabold text-qa-dark leading-tight">
                Puesta en Marcha QA
              </h2>
              <div>
                <span className="text-xs font-mono text-gray-500 block">desde</span>
                <span className="bg-qa-neon text-qa-dark font-mono font-extrabold text-3xl px-2 py-1 inline-block">
                  $3.400 USD
                </span>
                <span className="text-xs font-bold text-qa-dark block mt-1">+ IVA (Pymes) / 4.000 USD Empresas</span>
                <span className="inline-block bg-qa-menta text-qa-dark text-xs font-mono font-bold px-2 py-1 mt-2 border border-qa-dark">
                  Aprox. 85 UF / $3.200.000 CLP
                </span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed font-sans">
                Estructuración completa del área e integración en CI en 10 días hábiles. Dejamos el flujo funcionando sin frenar a los desarrolladores.
              </p>
              <div className="pt-4 border-t border-gray-200 space-y-1.5 text-xs text-gray-700 font-sans">
                <p className="font-bold text-qa-dark font-mono">Alcance clave:</p>
                <p>• Lineamientos y acuerdos de prueba claros</p>
                <p>• Plan y matriz de regresión continua</p>
                <p>• Automatización de los flujos críticos (Playwright / k6)</p>
                <p>• Integración en pipeline de CI/CD</p>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/levantamiento"
                className="w-full text-center inline-block bg-qa-blue text-white font-mono font-bold py-3 px-4 text-xs uppercase hover:shadow-hover-neon transition-all"
              >
                Empezar con levantamiento →
              </Link>
            </div>
          </div>

          {/* Servicio 03: Soporte mensual */}
          <div className="bg-white border-2 border-qa-dark p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-6px_6px_0px_#0052ff]">
            <div className="space-y-4">
              <span className="font-mono text-xs text-qa-blue font-bold uppercase block">
                Fase 02 // Continuidad
              </span>
              <h2 className="text-2xl font-extrabold text-qa-dark leading-tight">
                Soporte Mensual (20 hrs)
              </h2>
              <div>
                <span className="text-xs font-mono text-gray-500 block">desde</span>
                <span className="bg-qa-neon text-qa-dark font-mono font-extrabold text-3xl px-2 py-1 inline-block">
                  $850 USD
                </span>
                <span className="text-xs font-bold text-qa-dark block mt-1">/ mes + IVA (Pymes) / 1.000 USD Empresas</span>
                <span className="inline-block bg-qa-menta text-qa-dark text-xs font-mono font-bold px-2 py-1 mt-2 border border-qa-dark">
                  Aprox. 21 UF / $800.000 CLP mes
                </span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed font-sans">
                20 horas mensuales de soporte técnico dedicado para mantener suites automatizadas, auditar cobertura y acompañar despliegues críticos.
              </p>
              <div className="pt-4 border-t border-gray-200 space-y-1.5 text-xs text-gray-700 font-sans">
                <p className="font-bold text-qa-dark font-mono">Alcance mensual:</p>
                <p>• Mantenimiento de scripts de automatización</p>
                <p>• Auditoría continua de cobertura de código</p>
                <p>• Soporte técnico y validación en despliegues</p>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/levantamiento"
                className="w-full text-center inline-block bg-qa-dark text-white font-mono font-bold py-3 px-4 text-xs uppercase hover:bg-qa-blue transition-colors"
              >
                Consultar soporte →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lo que NO ofrecemos */}
      <section className="max-w-6xl mx-auto pb-16 px-6">
        <div className="bg-white border-2 border-qa-dark p-8 md:p-12 shadow-brutal-dark space-y-6">
          <span className="font-mono text-xs text-qa-blue uppercase tracking-wider block font-bold">
            // Criterios de exclusión
          </span>
          <h2 className="text-3xl font-extrabold text-qa-dark tracking-tight uppercase leading-none">
            Lo que no ofrecemos
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed max-w-2xl font-sans">
            Para asegurar calidad y velocidad en cada entrega, no aceptamos proyectos fuera de nuestro foco operativo:
          </p>

          <div className="space-y-3 font-sans text-sm text-gray-800">
            <div className="flex items-start gap-3">
              <span className="font-mono text-qa-blue font-bold">&gt;</span>
              <span><strong>Pruebas de carga y estrés masivas:</strong> No realizamos pruebas destructivas de infraestructura de alta concurrencia.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-qa-blue font-bold">&gt;</span>
              <span><strong>Empresas con área QA propia de más de 5 personas:</strong> Nuestro foco es estructurar e implementar QA donde no existe o está desordenado.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-qa-blue font-bold">&gt;</span>
              <span><strong>Venta de horas para cubrir equipos saturados:</strong> No realizamos subcontratación de horas sueltas ni &quot;body shopping&quot; sin gobierno técnico.</span>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200 text-xs font-mono text-gray-500">
            <a
              href="https://qachile.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-qa-dark hover:text-qa-blue transition-colors font-bold underline"
            >
              <span>Para pruebas de carga y estrés, revisa qachile.cl.</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
