"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const footerLinks = [
  { name: "Início", href: "#" },
  { name: "Sobre", href: "#about" },
  { name: "Serviços", href: "#services" },
  { name: "Dúvidas", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="w-full py-16 px-6 bg-[var(--color-off-white)] border-t border-[var(--color-gold)]/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        {/* Logo e Identidade Centralizada */}
        <div className="flex flex-col items-center gap-4 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/maiara-logo.svg"
              alt="Logo Maiara Martins"
              width={60}
              height={60}
              unoptimized
              className="object-contain"
            />
          </motion.div>
          <div>
            <h3
              className="text-xl font-bold tracking-[0.2em] uppercase"
              style={
                { color: "var(--color-deep-blue)", fontFamily: "serif" } as any
              }
            >
              Maiara Martins
            </h3>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-gold)] mt-1">
              Neuropsicóloga
            </p>
          </div>
        </div>

        {/* Links Rápidos de Navegação */}
        <nav className="flex flex-wrap justify-center gap-8">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.2em] font-semibold transition-colors hover:text-[var(--color-gold)]"
              style={{ color: "var(--color-deep-blue)" }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Linha Divisória e Rodapé Inferior */}
        <div className="w-full pt-8 border-t border-[var(--color-gold)]/5 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright à Esquerda */}
          <p className="text-[9px] uppercase tracking-widest text-[var(--color-deep-blue)]/50">
            © 2026 Neuropsicóloga Maiara Martins — Todos os direitos reservados.
          </p>

          {/* Créditos à Direita */}
          <div className="flex items-center gap-2">
            <span className="text-[9px] uppercase tracking-widest text-[var(--color-deep-blue)]/30">
              Desenvolvido por
            </span>
            <a
              href="#"
              className="text-[9px] uppercase tracking-widest font-bold text-[var(--color-deep-blue)]/60 hover:text-[var(--color-gold)] transition-colors"
            >
              Yuri Loureiro
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
