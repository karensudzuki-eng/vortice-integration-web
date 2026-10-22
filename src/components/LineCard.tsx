import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";

export interface LineCardProps {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  href: string;
  isExternal?: boolean;
  ctaText: string;
  badge?: string;
  icon?: React.ReactNode;
}

export function LineCard({
  title,
  tagline,
  description,
  features,
  href,
  isExternal = false,
  ctaText,
  badge,
  icon,
}: LineCardProps) {
  return (
    <div className="flex flex-col h-full bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-md hover:border-vortice-300 transition-all">
      {/* Cabecera de la tarjeta */}
      <div className="flex items-start justify-between gap-4 mb-4">
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-vortice-50 text-vortice-800 flex items-center justify-center shrink-0 border border-vortice-100">
            {icon}
          </div>
        )}
        {badge && (
          <span className="text-xs uppercase font-semibold tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full border border-slate-200">
            {badge}
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
        {title}
      </h3>
      <p className="text-sm font-medium text-vortice-700 mt-1 mb-3">
        {tagline}
      </p>

      <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      {/* Lista de características / entregables */}
      {features && features.length > 0 && (
        <div className="mb-6 pt-4 border-t border-slate-100">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Alcance clave:
          </p>
          <ul className="space-y-2 text-xs text-slate-700">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA Button */}
      <div className="pt-2">
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-vortice-900 bg-slate-100 hover:bg-vortice-900 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vortice-900"
          >
            <span>{ctaText}</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            <span className="sr-only">(se abre en una nueva pestaña)</span>
          </a>
        ) : (
          <Link
            href={href}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-vortice-900 hover:bg-vortice-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vortice-900"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </div>
  );
}
