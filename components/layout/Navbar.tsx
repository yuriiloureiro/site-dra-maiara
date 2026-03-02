"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "Início", href: "#" },
  { name: "Sobre", href: "#about" },
  { name: "Serviços", href: "#services" },
  { name: "Dúvidas", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-auto"
    >
      <div
        className="flex items-center justify-between w-full max-w-5xl gap-4 px-6 py-2 rounded-full backdrop-blur-md shadow-lg"
        style={{
          backgroundColor: "rgba(244, 235, 223, 0.85)",
          border: "1px solid rgba(221, 185, 123, 0.2)",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          aria-label="Ir para a página inicial"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/maiara-logo.svg"
            alt="Logo Dra. Maiara"
            width={45}
            height={45}
            priority
            unoptimized
            className="object-contain"
          />
          <span
            className="hidden sm:block text-[10px] uppercase tracking-[0.3em] font-bold"
            style={{ color: "var(--color-deep-blue)", fontFamily: "serif" }}
          >
            Dra. Maiara
          </span>
        </a>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.2em] font-semibold transition-colors hover:text-[var(--color-gold)]"
              style={{ color: "var(--color-deep-blue)" }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Botão Contato + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/558898022119"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block px-5 py-2 rounded-full text-[10px] font-bold tracking-widest transition-transform hover:scale-105"
            style={{
              backgroundColor: "var(--color-deep-blue)",
              color: "var(--color-off-white)",
            }}
          >
            AGENDAR
          </a>

          {/* Hamburger Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <div
              className={`w-6 h-0.5 bg-[var(--color-deep-blue)] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <div
              className={`w-6 h-0.5 bg-[var(--color-deep-blue)] transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <div
              className={`w-6 h-0.5 bg-[var(--color-deep-blue)] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 p-6 rounded-2xl bg-[var(--color-off-white)] shadow-2xl border border-[var(--color-gold)]/20 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-xs uppercase tracking-widest font-bold text-[var(--color-deep-blue)]"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/558898022119"
                className="py-3 rounded-full bg-[var(--color-deep-blue)] text-[var(--color-off-white)] text-xs font-bold"
                onClick={() => setMenuOpen(false)}
              >
                WHATSAPP
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
