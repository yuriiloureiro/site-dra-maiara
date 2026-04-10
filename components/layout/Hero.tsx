"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const whatsappUrl = "https://wa.me/5588998022119";

  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-screen flex items-center overflow-hidden bg-[var(--color-off-white)] 
                 pt-44 sm:pt-48 lg:pt-20 pb-12 lg:pb-0"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        {/* TEXTO - Lado Esquerdo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col justify-center text-center lg:text-left order-1"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-gold)] font-bold mb-4 block">
            Neuropsicologia Clínica
          </span>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 text-[var(--color-deep-blue)] leading-[1.02]"
            style={{ fontFamily: "serif" } as any}
          >
            Antes do diagnóstico, <br />
            <span className="italic text-[var(--color-gold)]">
              compreensão.
            </span>
          </h1>

          <p className="text-base md:text-lg text-[var(--color-deep-blue)]/70 mb-8 leading-relaxed font-light max-w-md mx-auto lg:mx-0">
            Psicodiagnóstico, Avaliação Psicológica e Neuropsicológica para
            compreender, com precisão e rigor técnico, dificuldades de atenção,
            memória, comportamento e sofrimento emocional nos estudos, no
            trabalho e no cotidiano, oferecendo direcionamento para os próximos
            passos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-[var(--color-deep-blue)] text-white rounded-full font-bold uppercase tracking-widest text-[10px] shadow-lg text-center"
            >
              Agendar Avaliação
            </motion.a>

            <a
              href="#about"
              className="px-8 py-4 border border-[var(--color-deep-blue)]/20 text-[var(--color-deep-blue)] rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[var(--color-deep-blue)]/5 transition-all text-center"
            >
              Conhecer mais
            </a>
          </div>
        </motion.div>

        {/* IMAGEM - Lado Direito com Selo Flutuante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center lg:justify-end order-2 mt-8 lg:mt-0"
        >
          <div className="relative aspect-[4/5] w-[260px] md:w-[300px] lg:w-[340px] xl:w-[380px]">
            {/* Selo Flutuante (Apenas Desktop) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-16 bottom-12 w-32 h-32 z-20 hidden lg:block"
            >
              <Image
                src="/maiara-sublogo.png" // Salve a imagem com este nome em /public
                alt="Selo Profissional Maiara Martins"
                width={128}
                height={128}
                className="object-contain drop-shadow-xl opacity-90"
              />
            </motion.div>

            <div className="absolute inset-0 border border-[var(--color-gold)]/20 translate-x-3 translate-y-3 rounded-t-[140px] lg:rounded-t-[160px] -z-10" />

            <div className="relative h-full w-full overflow-hidden rounded-t-[140px] lg:rounded-t-[160px] shadow-2xl bg-gray-100">
              <Image
                src="/hero-maiara.jpeg"
                alt="Maiara Martins - Neuropsicóloga"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 260px, 380px"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decoração de fundo */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-64 h-64 bg-[var(--color-gold)]/5 rounded-full blur-3xl -z-10 hidden lg:block" />
    </section>
  );
}
