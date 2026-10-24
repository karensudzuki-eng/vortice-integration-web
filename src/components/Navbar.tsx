"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Precios", href: "/precios" },
    { label: "Contacto", href: "/contacto" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-qa-dark text-white border-b-2 border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Marca / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-none"
          aria-label="Vórtice Integration - Inicio"
        >
          <span className="font-mono text-2xl font-black tracking-tighter text-white group-hover:text-qa-blue transition-colors">
            VÓRTICE<span className="text-qa-blue">_</span>
          </span>
          <span className="hidden sm:inline-block font-mono text-xs text-gray-400 border-l border-gray-700 pl-2 ml-1 uppercase tracking-wider">
            QA Automation
          </span>
        </Link>

        {/* Navegación (visible en desktop y mobile con toggle) */}
        <nav
          aria-label="Navegación principal"
          className="flex items-center"
        >
          {/* Enlaces escritorio */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-mono">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-qa-blue ${
                    active
                      ? "text-qa-neon font-bold border-b-2 border-qa-neon pb-1"
                      : "text-gray-300"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Botón móvil dentro de nav para mantener landmark visible */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-qa-blue focus:outline-none"
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
            className="inline-block bg-qa-blue text-white px-5 py-2.5 font-bold font-mono text-xs uppercase tracking-wider transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 border border-qa-blue hover:shadow-[3px_3px_0px_#fff100]"
          >
            Agendar 30 min →
          </Link>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="md:hidden bg-qa-dark border-t border-gray-800 px-6 py-4 space-y-3 font-mono">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-2 text-base ${
                isActive(link.href) ? "text-qa-neon font-bold" : "text-gray-300"
              }`}
            >
              &gt; {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-800">
            <Link
              href="/levantamiento"
              onClick={() => setIsOpen(false)}
              className="w-full text-center inline-block bg-qa-blue text-white py-3 font-bold text-sm uppercase tracking-wider"
            >
              Agendar levantamiento de 30 min →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
