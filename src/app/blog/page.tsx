import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Publicaciones | Vórtice Integration",
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
    <div className="w-full bg-qa-dark text-gray-100 min-h-screen">
      {/* Cabecera */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 border-b border-qa-border">
        <div className="max-w-6xl mx-auto space-y-4">
          <span className="font-mono text-xs text-qa-blue uppercase tracking-widest block font-bold">
            // Criterios & Buenas Prácticas
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Publicaciones Técnicas
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl font-sans leading-relaxed">
            Espacio donde compartimos aprendizajes de ingeniería de pruebas, automatización y prácticas operativas para equipos medianos con software en producción.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {futureCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 bg-qa-surface border border-qa-border rounded-lg space-y-3"
            >
              <span className="text-xs font-mono uppercase font-bold text-qa-blue bg-qa-blue/10 px-2 py-0.5 rounded border border-qa-blue/30 inline-block">
                {cat.badge}
              </span>
              <h2 className="text-lg font-bold text-white">{cat.name}</h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                {cat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-qa-surface hover:bg-qa-surface-light border border-qa-border text-white font-mono text-xs uppercase font-bold px-5 py-2.5 rounded transition-colors"
          >
            <span>Volver al inicio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
