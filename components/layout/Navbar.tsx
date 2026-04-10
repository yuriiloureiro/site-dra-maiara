"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Sobre", href: "#about" },
  { name: "Requisitos", href: "#benefits" },
  { name: "Especialidades", href: "#services" }, // aponta para Services
  { name: "Etapas", href: "#how-it-works" },
  { name: "O que Avaliamos", href: "#diagnostics" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-off-white)]/95 backdrop-blur-md border-b border-[var(--color-gold)]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
            aria-label="Ir para a página inicial"
          >
            <Image
              src="/maiara-logo.svg"
              alt="Logotipo Maiara Martins"
              width={60}
              height={60}
              priority
              className="object-contain"
            />
          </Link>

          {/* Links Desktop */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.25em] font-medium text-[var(--color-deep-blue)] hover:text-[var(--color-gold)] transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://wa.me/5588998022119"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-8 py-3 bg-[var(--color-deep-blue)] text-white rounded-full text-[10px] font-bold tracking-[0.2em] hover:bg-[var(--color-deep-blue)]/90 transition-all shadow-md"
            >
              AGENDAR
            </a>
          </nav>

          {/* Hamburger Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-[var(--color-deep-blue)]"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" />
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[var(--color-off-white)] border-t border-[var(--color-gold)]/10 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6 text-center">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-deep-blue)]"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/5588998022119"
                className="py-4 rounded-full bg-[var(--color-deep-blue)] text-white text-[10px] font-bold tracking-widest"
                onClick={() => setMenuOpen(false)}
              >
                WHATSAPP
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
