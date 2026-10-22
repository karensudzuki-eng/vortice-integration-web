"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Calendar, ArrowRight } from "lucide-react";
import { ServiceLine, CompanySize } from "@/lib/types";

interface LeadFormProps {
  defaultLine?: ServiceLine;
  formTitle?: string;
  formDescription?: string;
  submitButtonText?: string;
  showCalendarPromptOnSuccess?: boolean;
}

export function LeadForm({
  defaultLine = "Diagnóstico de madurez organizacional",
  formTitle = "Inicia la conversación",
  formDescription = "Completa los datos de tu empresa. Te responderemos en un plazo máximo de 24 horas hábiles para coordinar la sesión de diagnóstico.",
  submitButtonText = "Enviar solicitud de diagnóstico",
  showCalendarPromptOnSuccess = true,
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    cargo: "",
    rubro: "Tecnología / Software",
    tamano_empresa: "11 a 50 personas" as CompanySize,
    linea_interes: defaultLine,
    mensaje: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const rubroOptions = [
    "Tecnología / Software",
    "Retail y Comercio Electrónico",
    "Servicios Financieros / Fintech",
    "Minería, Energía e Industria",
    "Salud y Servicios Médicos",
    "Logística y Transporte",
    "Educación y Capacitación",
    "Servicios Profesionales",
    "Otro rubro",
  ];

  const tamanoOptions: CompanySize[] = [
    "1 a 10 personas",
    "11 a 50 personas",
    "51 a 200 personas",
    "Más de 200 personas",
  ];

  const lineaOptions: { value: ServiceLine; label: string }[] = [
    {
      value: "Diagnóstico de madurez organizacional",
      label: "Diagnóstico de madurez organizacional (45 min)",
    },
    {
      value: "Acompañamiento en transformación",
      label: "Acompañamiento en transformación y dinámica de equipos",
    },
    {
      value: "QA y automatización",
      label: "QA y aseguramiento de calidad (Coordinado con qachile.cl)",
    },
    {
      value: "Consulta general",
      label: "Consulta general / Otra inquietud",
    },
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

    // Validación en cliente
    if (
      !formData.nombre.trim() ||
      !formData.empresa.trim() ||
      !formData.cargo.trim() ||
      !formData.mensaje.trim()
    ) {
      setStatus("error");
      setErrorMessage("Por favor, completa todos los campos requeridos antes de continuar.");
      return;
    }

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Ocurrió un error al registrar tus datos.");
      }

      setStatus("success");
    } catch (err) {
      console.error("Error al enviar formulario:", err);
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Hubo un problema de conexión al enviar el formulario. Intenta nuevamente."
      );
    }
  };

  if (status === "success") {
    return (
      <div
        className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-6"
        role="status"
        aria-live="polite"
      >
        <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900">
            ¡Solicitud recibida correctamente!
          </h3>
          <p className="text-slate-700 max-w-lg mx-auto text-sm leading-relaxed">
            Hemos registrado la información de <strong>{formData.empresa}</strong>. Un integrante de nuestro equipo revisará tu contexto y te escribirá en menos de 24 horas hábiles.
          </p>
        </div>

        {showCalendarPromptOnSuccess && (
          <div className="bg-white border border-emerald-300/80 rounded-xl p-6 max-w-lg mx-auto text-left shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm">
              <Calendar className="w-5 h-5 text-emerald-700" aria-hidden="true" />
              <span>Paso optativo inmediato:</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Si prefieres asegurar de inmediato tu bloque de 45 minutos en agenda para el diagnóstico, puedes seleccionar el horario directamente aquí:
            </p>
            <a
              href="https://calendar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-vortice-900 text-white hover:bg-vortice-800 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-vortice-700"
            >
              <span>Abrir agenda de disponibilidad [PLACEHOLDER]</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <p className="text-xs text-slate-500 text-center">
              (Enlace de Calendly / Cal.com configurable por la fundadora)
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({
              nombre: "",
              empresa: "",
              cargo: "",
              rubro: "Tecnología / Software",
              tamano_empresa: "11 a 50 personas",
              linea_interes: defaultLine,
              mensaje: "",
            });
          }}
          className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline focus:outline-none"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
          {formTitle}
        </h3>
        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
          {formDescription}
        </p>
      </div>

      {status === "error" && errorMessage && (
        <div
          className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-sm"
          role="alert"
        >
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <strong className="font-semibold block">No pudimos procesar la solicitud:</strong>
            <span>{errorMessage}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Fila 1: Nombre y Empresa */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="lead-nombre"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Nombre completo <span className="text-red-600" aria-hidden="true">*</span>
            </label>
            <input
              id="lead-nombre"
              name="nombre"
              type="text"
              required
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej: Macarena Silva"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-vortice-700 focus:ring-1 focus:ring-vortice-700 outline-none transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="lead-empresa"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Empresa u organización <span className="text-red-600" aria-hidden="true">*</span>
            </label>
            <input
              id="lead-empresa"
              name="empresa"
              type="text"
              required
              value={formData.empresa}
              onChange={handleChange}
              placeholder="Ej: Soluciones Tecnológicas SpA"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-vortice-700 focus:ring-1 focus:ring-vortice-700 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Fila 2: Cargo y Rubro */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="lead-cargo"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Cargo o rol <span className="text-red-600" aria-hidden="true">*</span>
            </label>
            <input
              id="lead-cargo"
              name="cargo"
              type="text"
              required
              value={formData.cargo}
              onChange={handleChange}
              placeholder="Ej: Líder de Ingeniería / Gerente de Operaciones"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-vortice-700 focus:ring-1 focus:ring-vortice-700 outline-none transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="lead-rubro"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Rubro de la empresa <span className="text-red-600" aria-hidden="true">*</span>
            </label>
            <select
              id="lead-rubro"
              name="rubro"
              value={formData.rubro}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-vortice-700 focus:ring-1 focus:ring-vortice-700 outline-none transition-colors bg-white"
            >
              {rubroOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Fila 3: Tamaño de empresa y Línea de interés */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="lead-tamano"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Tamaño del equipo / empresa <span className="text-red-600" aria-hidden="true">*</span>
            </label>
            <select
              id="lead-tamano"
              name="tamano_empresa"
              value={formData.tamano_empresa}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-vortice-700 focus:ring-1 focus:ring-vortice-700 outline-none transition-colors bg-white"
            >
              {tamanoOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="lead-linea"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Línea de interés principal <span className="text-red-600" aria-hidden="true">*</span>
            </label>
            <select
              id="lead-linea"
              name="linea_interes"
              value={formData.linea_interes}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-vortice-700 focus:ring-1 focus:ring-vortice-700 outline-none transition-colors bg-white"
            >
              {lineaOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Campo Mensaje */}
        <div>
          <label
            htmlFor="lead-mensaje"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Cuéntanos la situación o desafío que enfrentan <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <textarea
            id="lead-mensaje"
            name="mensaje"
            rows={4}
            required
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Describe brevemente qué fricciones están ocurriendo: entregas atrasadas, fallas reiteradas en producción, desajustes entre áreas, sobrecarga del equipo..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-vortice-700 focus:ring-1 focus:ring-vortice-700 outline-none transition-colors"
          />
          <p className="text-xs text-slate-500 mt-1">
            Información tratada con estricta confidencialidad. Sin spam ni venta invasiva.
          </p>
        </div>

        {/* Botón de Envío */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-vortice-900 hover:bg-vortice-800 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vortice-900"
          >
            {status === "submitting" ? (
              <span>Registrando solicitud...</span>
            ) : (
              <>
                <span>{submitButtonText}</span>
                <Send className="w-4 h-4" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
