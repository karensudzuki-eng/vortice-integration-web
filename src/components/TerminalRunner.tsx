import React from "react";
import { CheckCircle2, ShieldCheck, Zap, Activity } from "lucide-react";

export function TerminalRunner() {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Resplandor dorado suave de fondo */}
      <div 
        className="absolute -inset-1 bg-gradient-to-r from-qa-gold/25 via-qa-gold-light/15 to-qa-gold-dark/20 rounded-2xl blur-2xl opacity-60 pointer-events-none -z-10 animate-gold-pulse"
        aria-hidden="true"
      />

      {/* Contenedor Principal de la Terminal */}
      <div
        className="glass-card rounded-xl border border-qa-gold/30 shadow-2xl overflow-hidden font-mono select-none"
        role="region"
        aria-label="Simulación de Playwright Test Runner en tiempo real"
      >
        {/* Barra superior con semáforo y pestañas */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#050812]/95 border-b border-qa-border">
          {/* Semáforo de control */}
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500/90 shadow-[0_0_8px_rgba(239,68,68,0.5)]" aria-hidden="true" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-[0_0_8px_rgba(234,179,8,0.5)]" aria-hidden="true" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" aria-hidden="true" />
            
            {/* Pestañas simuladas */}
            <div className="hidden sm:flex items-center space-x-1 ml-3 text-[11px] font-sans">
              <span className="px-2.5 py-0.5 rounded bg-qa-navy-surface text-qa-gold-light font-medium flex items-center gap-1.5 border border-qa-gold/30">
                <span className="w-1.5 h-1.5 rounded-full bg-qa-gold" />
                e2e-regression.spec.ts
              </span>
              <span className="px-2.5 py-0.5 rounded text-gray-400 hover:text-gray-300 cursor-pointer">
                ci-pipeline.yml
              </span>
            </div>
          </div>

          {/* Etiqueta obligatoria: demo ilustrativa */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-qa-gold bg-qa-gold/10 px-2 py-0.5 rounded border border-qa-gold/40 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-qa-gold animate-ping" />
              demo ilustrativa
            </span>
          </div>
        </div>

        {/* Consola de ejecución */}
        <div className="p-5 sm:p-6 bg-[#04060d]/98 text-xs sm:text-sm space-y-3 font-mono">
          <div className="flex items-center justify-between text-gray-400 text-xs border-b border-qa-border pb-2">
            <span>$ npx playwright test --project=&quot;vortice-ci&quot;</span>
            <span className="text-qa-gold flex items-center gap-1">
              <Activity className="w-3 h-3 animate-pulse" />
              Worker 01: Ready
            </span>
          </div>

          <div className="space-y-2 pt-1 text-xs sm:text-[13px]">
            <p className="text-gray-400 flex items-center justify-between group">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-qa-gold shrink-0" />
                <span className="text-gray-200">auth-session-persistence.spec.ts</span>
              </span>
              <span className="text-qa-gold-light font-mono text-[11px]">142ms</span>
            </p>

            <p className="text-gray-400 flex items-center justify-between group">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-qa-gold shrink-0" />
                <span className="text-gray-200 font-medium">checkout-payment-gateway.spec.ts</span>
              </span>
              <span className="text-qa-gold-light font-mono text-[11px]">215ms</span>
            </p>

            <p className="text-gray-400 flex items-center justify-between group">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-qa-gold shrink-0" />
                <span className="text-gray-200">api-critical-endpoints.spec.ts</span>
              </span>
              <span className="text-qa-gold-light font-mono text-[11px]">96ms</span>
            </p>

            <p className="text-gray-400 flex items-center justify-between group">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-qa-gold shrink-0" />
                <span className="text-gray-200">database-transaction-gate.spec.ts</span>
              </span>
              <span className="text-qa-gold-light font-mono text-[11px]">82ms</span>
            </p>
          </div>

          {/* Barra de estado con resumen */}
          <div className="pt-4 mt-3 border-t border-qa-border flex flex-wrap items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-qa-gold/10 border border-qa-gold/30 text-qa-gold-light text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-qa-gold" />
              <span>4 PASSED (535ms) · 0 ERRORES EN PRODUCCIÓN</span>
            </div>
            <span className="text-[11px] text-gray-400 font-mono">
              CI/CD: 100% OK
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
