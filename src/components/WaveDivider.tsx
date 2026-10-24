import React from "react";

interface WaveDividerProps {
  flip?: boolean;
  className?: string;
  fillColor?: string;
}

export function WaveDivider({
  flip = false,
  className = "",
  fillColor = "#060a14",
}: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-8 sm:h-12 md:h-16 block transition-transform ${
          flip ? "rotate-180" : ""
        }`}
        preserveAspectRatio="none"
      >
        {/* Línea de resplandor dorado suave en la cresta de la ola */}
        <path
          d="M0 32C240 68 480 8 720 36C960 64 1200 16 1440 44"
          stroke="#C9AE5C"
          strokeOpacity="0.25"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Cuerpo de la ola */}
        <path
          d="M0 32C240 68 480 8 720 36C960 64 1200 16 1440 44V72H0V32Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
