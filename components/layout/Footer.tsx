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
        {/* Logo Centralizada - Removido texto manual */}
        <div className="flex flex-col items-center gap-4 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
          >
            <Image
              src="/maiara-logo.png" // Usando a nova logo PNG
              alt="Logotipo Maiara Martins"
              width={120} // Aumentei um pouco para dar destaque no rodapé
              height={120}
              priority
              className="object-contain"
            />
          </motion.div>

          {/* Mantive apenas o subtítulo sutil abaixo da logo se desejar, 
              ou pode remover este bloco <div> inteiro se a logo já for suficiente */}
          <div className="mt-2">
            <p className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-gold)] font-medium">
              Neuropsicologia Clínica
            </p>
          </div>
        </div>

        {/* Links Rápidos de Navegação */}
        <nav className="flex flex-wrap justify-center gap-10">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.25em] font-semibold transition-colors hover:text-[var(--color-gold)]"
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
            © 2026 Maiara Martins — Todos os direitos reservados.
          </p>

          {/* Créditos à Direita */}
          <div className="flex items-center gap-2">
            <span className="text-[9px] uppercase tracking-widest text-[var(--color-deep-blue)]/30">
              Desenvolvido por
            </span>
            <a
              href="https://loureiroyuri.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir portfólio de Yuri Loureiro em nova aba"
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
