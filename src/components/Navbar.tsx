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
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        {/* Barra flotante tipo píldora */}
        <nav
          aria-label="Navegación principal"
          className="w-full bg-white rounded-pill px-5 sm:px-7 py-3 flex items-center justify-between border border-ash/40"
        >
          {/* Logo / Marca */}
          <Link
            href="/"
            className="flex items-center gap-2 text-dark font-display text-2xl sm:text-3xl tracking-tight leading-none focus:outline-none"
            aria-label="Vórtice Integration - Inicio"
          >
            <span>VÓRTICE</span>
          </Link>

          {/* Enlaces escritorio */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors focus:outline-none ${
                    active
                      ? "text-dark font-bold underline decoration-2 underline-offset-4"
                      : "text-slate hover:text-dark"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Botón CTA y Menú móvil */}
          <div className="flex items-center gap-3">
            <Link
              href="/levantamiento"
              className="hidden sm:inline-flex items-center justify-center bg-dark text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-dark/90 transition-colors focus:outline-none"
            >
              Agendar 30 min
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-dark focus:outline-none"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Desplegable móvil */}
      {isOpen && (
        <div className="md:hidden max-w-[1200px] mx-auto mt-2 bg-white rounded-3xl p-5 border border-ash/40 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-2 text-base font-medium ${
                isActive(link.href) ? "text-dark font-bold" : "text-slate"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-canvas">
            <Link
              href="/levantamiento"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center bg-dark text-white text-base font-medium py-3 rounded-lg"
            >
              Agendar levantamiento de 30 min
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
