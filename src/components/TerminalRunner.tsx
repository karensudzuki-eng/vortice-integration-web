import React from "react";
import { CheckCircle2, ShieldCheck, Zap, Activity } from "lucide-react";

export function TerminalRunner() {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Resplandor ambiental de fondo */}
      <div 
        className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-cyan-500/20 to-indigo-600/30 rounded-2xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000 -z-10 animate-pulse-glow"
        aria-hidden="true"
      />

      {/* Contenedor Principal de la Terminal */}
      <div
        className="glass-card rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono select-none"
        role="region"
        aria-label="Simulación de Playwright Test Runner en tiempo real"
      >
        {/* Barra superior con semáforo y pestañas */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#060a12]/90 border-b border-white/10">
          {/* Semáforo de control */}
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500/90 shadow-[0_0_8px_rgba(239,68,68,0.5)]" aria-hidden="true" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-[0_0_8px_rgba(234,179,8,0.5)]" aria-hidden="true" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" aria-hidden="true" />
            
            {/* Pestañas simuladas */}
            <div className="hidden sm:flex items-center space-x-1 ml-3 text-[11px] font-sans">
              <span className="px-2.5 py-0.5 rounded bg-white/10 text-white font-medium flex items-center gap-1.5 border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                e2e-regression.spec.ts
              </span>
              <span className="px-2.5 py-0.5 rounded text-gray-500 hover:text-gray-400 cursor-pointer">
                ci-pipeline.yml
              </span>
            </div>
          </div>

          {/* Etiqueta obligatoria: demo ilustrativa */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-qa-cyan bg-qa-cyan/10 px-2 py-0.5 rounded border border-qa-cyan/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-qa-cyan animate-ping" />
              demo ilustrativa
            </span>
          </div>
        </div>

        {/* Consola de ejecución */}
        <div className="p-5 sm:p-6 bg-[#040711]/95 text-xs sm:text-sm space-y-3 font-mono">
          <div className="flex items-center justify-between text-gray-500 text-xs border-b border-white/5 pb-2">
            <span>$ npx playwright test --project=&quot;vortice-ci&quot;</span>
            <span className="text-qa-cyan flex items-center gap-1">
              <Activity className="w-3 h-3 animate-pulse" />
              Worker 01: Ready
            </span>
          </div>

          <div className="space-y-2 pt-1 text-xs sm:text-[13px]">
            <p className="text-gray-400 flex items-center justify-between group">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-gray-300">auth-session-persistence.spec.ts</span>
              </span>
              <span className="text-gray-500 font-mono text-[11px]">142ms</span>
            </p>

            <p className="text-gray-400 flex items-center justify-between group">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-gray-300 font-medium">checkout-payment-gateway.spec.ts</span>
              </span>
              <span className="text-gray-500 font-mono text-[11px]">215ms</span>
            </p>

            <p className="text-gray-400 flex items-center justify-between group">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-gray-300">api-critical-endpoints.spec.ts</span>
              </span>
              <span className="text-gray-500 font-mono text-[11px]">96ms</span>
            </p>

            <p className="text-gray-400 flex items-center justify-between group">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-gray-300">database-transaction-gate.spec.ts</span>
              </span>
              <span className="text-gray-500 font-mono text-[11px]">82ms</span>
            </p>
          </div>

          {/* Barra de estado con resumen */}
          <div className="pt-4 mt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>4 PASSED (535ms) · 0 ERRORES EN PRODUCCIÓN</span>
            </div>
            <span className="text-[11px] text-gray-400 font-mono">
              Docker runner: 100% OK
            </span>
          </div>
        </div>
      </div>

      {/* Badges Flotantes de Neuromarketing */}
      <div 
        className="hidden sm:flex absolute -top-4 -right-4 glass-card px-3 py-1.5 rounded-full border border-blue-500/40 shadow-glow-sm items-center gap-2 text-xs font-sans text-white animate-float"
        aria-hidden="true"
      >
        <Zap className="w-3.5 h-3.5 text-qa-cyan" />
        <span className="font-semibold text-[11px]">Puesta en Marcha en 10 Días</span>
      </div>

      <div 
        className="hidden sm:flex absolute -bottom-4 -left-4 glass-card px-3 py-1.5 rounded-full border border-emerald-500/40 shadow-card-glass items-center gap-2 text-xs font-sans text-white animate-float-slow"
        aria-hidden="true"
      >
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
        <span className="font-semibold text-[11px]">100% Regresión Blindada</span>
      </div>
    </div>
  );
}
