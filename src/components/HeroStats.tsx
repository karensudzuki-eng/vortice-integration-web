"use client";

import React, { useEffect, useRef, useState } from "react";
import { CheckCircle2, Terminal, ShieldCheck, Clock } from "lucide-react";

export function HeroStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Valores de los contadores
  const [daysCount, setDaysCount] = useState(0);
  const [failuresCount, setFailuresCount] = useState(5);
  const [pagesCount, setPagesCount] = useState(0);
  const [ciLoaded, setCiLoaded] = useState(false);

  useEffect(() => {
    // Si el usuario prefiere movimiento reducido, mostrar valores finales de inmediato
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDaysCount(10);
      setFailuresCount(0);
      setPagesCount(1);
      setCiLoaded(true);
      setHasAnimated(true);
      return;
    }

    const currentRef = containerRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // 1. Contador Días (0 -> 10)
          const daysTarget = 10;
          let currentDays = 0;
          const daysTimer = setInterval(() => {
            currentDays += 1;
            setDaysCount(currentDays);
            if (currentDays >= daysTarget) clearInterval(daysTimer);
          }, 80);

          // 2. Contador Fallas (5 -> 0, reducción de errores a cero)
          let currentFailures = 5;
          const failuresTimer = setInterval(() => {
            currentFailures -= 1;
            setFailuresCount(currentFailures);
            if (currentFailures <= 0) clearInterval(failuresTimer);
          }, 150);

          // 3. Páginas (0 -> 1)
          setTimeout(() => {
            setPagesCount(1);
          }, 400);

          // 4. CI/CD Terminal typing effect
          setTimeout(() => {
            setCiLoaded(true);
          }, 600);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10"
      aria-label="Métricas destacadas del servicio de QA"
    >
      {/* 1. Métrica: 10 Días */}
      <div className="relative group p-5 rounded-xl bg-gradient-to-b from-[#0e172c]/90 to-[#070b16]/90 border border-white/10 hover:border-qa-gold/50 transition-all duration-300 shadow-sm hover:shadow-gold-sm">
        {/* Marca técnica en esquina superior */}
        <span className="absolute top-2 right-2 text-[9px] font-mono text-qa-gold/60 select-none">
          [SLO]
        </span>
        <div className="flex items-center gap-2 mb-1">
          <Clock className="w-3.5 h-3.5 text-qa-gold" aria-hidden="true" />
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
            Tiempo
          </span>
        </div>
        <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-baseline gap-1">
          <span>{hasAnimated ? daysCount : 10}</span>
          <span className="text-sm font-sans font-semibold text-gray-300">Días</span>
        </div>
        <p className="text-xs text-gray-400 font-medium mt-1 leading-snug">
          Puesta en marcha básica
        </p>
      </div>

      {/* 2. Métrica: 0 Fallas */}
      <div className="relative group p-5 rounded-xl bg-gradient-to-b from-[#0e172c]/90 to-[#070b16]/90 border border-qa-gold/30 hover:border-qa-gold transition-all duration-300 shadow-gold-sm">
        <span className="absolute top-2 right-2 text-[9px] font-mono text-qa-gold select-none flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          PROD
        </span>
        <div className="flex items-center gap-2 mb-1">
          <ShieldCheck className="w-3.5 h-3.5 text-qa-gold" aria-hidden="true" />
          <span className="text-[10px] font-mono text-qa-gold-light uppercase tracking-wider">
            Objetivo
          </span>
        </div>
        <div className="text-2xl sm:text-3xl font-extrabold text-qa-gold font-mono flex items-baseline gap-1">
          <span>{hasAnimated ? failuresCount : 0}</span>
          <span className="text-sm font-sans font-semibold text-white">Fallas</span>
        </div>
        <p className="text-xs text-gray-400 font-medium mt-1 leading-snug">
          En checkout y flujos críticos
        </p>
      </div>

      {/* 3. Métrica: 1 a 2 Pág. */}
      <div className="relative group p-5 rounded-xl bg-gradient-to-b from-[#0e172c]/90 to-[#070b16]/90 border border-white/10 hover:border-qa-gold/50 transition-all duration-300 shadow-sm hover:shadow-gold-sm">
        <span className="absolute top-2 right-2 text-[9px] font-mono text-qa-gold/60 select-none">
          24H
        </span>
        <div className="flex items-center gap-2 mb-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-qa-gold" aria-hidden="true" />
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
            Informe
          </span>
        </div>
        <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-baseline gap-1">
          <span>{hasAnimated && pagesCount > 0 ? "1 a 2" : "1 a 2"}</span>
          <span className="text-sm font-sans font-semibold text-gray-300">Pág.</span>
        </div>
        <p className="text-xs text-gray-400 font-medium mt-1 leading-snug">
          Informe entregado en 24h
        </p>
      </div>

      {/* 4. Métrica: CI/CD */}
      <div className="relative group p-5 rounded-xl bg-gradient-to-b from-[#0e172c]/90 to-[#070b16]/90 border border-white/10 hover:border-qa-gold/50 transition-all duration-300 shadow-sm hover:shadow-gold-sm">
        <span className="absolute top-2 right-2 text-[9px] font-mono text-qa-gold/60 select-none">
          E2E
        </span>
        <div className="flex items-center gap-2 mb-1">
          <Terminal className="w-3.5 h-3.5 text-qa-gold" aria-hidden="true" />
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
            Pipeline
          </span>
        </div>
        <div className="text-2xl sm:text-3xl font-extrabold text-qa-gold-light font-mono flex items-center">
          <span>CI/CD</span>
          <span className={`inline-block w-2 h-4 bg-qa-gold ml-1 ${ciLoaded ? "opacity-0" : "animate-pulse"}`} />
        </div>
        <p className="text-xs text-gray-400 font-medium mt-1 leading-snug">
          Playwright en tu repositorio
        </p>
      </div>
    </div>
  );
}
