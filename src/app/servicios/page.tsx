import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de QA para empresas medianas y pymes en Chile: Levantamiento gratuito de 30 min, puesta en marcha de QA en 10 días y soporte mensual.",
  openGraph: {
    title: "Servicios de QA | Vórtice Integration",
    description:
      "Levantamiento gratuito de 30 minutos, puesta en marcha de QA básico y soporte mensual para empresas con software en producción.",
  },
};

export default function ServiciosPage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-20">
      {/* Cabecera */}
      <section className="pt-8 sm:pt-12 space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-mint text-dark text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-tag">
          <span>Servicios de QA para empresas medianas</span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl text-dark tracking-tight uppercase leading-tightest">
          Nuestros Servicios
        </h1>

        <p className="text-lg text-slate leading-relaxed">
          Diseñados específicamente para empresas medianas (aprox. 30 a 200 personas) que tienen software en producción y quieren estructurar su calidad sin burocracia ni equipos sobredimensionados.
        </p>
      </section>

      {/* Los 3 Servicios */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Levantamiento */}
          <div className="bg-white rounded-32 p-6 sm:p-8 space-y-5 border border-ash/30 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-display text-4xl text-dark block leading-none">01</span>
              <h2 className="font-display text-3xl text-dark tracking-tight uppercase leading-none">
                Levantamiento QA
              </h2>
              <div className="text-dark font-extrabold text-2xl">
                Gratuito · 30 minutos
              </div>
              <p className="text-sm text-slate leading-relaxed">
                Sesión técnica online de 30 minutos donde revisamos el estado de tu software, cómo prueba tu equipo hoy y dónde están los riesgos.
              </p>
              <div className="pt-2 border-t border-canvas space-y-2 text-xs text-slate">
                <p className="font-semibold text-dark">Entregable:</p>
                <p>Informe escrito de 1 a 2 páginas con el diagnóstico actual y la ruta de primeros pasos prioritarios.</p>
              </div>
            </div>

            <Link
              href="/levantamiento"
              className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-dark text-white text-sm font-medium hover:bg-dark/90 transition-colors"
            >
              Agendar levantamiento
            </Link>
          </div>

          {/* 2. Puesta en marcha */}
          <div className="bg-white rounded-32 p-6 sm:p-8 space-y-5 border-2 border-dark flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-display text-4xl text-dark block leading-none">02</span>
              <h2 className="font-display text-3xl text-dark tracking-tight uppercase leading-none">
                Puesta en marcha QA
              </h2>
              <div className="text-dark font-extrabold text-2xl">
                Desde 4.000 USD <span className="text-xs text-smoke font-normal">+ IVA</span>
              </div>
              <p className="text-xs text-smoke">
                Pymes desde 3.400 USD + IVA
              </p>
              <p className="text-sm text-slate leading-relaxed">
                Implementación completa de la base de calidad en 10 días hábiles. Dejamos el área funcionando sin frenar a los desarrolladores.
              </p>
              <div className="pt-2 border-t border-canvas space-y-1.5 text-xs text-slate">
                <p className="font-semibold text-dark">Incluye:</p>
                <p>&bull; Lineamientos y acuerdos de prueba claros</p>
                <p>&bull; Plan y matriz de regresión para cada entrega</p>
                <p>&bull; Automatización de los flujos críticos</p>
                <p>&bull; Integración en pipeline de CI/CD</p>
              </div>
            </div>

            <Link
              href="/levantamiento"
              className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-dark text-white text-sm font-medium hover:bg-dark/90 transition-colors"
            >
              Empezar con levantamiento
            </Link>
          </div>

          {/* 3. Soporte mensual */}
          <div className="bg-white rounded-32 p-6 sm:p-8 space-y-5 border border-ash/30 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-display text-4xl text-dark block leading-none">03</span>
              <h2 className="font-display text-3xl text-dark tracking-tight uppercase leading-none">
                Soporte Mensual
              </h2>
              <div className="text-dark font-extrabold text-2xl">
                Desde 1.000 USD <span className="text-xs text-smoke font-normal">+ IVA / mes</span>
              </div>
              <p className="text-xs text-smoke">
                Pymes desde 850 USD + IVA al mes
              </p>
              <p className="text-sm text-slate leading-relaxed">
                20 horas mensuales de acompañamiento técnico para mantener el estándar de calidad y la estabilidad de las pruebas.
              </p>
              <div className="pt-2 border-t border-canvas space-y-1.5 text-xs text-slate">
                <p className="font-semibold text-dark">Incluye:</p>
                <p>&bull; Revisión continua de cobertura de pruebas</p>
                <p>&bull; Mantenimiento de scripts automáticos</p>
                <p>&bull; Apoyo en despliegues a producción</p>
              </div>
            </div>

            <Link
              href="/levantamiento"
              className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-dark text-white text-sm font-medium hover:bg-dark/90 transition-colors"
            >
              Consultar soporte
            </Link>
          </div>
        </div>
      </section>

      {/* Lo que NO ofrecemos */}
      <section className="bg-white rounded-32 p-6 sm:p-10 border border-ash/30 space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-smoke block">
          Límites claros de servicio
        </span>
        <h2 className="font-display text-3xl sm:text-4xl text-dark tracking-tight uppercase leading-none">
          Lo que no ofrecemos
        </h2>
        <p className="text-sm text-slate leading-relaxed max-w-2xl">
          Para garantizar resultados consistentes, no asumimos encargos fuera de nuestro alcance:
        </p>

        <ul className="space-y-2.5 text-sm text-slate pt-2 max-w-2xl">
          <li className="flex items-start gap-2">
            <span className="text-dark font-bold">&bull;</span>
            <span><strong>Pruebas de carga y estrés:</strong> No realizamos pruebas masivas de rendimiento de infraestructura.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-dark font-bold">&bull;</span>
            <span><strong>Empresas con área QA de más de 5 personas:</strong> Nuestro foco es poner en marcha el área donde no existe o está desarticulada.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-dark font-bold">&bull;</span>
            <span><strong>Venta de horas para cubrir equipos saturados:</strong> No somos agencia de personal por horas ni "body shopping".</span>
          </li>
        </ul>

        {/* Línea discreta al pie */}
        <div className="pt-4 border-t border-canvas text-xs text-smoke">
          <a
            href="https://qachile.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-dark transition-colors"
          >
            <span>Para pruebas de carga y estrés, revisa qachile.cl.</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-dark text-white rounded-32 p-8 sm:p-12 text-center space-y-5">
        <h2 className="font-display text-4xl sm:text-6xl text-white uppercase leading-tightest max-w-2xl mx-auto">
          Comienza con el levantamiento de 30 minutos
        </h2>
        <p className="text-smoke text-sm sm:text-base max-w-md mx-auto">
          Online, gratuito y con informe de diagnóstico incluido. Sin compromisos.
        </p>
        <div>
          <Link
            href="/levantamiento"
            className="inline-flex items-center justify-center gap-2 bg-white text-dark text-sm font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
          >
            <span>Agendar levantamiento</span>
            <ArrowRight className="w-4 h-4 text-dark" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
