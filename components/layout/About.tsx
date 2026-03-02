"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // Importação do componente oficial

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Imagem (centro no mobile, lado esquerdo no desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex justify-center md:justify-start"
        >
          <div className="relative w-[260px] h-[350px] sm:w-[320px] sm:h-[430px] md:w-[380px] md:h-[500px]">
            {/* Fundo decorativo */}
            <div className="absolute inset-0 bg-[var(--color-gold)]/8 rounded-[2rem] -rotate-3" />

            {/* Imagem otimizada */}
            <Image
              src="/sobre-maiara.jpeg"
              alt="Dra. Maiara"
              fill
              unoptimized // Compatibilidade com Hostinger
              className="relative z-10 object-cover rounded-[2rem] shadow-2xl grayscale-[15%] hover:grayscale-0 transition-all duration-700 border border-[var(--color-gold)]/10"
            />
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex-1"
        >
          <span className="text-[var(--color-gold)] font-medium tracking-[0.18em] uppercase text-[10px] mb-3 block text-center md:text-left">
            A Profissional
          </span>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-light text-[var(--color-deep-blue)] mb-6 md:mb-8 leading-tight text-center md:text-left"
            style={{ fontFamily: "serif" }}
          >
            Cuidado ético e humano <br />
            <span className="italic font-serif text-[var(--color-gold)]">
              focado na sua saúde mental.
            </span>
          </h2>

          <div className="space-y-4 text-[var(--color-deep-blue)]/80 leading-relaxed text-base sm:text-lg text-center md:text-left">
            <p>
              Sou a Dra. Maiara, psicóloga clínica dedicada a auxiliar pessoas
              no processo de autoconhecimento e superação de conflitos.
            </p>
            <p>
              Minha abordagem foca em criar um ambiente seguro e livre de
              julgamentos, onde cada sessão é um passo em direção à sua melhor
              versão.
            </p>
          </div>

          <div className="mt-8 md:mt-10 pt-6 border-t border-[var(--color-gold)]/20 text-center md:text-left">
            <p className="font-serif italic text-[var(--color-deep-blue)] text-lg md:text-xl">
              Dra. Maiara
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-gold)] mt-1 font-bold">
              CRP 11/22919
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
