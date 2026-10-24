"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, ArrowRight, Calendar } from "lucide-react";
import { TeamSize } from "@/lib/types";

interface LeadFormProps {
  formTitle?: string;
  formSubtitle?: string;
}

export function LeadForm({
  formTitle = "SOLICITA TU LEVANTAMIENTO DE 30 MIN",
  formSubtitle = "Completa los antecedentes de tu equipo y te responderemos en menos de 24 horas hábiles. También puedes agendar directamente en nuestro calendario online.",
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    cargo: "",
    stack: "",
    tamano_empresa: "11 a 50" as TeamSize,
    mensaje: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const tamanoOptions: TeamSize[] = [
    "Menos de 10",
    "11 a 50",
    "51 a 200",
    "Más de 200",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    if (
      !formData.nombre.trim() ||
      !formData.empresa.trim() ||
      !formData.cargo.trim() ||
      !formData.mensaje.trim()
    ) {
      setStatus("error");
      setErrorMessage("Por favor, completa todos los campos antes de continuar.");
      return;
    }

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          rubro: "Empresas medianas / TI",
          linea_interes: "Levantamiento QA (30 min)",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Ocurrió un error al registrar tus datos.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Hubo un problema de conexión. Intenta nuevamente."
      );
    }
  };

  if (status === "success") {
    return (
      <div
        className="glass-card border border-emerald-500/40 p-8 sm:p-10 text-center space-y-6 rounded-2xl shadow-glow-sm"
        role="status"
        aria-live="polite"
      >
        <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center rounded-full mx-auto shadow-sm">
          <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-qa-cyan font-bold uppercase block">
            // Solicitud procesada con éxito
          </span>
          <h3 className="text-2xl font-bold text-white tracking-tight uppercase">
            Solicitud Recibida
          </h3>
          <p className="text-white font-medium text-base">
            Te respondemos en menos de 24 horas hábiles.
          </p>
          <p className="text-sm text-gray-300 max-w-md mx-auto">
            Hemos registrado los antecedentes de <strong>{formData.empresa}</strong> para preparar la sesión de levantamiento técnico.
          </p>
        </div>

        {/* Enlace directo a Google Calendar */}
        <div className="bg-[#050912] border border-white/10 p-6 rounded-xl max-w-md mx-auto text-left space-y-3 font-mono">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <Calendar className="w-4 h-4 text-qa-cyan" aria-hidden="true" />
            <span>Paso siguiente opcional:</span>
          </div>
          <p className="text-xs text-gray-400 font-sans">
            Si deseas asegurar tu horario ahora mismo sin esperar confirmación por correo, selecciona tu bloque en Google Calendar:
          </p>
          <a
            href="https://calendar.app.google/8JfEzcRHRZGKMaHx9"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold uppercase rounded-lg transition-all shadow-glow-sm"
          >
            <span>Abrir agenda de disponibilidad</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({
              nombre: "",
              empresa: "",
              cargo: "",
              stack: "",
              tamano_empresa: "11 a 50",
              mensaje: "",
            });
          }}
          className="text-xs font-mono text-gray-400 underline hover:text-white focus:outline-none"
        >
          [+] Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card border border-white/10 p-7 sm:p-9 space-y-6 rounded-2xl"
      noValidate
    >
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          {formTitle}
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          {formSubtitle}
        </p>
      </div>

      {status === "error" && errorMessage && (
        <div
          role="alert"
          className="p-4 bg-red-950/40 border border-red-500/50 rounded-lg flex items-start gap-3 text-red-200 text-sm"
        >
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="block font-semibold">No pudimos procesar la solicitud:</strong>
            <p className="text-xs text-red-300">{errorMessage}</p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {/* Nombre */}
        <div className="space-y-1.5">
          <label
            htmlFor="lead-nombre"
            className="block text-xs font-mono uppercase font-bold text-gray-300"
          >
            Nombre completo *
          </label>
          <input
            id="lead-nombre"
            name="nombre"
            type="text"
            required
            placeholder="Ej: Carlos Medina"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full bg-[#050912]/80 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 rounded-lg focus:border-qa-cyan focus:ring-1 focus:ring-qa-cyan focus:outline-none transition-all"
          />
        </div>

        {/* Empresa y Cargo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor="lead-empresa"
              className="block text-xs font-mono uppercase font-bold text-gray-300"
            >
              Empresa *
            </label>
            <input
              id="lead-empresa"
              name="empresa"
              type="text"
              required
              placeholder="Ej: FinTech SpA"
              value={formData.empresa}
              onChange={handleChange}
              className="w-full bg-[#050912]/80 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 rounded-lg focus:border-qa-cyan focus:ring-1 focus:ring-qa-cyan focus:outline-none transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="lead-cargo"
              className="block text-xs font-mono uppercase font-bold text-gray-300"
            >
              Cargo *
            </label>
            <input
              id="lead-cargo"
              name="cargo"
              type="text"
              required
              placeholder="Ej: CTO / Head of Engineering"
              value={formData.cargo}
              onChange={handleChange}
              className="w-full bg-[#050912]/80 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 rounded-lg focus:border-qa-cyan focus:ring-1 focus:ring-qa-cyan focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Stack tecnológico */}
        <div className="space-y-1.5">
          <label
            htmlFor="lead-stack"
            className="block text-xs font-mono uppercase font-bold text-gray-300"
          >
            Stack tecnológico principal
          </label>
          <input
            id="lead-stack"
            name="stack"
            type="text"
            placeholder="Ej: Next.js, Node.js, PostgreSQL, AWS, GitHub"
            value={formData.stack}
            onChange={handleChange}
            className="w-full bg-[#050912]/80 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 rounded-lg focus:border-qa-cyan focus:ring-1 focus:ring-qa-cyan focus:outline-none transition-all"
          />
        </div>

        {/* Tamaño del equipo */}
        <div className="space-y-1.5">
          <label
            htmlFor="lead-tamano"
            className="block text-xs font-mono uppercase font-bold text-gray-300"
          >
            Tamaño del equipo técnico *
          </label>
          <select
            id="lead-tamano"
            name="tamano_empresa"
            value={formData.tamano_empresa}
            onChange={handleChange}
            className="w-full bg-[#050912]/80 border border-white/10 px-4 py-3 text-sm text-white rounded-lg focus:border-qa-cyan focus:ring-1 focus:ring-qa-cyan focus:outline-none transition-all"
          >
            {tamanoOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-[#0b0f19] text-white">
                {opt} colaboradores
              </option>
            ))}
          </select>
        </div>

        {/* Mensaje */}
        <div className="space-y-1.5">
          <label
            htmlFor="lead-mensaje"
            className="block text-xs font-mono uppercase font-bold text-gray-300"
          >
            ¿Qué software tienen y cómo lo prueban hoy? *
          </label>
          <textarea
            id="lead-mensaje"
            name="mensaje"
            rows={3}
            required
            placeholder="Cuéntanos brevemente sobre tu plataforma, si prueban a última hora y qué dolor necesitas resolver."
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full bg-[#050912]/80 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 rounded-lg focus:border-qa-cyan focus:ring-1 focus:ring-qa-cyan focus:outline-none transition-all resize-y"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold uppercase tracking-wider rounded-lg shadow-glow-sm hover:shadow-glow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <span>
          {status === "submitting" ? "Procesando solicitud..." : "Solicitar levantamiento gratuito →"}
        </span>
      </button>

      <p className="text-[11px] font-mono text-gray-400 text-center">
        ● Sin compromisos de contratación. Información tratada bajo estricta confidencialidad.
      </p>
    </form>
  );
}
