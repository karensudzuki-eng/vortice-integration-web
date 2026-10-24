"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Zap, Activity } from "lucide-react";

export function HeroOrbit() {
  const stages = [
    {
      id: "stage-1",
      name: "Levantamiento",
      detail: "30 min online · $0 CLP",
      icon: Activity,
      positionClass: "top-2 sm:top-4 left-1/2 -translate-x-1/2",
    },
    {
      id: "stage-2",
      name: "Puesta en marcha",
      detail: "10 días · CI/CD & Playwright",
      icon: Zap,
      positionClass: "bottom-10 left-2 sm:left-4",
    },
    {
      id: "stage-3",
      name: "Soporte mensual",
      detail: "20 hrs · Cobertura & Regresión",
      icon: ShieldCheck,
      positionClass: "bottom-10 right-2 sm:right-4",
    },
  ];

  return (
    <div className="relative w-full max-w-[460px] sm:max-w-[500px] aspect-square mx-auto flex items-center justify-center select-none">
      {/* Resplandor dorado suave de fondo */}
      <div 
        className="absolute w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-qa-gold/15 blur-3xl pointer-events-none animate-gold-pulse"
        aria-hidden="true"
      />

      {/* Anillo de órbita elíptico en dorado tenue */}
      <div 
        className="absolute inset-4 sm:inset-6 rounded-full border border-dashed border-qa-gold/25 pointer-events-none animate-orbit-slow"
        aria-hidden="true"
      >
        {/* Puntos brillantes en la órbita */}
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-qa-gold shadow-gold-sm" />
        <span className="absolute bottom-1/4 right-0 translate-x-1/2 w-1.5 h-1.5 rounded-full bg-qa-gold-light" />
        <span className="absolute bottom-1/4 left-0 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-qa-gold-light" />
      </div>

      <div 
        className="absolute inset-16 sm:inset-20 rounded-full border border-qa-gold/15 pointer-events-none"
        aria-hidden="true"
      />

      {/* CENTRO: Fénix del logo oficial en animación lenta */}
      <div className="relative z-10 w-44 sm:w-56 h-44 sm:h-56 flex items-center justify-center animate-float-slow">
        <div className="relative w-full h-full p-2 filter drop-shadow-[0_0_18px_rgba(201,174,92,0.45)]">
          <Image
            src="/fenix.png"
            alt="Fénix Vórtice Integration"
            width={240}
            height={240}
            priority
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* LAS TRES ETAPAS DEL SERVICIO EN ÓRBITA */}
      {stages.map((stage) => {
        const IconComponent = stage.icon;
        return (
          <div
            key={stage.id}
            className={`absolute z-20 ${stage.positionClass} transition-all duration-300`}
          >
            <div className="glass-card px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full border border-qa-gold/40 shadow-gold-sm hover:shadow-gold-md hover:border-qa-gold transition-all flex items-center gap-2 sm:gap-2.5 group">
              <span className="w-6 h-6 rounded-full bg-qa-gold/20 border border-qa-gold/40 flex items-center justify-center text-qa-gold shrink-0">
                <IconComponent className="w-3.5 h-3.5" />
              </span>
              <div className="flex flex-col text-left">
                <span className="text-xs sm:text-sm font-bold text-white group-hover:text-qa-gold-light transition-colors leading-tight">
                  {stage.name}
                </span>
                <span className="text-[10px] font-mono text-gray-400 leading-tight">
                  {stage.detail}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
