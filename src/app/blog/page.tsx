import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { BookOpen, Sparkles, Tag, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Publicaciones",
  description:
    "Artículos técnicos y criterios sobre calidad de software y automatización para empresas con software en producción.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BlogPage() {
  const futureCategories = [
    {
      name: "Calidad de Software y QA",
      description: "Pruebas continuas, automatización sensata y prevención de defectos.",
      badge: "Técnica",
    },
    {
      name: "Automatización en CI/CD",
      description: "Integración de suites de prueba en pipelines de despliegue continuo.",
      badge: "DevOps",
    },
    {
      name: "Gobierno y Criterios",
      description: "Matrices de regresión, acuerdos de equipo y control de pase a producción.",
      badge: "Operación",
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12">
      <div className="bg-white rounded-32 p-8 sm:p-12 border border-ash/30 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-tag bg-canvas text-dark text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-dark" aria-hidden="true" />
          <span>Espacio técnico</span>
        </div>

        <div className="space-y-3 max-w-2xl">
          <h1 className="font-display text-4xl sm:text-5xl text-dark tracking-tight uppercase leading-none">
            Publicaciones y Criterios Técnicos
          </h1>
          <p className="text-slate text-sm sm:text-base leading-relaxed">
            Espacio donde compartimos aprendizajes de ingeniería de pruebas, automatización y prácticas operativas para equipos medianos con software en producción.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {futureCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-canvas space-y-2 border border-ash/20"
            >
              <span className="text-[10px] uppercase font-bold bg-white text-dark px-2 py-0.5 rounded">
                {cat.badge}
              </span>
              <h2 className="font-display text-xl text-dark uppercase">{cat.name}</h2>
              <p className="text-xs text-slate leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-dark text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-dark/90 transition-colors"
          >
            <span>Volver al inicio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
