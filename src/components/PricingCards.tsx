"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check, Zap, Clock, ShieldCheck, Activity } from "lucide-react";

interface PricingCardsProps {
  showPymeToggle?: boolean;
}

export function PricingCards({ showPymeToggle = false }: PricingCardsProps) {
  return (
    <div className="relative w-full">
      {/* Halo radial dorado de fondo detrás de las tarjetas */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-qa-gold/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* =========================================================
            PLAN 01: LEVANTAMIENTO TÉCNICO (30 MIN)
        ========================================================= */}
        <div className="card-border-gold-glow flex flex-col">
          <div className="card-inner p-7 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Encabezado del Plan */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-qa-gold uppercase bg-qa-gold/10 px-3 py-1 rounded-full border border-qa-gold/30">
                  Fase 00 · Diagnóstico
                </span>
                <span className="text-xs font-mono text-gray-400">
                  30 Min
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Levantamiento Gratuito
                </h3>
                <p className="text-xs text-gray-400 mt-1 font-mono">
                  Online · Sin costo ni compromiso
                </p>
              </div>

              {/* Precio */}
              <div className="py-2 border-y border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                    $0 CLP
                  </span>
                  <span className="text-xs font-mono text-gray-400">100% gratis</span>
                </div>
                <p className="text-[11px] text-gray-400 font-mono mt-1">
                  Informe escrito en 24h hábiles
                </p>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                Sesión técnica online de 30 minutos para analizar tu software, tu stack y tus cuellos de botella. Entregamos un informe escrito de 1 a 2 páginas con diagnóstico y recomendaciones.
              </p>

              {/* GRÁFICO VISUAL DE ALCANCE: 30 MIN */}
              <div className="p-3.5 rounded-lg bg-[#060a14] border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-gray-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-qa-gold" />
                    Alcance del diagnóstico
                  </span>
                  <span className="text-qa-gold font-bold">30 min</span>
                </div>

                {/* Barra de progreso visual */}
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden flex">
                  <div 
                    className="h-full bg-gradient-to-r from-qa-gold to-qa-gold-light rounded-full transition-all duration-500" 
                    style={{ width: "100%" }} 
                    title="100% de la sesión enfocada en diagnóstico real"
                  />
                </div>

                <div className="flex justify-between text-[10px] font-mono text-gray-400 pt-0.5">
                  <span>Revisión de flujo</span>
                  <span>Puntos de falla</span>
                  <span>Hoja de ruta</span>
                </div>
              </div>

              {/* Entregables */}
              <ul className="text-xs font-mono text-gray-300 space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-qa-gold shrink-0" />
                  <span>Sesión online con ingeniero de QA</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-qa-gold shrink-0" />
                  <span>Informe escrito de 1 a 2 páginas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-qa-gold shrink-0" />
                  <span>Sin compromiso comercial</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <Link
                href="/levantamiento"
                className="w-full text-center block py-3 px-4 bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Agendar levantamiento →
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================================
            PLAN 02: PUESTA EN MARCHA (10 DÍAS HÁBILES) - PRINCIPAL
        ========================================================= */}
        <div className="card-border-gold-glow flex flex-col relative scale-[1.02] shadow-gold-md">
          {/* Badge superior */}
          <span className="absolute -top-3.5 right-6 z-20 bg-gradient-to-r from-qa-gold to-qa-gold-light text-qa-dark text-[11px] font-mono font-bold px-3.5 py-0.5 rounded-full shadow-md uppercase">
            Servicio Principal
          </span>

          <div className="card-inner p-7 sm:p-8 flex flex-col justify-between space-y-6 border border-qa-gold/50 bg-[#0d1629]">
            <div className="space-y-5">
              {/* Encabezado del Plan */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-qa-dark uppercase bg-gradient-to-r from-qa-gold to-qa-gold-light px-3 py-1 rounded-full shadow-sm">
                  Fase 01 · 10 Días
                </span>
                <span className="text-xs font-mono text-qa-gold font-bold">
                  Playwright + CI
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Puesta en Marcha QA
                </h3>
                <p className="text-xs text-gray-400 mt-1 font-mono">
                  Lineamientos, regresión y CI en 10 días
                </p>
              </div>

              {/* Precios diferenciados (Pyme vs Estándar) */}
              <div className="py-2.5 border-y border-white/10 space-y-1.5">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-mono text-qa-gold font-bold">Pymes:</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    $3.200.000 CLP
                  </span>
                </div>
                <div className="flex items-baseline justify-between text-xs font-mono text-gray-400 border-t border-white/5 pt-1">
                  <span>Empresas medianas:</span>
                  <span className="font-bold text-gray-200">Desde $3.800.000 CLP</span>
                </div>
                <span className="text-[10px] text-gray-400 font-mono block">
                  + IVA · Plazo contractual de 10 días hábiles
                </span>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                Diseñamos los lineamientos de prueba, la matriz de regresión, automatizamos los flujos críticos del negocio con Playwright y los conectamos directamente a tu pipeline de integración continua.
              </p>

              {/* GRÁFICO VISUAL DE ALCANCE: TIMELINE 10 DÍAS */}
              <div className="p-3.5 rounded-lg bg-[#060a14] border border-qa-gold/30 space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-white font-bold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-qa-gold" />
                    Timeline de ejecución
                  </span>
                  <span className="text-qa-gold font-bold">10 Días hábiles</span>
                </div>

                {/* 4 Nodos del timeline */}
                <div className="relative pt-1 pb-1">
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden mb-2">
                    <div className="h-full bg-gradient-to-r from-qa-gold via-qa-gold-light to-qa-gold w-full" />
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-[9px] font-mono text-center">
                    <div className="text-gray-300">
                      <span className="block text-qa-gold font-bold">Día 1-2</span>
                      <span>Acuerdos</span>
                    </div>
                    <div className="text-gray-300">
                      <span className="block text-qa-gold font-bold">Día 3-5</span>
                      <span>Regresión</span>
                    </div>
                    <div className="text-gray-300">
                      <span className="block text-qa-gold font-bold">Día 6-8</span>
                      <span>Playwright</span>
                    </div>
                    <div className="text-gray-300">
                      <span className="block text-qa-gold font-bold">Día 9-10</span>
                      <span>CI Pipeline</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Entregables */}
              <ul className="text-xs font-mono text-gray-300 space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-qa-gold shrink-0" />
                  <span>Lineamientos y criterios de calidad</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-qa-gold shrink-0" />
                  <span>Matriz de regresión documentada</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-qa-gold shrink-0" />
                  <span>Pruebas E2E automatizadas en Playwright</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-qa-gold shrink-0" />
                  <span>Pipeline integrado en GitHub / GitLab / Bitbucket</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <Link
                href="/levantamiento"
                className="w-full text-center block py-3.5 px-4 bg-gradient-to-r from-qa-gold to-qa-gold-light hover:from-qa-gold-light hover:to-qa-gold text-qa-dark text-xs font-bold rounded-lg shadow-gold-sm hover:shadow-gold-md transition-all"
              >
                Iniciar con levantamiento →
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================================
            PLAN 03: SOPORTE MENSUAL (20 HORAS)
        ========================================================= */}
        <div className="card-border-gold-glow flex flex-col">
          <div className="card-inner p-7 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Encabezado del Plan */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-qa-gold uppercase bg-qa-gold/10 px-3 py-1 rounded-full border border-qa-gold/30">
                  Fase 02 · Mensual
                </span>
                <span className="text-xs font-mono text-gray-400">
                  20h / mes
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Soporte Continuo
                </h3>
                <p className="text-xs text-gray-400 mt-1 font-mono">
                  Cobertura y mantenimiento recurrente
                </p>
              </div>

              {/* Precios diferenciados (Pyme vs Estándar) */}
              <div className="py-2.5 border-y border-white/10 space-y-1.5">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-mono text-qa-gold font-bold">Pymes:</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    $800.000 CLP
                  </span>
                </div>
                <div className="flex items-baseline justify-between text-xs font-mono text-gray-400 border-t border-white/5 pt-1">
                  <span>Empresas medianas:</span>
                  <span className="font-bold text-gray-200">Desde $950.000 CLP</span>
                </div>
                <span className="text-[10px] text-gray-400 font-mono block">
                  / mes + IVA · Bolsa de 20 horas mensuales
                </span>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                20 horas mensuales de ingeniería de QA para revisar cobertura de código, mantener suites de prueba actualizadas ante cambios de software y dar apoyo técnico en despliegues.
              </p>

              {/* GRÁFICO VISUAL DE ALCANCE: GAUGE 20 HORAS */}
              <div className="p-3.5 rounded-lg bg-[#060a14] border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-gray-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-qa-gold" />
                    Capacidad mensual asignada
                  </span>
                  <span className="text-qa-gold font-bold">20 hrs</span>
                </div>

                {/* Gráfico segmentado de distribución de horas */}
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden flex gap-0.5">
                  <div className="h-full bg-qa-gold" style={{ width: "50%" }} title="10h: Mantenimiento y actualización de suites" />
                  <div className="h-full bg-qa-gold-light" style={{ width: "30%" }} title="6h: Auditoría de cobertura continua" />
                  <div className="h-full bg-emerald-400" style={{ width: "20%" }} title="4h: Apoyo en despliegues críticos" />
                </div>

                <div className="grid grid-cols-3 gap-1 text-[9px] font-mono text-gray-400 pt-0.5">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-qa-gold" />
                    <span>10h Scripts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-qa-gold-light" />
                    <span>6h Cobertura</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>4h Releases</span>
                  </div>
                </div>
              </div>

              {/* Entregables */}
              <ul className="text-xs font-mono text-gray-300 space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-qa-gold shrink-0" />
                  <span>20 horas de ingeniería mensual</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-qa-gold shrink-0" />
                  <span>Actualización continua de scripts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-qa-gold shrink-0" />
                  <span>Auditoría de cobertura de regresión</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-qa-gold shrink-0" />
                  <span>Apoyo técnico directo en despliegues</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <Link
                href="/precios"
                className="w-full text-center block py-3 px-4 bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Ver alcance y detalles →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
