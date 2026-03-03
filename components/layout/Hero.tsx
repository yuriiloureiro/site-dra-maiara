"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const whatsappUrl = "https://wa.me/5588998022119";

  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-[var(--color-off-white)]"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Conteúdo Esquerdo - Alinhado à Esquerda do Container */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center py-12"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-gold)] font-bold mb-6 block">
            Neuropsicologia Clínica
          </span>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-8 text-[var(--color-deep-blue)]"
            style={{ fontFamily: "serif" } as any}
          >
            Antes do diagnóstico, <br />
            <span className="italic text-[var(--color-gold)]">
              compreensão.
            </span>
          </h1>

          <p className="text-base md:text-lg text-[var(--color-deep-blue)]/70 mb-10 leading-relaxed font-light max-w-md">
            Psicodiagnóstico, Avaliação Psicológica e Neuropsicológica online,
            conduzidos com rigor técnico, precisão clínica e acolhimento
            qualificado.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[var(--color-deep-blue)] text-white rounded-full font-bold uppercase tracking-widest text-[10px] shadow-lg"
            >
              Agendar Avaliação
            </motion.a>
            <a
              href="#about"
              className="px-8 py-4 border border-[var(--color-deep-blue)]/20 text-[var(--color-deep-blue)] rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[var(--color-deep-blue)]/5 transition-all"
            >
              Conhecer mais
            </a>
          </div>
        </motion.div>

        {/* Imagem Direita - Alinhada à DIREITA do Container para bater com o grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative flex items-center justify-end py-12" // Mudei justify-center para justify-end
        >
          <div className="relative aspect-[4/5] w-full max-w-[380px] lg:max-w-[420px]">
            {/* Moldura decorativa - Ajustada para não vazar o container */}
            <div className="absolute inset-0 border border-[var(--color-gold)]/20 translate-x-4 translate-y-4 rounded-t-[180px] -z-10" />

            <div className="relative h-full w-full overflow-hidden rounded-t-[180px] shadow-2xl">
              <Image
                src="/hero-maiara.jpeg"
                alt="Maiara Martins - Neuropsicóloga"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decoração de fundo sutil */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-64 h-64 bg-[var(--color-gold)]/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
