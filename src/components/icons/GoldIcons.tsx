import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

// -------------------------------------------------------------
// DIAGNÓSTICO DE SITUACIÓN
// -------------------------------------------------------------

// 01. Bugs después de cada despliegue: Circuito con fallo de regresión y chispas geométricas
export function IconBugRegression({ className = "", size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="10" y="9" width="12" height="14" rx="2" stroke="#C9AE5C" strokeWidth="1.5" />
      <path d="M16 4V9" stroke="#E0C878" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 6L14 9M20 6L18 9" stroke="#C9AE5C" strokeWidth="1.2" strokeLinecap="round" />
      {/* Patas lineales tipo circuito */}
      <path d="M6 12H10M22 12H26" stroke="#C9AE5C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 18L10 17M27 18L22 17" stroke="#C9AE5C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 24L11 22M25 24L21 22" stroke="#C9AE5C" strokeWidth="1.5" strokeLinecap="round" />
      {/* Fallo geométrico en el centro */}
      <path d="M14 13L18 19M18 13L14 19" stroke="#E0C878" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="16" r="6" stroke="#C9AE5C" strokeWidth="0.8" strokeDasharray="2 2" />
    </svg>
  );
}

// 02. Pruebas manuales a última hora: Reloj técnico con manecillas apresuradas y engranaje facetado
export function IconManualRush({ className = "", size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="11" stroke="#C9AE5C" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="13.5" stroke="#C9AE5C" strokeWidth="0.8" strokeDasharray="2 2" strokeOpacity="0.6" />
      {/* Marcas horarias técnicas */}
      <path d="M16 6V8M16 24V26M6 16H8M24 16H26" stroke="#E0C878" strokeWidth="1.5" strokeLinecap="round" />
      {/* Manecillas en ángulo tenso */}
      <path d="M16 16L16 10M16 16L21 14" stroke="#E0C878" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="16" cy="16" r="2" fill="#C9AE5C" />
      {/* Líneas de aceleración */}
      <path d="M22 6L25 9M7 9L10 6" stroke="#C9AE5C" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

// 03. Incertidumbre sobre qué está probado: Radar con cuadrícula y zona ciega
export function IconCoverageBlindspot({ className = "", size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <polygon points="16,3 29,16 16,29 3,16" stroke="#C9AE5C" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="8" stroke="#C9AE5C" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="16" y1="3" x2="16" y2="29" stroke="#C9AE5C" strokeWidth="0.8" strokeOpacity="0.4" />
      <line x1="3" y1="16" x2="29" y2="16" stroke="#C9AE5C" strokeWidth="0.8" strokeOpacity="0.4" />
      {/* Signo de interrogación / Punto ciego */}
      <circle cx="16" cy="16" r="2" fill="#E0C878" />
      <path d="M21 11L25 7" stroke="#E0C878" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// -------------------------------------------------------------
// ARQUITECTURA DE AUTOMATIZACIÓN (4 FASES)
// -------------------------------------------------------------

// Fase 1: Pull Request / Commit (Ramas git con nodos hexagonales)
export function IconPipelineGit({ className = "", size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="9" cy="8" r="3" stroke="#C9AE5C" strokeWidth="1.5" />
      <circle cx="9" cy="24" r="3" stroke="#C9AE5C" strokeWidth="1.5" />
      <circle cx="23" cy="14" r="3" stroke="#E0C878" strokeWidth="1.5" />
      <line x1="9" y1="11" x2="9" y2="21" stroke="#C9AE5C" strokeWidth="1.5" />
      <path d="M9 14C14 14 17 14 20 14" stroke="#E0C878" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 11L22 14L19 17" stroke="#E0C878" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Fase 2: Playwright Docker Runner (Contenedor isométrico y terminal de ejecución)
export function IconPipelineRunner({ className = "", size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Caja isométrica del contenedor */}
      <polygon points="16,4 27,10 27,22 16,28 5,22 5,10" stroke="#C9AE5C" strokeWidth="1.5" />
      <line x1="16" y1="4" x2="16" y2="16" stroke="#C9AE5C" strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="5" y1="10" x2="16" y2="16" stroke="#C9AE5C" strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="27" y1="10" x2="16" y2="16" stroke="#C9AE5C" strokeWidth="1.2" strokeOpacity="0.7" />
      {/* Prompt '>' dentro */}
      <path d="M13 18L16 20L13 22" stroke="#E0C878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="18" y1="22" x2="20" y2="22" stroke="#E0C878" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Fase 3: Gatekeeper de Calidad (Escudo geométrico con candado y validación de reglas)
export function IconPipelineGatekeeper({ className = "", size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 4L26 8V16C26 22 21 26 16 28C11 26 6 22 6 16V8L16 4Z"
        stroke="#C9AE5C"
        strokeWidth="1.5"
      />
      {/* Línea central de escaneo */}
      <line x1="11" y1="15" x2="21" y2="15" stroke="#E0C878" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="15" r="2.5" fill="#C9AE5C" />
      <path d="M16 8V11M16 19V22" stroke="#C9AE5C" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

// Fase 4: Despliegue Seguro (Lanzadera a producción con doble check de verificación)
export function IconPipelineDeploy({ className = "", size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="12" stroke="#C9AE5C" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="14" stroke="#E0C878" strokeWidth="0.8" strokeDasharray="3 3" />
      {/* Checkmark doble de certeza total */}
      <path d="M10 16L14 20L22 12" stroke="#E0C878" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 16L16 18L20 14" stroke="#C9AE5C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" />
    </svg>
  );
}

// -------------------------------------------------------------
// CRITERIOS DE ENCAJE: PARA QUIÉN SÍ / PARA QUIÉN NO
// -------------------------------------------------------------

export function IconFitCheck({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" stroke="#C9AE5C" strokeWidth="1.5" />
      <path d="M8 12L11 15L16 9" stroke="#E0C878" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconFitCross({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" stroke="#6b7280" strokeWidth="1.5" />
      <path d="M9 9L15 15M15 9L9 15" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// -------------------------------------------------------------
// METODOLOGÍA VÓRTICE (4 PILARES)
// -------------------------------------------------------------

// Pilar 1: Diagnóstico de fricción y acuerdos claros
export function IconMethodAudit({ className = "", size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="6" y="5" width="20" height="22" rx="3" stroke="#C9AE5C" strokeWidth="1.5" />
      <line x1="11" y1="11" x2="21" y2="11" stroke="#E0C878" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11" y1="16" x2="18" y2="16" stroke="#C9AE5C" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="11" y1="21" x2="16" y2="21" stroke="#C9AE5C" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="21" cy="20" r="4" stroke="#E0C878" strokeWidth="1.5" />
      <line x1="24" y1="23" x2="27" y2="26" stroke="#E0C878" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Pilar 2: Automatización de flujos críticos
export function IconMethodCritical({ className = "", size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="10" stroke="#C9AE5C" strokeWidth="1.5" />
      {/* Rayo central geométrico */}
      <path d="M17 7L11 16H16L15 25L21 15H16L17 7Z" stroke="#E0C878" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="13" stroke="#C9AE5C" strokeWidth="0.8" strokeDasharray="3 3" />
    </svg>
  );
}

// Pilar 3: Integración en CI/CD continuo
export function IconMethodLoop({ className = "", size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Símbolo infinito geométrico */}
      <path
        d="M10 16C10 12.5 13 10 16 16C19 22 22 19.5 22 16C22 12.5 19 10 16 16C13 22 10 19.5 10 16Z"
        stroke="#C9AE5C"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="8" cy="16" r="2" fill="#E0C878" />
      <circle cx="24" cy="16" r="2" fill="#E0C878" />
    </svg>
  );
}

// Pilar 4: Gobernanza y visibilidad compartida
export function IconMethodGovernance({ className = "", size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="5" y="7" width="22" height="18" rx="2" stroke="#C9AE5C" strokeWidth="1.5" />
      {/* Barras de telemetría */}
      <line x1="10" y1="21" x2="10" y2="17" stroke="#E0C878" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="21" x2="16" y2="13" stroke="#E0C878" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="21" x2="22" y2="10" stroke="#E0C878" strokeWidth="2" strokeLinecap="round" />
      <line x1="5" y1="11" x2="27" y2="11" stroke="#C9AE5C" strokeWidth="0.8" strokeOpacity="0.5" />
    </svg>
  );
}
