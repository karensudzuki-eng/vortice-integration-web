import React from "react";

export function DiagramSystem({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full max-w-xl mx-auto p-4 bg-white rounded-2xl border border-slate-200 shadow-sm ${className}`}
      role="region"
      aria-label="Diagrama del marco sistémico Vórtice"
    >
      <div className="text-center mb-4">
        <span className="text-xs uppercase tracking-wider font-semibold text-vortice-600 bg-vortice-50 px-2.5 py-1 rounded-full border border-vortice-100">
          Marco Sistémico Vórtice
        </span>
        <h3 className="text-base font-semibold text-slate-800 mt-2">
          El punto de encuentro entre personas y sistemas
        </h3>
        <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
          Las fallas raramente nacen aisladas en una línea de código o en un individuo. Emergen en la fricción de sus intersecciones.
        </p>
      </div>

      <svg
        viewBox="0 0 500 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm select-none"
        role="img"
        aria-label="Diagrama de intersección de tres áreas: Personas y acuerdos, Procesos y flujos, Tecnología y código. En el centro: Foco Vórtice de encuentro y diagnóstico."
      >
        <title>Diagrama del Marco Sistémico Vórtice</title>

        {/* Círculo 1: Personas y Acuerdos (Superior) */}
        <circle
          cx="250"
          cy="150"
          r="115"
          fill="#334E68"
          fillOpacity="0.08"
          stroke="#334E68"
          strokeWidth="2"
          strokeDasharray="4 4"
        />

        {/* Círculo 2: Procesos y Flujos (Inferior Izquierda) */}
        <circle
          cx="175"
          cy="265"
          r="115"
          fill="#16A34A"
          fillOpacity="0.06"
          stroke="#16A34A"
          strokeWidth="2"
        />

        {/* Círculo 3: Tecnología y Código (Inferior Derecha) */}
        <circle
          cx="325"
          cy="265"
          r="115"
          fill="#0284C7"
          fillOpacity="0.06"
          stroke="#0284C7"
          strokeWidth="2"
        />

        {/* Núcleo Central: Foco Vórtice */}
        <ellipse
          cx="250"
          cy="235"
          rx="45"
          ry="32"
          fill="#102A43"
          className="transition-all"
        />
        <text
          x="250"
          y="232"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="12"
          fontWeight="bold"
        >
          ENCUENTRO
        </text>
        <text
          x="250"
          y="247"
          textAnchor="middle"
          fill="#9FB3C8"
          fontSize="10"
        >
          Diagnóstico raíz
        </text>

        {/* Textos de los nodos */}
        {/* Superior: Personas */}
        <text
          x="250"
          y="85"
          textAnchor="middle"
          fill="#102A43"
          fontSize="14"
          fontWeight="700"
        >
          Personas y Dinámicas
        </text>
        <text
          x="250"
          y="103"
          textAnchor="middle"
          fill="#486581"
          fontSize="11"
        >
          Expectativas, roles y comunicación
        </text>

        {/* Inferior Izquierda: Procesos */}
        <text
          x="120"
          y="340"
          textAnchor="middle"
          fill="#166534"
          fontSize="14"
          fontWeight="700"
        >
          Procesos y Flujos
        </text>
        <text
          x="120"
          y="358"
          textAnchor="middle"
          fill="#4B5563"
          fontSize="11"
        >
          Criterios de entrega y traspasos
        </text>

        {/* Inferior Derecha: Tecnología */}
        <text
          x="380"
          y="340"
          textAnchor="middle"
          fill="#0369A1"
          fontSize="14"
          fontWeight="700"
        >
          Tecnología y Código
        </text>
        <text
          x="380"
          y="358"
          textAnchor="middle"
          fill="#4B5563"
          fontSize="11"
        >
          QA, arquitectura y automatización
        </text>

        {/* Flechas indicativas */}
        <path
          d="M 230 185 L 210 215"
          stroke="#94A3B8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 270 185 L 290 215"
          stroke="#94A3B8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 215 270 L 285 270"
          stroke="#94A3B8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
