"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ExternalLink } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Sobre Vórtice", href: "/vortice" },
    { label: "Diagnóstico", href: "/diagnostico" },
    { label: "Acompañamiento", href: "/acompanamiento" },
    {
      label: "QA Chile",
      href: "https://qachile.cl",
      isExternal: true,
      badge: "Servicio QA",
    },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <nav
        aria-label="Navegación principal"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
      >
        {/* Marca / Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-vortice-700 rounded-md p-1"
          aria-label="Vórtice Integration SpA - Página de inicio"
        >
          <div className="w-10 h-10 rounded-lg bg-vortice-900 text-white flex items-center justify-center font-bold text-xl tracking-tight transition-transform group-hover:scale-105">
            V
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-vortice-950 leading-none">
              VÓRTICE
            </span>
            <span className="text-xs tracking-wider text-vortice-600 font-medium uppercase mt-0.5">
              Integration SpA
            </span>
          </div>
        </Link>

        {/* Enlaces versión escritorio */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            if (link.isExternal) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-vortice-900 transition-colors focus:outline-none focus:ring-2 focus:ring-vortice-700 rounded px-1.5 py-1"
                >
                  <span>{link.label}</span>
                  <span className="text-[10px] uppercase font-semibold tracking-wider bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                    {link.badge}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                  <span className="sr-only">(se abre en una nueva pestaña)</span>
                </a>
              );
            }

            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-vortice-700 rounded px-1.5 py-1 ${
                  active
                    ? "text-vortice-900 font-semibold border-b-2 border-vortice-800 pb-0.5"
                    : "text-slate-600 hover:text-vortice-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Escritorio */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/diagnostico"
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-vortice-900 hover:bg-vortice-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vortice-900"
          >
            Agendar diagnóstico
          </Link>
        </div>

        {/* Botón menú móvil */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-vortice-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-vortice-800"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Cerrar menú principal" : "Abrir menú principal"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3"
        >
          {navLinks.map((link) => {
            if (link.isExternal) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50"
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                    <span className="text-[10px] uppercase font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                      {link.badge}
                    </span>
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-400" aria-hidden="true" />
                  <span className="sr-only">(se abre en una nueva pestaña)</span>
                </a>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.href)
                    ? "bg-vortice-50 text-vortice-900 font-semibold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-2">
            <Link
              href="/diagnostico"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-base font-medium text-white bg-vortice-900 hover:bg-vortice-800 transition-colors shadow-sm"
            >
              Agendar diagnóstico
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
