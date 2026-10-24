"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  IconPipelineGit,
  IconPipelineRunner,
  IconPipelineGatekeeper,
  IconPipelineDeploy,
} from "@/components/icons/GoldIcons";

export function CiPipelineDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDrawn, setIsDrawn] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    // Si el usuario prefiere movimiento reducido, mostrar línea completamente dibujada
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsDrawn(true);
      setActiveStep(3);
      return;
    }

    const currentRef = containerRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isDrawn) {
          setIsDrawn(true);

          // Activar secuencialmente los 4 pasos
          const stepTimer = setInterval(() => {
            setActiveStep((prev) => {
              if (prev >= 3) {
                clearInterval(stepTimer);
                return 3;
              }
              return prev + 1;
            });
          }, 600);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [isDrawn]);

  const steps = [
    {
      id: "fase-1",
      number: "Fase 1",
      title: "Pull Request / Commit",
      subtitle: "Repositorio",
      desc: "El desarrollador sube código nuevo sin modificar sus hábitos de trabajo.",
      badge: "TRIGGER_CI",
      icon: IconPipelineGit,
    },
    {
      id: "fase-2",
      number: "Fase 2",
      title: "Playwright Docker Runner",
      subtitle: "Contenedores",
      desc: "Se ejecutan las suites de prueba E2E de forma aislada y reproducible en la nube.",
      badge: "E2E TESTS",
      icon: IconPipelineRunner,
    },
    {
      id: "fase-3",
      number: "Fase 3",
      title: "Gatekeeper de Calidad",
      subtitle: "Validación",
      desc: "Se validan automáticamente las pasarelas, autenticación y flujos críticos de negocio.",
      badge: "GATE_PASS",
      icon: IconPipelineGatekeeper,
    },
    {
      id: "fase-4",
      number: "Fase 4",
      title: "Despliegue Seguro",
      subtitle: "Producción",
      desc: "El software llega a los usuarios finales con 0 bugs críticos y certeza total del equipo.",
      badge: "PROD_READY",
      icon: IconPipelineDeploy,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-6xl mx-auto py-6"
      aria-label="Diagrama de flujo de integración continua"
    >
      {/* LÍNEA DE CIRCUITO DIBUJADA EN SVG CON PULSO DE LUZ VIAJERO (EN ESCRITORIO) */}
      <div className="hidden lg:block absolute top-[72px] left-[10%] right-[10%] h-6 pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 1000 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          {/* Línea base tenue */}
          <path
            d="M 0 12 L 1000 12"
            stroke="#C9AE5C"
            strokeWidth="2"
            strokeOpacity="0.2"
            strokeDasharray="4 4"
          />

          {/* Línea dorada que se 'dibuja' al hacer scroll */}
          <path
            d="M 0 12 L 1000 12"
            stroke="url(#pipelineGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{
              strokeDasharray: 1000,
              strokeDashoffset: isDrawn ? 0 : 1000,
              transition: "stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />

          {/* Pulso de luz viajero que va de nodo en nodo */}
          {isDrawn && (
            <circle r="4" fill="#E0C878" filter="url(#glowFilter)">
              <animateMotion
                path="M 0 12 L 1000 12"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>
          )}

          <defs>
            <linearGradient id="pipelineGradient" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C9AE5C" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#E0C878" stopOpacity="1" />
              <stop offset="100%" stopColor="#C9AE5C" stopOpacity="0.9" />
            </linearGradient>

            <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>

      {/* GRID DE LAS 4 FASES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {steps.map((step, idx) => {
          const IconComp = step.icon;
          const isCurrentActive = idx <= activeStep;

          return (
            <div
              key={step.id}
              className={`glass-card p-6 rounded-xl border transition-all duration-500 relative flex flex-col justify-between space-y-4 ${
                isCurrentActive
                  ? "border-qa-gold/60 shadow-gold-sm bg-[#0a1224]"
                  : "border-white/10 opacity-70"
              }`}
            >
              {/* Esquinas con estilo técnico */}
              <span className="absolute top-2 right-2 text-[9px] font-mono text-qa-gold/70 px-1.5 py-0.5 rounded bg-qa-gold/10 border border-qa-gold/20">
                {step.badge}
              </span>

              <div className="space-y-3">
                {/* Ícono de fase en estilo lineal fénix */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                    isCurrentActive
                      ? "bg-qa-gold/20 border-qa-gold text-qa-gold shadow-gold-sm"
                      : "bg-white/5 border-white/10 text-gray-400"
                  }`}
                >
                  <IconComp size={26} />
                </div>

                <div>
                  <span className="text-[10px] font-mono text-qa-gold uppercase font-bold tracking-widest block">
                    {step.number} // {step.subtitle}
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Indicador de conexión en la base */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isCurrentActive ? "bg-qa-gold animate-pulse" : "bg-gray-600"
                    }`}
                  />
                  {isCurrentActive ? "En ejecución" : "En espera"}
                </span>
                <span className="text-qa-gold">0{idx + 1}/04</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
