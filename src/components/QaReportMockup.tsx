"use client";

import React from "react";
import { Check, ShieldCheck, FileText, CheckCircle2, AlertTriangle, ExternalLink } from "lucide-react";

export function QaReportMockup() {
  const suites = [
    { name: "auth-session.spec.ts", target: "Autenticación & JWT", time: "1.4s", status: "PASS" },
    { name: "checkout-transbank.spec.ts", target: "Pasarela de Pago", time: "2.8s", status: "PASS" },
    { name: "critical-forms.spec.ts", target: "Formularios Clave", time: "1.1s", status: "PASS" },
    { name: "api-endpoints.spec.ts", target: "APIs de Negocio", time: "0.9s", status: "PASS" },
  ];

  return (
    <div className="relative w-full rounded-2xl p-[1px] bg-gradient-to-b from-qa-gold/50 via-qa-gold/20 to-white/10 shadow-gold-md overflow-hidden">
      {/* Halo radial interior */}
      <div 
        className="absolute top-0 right-0 w-64 h-64 bg-qa-gold/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="bg-[#091122] rounded-[15px] p-6 sm:p-7 space-y-6 text-gray-200 font-sans">
        {/* Barra superior de documento técnico */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-qa-gold/20 border border-qa-gold/40 flex items-center justify-center text-qa-gold shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-qa-gold uppercase font-bold tracking-wider block">
                Entregable en 24h hábiles
              </span>
              <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                Informe Ejecutivo de Levantamiento QA
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono">
            <span className="px-2.5 py-1 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AUDITADO
            </span>
            <span className="text-gray-400 hidden sm:inline">DOC-VRT-QA-01</span>
          </div>
        </div>

        {/* Resumen del Software Auditado */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-[#060a14] border border-white/10 space-y-1">
            <span className="text-[10px] font-mono text-gray-400 uppercase">Salud Operativa</span>
            <div className="text-xl sm:text-2xl font-extrabold text-qa-gold font-mono">98.4%</div>
            <p className="text-[11px] text-gray-400">Flujos críticos protegidos</p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#060a14] border border-white/10 space-y-1">
            <span className="text-[10px] font-mono text-gray-400 uppercase">Tiempo Ejecución</span>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">6.2 seg</div>
            <p className="text-[11px] text-gray-400">Suite E2E en paralelo</p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#060a14] border border-white/10 space-y-1">
            <span className="text-[10px] font-mono text-gray-400 uppercase">Bugs en Prod</span>
            <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono">0 Fallas</div>
            <p className="text-[11px] text-gray-400">Checkout & Pasarelas</p>
          </div>
        </div>

        {/* Barras de Cobertura */}
        <div className="space-y-3 p-4 rounded-xl bg-[#060a14] border border-qa-gold/20">
          <span className="text-xs font-mono text-gray-300 font-bold uppercase tracking-wider block">
            // Matriz de Cobertura Estimada
          </span>

          <div className="space-y-2.5">
            {/* Barra 1 */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-300">Flujos Críticos de Negocio</span>
                <span className="text-qa-gold font-bold">100%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-qa-gold to-qa-gold-light rounded-full w-full" />
              </div>
            </div>

            {/* Barra 2 */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-300">Matriz de Regresión Continua</span>
                <span className="text-qa-gold-light font-bold">94%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-qa-gold-light rounded-full" style={{ width: "94%" }} />
              </div>
            </div>

            {/* Barra 3 */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-300">Integración con Repositorio (CI/CD)</span>
                <span className="text-emerald-400 font-bold">Listo</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Lista de Suites Auditadas */}
        <div className="space-y-2">
          <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
            // Pruebas Validadas en Diagnóstico
          </span>
          <div className="space-y-1.5">
            {suites.map((suite) => (
              <div
                key={suite.name}
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5 text-xs font-mono"
              >
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-qa-gold shrink-0" />
                  <span className="text-white font-semibold">{suite.name}</span>
                  <span className="text-gray-400 hidden sm:inline">({suite.target})</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400">{suite.time}</span>
                  <span className="text-emerald-400 font-bold">{suite.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pie del reporte */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
          <span>El informe completo de 1 a 2 págs. queda para tu equipo.</span>
          <span className="text-qa-gold font-bold">100% confidencial</span>
        </div>
      </div>
    </div>
  );
}
