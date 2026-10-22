import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { BookOpen, Sparkles, ArrowRight, Tag, Bell } from "lucide-react";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Blog y Reflexiones | Vórtice Integration SpA",
  description:
    "Artículos técnicos, aprendizajes de campo y reflexiones sobre calidad de software, dinámicas de equipo y diagnóstico sistémico en Chile.",
  openGraph: {
    title: "Blog y Publicaciones | Vórtice Integration SpA",
    description:
      "Publicaciones sobre calidad de software, dinámicas de equipo y diagnóstico sistémico para empresas chilenas.",
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
      name: "Dinámicas Humanas de Equipo",
      description: "Comunicación, acuerdos de trabajo, roles y prevención del agotamiento.",
      badge: "Sistémica",
    },
    {
      name: "Diagnóstico y Madurez",
      description: "Métricas que importan, visibilización de cuellos de botella y gobierno ágil.",
      badge: "Operación",
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-20 py-8 sm:py-12">
      {/* 1. HERO CABECERA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-vortice-100 text-vortice-900 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-vortice-700" aria-hidden="true" />
            <span>Publicaciones y Aprendizajes</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Bitácora de campo: reflexiones sobre software y personas
          </h1>

          <p className="text-lg text-slate-700 leading-relaxed">
            Un espacio editorial donde compartiremos aprendizajes de proyectos reales, criterios técnicos de calidad y miradas sobre cómo los equipos de desarrollo pueden operar con mayor fluidez y menor desgaste.
          </p>
        </div>
      </section>

      {/* 2. AVISO ESTRUCTURA LISTA - FASE 2 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider border border-amber-200">
              <Sparkles className="w-4 h-4 text-amber-600" aria-hidden="true" />
              <span>Espacio en preparación &bull; Fase 2</span>
            </div>

            <span className="text-xs text-slate-400 font-mono">
              [ESTRUCTURA LISTA SIN CONTENIDOS FICTICIOS]
            </span>
          </div>

          <div className="space-y-4 max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-900">
              Próximas publicaciones redactadas por la fundadora
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              En coherencia con nuestra política de transparencia, no publicamos textos de relleno generados automáticamente ni artículos ficticios. Los artículos serán publicados directamente por la fundadora y el equipo técnico a medida que se sistematicen nuevos casos y aprendizajes.
            </p>
          </div>

          {/* Categorías Temáticas */}
          <div>
            <h3 className="text-xs uppercase font-bold text-slate-500 tracking-wider mb-4">
              Líneas temáticas editoriales previstas:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {futureCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <Tag className="w-4 h-4 text-vortice-700" aria-hidden="true" />
                    <span className="text-[10px] uppercase font-bold bg-white text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                      {cat.badge}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">{cat.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Notificación para la fundadora */}
          <div className="p-4 bg-slate-50 rounded-xl border border-dashed border-slate-300 text-xs font-mono text-slate-600 space-y-1">
            <p className="font-bold text-slate-800">[INSTRUCCIÓN EDITORIAL PARA LA FUNDADORA]</p>
            <p>
              Para activar la Fase 2, se puede vincular una colección de contenido en Markdown/MDX o un CMS Headless (ej. Sanity, Supabase o Strapi) utilizando el layout ya estructurado en esta página.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaSection
          title="¿Prefieres conversar directamente sobre tu caso?"
          description="No necesitas esperar a que publiquemos un artículo para resolver tus dudas operacionales. Conversemos 45 minutos en una sesión de diagnóstico."
          primaryButtonText="Agendar diagnóstico de 45 minutos"
          primaryButtonHref="/diagnostico"
          secondaryButtonText="Escríbenos una consulta"
          secondaryButtonHref="/contacto"
        />
      </section>
    </div>
  );
}
