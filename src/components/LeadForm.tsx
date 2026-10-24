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
  formSubtitle = "Completa los datos de tu equipo y te responderemos en menos de 24 horas hábiles. También puedes agendar directamente en nuestro calendario online.",
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    cargo: "",
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
          rubro: "Empresas y PyMEs / TI",
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
        className="bg-white border-2 border-qa-dark p-8 text-center space-y-6 shadow-brutal-dark"
        role="status"
        aria-live="polite"
      >
        <div className="w-12 h-12 bg-qa-menta text-qa-dark border-2 border-qa-dark flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-qa-blue font-bold uppercase block">
            // Solicitud procesada con éxito
          </span>
          <h3 className="text-3xl font-extrabold text-qa-dark tracking-tight leading-none uppercase">
            Solicitud Recibida
          </h3>
          <p className="text-qa-dark font-bold text-base">
            Te respondemos en menos de 24 horas hábiles.
          </p>
          <p className="text-sm text-gray-600 max-w-md mx-auto">
            Hemos registrado los antecedentes de <strong>{formData.empresa}</strong> para preparar la sesión de levantamiento.
          </p>
        </div>

        {/* Enlace directo a Google Calendar */}
        <div className="bg-qa-canvas border border-qa-dark p-6 max-w-md mx-auto text-left space-y-3 font-mono">
          <div className="flex items-center gap-2 text-qa-dark font-bold text-sm">
            <Calendar className="w-4 h-4 text-qa-blue" aria-hidden="true" />
            <span>Paso siguiente opcional:</span>
          </div>
          <p className="text-xs text-gray-600 font-sans">
            Si deseas asegurar tu horario ahora mismo, abre directamente nuestro calendario de Google:
          </p>
          <a
            href="https://calendar.app.google/8JfEzcRHRZGKMaHx9"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-qa-blue text-white text-sm font-bold uppercase hover:shadow-hover-neon transition-all"
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
              tamano_empresa: "11 a 50",
              mensaje: "",
            });
          }}
          className="text-xs font-mono text-gray-500 underline hover:text-qa-dark focus:outline-none"
        >
          [+] Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border-2 border-qa-dark p-8 shadow-brutal-dark">
      <div className="mb-6 space-y-2">
        <span className="font-mono text-xs text-qa-blue font-bold uppercase block">
          // Contacto técnico
        </span>
        <h2 className="text-3xl font-extrabold text-qa-dark tracking-tight leading-none uppercase">
          {formTitle}
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed font-sans">
          {formSubtitle}
        </p>
      </div>

      {status === "error" && errorMessage && (
        <div
          className="mb-6 p-4 bg-qa-neon/20 border-2 border-qa-dark flex items-start gap-3 text-qa-dark text-sm font-mono"
          role="alert"
        >
          <AlertCircle className="w-5 h-5 text-qa-blue shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <strong className="font-bold block">No pudimos procesar la solicitud:</strong>
            <span>{errorMessage}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Nombre y Empresa */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="lead-nombre"
              className="block font-mono text-xs font-bold uppercase tracking-wider text-qa-dark mb-1"
            >
              Nombre <span className="text-qa-blue" aria-hidden="true">*</span>
            </label>
            <input
              id="lead-nombre"
              name="nombre"
              type="text"
              required
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre y apellido"
              className="w-full px-3.5 py-2.5 bg-qa-canvas text-qa-dark text-sm border-2 border-qa-dark focus:outline-none focus:bg-white"
            />
          </div>

          <div>
            <label
              htmlFor="lead-empresa"
              className="block font-mono text-xs font-bold uppercase tracking-wider text-qa-dark mb-1"
            >
              Empresa <span className="text-qa-blue" aria-hidden="true">*</span>
            </label>
            <input
              id="lead-empresa"
              name="empresa"
              type="text"
              required
              value={formData.empresa}
              onChange={handleChange}
              placeholder="Nombre de la empresa"
              className="w-full px-3.5 py-2.5 bg-qa-canvas text-qa-dark text-sm border-2 border-qa-dark focus:outline-none focus:bg-white"
            />
          </div>
        </div>

        {/* Cargo y Tamaño del equipo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="lead-cargo"
              className="block font-mono text-xs font-bold uppercase tracking-wider text-qa-dark mb-1"
            >
              Cargo <span className="text-qa-blue" aria-hidden="true">*</span>
            </label>
            <input
              id="lead-cargo"
              name="cargo"
              type="text"
              required
              value={formData.cargo}
              onChange={handleChange}
              placeholder="Ej: CTO / Lead Developer / Founder"
              className="w-full px-3.5 py-2.5 bg-qa-canvas text-qa-dark text-sm border-2 border-qa-dark focus:outline-none focus:bg-white"
            />
          </div>

          <div>
            <label
              htmlFor="lead-tamano"
              className="block font-mono text-xs font-bold uppercase tracking-wider text-qa-dark mb-1"
            >
              Tamaño del equipo <span className="text-qa-blue" aria-hidden="true">*</span>
            </label>
            <select
              id="lead-tamano"
              name="tamano_empresa"
              value={formData.tamano_empresa}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 bg-qa-canvas text-qa-dark text-sm border-2 border-qa-dark focus:outline-none focus:bg-white font-mono"
            >
              {tamanoOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt} personas
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Pregunta abierta */}
        <div>
          <label
            htmlFor="lead-mensaje"
            className="block font-mono text-xs font-bold uppercase tracking-wider text-qa-dark mb-1"
          >
            ¿Qué software tienen y cómo lo prueban hoy? <span className="text-qa-blue" aria-hidden="true">*</span>
          </label>
          <textarea
            id="lead-mensaje"
            name="mensaje"
            rows={3}
            required
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Cuéntanos brevemente sobre su plataforma y cómo gestionan las pruebas antes de cada despliegue..."
            className="w-full px-3.5 py-2.5 bg-qa-canvas text-qa-dark text-sm border-2 border-qa-dark focus:outline-none focus:bg-white"
          />
        </div>

        {/* Botón enviar */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-qa-blue text-white font-mono font-bold text-sm uppercase tracking-wider border-2 border-qa-blue hover:shadow-hover-neon transition-all disabled:opacity-50"
          >
            {status === "submitting" ? (
              <span>Enviando solicitud...</span>
            ) : (
              <span>Enviar solicitud →</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
