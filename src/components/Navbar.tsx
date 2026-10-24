"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

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
    <header className="sticky top-0 z-50 w-full bg-[#060a14]/90 backdrop-blur-xl border-b border-qa-border/60 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* LOGO: Header izquierda, versión horizontal con fénix oficial */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Vórtice Integration - Inicio"
        >
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 filter drop-shadow-[0_0_8px_rgba(201,174,92,0.35)]">
            <Image
              src="/fenix.png"
              alt="Fénix Vórtice Integration"
              width={44}
              height={44}
              priority
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-qa-gold-light transition-colors leading-none">
              VÓRTICE<span className="text-qa-gold">_</span>
            </span>
            <span className="text-[10px] sm:text-[11px] text-qa-gold font-mono tracking-wider uppercase font-semibold leading-tight mt-1">
              Integration Holding
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
                      ? "text-qa-gold bg-qa-gold/10 border border-qa-gold/30 shadow-sm"
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
              className="p-2.5 rounded-lg text-gray-300 hover:text-qa-gold hover:bg-white/5 transition-colors focus:outline-none"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X className="w-6 h-6 text-qa-gold" /> : <Menu className="w-6 h-6 text-qa-gold" />}
            </button>
          </div>
        </nav>

        {/* CTA Escritorio en Dorado oficial */}
        <div className="hidden sm:flex items-center">
          <Link
            href="/levantamiento"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-qa-gold to-qa-gold-light hover:from-qa-gold-light hover:to-qa-gold text-qa-dark px-5 py-2.5 rounded-lg font-bold text-xs sm:text-sm shadow-gold-sm hover:shadow-gold-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Agendar 30 min</span>
            <ArrowRight className="w-3.5 h-3.5 text-qa-dark" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="lg:hidden bg-[#060a14]/98 backdrop-blur-2xl border-t border-qa-border px-6 py-5 space-y-3 font-sans">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                isActive(link.href) 
                  ? "text-qa-gold bg-qa-gold/10 border border-qa-gold/30" 
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-qa-border">
            <Link
              href="/levantamiento"
              onClick={() => setIsOpen(false)}
              className="w-full text-center inline-flex items-center justify-center gap-2 bg-qa-gold hover:bg-qa-gold-light text-qa-dark py-3 rounded-lg font-bold text-sm shadow-gold-sm"
            >
              <span>Agendar levantamiento gratuito de 30 min</span>
              <ArrowRight className="w-4 h-4 text-qa-dark" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
