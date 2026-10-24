import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, XCircle } from "lucide-react";
import { TerminalRunner } from "@/components/TerminalRunner";

export const metadata: Metadata = {
  title: "Inicio | Vórtice Integration",
  description:
    "Tu software sale sin QA. Te ayudamos a ponerlo en marcha. Para empresas medianas que quieren dejar de probar a última hora. Empiezas con un levantamiento de 30 minutos, gratuito y sin compromiso.",
  openGraph: {
    title: "Vórtice Integration | Puesta en Marcha de QA",
    description:
      "Tu software sale sin QA. Te ayudamos a ponerlo en marcha. Levantamiento de 30 minutos online y gratuito.",
  },
};

export default function HomePage() {
  return (
    <div className="w-full">
      {/* SECCIÓN 1: HEADER & HERO SECTION */}
      <section className="bg-qa-dark text-white py-20 px-6 border-b border-qa-dark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido Principal */}
          <div>
            <span className="font-mono text-sm text-qa-blue uppercase tracking-wider block mb-4">
              // Vórtice QA Pipeline
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-none mb-6">
              Tu software sale sin QA. <br />
              <span className="text-qa-blue">Te ayudamos a ponerlo en marcha.</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg font-sans">
              Para empresas medianas que quieren dejar de probar a última hora. Empiezas con un levantamiento de 30 minutos, gratuito y sin compromiso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link
                href="/levantamiento"
                className="inline-block bg-qa-blue text-white px-8 py-4 font-bold font-mono text-base transition-all duration-150 transform hover:-translate-y-1 active:translate-y-0 border-2 border-qa-blue hover:shadow-[4px_4px_0px_#fff100]"
              >
                Agendar levantamiento de 30 min →
              </Link>
              <div className="space-y-1">
                <span className="text-xs text-qa-menta font-mono block">
                  ● Online • Gratis • Sin compromiso
                </span>
                <span className="text-xs text-gray-500 font-mono block">
                  Planes adaptados a PyMEs y Empresas
                </span>
              </div>
            </div>
          </div>

          {/* Consola Playwright / Terminal */}
          <TerminalRunner />
        </div>
      </section>

      {/* SECCIÓN 2: PROBLEMAS HABITUALES (DOLORES BRUTALISTAS) */}
      <section className="bg-qa-canvas py-20 px-6 border-b border-qa-dark" aria-labelledby="pain-heading">
        <div className="max-w-6xl mx-auto">
          <span className="font-mono text-xs text-qa-blue uppercase block mb-2 font-bold">
            // Diagnóstico inicial
          </span>
          <h2 id="pain-heading" className="text-3xl lg:text-4xl font-extrabold text-qa-dark mb-12 tracking-tight">
            ¿Te pasa alguno de estos?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tarjeta 01 */}
            <div className="bg-white border-2 border-qa-dark p-8 transition-all duration-200 transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-6px_6px_0px_#0052ff] group">
              <span className="font-mono text-4xl font-extrabold text-qa-blue block mb-4 transition-colors group-hover:text-qa-dark">
                01
              </span>
              <p className="text-qa-dark font-medium text-lg leading-snug">
                Los bugs aparecen en producción después de cada despliegue crítico.
              </p>
            </div>

            {/* Tarjeta 02 */}
            <div className="bg-white border-2 border-qa-dark p-8 transition-all duration-200 transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-6px_6px_0px_#0052ff] group">
              <span className="font-mono text-4xl font-extrabold text-qa-blue block mb-4 transition-colors group-hover:text-qa-dark">
                02
              </span>
              <p className="text-qa-dark font-medium text-lg leading-snug">
                El desarrollador prueba a última hora y a la rápida antes de entregar al cliente.
              </p>
            </div>

            {/* Tarjeta 03 */}
            <div className="bg-white border-2 border-qa-dark p-8 transition-all duration-200 transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-6px_6px_0px_#0052ff] group">
              <span className="font-mono text-4xl font-extrabold text-qa-blue block mb-4 transition-colors group-hover:text-qa-dark">
                03
              </span>
              <p className="text-qa-dark font-medium text-lg leading-snug">
                Nadie en el equipo sabe con certeza qué está probado y qué no en la plataforma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: QUÉ HACEMOS (LINEAMIENTOS, AUTOMATIZACIÓN, SOPORTE) */}
      <section className="bg-qa-canvas py-20 px-6 border-b border-qa-dark" aria-labelledby="what-we-do-heading">
        <div className="max-w-6xl mx-auto">
          <span className="font-mono text-xs text-qa-blue uppercase block mb-2 font-bold">
            // Solución de ingeniería
          </span>
          <h2 id="what-we-do-heading" className="text-3xl lg:text-4xl font-extrabold text-qa-dark mb-4 tracking-tight">
            Qué hacemos
          </h2>
          <p className="text-gray-600 text-base max-w-xl mb-12 font-sans">
            Implementamos un sistema de aseguramiento de calidad técnico, pragmático e integrado directamente en tu repositorio.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bloque 01: Lineamientos */}
            <div className="bg-white border-2 border-qa-dark p-8 transition-all duration-200 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-6px_6px_0px_#0052ff]">
              <span className="bg-qa-dark text-white font-mono text-xs px-2.5 py-1 uppercase font-bold inline-block mb-4">
                01 // Criterios
              </span>
              <h3 className="text-2xl font-extrabold text-qa-dark mb-3">Lineamientos</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-sans">
                Lineamientos de prueba claros, definición de casos de uso críticos, matriz de regresión y criterios explícitos de pase a producción.
              </p>
            </div>

            {/* Bloque 02: Automatización */}
            <div className="bg-white border-2 border-qa-dark p-8 transition-all duration-200 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-6px_6px_0px_#0052ff]">
              <span className="bg-qa-blue text-white font-mono text-xs px-2.5 py-1 uppercase font-bold inline-block mb-4">
                02 // CI/CD
              </span>
              <h3 className="text-2xl font-extrabold text-qa-dark mb-3">Automatización</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-sans">
                Automatización de los flujos críticos del negocio en Playwright e integración directa en tu pipeline de CI/CD para bloquear regresiones antes del despliegue.
              </p>
            </div>

            {/* Bloque 03: Soporte */}
            <div className="bg-white border-2 border-qa-dark p-8 transition-all duration-200 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-6px_6px_0px_#0052ff]">
              <span className="bg-qa-menta text-qa-dark border border-qa-dark font-mono text-xs px-2.5 py-1 uppercase font-bold inline-block mb-4">
                03 // Continuidad
              </span>
              <h3 className="text-2xl font-extrabold text-qa-dark mb-3">Soporte</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-sans">
                20 horas mensuales dedicadas a la revisión de cobertura, mantenimiento de pruebas ante cambios de interfaz y acompañamiento en despliegues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: CÓMO FUNCIONA (TRES PASOS) */}
      <section className="bg-qa-canvas py-20 px-6 border-b border-qa-dark" aria-labelledby="how-it-works-heading">
        <div className="max-w-6xl mx-auto">
          <span className="font-mono text-xs text-qa-blue uppercase block mb-2 font-bold">
            // Metodología ágil
          </span>
          <h2 id="how-it-works-heading" className="text-3xl lg:text-4xl font-extrabold text-qa-dark mb-12 tracking-tight">
            Cómo funciona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Paso 1 */}
            <div className="bg-white border-2 border-qa-dark p-6 relative z-10">
              <span className="text-xs font-mono font-bold text-qa-blue block mb-2">PASO 01</span>
              <h3 className="text-xl font-bold text-qa-dark mb-2">Levantamiento (30 min)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sesión online gratuita para entender tu arquitectura y estado de pruebas. Recibes un informe de 1 a 2 páginas con diagnóstico y primeros pasos en 24h.
              </p>
            </div>

            {/* Paso 2 */}
            <div className="bg-white border-2 border-qa-dark p-6 relative z-10">
              <span className="text-xs font-mono font-bold text-qa-blue block mb-2">PASO 02</span>
              <h3 className="text-xl font-bold text-qa-dark mb-2">Puesta en Marcha (10 días)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Estructuramos el área de QA básica: matriz de regresión, automatización de flujos críticos e integración con tu pipeline de CI en 10 días hábiles.
              </p>
            </div>

            {/* Paso 3 */}
            <div className="bg-white border-2 border-qa-dark p-6 relative z-10">
              <span className="text-xs font-mono font-bold text-qa-blue block mb-2">PASO 03</span>
              <h3 className="text-xl font-bold text-qa-dark mb-2">Continuidad Mensual</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bolsa de 20 horas mensuales para asegurar que cada nueva funcionalidad esté cubierta y tus suites automatizadas sigan estables y actualizadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: PRECIOS */}
      <section className="bg-qa-dark text-white py-20 px-6 border-b border-qa-dark" aria-labelledby="pricing-heading">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="font-mono text-xs text-qa-blue uppercase block mb-2 font-bold">
                // Transparencia Total
              </span>
              <h2 id="pricing-heading" className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Precios
              </h2>
            </div>
            {/* Badge de Ajuste PyME */}
            <div className="mt-4 md:mt-0 space-y-1 text-right">
              <span className="bg-qa-menta text-qa-dark font-mono font-bold text-xs px-3 py-2 border border-white uppercase tracking-tight inline-block">
                Precio especial para pymes.
              </span>
            </div>
          </div>

          {/* Contenedor de Planes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan 01: Levantamiento */}
            <div className="bg-white text-qa-dark border-2 border-white p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-qa-blue font-bold uppercase block mb-2">
                  Diagnóstico Inicial
                </span>
                <h3 className="text-2xl font-extrabold mb-4">Levantamiento 30 min</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Evaluación técnica sin costo para revisar el estado actual de tu software y definir la estrategia de QA.
                </p>
                <div className="mb-6">
                  <span className="bg-qa-neon text-qa-dark font-extrabold text-4xl px-2 py-1 inline-block">
                    $0 USD
                  </span>
                  <span className="block text-xs font-mono text-gray-500 mt-2">
                    ● 0 UF — Sin compromiso
                  </span>
                </div>
              </div>
              <Link
                href="/levantamiento"
                className="w-full text-center bg-qa-dark text-white font-mono font-bold py-3 px-4 border-2 border-qa-dark hover:bg-qa-blue hover:border-qa-blue transition-colors block text-sm uppercase"
              >
                Agendar Sesión Gratis
              </Link>
            </div>

            {/* Plan 02: Puesta en Marcha (Destacado Principal) */}
            <div className="bg-white text-qa-dark border-4 border-qa-blue p-8 flex flex-col justify-between relative shadow-[8px_8px_0px_#0052ff]">
              <span className="absolute -top-4 right-4 bg-qa-blue text-white font-mono text-xs font-bold px-3 py-1 uppercase">
                Recomendado
              </span>
              <div>
                <span className="font-mono text-xs text-qa-blue font-bold uppercase block mb-2">
                  Implementación Base (10 días)
                </span>
                <h3 className="text-2xl font-extrabold mb-4">Puesta en Marcha</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Lineamientos de pruebas, plan de regresión, automatización de flujos críticos e integración en CI en 10 días hábiles.
                </p>
                <div className="mb-6 space-y-2">
                  <div>
                    <span className="text-xs font-mono text-gray-500 block">Empresas desde</span>
                    <span className="text-xl font-bold text-gray-800 font-mono">4.000 USD + IVA</span>
                  </div>
                  <div className="pt-1 border-t border-gray-200">
                    <span className="text-xs font-mono text-qa-blue font-bold block">Precio especial para pymes:</span>
                    <span className="bg-qa-neon text-qa-dark font-extrabold text-3xl px-2 py-0.5 inline-block">
                      desde $3.400 USD
                    </span>
                    <span className="text-xs font-bold text-qa-dark block mt-0.5">+ IVA</span>
                    <span className="inline-block bg-qa-menta text-qa-dark text-xs font-mono font-bold px-2 py-0.5 mt-1 border border-qa-dark">
                      Aprox. 85 UF / $3.200.000 CLP
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href="/levantamiento"
                className="w-full text-center bg-qa-blue text-white font-mono font-bold py-3 px-4 hover:shadow-[4px_4px_0px_#fff100] transition-all block text-sm uppercase"
              >
                Solicitar Cotización →
              </Link>
            </div>

            {/* Plan 03: Soporte y Continuidad Mensual */}
            <div className="bg-white text-qa-dark border-2 border-white p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-qa-blue font-bold uppercase block mb-2">
                  Continuidad QA (20 hrs)
                </span>
                <h3 className="text-2xl font-extrabold mb-4">Soporte Mensual</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  20 horas mensuales: revisión de cobertura, mantenimiento de pruebas y apoyo en despliegues.
                </p>
                <div className="mb-6 space-y-2">
                  <div>
                    <span className="text-xs font-mono text-gray-500 block">Empresas desde</span>
                    <span className="text-xl font-bold text-gray-800 font-mono">1.000 USD + IVA / mes</span>
                  </div>
                  <div className="pt-1 border-t border-gray-200">
                    <span className="text-xs font-mono text-qa-blue font-bold block">Precio especial para pymes:</span>
                    <span className="bg-qa-neon text-qa-dark font-extrabold text-3xl px-2 py-0.5 inline-block">
                      desde $850 USD
                    </span>
                    <span className="text-xs font-bold text-qa-dark block mt-0.5">/ mes + IVA</span>
                    <span className="inline-block bg-qa-menta text-qa-dark text-xs font-mono font-bold px-2 py-0.5 mt-1 border border-qa-dark">
                      Aprox. 21 UF / $800.000 CLP mes
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href="/levantamiento"
                className="w-full text-center bg-qa-dark text-white font-mono font-bold py-3 px-4 border-2 border-qa-dark hover:bg-qa-blue hover:border-qa-blue transition-colors block text-sm uppercase"
              >
                Contratar Plan Mensual
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: PARA QUIÉN ES Y PARA QUIÉN NO */}
      <section className="bg-qa-canvas py-20 px-6 border-b border-qa-dark" aria-labelledby="fit-heading">
        <div className="max-w-6xl mx-auto">
          <span className="font-mono text-xs text-qa-blue uppercase block mb-2 font-bold">
            // Calificación de encaje
          </span>
          <h2 id="fit-heading" className="text-3xl lg:text-4xl font-extrabold text-qa-dark mb-12 tracking-tight">
            Para quién es y para quién no
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Para quién es */}
            <div className="bg-white border-2 border-qa-dark p-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-qa-blue" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-qa-dark">Para quién es</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-qa-blue font-bold font-mono">&gt;</span>
                  <span>Empresas medianas y PyMEs (aprox. 30 a 200 personas) con software en producción y sin área de QA.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-qa-blue font-bold font-mono">&gt;</span>
                  <span>Equipos de desarrollo que pierden tiempo apagando incendios y corrigiendo bugs tras cada despliegue.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-qa-blue font-bold font-mono">&gt;</span>
                  <span>CTOs y líderes de ingeniería que necesitan automatización de pruebas en CI en menos de un mes.</span>
                </li>
              </ul>
            </div>

            {/* Para quién no es */}
            <div className="bg-white border-2 border-qa-dark p-8">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-6 h-6 text-gray-500" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-qa-dark">Para quién no es</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold font-mono">&gt;</span>
                  <span>Empresas que ya cuentan con un área interna de QA estructurada de más de 5 personas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold font-mono">&gt;</span>
                  <span>Organizaciones que buscan pruebas masivas de carga y estrés (para eso recomendamos qachile.cl).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold font-mono">&gt;</span>
                  <span>Venta de horas de soporte sin estructuración de procesos ni integración en CI.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 7: CTA FINAL */}
      <section className="bg-qa-dark text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="font-mono text-xs text-qa-blue uppercase tracking-widest block font-bold">
            // Empieza hoy
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-none text-white">
            Agenda tu levantamiento de 30 minutos.
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto font-sans leading-relaxed">
            Sesión técnica online, 100% gratuita y sin compromiso comercial. Te entregamos un informe claro para ordenar las pruebas de tu software.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/levantamiento"
              className="inline-block bg-qa-blue text-white px-8 py-4 font-bold font-mono text-base transition-all duration-150 transform hover:-translate-y-1 active:translate-y-0 border-2 border-qa-blue hover:shadow-[4px_4px_0px_#fff100]"
            >
              Agendar levantamiento gratuito →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
