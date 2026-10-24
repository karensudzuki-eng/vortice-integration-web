import React from "react";

interface GlowDividerProps {
  className?: string;
  withNode?: boolean;
  label?: string;
}

export function GlowDivider({
  className = "",
  withNode = true,
  label,
}: GlowDividerProps) {
  return (
    <div
      className={`relative w-full flex items-center justify-center my-4 select-none pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Resplandor ambiental difuso detrás de la línea */}
      <div className="absolute w-2/3 h-6 bg-qa-gold/15 blur-md rounded-full" />

      {/* Línea horizontal con degradado hacia los extremos */}
      <div className="relative w-full max-w-6xl mx-auto flex items-center px-4 sm:px-6">
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-qa-gold/50 to-qa-gold" />

        {withNode && (
          <div className="mx-4 flex items-center gap-2 shrink-0">
            {/* Pequeña línea de circuito izquierda */}
            <span className="w-1.5 h-1.5 rounded-full bg-qa-gold/60" />
            
            {/* Diamante técnico central con brillo */}
            <div className="relative flex items-center justify-center">
              <span className="w-3 h-3 rotate-45 border border-qa-gold bg-[#060a14] shadow-gold-sm" />
              <span className="absolute w-1.5 h-1.5 rotate-45 bg-qa-gold-light" />
            </div>

            {label && (
              <span className="text-[10px] font-mono uppercase tracking-widest text-qa-gold font-bold px-2 py-0.5 rounded bg-qa-gold/10 border border-qa-gold/25">
                {label}
              </span>
            )}

            {/* Pequeña línea de circuito derecha */}
            <span className="w-1.5 h-1.5 rounded-full bg-qa-gold/60" />
          </div>
        )}

        <div className="flex-1 h-[1px] bg-gradient-to-r from-qa-gold via-qa-gold/50 to-transparent" />
      </div>
    </div>
  );
}
