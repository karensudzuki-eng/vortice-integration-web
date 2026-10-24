import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Quiénes Somos | Vórtice Integration",
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
    <div className="w-full bg-qa-canvas min-h-screen">
      {/* Cabecera */}
      <section className="bg-qa-dark text-white py-16 px-6 border-b border-qa-dark">
        <div className="max-w-6xl mx-auto space-y-4">
          <span className="font-mono text-xs text-qa-blue uppercase tracking-widest block font-bold">
            // Perfil Institucional
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-none">
            Quiénes Somos
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl font-sans leading-relaxed">
            Ingeniería de pruebas y automatización continua para plataformas en producción.
          </p>
        </div>
      </section>

      {/* Tarjeta Informativa Brutalista */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <div className="bg-white border-2 border-qa-dark p-8 sm:p-12 shadow-brutal-dark space-y-6">
          <span className="font-mono text-xs text-qa-blue uppercase font-bold block">
            // Vórtice Integration Holding SpA
          </span>

          <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-sans">
            Vórtice Integration es una firma chilena de ingeniería orientada a la puesta en marcha de áreas de calidad de software y automatización para empresas medianas y pymes con productos en producción. Diseñamos marcos de prueba pragmáticos e integrados en CI para que los equipos dejen de probar a última hora.
          </p>

          <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="text-xs font-mono text-gray-500">
              RUT: 78.377.882-3 &bull; Santiago de Chile
            </div>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 bg-qa-dark text-white font-mono text-xs uppercase font-bold px-6 py-3 hover:bg-qa-blue transition-colors"
            >
              <span>Conoce nuestros servicios</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
