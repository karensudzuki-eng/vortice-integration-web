"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Shield } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Metodología Vórtice", href: "/metodologia" },
    { label: "Precios", href: "/precios" },
    { label: "Quiénes somos", href: "/quienes-somos" },
    { label: "Contacto", href: "/contacto" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080c15]/85 backdrop-blur-xl border-b border-white/10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Marca / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label="Vórtice Integration - Inicio"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-glow-sm group-hover:shadow-glow-md transition-all">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-xl font-extrabold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              VÓRTICE<span className="text-qa-cyan">_</span>
            </span>
            <span className="hidden sm:inline-block text-[10px] text-gray-400 font-mono tracking-widest uppercase">
              QA Automation Holding
            </span>
          </div>
        </Link>

        {/* Navegación (visible en desktop y mobile con toggle) */}
        <nav
          aria-label="Navegación principal"
          className="flex items-center"
        >
          {/* Enlaces escritorio */}
          <div className="hidden lg:flex items-center space-x-1 text-sm font-sans">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md transition-all duration-200 text-sm font-medium ${
                    active
                      ? "text-white bg-white/10 border border-white/10 shadow-sm"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Botón móvil dentro de nav para mantener landmark visible */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* CTA Escritorio */}
        <div className="hidden sm:flex items-center">
          <Link
            href="/levantamiento"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-5 py-2.5 rounded-lg font-semibold text-xs sm:text-sm shadow-glow-sm hover:shadow-glow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Agendar 30 min</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="lg:hidden bg-[#080c15]/95 backdrop-blur-2xl border-t border-white/10 px-6 py-5 space-y-3 font-sans">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                isActive(link.href) 
                  ? "text-white bg-white/10 border border-white/10" 
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/10">
            <Link
              href="/levantamiento"
              onClick={() => setIsOpen(false)}
              className="w-full text-center inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold text-sm shadow-glow-sm"
            >
              <span>Agendar levantamiento gratuito de 30 min</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
