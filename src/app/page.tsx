import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ExternalLink, 
  Zap, 
  ShieldCheck, 
  GitBranch, 
  Terminal, 
  Layers, 
  Clock, 
  AlertTriangle,
  Server
} from "lucide-react";
import { HeroOrbit } from "@/components/HeroOrbit";
import { WaveDivider } from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Vórtice Integration | Puesta en marcha de QA para empresas medianas en Chile",
  description:
    "Tu software sale a producción sin pruebas sistemáticas: ponemos en marcha tu área de QA en 10 días. Empieza con un levantamiento gratuito de 30 min.",
  openGraph: {
    title: "Vórtice Integration | Puesta en marcha de QA para empresas medianas en Chile",
    description:
      "Tu software sale a producción sin pruebas sistemáticas: ponemos en marcha tu área de QA en 10 días. Empieza con un levantamiento gratuito de 30 min.",
  },
};

export default function HomePage() {
  return (
    <div className="w-full bg-qa-dark text-gray-100 overflow-hidden font-sans">
      {/* SECCIÓN 1: HERO & PROPUESTA DE VALOR CON GLOW DORADO */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 px-4 sm:px-6">
        {/* Glow de fondo dorado suave */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-qa-gold/10 rounded-full blur-[140px] pointer-events-none -z-10"
          aria-hidden="true" 
        />

        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Texto principal con revelado por línea */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-mono text-gray-300 border border-qa-gold/30 shadow-gold-sm">
                <span className="w-2 h-2 rounded-full bg-qa-gold animate-pulse" aria-hidden="true" />
                <span className="text-gray-200">Empresa matriz de aseguramiento de calidad</span>
              </div>

              {/* Titular con revelado por línea; segunda línea en dorado */}
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.15] text-white">
                <span className="block animate-reveal-1">
                  Tu software sale a producción sin pruebas sistemáticas:
                </span>
                <span className="block text-gradient-gold animate-reveal-2 mt-1 sm:mt-2">
                  ponemos en marcha tu área de QA en 10 días.
                </span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Para empresas medianas y pymes que quieren dejar de probar a última hora y erradicar los errores tras cada despliegue. Empiezas con una sesión de 30 minutos, gratuita y sin compromiso comercial.
              </p>

              {/* CTA ÚNICO */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/levantamiento"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-qa-gold to-qa-gold-light hover:from-qa-gold-light hover:to-qa-gold text-qa-dark px-8 py-4 font-bold text-base rounded-lg shadow-gold-sm hover:shadow-gold-md transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>Agendar levantamiento gratuito de 30 min</span>
                  <ArrowRight className="w-4 h-4 text-qa-dark" aria-hidden="true" />
                </Link>
                <div className="text-xs text-gray-400 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-qa-gold" />
                  Online • 100% gratis • Sin compromiso
                </div>
              </div>
            </div>

            {/* Ilustración interactiva central: Fénix en animación lenta con las tres etapas en órbita */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <HeroOrbit />
            </div>
          </div>

          {/* CINTA DE MÉTRICAS & AUTORIDAD VISUAL */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
            <div className="glass-card p-5 rounded-xl space-y-1 border border-white/10 hover:border-qa-gold/30 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">10 Días</div>
              <p className="text-xs text-gray-400 font-medium">Puesta en marcha básica</p>
            </div>
            <div className="glass-card p-5 rounded-xl space-y-1 border border-white/10 hover:border-qa-gold/30 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold text-qa-gold font-mono">0 Fallas</div>
              <p className="text-xs text-gray-400 font-medium">En checkout y flujos críticos</p>
            </div>
            <div className="glass-card p-5 rounded-xl space-y-1 border border-white/10 hover:border-qa-gold/30 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">1 a 2 Pág.</div>
              <p className="text-xs text-gray-400 font-medium">Informe entregado en 24h</p>
            </div>
            <div className="glass-card p-5 rounded-xl space-y-1 border border-white/10 hover:border-qa-gold/30 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold text-qa-gold-light font-mono">CI/CD</div>
              <p className="text-xs text-gray-400 font-medium">Playwright en tu repositorio</p>
            </div>
          </div>

          {/* DOS CAMINOS VISIBLES: SOFTWARE EN PRODUCCIÓN vs. E-COMMERCE */}
          <div className="pt-8 border-t border-white/10" aria-labelledby="paths-heading">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs uppercase font-mono tracking-wider text-qa-gold font-bold block">
                // Selecciona tu escenario operativo
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Camino 1: Software en producción -> Vórtice Integration */}
              <div className="glass-card glass-card-hover p-7 rounded-xl space-y-5 border border-qa-gold/40 shadow-gold-sm relative group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-qa-gold uppercase bg-qa-gold/10 px-3 py-1 rounded-full border border-qa-gold/30">
                    Línea Vórtice Integration
                  </span>
                  <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
                    <Server className="w-3.5 h-3.5 text-qa-gold" />
                    SaaS / Plataformas / TI
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-qa-gold-light transition-colors">
                    Tengo software en producción
                  </h2>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Para plataformas web corporativas, fintechs, SaaS o sistemas internos que necesitan lineamientos de prueba, matriz de regresión continua e integración en CI en 10 días hábiles.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/levantamiento"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-qa-gold hover:text-white bg-qa-gold/15 hover:bg-qa-gold/25 px-4 py-2.5 rounded-lg border border-qa-gold/40 transition-all"
                  >
                    <span>Poner en marcha QA con Vórtice</span>
                    <ArrowRight className="w-4 h-4 text-qa-gold" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Camino 2: E-commerce -> QA Chile */}
              <div className="glass-card glass-card-hover p-7 rounded-xl space-y-5 border border-white/10 relative group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-gray-300 uppercase bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    Línea Especializada QA Chile
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    qachile.cl
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">
                    Soy e-commerce
                  </h2>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Para tiendas online, pasarelas de pago transaccionales y catálogos de alto tráfico. Pruebas continuas de checkout y rendimiento comercial en nuestra marca de servicio especializada.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://qachile.cl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-lg border border-white/10 transition-all"
                  >
                    <span>Ir a QA Chile (qachile.cl)</span>
                    <ExternalLink className="w-4 h-4 text-gray-400" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEPARADOR ONDULADO DE TRANSICIÓN BAJO EL HERO */}
      <WaveDivider fillColor="#080e1a" />

      {/* SECCIÓN 2: PROBLEMAS HABITUALES (DOLORES DE NEGOCIO / NEUROMARKETING) */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#080e1a] relative" aria-labelledby="pain-heading">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs text-qa-gold uppercase tracking-wider block font-bold">
              // Diagnóstico de situación
            </span>
            <h2 id="pain-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              ¿Te pasa alguno de estos dolores en tu equipo?
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              La mayoría de los problemas de calidad no se originan por falta de talento técnico, sino por la ausencia de un marco sistemático de pruebas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tarjeta 01 */}
            <div className="glass-card glass-card-hover p-7 rounded-xl space-y-4 border-t-2 border-t-qa-gold">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold text-qa-gold">01</span>
                <AlertTriangle className="w-5 h-5 text-qa-gold" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Bugs después de cada despliegue
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Los bugs aparecen en producción justo después de cada entrega crítica, generando reclamos de clientes o del equipo comercial y frenando la innovación.
              </p>
            </div>

            {/* Tarjeta 02 */}
            <div className="glass-card glass-card-hover p-7 rounded-xl space-y-4 border-t-2 border-t-qa-gold/80">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold text-qa-gold-light">02</span>
                <Clock className="w-5 h-5 text-qa-gold-light" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Pruebas manuales a última hora
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                El desarrollador prueba a última hora y a la rápida antes de entregar al cliente, sin una pauta objetiva de regresión ni cobertura documentada.
              </p>
            </div>

            {/* Tarjeta 03 */}
            <div className="glass-card glass-card-hover p-7 rounded-xl space-y-4 border-t-2 border-t-qa-gold/60">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold text-gray-200">03</span>
                <Layers className="w-5 h-5 text-qa-gold" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Incertidumbre sobre qué está probado
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Nadie en el equipo sabe con certeza qué partes del sistema están probadas y cuáles quedan vulnerables ante un nuevo cambio de código.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEPARADOR ONDULADO */}
      <WaveDivider flip fillColor="#060a14" />

      {/* SECCIÓN 3: DIAGRAMA VISUAL DEL PIPELINE (ARQUITECTURA DE PRUEBAS) */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 relative bg-qa-dark">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs text-qa-gold uppercase tracking-widest block font-bold">
              // Arquitectura de Automatización
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Cómo protegemos tu software en cada release
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Flujo automatizado continuo integrado directamente en tu flujo de trabajo de ingeniería.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Paso 1 */}
            <div className="glass-card p-6 rounded-xl border border-white/10 space-y-3 relative hover:border-qa-gold/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-qa-gold/15 text-qa-gold border border-qa-gold/30 flex items-center justify-center">
                <GitBranch className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-gray-400 uppercase font-semibold">Fase 1</span>
              <h3 className="text-base font-bold text-white">Pull Request / Commit</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                El desarrollador sube nuevo código al repositorio sin cambiar sus hábitos de trabajo.
              </p>
            </div>

            {/* Paso 2 */}
            <div className="glass-card p-6 rounded-xl border border-white/10 space-y-3 relative hover:border-qa-gold/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-qa-gold/15 text-qa-gold-light border border-qa-gold/30 flex items-center justify-center">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-gray-400 uppercase font-semibold">Fase 2</span>
              <h3 className="text-base font-bold text-white">Playwright Docker Runner</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Se ejecutan las suites de prueba E2E de forma aislada y reproducible en contenedores.
              </p>
            </div>

            {/* Paso 3 */}
            <div className="glass-card p-6 rounded-xl border border-white/10 space-y-3 relative hover:border-qa-gold/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-qa-gold/15 text-qa-gold border border-qa-gold/30 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-gray-400 uppercase font-semibold">Fase 3</span>
              <h3 className="text-base font-bold text-white">Gatekeeper de Calidad</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Se validan automáticamente las pasarelas, autenticación y flujos críticos de negocio.
              </p>
            </div>

            {/* Paso 4 */}
            <div className="glass-card p-6 rounded-xl border border-qa-gold/40 space-y-3 relative bg-qa-gold/5 shadow-gold-sm">
              <div className="w-10 h-10 rounded-lg bg-qa-gold/20 text-qa-gold border border-qa-gold/40 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-qa-gold uppercase font-semibold">Fase 4</span>
              <h3 className="text-base font-bold text-white">Despliegue Seguro</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                El software llega a los usuarios finales con 0 bugs críticos y certeza total del equipo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEPARADOR ONDULADO */}
      <WaveDivider fillColor="#080e1a" />

      {/* SECCIÓN 4: OFERTA EN TRES PASOS (QUÉ HACEMOS) */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#080e1a] border-y border-white/10" aria-labelledby="offer-heading">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-3">
            <span className="font-mono text-xs text-qa-gold uppercase tracking-wider block font-bold">
              // Nuestra oferta
            </span>
            <h2 id="offer-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Qué hacemos: Puesta en marcha en 3 pasos
            </h2>
            <p className="text-gray-300 text-base max-w-2xl leading-relaxed">
              Una estructura escalonada diseñada para generar valor tangible desde la primera semana sin amarrarte a consultorías interminables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Paso 01 */}
            <div className="glass-card glass-card-hover p-7 rounded-xl space-y-5 flex flex-col justify-between border border-white/10">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-qa-gold uppercase">
                  Paso 01 · 30 minutos
                </span>
                <h3 className="text-xl font-bold text-white">
                  Levantamiento Técnico Gratuito
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Sesión online de 30 minutos para analizar tu software, tu stack y tus cuellos de botella. Entregamos un informe escrito de 1 a 2 páginas con diagnóstico y recomendaciones en 24h hábiles.
                </p>
                <div className="pt-2 text-xs font-mono text-gray-300">
                  Inversión: <span className="text-white font-bold">$0 CLP</span> · Sin costo ni compromiso.
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/levantamiento"
                  className="w-full text-center block py-2.5 px-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Agendar levantamiento →
                </Link>
              </div>
            </div>

            {/* Paso 02 */}
            <div className="glass-card glass-card-hover p-7 rounded-xl border border-qa-gold/50 shadow-gold-sm space-y-5 flex flex-col justify-between relative bg-qa-gold/5">
              <span className="absolute -top-3 right-4 bg-gradient-to-r from-qa-gold to-qa-gold-light text-qa-dark text-[11px] font-mono font-bold px-3 py-0.5 rounded-full shadow-sm uppercase">
                Principal
              </span>
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-qa-gold uppercase">
                  Paso 02 · 10 días hábiles
                </span>
                <h3 className="text-xl font-bold text-white">
                  Puesta en Marcha de QA
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Diseñamos los lineamientos de prueba, la matriz de regresión, automatizamos los flujos críticos del negocio y los conectamos directamente a tu pipeline de integración continua (CI).
                </p>
                <div className="pt-2 text-xs font-mono text-gray-300">
                  Inversión: <span className="text-white font-bold">Desde $3.200.000 CLP + IVA</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/levantamiento"
                  className="w-full text-center block py-2.5 px-4 bg-gradient-to-r from-qa-gold to-qa-gold-light hover:from-qa-gold-light hover:to-qa-gold text-qa-dark text-xs font-bold rounded-lg shadow-gold-sm transition-all"
                >
                  Iniciar con levantamiento →
                </Link>
              </div>
            </div>

            {/* Paso 03 */}
            <div className="glass-card glass-card-hover p-7 rounded-xl space-y-5 flex flex-col justify-between border border-white/10">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-qa-gold uppercase">
                  Paso 03 · Mensual
                </span>
                <h3 className="text-xl font-bold text-white">
                  Soporte Mensual (20 hrs)
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  20 horas mensuales de ingeniería de QA para revisar cobertura de código, mantener suites de prueba actualizadas ante cambios de software y dar apoyo técnico en despliegues.
                </p>
                <div className="pt-2 text-xs font-mono text-gray-300">
                  Inversión: <span className="text-white font-bold">Desde $800.000 CLP + IVA / mes</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/precios"
                  className="w-full text-center block py-2.5 px-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Ver planes y alcance →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEPARADOR ONDULADO */}
      <WaveDivider flip fillColor="#060a14" />

      {/* SECCIÓN 5: PARA QUIÉN SÍ / PARA QUIÉN NO */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 relative bg-qa-dark" aria-labelledby="fit-heading">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-3">
            <span className="font-mono text-xs text-qa-gold uppercase tracking-wider block font-bold">
              // Criterios de encaje
            </span>
            <h2 id="fit-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Para quién sí / Para quién no
            </h2>
            <p className="text-gray-300 text-base max-w-2xl">
              Cuidamos la velocidad y la calidad de los resultados. Por eso delimitamos con total transparencia en qué escenarios somos la solución correcta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Para quién sí */}
            <div className="glass-card p-8 rounded-xl border border-qa-gold/40 shadow-gold-sm space-y-5">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-qa-gold" aria-hidden="true" />
                <h3 className="text-xl font-bold text-white">Para quién sí</h3>
              </div>
              <ul className="space-y-3.5 text-sm text-gray-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-qa-gold font-mono font-bold mt-0.5">&gt;</span>
                  <span>Empresas medianas y pymes (aprox. 30 a 200 colaboradores) con software en producción y sin área de QA estructurada.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-qa-gold font-mono font-bold mt-0.5">&gt;</span>
                  <span>Equipos de desarrollo que pierden tiempo apagando incendios y parchando errores de regresión en lugar de crear nuevas funciones.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-qa-gold font-mono font-bold mt-0.5">&gt;</span>
                  <span>CTOs y líderes de ingeniería que necesitan automatización de pruebas y gobierno en CI en menos de un mes.</span>
                </li>
              </ul>
            </div>

            {/* Para quién no */}
            <div className="glass-card p-8 rounded-xl border border-white/10 space-y-5">
              <div className="flex items-center gap-3">
                <XCircle className="w-6 h-6 text-gray-500" aria-hidden="true" />
                <h3 className="text-xl font-bold text-white">Para quién no</h3>
              </div>
              <ul className="space-y-3.5 text-sm text-gray-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-gray-500 font-mono font-bold mt-0.5">&gt;</span>
                  <span>Empresas que ya cuentan con un área interna de QA estructurada de más de 5 personas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gray-500 font-mono font-bold mt-0.5">&gt;</span>
                  <span>Empresas que buscan pruebas masivas destructivas de carga y estrés (las derivamos a <a href="https://qachile.cl" target="_blank" rel="noopener noreferrer" className="text-qa-gold hover:underline">qachile.cl</a>).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gray-500 font-mono font-bold mt-0.5">&gt;</span>
                  <span>Venta de horas de soporte desgobernadas sin estructuración de procesos ni integración en CI.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEPARADOR ONDULADO */}
      <WaveDivider fillColor="#080e1a" />

      {/* SECCIÓN 6: METODOLOGÍA VÓRTICE (RESUMEN VISUAL) */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#080e1a] border-y border-white/10" aria-labelledby="method-heading">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-8 sm:p-12 rounded-2xl border border-qa-gold/30 shadow-gold-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
            <div className="lg:col-span-8 space-y-4">
              <span className="font-mono text-xs text-qa-gold uppercase tracking-wider block font-bold">
                // La forma en que trabajamos
              </span>
              <h2 id="method-heading" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Metodología Vórtice: Sistema de Gestión de Calidad
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
                Un marco de trabajo propio de ingeniería que elimina la fricción entre desarrollo y producción. Cero conceptos esotéricos: acuerdos de calidad objetivos, automatización de los flujos neurálgicos y gobierno técnico predecible.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="/metodologia"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-qa-gold/15 hover:bg-qa-gold/25 border border-qa-gold/40 text-qa-gold hover:text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
              >
                <span>Conoce la Metodología Vórtice</span>
                <ArrowRight className="w-4 h-4 text-qa-gold" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEPARADOR ONDULADO */}
      <WaveDivider flip fillColor="#060a14" />

      {/* SECCIÓN 7: CTA FINAL ÚNICO CON ALTO IMPACTO */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 text-center relative bg-qa-dark">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-qa-gold/10 rounded-full blur-[140px] pointer-events-none -z-10" 
          aria-hidden="true" 
        />

        <div className="max-w-3xl mx-auto space-y-8 glass-card p-10 sm:p-14 rounded-2xl border border-qa-gold/30 shadow-gold-md">
          <span className="font-mono text-xs text-qa-gold uppercase tracking-widest block font-bold">
            // Empieza hoy
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Agenda tu levantamiento gratuito de 30 min.
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Una sesión técnica online sin presentaciones comerciales genéricas. Analizamos tu software y te entregamos un informe con diagnóstico objetivo y ruta recomendada.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/levantamiento"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-qa-gold to-qa-gold-light hover:from-qa-gold-light hover:to-qa-gold text-qa-dark px-8 py-4 font-bold text-base rounded-lg shadow-gold-sm hover:shadow-gold-md transition-all"
            >
              <span>Agendar levantamiento gratuito de 30 min</span>
              <ArrowRight className="w-4 h-4 text-qa-dark" aria-hidden="true" />
            </Link>
          </div>
          <p className="text-xs text-gray-400 font-mono">
            Vórtice Integration Holding SpA · RUT 78.377.882-3 · Santiago de Chile
          </p>
        </div>
      </section>
    </div>
  );
}
