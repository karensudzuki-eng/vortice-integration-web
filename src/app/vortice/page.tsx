import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Quiénes Somos",
  description:
    "Vórtice Integration es una firma chilena especializada en la puesta en marcha de áreas de calidad de software y automatización para empresas medianas y pymes.",
  openGraph: {
    title: "Quiénes Somos | Vórtice Integration",
    description:
      "Puesta en marcha de áreas de calidad de software y automatización para empresas medianas y pymes con software en producción.",
  },
};

export default function VorticePage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="bg-white rounded-32 p-8 sm:p-14 border border-ash/30 max-w-2xl mx-auto space-y-6 text-center">
        <div className="inline-flex items-center gap-2 bg-mint text-dark text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-tag mx-auto">
          <span>Sobre Vórtice Integration</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl text-dark tracking-tight uppercase leading-tightest">
          Quiénes Somos
        </h1>

        <p className="text-base sm:text-lg text-slate leading-relaxed text-left sm:text-center">
          Vórtice Integration es una firma chilena de ingeniería orientada a la puesta en marcha de áreas de calidad de software y automatización para empresas medianas y pymes con productos en producción. Diseñamos marcos de prueba pragmáticos e integrados en CI para que los equipos dejen de probar a última hora.
        </p>

        <div className="pt-4 flex justify-center">
          <Link
            href="/servicios"
            className="inline-flex items-center justify-center gap-2 bg-dark text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-dark/90 transition-colors"
          >
            <span>Conoce nuestros servicios</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
