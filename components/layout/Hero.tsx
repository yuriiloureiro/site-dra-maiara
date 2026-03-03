"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const whatsappUrl = "https://wa.me/5588998022119";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-[var(--color-off-white)]"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Conteúdo Esquerdo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-gold)] font-bold mb-8 block">
            Neuropsicologia Clínica
          </span>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-10 text-[var(--color-deep-blue)]"
            style={{ fontFamily: "serif" }}
          >
            Antes do diagnóstico, <br />
            <span className="italic text-[var(--color-gold)]">
              compreensão.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--color-deep-blue)]/70 mb-12 leading-relaxed font-light max-w-xl">
            Psicodiagnóstico, Avaliação Psicológica e Neuropsicológica online,
            conduzidos com rigor técnico, precisão clínica e acolhimento
            qualificado.
          </p>

          <div className="flex flex-wrap gap-6">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-[var(--color-deep-blue)] text-white rounded-full font-bold uppercase tracking-widest text-[10px] transition-all shadow-lg hover:shadow-[var(--color-deep-blue)]/20"
            >
              Agendar Avaliação
            </motion.a>
            <a
              href="#about"
              className="px-10 py-5 border border-[var(--color-deep-blue)]/20 text-[var(--color-deep-blue)] rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[var(--color-deep-blue)]/5 transition-all"
            >
              Conhecer mais
            </a>
          </div>
        </motion.div>

        {/* Imagem Direita */}
        <div className="relative aspect-[4/5] w-full max-w-[480px] mx-auto lg:ml-auto">
          {/* Moldura decorativa atrás */}
          <div className="absolute inset-0 border border-[var(--color-gold)]/20 translate-x-6 translate-y-6 rounded-t-[200px] -z-10" />

          <div className="relative h-full w-full overflow-hidden rounded-t-[200px] shadow-2xl bg-gray-100">
            <Image
              src="/hero-maiara.jpeg" // Nome corrigido conforme seu print
              alt="Maiara Martins - Neuropsicóloga"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
        </div>
      </div>

      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
