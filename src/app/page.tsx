import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Inicio | Vórtice Integration",
  description:
    "Tu software sale sin QA. Te ayudamos a ponerlo en marcha. Para empresas medianas que quieren dejar de probar a última hora. Empiezas con un levantamiento de 30 minutos, gratuito y sin compromiso.",
  openGraph: {
    title: "Vórtice Integration | Puesta en Marcha de QA",
    description:
      "Tu software sale sin QA. Te ayudamos a ponerlo en marcha. Levantamiento de 30 minutos, gratuito y sin compromiso.",
  },
};

export default function HomePage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-20">
      {/* 1. HERO */}
      <section className="pt-8 sm:pt-14 pb-4">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-mint text-dark text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-tag">
            <span>Levantamiento online y gratuito</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight text-dark uppercase leading-tightest">
            Tu software sale sin QA. <br />
            Te ayudamos a ponerlo en marcha.
          </h1>

          <p className="text-lg sm:text-xl text-slate leading-relaxed max-w-2xl">
            Para empresas medianas que quieren dejar de probar a última hora. Empiezas con un levantamiento de 30 minutos, gratuito y sin compromiso.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/levantamiento"
              className="inline-flex items-center justify-center gap-2 bg-dark text-white text-base font-medium px-6 py-3.5 rounded-lg hover:bg-dark/90 transition-colors"
            >
              <span>Agendar levantamiento de 30 min</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <p className="text-xs text-smoke">
            Online &bull; Gratis &bull; Sin compromiso
          </p>
        </div>
      </section>

      {/* 2. ¿TE PASA ALGUNO DE ESTOS? */}
      <section aria-labelledby="pain-points-heading" className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-smoke block">
            Problemas habituales
          </span>
          <h2
            id="pain-points-heading"
            className="font-display text-3xl sm:text-5xl text-dark tracking-tight uppercase leading-tightest"
          >
            ¿Te pasa alguno de estos?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-32 p-6 sm:p-7 space-y-2 border border-ash/30">
            <span className="font-display text-4xl text-dark block leading-none">01</span>
            <p className="text-base text-dark font-medium leading-snug">
              Los bugs aparecen en producción después de cada despliegue.
            </p>
          </div>

          <div className="bg-white rounded-32 p-6 sm:p-7 space-y-2 border border-ash/30">
            <span className="font-display text-4xl text-dark block leading-none">02</span>
            <p className="text-base text-dark font-medium leading-snug">
              El desarrollador prueba a última hora y con prisa antes de entregar.
            </p>
          </div>

          <div className="bg-white rounded-32 p-6 sm:p-7 space-y-2 border border-ash/30">
            <span className="font-display text-4xl text-dark block leading-none">03</span>
            <p className="text-base text-dark font-medium leading-snug">
              Nadie en el equipo sabe con certeza qué está probado y qué no.
            </p>
          </div>
        </div>
      </section>

      {/* 3. QUÉ HACEMOS (MÁXIMO 2 LÍNEAS POR TARJETA) */}
      <section aria-labelledby="what-we-do-heading" className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-smoke block">
            Nuestra solución
          </span>
          <h2
            id="what-we-do-heading"
            className="font-display text-3xl sm:text-5xl text-dark tracking-tight uppercase leading-tightest"
          >
            Qué hacemos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tarjeta 1: Lineamientos */}
          <div className="bg-white rounded-32 p-6 sm:p-7 space-y-3 border border-ash/30 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="inline-block bg-canvas text-dark text-xs font-semibold uppercase px-2.5 py-1 rounded-tag">
                Fase 1
              </span>
              <h3 className="font-display text-3xl text-dark tracking-tight uppercase leading-none">
                Lineamientos
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                Definimos qué se prueba, cuándo y con qué criterios de aceptación antes de cada paso a producción.
              </p>
            </div>
          </div>

          {/* Tarjeta 2: Automatización */}
          <div className="bg-white rounded-32 p-6 sm:p-7 space-y-3 border border-ash/30 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="inline-block bg-canvas text-dark text-xs font-semibold uppercase px-2.5 py-1 rounded-tag">
                Fase 2
              </span>
              <h3 className="font-display text-3xl text-dark tracking-tight uppercase leading-none">
                Automatización
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                Automatizamos los flujos críticos de tu software e integramos las pruebas en tu pipeline de CI.
              </p>
            </div>
          </div>

          {/* Tarjeta 3: Soporte */}
          <div className="bg-white rounded-32 p-6 sm:p-7 space-y-3 border border-ash/30 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="inline-block bg-canvas text-dark text-xs font-semibold uppercase px-2.5 py-1 rounded-tag">
                Continuidad
              </span>
              <h3 className="font-display text-3xl text-dark tracking-tight uppercase leading-none">
                Soporte
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                20 horas mensuales de apoyo técnico para mantener pruebas, revisar cobertura y asistir en despliegues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CÓMO FUNCIONA */}
      <section aria-labelledby="how-it-works-heading" className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-smoke block">
            Paso a paso
          </span>
          <h2
            id="how-it-works-heading"
            className="font-display text-3xl sm:text-5xl text-dark tracking-tight uppercase leading-tightest"
          >
            Cómo funciona
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-32 p-6 sm:p-7 space-y-3 border border-ash/30">
            <span className="w-10 h-10 rounded-full bg-dark text-white flex items-center justify-center font-display text-xl leading-none">
              1
            </span>
            <h3 className="font-display text-2xl text-dark tracking-tight uppercase">
              Agendas
            </h3>
            <p className="text-sm text-slate leading-relaxed">
              Coordinas una videollamada de 30 minutos directamente en nuestro calendario online.
            </p>
          </div>

          <div className="bg-white rounded-32 p-6 sm:p-7 space-y-3 border border-ash/30">
            <span className="w-10 h-10 rounded-full bg-dark text-white flex items-center justify-center font-display text-xl leading-none">
              2
            </span>
            <h3 className="font-display text-2xl text-dark tracking-tight uppercase">
              Recibes el informe
            </h3>
            <p className="text-sm text-slate leading-relaxed">
              En 24 horas hábiles te enviamos un documento de 1 a 2 páginas con el diagnóstico actual y los primeros pasos.
            </p>
          </div>

          <div className="bg-white rounded-32 p-6 sm:p-7 space-y-3 border border-ash/30">
            <span className="w-10 h-10 rounded-full bg-dark text-white flex items-center justify-center font-display text-xl leading-none">
              3
            </span>
            <h3 className="font-display text-2xl text-dark tracking-tight uppercase">
              Decides si avanzamos
            </h3>
            <p className="text-sm text-slate leading-relaxed">
              Tú decides si quieres poner en marcha el área con nosotros o implementarlo por tu cuenta. Sin presiones.
            </p>
          </div>
        </div>
      </section>

      {/* 5. PRECIOS */}
      <section aria-labelledby="pricing-heading" className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-smoke block">
            Inversión transparente
          </span>
          <h2
            id="pricing-heading"
            className="font-display text-3xl sm:text-5xl text-dark tracking-tight uppercase leading-tightest"
          >
            Precios
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tarjeta 1: Levantamiento */}
          <div className="bg-white rounded-32 p-6 sm:p-8 space-y-5 border border-ash/30 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="bg-mint text-dark text-xs font-bold uppercase px-3 py-1 rounded-tag inline-block">
                Primer paso
              </span>
              <h3 className="font-display text-3xl text-dark tracking-tight uppercase leading-none">
                Levantamiento QA
              </h3>
              <div className="pt-2">
                <span className="text-4xl font-extrabold text-dark tracking-tight">$0 USD</span>
                <span className="text-xs text-smoke block mt-1">Gratuito · 30 minutos</span>
              </div>
              <ul className="text-xs text-slate space-y-2 pt-2 border-t border-canvas">
                <li>&bull; Sesión online de 30 minutos</li>
                <li>&bull; Revisión de cómo prueban hoy</li>
                <li>&bull; Informe escrito de 1 a 2 páginas</li>
              </ul>
            </div>
            <Link
              href="/levantamiento"
              className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-dark text-white text-sm font-medium hover:bg-dark/90 transition-colors"
            >
              Agendar gratis
            </Link>
          </div>

          {/* Tarjeta 2: Puesta en marcha */}
          <div className="bg-white rounded-32 p-6 sm:p-8 space-y-5 border-2 border-dark flex flex-col justify-between">
            <div className="space-y-3">
              <span className="bg-dark text-white text-xs font-bold uppercase px-3 py-1 rounded-tag inline-block">
                Implementación
              </span>
              <h3 className="font-display text-3xl text-dark tracking-tight uppercase leading-none">
                Puesta en marcha QA
              </h3>
              <div className="pt-2">
                <span className="text-xs uppercase text-smoke block">Desde</span>
                <span className="text-4xl font-extrabold text-dark tracking-tight">4.000 USD</span>
                <span className="text-xs text-smoke block mt-1">+ IVA (Pymes desde 3.400 USD + IVA)</span>
              </div>
              <ul className="text-xs text-slate space-y-2 pt-2 border-t border-canvas">
                <li>&bull; Plazo: 10 días hábiles</li>
                <li>&bull; Lineamientos y plan de regresión</li>
                <li>&bull; Automatización de flujos críticos</li>
                <li>&bull; Integración en pipeline de CI</li>
              </ul>
            </div>
            <Link
              href="/levantamiento"
              className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-dark text-white text-sm font-medium hover:bg-dark/90 transition-colors"
            >
              Iniciar con levantamiento
            </Link>
          </div>

          {/* Tarjeta 3: Soporte mensual */}
          <div className="bg-white rounded-32 p-6 sm:p-8 space-y-5 border border-ash/30 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="bg-canvas text-dark text-xs font-bold uppercase px-3 py-1 rounded-tag inline-block">
                Continuidad
              </span>
              <h3 className="font-display text-3xl text-dark tracking-tight uppercase leading-none">
                Soporte Mensual (20 hrs)
              </h3>
              <div className="pt-2">
                <span className="text-xs uppercase text-smoke block">Desde</span>
                <span className="text-4xl font-extrabold text-dark tracking-tight">1.000 USD</span>
                <span className="text-xs text-smoke block mt-1">+ IVA al mes (Pymes desde 850 USD + IVA)</span>
              </div>
              <ul className="text-xs text-slate space-y-2 pt-2 border-t border-canvas">
                <li>&bull; 20 horas mensuales dedicadas</li>
                <li>&bull; Mantenimiento de pruebas automáticas</li>
                <li>&bull; Revisión de cobertura de código</li>
                <li>&bull; Apoyo técnico en despliegues</li>
              </ul>
            </div>
            <Link
              href="/levantamiento"
              className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-dark text-white text-sm font-medium hover:bg-dark/90 transition-colors"
            >
              Consultar disponibilidad
            </Link>
          </div>
        </div>

        <div className="text-center pt-2">
          <span className="inline-block bg-mint px-4 py-1.5 rounded-tag text-xs font-semibold text-dark">
            Precio especial para pymes.
          </span>
        </div>
      </section>

      {/* 6. PARA QUIÉN ES Y PARA QUIÉN NO */}
      <section aria-labelledby="fit-heading" className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-smoke block">
            Criterios claros
          </span>
          <h2
            id="fit-heading"
            className="font-display text-3xl sm:text-5xl text-dark tracking-tight uppercase leading-tightest"
          >
            Para quién es y para quién no
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Para quién es */}
          <div className="bg-white rounded-32 p-6 sm:p-8 space-y-4 border border-ash/30">
            <div className="flex items-center gap-2 text-dark font-display text-2xl uppercase">
              <CheckCircle2 className="w-5 h-5 text-dark" aria-hidden="true" />
              <span>Para quién es</span>
            </div>
            <ul className="space-y-3 text-sm text-slate">
              <li className="flex items-start gap-2">
                <span className="text-dark font-bold">&bull;</span>
                <span>Empresas medianas (aprox. 30 a 200 personas) con software en producción y sin área de QA.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-dark font-bold">&bull;</span>
                <span>Equipos de desarrollo que pierden tiempo corrigiendo fallas repetitivas tras cada despliegue.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-dark font-bold">&bull;</span>
                <span>CTOs y líderes que necesitan una base de pruebas ordenada y automatizada en CI en menos de un mes.</span>
              </li>
            </ul>
          </div>

          {/* Para quién no es */}
          <div className="bg-white rounded-32 p-6 sm:p-8 space-y-4 border border-ash/30">
            <div className="flex items-center gap-2 text-dark font-display text-2xl uppercase">
              <XCircle className="w-5 h-5 text-dark" aria-hidden="true" />
              <span>Para quién no es</span>
            </div>
            <ul className="space-y-3 text-sm text-slate">
              <li className="flex items-start gap-2">
                <span className="text-dark font-bold">&bull;</span>
                <span>Empresas que ya cuentan con un área propia de QA de más de 5 personas.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-dark font-bold">&bull;</span>
                <span>Organizaciones que buscan pruebas masivas de carga y estrés (para eso recomendamos qachile.cl).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-dark font-bold">&bull;</span>
                <span>Venta de horas sueltas o "staff augmentation" para parchar equipos saturados sin estructurar procesos.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. CTA FINAL EN BLOQUE NEGRO */}
      <section className="bg-dark text-white rounded-32 p-8 sm:p-12 lg:p-16 text-center space-y-6">
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white uppercase leading-tightest max-w-3xl mx-auto">
          Agenda tu levantamiento de 30 minutos.
        </h2>

        <p className="text-smoke text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Sesión online, gratuita y sin compromiso comercial. Te entregamos un informe claro para ordenar las pruebas de tu software.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/levantamiento"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-dark text-base font-semibold px-6 py-3.5 rounded-lg hover:bg-white/90 transition-colors"
          >
            <span>Agendar levantamiento gratuito</span>
            <ArrowRight className="w-4 h-4 text-dark" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
