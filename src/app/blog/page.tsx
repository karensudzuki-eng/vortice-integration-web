import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { BookOpen, ArrowRight } from "lucide-react";

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
    <div className="w-full bg-qa-canvas min-h-screen">
      {/* Cabecera */}
      <section className="bg-qa-dark text-white py-16 px-6 border-b border-qa-dark">
        <div className="max-w-6xl mx-auto space-y-4">
          <span className="font-mono text-xs text-qa-blue uppercase tracking-widest block font-bold">
            // Criterios & Buenas Prácticas
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-none">
            Publicaciones Técnicas
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl font-sans leading-relaxed">
            Espacio donde compartimos aprendizajes de ingeniería de pruebas, automatización y prácticas operativas para equipos medianos con software en producción.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="max-w-6xl mx-auto py-16 px-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {futureCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border-2 border-qa-dark space-y-3 shadow-brutal-dark"
            >
              <span className="text-xs font-mono uppercase font-bold bg-qa-neon text-qa-dark px-2 py-0.5 border border-qa-dark inline-block">
                {cat.badge}
              </span>
              <h2 className="text-xl font-bold text-qa-dark">{cat.name}</h2>
              <p className="text-xs text-gray-700 leading-relaxed font-sans">
                {cat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-qa-dark text-white font-mono text-xs uppercase font-bold px-6 py-3 hover:bg-qa-blue transition-colors"
          >
            <span>Volver al inicio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
