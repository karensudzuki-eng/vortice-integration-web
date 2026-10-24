import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, ChevronDown, ExternalLink, Shield, Cpu, Code2, Terminal } from "lucide-react";
import { TerminalRunner } from "@/components/TerminalRunner";
import { WaveDivider } from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Servicios de QA | Vórtice Integration",
  description:
    "Servicios de calidad de software para empresas medianas en Chile: Levantamiento gratuito de 30 min, puesta en marcha en 10 días y soporte mensual.",
  openGraph: {
    title: "Servicios de QA | Vórtice Integration",
    description:
      "Levantamiento gratuito de 30 minutos, puesta en marcha de QA en 10 días hábiles y soporte mensual continuo para plataformas con software en producción.",
  },
};

export default function ServiciosPage() {
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
            // Oferta de Servicios B2B
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Nuestros Servicios de QA para Empresas con Software en Producción
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Diseñados para empresas medianas y pymes (aprox. 30 a 200 personas) que necesitan poner en marcha su aseguramiento de calidad sin burocracia, sin contratar un área pesada y con impacto directo en estabilidad.
          </p>
        </div>
      </section>

      {/* Separador ondulado */}
      <WaveDivider fillColor="#080e1a" />

      {/* Grid de Servicios (Lenguaje de Negocio) */}
      <section className="py-20 px-4 sm:px-6 bg-[#080e1a] border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Servicio 01: Levantamiento */}
            <div className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between space-y-6 border border-white/10">
              <div className="space-y-4">
                <span className="font-mono text-xs text-qa-gold font-bold uppercase block">
                  Fase 00 // Diagnóstico
                </span>
                <h2 className="text-2xl font-bold text-white leading-tight">
                  Levantamiento Técnico Gratuito
                </h2>
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono block">
                    $0 CLP
                  </span>
                  <span className="text-xs font-mono text-gray-400 mt-1 block">
                    ● 30 minutos online · Sin compromiso
                  </span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Sesión técnica orientada a líderes de tecnología. Revisamos la arquitectura de tu software, la frecuencia de tus despliegues y dónde se generan los cuellos de botella que provocan fallas.
                </p>
                <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-mono text-gray-300">
                  <p className="font-bold text-white">Entregable en 24h hábiles:</p>
                  <p className="text-gray-400">&gt; Informe ejecutivo de 1 a 2 páginas con diagnóstico de riesgos y ruta priorizada.</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/levantamiento"
                  className="w-full text-center block py-3 px-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Agendar levantamiento →
                </Link>
              </div>
            </div>

            {/* Servicio 02: Puesta en marcha */}
            <div className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between space-y-6 border border-qa-gold/50 shadow-gold-sm relative bg-qa-gold/5">
              <span className="absolute -top-3.5 right-6 bg-gradient-to-r from-qa-gold to-qa-gold-light text-qa-dark text-[11px] font-mono font-bold px-3 py-0.5 rounded-full uppercase shadow-sm">
                Principal
              </span>
              <div className="space-y-4">
                <span className="font-mono text-xs text-qa-gold font-bold uppercase block">
                  Fase 01 // 10 Días Hábiles
                </span>
                <h2 className="text-2xl font-bold text-white leading-tight">
                  Puesta en Marcha de QA
                </h2>
                <div>
                  <span className="text-xs font-mono text-gray-400 block">Inversión</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono block">
                    Desde $3.200.000 CLP
                  </span>
                  <span className="text-xs text-gray-400 font-mono block mt-0.5">+ IVA (Plazo de 10 días hábiles)</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Instalación completa de un marco de calidad funcional en tu operación. Dejamos las pruebas de los flujos críticos automatizadas e integradas al repositorio para que no dependas de pruebas manuales apresuradas.
                </p>
                <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-gray-300">
                  <p className="font-bold text-white font-mono">Entregables de negocio:</p>
                  <p className="flex items-center gap-1.5">• Lineamientos y acuerdos de prueba para el equipo</p>
                  <p className="flex items-center gap-1.5">• Matriz de regresión continua</p>
                  <p className="flex items-center gap-1.5">• Automatización de los flujos críticos del producto</p>
                  <p className="flex items-center gap-1.5">• Integración en pipeline de CI/CD</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/levantamiento"
                  className="w-full text-center block py-3 px-4 bg-gradient-to-r from-qa-gold to-qa-gold-light hover:from-qa-gold-light hover:to-qa-gold text-qa-dark text-xs font-bold rounded-lg shadow-gold-sm transition-all"
                >
                  Empezar con levantamiento →
                </Link>
              </div>
            </div>

            {/* Servicio 03: Soporte mensual */}
            <div className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between space-y-6 border border-white/10">
              <div className="space-y-4">
                <span className="font-mono text-xs text-qa-gold font-bold uppercase block">
                  Fase 02 // Continuidad
                </span>
                <h2 className="text-2xl font-bold text-white leading-tight">
                  Soporte Mensual (20 hrs)
                </h2>
                <div>
                  <span className="text-xs font-mono text-gray-400 block">Inversión</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono block">
                    Desde $800.000 CLP
                  </span>
                  <span className="text-xs text-gray-400 font-mono block mt-0.5">/ mes + IVA (20 horas mensuales)</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Acompañamiento técnico continuo para asegurar que ninguna nueva funcionalidad rompa lo que ya funciona. Mantenimiento de pruebas ante cambios de diseño o lógica y apoyo técnico en despliegues.
                </p>
                <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-gray-300">
                  <p className="font-bold text-white font-mono">Alcance operativo:</p>
                  <p className="flex items-center gap-1.5">• Mantenimiento y actualización de scripts</p>
                  <p className="flex items-center gap-1.5">• Auditoría continua de cobertura</p>
                  <p className="flex items-center gap-1.5">• Soporte y validación técnica en despliegues</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/precios"
                  className="w-full text-center inline-block bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  Consultar soporte →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separador ondulado */}
      <WaveDivider flip fillColor="#060a14" />

      {/* CONSOLA DE PRUEBAS ANIMADA (SOLICITADA EXPRESAMENTE EN SERVICIOS) */}
      <section className="py-20 px-4 sm:px-6 relative bg-qa-dark">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs text-qa-gold uppercase tracking-widest block font-bold">
              // Ejecución Automatizada en Tiempo Real
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Así corren tus pruebas en Playwright
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Pruebas continuas ejecutadas en contenedores Docker aislados que validan el 100% de los flujos críticos antes de cada liberación.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <TerminalRunner />
          </div>
        </div>
      </section>

      {/* Separador ondulado */}
      <WaveDivider fillColor="#080e1a" />

      {/* BLOQUE TÉCNICO COLAPSABLE PARA EL EQUIPO DE DESARROLLO */}
      <section className="py-20 px-4 sm:px-6 bg-[#080e1a] border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <details className="group glass-card rounded-2xl border border-qa-gold/30 overflow-hidden transition-all shadow-gold-sm">
            <summary className="p-7 flex items-center justify-between cursor-pointer select-none hover:bg-white/5 transition-colors">
              <div className="space-y-1">
                <span className="text-xs font-mono text-qa-gold font-bold uppercase block">
                  // Para el equipo técnico y desarrolladores
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  Especificaciones Técnicas de la Implementación (CI/CD, Playwright, Arquitectura)
                </h2>
              </div>
              <span className="ml-4 p-2.5 rounded-lg bg-white/10 border border-white/10 text-gray-400 group-open:rotate-180 transition-transform">
                <ChevronDown className="w-5 h-5 text-qa-gold" aria-hidden="true" />
              </span>
            </summary>

            <div className="p-7 sm:p-9 border-t border-white/10 bg-[#050912]/90 space-y-6 text-sm text-gray-300 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 glass-card p-6 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 text-qa-gold font-mono text-xs font-bold uppercase">
                    <Terminal className="w-4 h-4" />
                    <span>1. Stack & Frameworks</span>
                  </div>
                  <h3 className="font-bold text-white text-base">
                    Playwright (TypeScript) & Containers
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Implementamos suites E2E basadas en <strong>Playwright (TypeScript)</strong> dockerizadas, garantizando ejecución aislada y reproducible sin dependencias frágiles del entorno local.
                  </p>
                </div>

                <div className="space-y-2 glass-card p-6 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 text-qa-gold font-mono text-xs font-bold uppercase">
                    <Cpu className="w-4 h-4" />
                    <span>2. Automatización en CI/CD</span>
                  </div>
                  <h3 className="font-bold text-white text-base">
                    Pipelines Nativos en tu Repositorio
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Configuración directa en tu proveedor de integración continua (<strong>GitHub Actions, GitLab CI, Bitbucket Pipelines</strong>). Se disparan pruebas automáticas en cada Pull Request o previo a la fusión en ramas principales.
                  </p>
                </div>

                <div className="space-y-2 glass-card p-6 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 text-qa-gold font-mono text-xs font-bold uppercase">
                    <Code2 className="w-4 h-4" />
                    <span>3. Matriz de Flujos Críticos</span>
                  </div>
                  <h3 className="font-bold text-white text-base">
                    Cobertura Neurálgica de Negocio
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Mapeo exhaustivo de flujos neurálgicos: autenticación y gestión de sesiones, flujos transaccionales, formularios principales, APIs críticas y persistencia de estados.
                  </p>
                </div>

                <div className="space-y-2 glass-card p-6 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 text-qa-gold font-mono text-xs font-bold uppercase">
                    <Shield className="w-4 h-4" />
                    <span>4. Gobierno & Trazabilidad</span>
                  </div>
                  <h3 className="font-bold text-white text-base">
                    Reportes Automáticos de Ejecución
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Reportes automáticos de ejecución (trazas, screenshots de fallo y videos en Playwright Trace Viewer), entregando visibilidad inmediata a los ingenieros sin fricción operativa.
                  </p>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* Separador ondulado */}
      <WaveDivider flip fillColor="#060a14" />

      {/* Lo que NO ofrecemos */}
      <section className="py-20 px-4 sm:px-6 bg-qa-dark">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card border border-white/10 p-8 sm:p-10 rounded-2xl space-y-6">
            <span className="font-mono text-xs text-gray-400 uppercase tracking-wider block font-bold">
              // Criterios de exclusión operativa
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Lo que no ofrecemos
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Para asegurar velocidad y excelencia en cada proyecto, mantenemos un foco operativo riguroso y no aceptamos proyectos fuera de nuestro alcance:
            </p>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <span className="font-mono text-qa-gold font-bold">&gt;</span>
                <span><strong>Pruebas de carga y estrés masivas:</strong> No realizamos pruebas destructivas de infraestructura de alta concurrencia.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-mono text-qa-gold font-bold">&gt;</span>
                <span><strong>Empresas con área QA propia de más de 5 personas:</strong> Nuestro foco es estructurar e implementar QA donde no existe o está desordenado.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-mono text-qa-gold font-bold">&gt;</span>
                <span><strong>Venta de horas para cubrir equipos saturados:</strong> No realizamos subcontratación de horas sueltas ni &quot;body shopping&quot; sin metodología ni gobierno técnico.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-gray-400">
              <a
                href="https://qachile.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-qa-gold hover:text-white transition-colors font-bold underline"
              >
                <span>Para pruebas de carga y estrés, revisa qachile.cl.</span>
                <ExternalLink className="w-3.5 h-3.5 text-qa-gold" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
