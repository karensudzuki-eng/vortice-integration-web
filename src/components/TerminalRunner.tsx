import React from "react";

export function TerminalRunner() {
  return (
    <div
      className="bg-[#050811] border-2 border-gray-800 font-mono p-6 shadow-2xl relative overflow-hidden group select-none"
      role="region"
      aria-label="Simulación de Playwright Test Runner en tiempo real"
    >
      {/* Barra superior de la ventana */}
      <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-3">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" aria-hidden="true" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" aria-hidden="true" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" aria-hidden="true" />
          <span className="text-xs text-gray-400 ml-2">playwright-runner.sh</span>
        </div>
        <span className="text-[10px] text-gray-500 tracking-wider">vortice-ci-worker-01</span>
      </div>

      {/* Salida de consola */}
      <div className="space-y-2 text-sm">
        <p className="text-gray-500"> Running continuous regression suite...</p>
        <p className="text-qa-blue font-semibold">
          → pw:check-flow --target=&quot;vorticeintegration.cl&quot;
        </p>
        <p className="text-gray-400">
          i checkout-funnel ... <span className="text-gray-500">210ms</span>
        </p>
        <p className="text-gray-400">
          i integration-gateways ... <span className="text-gray-500">145ms</span>
        </p>
        <p className="text-gray-400">
          i auth-session-persistence ... <span className="text-gray-500">98ms</span>
        </p>

        {/* Status badge */}
        <div className="pt-3 flex flex-wrap items-center justify-between gap-2 border-t border-gray-900 mt-2">
          <span className="bg-qa-menta text-qa-dark font-bold px-3 py-1 text-xs border border-qa-dark uppercase tracking-tight flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-qa-blue animate-ping" aria-hidden="true" />
            ✓ VORTICE_QA_PIPELINE: PASSED (453ms)
          </span>
          <span className="text-xs font-mono text-gray-400">0 errors &bull; 100% stable</span>
        </div>
      </div>
    </div>
  );
}
